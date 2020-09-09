import React from "react";
import { App } from "../../routes/App";
import { shallow } from "enzyme";

describe("<App />", () => {
  test("render del componente App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
