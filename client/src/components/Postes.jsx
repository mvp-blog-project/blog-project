import React from 'react';


 class Postes extends React.Component {
     constructor(props) {
         super(props);
     }
    //just simple rendring aand pasing the the id so we can delete and passing the user information
  render() {
    return (
       <div className="blog-container">
        <div className="blog-container">
         <div className="blog-box">
         <img src={this.props.data.img}></img>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.blog}</p>
          <p>{this.props.data.category}</p>
          <button className="post-del-btn" onClick={()=>{this.props.delete(this.props.data._id)}}>Delete</button>
          <button onClick={()=>{this.props.update('update',this.props.data)}}>update</button>
          
         </div>
        </div>
       </div>
        );
  }
}
export default Postes;