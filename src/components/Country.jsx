// import React, { useState } from 'react'
// import CountryData from './CountryData'
// import CountryCard from './CountryCard'

// const Country = () => {

//     const [singleCountry, setSingleCountry] = useState({
//         countryName: "India",
//         countryFlag: "https://flagcdn.com/w320/in.png",
//         capitalName: "New Dehli",
//     })

//     const countryData = (data) => {

//         if (data) {

//             setSingleCountry((perv) => {
//                 return {
//                     ...perv, capitalName: data[0].fifa,
//                     countryFlag: data[0].flags.png,
//                     countryName: data[0].capital[0]
//                 }
//             })

//         }
//     }

//     return (
//         <>
//             <CountryData countryData={countryData} />
//             <CountryCard singleCountry={singleCountry} />
//         </>
//     )
// }

// export default Country