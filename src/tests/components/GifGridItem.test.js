import React from "react";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem", () => {
  const title = "Title";
  const url = "url";
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should return component <GifGridItem />"', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a <p></p> with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should have a <img/> with the src and alt from the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have className animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
  });
});
