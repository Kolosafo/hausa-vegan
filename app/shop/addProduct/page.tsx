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
import { createProduct } from "@/firebase/shop/addProduct";
import { BackendImgLoader } from "@/app/components/navbar";
import { initializeProduct } from "@/utils/constants";
const CreateBlog = () => {
  const navigate = useRouter();
  const [product, setProduct] = useState<IProduct>(initializeProduct);
  const [saveLoading, setSaveLoading] = useState(false);
  const [error, setError] = useState("");

  const notify = (arg: any) => toast(arg);

  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result && product) {
        setProduct({ ...product, imgUrl: reader.result as string });
      }
    };
  };
  const handleSave = async () => {
    setError("");
    const uuid = crypto.randomUUID();
    if (
      product.productName !== "" &&
      product.description !== "" &&
      product.amountAvailable !== "" &&
      product.price !== "" &&
      product.category !== "" &&
      product.imgUrl !== "" &&
      product.perType !== ""
    ) {
    setSaveLoading(true);
    const response = await createProduct({ ...product, _id: uuid }).catch(
        (e) => {
          console.log("ERROR", e);
          setError("Product Image file size too large");
          setSaveLoading(false);
        }
      );

      if (response === "success") {
        setSaveLoading(false);
        notify("Product added");
        setTimeout(() => {
          navigate.push("/shop/products");
        }, 3000);
      }
    } else {
    setSaveLoading(false);
    setError("Please fill the form properly");
    }
  };

  return (
    <div className=" flex items-center flex-col mb-20 mt-20">
      <ToastContainer />
      <>
        <h1 className="text-3xl font-bold">New Post</h1>
        <div className="h-full w-[90%]">
          <form method="POST" className="h-full flex flex-col">
            <span style={{ fontWeight: "700" }}>Product Image</span>
            {product?.imgUrl && (
              <Image
                width={100}
                height={100}
                src={product.imgUrl}
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
            <span>Product Name</span>
            <input
              type="text"
              name="title"
              value={product?.productName}
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />
            <span>Price</span>
            <input
              type="text"
              name="excerpt"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />

            <h1>Description</h1>
            <input
              type="text"
              name="excerpt"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />

            <h1>Category</h1>
            <select
              onChange={(e) => {
                setProduct({ ...product, category: e.target.value });
              }}
              className="border-2 h-[3rem] p-2 mb-10"
            >
              <option value="select">select</option>
              <option value="spice">spice</option>
              <option value="merch">merch</option>
              <option value="cultural artifacts">cultural artifacts</option>
              <option value="classes">classes</option>
            </select>
            <h1>Sold as (e.g per basket)</h1>
            <input
              type="text"
              name="excerpt"
              value={product.perType}
              onChange={(e) =>
                setProduct({ ...product, perType: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />
            <h1>Discount price (optional)</h1>
            <input
              type="text"
              name="excerpt"
              value={product.discount}
              onChange={(e) =>
                setProduct({ ...product, discount: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />
            <h1>Available in stock</h1>
            <input
              type="number"
              name="excerpt"
              value={product.amountAvailable}
              onChange={(e) =>
                setProduct({ ...product, amountAvailable: e.target.value })
              }
              className="border-2 h-[3rem] p-2 mb-10"
            />

            <span className="text-[orangered] my-2">{error}</span>
            <button
              className="blackBgOrangeHover py-3 rounded-md flex justify-center items-center"
              type="button"
              onClick={handleSave}
              disabled={saveLoading}
            >
              {saveLoading ? "Saving..." : "Add Product"}
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
