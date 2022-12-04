import * as React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout'

const AlbumsPage = ({ data: { allWpAlbum: { edges } } }) => {
  return (
    <Layout>
      {edges.map((item) => {
        const album = item.node.albumMeta;
        const slug = item.node.slug;
        return (
          <Link to={`/albums/${slug}`}>
            <p key={item.node.id}>{album.albumTitle}</p>
          </Link>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allWpAlbum {
      edges {
        node {
          albumMeta {
            artist
            albumTitle
            releaseYear
          }
          id
          slug
        }
      }
    }
  }
`

export default AlbumsPage