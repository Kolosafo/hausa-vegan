"use client";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { FcGlobe } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { ColorRing, RotatingTriangles } from "react-loader-spinner";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { dummyBlogs } from "@/utils/constants";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ReadBlog = () => {
  const notify = (arg: string) => toast(arg);
  const router: any = useSearchParams();
  const [loading, setLoading] = useState(true);
  const postId = router.get("id");
  const [post, setPost] = useState<IPost | null>(null);

  const docRef = doc(db, "blogPosts", postId);
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

  // useEffect(() => {
  //   const getPost = async () => {
  //     const res = await singlePostViewOnly(slugParam);
  //     if (res === 404) {
  //       setNotFound(true);
  //       return;
  //     }
  //     setTitle(res.title);
  //     setPostContentValue(res.content);
  //     setCoverImg(res.cover_image);
  //     setSlug(res.slug);
  //     setAuthorUsername(res.author);
  //     setExcerpt(res.excerpt);
  //   };
  //   getPost();
  // }, [blogSlug]);
  // useEffect(() => {
  //   authorUsername ? getUser(authorUsername) : null;
  // }, [authorUsername]);
  return (
    <>
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
      ) : !post ? (
        <div className="h-[80vh] flex justify-center items-center">
          <h1>Oops Page Does Not Exist</h1>
        </div>
      ) : (
        <>
          <div className="w-full mt-5 overflow-hidden">
            <article className="md:p-4 flex max-w-[90%] md:max-w-[90%] mx-auto relative">
              <section className="mr-4 w-full">
                <header>
                  <h1 className="text-3xl max-md:mt-4 mb-4 font-semibold text-DesatBlue">
                    {post.title}
                  </h1>
                  <div className="w-full my-5 lg:my-4 h-full  grid place-content-center rounded-md text-lg">
                    <Image
                      width={100}
                      height={100}
                      src={post.coverImg}
                      alt={post.slug}
                      className="w-1/2 md:w-3/4"
                    />
                  </div>
                </header>
                <div
                  className="blogFontFamily text-[#181b38] leading-3 flex flex-col text-lg lg:text-lg justify-center flex-1 font-normal"
                  style={{ lineHeight: "revert" }}
                >
                  {parse(post.content)}
                </div>
              </section>
              {/* <aside className="author_details basis-[35%] overflow-auto border-2 md:hidden lg:flex flex-col p-2 w-full right-0 sticky top-44 h-fit max-md:hidden">
                {!firstName ? (
                  <div className="flex w-full justify-center h-full">
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#b8c480",
                        "#B2A3B5",
                        "#F4442E",
                        "#51E5FF",
                        "#429EA6",
                      ]}
                    />
                  </div>
                ) : (
                  <div className="gap-5 flex flex-col ml-auto justify-center items-center">
                    <div className="w-3/12 md:w-2/12">
                      <Image
                        width={100}
                        height={100}
                        alt="users profile picture"
                        src={profilePic}
                        decoding="async"
                        data-nimg="1"
                        className="w-full md:w-auto rounded-[10%]"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div>
                      <span className="mr-2">{firstName}</span>
                      <span>{lastName}</span>
                    </div>
                    <span className="text-sm">{bio}</span>
                    <div className="mb-2 flex">
                      <a
                        href={portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:text-LightBlue text-DarkGray-Blue font-medium transition-colors duration-300 mx-2"
                      >
                        <FcGlobe size={25} />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:text-LightBlue text-DarkGray-Blue font-medium transition-colors duration-300"
                      >
                        <BsGithub size={25} color="black" />
                      </a>

                      <a
                        href={linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:text-LightBlue text-DarkGray-Blue font-medium transition-colors duration-300 mx-2"
                      >
                        <BsLinkedin size={25} color="Blue" />
                      </a>
                      <a
                        href={twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:text-LightBlue text-DarkGray-Blue font-medium transition-colors duration-300 mr-2"
                      >
                        <BsTwitter size={25} color="#00acee" />
                      </a>
                      <a
                        href={email}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:text-LightBlue text-DarkGray-Blue font-medium transition-colors duration-300"
                      >
                        <MdEmail size={25} color="black" />
                      </a>
                    </div>
                  </div>
                )}
              </aside> */}
            </article>
            {/* section holds breif info about author aand his socials */}
          </div>
          {/* might be unecessary deal as you see fit */}
          <footer className=" bg-PaleBlue p-8 max-md:px-4">
            {post.title && (
              <div className="max-w-[90%] md:max-w-[80%]  mx-auto">
                <div className="flex flex-col gap-8 max-sm:items-center">
                  <div>
                    <h2 className="logo font-bold text-lg text-DesatBlue mt-2 uppercase max-md:mb-8">
                      The Hausa Vegan<span className="text-LightBlue"></span>
                    </h2>
                    <p className="font-semibold mt-2 max-md:hidden">
                      Thanks for reading!
                    </p>
                  </div>
                  <p className="text-sm max-md:text-xs">
                    © 2023-present ShopName 365. All Rights Reserved.
                  </p>
                </div>
              </div>
            )}
          </footer>
        </>
      )}
    </>
  );
};

export default ReadBlog;
