import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='navbar'>
        <div className='leftside'>
          <a href='/'> <img src={window.facespaceAssets.logo} /></a>
          <input id='search'
                 placeholder='Search facespace' />
        </div>
        <div className="rightside">
          <ul id='icons'>
            <li>
              <Link id='prof-link'to={this.props.session.currentUser.profile_url}>
                {this.props.session.currentUser.f_name}
              </Link>
            </li>
            <li><a id='home-link' href='/'>Home</a></li>
            <li><a href='/'> <img src={window.facespaceAssets.friends} /></a></li>
            <li><a href='/'> <img src={window.facespaceAssets.notifications} /></a></li>
          </ul>
          <div className='log-out-container'>
            <i className="fa fa-caret-down"
              onClick={this.props.logout}
              aria-hidden="true"></i>
          </div>
        </div>

      </section>
    );
  }
}



export default NavBar;
