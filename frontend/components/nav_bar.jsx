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
        <div id='prof-link'>
          <Link to={this.props.session.currentUser.profile_url}>
            {this.props.session.currentUser.f_name}
          </Link>
        </div>
        <a id='home-link' href='/'>Home</a>
        <a href='/'> <img src={window.facespaceAssets.friends} /></a>
        <a href='/'> <img src={window.facespaceAssets.notifications} /></a>
        <div className='log-out-container'>
          <i className="fa fa-caret-down"
             onClick={this.props.logout}
             aria-hidden="true"></i>
        </div>

      </section>
    );
  }
}



export default NavBar;
