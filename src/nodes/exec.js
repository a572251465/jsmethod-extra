import { isFunction, isObject, isString } from "../co";

const childProcess = require("child_process");

const basicsOptions = {
  cwd: process.cwd()
};

export const exec = (...args) => {
  let command, callback, options;
  if (args.length >= 1) command = args[0];
  if (args.length >= 2) {
    if (typeof args[1] === "function") {
      callback = args[1];
    } else {
      options = args[1];
    }
    if (args.length >= 3) options = args[2];

    if (!isString(command)) throw new Error("Command must be a string");
    if (callback) {
      if (!isFunction(callback)) throw new Error("Callback must be a function");
    } else {
      callback = () => {};
    }
    if (options) {
      if (!isObject(options)) throw new Error("Options must be an object");
    } else {
      options = Object.assign({}, basicsOptions, options);
    }

    childProcess.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        callback(error, stdout, stderr);
      } else {
        callback(null, stdout);
      }
    });
  }
};

export const execAsync = (command, options) => {
  return new Promise((resolve, reject) => {
    const callback = (...args) => {
      if (args[0]) return reject(args[0]);
      resolve(args[1]);
    };
    try {
      exec(command, callback, options || {});
    } catch (error) {
      reject(error);
    }
  });
};
