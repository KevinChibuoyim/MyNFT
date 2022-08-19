import { ethers } from "hardhat";

async function main() {
  
//   const CONTRACT_ADDR = "0xc282D1dc943b3d690D55434f616c9Cfc925166bB";
//   const Receiver_Addr = "0x70cb398f3458dB6CAd9A64d443e0B36FEa8A0431";
// //   const URI = "ipfs://QmabyQ5jfXzMawFXNaZ76LA8RzNzfhy4bCqnWAKzNCR7e7";


//   const setNFT = await ethers.getContractAt("ImyNFT", CONTRACT_ADDR);
//        await setNFT.safeMint(Receiver_Addr, 0, URI);

       

  const MyNFT = await ethers.getContractFactory("NFT");
  const myNft = await MyNFT.deploy();

  await myNft.deployed();

  console.log(
    `Minted my NFT to: ${myNft.address}`
  );
}

// Deployed Contract Address: 0xc282D1dc943b3d690D55434f616c9Cfc925166bB

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
