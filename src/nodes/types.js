import os from "os";

export const isWindow = () => os.type().toUpperCase().startsWith("WINDOWS");
