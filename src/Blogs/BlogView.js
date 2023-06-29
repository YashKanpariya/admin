import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'


function BlogView() {
    const [result, setResult] = useState([])
    useEffect(() => {
        axios.post('http://localhost/PHP/AdminPanel/blog-view.php')
            .then(function (response) {
                console.log(response)
                setResult(response.data)
            })
            .catch(function (error) {

                
                console.log(error)
            })
    }, [])
    const handleSwitch = (id, e) => {
        if (e === true) {
          axios.post('http://localhost/php/AdminPanel/switch.php', {
            id: id,
            status: 1
          })
            .then(function (res) {
              console.log(res)
            })
        } else {
          axios.post('http://localhost/php/AdminPanel/switch.php', {
            id: id,
            status: 0
          })
        }
      }
      useEffect(() => {
        result.map((i, k) => {
          document.getElementById('custom-switch' + k).checked = (i.status == 1) ? true : false;
        })
      }, [result])
    const delRecord = (i) => {
        const id = i
        axios.post('http://localhost/PHP/AdminPanel/blog-delete.php', {
            del_id: id
        })
            .then(function (response) {
                console.log(response)
                window.location.reload()
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
                                                            <th className="text-center">Id</th>
                                                            <th className="text-center">Title</th>
                                                            <th className="text-center">Description</th>
                                                            <th className="text-center">Status</th>
                                                            <th className="text-center">Image</th>
                                                            <th colSpan={2} className="text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            result.map((items,timepass) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td> {items.id} </td>
                                                                            <td> {items.title} </td>
                                                                            <td> {items.description} </td>
                                                                            <td> <div class="custom-control custom-switch">
                                                                                <input type="checkbox" style={{ color: 'red', backgroundColor: 'blue' }} id={"custom-switch" + timepass}
                                                                                    onChange={(j) => {
                                                                                        handleSwitch(items.id, j.target.checked)
                                                                                    }} className="custom-control-input" />
                                                                                <label class="custom-control-label" htmlFor={"custom-switch" + timepass}></label>
                                                                            </div></td>
                                                                            <td>
                                                                                <img src={`http://localhost/php/AdminPanel/img/${items.img}`} alt="" width={100} height={100} style={{ objectFit: 'cover' }} />
                                                                            </td>
                                                                            <td>
                                                                                <a href={`blog-edit/${items.id}`}>Edit</a>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" onClick={() => delRecord(items.id)}>Delete</a>
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
                    <Footer />
                    <aside className="control-sidebar control-sidebar-dark">
                    </aside>
                </div>
            </div>
        </>
    )
}

export default BlogView
