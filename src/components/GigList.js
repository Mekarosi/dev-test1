import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './TopBar';

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
          <a href='/new'>New gig {''} +</a>
        </span>
      </div>

      <div className='gigNav'>
        <a href='#' className='gigButtonA'>
          All gigs
          <span className='badge'>3408</span>
        </a>
        <a href='#' className='gigButtonB'>
          my gigs
          <span className='badge' style={{ alignText: 'center' }}>
            1200
          </span>
        </a>
        <a href='#' className='gigButtonC'>
          Rejected gigs
          <span className='badge'>100</span>
        </a>
      </div>

      <div className='.container-fluid'>
        <div className='row'>
          <div
            className='col-sm'
            style={{ marginBottom: '30px', display: 'inline-flex' }}
          >
            <div className='midButton'>
              <span>Freelance</span>
            </div>

            <span
              className='btn dropdown-toggle'
              style={{
                border: '1px solid gainsboro',
                marginRight: '50px',
                color: 'rgb(210, 208, 215)',
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
          <div className='col-sm'>
            <span
              className='btn dropdown-toggle'
              style={{
                border: '1px solid gainsboro',
                marginRight: '50px',
                color: 'rgb(210, 208, 215)',
                fontSize: '12px',
                padding: '2px',
                width: '150px',
              }}
              type='button'
              data-toggle='dropdown'
            >
              Location
            </span>

            <span className='midBadgeC'>Remote friendly</span>
          </div>
          <div className>
            <span className='midBadge'>Design</span>
            <span className='midBadge'>Contact</span>
          </div>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Role</th>
            <th scope='col'>Company</th>
            <th scope='col'>Date</th>
            <th scope='col'>Salary</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type='checkbox' className='check' />
            </td>
            <td>Product Designer</td>
            <td>TM30</td>
            <td>20th June 2020</td>
            <td>20,000-30,000</td>
            <td>
              <button className='deleteB'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' className='check' />
            </td>
            <td>Product Designer</td>
            <td>TM30</td>
            <td>20th June 2020</td>
            <td>20,000-30,000</td>
            <td>
              <button className='deleteB'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' className='check' />
            </td>
            <td>Product Designer</td>
            <td>TM30</td>
            <td>20th June 2020</td>
            <td>20,000-30,000</td>
            <td>
              <button className='deleteB'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' className='check' />
            </td>
            <td>Product Designer</td>
            <td>TM30</td>
            <td>20th June 2020</td>
            <td>20,000-30,000</td>
            <td>
              <button className='deleteB'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' className='check' />
            </td>
            <td>Product Designer</td>
            <td>TM30</td>
            <td>20th June 2020</td>
            <td>20,000-30,000</td>
            <td>
              <button className='deleteB'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    //   </div>
    // </div>
  );
};

export default GigList;
