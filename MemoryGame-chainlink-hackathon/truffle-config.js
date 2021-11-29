const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const mnemonic = process.env.REACT_APP_MNEMONIC;
const url = process.env.REACT_APP_RPC_URL;
module.exports = {
  networks: {
    rinkeby: {
      network_id: 4,
      provider: () => {
        return new HDWalletProvider(mnemonic, url);
      },
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id 1337
    },
    wsl: {
      host: "172.18.192.1",
      port: 8545,
      network_id: "*", // Match any network id 1337
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    // truffle migrate --reset --compile-all
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
