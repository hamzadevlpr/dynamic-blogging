import { createContext, useState } from 'react';

const UserContext = createContext();
const initialUser = {
    name: '',
    email: '',
};

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);
    const [login, setLogin] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, login, setLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
