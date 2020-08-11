import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBell,
  faEnvelope,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSearch, faBell, faEnvelope, faCog);

const TopBar = () => {
  return (
    <div className='topBar'>
      <div
        className='navbar navbar-light'
        style={{
          borderBottom: '1px solid gainsboro',
          // width: '100%',
          paddingBottom: '40px',
        }}
      >
        <form className='form-inline'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            style={{
              backgroundColor: ' rgb(251, 251, 255)',
              border: '1px solid gainsboro',
            }}
          />
        </form>
        <div className='inline'></div>

        <div>
          <span>{<FontAwesomeIcon className='icon' icon={faBell} />}</span>
          <span>{<FontAwesomeIcon className='icon' icon={faEnvelope} />}</span>
          <span>{<FontAwesomeIcon className='icon' icon={faCog} />}</span>
          <span>{<FontAwesomeIcon className='icon' icon={faBell} />}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
