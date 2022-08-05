//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract EnergyShard {
    struct LENDER {
        address lender_address;
        uint maxUnitsPerDay;
        bool hasHitMaxQuota;
        uint currentUnitsLeft;
        uint nextQueryTime;
    }

    uint costPerUnit = 0.001 ether;
    uint baseFee = 0.001 ether;
    mapping(address => LENDER) unitsBalance;
    mapping(address => bool) isUserPresent;
    address owner;

    event TransferUnit(
        address indexed lender,
        address indexed borrower,
        uint units,
        uint price,
        uint timestamp
    );

    event LentUnits(address indexed lender, uint units);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can perform this task!");
        _;
    }

    function changeUserMaxQuota(uint maxUnits) public {
        require(isUserPresent[msg.sender], "User Does not exist!");
        unitsBalance[msg.sender].maxUnitsPerDay = maxUnits;
    }

    function lendUnits(address lender_addr, uint units) public {
        uint eventUnits;
        require(lender_addr == msg.sender, "Cannot Perform this action");
        require(units > 0, "Units cannot be 0");
        require(
            !unitsBalance[lender_addr].hasHitMaxQuota,
            "Cannot Lend more Energy"
        );
        require(
            block.timestamp > unitsBalance[lender_addr].nextQueryTime,
            "Per day Quota Ended (Cannot transfer more energy)"
        );

        if (unitsBalance[lender_addr].nextQueryTime < block.timestamp) {
            unitsBalance[lender_addr].hasHitMaxQuota = false;
        }

        if (!isUserPresent[lender_addr]) {
            isUserPresent[lender_addr] = true;
            LENDER memory lender;
            lender.lender_address = lender_addr;
            lender.maxUnitsPerDay = 10;
            if (units >= lender.maxUnitsPerDay) {
                lender.currentUnitsLeft = lender.maxUnitsPerDay;
                lender.hasHitMaxQuota = true;
                lender.nextQueryTime = block.timestamp + 1 days;
            } else {
                lender.currentUnitsLeft = units;
                lender.hasHitMaxQuota = false;
            }
            unitsBalance[lender_addr] = lender;
            eventUnits = lender.currentUnitsLeft;
        } else if (
            (unitsBalance[lender_addr].currentUnitsLeft + units) >
            unitsBalance[lender_addr].maxUnitsPerDay
        ) {
            unitsBalance[lender_addr].currentUnitsLeft = unitsBalance[
                lender_addr
            ].maxUnitsPerDay;
            unitsBalance[lender_addr].hasHitMaxQuota = true;
            unitsBalance[lender_addr].nextQueryTime = block.timestamp + 1 days;
            eventUnits = unitsBalance[lender_addr].currentUnitsLeft;
        } else {
            unitsBalance[lender_addr].currentUnitsLeft += units;
            if (
                unitsBalance[lender_addr].currentUnitsLeft ==
                unitsBalance[lender_addr].maxUnitsPerDay
            ) {
                unitsBalance[lender_addr].hasHitMaxQuota = true;
                unitsBalance[lender_addr].nextQueryTime =
                    block.timestamp +
                    1 days;
                eventUnits = unitsBalance[lender_addr].currentUnitsLeft;
            }
        }
        emit LentUnits(lender_addr, eventUnits);
    }

    function getUserDetails(address addr) public view returns (LENDER memory) {
        return unitsBalance[addr];
    }

    function buyUnits(
        address lender,
        address borrower,
        uint units
    ) public payable {
        // the money is sent by the borrower
        uint price = units * costPerUnit;
        require(msg.value >= (baseFee + price), "Insufficient Value sent");
        require(
            unitsBalance[lender].currentUnitsLeft >= units,
            "lender doesn't have enough energy"
        );
        // 1/ reduce the currentUnits left by units
        unitsBalance[lender].currentUnitsLeft -= units;
        // 2/ Transfer the price to the lendererDF
        payable(lender).transfer(price);
        emit TransferUnit(lender, borrower, units, price, block.timestamp);
    }
}
