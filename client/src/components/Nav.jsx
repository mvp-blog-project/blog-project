import React from 'react';

 class Nav extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
  render() {
    return (
    <div className="nav">
        <div className="navlist">
        <li className="items" onClick={()=>{this.props.click('home')}}>Home</li>
        <li className="items" onClick={()=>{this.props.click('About')}}>About</li>
        <li className="items" onClick={()=>{this.props.click('New Blog')}}>New Blog</li>
        </div>
    </div>
    );
  }
}
export default Nav;