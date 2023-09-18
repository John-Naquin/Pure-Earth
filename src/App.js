import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Jean from './pages/Locations/Jean';
import Signup from './pages/Signup/Signup';
import Parks from './pages/Parks/Parks';
import Kisatchie from './pages/Locations/Kisatchie';
import Volunteer from './pages/Volunteer/Volunteer';
import Caneriver from './pages/Locations/Caneriver';
import Povertypoint from './pages/Locations/Povertypoint';
import StripeApp from './pages/Donate/StripeApp';
import Footer from './components/Footer';
import Questions from './pages/Questions/Questions';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import UserContext from './pages/UserContext';
import Choice from "./pages/Donate/choice"
import Atchafalaya from "./pages/Locations/Atchafalaya";
import CypremorePoint from "./pages/Locations/CypremorePoint";
import GrandIsle from "./pages/Locations/GrandIsle";
import NewOrleansJazz from "./pages/Locations/NewOrleansJazz";

function App() {


    const [userEmail, setUserEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [UserReward, setUserReward] = useState(100);
    const [profilePicture, setProfilePicture] = useState(
        localStorage.getItem('profilePicture') || 'https://via.placeholder.com/150'
    );

    useEffect(() => {
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedUserReward = localStorage.getItem('UserReward');
        if (storedUserEmail) {
            setUserEmail(storedUserEmail);
            setLoggedIn(true);
            setUserReward(storedUserReward || 100);
        }
    }, []);

    return (
        <>
            <UserContext.Provider
                value={{
                    userEmail,
                    setUserEmail,
                    loggedIn,
                    setLoggedIn,
                    UserReward,
                    setUserReward,
                    setProfilePicture,
                    profilePicture,
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/parks" element={<Parks />} />
                    <Route path="/jean" element={<Jean />} />
                    <Route path="/kisatchie" element={<Kisatchie />} />
                    <Route path="/caneriver" element={<Caneriver />} />
                    <Route path="/povertypoint" element={<Povertypoint />} />
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/login" element={loggedIn ? <Profile /> : <Login />} />
                    <Route path="/profile" element={loggedIn ? <Profile /> : <Login />} />
                    <Route path="/donate" element={<Choice />} />
                    <Route path="/stripeapp" element={<StripeApp />} />
                    <Route path="/atchafalaya" element={<Atchafalaya />} />
                    <Route path="/cypremorepoint" element={<CypremorePoint />} />
                    <Route path="/grandisle" element={<GrandIsle />} />
                    <Route path="/neworleansjazz" element={<NewOrleansJazz />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </>
    );
}

export default App;
