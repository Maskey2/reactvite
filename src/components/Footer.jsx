import React, { useState } from 'react';
function Footer(){
    const [date, setDate] = useState(new Date());

    return(
        <div className="footer"> 
            <p>Copyright © NM{date.getFullYear()} </p>   
        </div>
    )
}
export default Footer