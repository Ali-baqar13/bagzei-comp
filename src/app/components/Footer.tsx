"use client";
import Image from "next/image";
import React, { useState } from "react";
import ScreenContainer from "./ScreenContainer";
import Link from "next/link";
import Subscribe from "./Subscribe";
import BorderLine from "./BorderLine";

const data = [
  {
    type: "links",
    title: "Customer Care",
    links: [
      { label: "Track Your Order", href: "#" },
      { label: "Start a Return", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Shipping & Delivery", href: "#" },
      { label: "Exchanges & Returns", href: "#" },
      { label: "Payment Methods", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
  {
    type: "links",
    title: "About Bagzei",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Craftsmanship", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Store Experience", href: "#" },
      { label: "Luxury Collections", href: "#" },
      { label: "Bagzei Rewards", href: "#" },
      { label: "Affiliate Program", href: "#" },
    ],
  },
  
];

const bagzeiAcceptData = {
    type: "newsletter",
    title: "Newsletter",

    description:
      "Subscribe to the Bagzei newsletter and enjoy exclusive access to new collections, and special offers.",
    bagzieAccepts: "BAGZEI ACCEPTS",
    socialIcons: [
      {
        name: "Youtube",
        href: "#",
        src: "/assets/icons/youtube.svg",
        alt: "youtube icon",
      },
      {
        name: "Facebook",
        href: "#",
        src: "/assets/icons/facebook.svg",
        alt: "facebook icon",
      },
      {
        name: "Twitter",
        href: "#",
        src: "/assets/icons/twitter.svg",
        alt: "twitter icon",
      },
      {
        name: "Instagram",
        href: "#",
        src: "/assets/icons/instagram.svg",
        alt: "instagram icon",
      },
    ],
    paymentData: [
      {
        name: "Visa",
        src: "/assets/icons/pay/ppay.svg",
        alt: "visa icon",
      },
      {
        name: "Visa",
        src: "/assets/icons/pay/visa.svg",
        alt: "visa icon",
      },
      {
        name: "Mastercard",
        src: "/assets/icons/pay/bankTransfer.svg",
        alt: "mastercard icon",
      },
      {
        name: "American Express",
        src: "/assets/icons/pay/americanPay.svg",
        alt: "american express icon",
      },
      {
        name: "American Express",
        src: "/assets/icons/pay/jcb.svg",
        alt: "american express icon",
      },
      {
        name: "Union Pay",
        src: "/assets/icons/pay/unionpay.svg",
        alt: "american express icon",
      },
      {
        name: "Apple Pay",
        src: "/assets/icons/pay/applePay.svg",
        alt: "american express icon",
      },
    ],
  }

const copyRightData = {
  text: "Copyright © 2026 BAGZEI. All Rights Reserved.",
};
const termsAndConditionsData = {
  term: "Terms of Service",
  privacy: "Privacy Policy",
  cookies: "Cookies",
};

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  
  return (
    <div className="relative justify-center h-auto items-center overflow-y-scroll">
      <div className="w-full top-0 bottom-0 absolute left-0 right-0  z-[1]">
        <Image src="/assets/images/footer-bg.png" alt="Footer Image" fill />
      </div>

      <div className="relative z-[2] md:py-[80px] py-[20px] flex items-center justify-center ">
        <ScreenContainer>
          <div className="lg:px-[40px] md:px-[20px] px-[16px] md:py-[40px] py-[16px] bg-primary-1">
            {/* Accordion work start */}

            <div className={`w-full  grid lg:grid-cols-3 grid-cols-1 `}>
              {/* accord 1 is here*/}
              {data?.map(
                (item, index) => (
                  // item.type === "links" ? (
                  <div>
                    <div className={`lg:hidden block lg:my-[20px] my-[16px]`}>
                      <BorderLine />
                    </div>
                    <div className="flex flex-col gap-[0px] lg:gap-[16px]">
                      <button
                        onClick={() =>
                          setOpenAccordion(
                            openAccordion === index ? null : index,
                          )
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
                          className="block lg:hidden transition-all duration-300 "
                        />

                        {/* accord icon will definetely add here */}
                      </button>

                      <ul
                        className={` flex flex-col overflow-hidden transition-all duration-300 ${
                          openAccordion === index
                            ? "h-auto  lg:mt-[0px] mt-[20px]"
                            : "max-h-0  lg:max-h-none"
                        }`}
                      >
                        {item?.links?.map((link, index) => (
                          <li
                            key={index}
                            className=" font-footer-link-14 font-Akkurat text-primary-2"
                          >
                            <Link href={link.href} className="hover:underline">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
                // ) : (

                // ),
              )}

              <>
                <div className={`lg:hidden block md:my-[20px] my-[16px]`}>
                  <BorderLine />
                </div>
                <div className="flex flex-col gap-[0px] lg:gap-[16px]">
                  <button
                    // onClick={() =>
                    //   setOpenAccordion(openAccordion === index ? null : index)
                    // }
                    className="flex items-center justify-between"
                  >
                    <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2">
                      {bagzeiAcceptData?.title}
                    </p>
                    {/* <Image
                      src={
                        openAccordion === index
                          ? "/assets/icons/minus.svg"
                          : "/assets/icons/plus.svg"
                      }
                      alt="view"
                      width={20}
                      height={20}
                      className="block lg:hidden transition-all duration-300 "
                    /> */}
                  </button>
                  <div
                    className={` flex flex-col overflow-hidden 
                       
                         h-auto  lg:mt-[0px] mt-[20px]
                       
                    
                      `}
                  >
                    <div className="flex flex-col">
                      <p className="font-footer-link-14 font-Akkurat text-primary-2">
                        {bagzeiAcceptData?.description}
                      </p>
                      <div className="mt-[24px]">
                        <Subscribe />
                      </div>
                      <div className="mt-[10px]">
                        <BorderLine />
                      </div>
                      {/* social media icons */}

                      <div className="flex gap-[20px] items-center mt-[24px]">
                        {bagzeiAcceptData?.socialIcons?.map((icon, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="text-primary-2 hover:underline"
                          >
                            <Image
                              alt={icon.alt}
                              src={icon.src}
                              width={16}
                              height={16}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Bagzei Accepts */}

                    <div className="flex flex-col gap-[10px] mt-[30px]">
                      <p className="font-footer-copyright-14 font-Akkurat text-primary-2">
                        {bagzeiAcceptData?.bagzieAccepts}
                      </p>
                      <div className="flex  xl:flex-nowrap flex-wrap  md:gap-[19px] gap-[16px]">
                        {bagzeiAcceptData?.paymentData?.map((icon, index) => (
                          <Image
                            key={index}
                            alt={icon.alt}
                            src={icon.src}
                            width={40}
                            height={24}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>

            {/* Acoordion work comp */}
            <div className="flex flex-col w-full md:flex-row md:justify-between justify-start items-start mt-[30px] md:mt-[34px]">
              <p className="font-footer-copyright-14 font-Akkurat text-primary-2">
                {copyRightData.text}
              </p>
              <div className="md:hidden  block my-[10px] w-full">
                <BorderLine />
              </div>
              <ul className="font-footer-copyright-14 font-Akkurat text-primary-2 flex gap-[12px] ">
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.term}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Footer;
