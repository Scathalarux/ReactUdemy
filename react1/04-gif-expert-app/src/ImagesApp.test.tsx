import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { ImagesApp } from "./ImagesApp";


describe("ImagesApp", () => {
  test("Should render component properly", () => {
    const { container } = render(<ImagesApp />);
    expect(container).toMatchSnapshot();
  });
});
