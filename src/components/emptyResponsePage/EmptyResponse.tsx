import NoData from "../../assets/no_data.svg";
import "./emptyResponse.css";

export function EmptyResponsePage() {
  return (
    <div className="EmptyPage">
      <div className="emptyContent">
        <div className="message">
          <span>400!</span>
          <p>
            Sorry, this artist does not have works registered in our system.
          </p>
        </div>
        <img src={NoData} alt="noDataImage" />
      </div>
    </div>
  );
}
