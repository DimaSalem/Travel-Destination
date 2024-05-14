import { Link } from 'react-router-dom';
import Tour1 from './tour1/Tour1.js'
import './Tours.css';

import toursData from '../../data/db.json';

function Tours() {
    return (
        <div id="tours">
            {toursData.map(tour => {
                return (
                    <Link to={`/city/${tour.id}`} key={tour.id}>
                        <Tour1 name={tour.name} image={tour.image} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Tours;

