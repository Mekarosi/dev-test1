import React, { Component } from 'react';
import TopBar from './TopBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCircleNotch);

class NewGig extends Component {
  render() {
    return (
      <div className='content'>
        <TopBar />
        <div style={{ display: 'inlineFlex', paddingBottom: '20px' }}>
          <strong>
            <h2 style={{ color: 'rgb(85,80,100)' }}>Gigs</h2>
          </strong>
        </div>

        <div>
          <h6>New gig</h6>
        </div>

        <div className='box d-flex'>
          <div className='mr-4 pr-4'>
            <p onClick={this.handleClick}>Basic data</p>

            <p onClick={this.handleClick}>
              <FontAwesomeIcon
                icon={faCircleNotch}
                style={{ fontSize: '8px', marginRight: '10px' }}
              />
              Renumeration
            </p>
          </div>

          <div className='secondbox'>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Role</Form.Label>
                  <Form.Control type='text' value='Product Designer' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>Company</Form.Label>
                  <Form.Control type='text' value='TM30' />
                </Form.Group>
              </Form.Row>
              <Form.Label>Location</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control as='select'>
                    <option>Country</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Control as='select' defaultValue='Choose...'>
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId='formGridAddress1'>
                <Form.Control placeholder='Address' />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridState'>
                  <Form.Label>Add tags</Form.Label>
                  <Form.Control type='text' placeholder='Add more tags' />
                </Form.Group>
              </Form.Row>

              <p>
                Suggested tags:{' '}
                <a href='#' className='tags'>
                  full time
                </a>
                {''}
                <a href='#' className='tags'>
                  Contract
                </a>
                <a href='#' className='tags'>
                  freelance'
                </a>
              </p>

              <div
                className='d-flex'
                style={{ marginTop: '20px', float: 'right' }}
              >
                <p>
                  <a href='/' className='cancel'>
                    Cancel
                  </a>
                </p>
                <Button
                  variant='primary'
                  type='submit'
                  style={{
                    marginLeft: '20px',
                    marginBottom: '10px',
                    backgroundColor: 'rgb(47,65,126)',
                  }}
                >
                  <a href='/salary' style={{ color: 'white' }}>
                    Continue
                  </a>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default NewGig;
