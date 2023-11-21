"use client";
import { useEffect, useState } from "react";
import MarketCategories from "../../components/shopComponents/marketCard";
import { dummyProducts } from "@/utils/constants";
import { getProducts } from "@/firebase/shop/getProducts";
import { MarketCategory } from "@/utils/types";
import { RotatingTriangles } from "react-loader-spinner";
import { useSearchParams } from "next/navigation";

const Shop = () => {
  const router = useSearchParams();
  const category = router.get("category");
  enum categories {
    "spice",
    "merch",
    "cultural artifacts",
    "classes",
  }
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<MarketCategory[]>([]);

  const [usableProducts, setUsableProducts] = useState<MarketCategory[]>([]);
  const getAllProducts = async () => {
    const res = (await getProducts()) as unknown as IProduct[];

    if (category) {
      const categoryFilter = res.filter(
        (product) => product.category === category
      );
      if (category.length > 0) {
        setProducts(() => [
          ...products,
          {
            _id: category,
            market: "",
            categoryName: category.toUpperCase(),
            categoryItems: categoryFilter,
          },
        ]);
      }
    } else {
      const spices = res.filter((product) => product.category === "spice");

      if (spices.length > 0) {
        setProducts((product) => [
          ...product,
          {
            _id: "spices",
            market: "",
            categoryName: "Spices",
            categoryItems: spices,
          },
        ]);
      }

      const merch = res.filter((product) => product.category === "merch");

      if (merch.length > 0) {
        setProducts((product) => [
          ...product,
          {
            _id: "merch",
            market: "",
            categoryName: "Merch",
            categoryItems: merch,
          },
        ]);
      }

      const culturalArtifacts = res.filter(
        (product) => product.category === "cultural artifacts"
      );
      if (culturalArtifacts.length > 0) {
        setProducts((product) => [
          ...product,
          {
            _id: "culturalArtifacts",
            market: "",
            categoryName: "Cultural Artifacts",
            categoryItems: culturalArtifacts,
          },
        ]);
      }

      const classes = res.filter((product) => product.category === "classes");
      if (classes.length > 0) {
        setProducts((product) => [
          ...product,
          {
            _id: "classes",
            market: "",
            categoryName: "Classes",
            categoryItems: classes,
          },
        ]);
      }
    }

    setLoading(false);
  };
  useEffect(() => {
    getAllProducts().catch((e) => {
      console.log("ERROR GETTING PRODUCTS", e);
    });
  }, []);
  useEffect(() => {
    function removeDuplicates(): MarketCategory[] {
      const seenIds = new Set();
      const uniqueData = products.filter(item => {
        if (seenIds.has(item._id)) {
          return false;
        }
        seenIds.add(item._id);
        return true;
      });
      return uniqueData;
    }
    setUsableProducts(removeDuplicates());
  }, [products]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <RotatingTriangles />
        </div>
      ) : (
        <div>
          {usableProducts.length > 0 ? (
            usableProducts.map((product) => {
              return (
                <MarketCategories
                  market={product.market}
                  categoryName={product.categoryName}
                  categoryItems={product.categoryItems}
                  key={product._id}
                />
              );
            })
          ) : (
            <div className="w-screen h-[70vh] flex flex-col justify-center items-center">
              <h1 className="text-3xl">Shop closed!</h1>
              <h1 className="text-xl">Please check back later</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Shop;
