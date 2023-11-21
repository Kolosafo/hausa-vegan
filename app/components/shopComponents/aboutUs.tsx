import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f7f7f7] px-20 py-20 flex flex-col fullCenter">
      <span className="text-3xl font-bold mb-10">About Us</span>
      <Image src={"/logo.png"} width={400} height={400} alt="logo" className="mb-5" />
      <div className="flex flex-col gap-1 w-[70%] font-normal">
        <span>
          Our kuli kuli is made of peanuts that are grounded and pressed to
          seperate pulp from oil. The residue is seasoned to perfection and used
          as a dry rub or shapes into kuli kuli crackers
        </span>
        <br />
        <span>
          Yaji is northern Nigerian culinary currency. It is a blend of peppers
          and spices that is popular in Kano Nigeria. It is great for cooking,
          marinading and sprinkling on food.
        </span>
        <br />
        <span>
          Suya spice aka yajin tsire is a kuli kuli based spice rub made of
          peppers and aromatic spices which is traditionally used to marinade
          meat skewers.
        </span>
        <br />
        <span>
          Daddawa is a popular West African traditional seasoning. The bean
          itself is derived from “dorawa” aka parkia biglobosa seeds, and
          manually processed into the amazing culinary funky magic that it is.
          It is a natural flavor enhancer
        </span>
        <br />
        <span>
          Sweet-Heat! Atta-mang aioli is made with attarugu (habanero) and
          mango. The duo makes the perfect sweet and spicy combination. Our
          mango is caramalized and pulsed into a paste that compliments the
          floral sweetness of our roasted peppers.
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
