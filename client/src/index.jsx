import React from 'react';
import Nav from './components/Nav.jsx'
import Newblog from './components/Newblog.jsx'
import Postes from './components/Postes.jsx'
import ReactDOM from 'react-dom';
import axios from 'axios'
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       view:'home',
       data:[]
     }
   }
   componentWillMount() {
 axios.get('/blogs')
 .then((res)=>{
this.setState({data:res.data})
 }).catch((err)=>{console.log(err)})
   }
   navclick(e) {
     console.log(e)
     this.setState({view:e})
   }
   delete(id) {
 console.log(id)
   }
  //  className="card-container"className="container"
  render() {
    return (
      <div >
       <div >
       <Nav click={this.navclick.bind(this)} />
        
        {this.state.view === 'New Blog' ? <Newblog/> : console.log(false) }
        {this.state.view === 'Postes'? this.state.data.map((elem,key)=>{return <Postes data={elem} key={key} delete={this.delete.bind(this)}/>}) : console.log(false) }
       </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));