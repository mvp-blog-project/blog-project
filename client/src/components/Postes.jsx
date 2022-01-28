import React from 'react';


 class Postes extends React.Component {
     constructor(props) {
         super(props);
        
     }
    
  render() {
    return (
        <div className="flex-unit">
         <div className="card">
         <img src={this.props.data.img}></img>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.blog}</p>
          <button className="post-del-btn" onClick={()=>{this.props.delete(this.props.data._id)}}>Delete</button>
          <button onClick={()=>{this.props.update('update',this.props.data)}}>update</button>
          
         </div>
        </div>
        );
  }
}
export default Postes;