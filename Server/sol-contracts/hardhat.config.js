require("@nomicfoundation/hardhat-toolbox");
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "zb_yPi4fhGCpspO2PBkmJNRKbuyrOs-A";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const RINKEBY_PRIVATE_KEY =
  "5ec9f16c0c5345de7f52ff119d9092ec7914b59715114fa311b7e2eb9e8ce6fe";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
