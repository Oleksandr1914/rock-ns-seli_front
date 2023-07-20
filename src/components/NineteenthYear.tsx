import { useAppDispatch, useAppSelector } from "../hook/hookStor";
import { useEffect, useState } from 'react';
import { fetchNineteenthList } from "../store/Gallery/galleryOperation";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type InArray = {
    src: string;
    width: number;
    height: number;
}

const NineteenthYear = () => {
    const { NineteenthList, loading } = useAppSelector(state => state.rock)
    const dispatch = useAppDispatch();
    const [photos, setPhotos] = useState<InArray[]>([])
    const [index, setIndex] = useState(-1);


    useEffect(() => {
        dispatch(fetchNineteenthList())

    }, [dispatch])

    useEffect(() => {

        const newArray = NineteenthList?.map(el => {
            return { src: el.url, width: el.width, height: el.height };
        })
        setPhotos(newArray)
    }, [NineteenthList])

    return <div className="py-6 tablet:pt-8 laptop:pt-11">
        {loading ?
            <p>Loading...</p> :
            < >
                <PhotoAlbum photos={photos} layout="columns" columns={(containerWidth) => {
                    if (containerWidth < 484) return 2;
                    if (containerWidth < 800) return 3;
                    return 4;
                }} onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    thumbnails={{ border: 0 }}
                />
            </>}
    </div>
}

export default NineteenthYear
