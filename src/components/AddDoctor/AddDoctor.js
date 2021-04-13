import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import NavBar from '../Shared/NavBar/NavBar';

const AddDoctor = () => {

    const [info, setinfo] = useState({});
    const [file, setfile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setinfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setfile(newFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('One doctor information uploaded')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <NavBar />
            <div className="container-fluid row" style={{ padding: '0' }}>
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 p-5">
                    <h5 style={{ color: 'var(--color-primary)' }}>Add a doctor</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" placeholder="Doctor's Name" onBlur={handleBlur} name='name' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" placeholder="Doctor's primary email" onBlur={handleBlur} className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fileUpload" className='form-label'>Upload a image</label>
                            <input type="file" id='fileUpload' onChange={handleFileChange} className='form-control' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;