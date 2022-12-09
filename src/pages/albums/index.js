import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import Album from "../../components/album"

const AlbumsPage = ({ data: { allWpAlbum: { edges }, wpPage: {albumsPageFields} } }) => {
  console.log(edges, albumsPageFields)
  const image = getImage(albumsPageFields.picture.localFile)

  return (
    <Layout>
       <div>
        <h2>{albumsPageFields.title}</h2>
        <div 
          dangerouslySetInnerHTML={{
          __html: albumsPageFields.description,
        }}
        />
      </div>
      <div>
        <GatsbyImage image={image} alt={albumsPageFields.picture.altText}/>
      </div>
      {edges.map(({node: album}) => {
        return (          
          <Album slug={album.slug} key={album.id} album={album} />
        );
      })}
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
    allWpAlbum {
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