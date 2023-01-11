import React from 'react'
import "./index.scss"

import UsersIcon from "../../assets/dashboard-icons/icon-a.svg"
import ActiveUsersIcon from "../../assets/dashboard-icons/icon-b.svg"
import UserswithLoansIcon from "../../assets/dashboard-icons/icon-c.svg"
import UserswithSavingsIcon from "../../assets/dashboard-icons/icon-d.svg"
import FilterIcon from "../../assets/table-icons/filter.svg"
import VectorIcon from "../../assets/table-icons/vector.svg"


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
            <div className='dashboard-table'>
                <table>
                    <tr>
                        <th>ORGANIZATION</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>DATE JOINED</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td><span>Inactive</span></td>
                        <td><img src={VectorIcon} alt="Vector Icons" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}