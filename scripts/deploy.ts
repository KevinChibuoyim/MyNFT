import { ethers } from "hardhat";

async function main() {
 
  const URI = "ipfs://QmWpcNrUhtSSX3S2ddr6yH3b6wLc6KaALyuGiCqbqzfLpK";
  const [deployer] = await ethers.getSigners();

  console.log(`Address Deploying the contract: ${deployer.address}`)

  const MyNFT = await ethers.getContractFactory("EzemmuoBlockchain");
  const myNft = await MyNFT.deploy();

  // Minting the NFT to the deployer

  await myNft.connect(deployer).safeMint(deployer.address, 0, URI);

  await myNft.deployed();

  console.log(
    `NFT Token Contract Address: ${myNft.address}`
  );
}

//Deployed NFT Contract Address: 0xa38E0064a0aA1FDb03f1D3eDB6B4b334773F3156
//Txn hash on Rinkeby Etherscan: https://rinkeby.etherscan.io/address/0xa38E0064a0aA1FDb03f1D3eDB6B4b334773F3156
//Opensea NFT link: https://testnets.opensea.io/assets/rinkeby/0xa38E0064a0aA1FDb03f1D3eDB6B4b334773F3156/0

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
