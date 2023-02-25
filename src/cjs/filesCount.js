import { isEmpty, isString } from "../common/index";
import { execAsync } from "./exec";
import { isDirExist, isWindow } from "./types";
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
  if (!isDirExist(currPath)) return fileCount;

  const files = fs.readdirSync(currPath);
  files.forEach((fileName) => {
    // 判断是否是隐藏文件
    if (fileName.startsWith(".")) return;
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
  return await execAsync(`ls -l | grep "^-" | wc -l`, {
    cwd: currPath
  });
};

export const currFilesCountAsync = async (currPath, env) => {
  if (!isString(currPath)) throw new Error("currPath must be a string");
  if (isEmpty(env)) env = isWindow() ? "window" : "linux";

  const result = await (env === "linux"
    ? filesCountForLinux(currPath)
    : filesCountForWindow(currPath));

  return result;
};
