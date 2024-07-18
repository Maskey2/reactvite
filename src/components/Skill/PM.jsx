import Cablerailing from './../../assets/cablerailing.png'
import Lead from '.././../assets/lead.webp';

function PM() {
    return (
      <div>
      <div className='wrapper'  style={{ marginBottom: '3em'}} id ="product-management">
                    <div className='column' style={{backgroundColor:'transparent'}}>
                    <div className='column' style={{backgroundColor:'white', minHeight:'85px'}}>
                    <p className="title">Product Management</p>
                    <div className="subtitle"> Agile, SCRUM, Waterfall, JIRA, Confluence, Asana, Trello</div>                   
                      </div>
                       
                        <img src={Cablerailing} style={{width:'100%'}} alt="Shopify Landing Page"/>  
                                          
                    </div>
                    <div className='column' style={{color:'black'}}>
                   
                       <ul>
                        <li><strong>User-Centric Design Approach:</strong> Study customer preferences and pain points with Sales, researched and aimed for streamlined navigation and intuitive layout for enhanced user experience.</li><br></br>
                        <li><strong>Visual and Functional Enhancements:</strong> Implement a clean, concise design featuring high-quality images and clear product images to improve engagement and conversion rates, leading to increase in page views and a rise in average session duration within 4 months.</li><br></br>
                        <li><strong>SEO Optimization:</strong> Collaborate with Marketing team and integrated SEO best practices into page content and metadata, resulting in  organic traffic growth. Achieved increase in search engine rankings for key industry terms, driving targeted traffic to the site.</li>  <br></br>                     
                        <li><strong>Analytics-Driven Iteration:</strong> Leverage analytics tools such as Google Analytics and heatmaps to monitor user behavior and iterate on design decisions. Designed device friendly banners for both desktop and mobile. Through continuous improvement cycles, achieved measurable results such as reduction in bounce rate and enhanced overall user satisfaction.</li>
                          </ul>             
                    </div>    </div>    
                    
                    <div >
        
           
                    </div>               
          
      </div>
    );
  }
  export default PM;