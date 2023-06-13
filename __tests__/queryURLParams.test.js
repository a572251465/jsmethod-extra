import { describe, expect, test } from "@jest/globals";

import { queryURLParams } from "../src/index";

const url = "http://www.baidu.com?tk=1&token=2&userId=3&systemId=4";

describe("queryURLParams", () => {
  test("queryURLParams ~~ normal", () => {
    expect(queryURLParams(url)["tk"]).toBe("1");
    expect(queryURLParams(url)["token"]).toBe("2");
    expect(queryURLParams(url)["userId"]).toBe("3");
    expect(queryURLParams(url)["systemId"]).toBe("4");
    expect(queryURLParams(url)["systemId2"]).toBe(undefined);
  });

  test("queryURLParams ~~ error", () => {
    expect(queryURLParams("http://www.baidu.com")).toStrictEqual({});
    expect(queryURLParams("")).toStrictEqual({});
    expect(queryURLParams("http://www.baidu.com?tk=")).toStrictEqual({});
  });
});
