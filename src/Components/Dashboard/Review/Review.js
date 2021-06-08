import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c5ad40e7d62ccba33fad67c5de1000a4')
        imageData.append('image', event.target.files[0]) 
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const onSubmit = data => {
        if (imageUrl === null) {
            alert('Please Wait for image uploading')
        }
        else {
            const newReview = { ...data, image: imageUrl }
            fetch('https://supercarbd.herokuapp.com/addTestimonial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Thanks for your Testimonial')
                        window.location.reload()
                    }
                })
        }
    };

    const style={overflowY: 'hidden', overflowX: 'hidden'}

    return (
        <section style={{margin:'0'}}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={style} className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 p-5">
                        <input className="form-control mb-3" type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />

                        <input className="form-control mb-3" type="text" placeholder="Enter Your Country Name" {...register("country", { required: true })} />

                        <textarea className="form-control mb-3" placeholder="Enter Your Comment" {...register("description", { required: true })} />

                        <input onChange={handleImageUpload} type="file" className="form-control mb-3"/>

                        <input className="btn-brand text-white py-2 px-3" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;