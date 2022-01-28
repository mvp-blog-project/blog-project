import React from 'react';

 class Postes extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             view:'postes',
         }
     }
  render() {
    return (
        <div className="flex-unit">
         <div className="card">
         <img src={this.props.data.img}></img>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.blog}</p>
          <button className="post-up-btn" onClick={this.props.delete(this.)}>Delete</button>
         </div>
        </div>
        );
  }
}
export default Postes