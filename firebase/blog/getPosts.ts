import { getDocs, collection } from "firebase/firestore";
import { db } from "..";
const postsCollectionRef = collection(db, "blogPosts");
export const getPosts = async () => {
  const response = await getDocs(postsCollectionRef);
  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
