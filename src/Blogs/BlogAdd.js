import React, { useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import axios from 'axios'

function BlogAdd() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [status, setStatus] = useState('')
    const [img, setImg] = useState('')

    const blogSubmit = (e) => {
        e.preventDefault()
        const blogData = new FormData()
        blogData.append('title', title)
        blogData.append('desc', desc)
        blogData.append('status', status)
        blogData.append('img', img)
        axios.post("http://localhost/php/AdminPanel/blog.php", blogData)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    <div className="content-wrapper">
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Blogs</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Add Blog</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Blog</h3>
                                            </div>
                                            <form encType="multipart/form-data" onSubmit={blogSubmit} method='post' >
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Title</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder="Title"
                                                            onChange={(e) => setTitle(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Description</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Status</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Status" onChange={(e) => setStatus(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">Image</label>
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="exampleInputFile" onChange={(e) => setImg(e.target.files[0])} />
                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                            </div>
                                                            <div className="input-group-append">
                                                                <span className="input-group-text">Upload</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                    <aside className="control-sidebar control-sidebar-dark">
                    </aside>
                </div>
            </div>
        </>
    )
}

export default BlogAdd

