import React from "react";

const Collections = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className=" h-[580px]  flex justify-betweenflex-col md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            The new evening wear collections
            exclusively offered at the boutique 
          </p>
          <button className="bg-white text-Black font-semibold px-6 py-2 capitalize rounded-sm hover:-translate-y-2 transition-all duration-300">see collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
