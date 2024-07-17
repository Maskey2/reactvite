import Gtm from './../assets/c/gtm.jpg';
import  GA from './../assets/c/ga.jpg';
import PM from './../assets/c/pm.jpg';
import Celigo from './../assets/c/celigo.jpg';
import RWD from './../assets/c/responsive.png';
import Power from './../assets/c/power.jpg';

function Header(){
    return(
        <div className='section' style={{    marginBottom: '10em'}} id="certifications">
            <h1>My Certifications</h1>
            <div className="cwrapper">
            <div className="ccolumn">
            <div className='certimg-wrap'>
            <img src={PM} className="certification-img"/> 
            </div>
            <div className="min-ccolumn" >
                        <p className="title">Project Management</p>   
                        <p className='subtitle'>Google</p>                   
                    </div>
                   
                </div>
                <div className="ccolumn">
                    <div className='certimg-wrap'>
                    <img src={GA} className="certification-img"/>
                    </div>
                    <div className="min-ccolumn" >
                    <p className="title">Google Analytics</p>      
                    <p className='subtitle'>Google</p>                
                    </div>
                   
                </div>
                <div className="ccolumn">
                    <div className='certimg-wrap'>
                    <img src={Gtm} className="certification-img"/>
                    </div>
                    <div className="min-ccolumn" >
                    <p className="title">Google Tag Manager</p>      
                    <p className='subtitle'>Google</p>  
                    </div>
                   
                </div>
                <div className="ccolumn">
                <div className='certimg-wrap'>
                    <img src={Celigo} className="certification-img"/>
                    </div>
                    <div className="min-ccolumn">
                    <p className="title">integrator.io Master Class</p>    
                    <p className='subtitle'>Celigo University</p>                    
                    </div>
                   
                </div>
                <div className="ccolumn">
                <div className='certimg-wrap'>
                    <img src={Power} className="certification-img"/>
                    </div>
                    <div className="min-ccolumn" >
                    <p className="title">Power Pages</p>      
                    <p className='subtitle'>Microsoft</p>           
                    </div>
                   
                </div>
                <div className="ccolumn">
                <div className='certimg-wrap'>
                    <img src={RWD} className="certification-img"/>
                    </div>
                    <div className="min-ccolumn" >
                   
                    <p className="title">Responsive Web Design</p>      
                    <p className='subtitle'>freeCodeCamp</p>                
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Header