import React from 'react';

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
          {this.props.session.currentUser.f_name}
        </div>
        <a id='home-link' href='/'>Home</a>
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
