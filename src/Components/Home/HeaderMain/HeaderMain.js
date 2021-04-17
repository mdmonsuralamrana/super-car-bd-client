import React from 'react';
import car from '../../../Images/car5.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px', marginLeft:'-300px'}} className="row d-flex text-center align-items-center">
            <div className="col-md-12 offset-md-1">
                <h1 style={{color:'#62F4E7'}}>Your Car <br/> Our Services</h1>
                <br/>
                <button className="btn btn-primary">Repair Your Car By Us</button>
            </div>
        </main> 

    );
};

export default HeaderMain;