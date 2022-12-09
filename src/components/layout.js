import * as React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import { container } from './layout.module.css'
import { useStaticQuery, graphql } from "gatsby";

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