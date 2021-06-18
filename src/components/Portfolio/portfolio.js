import React from 'react'
import SideBar from '../../../src/utils/Sidebar/SideBar'
import Header from '../../utils/Header/Header'
import kislay1 from '../../images/kislay1.jpg'
import kislay2 from '../../images/kislay2.jpg'
import kislay3 from '../../images/kislay3.jpg'
import kislay4 from '../../images/kislay4.jpg'
import './portfolio.css'
import Footer from '../../utils/Footer/Footer'

function Portfolio() {



    return (
        <>
        <div className = "row">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-4">
        <Header />
        <div className="portfolio">
        <img src={kislay1} alt="..." class="img-thumbnail" />
        <img src={kislay2} alt="..." class="img-thumbnail" />
        </div>
        </div>
        <div className="col-md-4">
        <div className="portfolio">
        <img src={kislay3} alt="..." class="img-thumbnail" />
        <img src={kislay1} alt="..." class="img-thumbnail" />
        </div>
        </div>
        <div className="main__portfolio">
        <img src={kislay4} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-md-8" style={{marginTop:100,marginLeft:250}}>
        <Footer />
        </div> 
        </div>
        
        </>
    )
}

export default Portfolio
