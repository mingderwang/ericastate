import { test, expect, jest, mock } from "bun:test";
const random = mock(() => Math.random());

test("random", async () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});

test("random with params", async () => {
  const random_with_params = mock(
    (multiplier: number) => multiplier * Math.random()
  );

  random_with_params(2);
  random_with_params(10);

  expect(random_with_params.mock.calls).toEqual([[2], [10]]);
});
