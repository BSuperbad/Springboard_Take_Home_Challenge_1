import { Routes, Route } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import SignUpForm from '../users/SignUpForm';
import UsersList from '../users/UsersList';
import Home from './Home';

const MyRoutes = ({signup})=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUpForm signup={signup}/>}/>
            <Route path="/admin" element={<AdminRoute element={<UsersList/>}/>}/>
        </Routes>
    )
};

export default MyRoutes;