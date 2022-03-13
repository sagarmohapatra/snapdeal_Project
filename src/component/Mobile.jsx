import React from 'react'
import img1 from "../image/mobileBack.png"
import img2 from "../image/apple_store.png"
import img3 from "../image/google_play.png"
import img4 from "../image/flower.png"
import img5 from "../image/payment.png"
import img6 from "../image/securepay.png"
import img7 from "../image/help.png"
import img8 from "../image/phone.png"
import img9 from "../image/card1.png"
import img10 from "../image/card2.png"
import img11 from "../image/card3.png"
import img12 from "../image/card4.png"
import img13 from "../image/chashon_delivery.png"
import img14 from "../image/netbanking.png"
import img15 from "../image/face.png"
import img16 from "../image/insta.png"
import img17 from "../image/twit.png"
import img18 from "../image/you.png"
function Mobile() {
    return (
        <div className='bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={img1} style={{ marginLeft: "10%", marginTop: "10%" }} />
                    </div>
                    <div className='col-md-5'>
                        <div className='play_store'>
                            <p>Download Snapdeal App Now</p>
                        </div>
                        <p className='p1'>Fast, Simple & Delightful.</p>
                        <p className='p2'>All it takes is 30 seconds to Download.</p>

                        <div className='d-flex'>
                            <div className='text1'>
                                <a href="https://apps.apple.com/in/app/snapdeal-online-shopping-india/id721124909?ls=1&utm_campaign=ios&utm_source=mobileAppLp"
                                    target="_blank" id='apple'>

                                    <i className='fineImg'>
                                        <img src={img2} /></i>
                                </a>
                            </div>

                            <div className='text2'>
                                <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=mobileAppLp&utm_campaign=android"
                                    target="_blank" id='apple'>

                                    <i className='fineImg1'>
                                        <img src={img3} /></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='side_img'>
                <img src={img4} />
            </div>

            <div className='d-flex  container mt-4 '>

                <div className='col'>
                    <a href="https://www.snapdeal.com/page/TrustPay" target="_blank">

                        <div className='card asd'>
                            <div className='card-body text-center'>
                                <img src={img5} />
                                <p className='ph1'>TRUSTPAY</p>
                                <p className='ph2'>Moving your card detail to a much more secure place</p>
                            </div>
                        </div>
                    </a>

                </div>





                <div className='col'>
                    <a href="https://www.snapdeal.com/help?redirectFrom=footerstrip" target="_blank">
                        <div className='card asd'>
                            <div className='card-body text-center'>
                                <img src={img6} />
                                <p className='ph1'>HELP CENTER</p>
                                <p className='ph2'>Moving your card detail to a much more secure place</p>
                            </div>
                        </div>
                    </a>

                </div>




                <div className='col'>
                    <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=web_footer&utm_campaign=android" target="_blank">
                        <div className='card asd'>
                            <div className='card-body text-center'>
                                <img src={img7} />
                                <p className='ph1'>SHOP ON THE GO</p>
                                <p className='ph2'>Moving your card detail to a much more secure place</p>
                            </div>

                        </div>
                    </a>
                </div>




                <div className='col'>
                    <a href="https://www.snapdeal.com/page/terms-of-sale" target="_blank">
                        <div className='card asd'>
                            <div className='card-body text-center'>
                                <img src={img8} />
                                <p className='ph1'>Shop ON THE GO</p>
                                <p className='ph2'>Moving your card detail to a much more secure place</p>
                            </div>
                        </div>
                    </a>
                </div>


            </div>

            <div className='container mt-5 fata'>
                <div className='d-flex'>
                    <div>
                        <ul>
                            <li className='dids' >POLICY INFO</li>
                            <li className='did'> <a href="https://www.snapdeal.com/page/privacy-policy" target="_blank"> Privacy policy</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/page/terms-of-sale" target="_blank">Term of the Sell</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/page/terms-of-sale" target="_blank">Terms of the Used</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/page/abusePolicy" target="_blank">Report abuse and Takedown Policy</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/helpcenter" target="_blank"> FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='dids'>COMPANY </li>
                            <li className='did'> <a href="https://jaspercareers.peoplestrong.com/home" target="_blank" >impact@snapdeal</a> </li>
                            <li className='did'> <a href="https://blog.snapdeal.com/" target="_blank">CarrerBlog</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/page/sitemap" target="_blank"> SiteMap</a></li>
                            <li className='did'> <a href="https://www.snapdeal.com/helpcenter/customercare" target="_blank">Conatact Us</a> </li>

                        </ul>

                    </div>
                    <div>
                        <ul>
                            <li className='dids' >  SNAPDEAL BUSSINESS</li>
                            <li className='did'> <a href="https://sellers.snapdeal.com/" target="_blank">Shopping App</a> </li>
                            <li className='did'> <a href="https://sellers.snapdeal.com/" target="_blank">Sell on snapdeal</a> </li>
                            <li className='did'> <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&hl=en_IN" target="_blank"> Media inquaries</a> </li>
                            {/* <li className='did'>Report abuse and Takedown Policy</li>
                            <li className='did'>FAQ</li> */}
                        </ul>
                    </div>
                    <div>

                        <ul>
                            <li className='dids' >  POPULAR LINK</li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/women-apparel-lehenga?sort=plrty" target="_blank"> Lehenga</a></li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/electronic-headphones-earphones?sort=plrty" target="_blank">HeadPhone</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/kids-clothing?sort=plrty" target="_blank">Kids cloth's</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/women-apparel-sarees?sort=plrty" target="_blank">Sarees</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/mens-footwear-casual-shoes" target="_blank">Shose</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/mens-winter-wear-store?sort=plrty" target="_blank">Winter wear</a> </li>
                            <li className='did'> <a href="https://www.snapdeal.com/products/men-apparel-shirts?sort=plrty" target="_blank">Shirt For Man</a> </li>
                        </ul>
                    </div>

                    <div>

                        <ul>
                            <li className='dids' >SUBSCRIBE</li>
                            <li className='did d-flex'>
                                <input type="text" placeholder='Your Eamil Adress' className='any' />
                                <button className='btn bg-dark text-white px-2 zxc'>Subscribe</button>
                            </li>
                            {/* <li className='did'>HeadPhone</li> */}
                            {/* <li className='did'>Kids cloth's</li> */}
                            <p className='dfg'>Register now to get updates on promotions <br /> and  coupon</p>
                            <span className='tens'><a href="https://play.google.com/store/apps/details?id=com.snapdeal.main" target="_blank">or Download App</a></span>

                        </ul>
                    </div>

                </div>
            </div>

            <hr />
            <div className='footer container d-flex'>
                <div className='foot1'>
                    <p>payment</p>
                    <div className='d-flex'>
                        <div><img src={img9} /></div>
                        <div><img src={img10} /></div>
                        <div><img src={img11} /></div>
                        <div><img src={img12} /></div>
                        <div><img src={img13} /></div>
                        <div><img src={img14} /></div>

                    </div>

                </div>
                <div className='foot2'>
                    <p>connect</p>
                    <div>
                        <a href="https://www.facebook.com/Snapdeal" target="_blank">
                            <img src={img15} width="35px" />
                        </a>

                        <a href="https://www.instagram.com/snapdeal/" target="_blank">
                            <img src={img16} width="35px" />
                        </a>

                        <a href="https://twitter.com/snapdeal" target="_blank">
                            <img src={img17} width="35px" />
                        </a>
                        <a href="https://www.youtube.com/user/snapdeal" target="_blank">
                            <img src={img18} width="35px" />

                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Mobile