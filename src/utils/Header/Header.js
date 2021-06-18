import React,{useState} from 'react'
import SideBar from '../Sidebar/SideBar'
import SideNav from '../sideNav/SideNav'
import Toggle from '../sideNav/Toggle'
import profile from '../../images/profile.jpg'
import english from '../../images/english.jpg'
import './style.css'


function Header() {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openHandler = () => {
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }

    const SidebarCloseHandler = () => {
        setSidebarOpen(false)
    }

    let sidebar
    if(sidebarOpen){
        sidebar = <SideNav close={SidebarCloseHandler} sidebar={"sideNav"} />
    }

    return (
        <div className="header">
            <div className="search"> 
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div>
</div>
            </div>
            <div className="language"> 
            <img className="img__lang" src={english} alt="english" />
            <select className="dropdown__value">
                <option value="india">English</option>
                <option value="French">French</option>
                <option value="Polish">Polish</option>
                <option value="German">German</option>
            </select>
            </div>
            <div className="setting"> 
           <a href="#" className="setting__logo"><i class="fas fa-cog"></i></a>
            </div>
            <div className="propfile"> 
                        <img className="my__profile__lgo" src={profile} alt="profile"/>
                    
                <div className="profile__name">
                    Kislay
                   
                </div>
                <Toggle click={openHandler} />
                    {sidebar} 
            </div>   
            
            
            
        </div>
    )
}

export default Header
