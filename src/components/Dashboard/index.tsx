import React from 'react'
import "./index.scss"

import UsersIcon from "../../assets/dashboard-icons/icon-a.svg"
import ActiveUsersIcon from "../../assets/dashboard-icons/icon-b.svg"
import UserswithLoansIcon from "../../assets/dashboard-icons/icon-c.svg"
import UserswithSavingsIcon from "../../assets/dashboard-icons/icon-d.svg"

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <h1 className='dashboard-header'>Users</h1>
            <div className='dashboard-content'>
                <div className='dashboard-card'>
                    <img src={UsersIcon} alt="Users Icon" />
                    <p>USERS</p>
                    <span>2,453</span>
                </div>
                <div className='dashboard-card'>
                    <img src={ActiveUsersIcon} alt="Active Users Icon" />
                    <p>ACTIVE USERS</p>
                    <span>2,453</span>
                </div>
                <div className='dashboard-card'>
                    <img src={UserswithLoansIcon} alt="Users with Loans Icon" />
                    <p>USERS WITH LOAN</p>
                    <span>12,453</span>
                </div>
                <div className='dashboard-card'>
                    <img src={UserswithSavingsIcon} alt="Users with Savings Icon" />
                    <p>USERS WITH SAVINGs</p>
                    <span>102,453</span>
                </div>
            </div>
        </div>
    )
}