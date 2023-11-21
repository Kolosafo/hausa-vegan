import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/shopComponents/hero";
import ShopByCategory from "./components/shopComponents/shopByCategory";
import SectionTwo from "./components/shopComponents/sect2";
import Testimonial from "./components/shopComponents/testimonial";
import RecentBlogs from "./components/shopComponents/recentBlogs";
import AboutProducts from "./components/shopComponents/aboutProducts";
import AboutUs from "./components/shopComponents/aboutUs";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between mt-5">
        <Hero />
        <SectionTwo />
        <AboutProducts />
        <ShopByCategory />
        <RecentBlogs />
        <AboutUs />
        <Testimonial />
      </main>
    </>
  );
}
