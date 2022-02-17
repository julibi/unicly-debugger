require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config = {
  networks: {
    hardhat: {},
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.3',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  }
};

if (process.env.RPC_URI && process.env.RINKEBY_PRIVATE_KEY) {
  config.networks.rinkeby = {
    accounts: [process.env.RINKEBY_PRIVATE_KEY],
    url: process.env.RPC_URI,
    throwOnTransactionFailures: true,
    throwOnCallFailures: true,
    allowUnlimitedContractSize: true,
    blockGasLimit: 0x1fffffffffffff,
  };
}

module.exports = config;