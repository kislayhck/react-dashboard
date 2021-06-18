import React from 'react'
import SideBar from '../../../src/utils/Sidebar/SideBar'
import Footer from '../../utils/Footer/Footer'
import Header from '../../utils/Header/Header'
import ProfileContent from './ProfileContent'


function Profile() {



    return (
        <>
        <div className = "row">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-8">
        <Header />
        <h1 style={{marginTop:100}}>User Profile</h1>
        
        <ProfileContent />   
        <div style={{marginTop:100}}>
        <Footer />
        </div>     
        </div>        
        </div>

        </>
    )
}

export default Profile
