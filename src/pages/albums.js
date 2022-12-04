import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

const AlbumsPage = ({ data: {allWpAlbum: {edges}} }) => {
    return (
        <Layout>
            {edges.map((item) => {
                const album = item.node.albumMeta;
                return <p key={item.node.id}>{album.albumTitle}</p>
            })}
        </Layout>
    );
}

export const query = graphql`
query MyQuery {
    allWpAlbum {
      edges {
        node {
          id
          albumMeta {
            artist
            albumTitle
            releaseYear
          }
        }
      }
    }
  }
`

export default AlbumsPage