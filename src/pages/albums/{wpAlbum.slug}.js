import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  infoContainer,
  infoText,
  taxonomy,
  albumCover,
  videoContainer,
  iframe
} from "../../page.module.css"

const AlbumPage = ({ data: { wpAlbum: { albumMeta: album, producers: { nodes: producers } } } }) => {
  const image = getImage(album.albumCover.localFile);
  console.log(album);

  return (
    <Layout>
      <section className={infoContainer}>
        <div className={infoText}>
          <h3>{album.albumTitle} ({album.releaseYear})</h3>
          <div className={taxonomy}>
            <div>Produced by:
              {producers.map((producer, i) => (
                <span key={i}> {producer.name} {i + 1 < producers.length && "- "}</span>
              ))}
            </div>
          </div>
          <p>{album.albumType} | Performed by {album.artist} | Released by {album.recordLabel}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: album.description,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: album.tracklisting,
            }}
          />
          <p>Length: {album.length}</p>
        </div>
        <div>
          <GatsbyImage className={albumCover} image={image} alt={album.albumCover.altText} />
        </div>
      </section>

      <section className={videoContainer}>
        <h2>Discover {album.videoTitle}</h2>
        <iframe className={iframe} src={album.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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