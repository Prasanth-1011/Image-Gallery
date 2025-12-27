import { useState, useEffect } from 'react';
import Image from '../Components/Image';
import { homeArray } from '../Arrays';

function Home() {
    const [indexVal, setIndexVal] = useState(0);

    useEffect(function () {
        const timer = setInterval(function () {
            handleForward();
        }, 3000);
        return () => clearInterval(timer);
    });

    function handleForward() {
        setIndexVal((indexVal + 1) % homeArray.length);
    }

    function handleBackward() {
        setIndexVal((indexVal - 1 + homeArray.length) % homeArray.length);
    }

    return (
        <>
            <section className="home flex-center">
                <div className="home__image">
                    <Image name={homeArray[indexVal].src} alt={homeArray[indexVal].alt} />
                </div>
                <div className="home__buttons">
                    <button type="button" onClick={handleBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroIcon-Backward">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                        </svg>

                    </button>
                    <button type="button" onClick={handleForward}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroIcon-Forward">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                        </svg>

                    </button>
                </div>
                <div className="home__container">
                    {
                        homeArray.map(function (image, index) {
                            return (
                                <div key={index} className="home__container__image">
                                    <Image name={image.src} alt={image.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home;