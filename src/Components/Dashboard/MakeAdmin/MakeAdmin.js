import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data)
        fetch('https://supercarbd.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.location.reload()
                }
            })
    };

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 p-5">
                        <input {...register("email", { required: true })} className="form-control mb-3" type="email" placeholder="jhon@gmail.com" />
                        <input className="btn-brand text-white" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;