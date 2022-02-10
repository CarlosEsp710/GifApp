import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("useFetchGifs", () => {
  test("should return the initState", async () => {
    const category = "Hannibal";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return image list and loading equal to false", async () => {
    const category = "Hannibal";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
