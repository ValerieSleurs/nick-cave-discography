import * as React from "react"
import { Link } from "gatsby"

const Album = ({album, slug}) => {
    return (
        <Link to={slug}>
            <p>{album.albumMeta.albumTitle} ({album.albumMeta.releaseYear})</p>
        </Link>
    )
}

export default Album
