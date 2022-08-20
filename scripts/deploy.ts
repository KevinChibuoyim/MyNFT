import { ethers } from "hardhat";

async function main() {
 
  const URI = "ipfs://QmabyQ5jfXzMawFXNaZ76LA8RzNzfhy4bCqnWAKzNCR7e7";
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

//Deployed NFT Contract Address: 0xf3f23d7DF207B339d2887605cE4F3AD8A0e353c9
//Txn hash on Etherscan: https://rinkeby.etherscan.io/address/0xf3f23d7DF207B339d2887605cE4F3AD8A0e353c9
//Opensea NFT link: https://testnets.opensea.io/assets/rinkeby/0xf3f23d7df207b339d2887605ce4f3ad8a0e353c9/0

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
