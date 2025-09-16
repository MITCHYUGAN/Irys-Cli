import getIrysUploader from "./irys.js";
const irys = await getIrysUploader();

export const upload = async (input) => {
  console.log(`Uploading ${input} To Irys...`);
  const response = await irys.upload(input);
  console.log(`Uploaded successfully: https://gateway.irys.xyz/${response.id}`);
};

export const uploadFile = async (input) => {
  console.log(`Uploading ${input} To Irys...`);
  const response = await irys.uploadFile(input);
  console.log(`Uploaded successfully: https://gateway.irys.xyz/${response.id}`);
};

export const uploadFolder = async (input) => {
  console.log(`Uploading ${input} To Irys...`);
  const response = await irys.uploadFolder(input);
  console.log(`Uploaded successfully: https://gateway.irys.xyz/${response.id}`);
};
