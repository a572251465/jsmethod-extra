import { describe, expect, test } from "@jest/globals";

import { useState } from "../src/index";

describe("useState", () => {
  test("useState", () => {
    const [state, setState] = useState(1);

    setState(3);
    expect(state.current).toBe(3);

    setState(undefined);
    expect(state.current).toBe(undefined);
  });
});
