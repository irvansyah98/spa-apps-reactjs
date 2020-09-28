import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import foto from './FOTO.jpg';

class TentangSaya extends Component{
    render(){
        return(
            <div style={{ width:'100%', margin:'auto' }}>
                <Grid className="beranda-grid">
                    <Cell col={4} style={{ marginTop: '100px' }}>
                        <img src={foto} alt="gambar" className="avatar-img-tentangsaya"/>
                    </Cell>
                    <Cell col={7} style={{ marginTop: '80px' }}>
                        <div className="banner-text-tentangsaya">
                            <h1>Hi ~ I'm Iervan Firdiansyah</h1>
                            <hr/>
                            <p style={{ color:'white', padding:'30px',fontSize:'20px' }}>
                                My name is Iervan Firdiansyah. I graduated for the Electronics Engineering Politechnic Institute of Surabaya, majoring in Informatics Engineering. Besides that, I also work as a Freelance Web & Android Developer. I'm good at programming, work well with people, good collaborate with team, and discipline in doing the task.
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default TentangSaya;