import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, FormControl, Form, Button, Nav, Spinner} from 'react-bootstrap';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{textAlign:"center"}}>
    <h1 style={{fontWeight:"bold", fontSize:"80px"}}>Let's help women!</h1>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft:`auto`,marginRight:`auto` }}>
      <Image />
    </div>

    
  </Layout>
)

export default IndexPage
