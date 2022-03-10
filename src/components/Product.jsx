import React from 'react'

const Product = () => {
    return (
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
    )
}

export default Product