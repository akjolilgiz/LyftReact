import React from 'react';


function Footer() {
  return(
    <div>
      <style jsx>{`
   .footer{
     width: 100%;
     height: 400px;
     background: linear-gradient(to top, white 90%, lightgray);
     font-family: optima;

   }
   .driver{
     width: 20%;
     float: left;
     margin-top: 10px;
     margin-bottom: 10px;
     margin-left: 100px;
     text-align: left;

   }
   .rider{
    width: 18%;
    float: left;
    margin-top: 10px;
    text-align: left;

   }
   .lyft{
    width: 18%;
    float: left;
    margin-top: 10px;
    margin-right: 1px;
    text-align: left;

   }
   .download{
    width: 0px;
    float: left;
    margin-right: 400px;
    margin-top: 10px;
    margin-bottom: 300px;
    text-align: left;
    
   }
   p{
     text-align: left;
     font-size: 15px;
   }
   img{
     float: left;
     width: 400px; 
     height: 160px;
   }
  h6{
     width: 400px;
     font-size: 15px;
     display: inline-block;
     
  }
   .imgMedia img {
     width: 50px;
     height: 50px;
     float: right;
     margin-right: 20px;
     position: absolute;
     transform: translate(-80px, 550px);
   }

   .privacyTerms {
     float: right;
     margin-right: 5px;    
   }

  `}</style>
      <div className="footer">
        <div className="driver">
          <h4>DRIVER</h4>
          <p>Become a Driver</p>
          <p>Why Lyft</p>
          <p>Cities</p>
          <p>Help</p>
          <p>Express Drive</p>
          <p>Application Requirements</p>
          <p>Bonus</p>
          <p>Earnings</p>
          <p>Jobs</p>
          <p>Hub</p>

        </div>
        <div className="rider">
          <h4>RIDER</h4>
          <p>Sign up to Ride</p>
          <p>Business Profile</p>
          <p>Cities</p>
          <p>Help</p>
          <p>Events</p>
          <p>Fare Estimate</p>
          <p>Airport</p>
          <p>Promo Code</p>
          <p>Gift Cards</p>
          <p>All-Access Plan</p>
          <p>Round Up & Donate</p>
          <p>Blog</p>

        </div>
        <div className="lyft">
          <h4>LYFT</h4>
          <p>Careers</p>
          <p>Business</p>
          <p>Self-Driving</p>
          <p>Developers</p>
          <p>Safety</p>
          <p>Scooters</p>
          <p>Press</p>
        </div>

        <div className="download">
          <h4>DOWNLOAD</h4>
          <img src="https://3.bp.blogspot.com/-RiWBquOMu4Y/WOYHvxExDcI/AAAAAAAAAZw/M-1JaxMiVcIFz98NASH5CzazTyxaXv8ZQCLcB/s1600/Billboard%2BApp%2Bicon.png"/>
          </div>

          <div className="privacyTerms">
            <h6>Terms Privacy © 2018 Lyft, Inc</h6>
          </div>
          
          <div className="imgMedia">
            <img src="data:image/png;base64,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"/>
              </div>
          </div>
        </div>


  );
}

export default Footer;