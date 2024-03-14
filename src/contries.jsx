import { useEffect, useState } from "react";
import Country from "./country";


const Contries = () => {

    const [countries, setCountries] = useState([])

    const [markVisited, setMarkVisited] = useState([])

    const handleMarkVisitedBtn = (country) => {
        const newMarkVisited = [...markVisited, country]
        setMarkVisited(newMarkVisited)
        console.log(newMarkVisited);
        // newMarkVisited.map(c=>console.log(c.name.common))
    }
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        console.log(countries.length);
        console.log(countries);
    }, [])
    return (
        <div className="con">
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Country: {markVisited.length}</h4>
                <div style={{display:"flex", gap:"20px"}}>
                    {
                        markVisited.map(country=> <img style={{width:"100px", height:"80px"}} key={country.cca3} src={country.flags.png}></img>)
                    }
                    </div>
                <ul style={{maxWidth:"50px"}}>
                    {
                      markVisited.map(c=> <li key={c.cca3} style={{marginBottom:"10px"}}>{c.name.common}</li>)
                    }
               
                </ul>
            </div>
            <div className="countries1">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleMarkVisitedBtn={handleMarkVisitedBtn}></Country>)
                }
            </div>
        </div>

    );
};

export default Contries;