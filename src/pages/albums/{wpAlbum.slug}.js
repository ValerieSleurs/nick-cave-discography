import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const AlbumPage = ({ data: { wpAlbum: { albumMeta: album }}}) => {
  const image = getImage(album.albumCover.localFile);
  return (
    <Layout>
      <div>
        <h3>{album.artist}</h3>
        <h3>{album.albumTitle} ({album.releaseYear})</h3>
        <GatsbyImage image={image} alt={album.albumCover.altText} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    wpAlbum(id: {eq: $id}) {
      albumMeta {
        artist
        albumTitle
        releaseYear
        albumCover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`

export default AlbumPage