import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Album from "../components/album"
import {
  headerContainer,
  headerTitle,
  headerPicture,
  bioContainer,
  bioTitles,
  bioPicture,
  bioText,
  button,
  featuredProducts,
  highlightsContainer,
  highlightsTile,
  highlightsTitle,
  contactContainer
} from "../page.module.css"

const IndexPage = ({ data: { wpPage: { homePageFields, contactFields } } }) => {
  console.log(homePageFields);
  const heroImage = getImage(homePageFields.picture.localFile);
  const bioImage = getImage(homePageFields.bioImage.localFile);

  return (
    <Layout pageTitle="Nick Cave and the Bad Seeds">
      <section className={headerContainer}>
        <GatsbyImage className={headerPicture} image={heroImage} alt={homePageFields.picture.altText} />
        <h2 className={headerTitle}>{homePageFields.title}</h2>
      </section>

      <section className={bioContainer}>
        <div className={bioTitles}>
          <h2>{homePageFields.bioTitle}</h2>
          <h3>{homePageFields.bioSubtitle}</h3>
        </div>
        <div className={bioPicture}>
          <GatsbyImage image={bioImage} alt={homePageFields.bioImage.altText}
          />
        </div>
        <div className={bioText}>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.description,
            }}
          />
          <div className={button}>
            <a target="__blank" href={homePageFields.callToAction.url}>
              {homePageFields.callToAction.title}
            </a>
          </div>
        </div>
      </section>

      <section className={featuredProducts}>
        <div className={highlightsContainer}>
          <div className={highlightsTile}>
            <h2 className={highlightsTitle}>Highlights</h2>
          </div>
          {homePageFields.featuredProducts.map(album => {
            return (
              <Album slug={`albums/${album.slug}`} key={album.id} album={album} />
            );
          })}
        </div>
      </section>

      <section className={contactContainer}>
        <h2>{contactFields.contactTitle}</h2>
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
        bioTitle
        bioSubtitle
        bioImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        callToAction {
          title
          url
        }
      }
      contactFields {
        contactTitle
        website
        instagram
        facebook
        youtube
        contactPicture {
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
`

export default IndexPage