import React from 'react'
import SideBar from '../../../src/utils/Sidebar/SideBar'
import Header from '../../utils/Header/Header'
import about from '../../images/about.jpeg'
import './about.css'
import Footer from '../../utils/Footer/Footer'


function About() {



    return (
        <>
        <div className = "row">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-8">
        <Header />
        <div className="about__us" style={{marginTop:100}}> 
        <img className="about_us" src={about} alt="about us" />
        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <Footer />   
        </div>     
        </div>

        </>
    )
}

export default About
