
import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <div className='container flex'>
                <h1>{props.title}</h1>
                <Nav list={props.navLinks} />
            </div>        
        </header>
    )
}

export default Header;