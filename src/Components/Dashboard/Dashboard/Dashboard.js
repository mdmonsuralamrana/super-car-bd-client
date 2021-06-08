import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {

    return (
        <section>
            <div className="container-fluid row background">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 background">
                    <h2>Dashboard</h2>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;