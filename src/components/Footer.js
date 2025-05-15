
import Nav from './Nav';

function Footer(props) {
    return (
        <footer>
            <div className='container flex'>
                <h1>{props.title}</h1>
                <p className='copyright'>@  Copyrights Reserved</p>
                <Nav list={props.navLinks} />
            </div>        
        </footer>
    )
}

export default Footer;