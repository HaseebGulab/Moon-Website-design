class MyHeader extends HTMLElement{

  connectedCallback(){

    this.innerHTML= `
    
    <div class="top-header" data-aos="zoom-in-up">
    <div class="">
   <a class="navbar-brand pt-3" href="index.html"><img width="90px" src="../images/logo-color1.png" alt="moon digitizing"></a></div>
  
  <div class="top-button">
  
  <div class="nav-cta-button-container"><a href="#" class="nav-link primary w-nav-link" style="max-width: 1230px;">Sign Up
  </a></div>
  <div class="nav-cta-button-container"><a href="#" class="nav-link primary w-nav-link" style="max-width: 1230px;"> Login
  </a></div>
  <div class="nav-cta-button-container1">
      <div id="google_translate_element"></div></div>
      
  <div class="nav-cta-button-container1">
  <div id="google_translate_element"></div></div>
  </div>
  
  </div>
  </div>
  


    	<nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="nav-links">
        <div class="sidebar-logo">
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li><a href="index.html">HOME</a></li>
           <li><a href="../about.html">ABOUT US</a></li>
          <li>
            <a href="#">CUSTOM PATCHES</a>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><a href="custom Leather patches.html">CUSTOM LEATHER PATCHES</a></li>
              <li><a href="custom woven patches.html">CUSTOM WOVEN PATCHES</a></li>
              <li><a href="sublimated patches.html">SUBLIMATED PATCHES</a></li>
              <li><a href="applique patches.html">APPLIQUE PATCHES</a></li>
              <li><a href="custom embroidered patches.html">CUSTOM EMBROIDERED PATCHES</a></li>
              
            </ul>
          </li>
          <li><a href="keychains.html">KEYCHAINS</a></li>
          <li><a href="lepel pins.html">LEPEL PINS</a></li>

        </ul>
      </div>
      <div class="search-box">
      <i class='bx bx-search'></i>
       <div class="input-box">
       <input type="text" placeholder="Search...">
        </div>
    </div>
      
      <a class="main-btn" href="../shop/index.html"> Our Merchandize</a>
      <a class="main-btn" href="../contact-us.html">Contact us</a>
      	  <div class="nav-cta-button-container1">
	  <div id="google_translate_element"></div></div>
    </div>
  </nav>
  
  
      <header id="home" class="header-area">
        <div class="navigation fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <!-- Logo -->
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a class="page-scroll" href="index.html">Home</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="../about.html">About</a></li>
                                    <li class="nav-item">---------------</li>
                                    <li class="nav-item"><a class="page-scroll" href="#"><b>CUSTOM PATCHES<b></a></li>
                                    <li class="nav-item"><a class="page-scroll" href="custom Leather patches.html">CUSTOM LEATHER PATCHES</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="custom woven patches.html">CUSTOM WOVEN PATCHES</a></li>
                                     <li class="nav-item"><a class="page-scroll" href="sublimated patches.html">SUBLIMATED PATCHES</a></li>
                                     
                                      <li class="nav-item"><a class="page-scroll" href="applique patches.html">APPLIQUE PATCHES</a></li>
                                       <li class="nav-item"><a class="page-scroll" href="custom embroidered patches.html">CUSTOM EMBROIDERED PATCHES</a></li>
                                       
                                       <li class="nav-item">---------------</li>
                                       
                                        <li class="nav-item"><a class="page-scroll" href="keychains.html">KEYCHAINS</a></li>
                                        
                                         <li class="nav-item"><a class="page-scroll" href="lepel pins.html">LEPEL PINS</a></li>
                                         
                                         <li class="nav-item"><a class="page-scroll" href="../contact-us.html">Contact us</a></li>
                                                                            
                                         <li class="nav-item"><a class="page-scroll" href="../shop/index.html">Our Merchandize</a></li>
                                         
                                         <li class="nav-item">---------------</li>
                                         
                                         <li class="nav-item"><a href="#" class="page-scroll">Login</a></li>
                                         
                                         <li class="nav-item"><a href="#" class="page-scroll">Sign Up</a></li>
                                </ul>
                            </div> <!-- navbar collapse -->
                            
                            
                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navigation -->
    
     </header>
    `
    
  }

 }

 customElements.define('my-header',MyHeader);
    