import Nav from './Nav';

function Footer(props) {
    return (
        <header>
            <div className='container flex'>
                <h1>{props.title}</h1>
                <Nav list={props.navLinks} />
                <p className='copyright'>@  Copyrights Reserved</p>
            </div>        
        </header>
    )
}

export default Footer;

