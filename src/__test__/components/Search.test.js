import React from "react";
import { Search } from "../../components/Search";
import { mount } from "enzyme";

describe("<Search />", () => {
  test("render del componente Search", () => {
    const handleSearch = jest.fn();
    const wrapper = mount(<Search handleSearch={handleSearch} />);
    expect(wrapper.length).toEqual(1);
  });
});
