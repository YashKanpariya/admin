import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { FaDribbble, FaFacebook, FaInstagram, FaSearch, FaTwitter , } from 'react-icons/fa';



function BlogSingleRead() {
    const { id } = useParams()
    const user_id = `${id}`
    const [result, setResult] = useState([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [commentBox, setCommentBox] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.post('http://localhost/php/AdminPanel/blog-view.php')
            .then(function (response) {
                console.log(response)
                setResult(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    const commentSubmit = () => {
        axios.post('http://localhost/php/AdminPanel/comment.php', {
            comment: comment,
            name: name,
            user_id: user_id
        })
            .then(function (response) {
                console.log(response)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        axios.post('http://localhost/php/AdminPanel/comment-view.php', {
            user_id: user_id
        })
            .then(function (response) {
                console.log(response)
                setCommentBox(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    return (
        <>

            <section className='top-header bg-theam-blue'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className='header list-unstyled m-0 d-flex gap-4'>
                                <li><i class="fa-solid fa-envelope icon"></i><a href="#">Example@gmail.com</a></li>
                                <li><i class="fa-solid fa-house-chimney icon"></i><a href="#">50 New Delhi, India</a></li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <ul className='header list-unstyled m-0'>
                                <li><a href="#">HAVE ANY QUESTION ? +123 456 789</a></li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <ul className='header m-0 list-unstyled d-flex gap-3'>
                                <li><a href="#"><FaInstagram /></a></li>
                                <li><a href="#"><FaFacebook /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaDribbble /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-header' style={{backgroundColor:'#ECF2FF'}}>
                <div className='container'>
                    <div className="row">

                        <div className="col d-flex justify-content-center">
                            <nav>
                                <ul className='sec-head m-0 list-unstyled d-flex gap-4'>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Pages</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <div className="single-blog-read pt-3 pb-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        {
                            result.map((items) => {
                                if (items.id === id)
                                    return (
                                        <>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="single-blog-img">
                                                    <img src={`http://localhost/php/AdminPanel/img/${items.img}`} alt="" width={100} height={100} />
                                                </div>
                                            </div>
                                            <div className="col-lg-11 col-md-12 col-sm-12">
                                                <div className="single-blog-content d-flex align-items-center gap-3">
                                                    <span>Title:- </span>
                                                    <h5 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: "600" }}> {items.title} </h5>
                                                </div>
                                                <div className="single-blog-content d-flex mt-4 gap-3">
                                                    <span>Description:- </span>
                                                    <p> {items.description} </p>
                                                </div>

                                            </div>

                                            <div className="comment-box-text mt-5 ms-5 ">
                                                <h3>Write A Comment!..</h3>
                                                <div className="comment-box-name ">
                                                    <input type="text" placeholder='Enter your name...' onChange={(i) => setName(i.target.value)} />
                                                </div>
                                                {/* <div className="comment-box-cm">
                                                    <input type="text" placeholder='enter your email' onChange={(i) => setComment(i.target.value)} />
                                                </div> */}
                                                <div className="comment-box-cm mt-2">
                                                    <input type="text" placeholder='Add Comment' onChange={(i) => setComment(i.target.value)} />
                                                </div>
                                                <div className="comment-box-btn mt-4">
                                                    <button onClick={() => commentSubmit()}>Submit</button>
                                                </div>
                                            </div>
                                            <div className="row row-cols-sm-1">
                                                {
                                                    commentBox.map((items) => {
                                                        if (window.localStorage.getItem('comment_id') !== items.id) {
                                                            return (
                                                                <>
                                                                    <div className="col-auto">
                                                                        <div className="comment-box-view ">
                                                                            <p style={{ fontSize: '14px', opacity: '0.8' }}>Written By {items.name}...</p>
                                                                            <p className='m-0'> {items.comment} </p>

                                                                        </div>


                                                                  </div>

                                                                </>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>

                                        </>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
export default BlogSingleRead