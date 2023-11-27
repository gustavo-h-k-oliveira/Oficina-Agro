import React from 'react';
import './Dashboard.css';
import HeaderLogado from '../../components/organisms/Header/HeaderLogado';
import Footer from '../../components/organisms/Footer/Footer.jsx';
import User from '../../components/templates/Dashboard/User';
import Tasks from '../../components/templates/Dashboard/Tasks';
import FloatingButton from '../../components/atoms/buttons/FloatingButton.jsx';

const Dashboard = () => {
    return (
        <div>
            <HeaderLogado />
            <div className='content-dashboard'>
                <User />
                <Tasks />
            </div>
            <Footer />
            <FloatingButton />
        </div>
    )
};

export default Dashboard;