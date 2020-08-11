import React, { Component } from 'react';
import TopBar from './TopBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class GigSalary extends Component {
  render() {
    return (
      <div className='content'>
        <TopBar />
        <div style={{ display: 'inline-flex', paddingBottom: '20px' }}>
          <strong>
            <h2 style={{ color: '#555064' }}>Gigs</h2>
          </strong>
        </div>
        <div className='box d-flex'>
          <div className='mr-4'>
            <p>Basic data</p>

            <p>Renumeration</p>
          </div>

          <div className='secondboxB'>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Role</Form.Label>
                  <Form.Control type='email' value='Product Designer' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>Company</Form.Label>
                  <Form.Control type='text' value='TM30' />
                </Form.Group>
              </Form.Row>
              <div className='d-flex'>
                <a href='/new'>Back</a>

                <Button
                  variant='primary'
                  type='submit'
                  style={{
                    marginLeft: '20px',
                    backgroundColor: 'rgb(47,65,126)',
                  }}
                >
                  <a
                    style={{
                      color: 'white',
                    }}
                    href='/'
                  >
                    Add gig
                  </a>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      //     </div>
      //   </div>
    );
  }
}
export default GigSalary;
