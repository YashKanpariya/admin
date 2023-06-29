import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Index';
import Dashboard1 from './Dashboards/Dashboard1';
import Dashboard2 from './Dashboards/Dashboard2';
import Dashboard3 from './Dashboards/Dashboard3';
import FormGeneral from './Components/FormGeneral';
import DataTable from './Components/DataTable';
import BlogAdd from './Blogs/BlogAdd';
import BlogView from './Blogs/BlogView';
import BlogSingle from './Blogs/Home';
import BlogSingleRead from './Blogs/Blog-single';  
import Comment from './Blogs/Comment-table';
import './SCSS/Style.css';
import BlogEdit from './Blogs/BlogEdit';
import Comment_t from './Blogs/comment_t';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={(window.localStorage.getItem('id') === null) ? <Login /> : <Dashboard1 />} />
        <Route path='/home' element={(window.localStorage.getItem('id') !== null) ? <Dashboard1 /> : <Login />} />
        <Route path='/dashboard2' element={<Dashboard2 />} />
        <Route path='/dashboard3' element={<Dashboard3 />} />
        <Route path='/generalform' element={<FormGeneral />} />
        <Route path='/datatable' element={<DataTable />} />
        <Route path='/blog-add' element={<BlogAdd />} />
        <Route path='/blog-view' element={<BlogView />} />
        <Route path='/' element={<BlogSingle />} />
        <Route path='/ct' element={<Comment_t />} />
        <Route path='/single-blog-read/:id' element={<BlogSingleRead />} />
        <Route path='/comment-table' element={<Comment/>} />
        <Route path='/blog-edit/:id' element={<BlogEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
