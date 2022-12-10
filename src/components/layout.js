import * as React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout