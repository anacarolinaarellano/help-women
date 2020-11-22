/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import Header from "./header"
import "../components/style.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    
      <div class="nav-pane">
        <Navbar style={{height: "80px", backgroundColor:"#C377E0"}}>
          <Navbar.Brand href="#impact" style={{ color: "White", fontWeight:"bold", fontSize:"30px"}}>#TwitterForWomen</Navbar.Brand>
          <div style={{position:"absolute", right:"5px"}}>
          <Nav.Link href="#impact" class="element" style={{ color: "White", fontWeight:"bold", fontSize:"30px", marginRight:"1 rem"}}> Our Impact</Nav.Link>
          <Nav.Link href="#aboutUs" class="element" style={{ color: "White", fontWeight:"bold", fontSize:"30px", marginRight:"1 rem"}}>About Us</Nav.Link>
          <Nav.Link href="#association" class="element" style={{ color: "White", fontWeight:"bold", fontSize:"30px", marginRight:"1 rem"}}>Join As Association</Nav.Link>
          </div>
        </Navbar>
      </div>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0`,
          padding: `0 1rem 1rem`,
          boxSizing: "border-box"

        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> during #Codechella!! ;)
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
