import { createContext } from 'react';

const UserContext = createContext({
    userEmail: '',
    setUserEmail: () => {},
    loggedIn: false,
    setLoggedIn: () => {},
    UserReward: 100,
    profilePicture: 'https://via.placeholder.com/150',
    setProfilePicture: () => {},
});

export default UserContext;
