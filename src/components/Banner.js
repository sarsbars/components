import Button from './Button';

function Banner({ children }) {
  return (
    <div className="hero-image">
      <div className="container flex gap-40">
        {children} 
      </div>
      <div className="right container flex column">
        <h2>Cats are Amazing</h2>
        <p>The Internet Made Them Famous for a Reason</p>
        <div className="buttons">
            <Button variant="main">Join the Club</Button>
            <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;