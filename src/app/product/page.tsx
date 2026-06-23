"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
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
    list: [
      "Premium textured leather",
      "Soft fabric lining",
      "Refined leather trim",
      "Gold-toned hardware",
      "Double zipper closure",
      "Removable name tag",
      "Inside flat pocket",
    ],
    discription: [
      "To keep your Monogram canvas product beautiful as the years pass, we recommend following these guidelines for its care...",
      "For any enquiries about your product, please do not hesitate to contact any Louis Vuitton store.",
    ],
  },
  {
    title: "Details & Care",
    discription: [
      "To keep your Monogram canvas product beautiful as the years pass, we recommend following these guidelines for its care...",
      "For any enquiries about your product, please do not hesitate to contact any Louis Vuitton store.",
    ],
  },
];

const Page = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const rightColumnRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRight = useRef(true);
  const lastScrollY = useRef(0);

  // Calculate scroll progress of right column
  const getRightColumnScrollProgress = useCallback(() => {
    if (!rightColumnRef.current) return 0;

    const rightColumn = rightColumnRef.current;
    const scrollHeight = rightColumn.scrollHeight - rightColumn.clientHeight;
    if (scrollHeight <= 0) return 0;

    return rightColumn.scrollTop / scrollHeight;
  }, []);

  // Handle scroll with priority to right column
  const handleScroll = useCallback((e: WheelEvent) => {
    if (!rightColumnRef.current || !leftColumnRef.current) return;

    const rightColumn = rightColumnRef.current;
    const leftColumn = leftColumnRef.current;

    const delta = e.deltaY;
    const currentScrollTop = rightColumn.scrollTop;
    const maxScrollTop = rightColumn.scrollHeight - rightColumn.clientHeight;

    // Check if right column can scroll further
    const canScrollDown = currentScrollTop < maxScrollTop;
    const canScrollUp = currentScrollTop > 0;

    // If scrolling down and right column can scroll, scroll right column
    if (delta > 0 && canScrollDown) {
      e.preventDefault();
      rightColumn.scrollTop += delta;
      isScrollingRight.current = true;
      return;
    }

    // If scrolling up and right column can scroll up, scroll right column
    if (delta < 0 && canScrollUp) {
      e.preventDefault();
      rightColumn.scrollTop += delta;
      isScrollingRight.current = true;
      return;
    }

    // If right column is at bottom and scrolling down, let left column scroll
    if (delta > 0 && !canScrollDown) {
      isScrollingRight.current = false;
      // Left column will scroll naturally
      return;
    }

    // If right column is at top and scrolling up, let left column scroll
    if (delta < 0 && !canScrollUp) {
      isScrollingRight.current = false;
      // Left column will scroll naturally
      return;
    }

    // Default: let normal scroll happen
    isScrollingRight.current = false;
  }, []);

  // Update scroll progress
  useEffect(() => {
    if (!rightColumnRef.current) return;

    const updateProgress = () => {
      const progress = getRightColumnScrollProgress();
      setScrollProgress(progress);
    };

    const rightColumn = rightColumnRef.current;
    rightColumn.addEventListener("scroll", updateProgress);

    return () => {
      rightColumn.removeEventListener("scroll", updateProgress);
    };
  }, [getRightColumnScrollProgress]);

  // Wheel event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // Recalculate on accordion change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (rightColumnRef.current) {
        // Ensure right column stays at top when accordion changes
        if (openAccordion === null) {
          // When closing, scroll to top of right column
          rightColumnRef.current.scrollTop = 0;
        }
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [openAccordion]);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen overflow-hidden"
    >
      {/* LEFT COLUMN - Static images */}
      <div
        ref={leftColumnRef}
        className="w-1/2 flex-shrink-0 overflow-y-auto"
        style={{
          height: "100vh",
        }}
      >
        <ul className="flex flex-col">
          {imagesData.map((items, index) => (
            <li key={items?.id || index} className="w-full h-[670px]">
              <img
                src={items?.src}
                alt={items?.alt}
                className="object-cover object-center w-full h-full"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT COLUMN - Scrollable with priority */}
      <div
        ref={rightColumnRef}
        className="w-1/2 flex-shrink-0 overflow-y-auto sticky top-0"
        style={{
          height: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex flex-col w-full pr-8 pb-8 pt-[150px]">
          {/* Scroll progress indicator */}
          <div className="fixed top-0 right-0 w-1/2 h-1 bg-gray-200 z-50">
            <div
              className="h-full bg-primary-2 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* SKU and Wishlist */}
          <div className="flex justify-between w-full">
            <p className="font-menu-nav-14 font-Akkurat text-primary-5">
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
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Product Name & Price */}
          <div className="mt-[30px] flex flex-col gap-[16px]">
            <h5 className="font-card-24 text-primary-2 font-Akkurat">
              Alma BB
            </h5>
            <p className="font-Akkurat text-primary-5 font-text-18">OMR 800</p>
          </div>

          {/* Buttons */}
          <div className="mt-[40px] flex flex-col gap-[20px]">
            <button className="w-full py-[17px] flex items-center justify-center bg-primary-2 text-primary-1 rounded-[8px] hover:bg-primary-2/90 transition-colors">
              Add to Bag
            </button>
            <button className="font-footer-copyright-14 text-primary-2 font-Akkurat hover:underline transition-all">
              Contact on WhatsApp
            </button>
          </div>

          {/* Description */}
          {description?.map((item, index) => (
            <p
              key={index}
              className="mt-[30px] font-product-16 font-Akkurat text-primary-5 leading-relaxed"
            >
              {item}
            </p>
          ))}

          {/* Accordion */}
          <div className="mt-4">
            {accordianData?.map((item, index) => (
              <div key={index}>
                <div className="lg:my-[18px] my-[16px]">
                  <BorderLine />
                </div>

                <div className="flex flex-col">
                  <button
                    onClick={() => {
                      setOpenAccordion(openAccordion === index ? null : index);
                      // Reset scroll to top when closing
                      if (openAccordion === index) {
                        setTimeout(() => {
                          if (rightColumnRef.current) {
                            rightColumnRef.current.scrollTop = 0;
                          }
                        }, 100);
                      }
                    }}
                    className="flex items-center justify-between w-full group"
                  >
                    <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2 group-hover:opacity-70 transition-opacity">
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
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index
                        ? "max-h-[500px] mt-[20px]"
                        : "max-h-0"
                    }`}
                  >
                    {item?.list?.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="font-footer-link-14 font-Akkurat text-primary-2 list-none py-1"
                      >
                        <p>{listItem}</p>
                      </li>
                    ))}
                    {item?.discription?.map((desc, idx) => (
                      <p
                        key={idx}
                        className="font-footer-link-14 font-Akkurat text-primary-2 mt-3 leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
