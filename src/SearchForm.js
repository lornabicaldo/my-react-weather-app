import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
    return (
     <form>
      <input type="search" placeholder="Search a city.." className="search-button" />
      <input type="Submit" value="Search" className="submit-button" />
    </form>
    );
}