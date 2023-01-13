import React, { useEffect, useState } from 'react'
import "./index.scss"
import { instance, User } from '../../utils'
import dayjs from 'dayjs'

import UsersIcon from "../../assets/dashboard-icons/icon-a.svg"
import ActiveUsersIcon from "../../assets/dashboard-icons/icon-b.svg"
import UserswithLoansIcon from "../../assets/dashboard-icons/icon-c.svg"
import UserswithSavingsIcon from "../../assets/dashboard-icons/icon-d.svg"
import FilterIcon from "../../assets/table-icons/filter.svg"
import VectorIcon from "../../assets/table-icons/vector.svg"
import ViewDetails from "../../assets/hamburger-icons/view-details.svg"
import BlacklistUser from "../../assets/hamburger-icons/blaclist-user.svg"
import ActivateUser from "../../assets/hamburger-icons/activate-user.svg"
import { NavLink, useNavigate } from 'react-router-dom'



export default function Users() {
  const [usersData, setUsersData] = useState<Array<User>>([])

  const navigate = useNavigate()

  const getStatusClass = (itemId: number) => {
    if (itemId % 3 === 0) {
      return "blacklisted"
    } else if (itemId % 5 === 0) {
      return "inactive"
    } else if (itemId % 7 === 0) {
      return "pending"
    } else {
      return "active"
    }
  }
  async function getUsersData() {
    try {
      const res = await instance.get('users')
      setUsersData((res.data as Array<User>).map((item) => {
        return {
          ...item,
          status: getStatusClass(item.id)
        }
      }))
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const formatDate = (date: Date) => {
    return dayjs(date).format("MMM DD, YYYY hh: mm A")
  }

  return (
    <div className='users'>
      <h1 className='users-header'>Users</h1>
      <div className='users-content'>
        <div className='users-card'>
          <img src={UsersIcon} alt="Users Icon" />
          <p>USERS</p>
          <span>2,453</span>
        </div>
        <div className='users-card'>
          <img src={ActiveUsersIcon} alt="Active Users Icon" />
          <p>ACTIVE USERS</p>
          <span>2,453</span>
        </div>
        <div className='users-card'>
          <img src={UserswithLoansIcon} alt="Users with Loans Icon" />
          <p>USERS WITH LOAN</p>
          <span>12,453</span>
        </div>
        <div className='users-card'>
          <img src={UserswithSavingsIcon} alt="Users with Savings Icon" />
          <p>USERS WITH SAVINGs</p>
          <span>102,453</span>
        </div>
      </div>
      <div className='users-table'>
        <table>
          <thead>
            <tr>
              <th><div>
                <p>ORGANIZATION</p>
                <button className='users-table-button'>
                  <img src={FilterIcon} alt="Filter Icon" />
                </button>
              </div>
              </th>
              <th><div>USERNAME <img src={FilterIcon} alt="Filter Icon" /></div></th>
              <th><div>EMAIL <img src={FilterIcon} alt="Filter Icon" /></div></th>
              <th><div>PHONE NUMBER <img src={FilterIcon} alt="Filter Icon" /></div></th>
              <th><div>DATE JOINED <img src={FilterIcon} alt="Filter Icon" /></div></th>
              <th><div>STATUS <img src={FilterIcon} alt="Filter Icon" /></div></th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td><span className={user.status}>{user.status}</span></td>
                  <td>
                    <button className='hamburger'>
                      <img src={VectorIcon} alt="More Options" />
                      <div className='hamburger-items'>
                        <span onClick={() => navigate(`/dashboard/users/${user.id}`)} className="hamburger-item ">
                          <img src={ViewDetails} alt="View Details" /> View Details
                        </span>
                        <span className="hamburger-item"><img src={BlacklistUser} alt="Blacklist User" /> Blacklist User</span>
                        <span className="hamburger-item"><img src={ActivateUser} alt="Activate User" /> Activate User</span>
                      </div>

                    </button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}