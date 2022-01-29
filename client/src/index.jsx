import React from 'react';
import Nav from './components/Nav.jsx'
import Newblog from './components/Newblog.jsx'
import Postes from './components/Postes.jsx'
import ReactDOM from 'react-dom';
import axios from 'axios'
import Update from './components/Update.jsx'
import Home from './components/Home.jsx'
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       view:'home',
       data:[],
       dataobj:{}
     }
   }
   componentDidUpdate() {
    axios.get('/api/blogs')
    .then((res)=>{
    this.setState({data:res.data})
    }).catch((err)=>{console.log(err)})
   }
   navclick(e,d) {
     console.log(d)
     this.setState({view:e,dataobj:d})
   }
   //getting the id from the postes and then passe it in delete request then it well git us the data again do he can see it alreday deleted
   delete(i) {
    axios.delete('/api/delete/poste',{ data: { id: i } })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})

    axios.get('/api/blogs')
    .then((res)=>{
    this.setState({data:res.data})
    }).catch((err)=>{console.log(err)})
  }
  //  className="card-container"className="container"
  //in the compoenetdidmount we get the data from the databsae passe it to the postes 

  render() {
    return (
      <div >
       <div >
       <Nav click={this.navclick.bind(this)} />
       {this.state.view === 'home' ? <Home/> : console.log(false) }
        {this.state.view === 'New Blog' ? <Newblog/> : console.log(false) }
        {this.state.view === 'Postes'? this.state.data.map((elem,key)=>{return <Postes data={elem} key={key} delete={this.delete.bind(this)} update={this.navclick.bind(this)}/>}) : console.log(false) }
        {this.state.view === 'update' ? <Update data={this.state.dataobj} change={this.navclick.bind(this)}/> : console.log(false)}
       </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));