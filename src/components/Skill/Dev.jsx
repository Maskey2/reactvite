import Design from '.././../assets/design.webp';
import Code from '.././../assets/code.png';
import Lead from '.././../assets/lead.webp';

function Dev() {
    return (
      <div className="section">
     <div className="column">
            <div className='img-wrap'>
            <img src={Lead} className="col-img"/> 
            </div>
                    <div className="min-column">
                        <p className="title">Development</p>   
                        <p>Lorem Epson is a very very nice text to use for this example if you think this is not the way then okay bye</p>                      
                    </div>
                    <button className="button"><a href="/skill">See More</a></button>
                </div>
      </div>
    );
  }
  export default Dev;