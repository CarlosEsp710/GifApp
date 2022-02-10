import React from "react";
import { shallow } from "enzyme";

import { AddCategory } from "../../components/AddCategory";

describe("AddCategory", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test("should return component <AddCategory/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the input text", () => {
    const input = wrapper.find("input");
    const value = "Hello World";
    input.simulate("change", { target: { value } });
  });

  test("should not send data with submit if there is no inputValue", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });

  test("should send data with submit if there is inputValue", () => {
    const value = "Hello World";

    const input = wrapper
      .find("input")
      .simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
