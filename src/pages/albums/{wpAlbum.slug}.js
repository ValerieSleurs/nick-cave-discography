import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  albumCover,
  iframe
} from "../../page.module.css"

const AlbumPage = ({ data: { wpAlbum: { albumMeta: album, producers: { nodes: producers } } } }) => {
  const image = getImage(album.albumCover.localFile);
  console.log(album);

  return (
    <Layout>
      <section>
        <div>         
          <h2>{album.albumTitle} ({album.releaseYear})</h2>
          <div>
            <p>Produced by:</p>
            {producers.map((producer, i) => (
              <span key={i}>{producer.name} {i + 1 < producers.length && "- "}</span>
            ))}
          </div>
          <p>Artist: {album.artist}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: album.description,
            }}
          />
          <p>Album type: {album.albumType}</p>
          <p>Record label: {album.recordLabel}</p>
          <p>Length: {album.length}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: album.tracklisting,
            }}
          />
        </div>
        <div>
          <GatsbyImage className={albumCover} image={image} alt={album.albumCover.altText} />
        </div>
      </section>

      <section>
        <h2>Discover {album.videoTitle}</h2>
        <iframe className={iframe} width="560" height="315" src={album.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
      </section>
    </Layout >
  )
}

export const query = graphql`
  query ($slug: String) {
    wpAlbum(slug: {eq: $slug}) {
      albumMeta {
        artist
        albumTitle
        releaseYear
        description
        albumType
        recordLabel
        length
        tracklisting
        albumCover {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        videoTitle
        videoUrl
      }
      producers {
        nodes {
          name
        }
      }
    }
  }
`

export default AlbumPage