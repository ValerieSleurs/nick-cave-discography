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
  highlightsContainer,
  highlightsTile,
  highlightsTitle,
  contactContainer,
  form,
  personalData,
  message,
  tourDatesInfo,
  socials,
  website,
  instagram,
  facebook
} from "../page.module.css"

const IndexPage = ({ data: { wpPage: { homePageFields, contactFields } } }) => {
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
          {homePageFields.bioSubtitle && (
            <h3>{homePageFields.bioSubtitle}</h3>
          )}
        </div>
        <div className={bioPicture}>
          <GatsbyImage image={bioImage} alt={homePageFields.bioImage.altText} />
        </div>
        <div className={bioText}>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.description,
            }}
          />
          <a className={button} href={homePageFields.callToAction.url}>
            {homePageFields.callToAction.title}
          </a>
        </div>
      </section>

      <section className={highlightsContainer}>
        <div className={highlightsTile}>
          <h2 className={highlightsTitle}>Highlights</h2>
        </div>
        {homePageFields.featuredProducts.map(album => {
          return (
            <Album slug={`albums/${album.slug}`} key={album.id} album={album} />
          );
        })}
      </section>

      <section className={contactContainer}>
        {contactFields.contactTitle && <h2>{contactFields.contactTitle}</h2>}
        <form className={form} name="contact" method="POST" data-netlify="true">
          <div className={personalData}>
            <input type="text" name="firstName" placeholder="First Name" required={true} />
            <input type="text" name="lastName" placeholder="Last Name" required={true} />
            <input type="email" name="email" placeholder="Email" required={true} />
          </div>
          <div className={message}>
            <input type="text" name="subject" placeholder="Subject" required={true} />
            <textarea name="message" placeholder="Message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={tourDatesInfo}>
          <h3>News and upcoming tour dates:</h3>
          <div className={socials}>
            <a
              className={website}
              target="__blank"
              href={contactFields.website}
            >
              {""}
            </a>
            <a
              className={instagram}
              target="__blank"
              href={contactFields.instagram}
            >
              {""}
            </a>
            <a
              className={facebook}
              target="__blank"
              href={contactFields.facebook}
            >
              {""}
            </a>
          </div>
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
      }
    }
  }
`

export default IndexPage