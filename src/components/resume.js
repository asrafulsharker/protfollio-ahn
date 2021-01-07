import React from 'react';
import cover from '../images/cover1.jpg';
import { motion } from "framer-motion"
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import diu from '../images/diu.jpg';
import ps from '../images/ps.jpg';
import sj from '../images/sj.jpg';
import formal from '../images/formal.jpg';


import DevicesIcon from '@material-ui/icons/Devices';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import PrintIcon from '@material-ui/icons/Print';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';




function resume() {
    return (
        <>
        <div className="resume" style={{paddingTop:"5%"}}>
            <h2 style={{borderBottom:"4px solid #2cd0f5",width:"170px",margin:"auto auto",marginTop:"3%",textAlign:"center"}}>About me</h2>
            <h6 className="col-md-8" style={{margin:"auto auto",textAlign:"center" ,marginTop:"10px"}}>I'm a UI/UX, Graphic Designer & Developer from Dhaka, Bangladesh. I aim to make a difference through my creative solution.</h6>
           <br/>
            <p className="col-md-8" style={{textAlign:"center",margin:"auto auto"}}>Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. Adjustments to mock-ups as necessary to address problems encountered.</p>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-6 ">
            <motion.div
           animate={{ scale: 0.8 }}
           transition={{ duration: 1 }}
            >
               
                    <img className="resume-cover" style={{height:"400px", marginTop:"15%"}} src={cover}/>
                
         </motion.div>
         </div>

              

                <div className="col-md-6 text-animation"  style={{height:"400px", marginTop:"15%"}}>


                   <h5><strong>Name :</strong> Md. Ahsan Faruque</h5>
                   <h5><strong>Address :</strong> Ashulia, Savar, Dhaka</h5>
                   <h5><strong>Phone :</strong> +880 1708 735449</h5>
                   <h5><strong>Date of birth :</strong> March 27, 1999</h5>
                   <h5><strong>Email :</strong> ahsanfe.contact@gmail.com</h5>
                   <h5><strong>Interest :</strong> Freelance, Full-time, part-time</h5>

                </div>
            </div>
        </div>
        <br/>
        <div>
            <div className="">
            <h2 style={{borderBottom:"4px solid #2cd0f5",width:"80px",margin:"auto auto",marginTop:"10px",textAlign:"center"}}>Skills</h2>
  

<div className="container" style={{marginBottom:"5%"}}>
    <h6>Wordpress - 1 years experience</h6> <Progress percent={89} status="active" />
    <h6>Photoshop - 2 years experience</h6> <Progress percent={94} status="active" />
    <h6>HTML&CSS - 2 years experience</h6><Progress percent={87}  status="active"/>
    <h6>Javascript - 2 years experience</h6><Progress percent={79} status="active"/>
    <h6>Php - 1 years experience</h6>     <Progress percent={74} status="active"/>
    <h6>Python -1 years experience</h6>     <Progress percent={86} status="active" />
    <h6>Illustrator - 2 years experience</h6>     <Progress percent={97}  status="active"/>
    <h6>In Design - 2 years experience</h6>     <Progress percent={92}  status="active"/>
    <h6>Adobe Premier Pro - 2 years experience</h6>     <Progress percent={88}  status="active"/>
    <h6>Adobe After effect - 2 years experience</h6>     <Progress percent={87} status="active" />
    <h6>Figma - 2 years experience</h6>     <Progress percent={89}  status="active"/>
    <h6>Adobe XD - 2 years experience</h6>     <Progress percent={93} status="active"/>
    <h6>Filmora - 2 years experience</h6>     <Progress percent={84} status="active" />
</div>

            </div>
        </div>
        <div style={{backgroundColor:"#e1ebe8",padding:"50px",}}>
        <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"165px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Experience</h2>
            <div className="container">
            <div className="row ">
                <div className="col-md-4">
            
                <Card style={{ width: '' }}>
                    <Card.Body className="bg-dark card-body">
                        <Card.Title className="title">Instructor</Card.Title>
                        <Card.Subtitle className="mb-2  subtitle">@TechBees</Card.Subtitle>
                        <Card.Text className="title">
                        January 2020 -March 2020
                        </Card.Text>
                    </Card.Body>
                    </Card>
                  
                </div>
                <div className="col-md-4">
                <Card style={{ width: '' }}>
                    <Card.Body className="bg-dark card-body">
                        <Card.Title className="title">Owner and Founder</Card.Title>
                        <Card.Subtitle className="mb-2  subtitle">@Raptor	</Card.Subtitle>
                        <Card.Text className="title">
                        November 2018 - Present
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 ">
                <Card style={{ width: '' }}>
                    <Card.Body className="bg-dark card-body">
                        <Card.Title className="title">Chief Executive Officer </Card.Title>
                        <Card.Subtitle className="mb-2  subtitle">@Creative Fish	</Card.Subtitle>
                        <Card.Text className="title">
                        August 2020 - Present
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            


                <div className="col-md-6 ">
                <Card style={{ width: '' }}>
                    <Card.Body className="bg-dark card-body">
                        <Card.Title className="title">Design Associate </Card.Title>
                        <Card.Subtitle className="mb-2  subtitle">@HRDI	</Card.Subtitle>
                        <Card.Text className="title">
                        September 2020-November 2020
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>


                <div className="col-md-6 ">
                <Card style={{ width: '' }}>
                    <Card.Body className="bg-dark card-body">
                        <Card.Title className="title">Intern Graphic Designer</Card.Title>
                        <Card.Subtitle className="mb-2  subtitle">@Binary Pathshala	</Card.Subtitle>
                        <Card.Text className="title">
                        December 2018 -February 2019
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
        </div>
        </div>
        </div>
     
        <div className="container" style={{marginTop:"3%",marginBottom:"3%"}}>
        <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"165px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Education</h2>
        <Carousel style={{padding:"20px "}}>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={diu}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>BSC in CSE</h2>
      <p>Daffodil International University	January 2018 - December 2021</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={ps}
      alt="Third slide"
    />



    <Carousel.Caption>
      <h3 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>Higher Secondary Certificate</h3>
      <p>Shahjalal Jamia Islamia School & College</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src={sj}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"#2cd0f5",textShadow:"2px 2px 0px #5a6061, 5px 4px 0px rgba(0,0,0,0.15)"}}>Secondary School Certificate</h3>
      <p>Pachim Sadar High School & College Batch - 2015</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
