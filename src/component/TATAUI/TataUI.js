import React from 'react'
import "./TataUi.css"

function TataUI() {
    return (
        <>
           

        {/* HomeScreen */}
        <div className="jumbotron img-jumbo pt-0">
             {/* Navbar */}
             <nav class="navbar navbar-expand-lg navbar-light mt-0 mb-5">
            <a class="navbar-brand text-white " href="#"><strong>TATA BUILDING INDIA </strong></a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  mx-5" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto  text-white float-right">
                
                <li class="nav-item active">
                    <a class="nav-link text-white mx-3" href="#">WHO WE ARE <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white mx-3" href="#">WHAT WE DO<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white mx-3" href="#"> ACHIEVEMENT <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white mx-3" href="#">COMMUNITY <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link  text-white mx-3" href="#">HALL OF FAME <span class="sr-only">(current)</span></a>
                </li>
                <i class="fa fa-bars navbar-btn mx-3 text-center" aria-hidden="true"></i>
                
                </ul>
            </div>
        </nav>
            <div class="container mt-5 ">
            <p class="mb-5 text-white">Participate and Be an Easy Warrior</p>
            <h2 class="mt-5 mb-5 text-warning">Think.Write.Shine.</h2>
            <p class="text-white">Win amazing Prizes at 3 leveic in Nation's Largest School Essay Competetion.</p>
            <button class="btn btn-link mx-3 text-white"> Learn more </button>
            <button class="btn btn-link  mx-3 text-white"> Enroll Now! </button>
            </div>
        </div>

        <div class="container">
            <div className="bar row ">
                <h1 class="mx-3 text-white">25+<small>YEARS</small></h1>
                <h1 class="mx-3 text-white">10+<small>LANGUAGES</small></h1>
                <h1 class="mx-3 text-white">500+<small>SCHOOLS</small></h1>
                <h1 class="mx-3 text-white">25000+<small>PARTICIPANTS</small></h1>
                <h1 class="mx-3 text-white">400+<small>WINNERS</small></h1>
            </div>
            <div className="row">
                <div className="col-lg-6 row">
                    <p class=""> The <strong>Tata Building India</strong> School Essay Competetion is one of the Key initiatives undertaken by the Tata group of companies to motivate the youth of India towords thinking about nation building.</p>
                    <small class="">The essay competition provides a unique plateform to encourage young leaders of tomarrow to showcase their expression in writing, on a host of subject related to nation buildinf.</small>
                    <button type="button" class="btn m-3 btn-outline-dark rounded"> Read more </button>
                </div>
                <div className="col-lg-6">
                    <img class="childImage" src="https://media.istockphoto.com/vectors/group-of-children-putting-hands-together-on-white-background-vector-id1095196468?k=20&m=1095196468&s=612x612&w=0&h=_7F3lk0P-IYJnZ5Gex2xu3yX45Z0vv15n8f8nPmTG7Y=" alt="Image"/>
                </div>

            </div>
        </div>




        </>
    )
}

export default TataUI
