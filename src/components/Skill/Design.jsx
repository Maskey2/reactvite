
import Bcard from './../../assets/Business-Card.jpg'
import C41 from './../../assets/C4-1.jpg'
import C42 from './../../assets/C4-2.jpg'
import C43 from './../../assets/C4-3.png'
import Cable2 from './../../assets/haas-2.jpg'
import Pps from './../../assets/pps.jpg'
import Vday from './../../assets/vday.jpg'
import Haas from './../../assets/haas-3.jpg'
import Review from './../../assets/review.jpg'

function Design() {
    return (
        <div className='wrapper' style={{marginTop:'4em'}} id="design">
                   
          
        <div className='column' style={{backgroundColor:'white'}}>
            <p className="title">Design</p>  
            <div className="subtitle"> Logo Design | Business Card Design |  Responsive Web Design | Banner Design | Ticket Design</div> 
            <img src={Pps} style={{width:'100%'}} alt="Shopify Landing Page"/> 
             
                              
        </div>  
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={Bcard} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div> 
       
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={C41} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div>  
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={C42} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div>
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={C43} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div>  
        <div className='column' style={{backgroundColor:'transparent'}}>
       
        <img src={Cable2} style={{width:'100%'}} alt="Shopify Landing Page"/>
        </div>    
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={Vday} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div>  
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={Haas} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div> 
        <div className='column' style={{backgroundColor:'transparent'}}>
        <img src={Review} style={{width:'100%'}} alt="Shopify Landing Page"/> 
        </div>         

</div>
    );
  }
  export default Design;