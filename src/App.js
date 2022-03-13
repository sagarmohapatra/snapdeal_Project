import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import img1 from "./image/logo.jpg"
import Home from './component/Home';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

function App() {

    const [change, setchange] = useState(false)
    const [open, setopen] = useState(false)
    let handleClickOpens = () => {
        setchange(!change)
    }

    const handleClickOpen = () => {
        setopen(!open)
    }
    return (
        <div>
            <Router>

                <nav class="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
                    <div class="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button>

                        <Link class="navbar-brand" to="/photo" >
                            <img src={img1} className="img1" />
                        </Link>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <input name='keyword' type="text" aria-label="Search" placeholder='search product & Brands' className='text_serch' />

                                </li>
                                <li class="nav-item">
                                    <button className='search_btn'>
                                        <span className='serch_text'>
                                            <i class="fas fa-search"></i>
                                            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                                            Serch
                                        </span>
                                    </button>
                                </li>

                                <li class="nav-item">
                                    <div className='cardInner' onClick={handleClickOpens}>


                                        <span className='card_text_span '>Card</span>
                                        <i class="fas fa-shopping-cart change1"></i>
                                    </div>
                                </li>


                                <Dialog
                                    open={change}
                                    // TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClickOpens}
                                    aria-describedby="alert-dialog-slide-description"

                                    fullWidth
                                    maxWidth="lg"
                                >

                                    <DialogContent>
                                        <div className='head10'>
                                            <h4>Shopping Cart is empty!</h4>
                                            <span className='close'>
                                                <i class="fas fa-times" onClick={handleClickOpens}></i>
                                            </span>
                                        </div>

                                        <div className='sub_head'>
                                            <h3>BROWSE CATEGORIES</h3>
                                        </div>
                                        <div className='valdata d-flex justify-content-between mt-3'>
                                            <div>
                                                <ul>
                                                    <li>Application</li>
                                                    <li>Camera & Accessories</li>
                                                    <li>Gaming</li>
                                                    <li>Manes Cloths</li>
                                                    <li>Tablets</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul>
                                                    <li>Application</li>
                                                    <li>Camera & Accessories</li>
                                                    <li>Gaming</li>
                                                    <li>Manes Cloths</li>
                                                    <li>Tablets</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul>
                                                    <li>Application</li>
                                                    <li>Camera & Accessories</li>
                                                    <li>Gaming</li>
                                                    <li>Manes Cloths</li>
                                                    <li>Tablets</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul>
                                                    <li>Application</li>
                                                    <li>Camera & Accessories</li>
                                                    <li>Gaming</li>
                                                    <li>Manes Cloths</li>
                                                    <li>Tablets</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='btn btn-danger text-white px-5 py-3 mt-5 ' style={{ fontSize: "17px", marginLeft: "400px" }} onClick={handleClickOpens}>START SHOPPING NOW</button>
                                        </div>

                                    </DialogContent>
                                    <DialogActions>

                                    </DialogActions>
                                </Dialog>
                                {/* new dialog */}

                                <Dialog
                                    open={open}
                                    // TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClickOpen}
                                    aria-describedby="alert-dialog-slide-description"
                                    fullWidth
                                    maxWidth="md"
                                // classes={{ paper: classes.dialogPaper }}
                                // width="200px


                                // classes={{ paper: classes.paper }}
                                >
                                    {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}

                                    {/* <DialogActions>
                        <Button><CancelIcon onClick={handleClickOpen} /></Button>

                    </DialogActions> */}

                                    <DialogContent>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                    <div className='dialog_left'>
                                                        <div className='item'>
                                                            <i class="fa fa-map-marker-alt"></i>
                                                        </div>
                                                        <div>
                                                            <h4>MANAGER YOUR ODERS</h4>
                                                            <p>Track oders,managecollection & returns.</p>
                                                        </div>
                                                    </div>

                                                    <div className='dialog_left1'>
                                                        <div className='item1'>
                                                            <i class="far fa-address-card"></i>
                                                        </div>
                                                        <div className='head'>
                                                            <h4>SHORTLIST ITEMS YOU</h4>
                                                            <p>Keep items you love on a watchlist.</p>
                                                        </div>
                                                    </div>

                                                    <div className='dialog_left2'>
                                                        <div className='item2'>
                                                            <i class="fas fa-bell"></i>
                                                        </div>
                                                        <div className='head'>
                                                            <h4>AWESOME OFFERS UPDATES </h4>
                                                            <p>Be first to know about great offers and save.</p>
                                                        </div>
                                                    </div>
                                                </DialogContentText>

                                            </div>
                                            <div className='col-md-6'>

                                                <Dialog
                                                    open={open}
                                                    // TransitionComponent={Transition}
                                                    keepMounted
                                                    onClose={handleClickOpen}

                                                    width="300px"
                                                    sx={{ width: "123%" }}
                                                // classes={{ paper: classes.dialogPaper }}
                                                // aria-describedby="alert-dialog-slide-description"
                                                >
                                                    <DialogTitle></DialogTitle>
                                                    <DialogContent>
                                                        <div className='dialog_head'>
                                                            <div className='item_head'>

                                                                <h5>Login/Sign Up On Snapdeal</h5>
                                                                <p className='sub_head'>Please provide your Mobile Number or Email to Login/ <br /> Sign Up on Snapdeal</p>


                                                            </div>
                                                            <div className='head1 '>
                                                                <i class="fas fa-times" onClick={handleClickOpen}></i>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <input type="text" placeholder='Mobile Number/Email' className='no' />
                                                        </div>
                                                        <div className='mt-4'>
                                                            <button className='btn btn-danger text-white py-2 px-5' style={{ marginLeft: "100px" }}>Continue</button>
                                                        </div>
                                                        <div className='anyt'>or Login Using</div>
                                                        <div className='d-flex justify-content-center google'>
                                                            <button className=' btn bg-primary text-white '>Facebook</button>
                                                            <button className='btn bg-white '>google</button>
                                                        </div>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        {/* <Button onClick={handleClose}>Disagree</Button> */}
                                                        {/* <Button onClick={handleClickOpen}>Agree</Button> */}
                                                    </DialogActions>
                                                </Dialog>

                                            </div>
                                        </div>

                                    </DialogContent>
                                    <DialogActions>
                                        {/* <Button onClick={handleClickOpen}>Disagree</Button> */}
                                        {/* <Button onClick={handleClickOpen}>Agree</Button> */}
                                    </DialogActions>
                                </Dialog>




                                <li class="nav-item dropdown side">
                                    <a role="button"  >
                                        <div className='cardInner_last' >

                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

                                                    <li class="nav-item dropdown ">
                                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span className='card_text_last'>SignIn</span>
                                                            <i class="fas fa-user-alt change" ></i>
                                                        </a>
                                                        <ul class="dropdown-menu" >
                                                            <li><a class="dropdown-item" href="https://www.snapdeal.com/login" target="_blank" >Your Account</a></li>
                                                            <li><a class="dropdown-item" href="#" onClick={handleClickOpen}>Your Oder</a></li>

                                                            <li><a class="dropdown-item" href="https://www.snapdeal.com/login" target="_blank">ShortList</a></li>
                                                            <li><hr class="dropdown-divider" /></li>
                                                            <div className='text-center'>
                                                                <p style={{ fontWeight: "5px" }}>if you are a new user</p>
                                                                <p onClick={handleClickOpen}>Register</p>
                                                                <button className='btn btn-danger text-white px-5 mb-2' onClick={handleClickOpen}>LOGIN</button>
                                                            </div>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </a>






                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div>
                    <Home />
                </div>

            </Router>


        </div>

    );
}

export default App;
