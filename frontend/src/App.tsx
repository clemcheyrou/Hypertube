import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LandingPage } from './components/landing-page/LandingPage';
import './App.css';
import { Login } from './components/authentification/Sign-in';
import { Register } from './components/authentification/Register';
import { Layout } from './components/dashboard/Layout';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
