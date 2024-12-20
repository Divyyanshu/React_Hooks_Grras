import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const CountryData = ({ countryData }) => {
    const [country, setCountry] = useState([]);
    const [countryName, setcountryName] = useState("India");

    const [singleCountryName, setsingleCountryName] = useState({
        countryName: "India",
        capitalName: "IN",
        countryFlag: "https://flagcdn.com/w320/in.png"
    });

    const fetchAPI = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all")
            if (response) setCountry(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, []);

    const singleFetchAPI = async (country = "india") => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)

            const data = response.data[0]

            if (data) setsingleCountryName((perv) => {
                return {
                    ...perv, capitalName: data.capital,
                    countryFlag: data.flags.png,
                    countryName: data.name.common
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setcountryName(() => e.target.value);
    }

    useEffect(() => {
        singleFetchAPI(countryName)
    }, [countryName])


    return (
        <>
            <div>
                <select onChange={handleChange} className="border-2 border-black mx-5 my-10 pl-5" name="countries" id="countries">
                    <option value="india">-----Country Select ------</option>
                    {country.map((country, index) => (
                        <Card
                            key={index}
                            countryName={country.name.common}
                        />
                    ))}
                </select>
                <div className='m-auto my-10 px-2 py-4 border-2 border-black w-96 rounded-lg bg-slate-800 '>
                    <img src={singleCountryName.countryFlag} className='px-5 py-5' />
                    <div className='px-5 text-white font-semibold'>
                        <label htmlFor="countryName">Country Name :</label>
                        <p>{singleCountryName.countryName}</p>
                        <label htmlFor="capitalName">Capital Name :</label>
                        <p>{singleCountryName.capitalName}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountryData;
