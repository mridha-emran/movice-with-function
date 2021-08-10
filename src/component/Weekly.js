import Card from "./Card";
import moment from "moment";
import{ useState,useEffect} from 'react'

let TODAY= moment().format("YYYY-DD-MM")
let LAST_WEEK=moment().subtract(1, 'days').format("YYYY-DD-MM")
function Weekly(){
    const[movies, setmovies]=useState([])

    useEffect(()=>{
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=20e0cad7b9b54645e2cd9dc394f11db8`)
        .then(res => res.json())
        .then(movie => {
           setmovies(movie.results)
        })
    })

    return(
        <div>
            <hi>Weekly</hi>

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

export default Weekly