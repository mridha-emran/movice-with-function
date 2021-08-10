import Card from "./Card";
import moment from "moment";
import{ useState,useEffect} from 'react'

let TODAY= moment().format("YYYY-DD-MM")
let LAST_WEEK=moment().subtract(1, 'days').format("YYYY-DD-MM")
function WeeklyBattle(){
    const[movies, setmovies]=useState([])
    const[ currentBattle, setcurrentBattle]=useState(0)
    const[favoriteId, setfavoriteId]=useState([])
 useEffect(()=>{
    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=20e0cad7b9b54645e2cd9dc394f11db8`)
    .then(res => res.json())
    .then(movie => {
       setmovies(movie.results)
    })
})

const onClick = (id) => {
    setcurrentBattle(
        currentBattle + 2
    )
    setfavoriteId([...favoriteId,id])
    localStorage.setItem("favorites", JSON.stringify(favoriteId))    
}
if(movies.length===0)
{return null} 
if(currentBattle===movies.length){
  return (<p className="jumbotron display-1 text-center">you have seen all movies</p>)
}

return (
           
    <div className="container">
        <div className="row">
            <div className="col-6"onClick={() => {onClick(movies[currentBattle].id) }}>
            <Card
                    poster_path={movies[currentBattle].poster_path}
                    title={movies[currentBattle].title}
                    release_date={movies[currentBattle].release_date}
                    overview={movies[currentBattle].overview}
                />
            </div>
            <div className="col-6" onClick={() => {onClick(movies[currentBattle + 1].id) }}>
            <Card
                    poster_path={movies[currentBattle+1].poster_path}
                    title={movies[currentBattle].title+1}
                    release_date={movies[currentBattle+1].release_date}
                    overview={movies[currentBattle+1].overview}
                />
            </div>
        </div>
    </div>
)

}



export default WeeklyBattle