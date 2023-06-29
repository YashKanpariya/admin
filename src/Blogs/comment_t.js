import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Comment_t() {
    const [CommentBox, setCommentBox] = useState([])
    useEffect(() => {
        axios.get('http://localhost/PHP/AdminPanel/comment-view.php')
            .then(function (res) {
                console.log(res)
                setCommentBox(res.data.brijesh)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    const handleSwitch = (id, e) => {
        if (e === true) {
            axios.post('http://localhost/adminpanel/blog-status.php', {
                id: id,
                status: 1
            })
                .then(function (res) {
                    console.log(res)
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        else {
            axios.post('http://localhost/adminpanel/blog-status.php', {
                id: id,
                status: 0
            })
                .then(function (res) {
                    console.log(res)
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
    useEffect(() => {
        CommentBox.map((i, k) => {
          document.getElementById('custom-switch' + i.id).checked = (i.status == 1) ? true : false;
        })
      }, [CommentBox])
    return (
        <>
            {/* <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
            </div> */}
            
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
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>User_Id</th>
                                                    <th>Name</th>
                                                    <th>User_Comment</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    CommentBox.map((items) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td> {items.id} </td>
                                                                    <td> {items.title} </td>
                                                                    <td> {items.description} </td>
                                                                    <td> 
                                                                    <img src={`http://localhost/adminpanel/image/${items.img}`} alt="" width={100} height={100} /> </td>
                                                                    <td>
                                                                        {items.status}
                                                                        <div class="form-check form-switch">
                                                                            <input class="form-check-input" type="checkbox" role="switch" id={"custom-switch" + items.id}
                                                                                onChange={(j) => {
                                                                                    handleSwitch(items.id, j.target.checked)
                                                                                }} />
                                                                        </div>
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
        </>
    )
}

export default Comment_t