import React from "react";
import { Layout } from "../../components/Layout";
import { shallow } from "enzyme";

describe("<Layout />", () => {
  test("render del componente Layout", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.length).toEqual(1);
  });
});
