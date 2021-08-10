

function Card(props){
    return(
        <div>
                <img src={"https://image.tmdb.org/t/p/w300" + props.poster_path} alt="" />
                <p>Title: {props.title}</p>
                <p>Release date : {props.release_date}</p>
                <p>Description : {props.overview}</p>
            </div>
    )
}
export default Card