"use client";
import React, { useEffect, useRef, useState } from "react";
import BorderLine from "../components/BorderLine";
import Image from "next/image";

const imagesData = [
  {
    id: 1,
    src: "/assets/images/product-details/pd-img-1.png",
    alt: "Product Image 1",
  },
  {
    id: 2,
    src: "/assets/images/product-details/pd-img-2.png",
    alt: "Product Image 2",
  },
  {
    id: 3,
    src: "/assets/images/product-details/pd-img-3.png",
    alt: "Product Image 3",
  },
  {
    id: 4,
    src: "/assets/images/product-details/pd-img-4.png",
    alt: "Product Image 4",
  },
  {
    id: 5,
    src: "/assets/images/product-details/pd-img-5.png",
    alt: "Product Image 5",
  },
];
const description = [
  "Complimentary express delivery or collect in-store. Premium delivery available across Oman and selected GCC regions.",
  "This signature Bagzei handbag showcases refined craftsmanship with a structured finish and elegant modern silhouette. It is accented with polished hardware, soft lining, premium trim, and thoughtful details for everyday essentials.",
];

const accordianData = [
  {
    title: "Size & Fit",
    paras: ["23.5 x 17.5 x 11.5 cm", "(Length x Height x Width)"],
    list: [
      "Premium textured leather",
      "Soft fabric lining",
      "Refined leather trim",
      " Gold-toned hardware",
      " Double zipper closure",
      "Removable name tag",
      "Inside flat pocket",
    ],
    discription: [
      "To keep your Monogram canvas product beautiful as the years pass, we recommend following these guidelines for its care : Beware not to scratch or rub your product against abrasive surfaces, especially the leather trim. Keep your product away from damp or humid environments and avoid direct exposure to sunlight, keep your product away from any direct source of heat (radiators, car interiors overheated by the sun, etc). Avoid contact with greasy substances, cosmetics, perfume, and hydroalcoholic solutions, as well as any material (magazines, other leathers, etc.) that may transfer their colored pigments onto the product. Keep your product away from water. Should it get wet or dirty on the surface, dry with a lint free, light-colored, absorbent cloth. Never use soap or solvent. If your lining gets dirty or in case of superficial stains, we recommend that you wipe it with a soft and light-colored cloth. In order to protect your product when you are not using it, store it in the felt protective pouch provided. Natural cowhide leather: The trimmings are in natural cowhide leather, the skin is finished through a vegetal tanning process. Some natural marks or genuine irregularities in the leather may show through. Over time, this delicate leather, which is sensitive to scratches, will acquire a beautiful patina.Taking proper care of your Louis Vuitton product will allow you to fully appreciate its beauty  for many years.",
      "For any enquiries about your product, please do not hesitate to contact any Louis Vuitton store.",
    ],
  },
  {
    title: "Details & Care",
    paras: ["23.5 x 17.5 x 11.5 cm", "(Length x Height x Width)"],
    // list: [
    //   "Premium textured leather",
    //   "Soft fabric lining",
    //   "Refined leather trim",
    //   " Gold-toned hardware",
    //   " Double zipper closure",
    //   "Removable name tag",
    //   "Inside flat pocket",
    // ],
    discription: [
      "To keep your Monogram canvas product beautiful as the years pass, we recommend following these guidelines for its care : Beware not to scratch or rub your product against abrasive surfaces, especially the leather trim. Keep your product away from damp or humid environments and avoid direct exposure to sunlight, keep your product away from any direct source of heat (radiators, car interiors overheated by the sun, etc). Avoid contact with greasy substances, cosmetics, perfume, and hydroalcoholic solutions, as well as any material (magazines, other leathers, etc.) that may transfer their colored pigments onto the product. Keep your product away from water. Should it get wet or dirty on the surface, dry with a lint free, light-colored, absorbent cloth. Never use soap or solvent. If your lining gets dirty or in case of superficial stains, we recommend that you wipe it with a soft and light-colored cloth. In order to protect your product when you are not using it, store it in the felt protective pouch provided. Natural cowhide leather: The trimmings are in natural cowhide leather, the skin is finished through a vegetal tanning process. Some natural marks or genuine irregularities in the leather may show through. Over time, this delicate leather, which is sensitive to scratches, will acquire a beautiful patina.Taking proper care of your Louis Vuitton product will allow you to fully appreciate its beauty  for many years.",
      "For any enquiries about your product, please do not hesitate to contact any Louis Vuitton store.",
    ],
  },
];

