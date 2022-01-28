import React from 'react';
import axios from 'axios'
 class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          title:'',
          img:'',
          blog:''
        }
    }
    change(e){
        this.setState({[e.target.name]: e.target.value})
}
    click(){
    
    axios.put("/api/update/poste",{data:this.state,id:this.props.data._id})
    .then((res)=>{
        console.log(res.data)
        this.props.change(res.data)
    })
    .catch((err) => console.log(err))

}
  render() {
    return (
    <div>
<div className="container ">
    {console.log(this.props.data)}
      <div className="card-container form">
        <input onChange={this.change.bind(this)} type="text" name="title"placeholder={this.props.data.title} className='title input' />
        <input onChange={this.change.bind(this)}  type="file" name="img" className='file input'/>
        <textarea onChange={this.change.bind(this)}  type="text" name="blog" placeholder={this.props.data.blog} className='textarea input'></textarea>
        <button className="btn-form" onClick={this.click.bind(this)}>Blog it</button>
    </div>
   </div>
    </div>
    );
  }
}
export default Update;