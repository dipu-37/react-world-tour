import { useState } from 'react';
import './Country.css';
const Country = ({country ,handlevisitedCountry}) => {
    console.log(country)
    const {name , flags , cca3}=country;

    const [visited, setvisited]=useState(false)
    const handlevisited = () =>{
        setvisited(!visited)
    }

    console.log(handlevisitedCountry);

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 >name :{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Code: {cca3}</small></p>
            <button>Mark visited</button>
            <br />
            <button onClick={handlevisited}>{visited? 'Visited':'Going'}</button>
            {visited ? 'I have visited this country.':'i want to visite'}
        </div>
    );
};

export default Country;