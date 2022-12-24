import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import Album from "../../components/album"
import {
  infoContainer,
  text,
  albumsContainer,
  albumTile
} from "../../page.module.css"

const AlbumsPage = ({ data: { allWpAlbum: { edges }, wpPage: { albumsPageFields } } }) => {
  console.log(edges, albumsPageFields)
  const image = getImage(albumsPageFields.picture.localFile)

  return (
    <Layout>
      <section className={infoContainer}>
        <h2>{albumsPageFields.title}</h2>
        <div
          className={text}
          dangerouslySetInnerHTML={{
            __html: albumsPageFields.description,
          }}
        />
      </section>

      <section className={albumsContainer}>
        <div className={albumTile}>
          {edges.map(({ node: album }) => {
            return (
              <Album slug={album.slug} key={album.id} album={album} />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "albums"}) {
      albumsPageFields {
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    allWpAlbum(sort: {fields: albumMeta___releaseYear}) {
      edges {
        node {
          albumMeta {
            albumTitle
            releaseYear
            albumType
            albumCover {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          id
          slug
        }
      }
    }
  }
`

export default AlbumsPage