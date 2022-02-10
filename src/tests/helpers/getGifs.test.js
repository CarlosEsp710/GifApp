import { getGifs } from "../../helpers/getGifs";

describe("getGifsFetch", () => {
  test("should return ten elements", async () => {
    const gifs = await getGifs("Hannibal");

    expect(gifs.length).toBe(10);
  });

  test("should return an empty array if there is no category", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
