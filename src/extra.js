const commonApi = () => {
  console.warn("This method is the node method");
};
const commonApiAsync = async () => {
  console.warn("This method is the node method");
};

export const isWindow = commonApi;
export const isFileExist = commonApi;
export const isDirExist = commonApi;
export const sureDirAsync = commonApiAsync;
export const currFilesCountAsync = commonApiAsync;
export const execAsync = commonApiAsync;
export const exec = commonApiAsync;
export const currDirsCountAsync = commonApiAsync;
