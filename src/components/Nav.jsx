import Logo from "../assets/NM-logo.jpg";
function Nav(){
    return(
   
            <div className="nav">
                 <a href="/" className="linklogo"><img src={Logo} style={{width:'30px'}}/></a>
                <a href="/" className="link">Home</a>
              
                <a href="/#certifications" className="link">Certifications</a> 
                 <a href="/#leadership" className="link">Leadership</a>
                 <a href="/skill" className="link">Skills</a>
                
            </div>
           
    )
}
export default Nav