import "./TourDetails.css";
import data from '../../data/db.json'
import { useState } from "react";
import { useParams } from "react-router-dom";

function TourDetails() {
    const { id } = useParams();
    const city = data.find(city => city.id == id);

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <main>
            <div className="details-div">
                <h1>{city.name}</h1>
                <img src={city.image} alt={city.name} />
            </div>

            <div className="details-div text">
                <p>
                    {showMore ? city.info : `${city.info.slice(0, 300)}...`}
                    <button onClick={toggleShowMore}>
                        {showMore ? "Show less" : "Show more"}
                    </button>
                </p>
            </div>
        </main>
    );
}

export default TourDetails;
