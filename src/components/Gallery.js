function Gallery(props) {
    return (
        <div className="gallery flex">
            {props.list.map(kitty => (
                <div key={kitty.id} className="gallery-item">
                    <div className="poster-img">
                        <img src={kitty.poster} className="kitty-poster" alt={kitty.title} />
                    </div>
                    <p>{kitty.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;