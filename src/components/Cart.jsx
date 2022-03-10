import React from 'react'

const Cart = () => {
  return (
    <div class="flex justify-center items-center my-12">
      <div class="flex space-x-4 items-start justify-center my-2 pt-20 pb-8 px-8 
      w-4/5 h-full border rounded-3xl  ">
        <div class="w-3/5 h-full">
          <h1 class="py-2 mb-8 text-xl text-gray-900 border-gray-300 border-b">My cart</h1>


          <div class="border-gray-300 border-b flex items-start py-8 space-x-4">
            <div class="slider">
              <div class="slide-ana lg:relative">
                <div class="flex w-24 border border-gray-300">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="A black chair with wooden legs"
                    class="w-full h-full" />
                </div>
              </div>
            </div>
            <div>
              <p>ima a product</p>
              <p>$250</p>
            </div>
            <div class="flex justify-end w-1/3 ">
              <input type="number" name="" id=""
                class="flex px-2 border border-gray-900 w-1/4" value="1" />
            </div><div>$ 500</div>
            <a href="#" class="text-3xl -mt-2 pl-8   text-gray-500 hover:text-red-900"> x </a>
          </div>

        </div>
        <div class="w-1/3 ">
          <h1 class="py-2 mb-8 text-xl text-gray-900 border-gray-300 border-b">Order summary
          </h1>
          <div class="flex justify-between mb-16">
            <div>Total</div>
            <div>$1,150.00</div></div>
          <a href="">
            <div class="text-white bg-gray-900 hover:bg-gray-600 border text-center 
              w-4/5 mx-auto py-2 ">

              check out</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cart