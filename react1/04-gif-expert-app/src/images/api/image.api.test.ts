import { describe, expect, test } from "vitest";
import {ImageApi} from './image.api.ts';

describe("image.api", () => {
  test("Should be configured correctly", () => {
    expect(ImageApi.defaults.baseURL).toBe('https://boringapi.com/api/v1/');
  });
});
