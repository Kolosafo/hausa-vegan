import { addDoc, collection } from "firebase/firestore";
import { db } from "..";

export const productCollectionRef = collection(db, "products");
export const createProduct = async (productData: IProduct) => {
  await addDoc(productCollectionRef, productData);
  return "success";
};
