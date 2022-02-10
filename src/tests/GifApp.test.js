import React from "react";
import { shallow } from "enzyme";

import { GifApp } from "../GifApp";

describe("GifApp", () => {
  test("should return component <GifApp/>", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should return categories list", () => {
    const categories = ["Hannibal", "Iron Man"];
    const wrapper = shallow(<GifApp defaultCategory={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
