import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

function Comment() {
    const [result, setResult] = useState([])
    useEffect(() => {
        axios.get('http://localhost/php/AdminPanel/comment-view-all.php')
            .then(function (response) {
                console.log(response)
                setResult(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    function checkComment(i, j) {
        alert(i + j)
        if (j === true) {
            window.localStorage.setItem('comment_id', i)
        }
        else if (j === false) {
            window.localStorage.removeItem('comment_id')
        }
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
                                        <h1>DataTables</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">DataTables</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="content" id='content-blog'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Comment Table</h3>
                                            </div>
                                            <div className="card-body">
                                                <table id="example2" className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">Id</th>
                                                            <th className="text-center">User Id</th>
                                                            <th className="text-center">Name</th>
                                                            <th className="text-center">Comment</th>
                                                            <th className="text-center">Submit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            result.map((items, timepass) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td> {items.id} </td>
                                                                            <td> {items.user_id} </td>
                                                                            <td> {items.name} </td>
                                                                            <td> {items.comment}</td>
                                                                            <td>
                                                                                <input type="checkbox" name="" id=""
                                                                                    onChange={(i) => checkComment(items.id, i.target.checked)} />
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Comment