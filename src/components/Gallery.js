function Gallery(props) {
    return (
        <div className='movie-list flex'>
          {props.list.map(movie => (
              <div key={movie.id}>
                <div className='poster-img'>
                    <img src={movie.poster} className='movie-poster' />
                </div>
                <p>{movie.title}</p>
              </div>
          ))}
        </div>
      );
    }
    

export default Gallery;