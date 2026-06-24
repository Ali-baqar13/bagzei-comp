'use client'
import React, { useState, useRef, useEffect } from 'react'
import ScreenContainer from './ScreenContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from "./ProjectCategorySwiper.module.css"
const ProjectCategoryTitleWIthLinks = () => {
    const data = {
        title: 'Handbags',
        list: [
            {
                id: 1,
                title: 'View All',
                href: "#",
            },
            {
                id: 2,
                title: 'LOUIS VUITTON',
                href: "#",
            },
            {
                id: 3,
                title: 'SAINT LAURENT',
                href: "#",
            },
            {
                id: 4,
                title: 'PARADA',
                href: "#",
            },
            {
                id: 5,
                title: 'VALENTINO GARAVANI',
                href: "#",
            },
            {
                id: 6,
                title: 'BURBERRY',
                href: "#",
            },
            {
                id: 7,
                title: 'DIOR',
                href: "#",
            },
        ]
    }
    const swiperRef = useRef<any>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { title, list } = data;
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
            <ScreenContainer className='flex flex-col '>
                <h1 className='font-banner-title-50 font-ChronicleDisplay lg:mt-[40px] lg:mb-[40px] md:mt-[40px]  mt-[20px] mb-[30px]'>{title}</h1>
                <div className='w-full relative h-auto'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        slidesPerGroup={1}
                        speed={500}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className={`w-full ${style.customSwiper}`}
                    >
                        {list && list?.map((item: any) => (
                            <SwiperSlide key={item?.title} className="!w-fit h-full group relative pb-[7px]">
                                <a href={item?.href}  className='uppercase font-menu-nav-14 overflow-y-clip text-primary-2 relative after:absolute after:-bottom-[8px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-medium-grey)] after:transition-all after:duration-300 hover:after:w-full'>
                                    {item?.title}
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`flex flex-col shadow-sm justify-center items-center absolute h-[24px] top-0 left-0 w-[24px] z-10 backdrop-blur-[10px] rounded-full hover:bg-white transition-all duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-white'
                            }`}
                        aria-label="Previous slide"
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 0.75L0.75 5.75L5.75 10.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`flex flex-col justify-center shadow-sm items-center absolute h-[24px] top-0 right-0 w-[24px] z-10 backdrop-blur-[10px] rounded-full hover:bg-white transition-all duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-white'
                            }`}
                        aria-label="Next slide"
                    >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 10.75L5.75 5.75L0.75 0.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </ScreenContainer>
        </div>
    )
}

export default ProjectCategoryTitleWIthLinks