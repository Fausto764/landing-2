import './Header.css';


export function Header (){
    return (
        <header className='header'> 
            <h2 className='header__h2'>BLITZ</h2>
            <nav className='header__nav'>
                <ul className='header__ul'>
                    <li className='header__li'><a href="#" className='header__a'>SERVICES</a> <svg  className='header__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                    <li className='header__li'><a href="#" className='header__a'>projects</a> <svg  className='header__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                    <li className='header__li'><a href="#" className='header__a'>about</a> <svg  className='header__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                </ul>
            </nav>
            <button className='header__button'>Contact us</button>
        </header>
    )
}