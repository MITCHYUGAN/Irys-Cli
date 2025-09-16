import fs from "fs"
import getIrysUploader from "./irys.js";
const irys = await getIrysUploader();

const autoFund = async (input) => {
  console.log("Checking balance....");
  const balanceAtomic = await irys.getBalance();
  const balance = irys.utils.fromAtomic(balanceAtomic);

  const pathToData = input;
  const { size } = await fs.promises.stat(pathToData);
  const prizeAtomic = await irys.getPrice(size);
  const prize = irys.utils.fromAtomic(prizeAtomic);

  if (balance < prize) {
    console.log(`Insufficient Balance ${balance}. You need: ${prize}`);
    console.log(`Trying Auto Funding... ${prize}`);

    try {
      const fundTx = await irys.fund(prizeAtomic);
      console.log("Auto Fund successfully:", fundTx.id);
    } catch (error) {
      console.log(`Error when Funding: `, error);
    }
  } else {
    console.log("You have sufficient Balance: ", balance);
  }
};

export default autoFund;