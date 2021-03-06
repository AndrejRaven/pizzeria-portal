import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <Link to='/'>
                <div className={styles.logo}>
                  <span className={styles.name}>Travel Agency</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>

              </nav>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;