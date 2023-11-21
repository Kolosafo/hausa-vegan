import { getDocs } from "firebase/firestore";
import { productCollectionRef } from "./addProduct";
export const getProducts = async () => {
  const response = await getDocs(productCollectionRef);
  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
