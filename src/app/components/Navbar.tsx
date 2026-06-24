'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <header className='w-full lg:min-h-[120px] md:min-h-[110px] min-h-[80px] h-auto sticky top-0 bg-primary-1 z-20 border-b border-[var("-extra-light-grey")]'>
                <p className=' text-center bg-primary-3 pt-[16px] pb-[15px] font-Akkurat font-top-nav-12 relative w-full overflow-hidden'>
                    10% Off when you subscribe to our emails. T&Cs apply
                    <button className='md:w-[24px] md:h-[24px] w-[20px] h-[20px] absolute lg:right-[40px] md:right-[24px] right-[16px] top-[9px]'>
                        <Image src={'/assets/icons/cross-small.svg'} fill alt='close' />
                    </button>
                </p>
                <nav className='max-w-[1440px]  w-full mx-auto lg:px-[80px] md:px-[24px] px-[16px] flex flex-row justify-between items-center lg:py-[26px] md:py-[25px] py-[15px]'>
                    <div className='flex flex-row lg:gap-[20px] gap-[16px] font-Akkurat font-normal font-menu-nav-14'>
                        <ul className='lg:flex flex-row gap-[20px] hidden'>
                            <li><Link href='/'>New In</Link></li>
                            <li><Link href='/'>Collections</Link></li>
                            <li> <Link href='/'>Sale</Link></li>
                        </ul>
                        <button
                            className='lg:hidden block'
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <Image src="/assets/icons/menu-hamburger.svg" alt="menu" width={20} height={20} />
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6667 16.6667L13.1694 13.1694M15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15C12.2018 15 15 12.2018 15 8.75Z" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <Link href='/' className='lg:w-[97px] lg:h-[28px] md:w-[85px] md:h-[25px] w-[73px] h-[21px] relative'>
                        <Image src='/assets/icons/logo.svg' alt="bagzei" fill className='object-fill' />
                    </Link>
                    <ul className='flex flex-row lg:gap-[20px] gap-[16px] items-center font-Akkurat font-normal font-menu-nav-14'>
                        <li className='lg:flex flex-row gap-[4px] items-center hidden'>
                            Ship to:
                            <Image src='/assets/icons/flag.svg' alt="Oman" width={26.7} height={20} />
                            OM
                        </li>
                        <li className='lg:block hidden'>
                            <Image src="/assets/icons/user.svg" alt="user" width={20} height={20} />
                        </li>
                        <li>
                            <Image src="/assets/icons/favorite.svg" alt="favorite" width={20} height={20} />
                        </li>
                        <li>
                            <Image src="/assets/icons/cart.svg" alt="cart" width={20} height={20} />
                        </li>
                        <li className='lg:block hidden'>
                            <Image src="/assets/icons/menu-hamburger.svg" alt="user" width={20} height={20} />
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Drawer */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isDrawerOpen ? 'opacity-50' : 'opacity-0'
                        }`}
                    onClick={() => setIsDrawerOpen(false)}
                />

                {/* Drawer Content */}
                <div
                    className={`absolute top-0 left-0 h-full w-full md:py-[30px] py-[24px] md:px-[24px] px-[16px] bg-white shadow-lg transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    {/* Close button */}
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex glex-row items-center gap-[20px] font-Akkurat font-normal font-menu-nav-14'>
                            <div className='flex flex-row items-center gap-[6px]'>
                                <Image src="/assets/icons/user.svg" alt="user" width={20} height={20} /> SIGN IN
                            </div>
                            <div className='flex flex-row gap-[4px] items-center'>
                                Ship to:
                                <Image src='/assets/icons/flag.svg' alt="Oman" width={26.7} height={20} />
                                OM
                            </div>
                        </div>

                        <button
                            className=''
                            onClick={() => setIsDrawerOpen(false)}
                        >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10L10 20M10 10L20 20" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>


                    {/* Drawer content*/}
                    <div className="flex flex-col w-full py-[30px] h-full justify-between">
                        <ul className='flex flex-col gap-[16px] font-Akkurat font-normal text-primary-2 md:text-[18px] text-[16px]'>
                            <li>New In</li>
                            <li>Collections</li>
                            <li>Sale</li>
                        </ul>

                        <div className='w-full md:h-[450px] h-[320px] flex flex-col justify-end relative overflow-hidden border-1 border-primary-1 md:px-[24px] md:py-[40px] px-[16px] py-[30px]'>
                            <div className='relative z-20 text-primary-1 flex flex-col md:gap-[10px] gap-[6px]'>
                                <h2 className='font-section-title-32 font-ChronicleDisplay'>Summer Sale</h2>
                                <Link href="#" className='font-text-18 font-Akkurat font-normal uppercase underline underline-offset-3'>DISCOVER NOW</Link>
                            </div>
                            <div
                                className="absolute inset-0 z-10"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 98.59%)'
                                }}
                            />
                            <Image src='/assets/images/home/rectangle-2.png' className='w-full h-full object-cover object-center' fill alt="bag" priority />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar