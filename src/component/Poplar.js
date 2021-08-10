import{ useState,useEffect} from 'react'
import Card from './Card'


function Poplar(){
    const[movies, setmovies]=useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
        .then(res => res.json())
        .then(movie => {
           setmovies(movie.results)
        })
    })

    return(
        <div>
            <h1>Poplar</h1>

            <ul>
                {movies.map((elem) => {
                    const movieLink = "https://image.tmdb.org/t/p/w300/"
                    return <li>
                        <Card
                            poster_path={movieLink + elem.poster_path}
                            title={elem.title}
                            release_date={elem.release_date}
                            overview={elem.overview}
                        />
                    </li>
                })}
            </ul>
        </div>
    )


  } 

export default Poplar