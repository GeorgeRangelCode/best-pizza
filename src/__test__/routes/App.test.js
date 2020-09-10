import React from "react";
import {
  App,
  PrivateRouteStorePage,
  PrivateRouteStoreDetail,
} from "../../routes/App";
import { shallow } from "enzyme";
import { StorePage } from "../../pages/StorePage";
import { StoreDetail } from "../../pages/StoreDetail";

describe("<App />", () => {
  test("render del componente App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
  test("render del componente PrivateRouteStorePage", () => {
    const wrapper = shallow(
      <PrivateRouteStorePage component={StorePage} authed="authenticated" />
    );
    expect(wrapper.length).toEqual(1);
  });

  test("render del componente PrivateRouteStoreDetail", () => {
    const wrapper = shallow(
      <PrivateRouteStoreDetail component={StoreDetail} authed="authenticated" />
    );
    expect(wrapper.length).toEqual(1);
  });
});
