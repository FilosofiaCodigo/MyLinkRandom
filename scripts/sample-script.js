LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255"
KEY_HASH = "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4"
FEE = 0.0001 * 10 ** 18;


// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MyLinkRandom = await hre.ethers.getContractFactory("MyLinkRandom");
  const my_link_random = await MyLinkRandom.deploy(VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE);

  await my_link_random.deployed();

  console.log("MyLinkRandom deployed to:", my_link_random.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
