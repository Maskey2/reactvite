import Design from '../assets/design.webp';
import Code from '../assets/code.png';
import Lead from '../assets/lead.webp';

function Header(){
    return(
        <div className='section' >
            <h1>Skills</h1>
            <div className="wrapper">
            <div className="column">
            <div className='img-wrap'>
            <img src={Lead} className="col-img"/> 
            </div>
                    <div className="min-column">
                        <p className="title">Product Management</p>   
                        <p>Prioritizing features based on user feedback and market research with emerging trends to ensure alignment on product vision.</p>                      
                    </div>
                    <a href="/skill"><button className="button">See More</button></a>
                </div>
                <div className="column">
                    <div className='img-wrap'>
                    <img src={Code} className="col-img"/>
                    </div>
                    <div className="min-column" >
                    <p className="title">Development</p>      
                    <p>Building B2B and DTC websites in Shopify Plus, SPAs in React, Material UI and building SEO friendly, accessible, responsive, high converting landing pages.</p>                   
                    </div>
                    <a href="/skill#development"><button className="button">See More</button></a>
                </div>
                <div className="column">
                <div className='img-wrap'>
                <img src={Design} className="col-img"/>
                </div>
                    <div className="min-column">
                    <p className="title">Design</p>    
                    <p>Bringing creativity to life, ideas to pixels ensuring optimal viewing experiences across the web in various devices and screen sizes.</p>                       
                    </div>
                    <a href="/skill#design"><button className="button">See More</button></a>
                </div>
            </div>
        </div>
    )
}
export default Header