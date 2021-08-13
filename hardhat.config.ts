import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-waffle'

const dotenv = require("dotenv")
dotenv.config()



export default {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.6", settings: { optimizer: { enabled: true }}}],
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/nLpJu-dVzP5svq60cv-WDIRwVr_3vTQ3`,
        blockNumber: 12811541
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/c44fac7726a64d5bbbb3a1c51f02d75b`,
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/nLpJu-dVzP5svq60cv-WDIRwVr_3vTQ3`,
      accounts: [process.env.ROPSTEN_DEPLOY_ACCOUNT]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/c44fac7726a64d5bbbb3a1c51f02d75b`,
      accounts: [process.env.ROPSTEN_DEPLOY_ACCOUNT]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/c44fac7726a64d5bbbb3a1c51f02d75b`,
      accounts: [process.env.ROPSTEN_DEPLOY_ACCOUNT]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/c44fac7726a64d5bbbb3a1c51f02d75b`,
      accounts: [process.env.ROPSTEN_DEPLOY_ACCOUNT]
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  gasReporter: {
    currency: 'CHF',
    gasPrice: 21,
    enabled: (process.env.REPORT_GAS) ? true : false
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 150000
  },
}
