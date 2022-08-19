import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({path: ".env"});

import "@nomiclabs/hardhat-ethers";

/** @type import('hardhat/config').HardhatUserConfig */


const MUMBAI_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/nZEPcQ5tOOasE4DANnzgxDDOqo6IQqWH",
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};