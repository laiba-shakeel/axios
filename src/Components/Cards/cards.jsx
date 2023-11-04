import React from "react";

const Card = ({ title, price, description, category, image }) => {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  }
  return (
    <div className="flex justify-between  flex-col h-[100%] w-[350px] mt-[15px] rounded-[15px] mb-[25px]">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4">
        <div
          style={{
            marginBottom: 10,
            textAlign: "center",
            display: "flex",
            alignItems:'center' ,
            justifyContent:'center'
          }}
        >
          <img src={image} alt={title} className="object-contain w-[250px] h-40" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-2">${price.toFixed(2)}</p>
          <p className="text-gray-700 text-base">
            {truncateText(description, 100)}
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="flex justify-center items-center bg-gray-200 rounded-full p-[10px] text-sm  text-gray-700 mr-2">
            {category}
          </div>
          <button className="rounded-full bg-yellow-500 w-[100%] mt-3 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 active:bg-yellow-400 shadow-md px-4 py-2">
            <span className="text-white font-FONTSPRING-DEMO-SemiBold text-lg font-semibold">
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
