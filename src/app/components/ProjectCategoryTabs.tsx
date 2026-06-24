"use client"
import React, { useRef, useState, useEffect, useCallback } from 'react';
import ScreenContainer from './ScreenContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from "./ProjectCategorySwiper.module.css"
const ProjectCategoryTabs = () => {
    const data = [
        {
            id: 1,
            title: 'Speedy',
            img: '/assets/images/product-category/speedy.png',
            list: [
                {
                    id: 1,
                    title: 'Speedy BB',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'Speedy Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'Speedy Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'Speedy BB',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        },
        {
            id: 2,
            title: 'Alma',
            img: '/assets/images/product-category/alma.png',
            list: [
                {
                    id: 1,
                    title: 'Alma BB',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'Alma Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'Alma Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'Alma BB',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        },
        {
            id: 3,
            title: 'Neverfull',
            img: '/assets/images/product-category/neverfull.png',
            list: [
                {
                    id: 1,
                    title: 'Neverfull BB',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'Neverfull Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'Neverfull Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'Neverfull BB',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        },
        {
            id: 4,
            title: 'Noe',
            img: '/assets/images/product-category/noe.png',
            list: [
                {
                    id: 1,
                    title: 'Noe BB',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'Noe Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'Noe Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'Noe BB',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        },
        {
            id: 5,
            title: 'All In',
            img: '/assets/images/product-category/allin.png',
            list: [
                {
                    id: 1,
                    title: 'All In',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'All In Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'All In Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'All In',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        },
        {
            id: 6,
            title: 'Side Trunk',
            img: '/assets/images/product-category/sidetrunk.png',
            list: [
                {
                    id: 1,
                    title: 'Side Trunk BB',
                    productCode: 'M2B903',
                    price: 'RM 12,400.00',
                    img: '/assets/images/product-category/pgp-1.png',
                    href: '#',
                },
                {
                    id: 2,
                    title: 'Side Trunk BB',
                    productCode: 'M2B904',
                    price: 'RM 13,100.00',
                    img: '/assets/images/product-category/pgp-2.png',
                    href: '#',
                },
                {
                    id: 3,
                    title: 'Side Trunk BB',
                    productCode: 'M2B905',
                    price: 'RM 17,600.00',
                    img: '/assets/images/product-category/pgp-3.png',
                    href: '#',
                },
                {
                    id: 4,
                    title: 'Side Trunk BB',
                    productCode: 'M2B903',
                    price: 'RM 11,400.00',
                    img: '/assets/images/product-category/pgp-4.png',
                    href: '#',
                }
            ]
        }
    ];

    const swiperRef = useRef<any>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('');
    const [activeTabList, setActiveTabList] = useState<any[]>([]);

    // Handle tab click
    const handleActiveTab = useCallback((title: string) => {
        setActiveTab(title.toLowerCase());
    }, []);

    // Set initial active tab
    useEffect(() => {
        if (data.length > 0) {
            setActiveTab(data[0]?.title.toLowerCase() || '');
            setActiveTabList(data[0]?.list || []);
        }
    }, []);

    // Update active tab list when activeTab changes
    useEffect(() => {
        if (activeTab) {
            const result = data?.find((item) => item?.title.toLowerCase() === activeTab);
            setActiveTabList(result?.list || []);
        }
    }, [activeTab]);

    // Auto-observer for navigation buttons visibility
    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const updateButtons = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        // Update on slide change
        swiper.on('slideChange', updateButtons);
        swiper.on('reachBeginning', updateButtons);
        swiper.on('reachEnd', updateButtons);

        // Initial update
        updateButtons();

        // Cleanup
        return () => {
            swiper.off('slideChange', updateButtons);
            swiper.off('reachBeginning', updateButtons);
            swiper.off('reachEnd', updateButtons);
        };
    }, []);

    return (
        <div>
            <ScreenContainer className='flex flex-col gap-[40px] md:mb-[40px] mb-[20px] lg:mt-[20px] md:mt-[30px] mt-[20px]' element='section'>
                <div className='w-full relative h-auto'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        speed={500}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className={`w-full ${style.customSwiper}`}
                    >
                        {data && data?.map((item: any) => (
                            <SwiperSlide key={item?.title} className="max-w-[167px] h-full group">
                                <div className='w-full h-full flex flex-col gap-[10px]'>
                                    <img
                                        className='w-full lg:h-[166px] h-[125px] object-cover object-center overflow-hidden'
                                        alt={item?.title}
                                        src={item?.img}
                                    />
                                    <h2
                                        className={`font-menu-nav-14 cursor-pointer transition-colors duration-300 ${activeTab === item?.title.toLowerCase()
                                            ? 'text-primary-2 font-medium'
                                            : 'text-mid-grey hover:text-primary-2'
                                            }`}
                                        onClick={() => handleActiveTab(item?.title)}
                                    >
                                        {item?.title}
                                    </h2>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`flex flex-col justify-center shadow-sm items-center absolute h-[24px] top-[70px] left-0 w-[24px] z-10 backdrop-blur-[10px] rounded-full hover:bg-white transition-all duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-white'
                            }`}
                        aria-label="Previous slide"
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 0.75L0.75 5.75L5.75 10.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`flex flex-col justify-center shadow-sm items-center absolute h-[24px] top-[70px] right-0 w-[24px] z-10 backdrop-blur-[10px] rounded-full hover:bg-white transition-all duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-white'
                            }`}
                        aria-label="Next slide"
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 10.75L5.75 5.75L0.75 0.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

                <ul className='grid lg:grid-cols-4 grid-cols-2 gap-0'>
                    {activeTabList?.map((item: any, index: number) => (
                        <li key={index} className='w-full lg:h-[480px] md:h-[400px] h-[280px] overflow-hidden'>
                            <a href={item.href || '#'} className='w-full h-full flex flex-col justify-end relative lg:p-[30px] md:p-[21px] p-[17px] group'>
                                <img
                                    src={item?.img}
                                    className='w-full h-full object-cover object-center absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-105'
                                    alt={item?.title}
                                />
                                <div className='absolute inset-0 z-20' style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, rgba(222, 220, 220, 0) 35.52%)' }} />
                                <div className='flex flex-col gap-0 relative z-30 font-Akkurat'>
                                    <h4 className='font-menu-nav-14 text-mid-grey'>
                                        {item?.productCode}
                                    </h4>
                                    <h3 className='font-product-16 text-primary-2'>
                                        {item?.title}
                                    </h3>
                                    <h4 className='font-menu-nav-14 text-mid-grey'>
                                        {item?.price}
                                    </h4>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </ScreenContainer>
        </div>
    );
};

export default ProjectCategoryTabs;