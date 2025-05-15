import Button from './Button';

function Banner(props) {
    return (
        <div className="hero-image">
            <div className="container flex">
                <h2>My four cats</h2>
                <p>Charlie, Ruby, Bagel and Ccece</p>
                <Button isLoggedIn={props.isLoggedIn}></Button> 
                <Button isLoggedIn={props.isLoggedIn}></Button> 
            </div>
        </div>
           
                 
    
    )
}

export default Banner;