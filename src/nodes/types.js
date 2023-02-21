import os from "os";
import fs from "fs";

export const isWindow = () => os.type().toUpperCase().startsWith("WINDOWS");
export const isFileExist = (filePath) => {
  try {
    const fileStat = fs.statSync(filePath);
    return fileStat.isFile();
  } catch (err) {
    return false;
  }
};

export const isDirExist = (dirPath) => {
  try {
    const fileStat = fs.statSync(dirPath);
    return fileStat.isDirectory();
  } catch (err) {
    return false;
  }
};
