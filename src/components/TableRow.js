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
        <span style={{ marginRight: '60px', marginLeft: '37px' }}>
          Product Designer
        </span>
        <span style={{ marginRight: '60px', marginLeft: '105px' }}>TM30</span>
        <span style={{ marginRight: '60px', marginLeft: '85px' }}>
          20th June 2020
        </span>
        <span style={{ marginRight: '60px', marginLeft: '85px' }}>
          20,000-30,000
        </span>
        <span style={{ marginRight: '60px', marginLeft: '10px' }}>
          <button className='deleteB'>Delete</button>
        </span>
      </div>
    </div>
  );
};

export default TableRow;
