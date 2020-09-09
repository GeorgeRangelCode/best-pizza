import React from "react";
import { Store } from "../../components/Store";
import { shallow } from "enzyme";

describe("<Store />", () => {
  test("render del componente Store Pizzeria Capitan America", () => {
    const name = "Pizzeria Capitan America";
    const address = "Calle 1 #2-3";
    const wrapper = shallow(<Store name={name} address={address} />);
    expect(wrapper.length).toEqual(1);
  });

  test("render del componente Store Pizzeria Iron Man", () => {
    const name = "Pizzeria Iron Man";
    const address = "Calle 1 #2-3";
    const wrapper = shallow(<Store name={name} address={address} />);
    expect(wrapper.length).toEqual(1);
  });

  test("render del componente Store Pizzeria Thor", () => {
    const name = "Pizzeria Thor";
    const address = "Calle 1 #2-3";
    const wrapper = shallow(<Store name={name} address={address} />);
    expect(wrapper.length).toEqual(1);
  });

  test("render del componente Store Pizzeria Black Widow", () => {
    const name = "Pizzeria Black Widow";
    const address = "Calle 1 #2-3";
    const wrapper = shallow(<Store name={name} address={address} />);
    expect(wrapper.length).toEqual(1);
  });

  test("render del componente Store Pizzeria Spider Man", () => {
    const name = "Pizzeria Spider Man";
    const address = "Calle 1 #2-3";
    const wrapper = shallow(<Store name={name} address={address} />);
    expect(wrapper.length).toEqual(1);
  });
});
