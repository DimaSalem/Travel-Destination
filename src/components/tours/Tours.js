import './Tours.css'

function Tours(props) {
    return (
        <div id="tours">
            <h2>{props.tourName}</h2>
            <img src={props.tourImage} alt={props.tourName} />

        </div>
    )
}

export default Tours;