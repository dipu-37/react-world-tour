import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setcountries]=useState([]);
    const [visitedCountry, setvisitedCountry]=useState([])
    const [visitedFlags,setvisitedflags]=useState([]);


    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setcountries(data))
    },[])

const handlevisitedCountry= country =>{
    console.log('add to your visited country');
    const newvisitedcountry = [...visitedCountry,country];
    setvisitedCountry(newvisitedcountry)
    console.log(country)
}

const handleVisitedFlags = flag =>{
 console.log('flags adding');
 const newvisitedFlags = [...visitedFlags , flag];
 setvisitedflags(newvisitedFlags);
}

// remove item  form a list in a state 

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            {/* visited countries  */}
            <div>
                <h5>visited countries :{visitedCountry.length}</h5>
                <ul>
                    {
                        visitedCountry.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, index )=> <img key={index} src={flag} alt="" /> )
                }
                    
            </div>
            {/* display countries  */}
            <div className="country-containner">
            {
                countries.map(country => <Country key={country.cca3} 
                country={country} handlevisitedCountry={handlevisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;