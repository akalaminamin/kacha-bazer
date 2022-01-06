import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-3 bg-slate-200'>
            <div className="grid grid-cols-2 mb-5 ">
                <div className='mt-2.5' >
                    <div>
                        <h4 className="text-left ps-3 text-2xl f"><i class="fas fa-shopping-cart text-green-400 fs-2 mr-2"></i>Khaca Bazar</h4>
                        <p className='text-left container'>There are many popular products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
                        <h4>Follow Us</h4>
                        <a href="https://web.facebook.com/profile.php?id=100004528784980"><i className="fab fa-facebook-square text-cyan-600 fs-2 ml-2"></i></a>
                        <a href="https://www.youtube.com/c/KasirAhmod"><i className="fab fa-youtube-square text-red-400 fs-2 ml-2"></i></a>

                        <i className="fab fa-instagram-square fs-2 ml-2"></i>
                        <i className="fab fa-snapchat fs-2 text-amber-400 ml-2"></i>

                    </div>

                </div>
                <div className='grid grid-cols-3 text-left mt-2.5'>
                    
                        <div style={{ marginLeft: "15px" }}>
                            <h4 className='text-2xl'>Company</h4>
                            <p>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>Latest News</li>
                                <li>Latest Discount</li>
                            </p>
                        </div>

                        <div style={{ marginLeft: "15px" }}>
                            <h4 className='text-2xl'>Top Category</h4>
                            <li>Fish & Meat</li>
                            <li>Soft Drinks</li>
                            <li>Baby Care</li>
                            <li>Beauty & Health</li>
                            <li>Fruits & Vegetable</li>
                        </div>
                    


                    <div style={{ marginLeft: "15px" }}>
                        <h4 className='text-2xl'>My Account</h4>
                        <li>Dashboard</li>
                        <li>My Orders</li>
                        <li>Recent Orders</li>
                        <li>Updated Profile</li>
                        <li>Change Password</li>
                    </div>
                </div>

            </div>
            <div className=" " >

                <small className="justify-center">© 2021 all rights reserved by <span>Khaca Bazar</span>
                </small>
            </div>
        </div>
    );
};

export default Footer;