import React, {useEffect, useState}from 'react'
import instance from '../../axios'
import './RowStyle.css'



const baseUrl='https://image.tmdb.org/t/p/original/'

export default function Row({title, dataUrl}) {
    const [movies, setMovies] = useState([])
   
    useEffect(() => {
        async function getData(){
            const request = await instance.get(dataUrl)
            setMovies(request.data.results) 
            return request

        }
        getData()

       
    }, [dataUrl])

    

    


    return (
        <div className="row">

            <h2 className={(title ==="Netflix Originals"? 'originals-title' : '') }>{title}</h2>  
            
            <div className={"poster-row" + (title ==="Netflix Originals"? ' originals-row' : '') }>
                {movies.map(movie=>(
                   
                    <img 
                    key = {movie.id} 
                    className= {"poster" + ( title!=="Netflix Originals"? ' ' : ' netflix-original')}
                    src={`${baseUrl}${title!=="Netflix Originals" ? movie.backdrop_path : movie.poster_path }`}
                    
                    alt={movie.name}
                  
                    
                    /> 
                  
                   
                )
                    
                )}

            </div>
           
            
            
        </div>
    )
}
