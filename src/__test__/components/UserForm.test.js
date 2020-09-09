import React from "react";
import { UserForm } from "../../components/UserForm";
import { shallow } from "enzyme";

describe("<UserForm />", () => {
  test("render del componente UserForm", () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper.length).toEqual(1);
  });
});
