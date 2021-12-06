import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

import "../styles/home.css";
import HomeImage from "../assets/homeImage.svg";
import { MdSearchOff } from "react-icons/md";

export function Home() {
  const { search, setSearch } = useContext(AppContext);
  const history = useNavigate();

  return (
    <div className="App">
      <div className="content">
        <img src={HomeImage} alt="Logo" />

        <div className="search">
          <h1>Apollo Music</h1>

          <p>Find your favorites artists and songs! </p>

          <form>
            <input
              type="text"
              placeholder="Artist or Music"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {/* <Link to="/results"> */}
            <button
              type="submit"
              onClick={() => {
                history(`/results/${search}`);
              }}
            >
              <MdSearchOff size="20px" /> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
