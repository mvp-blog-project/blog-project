import React from 'react';
import Nav from './components/Nav.jsx'
import Newblog from './components/Newblog.jsx'
import Postes from './components/Postes.jsx'
import ReactDOM from 'react-dom';
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       view:'home'
     }
   }
   navclick(e) {
     console.log(e)
     this.setState({view:e})
   }
  render() {
    return (
      <div>
        <Nav click={this.navclick.bind(this)} />
        {this.state.view === 'New Blog' ? <Newblog/> : console.log(false) }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));