import PM from './Skill/PM'
import Dev from './Skill/Dev'
import Design from './Skill/Design'
import Nav from './../components/Nav'
import Footer from './../components/Footer'

function Skill() {
  return (
    <div>
      <Nav/>
      <div  className="section">
      <h1>Skills</h1>
     <PM/>
     <Dev/>
     <Design/>
    </div>
    <Footer/>
    </div>
  );
}
export default Skill;
