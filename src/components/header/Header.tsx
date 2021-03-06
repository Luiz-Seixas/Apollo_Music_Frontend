import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

import { MdSearchOff } from "react-icons/md";

export function Header() {
  const { search, setSearch } = useContext(AppContext);
  const history = useNavigate();

  return (
    <nav className="headerContent">
      <a href="/">Apollo Music</a>
      <form>
        <input
          type="text"
          placeholder="Artist or Music"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem("search", search);
            history(`/results/${search}`);
          }}
        >
          <MdSearchOff />
        </button>
      </form>
      <span>Library</span>
    </nav>
  );
}
