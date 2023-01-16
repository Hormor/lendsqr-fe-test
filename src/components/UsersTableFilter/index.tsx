import React from "react";
import "./index.scss";
import FilterIcon from "../../assets/table-icons/filter.svg";

export default function UsersTableFilter() {
  return (
    <div className='users-table-button'>
      <img src={FilterIcon} alt='Filter Icon' />
      <div className='users-table-filter'>
        <form>
          <div>
            <label htmlFor='organization'>Organization</label>
            <select name='organization' id='organization'>
              <option value='select'>Select</option>
            </select>
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='User'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' id='date' />
          </div>
          <div>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Phone Number'
            />
          </div>
          <div>
            <label htmlFor='status'>Status</label>
            <select name='status' id='status'>
              <option value='status'>Status</option>
            </select>
          </div>
          <div className='buttons'>
            <button type='reset' className='reset'>
              Reset
            </button>
            <button type='submit' className='filter'>
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
