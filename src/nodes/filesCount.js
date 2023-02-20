import { isString } from "../co";
import { execAsync } from "./exec";
import { isWindow } from "./types";
import fs from "fs";
import * as path from "path";

/**
 * @author lihh
 * @description 针对window下获取指定文件个数
 * @param {string} currPath 当前路径
 * @return {Promise<number>}
 */
const filesCountForWindow = async (currPath) => {
  let fileCount = 0;
  const dirStat = fs.statSync(currPath);
  if (dirStat.isFile()) return fileCount;

  const files = fs.readdirSync(currPath);
  files.forEach((fileName) => {
    const newPathStat = fs.statSync(path.join(currPath, fileName));
    if (newPathStat.isFile()) fileCount++;
  });

  return fileCount;
};

/**
 * @author lihh
 * @description 针对Linux下获取指定文件个数
 * @param {string} currPath 当前路径
 * @return {Promise<void>}
 */
const filesCountForLinux = async (currPath) => {
  return await execAsync(`ls -l | wc -l`, {
    cwd: currPath
  });
};

export const currFilesCountAsync = async (currPath) => {
  if (!isString(currPath)) throw new Error("currPath must be a string");

  const result = await (isWindow()
    ? filesCountForWindow(currPath)
    : filesCountForLinux(currPath));

  return result;
};

export const currDirsCountAsync = (currPath) => {
  console.log(currPath);
};
