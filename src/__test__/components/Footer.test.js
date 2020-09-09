import React from "react";
import { Footer } from "../../components/Footer";
import { shallow } from "enzyme";

describe("<Footer />", () => {
  test("render del componente Footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toEqual(1);
  });
});
