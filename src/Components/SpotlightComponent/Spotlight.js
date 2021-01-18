import React, {useEffect, useState} from 'react'
import './SpotlightStyle.css'
import instance from '../../axios'
import requests from '../../requests'
import nSeries from '../../Images/netflixIcon.png'
import play from '../../Images/playIcon.png'
import moreInfo from '../../Images/infoIcon.png'

const baseUrl='https://image.tmdb.org/t/p/original/'


function Spotlight() {

    const [spotlight, setSpotlight] = useState([])
    useEffect(() =>{
        async function getSpotlight(){
            const request = await instance.get(requests.getOriginals)
            const randomIndex =  Math.floor(Math.random() * 11)
            setSpotlight( request.data.results[randomIndex])
            return request


        }
        getSpotlight()

    }, [])

    console.log(spotlight)
    const maxLength = 150

    function fitOverview(max, text){
        return text?.length > max ? text.substring(0, maxLength)  + '...': text
    }

  

    return (
       <header className="spotlight"
            style={{backgroundImage:`url(${baseUrl}${spotlight?.backdrop_path})`}}
       >
           <div className="spotlight-contents">
               <div className="netflix-marker">
                   <img src={nSeries}  alt="N Series Icon"/>
                   <h3>Series</h3>

               </div>
               <h1>{spotlight.name}</h1>
               <p className="description">{fitOverview(maxLength, spotlight?.overview)}</p>
               <div className="spotlight-buttons">
                   <button className="spotlight-button">
                   <img src={play}  alt="Play"/>
                   <p>Play</p>

                   </button>
                   <button className="spotlight-button">
                   <img src={moreInfo}  alt="Info"/>
                   <p>More Info</p>

                   </button>
                   
               </div>
        

           </div>
           <div className="spotlight-fade"></div>
         

           

       </header>
    )
}

export default Spotlight