<div  style={{backgroundColor:"#e1ebe8",padding:"20px"}}>

        <div className="container" style={{backgroundColor:"", margin:"auto auto"}}>
        <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"165px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Services</h2>
        
 <div style={{padding:"20px"}} className="row">
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>< GraphicEqIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2 ">Graphics Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}><  FormatColorFillIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2 ">Logo Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>< PrintIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2 ">Print Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
 
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>< BrandingWatermarkIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2 ">Brand Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}><ViewQuiltIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2 ">UI/UX Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
   <div className="col-md-4">
   <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>< DevicesIcon className="service-icon"/></Card.Title>
    <Card.Subtitle style={{textAlign:"center"}} className="mb-2">Web Design</Card.Subtitle>
  </Card.Body>
</Card>
   </div>
 </div>
        </div>

        </div>
       <div className="container" style={{marginTop:"5%",marginBottom:"5%"}}>
       <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"190px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Testimonials</h2>
         <Carousel>
           <Carousel.Item interval={2000}>
             <div className="sy-re" className="carosel-body" style={{ height:"260px",backgroundColor:"#e1ebe8"}}>
                <div className="carosel-div">
                  <img className="carosel-img" src={formal}/>
                  <Carousel.Caption>
                  <h3>This template is very nice! Great work</h3>
                  <p> - CEO of abc.com</p>
                </Carousel.Caption>
                </div>
             </div>
           
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <div className="sy-re" className="carosel-body" style={{ height:"260px",backgroundColor:"#e1ebe8"}}>
                <div className="carosel-div">
                  <img className="carosel-img" src={formal}/>
                  <Carousel.Caption>
                  <h3>My work has been significantly simplified.</h3>
                  <p> - CEO of nfl.com</p>
                </Carousel.Caption>
                </div>
             </div>
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <div className="sy-re" className="carosel-body" style={{ height:"260px",backgroundColor:"#e1ebe8"}}>
                <div className="carosel-div">
                  <img className="carosel-img" src={formal}/>
                  <Carousel.Caption>
                  <h3>This template is exactly what we were looking for!</h3>
                  <p> - CEO of xyz.com</p>
                </Carousel.Caption>
                </div>
             </div>
           </Carousel.Item>
         </Carousel>
       </div>
       

        </>
    )
}

export default resume
