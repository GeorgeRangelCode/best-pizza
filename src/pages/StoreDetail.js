import React, { useContext } from "react";
import Context from "../Context";
import { Store } from "../components/Store";
import { Redirect } from "react-router-dom";

export const StoreDetail = ({ location }) => {
  const id = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const { storeList } = useContext(Context);

  const storeDetail = storeList.find((store) => store.id == id);

  if (typeof storeDetail === "undefined") {
    return <Redirect to="/store" />;
  }

  return (
    <div>
      <Store
        id={storeDetail.id}
        name={storeDetail.name}
        address={storeDetail.address}
      />
    </div>
  );
};
