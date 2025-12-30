import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Test title";
  test("Should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test("Should render the description when provided", () => {
    const subtitle = "Test descripcion";

    render(<CustomHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(subtitle)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(subtitle);
  });

  test("Should not render description when not provided (option Lara)", () => {
    //container = render()
    const { container } = render(<CustomHeader title={title} />);
    expect(container.getElementsByTagName("p").length).toBe(0);
  });

  test("Should not render description when not provided (option 2)", () => {
    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector(".content-center");

    const p = divElement?.querySelector("p");
    expect(p).toBeNull();
  });
});
