import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <form className="col-md-6 p-5">
                        <input className="form-control mb-3" type="text" placeholder="jhon@gmail.com"/>
                        <input className="btn-brand text-white" type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;