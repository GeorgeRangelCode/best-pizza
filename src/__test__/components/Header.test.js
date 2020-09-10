import React from "react";
import { Header } from "../../components/Header";
import { shallow } from "enzyme";

describe("<Header />", () => {
  test("render del componente Header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1);
  });
});
