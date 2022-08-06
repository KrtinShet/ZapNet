const User = require("../Models/userModel");
const Transaction = require("./../Models/transactionModel");
const catchAsync = require("./../../utils/catchAsync");
const { default: mongoose } = require("mongoose");

//////////////////////// USERS  //////////////////////////////////

exports.getUser = catchAsync(async (req, res) => {
  let userMe = await User.findById(req.params.id).populate("Transactions");
  res.json({
    status: "success",
    user: userMe,
  });
});
exports.getAllUser = catchAsync(async (req, res) => {
  const user = await User.find();
  res.json({
    status: "success",
    user,
  });
});

exports.createUser = catchAsync(async (req, res) => {
  const { smartMeterID, microGridID, walletAddress } = req.body;
  let newUser = await User.create({
    smartMeterID,
    microGridID,
    walletAddress,
  });
  res.json({
    status: "success",
    user: newUser,
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  const { transactions } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    {
      walletAddress: req.params.id,
    },
    {
      transactions,
    }
  );
  res.json({
    status: "success",
    user: updatedUser,
  });
});

//////////////////////// TRANSACTIONS  //////////////////////////////////+

exports.getAllTransactions = catchAsync(async (req, res) => {
  const transactions = await Transaction.find();
  res.json({
    status: "success",
    transactions,
  });
});

exports.getTransaction = catchAsync(async (req, res) => {
  const transactions = await Transaction.find();
  res.json({
    status: "success",
    transactions,
  });
});

exports.createTransaction = catchAsync(async (req, res) => {
  const { lender, borrower, units, price, time } = req.body;
  const transaction = await Transaction.create({
    lender,
    borrower,
    units,
    price,
    time,
  });
  res.json({
    status: "success",
    transaction,
  });
});

//////////////////////// OTHERS  //////////////////////////////////
exports.buyUnits = async (req, res) => {
  /**
   * 1/ send the money from frontend and recieve the hash of the transaction
   * 2/ wait for the transaction to get completed
   *
   *
   *   ////   NOTE: step 1 and 2 can be done in the front end
   *
   *
   * 3/ create a transaction Entry to the database
   * 4/ update the user data
   *       i) update user's currentUnitLeft
   *      ii) update uers's totalUnitsLent
   *     iii) perDayLentUnits
   *
   *
   * 5/ send the response back to the frontend
   */

  const { transactionHash, lender, borrower, units, price, time } = req.body;

  const transaction = await Transaction.create({
    lender,
    borrower,
    units,
    price,
    time,
    hash: transactionHash,
  });

  const lenderUser = await User.findOneAndUpdate(
    { walletAddress: lender },
    {
      currentUnitsLeft: currentUnitsLeft - units,
      perDayLentUnits: perDayLentUnits + units,
      totalUnitsLent: totalUnitsLent + units,
      transactions: [transaction.id],
    }
  );

  res.json({
    status: "success",
    user: lenderUser,
    transaction,
  });
};

exports.sellUnits = async (req, res) => {
  /**
   * 1/ send the money from frontend and recieve the hash of the transaction
   * 2/ wait for the transaction to get completed
   *
   *
   * ////   NOTE: step 1 and 2 can be done in the front end  ///////
   *
   * 3/ create a transaction Entry to the database
   * 4/ update the user data
   * 5/ send the response back to the frontend
   *
   *
   */

  const { lender, units, transactionHash } = req.body;
  const transaction = Transaction.create({
    lender,
    units,
    hash: transactionHash,
    transactionType: "borrow",
  });
  const updatedLender = await User.findOneAndUpdate(
    { walletAddress: lender },
    {
      currentUnitsLeft: currentUnitsLeft + units,
      transactions: [(await transaction).id],
    }
  );

  res.json({
    status: "success",
    user: updatedLender,
    transaction,
  });
};
