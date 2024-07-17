import Meta from './../../assets/metaobjects.png'


function Dev() {
    return (
      <div>
      <div className='wrapper' style={{margin:'4em 0'}} id ="development">
                   
                    <div className='column' style={{color:'black'}}>
                   
                       <ul>
                        <li><strong>Front End Development:</strong> 
                        <ul>
                          <li>Build Single Page Applications using React and Material UI for private label brands in Monorepo architecture</li>
                          <li>Ensure accurate conversion tag implementation across the website with GA4, Bing, etc.</li>
                          <li>Update product pages in Google Schema with more product fields and descriptions filled with keywords for better SEO</li>
                          <li>Build features like cross device friendly Mega Menu, Quick Order Pad, etc. for the site</li>
                          <li>Build Email templates in Mailchimp and Klaviyo</li>
                        
                        </ul>  
                        <br></br>
                       </li>
                        <li><strong>E-Commerce Development:</strong> 
                        <ul>
                        <li>Build B2B and DTC Shopify Plus websites and implement B2B features like price lists, B2B customer roles, quick order pad, etc.</li>
                        <li>Migrate to new Checkout by building extensions related to conditional banner, product line items and tax exemption notes.</li>
                        <li>Integrate apps and services like Klaviyo, Quick Quote, Search Spring, Trustpilot, Zendesk, and HotJar with Shopify Plus</li>
                        <li>Led the project of Shopify site Wholesale Rigging Products, United Stainless, Skookum, and C4 NOLA.</li>
                        <li>Implemented a new RMA process using Shopify's new customer accounts</li>
                        <li>Setup and Assist with Tax Exemption Process</li>  
                        </ul>                    
                        </li>  
                          </ul>             
                    </div>  
                    <div className='column' style={{backgroundColor:'transparent'}}>
                    <div className='column' style={{backgroundColor:'white', minHeight:'80px'}}>
                      
                    <p className="title">Development</p> 
                    <div className="subtitle">HTML5, CSS3, JavaScript, React JS, Bootstrap, Material UI, GitHub, Responsive Web Design, SEO, Google Analytics, Google Tag Manager  </div>
                      </div>
                       
                        <img src={Meta} style={{width:'80%'}} alt="Shopify Landing Page"/>  
                                          
                    </div> 
                    </div>  
                                     
          
      </div>

    );
  }
  export default Dev;