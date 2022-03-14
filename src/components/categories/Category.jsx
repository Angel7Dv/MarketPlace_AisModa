import React from "react";

export const Category = ({ children }) => {
  return (
    <div className="bg-gray-900 flex flex-shrink-0 relative w-[21rem] h-[32rem]">
      <img
        src="https://i.ibb.co/fDngH9G/carosel-1.png"
        alt="black chair and white table"
        className="object-cover object-center w-full "
      />
      <div className="bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6">
        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
          Catalog 1
        </h2>
        <div className="opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center ">
          <h3 className="text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50">
            Minimal Interior
          </h3>
        </div>
      </div>
    </div>
  );
};

export const CategoryImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain object-center w-full h-full"
    />
    // <img
    //     src="https://i.ibb.co/fDngH9G/carosel-1.png"
    //     alt="black chair and white table"
    //     className="object-cover object-center w-full "
    //         />
  );
};

export default Category;
