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
//it just when a user click on update it take him to this form to update his blog 
  render() {
    return (
    <div>
   <div className="form-container">
      <div className="form-box">
        <input onChange={this.change.bind(this)} type="text" name="title"placeholder={this.props.data.title} className=' input' />
        <input onChange={this.change.bind(this)}  type="text" name="img" className=' input' placeholder='url of img'/>
        <select value={this.state.value} name="category" onChange={this.change.bind(this)} className='input'>
            <option name="cat1" value="music">music</option>
            <option name="cat2" value="food">food</option>
            <option name="cat3" value="travling">travling</option>
            <option name="cat4" value="Programing">Programing</option>
          </select>
        <textarea onChange={this.change.bind(this)}  type="text" name="blog" placeholder={this.props.data.blog} className='textarea input'></textarea>
        <button className="btn-form" onClick={this.click.bind(this)}>update it</button>
    </div>
   </div>
    </div>
    );
  }
}
export default Update;