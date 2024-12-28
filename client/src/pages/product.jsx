import React from 'react'
import Header from '../components/header'
import CarouselWithContent from '../components/productMain'
import { Link, Outlet } from 'react-router-dom'
import Subscribe from '../components/subscribe'
import Footer from '../components/footer'

const Product = () => {
  return (
    <>
    <Header/>
    <CarouselWithContent/>
    <div className="rounded-xl  flex items-center    py-20 px-10 mt-20 ">
        <nav className="flex flex-col  gap-2 ">
          <Link
            to=""
            className="text-3xl  hover:border-l-2 hover: border-l-emerald-300"
          >
            Details{" "}
          </Link>
          <Link
            className="text-3xl  hover:border-l-2 hover: border-l-emerald-300"
            to="Reviews"
          >
            Reviews{" "}
          </Link>
        </nav>

        <Outlet />
      </div>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Product