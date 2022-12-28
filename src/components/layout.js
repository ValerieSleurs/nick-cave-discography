import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { container } from './layout.module.css'
import Header from "../components/header"
import Footer from "../components/footer"

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