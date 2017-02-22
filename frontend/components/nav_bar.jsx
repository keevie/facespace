import React from 'react';
import { Link } from 'react-router';
import FriendRequestModal from './friend_request_modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    };
  }

  componentDidMount() {
    this.setState({rendered: true});
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
              <Link id='prof-link'
                to={this.props.session.currentUser.profile_url}>
                <img src={this.props.session.currentUser.profile_thumb} />
                {this.props.session.currentUser.f_name}
              </Link>
            </li>
            <li><a id='home-link' href='/'>Home</a></li>
            <li><a id='friends-nav-button' onClick={(e) =>{
                    e.preventDefault();
                    this.props.openModal('friend-requests');
                   }
                }>
               <img src={window.facespaceAssets.friends} />
            </a></li>
            <li><a> <img src={window.facespaceAssets.notifications} /></a></li>
          </ul>
          <div className='log-out-container'>
            <i className="fa fa-caret-down"
              onClick={this.props.logout}
              aria-hidden="true"></i>
          </div>
        </div>
        { this.state.rendered && <FriendRequestModal /> }

      </section>
    );
  }
}



export default NavBar;
