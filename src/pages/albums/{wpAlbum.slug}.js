import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const AlbumPage = ({ data: { wpAlbum: { albumMeta: album, producers: { nodes: producers } } } }) => {
  const image = getImage(album.albumCover.localFile);
  console.log(album);

  return (
    <Layout>
      <div>
        <h3>{album.artist}</h3>
        <h4>{album.albumTitle} ({album.releaseYear})</h4>
        <div>
            {producers.map((producer, i) => (
              <span key={i}>Producers: {producer.name} {i + 1 < producers.length && "- "}</span>
            ))}
          </div>
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
        <iframe width="560" height="315" src={album.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
      </div>
      <div>
        <GatsbyImage image={image} alt={album.albumCover.altText} />
      </div>
    </Layout>
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
        video
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