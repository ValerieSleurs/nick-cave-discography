import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    albumContainer,
    albumImage,
    albumDetails
} from "./album.module.css"

const Album = ({ album, slug }) => {
    const albumCover = getImage(album.albumMeta.albumCover.localFile)

    return (
        <Link className={albumContainer} to={slug}>
            <GatsbyImage
                className={albumImage}
                image={albumCover}
                alt={album.albumMeta.albumCover.altText}
            />
            <article className={albumDetails}>
                <h2>{album.albumMeta.albumTitle}</h2>
                <h3>{album.albumMeta.releaseYear}</h3>
                <h4>{album.albumMeta.albumType}</h4>
            </article>
        </Link>
    )
}

export default Album
