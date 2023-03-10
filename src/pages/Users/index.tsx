import React, { useEffect, useState } from "react";
import "./index.scss";
import { instance, User } from "../../utils";
import dayjs from "dayjs";

import UsersIcon from "../../assets/dashboard-icons/icon-a.svg";
import ActiveUsersIcon from "../../assets/dashboard-icons/icon-b.svg";
import UserswithLoansIcon from "../../assets/dashboard-icons/icon-c.svg";
import UserswithSavingsIcon from "../../assets/dashboard-icons/icon-d.svg";
import VectorIcon from "../../assets/table-icons/vector.svg";
import ViewDetails from "../../assets/hamburger-icons/view-details.svg";
import BlacklistUser from "../../assets/hamburger-icons/blaclist-user.svg";
import ActivateUser from "../../assets/hamburger-icons/activate-user.svg";
import Loader from "../../assets/loader.svg";
import CaretIcon from "../../assets/caret.svg";
import Caret from "../../assets/arrowdown.svg";
import { useNavigate } from "react-router-dom";
import UsersTableFilter from "../../components/UsersTableFilter";

export default function Users() {
  const [usersData, setUsersData] = useState<Array<User>>([]);
  const [filtered, setFiltered] = useState<Array<User>>([]);
  const [pages, setPages] = useState<Array<number>>([1, 2, 3, 4, 5]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const getStatusClass = (itemId: number) => {
    if (itemId % 3 === 0) {
      return "blacklisted";
    } else if (itemId % 5 === 0) {
      return "inactive";
    } else if (itemId % 7 === 0) {
      return "pending";
    } else {
      return "active";
    }
  };
  async function getUsersData() {
    setLoader(true);
    try {
      const res = await instance.get("users");
      setLoader(false);
      const mappedData = (res.data as Array<User>).map((item) => {
        return {
          ...item,
          status: getStatusClass(item.id),
        };
      });
      localStorage.setItem("userData", JSON.stringify(mappedData));
      setUsersData(mappedData);
      setFiltered(mappedData.slice(0, pageSize));
      setPages(
        Array.from(
          Array(Math.round(mappedData.length / pageSize)),
          (_, i) => i + 1
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageSize = (size: number) => {
    setPageSize(size);
    setFiltered(usersData.slice(0, size));
    setPages(
      Array.from(Array(Math.round(usersData.length / size)), (_, i) => i + 1)
    );
  };

  const setPage = (page: number) => {
    if (page < 1 || page > Math.round(usersData.length / pageSize)) {
      return;
    }
    setCurrentPage(page);
    const start = pageSize * (page - 1);
    const end = pageSize * (page - 1) + pageSize;
    setFiltered(usersData.slice(start, end));
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const formatDate = (date: Date) => {
    return dayjs(date).format("MMM DD, YYYY hh: mm A");
  };

  return (
    <div className='users'>
      <h1 className='users-header'>Users</h1>
      <div className='users-content'>
        <div className='users-card'>
          <img src={UsersIcon} alt='Users Icon' />
          <p>USERS</p>
          <span>2,453</span>
        </div>
        <div className='users-card'>
          <img src={ActiveUsersIcon} alt='Active Users Icon' />
          <p>ACTIVE USERS</p>
          <span>2,453</span>
        </div>
        <div className='users-card'>
          <img src={UserswithLoansIcon} alt='Users with Loans Icon' />
          <p>USERS WITH LOAN</p>
          <span>12,453</span>
        </div>
        <div className='users-card'>
          <img src={UserswithSavingsIcon} alt='Users with Savings Icon' />
          <p>USERS WITH SAVINGS</p>
          <span>102,453</span>
        </div>
      </div>
      {loader ? (
        <div className='loader-img'>
          <img src={Loader} alt='Loader Icon' />
        </div>
      ) : (
        <div className='users-table'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <div>
                    <p>ORGANIZATION</p>
                    <UsersTableFilter />
                  </div>
                </th>
                <th>
                  <div>
                    <p>USERNAME</p>
                    <UsersTableFilter />
                  </div>
                </th>
                <th>
                  <div>
                    <p>EMAIL</p>
                    <UsersTableFilter />
                  </div>
                </th>
                <th>
                  <div>
                    <p>PHONE NUMBER</p>
                    <UsersTableFilter />
                  </div>
                </th>
                <th>
                  <div>
                    <p>DATE JOINED</p>
                    <UsersTableFilter />
                  </div>
                </th>
                <th>
                  <div>
                    <p>STATUS</p>
                    <UsersTableFilter />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>
                      <span className={user.status}>{user.status}</span>
                    </td>
                    <td>
                      <button className='hamburger'>
                        <img src={VectorIcon} alt='More Options' />
                        <div className='hamburger-items'>
                          <span
                            onClick={() =>
                              navigate(`/dashboard/users/${user.id}`)
                            }
                            className='hamburger-item '
                          >
                            <img src={ViewDetails} alt='View Details' /> View
                            Details
                          </span>
                          <span className='hamburger-item'>
                            <img src={BlacklistUser} alt='Blacklist User' />{" "}
                            Blacklist User
                          </span>
                          <span className='hamburger-item'>
                            <img src={ActivateUser} alt='Activate User' />{" "}
                            Activate User
                          </span>
                        </div>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className='pagination'>
        <div className='pagination-selection'>
          <span>Showing</span>
          <select
            onChange={(e) => handlePageSize(+e.target.value)}
            name='page'
            id='page'
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
          <span>out of {usersData.length}</span>
        </div>
        <div className='pagination-pages'>
          <button onClick={() => setPage(currentPage - 1)}>
            <img src={Caret} alt='Caret Icon' />
          </button>
          {pages.map((page) => {
            return (
              <button
                key={page}
                style={{
                  opacity: currentPage === page ? 1 : 0.6,
                  fontWeight: currentPage === page ? 500 : 400,
                }}
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button onClick={() => setPage(currentPage + 1)}>
            <img src={Caret} alt='Caret Icon' />
          </button>
        </div>
      </div>
    </div>
  );
}
