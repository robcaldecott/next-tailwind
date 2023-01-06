import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, expect, vi } from "vitest";
import "whatwg-fetch";

expect.extend(matchers);

// beforeAll(() => {
//   setLogger({
//     error: () => vi.fn(),
//     log: (...args) => console.log(...args),
//     warn: (...args) => console.log(...args),
//   });
// });

afterEach(cleanup);
