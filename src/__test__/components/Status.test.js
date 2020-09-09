import React from "react";
import { Status } from "../../components/Status";
import { mount } from "enzyme";

describe("<Status />", () => {
  test("render del componente Status", () => {
    const title = "Cargando...";
    const wrapper = mount(<Status title={title} />);
    expect(wrapper.length).toEqual(1);
  });
});
