import React from "react";
import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("GifGrid", () => {
  const category = "Hannibal";

  test("should return component <GifGrid/>", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should return <GifGridItem/> list when data is loaded from useFetchGifs", () => {
    const images = [
      {
        id: "abc",
        url: "http://example.com/categoryName/image.jpg",
        title: "Some thing",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should not return the loading when data is loaded", () => {
    const images = [
      {
        id: "abc",
        url: "http://example.com/categoryName/image.jpg",
        title: "Some thing",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(images.length);
  });
});
