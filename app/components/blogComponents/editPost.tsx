"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter, useSearchParams } from "next/navigation";
import { RotatingTriangles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
const EditBlog = () => {
  const notify = (arg: string) => toast(arg);
  const [saveLoading, setSaveLoading] = useState(false);
  const navigate = useRouter();
  const router: any = useSearchParams();
  const postId = router.get("id");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState("");

  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result && post) {
        setPost({ ...post, coverImg: reader.result as string });
      }
    };
  };
  const docRef = doc(db, "blogPosts", postId);

  const handleUpdateBlog = async () => {
    setError("");
    setSaveLoading(true);
    if (post) {
      const lowerCaseText = post.title.toLowerCase();
      const slug = lowerCaseText.replace(/[^a-z0-9-]+/g, "-");
      await setDoc(docRef, { ...post, slug })
        .then(() => {
          setSaveLoading(false);
          notify("Blog Updated");
          navigate.push("/blog/");
        })
        .catch((e) => {
          console.log("ERROR", e);
          setError("Cover Image file size too large");
          setSaveLoading(false);
        });
    }
  };

  const getPost = async () => {
    setLoading(true);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const res = docSnap.data() as IPost;

      setPost(res);

      setLoading(false);
    } else {
      notify("Post Not Found");
    }
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, [router]);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <RotatingTriangles
            visible={true}
            height="200"
            width="200"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        </div>
      ) : post ? (
        <div className=" flex items-center flex-col mb-20">
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <div className="h-full w-[90%]">
            <form method="POST" className="h-full flex flex-col">
              <span style={{ fontWeight: "700" }}>Post Cover Image</span>
              {post.coverImg && (
                <Image
                  width={100}
                  height={100}
                  src={post.coverImg}
                  alt="cover_img_preview"
                  id="cover_image_preview"
                  style={{ width: "10%" }}
                />
              )}
              <input
                className="w-full"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={(e: any) => handleChange(e.target.files[0])}
              />
              <span>Title</span>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={(e) => {
                  setPost({ ...post, title: e.target.value });
                }}
                className="border-2 h-[3rem] p-2 mb-10"
              />
              <span>Excerpt</span>
              <input
                type="text"
                name="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="border-2 h-[3rem] p-2 mb-10"
              />

              <h1>Content</h1>
              <ReactQuill
                theme="snow"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e })}
                className="mb-20 h-[25rem] blogFontFamily"
                modules={{
                  toolbar: {
                    container: [
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline", "strike", "code"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["image", "link", "code-block"],
                      [
                        {
                          color: [
                            "#000000",
                            "#e60000",
                            "#ff9900",
                            "#ffff00",
                            "#008a00",
                            "#0066cc",
                            "#9933ff",
                            "#ffffff",
                            "#facccc",
                            "#ffebcc",
                            "#ffffcc",
                            "#cce8cc",
                            "#cce0f5",
                            "#ebd6ff",
                            "#bbbbbb",
                            "#f06666",
                            "#ffc266",
                            "#ffff66",
                            "#66b966",
                            "#66a3e0",
                            "#c285ff",
                            "#888888",
                            "#a10000",
                            "#b26b00",
                            "#b2b200",
                            "#006100",
                            "#0047b2",
                            "#6b24b2",
                            "#444444",
                            "#5c0000",
                            "#663d00",
                            "#666600",
                            "#003700",
                            "#002966",
                            "#3d1466",
                          ],
                        },
                      ],
                    ],
                    // handlers: {
                    //   image: this.imageHandler,
                    // },
                  },
                }}
              />
              <h1>Status</h1>
              <select
                onChange={(e) => {
                  setPost({ ...post, status: e.target.value });
                }}
                value={post.status}
                className="border-2 h-[3rem] p-2 mb-10"
              >
                <option value="draft">draft</option>
                <option value="publish">publish</option>
              </select>

              <span className="text-[orangered] my-2">{error}</span>
              <input
                disabled={saveLoading}
                type="submit"
                value={saveLoading ? "saving..." : "Save"}
                className="cursor-pointer border-2 bg-green-500 text-xl font-bold my-3 rounded-md p-5"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdateBlog();
                }}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
          <h1>POST WASN&apos;T FOUND</h1>
        </div>
      )}
    </>
  );
};

export default EditBlog;
