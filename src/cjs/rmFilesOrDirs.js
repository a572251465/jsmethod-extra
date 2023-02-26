import { isEmpty } from "../common";
import { isDirExist, isFileExist } from "./types";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * @author lihh
 * @description 针对Linux版本 进行文件以及文件夹删除
 * @param {*} currPath 删除的目录
 * @param {*} isFile 是否是文件
 */
const rmFilesOrDirsForLinux = async (currPath, isFile) => {
  if (isFile) {
    await execSync(`rm -rf ${currPath}`);
    return true;
  }

  await execSync(`rm -rf ${currPath}/**`);
  return true;
};

/**
 * @author lihh
 * @description 针对window版本 进行文件以及文件夹删除
 * @param {*} currPath 删除的目录
 * @param {*} isFile 是否是文件
 */
const rmFilesOrDirsForWindow = async (currPath, isFile) => {
  // 判断是否是文件
  if (isFile) {
    fs.unlinkSync(currPath);
    return true;
  }

  const dirs = fs.readdirSync(currPath);
  dirs.forEach(async (filename) => {
    const newCurrPath = path.join(currPath, filename);
    // 判断是否是文件
    const stat = fs.statSync(newCurrPath);
    // 进行递归删除
    await rmFilesOrDirsForWindow(newCurrPath, !!stat.isFile);
  });
  return true;
};

/**
 * @author lihh
 * @description 删除文件以及目录
 * @param {*} currPath 表示删除的目录
 * @param {*} env 表示运行的环境 默认是Linux
 */
export const rmFilesOrDirsAsync = async (currPath, env = "linux") => {
  if (isEmpty(currPath)) throw new Error("currPath is not empty");
  if (isFileExist(currPath) || isDirExist(currPath))
    throw new Error("currPath is file or dir");

  env = env === "linux" ? "linux" : "window";
  const isFile = !!isFileExist(currPath);
  return env === "linux"
    ? await rmFilesOrDirsForLinux(currPath, isFile)
    : await rmFilesOrDirsForWindow(currPath, isFile);
};
