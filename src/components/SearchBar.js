import { useRef } from "react";

import magnifying_glass from "../images/magnifying_glass.svg";
import closeX from "../images/closeX.png";

export default function SearchBar(props) {
  const ref = useRef();

  const clearSearch = () => {
    ref.current.value = "";
    props.setSearchText("");
  };

  return (
    <div className="searchBar">
      <img src={magnifying_glass} alt="magnifying glass" />
      <form>
        <input
          ref={ref}
          type="text"
          className="searchBarTextInput"
          placeholder="suche ..."
          onChange={(event) => props.setSearchText(event.target.value)}
        />{" "}
      </form>
      <img
        src={closeX}
        height={25}
        width={25}
        onClick={clearSearch}
        alt="click here to clear search"
      />
    </div>
  );
}
