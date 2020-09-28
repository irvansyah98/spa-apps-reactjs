import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import foto from './FOTO.jpg';

class Beranda extends Component{
    render(){
        return(
            <div style={{ width:'100%', margin:'auto' }}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src={foto} alt="gambar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Web Master</h1>
                            <hr/>
                            <p>HTML/CSS | PHP | MySQL | PostgreSQL | Bootstrap | React JS | JavaScipt | Laravel | Codeigniter | Yii2</p>

                            <div className="social-links">
                                <a href="https://www.facebook.com/iervan.fierzer/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/irvansyah98/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="https://www.linkedin.com/in/iervan-firdiansyah-3b0672115/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                <a href="https://github.com/irvansyah98" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Beranda;