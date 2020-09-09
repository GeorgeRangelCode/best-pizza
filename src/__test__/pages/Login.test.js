import React from "react";
import { Login } from "../../pages/Login";
import { shallow } from "enzyme";

describe("<Login />", () => {
  test("render del componente Login", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).toEqual(1);
  });
});
