import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import img2 from "../image/mobile.png"
import img3 from "../image/womanFashion.png"
import img4 from "../image/kitch.jpg"
import img5 from "../image/kitch.jpg"
import img6 from "../image/fashion.png"
import imgC1 from "../image/cotton.jpg"
import imgc2 from "../image/longwear.jpg"
import imgc3 from "../image/helth.jpg"
import imgc4 from "../image/indianwear.jpg"
import imgc5 from "../image/summer.jpg"
import imglog from "../image/login_final.png"
import location from "../image/location.png"
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Done } from '@mui/icons-material'
import img60 from "../image/child_shirt.jpg"
import img61 from "../image/chess.jpg"
import img62 from "../image/atachi.jpeg"
import img63 from "../image/dog.jpg"
import img64 from "../image/man_dress.jpg"
import img65 from "../image/medicen.jpg"
import img66 from "../image/usb.jpg"
import img67 from "../image/spoon.jpg"
import img68 from "../image/woman-dresss.jpg"
import Mobile from './Mobile'
// import { makeStyles } from '@material-ui/core/styles';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
// const useStyles = makeStyles(theme => ({
//     dialogPaper: {

//         height: '400px'
//     },
// }));




function Home() {
    const [showButton, setShowButton] = useState(false)
    const [login, setlogin] = useState(true)
    const [open, setopen] = useState(false)

    const [errorpin, seterrorpin] = useState(false)
    const [errorval, seterrorval] = useState("")
    const [hide, sethide] = useState(true)

    const scroll = () => {
        sethide(!hide)
    }

    const [pin, setpin] = useState({
        number: ""
    })

    const change = (e) => {
        e.preventDefault()
        // console.log("pin");

        let isnumber = numbervalidation(pin.number)
        if (isnumber) {
            console.log("hiall");
            setShowButton(true)

        }

    }
    const val = (e) => {
        // 
        console.log(e.target.name);
        const copy = { ...pin }
        copy[e.target.name] = e.target.value
        setpin(copy)
    }


    const next = () => {
        setlogin(!login)
    }
    const handleClickOpen = () => {
        setopen(!open)
    }
    const numbervalidation = (numberval) => {
        if (numberval) {
            if (/^(\d{4}|\d{6})$/.test(numberval)) {
                seterrorpin(true)
                seterrorval("")
                return true
            } else {
                seterrorpin(false)
                seterrorval(" enter your valid pincode")
                return false
            }

        }
        else {
            seterrorpin(false)
            seterrorval(" enter your valid pincode")
            return false
        }
    }



    return (
        <div>
            <div className='row '>
                <div className='col-md-3 container-fluid mt-2'>
                    <div class="card">
                        <div class="card-body">
                            <div className='card_head '>TOP CATEGORIES</div>
                            <div className='side_bar9'>
                                <a className='side_link9'>
                                    <span className='sideimg9'><img src={img2} /></span>
                                    <span className='side_word9 ml-4'>Mens'Feshion</span>
                                </a>
                            </div>

                            <div className='side_bar'>
                                <a className='side_link'>
                                    <span className='sideimg1'><img src={img3} /></span>
                                    <span className='side_word'>Womens'Feshion</span>
                                </a>
                            </div>

                            <div className='side_bar'>
                                <a className='side_link'>
                                    <span className='sideimg1'><img src={img4} width="13%" /></span>
                                    <span className='side_word'>Home & Kitchen</span>
                                </a>
                            </div>

                            <div className='side_bar'>
                                <a className='side_link'>
                                    <span className='sideimg1'><img src={img5} width="13%" /></span>
                                    <span className='side_word'>Toys,Kids & Baby care</span>
                                </a>
                            </div>

                            <div className='side_bar'>
                                <a className='side_link'>
                                    <span className='sideimg1'><img src={img6} /></span>
                                    <span className='side_word'>Beuaty,Helth and Daily</span>
                                </a>
                            </div>
                            <div className='card_head'>More Categories</div>
                            <div className='card_head'>AutoMatives</div>
                            <div className='card_head'>Mobiles & Assessories</div>
                            <div className='card_head'>Eloctronics</div>
                            <div className='card_head'>Sports,Fitness & outfit</div>
                            <div className='card_head'>Computer & Gameing</div>
                            <div className='card_head'>Book,Media & Musics</div>
                            <div className='card_head'>Hobbies</div>

                            {/* <div className='card-footer'>
                                <div className='search '>

                                    <span className='serch_icon'><i class="fa fa-search"></i></span>
                                    <span className='serch_name'>Shose</span>

                                </div>

                                <div className='search py-2'>

                                    <span className='serch_icon'><i class="fa fa-search"></i></span>
                                    <span className='serch_name'>T-shirt</span>

                                </div>

                                <div className='search py-2'>

                                    <span className='serch_icon'><i class="fa fa-search"></i></span>
                                    <span className='serch_name'>Watch</span>

                                </div>

                                <div className='search py-2'>

                                    <span className='serch_icon'><i class="fa fa-search"></i></span>
                                    <span className='serch_name'>Mask</span>

                                </div>

                                <div className='search py-2'>

                                    <span className='serch_icon'><i class="fa fa-search"></i></span>
                                    <span className='serch_name'>Earphone</span>

                                </div>
                            </div> */}


                        </div>
                    </div>
                </div>

                <div className='col-sm-9 mt-2'>
                    <div className='row'>
                        <div className='col-sm-8'>

                            {/* change */}
                            <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">

                                <div class="carousel-indicators">
                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="1"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="2"
                                        aria-label="Slide 1"
                                    ></button>

                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="3"
                                        aria-label="Slide 1"
                                    ></button>

                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="4"
                                        aria-label="Slide 1"
                                    ></button>

                                    <button
                                        data-mdb-target="#carouselDarkVariant"
                                        data-mdb-slide-to="5"
                                        aria-label="Slide 1"
                                    ></button>
                                </div>

                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <img src={imgC1} class="d-block w-100" height="290x" alt="Motorbike Smoke" />
                                        <div class="carousel-caption d-none d-md-block">
                                            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                        </div>
                                    </div>


                                    <div class="carousel-item">
                                        <img src={imgc2} height="290px" class="d-block w-100" alt="Mountaintop" />
                                        <div class="carousel-caption d-none d-md-block">
                                            {/* <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                        </div>
                                    </div>


                                    <div class="carousel-item">
                                        <img src={imgc3} height="290px" class="d-block w-100" alt="Woman Reading a Book" />
                                        <div class="carousel-caption d-none d-md-block">
                                            {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                        </div>
                                    </div>


                                    <div class="carousel-item">
                                        <img src={imgc4} height="290px" class="d-block w-100" alt="Woman Reading a Book" />
                                        <div class="carousel-caption d-none d-md-block">
                                            {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                        </div>
                                    </div>



                                    <div class="carousel-item">
                                        <img src={imgc5} height="290px" class="d-block w-100" alt="Woman Reading a Book" />
                                        <div class="carousel-caption d-none d-md-block">
                                            {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                        </div>
                                    </div>
                                </div>



                                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>
                        <div className='col-md-3'>

                            {/* second change */}
                            {
                                login ?
                                    <div className='col-sm-3 '>
                                        <div class="card card1">
                                            <img src={location} class="card-img-top" height="135px" alt="Fissure in Sandstone" />
                                            <div class="card-body">
                                                <div className='location_write'>Your Deliver pincode</div>

                                                <p className='letdeliver'>Enter your pincode to check avability and faster delivery option</p>
                                                <form onSubmit={change}>

                                                    <div className='west '>
                                                        {/* <input type="text" placeholder='Enter your pincode' name='number' value={pin.number} onChange={val} /> */}
                                                        {
                                                            !showButton ? <input type="text" placeholder='Enter your pincode' name='number' value={pin.number} onChange={val} /> : <>PinCode:{pin.number}</>
                                                        }


                                                    </div>
                                                    {
                                                        !errorpin ? <span style={{ color: "red", fontSize: "13px", marginLeft: "45px" }}>{errorval}</span> : null
                                                    }


                                                    <div className='d-flex mt-1' >
                                                        <div className='btnLogIn text-center mt-1 justify-content-between'>
                                                            <button className=' btn bg-dark text-white px-5'  >{showButton ? "change Pincode" : "submit"}</button>
                                                        </div>

                                                        <div className='game d-flex'>

                                                            <div className='lastbtn'>
                                                                <button className='btn btn-light text outline-none  ml-4' onClick={next}>NEXT</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </div> :
                                    <div className='col-sm-3'>
                                        <div class="card card1">
                                            <img src={imglog} class="card-img-top" height="140px" alt="Fissure in Sandstone" />
                                            <div class="card-body">
                                                <div className='card_para' >
                                                    <p className='mb-1'>Login to your</p>
                                                    <p>Snapdeal Account</p>
                                                </div>

                                                <div className='btnLogIn text-center'>
                                                    <button className=' btn bg-dark text-white px-5' onClick={handleClickOpen}>LOGIN</button>
                                                </div>

                                                <div className='game d-flex'>
                                                    <div className='mt-4 end' onClick={handleClickOpen}>
                                                        New user? <span className='res'>Register</span>
                                                    </div>
                                                    <div className='lastbtn'>
                                                        <button className='btn btn-light text outline-none' onClick={next}>NEXT</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>

                        <div className='row col'>
                            <div className='col-md-9 mt-5 center'>
                                <h5>RECENTLY VIEWED PRODUCTS</h5>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <img src={img60} height="200px" width="200px" />
                                            <div className='card-write '>100% cotton dress regular fit <br /> green mens t-shirt</div>
                                            <div className='start'>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>

                                            <div className='mrp'>
                                                <span className='price'>Rs 900</span>
                                                <span className='discount'>Rs 456</span>
                                                <div className='percentage'>49% OFF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <img src={img62} height="200px" width="200px" />
                                            <div className='card-write '>Beutiful bag in this categories  <br /> best performance</div>
                                            <div className='start'>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                            <div className='mrp'>
                                                <span className='price'>Rs 789</span>
                                                <span className='discount'>Rs 678</span>
                                                <div className='percentage'>16% OFF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <img src={img61} height="200px" width="200px" />
                                            <div className='card-write '>This a chess bord  <br /> for playing a genes people</div>
                                            <div className='start'>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>

                                            <div className='mrp'>
                                                <span className='price'>Rs 300</span>
                                                <span className='discount'>Rs 157</span>
                                                <div className='percentage'>56% OFF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <img src={img63} height="200px" width="200px" />
                                            <div className='card-write '> cotton play dog for  child and <br /> t-shirt and value</div>
                                            <div className='start'>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>

                                        <div className='mrp'>
                                            <span className='price'>Rs 200</span>
                                            <span className='discount'>Rs 57</span>
                                            <div className='percentage'>86% OFF</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



                <Dialog
                    open={open}
                    TransitionComponent={Transition}
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



            </div>

            <div className='container-fluid'>

                <div className='mt-5'>
                    <h5>TRENDING PRODUCTS</h5>
                </div>
                <div className='d-flex '>
                    <div className=''>
                        <div>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={img68} height="200px" width="200px" />
                                    <div className='card-write '>100% cotton dress regular fit <br /> green womens t-shirt</div>
                                    <div className='start'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className='mrp'>
                                        <span className='price'>Rs 700</span>
                                        <span className='discount'>Rs 357</span>
                                        <div className='percentage'>46% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={img67} height="200px" width="200px" />
                                    <div className='card-write '>american frniture in find only in found on snapdeal this is best quality product</div>
                                    <div className='start'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className='mrp'>
                                        <span className='price'>Rs 700</span>
                                        <span className='discount'>Rs 357</span>
                                        <div className='percentage'>46% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=''>
                        <div>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={img66} height="200px" width="200px" />
                                    <div className='card-write '> <br />this is a best quality usb three power rating</div>
                                    <div className='start'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>

                                    <div className='mrp'>
                                        <span className='price'>Rs 700</span>
                                        <span className='discount'>Rs 357</span>
                                        <div className='percentage'>46% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={img65} height="200px" width="200px" />
                                    <div className='card-write '>Best used for after perches <br /> three  before  month used and value</div>
                                    <div className='start'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>

                                    <div className='mrp'>
                                        <span className='price'>Rs 700</span>
                                        <span className='discount'>Rs 357</span>
                                        <div className='percentage'>46% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={img64} height="200px" width="200px" />
                                    <div className='card-write '>100% cotton dress regular fit <br /> green mens t-shirt</div>
                                    <div className='start'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>

                                    <div className='mrp'>
                                        <span className='price'>Rs 700</span>
                                        <span className='discount'>Rs 357</span>
                                        <div className='percentage'>46% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Mobile />




            <div>

                <a class="scrollbtn" href="#" onClick={scroll}><i class="fas fa-arrow-up"></i></a>

            </div>


        </div >
    )
}

export default Home