const page = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [height, setHeight] = useState<any>(0);
  
  const heightRef = useRef<any>(null);

  const [topPosition, setTopPosition] = useState(150);
  console.log(topPosition, 'checking for position')

  useEffect(() => {
    const calculateTop = () => {
      if (!heightRef.current) return;

      const contentHeight = heightRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const top = 210 - (viewportHeight - contentHeight);

      setTopPosition(top);
    };

    calculateTop();

    window.addEventListener("resize", calculateTop);

    return () => {
      window.removeEventListener("resize", calculateTop);
    };
  }, [height, openAccordion]);

  // useEffect(() => {
  //   if (!heightRef.current) return;
  //    const timer = setTimeout(() => {
  //      setHeight(heightRef.current.offsetHeight);
  //      console.log("height:", heightRef.current.offsetHeight);
  //    }, 350); // slightly more than transition duration

  //    return () => clearTimeout(timer);
  // }, [heightRef, openAccordion, setOpenAccordion]);
  
  return (
    //   main div
    <div className="relative grid grid-cols-2">
      <ul className="flex flex-col">
        {imagesData.map((items, index) => (
          <li key={items?.id || index} className="w-[720px] h-[670px]">
            <img
              src={items?.src}
              alt={items?.alt}
              className="object-cover object-center"
            />
          </li>
        ))}
      </ul>

      <div
        ref={heightRef}
        className={`sticky top-auto self-start`}
        style={{
          top: `${topPosition}px`,
        }}
      >
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <p className="font-menu-nav-14 font-Akkurat  text-primary-5">
              M2B903
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.6095 10.0395L10 16.6667L16.3905 10.0395C17.1009 9.30278 17.5 8.30358 17.5 7.26171C17.5 5.09214 15.804 3.33334 13.7119 3.33334C12.7073 3.33334 11.7438 3.74722 11.0334 4.48394L10 5.55557L8.96664 4.48394C8.25624 3.74722 7.29273 3.33334 6.28807 3.33334C4.19598 3.33334 2.5 5.09214 2.5 7.26171C2.5 8.30358 2.8991 9.30278 3.6095 10.0395Z"
                stroke="#1A1A1A"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Alma */}
        <div className="mt-[30px] flex flex-col gap-[16px]">
          <h5 className="font-card-24 text-primary-2 font-Akkurat">Alma BB</h5>
          <p className="font-Akkurat text-primary-5 font-text-18">OMR 800</p>
        </div>
        {/* btns */}
        <div className="mt-[40px] flex flex-col gap-[20px]">
          <button className="w-full py-[17px] flex items-center justify-center bg-primary-2 text-primary-1 rounded-[8px]">
            Add to Bag
          </button>
          <button className="font-footer-copyright-14 text-primary-2 font-Akkurat">
            Contact on WhatsApp
          </button>
        </div>
        {/* description */}
        {description?.map((item) => (
          <p className="mt-[30px] font-product-16 font-Akkurat text-primary-5">
            {item}
          </p>
        ))}

        {/* accordion work */}
        <div
          className={`
           
    overflow-y-auto
  `}
        >
          {accordianData?.map((item, index) => (
            <div key={index}>
              <div className="lg:my-[18px] my-[16px]">
                <BorderLine />
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? null : index)
                  }
                  className="flex items-center justify-between"
                >
                  <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2">
                    {item.title}
                  </p>

                  <Image
                    src={
                      openAccordion === index
                        ? "/assets/icons/minus.svg"
                        : "/assets/icons/plus.svg"
                    }
                    alt="view"
                    width={20}
                    height={20}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 flex flex-col gap-[30px] ${
                    openAccordion === index
                      ? "max-h-[500px] mt-[20px]"
                      : "max-h-0"
                  }`}
                >
                  <ul>
                    {item?.list?.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="font-footer-link-14 font-Akkurat text-primary-2"
                      >
                        <p>{listItem}</p>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex-col gap-[]">
                    {item?.paras?.map((item) => (
                      <li className="">{item}</li>
                    ))}
                  </ul>
                  <ul>{item?.discription?.map((item) =>
                    <li>{item}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
