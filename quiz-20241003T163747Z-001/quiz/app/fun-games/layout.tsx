import React, { ReactNode } from 'react';
import Header from '../../components/header/index';
import './layout.css';

interface LayoutProps {
    children: ReactNode; // Define the type of children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="mainContent">
                {children}
            </main>
        </div>
    );
};

export default Layout;
