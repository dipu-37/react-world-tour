import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country)
    const {name , flags , cca3}=country;

    const [visited, setvisited]=useState(false)
    const handlevisited = () =>{
        setvisited(!visited)
    }

    return (
        <div className='country'>
            <h3 >name :{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Code: {cca3}</small></p>
            <button onClick={handlevisited}>{visited? 'Visited':'Going'}</button>
            {visited ? 'I have visited this country.':'i want to visite'}
        </div>
    );
};

export default Country;