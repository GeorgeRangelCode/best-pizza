import { useEffect, useContext, useState } from "react";
import Context from "../Context";
import { StoreListService } from "../service/StoreListService";

export const useGetStoreList = () => {
  const {
    loading,
    error,
    storeList,
    setLoading,
    setError,
    setStoreList,
  } = useContext(Context);

  const [query, setQuery] = useState("");
  const [storeSearch, setStoreSearch] = useState([]);

  const getStoreList = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await StoreListService();
      setStoreList(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const result = storeList.filter((store) => {
      return `${store.name}`.toLowerCase().includes(query.toLowerCase());
    });
    setStoreSearch(result);
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    getStoreList();
  }, []);

  return { loading, error, query, storeList, storeSearch, handleSearch };
};
