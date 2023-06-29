import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { FaThumbsUp } from "react-icons/fa";
import { FaDribbble, FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa';

function BlogSingle() {
    const [result, setResult] = useState([])
    const [likeResult, setLikeResult] = useState([])
    // const play = new Audio(audio)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.get('http://localhost/php/AdminPanel/blog-view.php')
            .then(function (response) {
                console.log(response)
                setResult(response.data)
                // setLoader(true)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    function like(i) {
        // play.play()
        document.getElementById(`heart-${i}`).style.color = 'red'
        axios.post('http://localhost/php/AdminPanel/like-table.php', {
            user_id: i
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        axios.post('http://localhost/php/AdminPanel/like-view.php')
            .then(function (response) {
                console.log(response);
                setLikeResult(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    return (
        <>
          <section className='top-header bg-theam-blue'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className='header list-unstyled m-0 d-flex gap-4'>
                                <li><a href="#">Example@gmail.com</a></li>
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
                        
                        <div className="col d-flex justify-content-center" >
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
            <div className="blog-part pt-5 pb-5 bg-light">
                <div className="container">
                    <div className="row">
                        {
                            result.map((items, j) => {
                                // if (items.status === "1") {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="blog-body">
                                                <div className="blog-img">
                                                    <img src={`http://localhost/php/AdminPanel/img/${items.img}`} alt="" width={100} height={100} />
                                                </div>
                                                <div className="blog-content">
                                                    <h6 className='blog-content-title'> {items.title} </h6>
                                                    <p className='blog-content-desc'> {items.description} </p>
                                                    <div className="bottom-blog d-flex align-items-center justify-content-between mt-3">
                                                        {/* <Space wrap>
                                                                    <Button type="primary"><a href={`/single-blog-read/${items.id}`}>Read More</a></Button>
                                                                </Space> */}
                                                     <a href={`/single-blog-read/${items.id}`}>Read More...</a>
                                                        <a href="#" className='heart-icon d-flex align-items-center justify-content-between'>
                                                            {/* <i className="fa-solid fa-heart me-2" onClick={() => like(items.id)} id={`heart-${items.id}`}></i> */}
                                                            <FaThumbsUp onClick={() => like(items.id)} id={`heart-${items.id}`}/>
                                                            {
                                                                likeResult.map((likes) => {
                                                                    if (likes.user_id == items.id)
                                                                        return (
                                                                            <>
                                                                                <p style={{ fontSize: "20px" }}> {likes.user_like} Likes</p>
                                                                            </>
                                                                        )
                                                                })
                                                            }
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                                // }
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}


export default BlogSingle