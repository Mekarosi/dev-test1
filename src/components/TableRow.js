import React from 'react';

const TableRow = () => {
  return (
    <div>
      <div className='table-setting'>
        <span>
          <input
            type='checkbox'
            className='check'
            style={{ marginRight: '20px', marginLeft: '14px' }}
          />
        </span>
        <span style={{ marginRight: '60px', marginLeft: '20px' }}>
          Product Designer
        </span>
        <span style={{ marginRight: '20px', marginLeft: '30px' }}>TM30</span>
        <span style={{ marginRight: '40px', marginLeft: '65px' }}>
          20th June 2020
        </span>
        <span style={{ marginRight: '40px', marginLeft: '65px' }}>
          20,000-30,000
        </span>
        <span style={{ marginRight: '50px', marginLeft: '10px' }}>
          <button className='deleteB'>Delete</button>
        </span>
      </div>
    </div>
  );
};

export default TableRow;
