import React from 'react'
import SideBar from '../../../src/utils/Sidebar/SideBar'
import Header from '../../utils/Header/Header'
import kislay1 from '../../images/kislay1.jpg'
import kislay2 from '../../images/kislay2.jpg'
import kislay3 from '../../images/kislay3.jpg'
import kislay4 from '../../images/kislay4.jpg'
import Footer from '../../utils/Footer/Footer'


function Blogs() {



    return (
      <>
        <div className = "row">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-8">
        <Header />
        <div className="about__us" style={{marginTop:100}}> 
        <div class="card-deck">
          <div class="card">
            <img src={kislay1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <button type="button" class="btn btn-outline-primary">Read More</button>
          </div>
          <div class="card">
            <img src={kislay2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <button type="button" class="btn btn-outline-primary">Read More</button>
          </div>
          <div class="card">
            <img src={kislay3}class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <button type="button" class="btn btn-outline-primary">Read More</button>
          </div>
        </div>
        </div>
        <div style={{marginTop:100}}>
        <Footer />
        </div>
  
        </div>        
        </div>
   
        </>
    )
}

export default Blogs
