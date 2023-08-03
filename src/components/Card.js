import React from "react";

const Card = (props) => {
  return (
    <div className="w-[22vw] rounded-lg shadow-2xl my-3 bg-white">
      <img
        src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
        alt="" className="rounded-t-lg"
      />
      <div className="flex w-[90%] justify-between mx-auto items-center">
        <div>
          <h2 className="text-violet-600 font-bold text-2xl my-2">
            ${props.price}<span className="text-gray-400 text-sm font-normal italic">/month</span>
          </h2>
          <h1 className="text-2xl font-bold text-gray-600 my-2">{props.name}</h1>
        </div>
        <div className="rounded-[100%] bg-slate-200 p-1">💖</div>
      </div>
      <p className="w-[90%] mx-auto text-gray-600">{props.address}</p>
      <hr className="w-[90%] mx-auto my-2" />
      <div className="w-[90%] mx-auto flex justify-between my-2 text-violet-700">
        <div>🛏️{props.bedCount} Beds</div>
        <div>🛀{props.bathCount} Bathrooms</div>
        <div>🏠{props.area}</div>
      </div>
    </div>
  );
};

export default Card;
