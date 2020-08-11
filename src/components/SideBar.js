import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSuitcase,
  faIdCardAlt,
  faUser,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSuitcase, faIdCardAlt, faUser, faHome, faUniversity);

const SideBar = () => {
  return (
    <div className='sidebar'>
      <a className='active' href='#text'>
        <FontAwesomeIcon icon={faUniversity} />
        <strong
          className='px-1'
          style={{ fontSize: '25px', color: 'rgb(86,93,116)' }}
        >
          test
        </strong>
      </a>

      <a href='#news'>
        {' '}
        <FontAwesomeIcon
          icon={['fas', 'id-card-alt']}
          style={{ color: 'rgb(169,176,197)' }}
        />
        <span className='px-3'>Dashboard</span>
      </a>

      <a href='#' style={{ color: 'yellow' }}>
        <FontAwesomeIcon
          icon={faSuitcase}
          style={{ color: 'rgb(169,176,197)' }}
        />
        <span className='px-3'>Gigs</span>
      </a>

      <a href='#'>
        <FontAwesomeIcon icon={faHome} style={{ color: 'rgb(169,176,197)' }} />
        <span className='px-3'>Company</span>
      </a>

      <a href='#about'>
        <FontAwesomeIcon icon={faUser} style={{ color: 'rgb(169,176,197)' }} />
        <span className='px-3'>Account</span>
      </a>
    </div>
  );
};

export default SideBar;
