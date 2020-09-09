import React from "react";
import { StoreList } from "../../components/StoreList";
import { mount } from "enzyme";

describe("<StoreList />", () => {
  test("render del componente StoreList", () => {
    const storeList = [
      {
        id: 1,
        name: "Pizzeria Capitan America",
        address: "Calle 1 #2-3",
        description: "Esta pizzeria se especializa en ingredientes salados",
      },
    ];
    const wrapper = mount(<StoreList storeList={storeList} />);
    expect(wrapper.length).toEqual(1);
  });
});
