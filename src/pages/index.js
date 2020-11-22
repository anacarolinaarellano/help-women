import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Carousel} from 'react-bootstrap';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Two from '../images/imgTwo.jpg'
import One from '../images/imgOne.jpg'
import Three from '../images/three.jpg'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Team from '../images/Map.png'


const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
   
    <div class="body " id="impact" style={{width:"70%", margin:"auto", paddingTop:"2rem"}}>
    
      <div>
      <h1 style={{fontWeight:"bold", fontSize:"50px",  color:"#C377E0", marginBottom:"10px"}}>Our Impact</h1>
      <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Number of women helped</Card.Header>
    <Card.Body>
      <Card.Title >10,000</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Number of helping associations</Card.Header>
    <Card.Body>
      <Card.Title >42</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Cities Impacted</Card.Header>
    <Card.Body>
      <Card.Title >34</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
      </div>
      <div>
      <img src={Team} alt="Demo" style={{height:"110%", width:"110%", marginLeft: "auto", marginRight:"auto", display:"block"}}/>
      </div>
    </div>

    <hr></hr>
    <div id="aboutUs">
      <div style={{textAlign:"center"}}>
        <h1 style={{fontWeight:"bold", fontSize:"50px",  color:"#C377E0", marginBottom:"10px"}}>About Us</h1>
        <div style={{width:"60%", margin:"auto", textAlign:"justify"}}>
          <p style={{fontSize:"30px", marginBottom:"20px"}}>Violence against women in Mexico has been a serious problem since long ago. Nonetheless, 
          ever since the pandemic (and quarantine) started, the number of domestic violence tripled. Nowadays, <b>11 women</b> are 
          murdered in Mexico each day, this does not only represent a number, but the lives of human beings.
          <br/>
          <br/> 
          As a team, we felt the need to contribute with our skills and the technologies that we have access to. <b style={{color:"#C377E0"}}>#TwitterForWomen </b> 
            is a project that consists on a bot which purpose is to help women that suffer of domestic violence. Our solution consist on a 
          bot that can be reached via DM in <b style={{color:"#1DA1F2"}}>Twitter</b> by the woman or by someone else (e.g a neighbour or friend). It will ask for 
          the location of the location and with it, our bot will reply with the name, phone number and email of a 
          civil association based in the same state which has as purpose helping women that suffer this type of violence.</p>
          <Accordion  style={{marginBottom:"20px"}}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:"24px"}}>
                  <b>About the information retrieval</b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{fontSize:"30px"}}>The information of the victim will remain anonymous but we will insert into our database a record that a violent event
                took place and the city where it happened in order to display the statistics into this website. This way, more people can get to know easily about the current
                situation per location. Our database runs in <b style={{color:"orange"}}>Firebase </b> and it also contains the information of the Mexican associations, which 
                the bot provides to the users.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:"24px"}}>
              <b>Role of associations</b>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{fontSize:"30px"}}>Right now the associations' database is relatively small but we have added a section in which associations can send us their 
              basic information so we can contact them, verify them and add them to the database.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:"24px"}}>
              <b>Scope of our project</b>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{fontSize:"30px"}}>We really think that a project like this could have a huge impact in Mexico because it relies on the principle 
              of trusting the victim. Furthermore, having the interaction through an app in which the user feels comfortable can help her decide to take action.
              <br/>
              As a team, we also consider that this project has the scalability to be implemented in more countries, since Mexico is not the only country in which women 
              suffer from violence and they all deserve a dignified life.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          <Carousel >
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={One}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3  style={{fontSize:"36px"}}>The cardboard says "Don't kill us"</h3>
                <p style={{fontSize:"28px"}}>Woman with "blood" tears in her face.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={Two}
                alt="Third slide"
                
              />
              <Carousel.Caption>
                <h3 style={{fontSize:"36px"}}>Protest during Latin American Women Day</h3>
                <p style={{fontSize:"28px"}}>Women ask for safety.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Three}
                alt="Third slide"
              
              />
              <Carousel.Caption>
                <h3  style={{fontSize:"36px"}}>Red shoes to protest against killings of women</h3>
                <p style={{fontSize:"28px"}}>Due to the current number of murders per day.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>


    <hr></hr>
    <div id="association">
      <div style={{textAlign:"center"}}>
        <h1 style={{fontWeight:"bold", fontSize:"50px", color:"#C377E0", marginBottom:"10px"}}>Are you an association?</h1>
        <h3 style={{fontWeight:"bold", fontSize:"42px"}}>You can help us</h3>
      </div>
      <div class = "Form">
        <Form> 
          <Form.Group controlId="formBasicName">
            <Form.Label style={{fontSize:"24px"}}>Name of the association</Form.Label>
            <Form.Control type="email" placeholder="Enter name of the association" />
            </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize:"24px"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted" style={{fontSize:"14px"}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label style={{fontSize:"24px"}}>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter Phone Number" />
            <Form.Text className="text-muted" style={{fontSize:"14px"}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </div>
      <div style={{ maxWidth: `300px`,marginLeft:`auto`,marginRight:`auto` }}>
        <Image />
      </div>
      <h1 style={{fontWeight:"bold", fontSize:"50px",marginBottom:"10px", textAlign:"center"}}>Hack For Good</h1>
    </div>
    
    
  </Layout>
)

export default IndexPage
