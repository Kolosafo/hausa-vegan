"use client";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import { createPost } from "@/firebase/blog/createPost";
import { BackendImgLoader } from "@/app/components/navbar";
const CreateBlog = () => {
  const navigate = useRouter();
  const [saveBlog, setSaveBlog] = useState("Save");
  const [saveLoading, setSaveLoading] = useState(false);
  const [postContentValue, setPostContentValue] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImg, setCoverImg] = useState<string>("");
  const [status, setStatus] = useState("draft");
  const [error, setError] = useState("");

  const notify = (arg: any) => toast(arg);

  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setCoverImg(reader.result as string);
      }
    };
  };
  const handleSave = async () => {
    setSaveLoading(true);
    setError("");
    const lowerCaseText = title.toLowerCase();
    const slug = lowerCaseText.replace(/[^a-z0-9-]+/g, "-");
    setSaveBlog("Saving...");
    const response = await createPost(
      title,
      excerpt,
      postContentValue,
      coverImg,
      status,
      slug
    ).catch((e) => {
      console.log("ERROR", e);
      setError("Cover Image file size too large");
      setSaveLoading(false);
      setSaveBlog("Save");
    });

    if (response === "success") {
      setSaveLoading(false);
      setSaveBlog("Saved!");
      notify("BLOG CREATED");
      setTimeout(() => {
        navigate.push("/");
      }, 3000);
    }
  };

  return (
    <div className=" flex items-center flex-col mb-20 mt-20">
      <ToastContainer />

      <>
        <h1 className="text-3xl font-bold">New Post</h1>
        <div className="h-full w-[90%]">
          <form method="POST" className="h-full flex flex-col">
            <span style={{ fontWeight: "700" }}>Post Cover Image</span>
            {coverImg && (
              <Image
                width={100}
                height={100}
                src={coverImg}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 h-[3rem] p-2 mb-10"
            />
            <span>Excerpt</span>
            <input
              type="text"
              name="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="border-2 h-[3rem] p-2 mb-10"
            />

            <h1>Content</h1>
            <ReactQuill
              theme="snow"
              value={postContentValue}
              onChange={setPostContentValue}
              className="mb-20 h-[25rem]"
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
                setStatus(e.target.value);
              }}
              className="border-2 h-[3rem] p-2 mb-10"
            >
              <option value="draft">draft</option>
              <option value="publish">publish</option>
            </select>

            <span className="text-[orangered] my-2">{error}</span>
            <button
              className="blackBgOrangeHover py-3 rounded-md flex justify-center items-center"
              type="button"
              onClick={handleSave}
              disabled={saveLoading}
            >
              {saveBlog}
              {saveLoading && (
                <Oval
                  height={20}
                  width={30}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="black"
                  strokeWidth={6}
                  strokeWidthSecondary={6}
                />
              )}
            </button>
          </form>
        </div>
      </>
    </div>
  );
};

export default CreateBlog;
