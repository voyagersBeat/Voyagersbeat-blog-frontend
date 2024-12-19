import React from "react";

const SearchTab = ({ search, handleSearchToChange, handleSearch }) => {
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="w-full flex">
        <input
          type="text"
          value={search}
          onChange={handleSearchToChange}
          onKeyPress={handlePressKey}
          placeholder="Search Here..."
          className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none "
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-[#1e73be]"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchTab;
