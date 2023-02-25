import { execAsync } from "./exec";
import { isDirExist, isWindow } from "./types";
import fs from "fs";
import path from "path";
import { isEmpty, isString } from "../common/index";

/**
 * @author lihh
 * @description 针对Linux下获取文件夹个数
 * @param {string} currPath 当前路径
 * @return {Promise<void>}
 */
const dirsCountForLinux = async (currPath) => {
  return await execAsync(`ls -l | grep "^d" | wc -l`, {
    cwd: currPath
  });
};

/**
 * @author lihh
 * @description 针对window下获取指定文件夹
 * @param {string} currPath 当前路径
 * @return {Promise<number>}
 */
const dirsCountForWindow = async (currPath) => {
  let dirCount = 0;
  if (!isDirExist(currPath)) return dirCount;

  const files = fs.readdirSync(currPath);
  files.forEach((fileName) => {
    // 判断是否是隐藏文件夹
    if (fileName.startsWith(".")) return;

    const newPathStat = fs.statSync(path.join(currPath, fileName));
    if (newPathStat.isDirectory()) dirCount++;
  });

  return dirCount;
};

/**
 * @author lihh
 * @description 获取指定目录下 文件夹个数
 * @param currPath
 * @param env
 * @return {Promise<Promise<void>|Promise<number>>}
 */
export const currDirsCountAsync = async (currPath, env) => {
  if (!isString(currPath)) throw new Error("currPath must be a string");
  if (isEmpty(env)) env = isWindow() ? "window" : "linux";

  const result = await (env === "linux"
    ? dirsCountForLinux(currPath)
    : dirsCountForWindow(currPath));

  return result;
};
