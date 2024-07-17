import LinkedIn from "../assets/Linkedin.webp";
import Medium from "../assets/Medium.svg";
import Github from "../assets/Github.png";
import P from "../assets/p.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerbod">
        <div>
          <img
            src={P}
            className="main-pic"
          />
        </div>
        <div className="hcolumn">
          <h1>Hi, I'm Nishma</h1>
          <p className="intro">
            I believe that the combination of art and technology can produce
            marvelous results, that's what drives me to work on my skills to
            bring innovative and captivating designs to life.
          </p>
          <div style={{ display: "flex", margin:'20px 0' }}>
          <a href="https://www.linkedin.com/in/nishmamaskey/"><img      src={LinkedIn}  className="col-img"  style={{ margin: "4px", width:'40px', height:'40px',paddingTop:'6px' }}  /></a>
            <a href="https://github.com/Maskey2"><img src={Github} className="col-img" style={{ margin: "4px" }} /></a>
            <a href="https://medium.com/@maskeynishma"><img src={Medium} className="col-img" style={{ margin: "4px" }} /></a>
          </div>
          <a href="https://drive.google.com/file/d/1EfncMW-EwMb56T3iv4rinaXNr1s9xl3I/view?usp=sharing" className="intro" target="_blank">View Resume</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
