import React, { Component } from 'react';
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

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      yourColor: 'rgb(169,176,197)',
    };
  }
  handleClick = () => {
    this.setState({
      yourColorA: 'rgb(251,179,11)',
    });
    setTimeout(() => {
      this.setState({
        yourColorA: 'rgb(169,176,197)',
      });
    }, 1000);
  };

  myClick = () => {
    this.setState({
      yourColorB: 'rgb(251,179,11)',
    });
    setTimeout(() => {
      this.setState({
        yourColorB: 'rgb(169,176,197)',
      });
    }, 1000);
  };

  whenClick = () => {
    this.setState({
      yourColorC: 'rgb(251,179,11)',
    });
    setTimeout(() => {
      this.setState({
        yourColorC: 'rgb(169,176,197)',
      });
    }, 1000);
  };
  ifClick = () => {
    this.setState({
      yourColorD: 'rgb(251,179,11)',
    });
    setTimeout(() => {
      this.setState({
        yourColorD: 'rgb(169,176,197)',
      });
    }, 1000);
  };

  render() {
    return (
      <div className='sidebar'>
        <a className='active' href='#'>
          <FontAwesomeIcon icon={faUniversity} />
          <strong
            className='px-1'
            style={{ fontSize: '25px', color: 'rgb(169,176,197)' }}
          >
            test
          </strong>
        </a>

        <a
          href='#'
          onClick={this.handleClick}
          style={{ color: this.state.yourColorA }}
        >
          {' '}
          <FontAwesomeIcon icon={['fas', 'id-card-alt']} />
          <span className='px-3'>Dashboard</span>
        </a>

        <a
          href='#'
          onClick={this.myClick}
          style={{ color: this.state.yourColorB }}
        >
          <FontAwesomeIcon icon={faSuitcase} />
          <span className='px-3'>Gigs</span>
        </a>

        <a href='#'>
          <FontAwesomeIcon
            icon={faHome}
            onClick={this.whenClick}
            style={{ color: this.state.yourColorC }}
          />
          <span className='px-3'>Company</span>
        </a>

        <a href='#'>
          <FontAwesomeIcon
            icon={faUser}
            onClick={this.ifClick}
            style={{ color: this.state.yourColorD }}
          />
          <span className='px-3'>Account</span>
        </a>
      </div>
    );
  }
}

export default SideBar;
