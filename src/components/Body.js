import React from "react";
import Filter from "./Filter";
import Card from "./Card";
import data from "../dummy.js";

const Body = () => {
  return (
    <div className="bg-violet-100">
      <Filter/>
      {/* <div className="w-[75vw] flex justify-between flex-wrap mx-auto">
        {data.map((obj, index)=>{
          return <Card {...obj} key={index}/>
        })}
      </div> */}
    </div>
  );
};

export default Body;
