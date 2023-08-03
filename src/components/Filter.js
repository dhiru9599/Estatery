import React from "react";
import { useState } from "react";
import data from "../dummy.js";
import Card from "./Card.js";

let locations = data.map((obj) => {
  return obj.location;
});
locations = [...new Set(locations)];
let type = data.map((obj) => {
  return obj.type;
});
type = [...new Set(type)];

let names = data.map((obj) => {
  return obj.name;
});
names = [...new Set(names)];

const Filter = () => {
  const [inputType, setInputType] = useState("text");
  const handleFocus = () => {
    setInputType("date");
  };

  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const handlePriceChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const [filteredData, setFilteredData] = useState(data);

  function handleSearch(e) {
    e.preventDefault();
    const location = e.target.location.value;
    const moveInDate = e.target.date.value;
    const priceRange = selectedPriceRange;
    const propertyType = e.target.type.value;

    // Filter data based on the selected criteria
    const filteredResults = data.filter((item) => {
      let match = true;

      if (location && item.location !== location) {
        match = false;
      }

      if (moveInDate && new Date(item.dateAvailable) > new Date(moveInDate)) {
        match = false;
      }

      if (
        priceRange &&
        (item.price < priceRange.split("-")[0] ||
          item.price > priceRange.split("-")[1])
      ) {
        match = false;
      }

      if (propertyType && item.type !== propertyType) {
        match = false;
      }

      return match;
    });

    // Set the filtered data into the state
    setFilteredData(filteredResults);
  }

  function handleUpperSearch(e){
    e.preventDefault();
    // Filter data based on the selected criteria
    const name = e.target.value;
    const filteredResults = data.filter((item) => {
      let match = true;

      if(name && item.name != name){
        match = false;
      }

      return match;
    });

    // Set the filtered data into the state
    setFilteredData(filteredResults);
  }

  return (
    <div className="w-[75vw] mx-auto">
      {/* Upper Search*/}
      <div className="flex justify-between text-2xl items-center h-[150px]">
        <h1 className="ml-4 text-3xl text-gray-600 font-semibold">
          Search properties to rent
        </h1>
        <input
          type="text"
          list="nameList"
          className="mr-4 border-2 text-sm p-1 rounded-md border-gray-500"
          placeholder="Search with search bar"
          name="searchBarText"
          onChange={handleUpperSearch}
        />
        <datalist id="nameList">
          {names.map((item, index) => {
            return <option value={item} key={index} />;
          })}
        </datalist>
      </div>
      {/* Lower Filter*/}
      <div >
        <form onSubmit={handleSearch} className="flex justify-between h-[80px] items-center bg-white px-4 rounded-md">
          <div>
            <label htmlFor="location" className="text-gray-400">
              Location
            </label>
            <br />
            <select name="location" id="location">
              <option value="">Select Location</option>
              {locations.map((item, index) => {
                return (
                  <option
                    className="font-bold text-xl"
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="text-gray-400">
              When
            </label>
            <br />
            <input
              type={inputType}
              onFocus={handleFocus}
              placeholder="Select Move-in Date"
              id="date"
              name="date"
            />
          </div>
          <div>
            <label htmlFor="price" className="text-gray-400">
              Price Range
            </label>
            <br />
            <select
              id="price"
              value={selectedPriceRange}
              onChange={handlePriceChange}
            >
              <option value="">Select Price Range</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-1500">$1000 - $1500</option>
              <option value="1500-2000">$1500 - $2000</option>
              <option value="2000-2500">$2000 - $2500</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="text-gray-400">
              Type
            </label>
            <br />
            <select name="type" id="type">
              <option value="">Select Type</option>
              {type.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="bg-violet-600 py-2 px-5 rounded-md text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-[75vw] flex justify-between flex-wrap mx-auto">
        {filteredData.map((obj, index) => {
          return <Card {...obj} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
