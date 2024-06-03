import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setcountries]=useState([]);
    const [visitedCountry, setvisitedCountry]=useState([])
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setcountries(data))
    },[])

const handlevisitedCountry= country =>{
    console.log('add to your visited country');
    console.log(country)
}

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>visited countries</h5>
                <ul>

                </ul>
            </div>
            <div className="country-containner">
            {
                countries.map(country => <Country key={country.cca3} 
                country={country} handlevisitedCountry={handlevisitedCountry}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;