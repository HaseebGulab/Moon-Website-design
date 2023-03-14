class MyHeader extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `
    
    	<div class="top-header" data-aos="zoom-in-up">
  <div class="">
 <a class="navbar-brand" href="../index.html"><img width="90px" src="../images/logo-color1.png" alt="moon digitizing"></a></div>

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
                                    <li class="nav-item active"><a class="page-scroll" href="../index.html">Home</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="about.html">About</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="digitizing.html">Digitizing</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="vector.html">Vector</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="patches/index.html">Patches</a></li>
                                     <li class="nav-item"><a class="page-scroll" href="free-download.html">Free Downloads</a></li>
                                      <li class="nav-item"><a class="page-scroll" href="tipsandtricks.html">Tips & Tricks</a></li>
                                </ul>
                            </div> <!-- navbar collapse -->
                            <a class="main-btn" href="shop/index.html"> Our Merchandize</a>
                            <a class="main-btn" href="contact-us.html">Contact us</a>
                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navigation -->
    
     </header>
    `

    }

}

customElements.define('my-header', MyHeader);
