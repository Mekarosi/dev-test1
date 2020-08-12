import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './TopBar';
import TableRow from './TableRow';

const GigList = () => {
  return (
    <div className='content'>
      <TopBar />
      <div
        style={{
          display: 'inline',
          marginBottom: '15px',
          marginTop: '70px',
          borderTop: '1px solid black',
        }}
      >
        <h2 style={{ color: '#555064' }}>Gigs</h2>

        <span
          className='NewButton'
          style={{
            float: 'right',
            marginBottom: '5px',
            marginTop: '-15px',
            color: 'white',
          }}
        >
          <Link to='/new'>New gig {''} + </Link>
        </span>
      </div>

      <div className='gigNav'>
        <div className='gigButtonA'>
          All gigs
          <span className='badge'>3408</span>
        </div>
        <div className='gigButtonB'>
          my gigs
          <span className='badge' style={{ alignText: 'center' }}>
            1200
          </span>
        </div>
        <div className='gigButtonC'>
          Rejected gigs
          <span className='badge'>100</span>
        </div>
      </div>

      <div className='.container-fluid'>
        <div className='row'>
          <div style={{ marginBottom: '30px', display: 'inline-flex' }}>
            <div className='midButton'>
              <span>Freelance</span>
            </div>

            <span
              className='btn dropdown-toggle'
              style={{
                border: '1px solid gainsboro',
                marginRight: '50px',
                color: 'rgb(169,176,197)',
                fontSize: '12px',
                padding: '2px',
                width: '150px',
              }}
              type='button'
              data-toggle='dropdown'
            >
              Keyword
            </span>
          </div>

          <span
            className='btn dropdown-toggle'
            style={{
              border: '1px solid gainsboro',
              marginRight: '50px',
              color: 'rgb(169,176,197)',
              fontSize: '12px',
              padding: '2px',
              width: '150px',
              height: '25px',
            }}
            type='button'
            data-toggle='dropdown'
          >
            Location
          </span>

          <span className='midBadgeC'>Remote friendly</span>

          <span className='midBadgeD'>Design</span>
          <span className='midBadgeE'>Contact</span>
        </div>
      </div>

      <div className='table-header'>
        <span style={{ marginLeft: '120px' }}>Role</span>
        <span style={{ marginLeft: '210px' }}>Company</span>
        <span style={{ marginLeft: '150px' }}>Date</span>
        <span style={{ marginLeft: '220px' }}>Salary($)</span>
      </div>

      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};
export default GigList;
