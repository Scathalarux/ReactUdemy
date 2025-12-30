import { describe, expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useImages } from "./useImages";
import * as imageActions from "../actions/get-images-by-query.action";

describe("useImages", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useImages());

    expect(result.current.images.length).toBe(0);
    expect(result.current.searches.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handlePrevSearchClick).toBeDefined();
  });

  test("should return a list of images", async () => {
    const { result } = renderHook(() => useImages());
    await act(async () => {
      await result.current.handleSearch("two");
    });

    expect(result.current.images.length).toBeLessThanOrEqual(10);
  });

  test("should return a list of images when handlePrevSearchClick is called", async () => {
    const { result } = renderHook(() => useImages());

    await act(async () => {
      await result.current.handlePrevSearchClick("two");
    });

    expect(result.current.images.length).toBeLessThanOrEqual(10);
  });

  test("should return a list of images from cache when handlePrevSearchClick is called", async () => {
    const { result } = renderHook(() => useImages());

    //Llamamos una primera vez para que se almacene en cache
    await act(async () => {
      await result.current.handlePrevSearchClick("two");
    });

    expect(result.current.images.length).toBeLessThanOrEqual(10);

    //Modificamos la llamada para que emita un error y detectar cuando no hace alusión a la cache ya estando almacenada en la misma
    vi.spyOn(imageActions, "getImagesByQuery").mockRejectedValue(
      new Error("It's not reading from cache")
    );

    //volvemos a llamar para que entre por la cache
    await act(async () => {
      await result.current.handlePrevSearchClick("two");
    });

    expect(result.current.images.length).toBeLessThanOrEqual(10);
  });

  test("should return no more than 8 previous terms", async () => {
    const { result } = renderHook(() => useImages());

    //para que resuelva exitosamente
    vi.spyOn(imageActions, "getImagesByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("cute1");
    });
    await act(async () => {
      await result.current.handleSearch("cute2");
    });
    await act(async () => {
      await result.current.handleSearch("cute3");
    });
    await act(async () => {
      await result.current.handleSearch("cute4");
    });
    await act(async () => {
      await result.current.handleSearch("cute5");
    });
    await act(async () => {
      await result.current.handleSearch("cute6");
    });
    await act(async () => {
      await result.current.handleSearch("cute7");
    });
    await act(async () => {
      await result.current.handleSearch("cute8");
    });
    await act(async () => {
      await result.current.handleSearch("cute9");
    });

    //comprobamos que estén dentro del límite
    expect(result.current.searches.length).toBe(8);

    //comprobamos que sean los últimos 8
    expect(result.current.searches).toStrictEqual([
      "cute9",
      "cute8",
      "cute7",
      "cute6",
      "cute5",
      "cute4",
      "cute3",
      "cute2",
    ]);
  });

  test("should return an empty list if term is empty", async () => {
    const { result } = renderHook(() => useImages());
    await act(async () => {
      await result.current.handleSearch("");
    });

    expect(result.current.images.length).toBe(0);
  });

  test("should return an empty list if term is duplicated", async () => {
    const { result } = renderHook(() => useImages());
    await act(async () => {
      await result.current.handleSearch("two");
    });

    expect(result.current.images.length).toBeLessThanOrEqual(10);

    await act(async () => {
      await result.current.handleSearch("two");
    });

    expect(result.current.images.length).toBe(0);
  });
});
