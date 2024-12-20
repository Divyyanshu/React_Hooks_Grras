import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const [starWars, setStarWars] = useState([]);

    useEffect(() => {
        async function fetchJokes() {
            const data = await axios.get("https://swapi.py4e.com/api/people/1/");
            setStarWars(data.data)
        }
        fetchJokes();
    }, [])
    return (
        <ApiContext.Provider value={{ starWars, setStarWars }}>
            {children}
        </ApiContext.Provider>
    )
}
