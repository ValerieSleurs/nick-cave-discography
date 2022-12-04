import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout'

const AlbumPage = ({ data: { wpAlbum: { albumMeta: album }}}) => {
  return (
    <Layout>
      <div>
        <h3>{album.artist}</h3>
        <h3>{album.albumTitle} ({album.releaseYear})</h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpAlbum(id: {eq: $id}) {
      albumMeta {
        artist
        albumTitle
        releaseYear
      }
    }
  }
`

export default AlbumPage