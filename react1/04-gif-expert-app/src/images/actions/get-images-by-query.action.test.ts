import { beforeEach, describe, expect, test, vi } from "vitest";
import { getImagesByQuery } from "./get-images-by-query.action";
import AxiosMockadapter from "axios-mock-adapter";
import { ImageApi } from "../api/image.api";
import { imagesSearchResponseMock } from "../../../test/mocks/image.response.data";

describe("getImagesByQuery", () => {
  //llamar a instancia del mock
  let mock = new AxiosMockadapter(ImageApi);
  beforeEach(() => {
    //mock.reset();
    mock = new AxiosMockadapter(ImageApi);
  });

  /*test("Should return a list of images", async () => {
    const images = await getImagesByQuery("two");
    const [img1] = images;

    expect(images.length).toBeLessThanOrEqual(10);

    expect(img1).toStrictEqual({
      file_size: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      height: expect.any(Number),
      updated_at: expect.any(String),
      id: expect.any(Number),
      width: expect.any(Number),
      created_at: expect.any(String),
      url: expect.any(String),
    });
  });*/

  test("Should return a list of images", async () => {
    //cuando se hace una petición get se puede sobreescribir el endpoint
    mock.onGet("photos/").reply(200, imagesSearchResponseMock);

    const images = await getImagesByQuery("two");

    expect(images.length).toBeLessThanOrEqual(10);
    images.forEach((image) => {
      expect(typeof image.id).toBe("number");
      expect(typeof image.file_size).toBe("number");
      expect(typeof image.title).toBe("string");
      expect(typeof image.description).toBe("string");
      expect(typeof image.height).toBe("number");
      expect(typeof image.updated_at).toBe("string");
      expect(typeof image.width).toBe("number");
      expect(typeof image.created_at).toBe("string");
      expect(typeof image.url).toBe("string");
    });
  });

  test("Should return an empty list of images if query is empty", async () => {
    //cuando se hace una petición get se puede sobreescribir el endpoint
    //mock.onGet("photos/").reply(200, imagesSearchResponseMock);

    //restaura la instancia (es algo más realista)
    mock.restore();
    const images = await getImagesByQuery("");

    expect(images.length).toBe(0);
  });

  test("Should handle error when the API returns an error", async () => {
    //espía para sobreescribir el console.error
    //const consoleErrorSpy = vi.spyOn(console, "error");
    //para que no salga en consola -> fn que sustituye
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {
        console.log("*** Aquí hay un error");
      });
    //petición
    mock.onGet("photos/").reply(400, {
      data: {
        message: "Bad Request",
      },
    });
    const images = await getImagesByQuery("two");

    expect(images.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});
