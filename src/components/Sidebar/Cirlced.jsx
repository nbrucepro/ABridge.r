import React from "react";

const Cirlced = ({ element, type }) => {
  return (
    <>
      {type === "image" ? (
        <img
          src={element}
          className="rounded-full h-[1.8rem] w-[1.8rem] group relative flex items-center justify-center gap-2.5 lg:my-1 font-medium text-bodydark1 duration-300 ease-in-out bg-white border border-primary"
          alt="image"
        />
      ) : (
        <div class="rounded-full h-[1.8rem] w-[1.8rem] group relative flex items-center justify-center gap-2.5 lg:my-1 px-1 font-medium text-bodydark1 duration-300 ease-in-out bg-white border border-primary">
          {element}
        </div>
      )}
    </>
  );
};

export default Cirlced;
