const hre = require("hardhat");

async function main() {
  const BlockchainBankAccount = await hre.ethers.getContractFactory(
    "BlockchainBankAccount"
  );
  const blockchainBankAccount = await BlockchainBankAccount.deploy();

  await blockchainBankAccount.deployed();

  console.log(
    "BlockchainBankAccount deployed to:",
    blockchainBankAccount.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
