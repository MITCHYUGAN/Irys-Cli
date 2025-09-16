import { Uploader } from "@irys/upload";
import { Ethereum } from "@irys/upload-ethereum";
import "dotenv/config";

const getIrysUploader = async () => {
  const rpc = "https://ethereum-sepolia-rpc.publicnode.com";
  const irys = await Uploader(Ethereum)
    .withWallet(process.env.PRIVATE_KEY)
    .withRpc(rpc)
    .devnet()
  return irys;
};

export default getIrysUploader;
