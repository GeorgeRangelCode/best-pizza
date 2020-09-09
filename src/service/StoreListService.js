// const API = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json";
const API =
  "https://raw.githubusercontent.com/GeorgeRangelCode/best-pizza/master/src/data.json";

export const StoreListService = async () => {
  const url = API;
  const result = await fetch(url);
  const { response } = await result.json();

  return response.stores;
};
