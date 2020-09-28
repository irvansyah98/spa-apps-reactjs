import React, {Component} from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div>
        <hr/>
          <Link to="/beranda">Beranda</Link>  | 
          <Link to="/tentangsaya">Tentang Saya</Link> | 
          <Link to="/karya">Karya</Link>  | 
          <Link to="/kontak">Kontak</Link>  | 
        <hr/>
        <p><Utama/></p>
      </div>
    );
  }
}

export default App;
