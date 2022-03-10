import React from 'react'
import {NavLink, Link,} from 'react-router-dom'

const ProductList = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className='text-center mt-24 mb-8 text-4xl font-medium  '>Products List</h1>

                <div className=" mx-auto w-1/12 ">
                    <div className="mx-auto w-1/4 border-b-4 border-gray-900">

                    </div>

                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {/* Product list */}
                    <Link to="productview/" href="">

                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">



                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-center items-center flex-col">
                                <div>
                                    <h3 className="text-md text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                </div>
                                <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                            </div>
                        </div>
                    </Link>

                    {/* Product list */}
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-center items-center flex-col">
                            <div>
                                <h3 className="text-md text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                        </div>
                    </div>

                    {/* Product list */}
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-center items-center flex-col">
                            <div>
                                <h3 className="text-md text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                        </div>
                    </div>

                    {/* Product list */}
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-center items-center flex-col">
                            <div>
                                <h3 className="text-md text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                        </div>
                    </div>

                    {/* Product list */}
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-center items-center flex-col">
                            <div>
                                <h3 className="text-md text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                        </div>
                    </div>

                    {/* Product list */}
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-center items-center flex-col">
                            <div>
                                <h3 className="text-md text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-0 text-xl italic font-light text-red-600">$35</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default ProductList