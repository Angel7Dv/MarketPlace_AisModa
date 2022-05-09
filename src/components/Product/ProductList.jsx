import React from "react"
import {NavLink, Link,} from "react-router-dom"
import Product from "./Product"

const ProductList = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-center mt-24 mb-8 text-4xl font-medium  ">Products List</h1>

                <div className=" mx-auto w-1/12 ">
                    <div className="mx-auto w-1/4 border-b-4 border-gray-900">

                    </div>

                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {/* Product list */}
                    <Link to="productview/" >
                        <Product/>
                       
                    </Link>




                </div>

            </div>
        </div>
    )
}

export default ProductList