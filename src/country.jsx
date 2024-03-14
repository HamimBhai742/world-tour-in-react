import { useState } from "react";

const Country = ({ country, handleMarkVisitedBtn }) => {
    const { name, population, timezones, flags, region, startOfWeek,
        status } = country
    const [visited, setVisited] = useState(false)

    const handleBtn = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`countries ${visited ? 'visited' : 'non'}`}>
            <img className="img1" src={flags.png} alt="" />
            <h4>Country: {name.common}</h4>
            <h4>Population: {population}</h4>
            <h4>Timezones: {timezones[0]}</h4>
            <h4>Region: {region}</h4>
            <h4>Status: <span> {status} </span></h4>
            <h4>StartOfWeek: <span> {startOfWeek} </span></h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button style={{ backgroundColor: 'purple', color: "white" }} onClick={()=>handleMarkVisitedBtn(country)}>Mark Visited</button>
                <button className="btn" style={{ backgroundColor: visited ? 'blue' : 'red' }} onClick={handleBtn}>{visited ? 'Visited' : 'Going'}</button>
            </div>
        </div>
    );
};

export default Country;