import './Article.css'

export function Article(){
    return(
        <main className='main'>
            <section className='main__section'>
                <article className='main__article'>
                    <h1 className='main__h1'>Look beyond limits</h1>
                    <div className='main__div'>
                        <button className='main__buttons'>Get in touch</button>
                        <button className='main__buttons'><svg className='main__svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></button>
                    </div>
                    <picture className='main__img-container'>
                        <img src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1672275827/landing-blizt-react/person_lvbd4e.png"/>
                    </picture>
                </article>
                <article className='main__article'>
                    <span>tu</span>
                    <span>v</span>
                    <span>ir</span>
                    <span>a</span>
                </article> 
                <article className='main__article'>
                    <p>They are very proactive and work to make your product even better.</p>
                    <h6>NETFLIX</h6>
                </article>
                <article className='main__article'>
                    <div main__header>
                        <h4 className='article__header__h4'>The most professional, experienced and specialized team in the industry.</h4>
                        <a className='article__header__a'>Work with us </a>
                    </div>
                    <div className='main__footer'>
                        <div className='footer__div'>
                            <picture className='footer__picture'><img className='footer__img' src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263609/landing-blizt-react/user-1_knqoqu.webp"/></picture>
                            <picture className='footer__picture'><img className='footer__img' src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263615/landing-blizt-react/user-2_bfb0ch.webp"/></picture>
                            <picture className='footer__picture'><img className='footer__img' src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263609/landing-blizt-react/user-1_knqoqu.webp"/></picture>
                        </div>
                        <p className='footer__p'>Meet our developers</p>
                    </div>
                </article>
                <article className='main__article'>
                    <h3 className='main__h3'>3D</h3>
                    <svg className='main__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"></path></svg>
                </article>
            </section>

        </main>
    )
}