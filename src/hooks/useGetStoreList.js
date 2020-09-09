import { useEffect, useContext } from "react";
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
    getStoreList();
  }, []);

  return { loading, error, storeList };
};
