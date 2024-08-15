import WIT1 from "../assets/WIT/wit1.jpg";
import WIT2 from "../assets/WIT/wit2.jpg";
import Website from "../assets/WIT/wit-selu.jpg";
function Leadership() {
  return (
    <div>
      <div className="section" style={{ minHeight: "50vh" }} id="leadership">
        <h1>Leadership</h1>
        <div
          className="column"
          style={{ minHeight: "unset", color: "black", marginBottom: "10px" }}
        >
          <p className="subtitle" style={{ margin: "0" }}>
            Thomas F. Higginbotham Scholarship in Computing Science
          </p>
        </div>
        <div
          className="column"
          style={{ minHeight: "unset", color: "black", marginBottom: "10px" }}
        >
          <p className="subtitle" style={{ margin: "0" }}>
            David Ware & Associates Outstanding International Student Award &
            Scholarship
          </p>
        </div>
        <div
          className="column"
          style={{ minHeight: "unset", color: "black", marginBottom: "10px" }}
        >
          <p className="subtitle" style={{ margin: "0" }}>
            Tangipahoa Professional Women’s Organization Scholarship
          </p>
        </div>
        <div
          className="column"
          style={{ minHeight: "unset", color: "black", marginBottom: "10px" }}
        >
          <p className="subtitle" style={{ margin: "0" }}>
            Distinguished Research Presentation Award, PROFIT Asset Program
          </p>
        </div>
        

        <div className="cwrapper" style={{marginTop:'2em'}}>
        
          <div
            className="column"
            style={{ minHeight: "100px", color: "black", marginBottom: "10px", textAlign:'center' }}
          >
            <a href="https://www.wit-selu.com/"><img src={Website} className="wit-img" /></a>
          </div>
          <div
            className="column"
            style={{ minHeight: "100px", color: "black", marginBottom: "10px", textAlign:'center' }}
          >
             <a href="https://www.wit-selu.com/"><img src={WIT2} className="wit-img" /></a>
          </div>
          <div
            className="column"
            style={{ minHeight: "100px", color: "black", marginBottom: "10px", textAlign:'center' }}
          >
             <a href="https://www.wit-selu.com/"><img src={WIT1} className="wit-img" /></a>
          </div>
         
        </div>
        <div style={{    display: 'flex', justifyContent: 'center'}}>
        <p class="r-arrow" ><a href="https://www.wit-selu.com/" className="intro" target="_blank">Visit WIT-SELU.com</a></p>
        </div>
      </div>
    </div>
  );
}
export default Leadership;
