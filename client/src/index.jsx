import React from 'react';
import Nav from './components/Nav.jsx'
import Newblog from './components/Newblog.jsx'
import Postes from './components/Postes.jsx'
import ReactDOM from 'react-dom';
import axios from 'axios'
import Update from './components/Update.jsx'
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       view:'home',
       data:[],
       dataobj:{}
     }
   }
   componentWillMount() {
    axios.get('/api/blogs')
    .then((res)=>{
    this.setState({data:res.data})
    }).catch((err)=>{console.log(err)})
   }
   navclick(e,d) {
     console.log(d)
     this.setState({view:e,dataobj:d})
   }
   delete(i) {
    axios.delete('/api/delete/poste',{ data: { id: i } })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
   }
  //  className="card-container"className="container"
  render() {
    return (
      <div >
       <div >
       <Nav click={this.navclick.bind(this)} />
        {this.state.view === 'New Blog' ? <Newblog/> : console.log(false) }
        {this.state.view === 'Postes'? this.state.data.map((elem,key)=>{return <Postes data={elem} key={key} delete={this.delete.bind(this)} update={this.navclick.bind(this)}/>}) : console.log(false) }
        {this.state.view === 'update' ? <Update data={this.state.dataobj} change={this.navclick.bind(this)}/> : console.log(false)}
       </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));