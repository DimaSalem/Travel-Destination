import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import './Home.css';

const toursData = require('../../data/db.json');
function Home() {
    return (
        <>
            <Header />
            <div className='container'>
                {toursData.map(element => {
                    return (
                        <div className='tour'>
                            <Tours tourName={element.name} tourImage={element.image} />
                        </div>
                    )
                })}
            </div >
            <Footer />
        </>

    )
}


export default Home;