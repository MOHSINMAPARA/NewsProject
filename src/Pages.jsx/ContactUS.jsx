import React from 'react';
import "./ContactUS.css";

 const ContactUS = () => {
  return (
    <div className='ContactUS'>

    <h3 className="text-center w-responsive mx-auto mb-5">Do you have any questions?
     Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</h3>
    <br />
    <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <h2>Pune India </h2>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <h2>+ 91 8087573969</h2>
                </li>

                <li><i className='fas fa-envelope mt-4 fa-2x'></i>
                    <h2>mohsin.mapara@gmail.com</h2>
                </li>
            </ul>
        </div>
{/* 
      <img className='img' src="https://lh3.googleusercontent.com/2D3vlJAtZTy0Xl1p53xzAYB_m_16o1ThEakEEBGhrDYkxL1_68PxkWzZgMAoKEztBxNdGcMj21trjJ-uc4CzAOYOzqq2zMgmue_J1vej" alt="" /> */}


    </div>
 
    
  )}

export default ContactUS;