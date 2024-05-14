import { Link } from 'react-router-dom';
import './Tour1.css'

function Tour1(props) {
    return (
        < div id="tour" >
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
        </div >
    )
}
export default Tour1;