import { addDoc, collection } from "firebase/firestore";
import { db } from "..";
const postsCollectionRef = collection(db, "blogPosts");
export const createPost = async (
  title: string,
  excerpt: string,
  postContentValue: string,
  coverImg: any,
  status: string,
  slug: string
) => {
  await addDoc(postsCollectionRef, {
    title,
    excerpt,
    content: postContentValue,
    coverImg,
    status,
    slug,
  });
  return "success";
};

export const LOGIN = {
  NAME: "",
  PASSWORD: "",
};
