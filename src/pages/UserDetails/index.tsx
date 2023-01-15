import React, { useEffect, useState } from "react";
import "./index.scss"
import { instance, User } from '../../utils'

import Arrow from "../../assets/arrow.svg"
import UserIcon from "../../assets/user-icon.svg"
import Star from "../../assets/star-icons/star.svg"
import EmptyStar from "../../assets/star-icons/empty-star.svg"
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [userData, setUserData] = useState<User | null>(null)
  const params = useParams()

  async function getUserData() {
    try {
      const res = await instance.get(`users/${params.id}`)
      setUserData(res.data)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (
    <div className="user-details">
      <div className="user-details-header">
        <img src={Arrow} alt="Arrow Icon" />
        <a href="/dashboard/users">Back to Users</a>
      </div>
      <div className="user-details-heading">
        <h1>User Details</h1>
        <div className="user-details-button">
          <button className="blacklist-button">BLACKLIST <span>USER</span></button>
          <button className="activate-button">ACTIVATE <span>USER</span></button>
        </div>
      </div>
      <div className="user-details-subheadings">
        <div className="user-info">
          <div>
            <img src={userData?.profile.avatar} alt="Arrow Icon" className="user-image" />
          </div>
          <div className="user-data">
            <div className="user-name">
              <h3>{`${userData?.profile.firstName}  ${userData?.profile.lastName}`
              }</h3>
              <span>LSQFf587g90</span>
            </div>
            <div className="user-tier">
              <p>User's Tier</p>
              <span>
                <img src={Star} alt="Star Icon" />
                <img src={EmptyStar} alt="Star Icon" />
                <img src={EmptyStar} alt="Star Icon" />
              </span>
            </div>
            <div className="user-account">
              <p>{`₦ ${userData?.education.monthlyIncome[1]}`}</p>
              <span>{userData?.accountNumber}/Providus Bank</span>
            </div>
          </div>
        </div>
        <div className="user-tabs">
          <div className="user-tabs-mobile">
            {/* <label htmlFor="user-tab">USER TAB:</label> */}
            <select name="user-tabs" id="user-tabs">
              <option value="general-details">General Details</option>
              <option value="Documents">Documents</option>
              <option value="bank-details">Bank Details</option>
              <option value="loans">Loans</option>
              <option value="savings">Savings</option>
              <option value="app-system">App and System</option>
            </select>
          </div>
          <ul className="user-tabs-desktop">
            <li className="user-tabs-active">General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </div>
      </div>
      <div className="general-details">
        <div className="personal-info">
          <h3>Personal Information</h3>
          <div className="personal-info-details">
            <div>
              <span>FULL NAME</span>
              <p>{`${userData?.profile.firstName}  ${userData?.profile.lastName}`
              }</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>{userData?.profile.phoneNumber}</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>{userData?.email}</p>
            </div>
            <div>
              <span>BVN</span>
              <p>{userData?.profile.bvn}</p>
            </div>
            <div>
              <span>GENDER</span>
              <p>{userData?.profile.gender}</p>
            </div>
            <div>
              <span>MARITAL STATUS</span>
              <p>Single</p>
            </div>
            <div>
              <span>CHILDREN</span>
              <p>None</p>
            </div>
            <div>
              <span>TYPE OF RESIDENCE</span>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </div>
        <div className="education-info">
          <h3>Education and Employment</h3>
          <div className="education-info-details">
            <div>
              <span>LEVEL OF EDUCATION</span>
              <p>{userData?.education.level}</p>
            </div>
            <div>
              <span>EMPLOYMENT STATUS</span>
              <p>{userData?.education.employmentStatus}</p>
            </div>
            <div>
              <span>SECTOR OF EMPLOYMENT</span>
              <p>{userData?.education.sector}</p>
            </div>
            <div>
              <span>DURATION OF EMPLOYMENT</span>
              <p>{userData?.education.duration}</p>
            </div>
            <div>
              <span>OFFICE EMAIL</span>
              <p>{userData?.education.officeEmail}</p>
            </div>
            <div>
              <span>MONTHLY INCOME</span>
              <p>{`₦ ${userData?.education.monthlyIncome[1]} - ₦ ${userData?.education.monthlyIncome[0]}`}</p>
            </div>
            <div>
              <span>LOAN REPAYMENT</span>
              <p>{userData?.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="socials-info">
          <h3>Socials</h3>
          <div className="socials-info-details">
            <div>
              <span>TWITTER</span>
              <p>{userData?.socials.twitter}</p>
            </div>
            <div>
              <span>FACEBOOK</span>
              <p>{userData?.socials.facebook}</p>
            </div>
            <div>
              <span>INSTAGRM</span>
              <p>{userData?.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className="guarantor-info">
          <h3>Guarantor</h3>
          <div className="guarantor-info-details">
            <div>
              <span>FULL NAME</span>
              <p>{`${userData?.guarantor.firstName}  ${userData?.guarantor.lastName}`
              }</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>{userData?.guarantor.phoneNumber}</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>debby@gmail.com</p>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <p>Sister</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}