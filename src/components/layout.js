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

  console.log(data);

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <main>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout