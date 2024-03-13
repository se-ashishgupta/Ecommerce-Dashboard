import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const AppContext = ({ children }) => {
    const [openSidebar, setopenSidebar] = useState(false);
    const [openSettingSidebar, setOpenSettingSidebar] = useState(false);
    const [openMenu, setopenMenu] = useState("Dashboard");
    const [activeMenu, setActiveMenu] = useState(window.location.pathname);
    const [theme, setTheme] = useState('light');
    const [topBarFixed, setTopBarFixed] = useState(false);


    const toggleSidebar = () => {
        setopenSidebar(prev => !prev);
    };

    const toggleSettingSidebar = () => {
        setOpenSettingSidebar(prev => !prev);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        if (theme == "light") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const toggleTopbar = () => {
        setTopBarFixed(prev => !prev);
    };

    return (
        <MyContext.Provider value={{ openSidebar, setopenSidebar, openMenu, setopenMenu, activeMenu, setActiveMenu, openSettingSidebar, setOpenSettingSidebar, theme, toggleTheme, topBarFixed, toggleTopbar }}>
            {children}
        </MyContext.Provider>
    );
};


export const useMyContext = () => {
    return useContext(MyContext);
};