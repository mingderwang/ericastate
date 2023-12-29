import {
  describe,
  expect,
  test,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} from "bun:test";

import { render, screen, act } from "@testing-library/react";
import HiddenMessage from "../hidden-message";

describe("App", async () => {
  test("shows the children when the checkbox is checked", async () => {
    const testMessage = "Test Message";
    await act(async () => {
      render(<HiddenMessage>{testMessage}</HiddenMessage>);
      expect(screen.queryByText(testMessage)).toBeNull();
    });
  });
});
