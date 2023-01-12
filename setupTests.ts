import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, expect, vi } from "vitest";
import "whatwg-fetch";

expect.extend(matchers);

afterEach(cleanup);
