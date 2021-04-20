import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor: '#9E1F63'}} className="container p-5 text-center contact">
            <h5 className="text-white text-uppercase">Contact us</h5>
            <div className="col-md-9 mx-auto">
            <form action="" className="mt-5">
                       <div className="form-group mb-4">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-4">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mb-4">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group mb-4 text-center">
                           <button type="button" className="btn btn-brand text-white"> Submit </button>
                       </div>
                   </form>
            </div>
        </section>
    );
};

export default Contact;