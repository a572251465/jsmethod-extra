import { backPosCut, isEmpty, mergePathOnSymbol } from "../common/index";
import { isDirExist, isFileExist, isWindow } from "./types";
import { execAsync } from "./exec";
import fs from "fs";

const sureDirForWindow = async (currPath, basePath) => {
  const paths = currPath.split("/");

  let extendPath = basePath;
  paths.forEach((dirName) => {
    const newPath = mergePathOnSymbol("/", extendPath, dirName);
    if (!isDirExist(newPath)) fs.mkdirSync(newPath);
    extendPath = newPath;
  });
};

const sureDirForLinux = async (currPath, basePath) => {
  await execAsync(`mkdir -p ${currPath}`, { cwd: basePath });
};

/**
 *
 * @author lihh
 * @description 确定目录是否存在
 * @param currPath 表示创建的目录
 * @param basePath 基础目录
 * @param env 表示运行环境
 * @return {Promise<void>}
 */
export const sureDirAsync = async (currPath, basePath, env) => {
  if (isEmpty(currPath)) throw new Error("currPath must be a string");
  if (isEmpty(basePath)) throw new Error("basePath must be a string");
  if (!isDirExist(basePath)) throw new Error("basePath must be a dir");

  if (currPath.startsWith("/")) currPath = backPosCut(currPath, -2);
  if (isFileExist(mergePathOnSymbol("/", basePath, currPath)))
    throw new Error("currPath must be a dir");

  if (isEmpty(env)) env = isWindow() ? "window" : "linux";

  env === "linux"
    ? await sureDirForLinux(currPath)
    : await sureDirForWindow(currPath);
};
