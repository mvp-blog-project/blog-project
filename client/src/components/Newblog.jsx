import React from 'react'

class Newblog extends React.Component {
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
  console.log(this.state)
}
  render() {
    return (
    <div className="form">
        <input onChange={this.change.bind(this)} type="text" name="title"placeholder="title" className='title input' />
        <input onChange={this.change.bind(this)}  type="file" name="img" className='file input'/>
        <textarea onChange={this.change.bind(this)}  type="text" name="blog" placeholder="tell us your story..." className='textarea input'></textarea>
        <button className="btn-form" onClick={this.click.bind(this)}>Blog it</button>
    </div>
    );
  }
}
export default Newblog;