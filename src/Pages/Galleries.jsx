import { useState } from 'react';
import { galleryArray } from '../Arrays';
import Image from '../Components/Image';

function Galleries() {
    const [hover, setHover] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [name, setName] = useState("");

    const handleClick = (album) => setPhotos(album)

    function hovered(album, index, value) {
        if (value) {
            index < 3 ? setHover("active") : setHover("passive");
            setName(album);

        } else {
            setHover(null)
        }
    }

    return (
        <>
            <section className="gallery flex-center">
                <h5 className={`gallery__message top ${hover === "active"}`}>Click And View {name.album} Images Down Here</h5>
                <div className="gallery__container">
                    {
                        galleryArray.map(function (album, index) {
                            return (
                                <div key={index} className="gallery__container__album" onClick={() => handleClick(album)}
                                    onMouseEnter={() => hovered(album, index, "active")}
                                    onMouseLeave={() => hovered(album, "")}
                                    onTouchStart={() => hovered(album, index, "active")}
                                    onTouchEnd={() => hovered(album, "")}
                                >
                                    <Image name={album.thumbnail} alt={album.album} />
                                    <h3>{album.album}</h3>
                                </div>
                            )
                        })
                    }
                </div>

                <h5 className={`gallery__message bottom ${hover === "passive"}`}>Click And View {name.album} Images Down Here</h5>

                {
                    photos && (
                        <section className="selected__gallery">
                            <h2>{photos.album}  Images ({photos.images.length})</h2>
                            <div className="selected__container">
                                {
                                    photos.images.map(function (image, index) {
                                        return (
                                            <div key={index} className="selected__container__image">
                                                <Image name={image.src} alt={image.alt} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                }
            </section>
        </>
    )
}

export default Galleries;