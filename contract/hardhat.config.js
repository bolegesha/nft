require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.18",
  networks: {
    bnbtestnet: {
      url: "https://cool-sly-county.bsc-testnet.discover.quiknode.pro/6424b90e72571bc7d2f2451bb1b4e34ba7908163/", //RPC from my quicknode
      accounts: ["a0f5b16d433e71e22ad437690653e1f19912cdf0e3298e8df51cf3345eb8234b"],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "tSOgXgCsitHjkHJK3UUzR0hRTvhm7jtJ", // your Etherscan API key
  },

};