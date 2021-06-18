import React from 'react'
import './profile.css'
import profile from '../../images/profile.jpg'


function ProfileContent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                <div className="profile__image">
                    <img src={profile} alt="profile pic" />
                </div>  
                </div>
                <div className="col-md-6 mt-5">
                    <div class="card">
                    <div class="card-body">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            
                        </div>
                        <input type="text" class="form-control" placeholder="Kislay" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            
                        </div>
                        <input type="text" class="form-control" placeholder="kislay@deqode.com" aria-label="Username" aria-describedby="basic-addon1" disabled />
                    </div>
                    <button type="button" class="btn btn-outline-primary">Update Profile</button>
                    </div>
    </div>
            </div>
                </div>
                <h3 className="mt-5">All Transactions</h3>
                <table class="table mt-5">
       
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
                </div>
    )
}
 
export default ProfileContent
