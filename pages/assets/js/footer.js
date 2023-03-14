class MyFooter extends HTMLElement{

  connectedCallback(){

    this.innerHTML= `
    
        <footer id="footer" class="footer-area">
        <div class="footer-widget pt-130 pb-130">
            <div class="container">
                <div class="row-foot">
               <div class="col-fa1" data-aos="fade-left">
                        
                            <a href="../index.html">
                                <img style="width:122px; margin:10px 10px 10px 0px;" src="../images/logo-color1.png" alt="Logo">
                            </a>
                            <p class="mt-">With an experience of 25 years in Vector Art Services, Vector Art Conversions, Custom Embroidery Digitizing, Contract Embroidery, Illustrations, and Vector Design Services, we are skillfully equipped and adept at all the services mentioned above.</p>
                            <ul class="sc-foot">
                                <li><a href="https://www.facebook.com/MoonDigitizing"><i class="lni-facebook-filled"></i></a></li>
                                <li><a href="https://twitter.com/MoonDigitizing"><i class="lni-twitter-original"></i></a></li>
                                
                                <li><a href="https://www.linkedin.com/company/moon-digitizing/"><i class="lni-linkedin-original"></i></a></li>
                                
                            </ul>
                        </div>
                        
                        	<div class="col-fa2" data-aos="fade-right">
	    
	     <h2 class="footer-head"> Contact Details</h2>
				 
					   <p class="footer-para">
					   <b>Address : </b>749 Wildcat Way Apt 216 Sulphur Springs, TX 75482,USA</p> 
					   <p class="footer-para">
					   <b>Phone : </b>(800) 506-9677</p>
					   <p class="footer-para">
					   <b>Phone : </b>+92-21-35884266 </p>
					   <p class="footer-para">
					   <b>Email : </b>support@moondigitizing.com</p> 
					   <p class="footer-para">
					   <b>Email : </b>billing@moondigitizing.com</p> 
					</div>
  
					
</div>
                        
                        <!-- footer content -->
                    </div>
                </div> <!-- row -->
   <!-- container -->
 <!-- footer widget -->
        <div class="footer-copyright pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text text-center pt-20">
                            <p>Copyright © 2022.Moon Digitizing Powered by  <a href="#" rel="nofollow">webxzone</a></p>
                        </div> <!-- copyright text -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- footer widget -->
    </footer>
 
        `
  }

 }

 customElements.define('my-footer',MyFooter);
 