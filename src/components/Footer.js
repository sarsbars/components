import Button from './Button';

function Banner() {
    return (
        <div className="hero-image">
            <div className="container flex">
                <h2>My four cats</h2>
                <p>Charlie, Ruby, Bagel and Cece</p>
                <Button variant="main">Join the Club</Button>
                <Button variant="secondary">Learn More</Button>
            </div>
        </div>
    );
}

export default Banner;
