import React from 'react'
import Resume from './resume';
import logo from '../images/logo.png'
import cover from '../images/cover1.jpg';
import {Button} from '@material-ui/core';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typical from 'react-typical';
function Home() {
    return (
        <>
        <div className=" cover">
        <div className="container">
            <div className="row">
               <div className="col-md-8">
                   <img className="cover-logo" src={logo}/>
                   <h5 className="for-font">Hi, I'm</h5>
                   <h1 className="for-font">AHSAN FARUQUE</h1>
                   <h3 className="for-font"> & </h3>
                   <Typical
                    steps={['I am', 1000, 'Developer!', 1000,'Deginer!', 1000]}
                    loop={Infinity}
                    wrapper="h2"
                />
                   <a href="http://ahsanfe.com/wp-content/uploads/2020/11/Md.-Ahsan-Faruque.pdf" ><Button size="large" variant="contained" color="primary">
                    Download Resume <AssignmentReturnedIcon/>
                    </Button></a>
                    <div className="row" style={{marginTop:"20px"}}>
                    <a href="https://www.facebook.com/ahsan.faruk.90/"><FacebookIcon className="icon" style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}}/></a>
                    <LinkedInIcon className="icon" style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}}/>
                    <GitHubIcon className="icon" style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}}/>
                    <TwitterIcon className="icon" style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}}/>
                    
                    </div>
               </div>
               <div className="col-md-3">
                   <div className="extra-animation">
                       <img 
                       style={{height:"450px",
                       marginTop:"50%",
                       borderRadius:"50%",
                       position:"relative",
                       border:"6px solid #26b0f0",
                       marginBottom:"50%"}} 
                       className="img_cover" src={cover}/>

                   </div>
               </div>
            </div>
            
        </div>
        </div>
        <Resume/>
        </>
    )
}

export default Home;
