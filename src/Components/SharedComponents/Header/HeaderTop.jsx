import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import img from '../../../assets/GramBazar.webp';

const LazyImage = lazy(() => import('./LazyImage'));

function HeaderTop() {
    return (
        <div className="w-full py-4 bg-primary">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to='/'>
                            <Suspense fallback={<div className="w-[150px] h-[30px] bg-gray-200 animate-pulse rounded-md"></div>}>
                                <LazyImage src={img} />
                            </Suspense>
                        </Link>
                    </div>
                    <div>
                        <form>
                            <div className="py-3 px-8 bg-white rounded-md flex justify-between items-center w-9/12 lg:w-[660px]">
                                <input type="text" name="search" id="search" className="w-full outline-none" placeholder="Find Your Favorite Product" />
                                <button type="submit" className="text-gray-600 pl-4"><FaSearch /></button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                        <div>
                            <Link to="#" className="text-gray transition-all duration-300 hover:text-[#e4e3e3] text-xl md:text-2xl lg:text-3xl relative">
                                <div className="transform transition-all duration-400 hover:-translate-y-[2px]">
                                    <FaBell />
                                    <span className="text-[10px] absolute -top-2 -right-2 w-4 h-4 rounded-full text-dark bg-white flex items-center justify-center border border-secondary"><p>12</p></span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" className="text-gray transition-all duration-300 hover:text-[#e4e3e3] text-xl md:text-2xl lg:text-3xl relative">
                                <div className="transform transition-all duration-400 hover:-translate-y-[2px]">
                                    <FaShoppingCart />
                                    <span className="text-[10px] absolute -top-2 -right-2 w-4 h-4 rounded-full text-dark bg-white flex items-center justify-center border border-secondary"><p>12</p></span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" className="text-gray transition-all duration-200 hover:text-[#e61f1f]  text-xl md:text-2xl lg:text-3xl relative">
                                <div className="transform transition-all duration-400 hover:-translate-y-[2px]">
                                    <FaHeart />
                                    <span className="text-[10px] absolute -top-2 -right-2 w-4 h-4 rounded-full text-dark bg-white flex items-center justify-center border border-secondary"><p>12</p></span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-slate-300 text-xl md:text-2xl lg:text-3xl"><FaUser /></span>
                            <div className="text-[10px] md:text-[12px] text-white font-medium">
                                <p><Link to='/login'>Login</Link></p>
                                <p><Link to="/signup">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;
