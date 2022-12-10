import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Album from "../components/album"

const IndexPage = ({ data: { wpPage: { homePageFields } } }) => {
  console.log(homePageFields);
  const image = getImage(homePageFields.picture.localFile);

  return (
    <Layout pageTitle="Nick Cave and the Bad Seeds">
      <section>
        <div>
          <h2>{homePageFields.title}</h2>
          <GatsbyImage image={image} alt={homePageFields.picture.altText} />
        </div>
      </section>
      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: homePageFields.description,
          }}
        />
      </section>
      <section>
        <h2>Highlights</h2>
        <div>
          {homePageFields.featuredProducts.map(album => {
            return (
              <Album slug={`albums/${album.slug}`} key={album.id} album={album} />
            );
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "home-page"}) {
      homePageFields {
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
        featuredProducts {
          ... on WpAlbum {
            id
            slug
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
          }
        }
      }
    }
  }
`

export default IndexPage