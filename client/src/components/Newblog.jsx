import React from 'react'
import axios from 'axios'
class Newblog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          title:'',
          img:'',
          blog:'',
          category:''
        }
    }
change(e){
this.setState({[e.target.name]: e.target.value})
}
click(){
  console.log(this.state)
  axios.post("/api/create/blog",this.state)
  .catch((err) => console.log(err))

}
//this newblog component will alow thie user to pick category and type his info about the blog 
//the inputs is going to take value of each input save it in state and send as a post request in the click function  
  render() {
    return (
   <div className="form-container ">
      <div className="form-box ">
        <input onChange={this.change.bind(this)} type="text" name="title"placeholder="title" className='input' />
        <input onChange={this.change.bind(this)}  type="text" name="img" className=' input' placeholder='url of img'/>
        <select value={this.state.value} name="category" onChange={this.change.bind(this)} className='input'>
            <option name="cat1" value="music">music</option>
            <option name="cat2" value="food">food</option>
            <option name="cat3" value="travling">travling</option>
            <option name="cat4" value="Programing">Programing</option>
          </select>
        <textarea onChange={this.change.bind(this)}  type="text" name="blog" placeholder="tell us your story..." className='textarea input'></textarea>
        <button className=" input" onClick={this.click.bind(this)}>Blog it</button>
    </div>
   </div>
    );
  }
}
export default Newblog;