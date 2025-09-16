#!/usr/bin/env node
import fs from "fs";
import { upload, uploadFile, uploadFolder } from "./lib/upload.js";
import autoFund from "./lib/autofund.js";

const uploadStuff = async () => {
  console.log("Connecting to irys");
  const input = process.argv[2];

  if (!input) {
    console.log("Pass in a data(File, Folder, or Text)");
    return;
  }
  
  try {
    if (fs.existsSync(input)) {
      const dataToUpload = fs.lstatSync(input);
      if (dataToUpload.isDirectory()) {
        await autoFund(input)
        uploadFolder(input);
      } else if (dataToUpload.isFile()) {
        await autoFund(input)
        uploadFile(input);
      }
    } else {
      upload(input);
    }
  } catch (error) {
    console.log("Uploading Failed", error);
  }
};

uploadStuff();
