import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { container } from './layout.module.css'
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          title
        }
      } 
      wpPage(slug: {eq: "home-page"}) {        
        contactFields {
          spotify   
        }
      }     
    }  
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <Header spotifyLink={data.wpPage.contactFields} />
      <main>
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

export default Layout