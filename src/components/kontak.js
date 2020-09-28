import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Kontak extends Component{
    render(){
        return(
            <div style={{ width:'100%', margin:'auto' }}>
                <Grid className="beranda-grid-kontak">
                    <Cell col={12}>
                        <div className="banner-text-kontak">
                            <Cell col={12}>
                                <h2>Hubungi Saya</h2>
                                <hr/>
                                <h3><i className="fa fa-phone"></i> 0895337348558</h3>
                                <h3><i className="fa fa-envelope"></i> iervanfirdiansyah1998@gmail.com</h3>
                                <h3><i className="fa fa-earth"></i> https://irvansyah.id</h3>
                                <br/>
                                <iframe style={{ width:'100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0165673872016!2d112.6241912143497!3d-7.238948594774384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fe2f217b1333%3A0x15a6df140301f266!2sPd.%20Benowo%20Indah%2C%20Babat%20Jerawat%2C%20Kec.%20Pakal%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1601303702470!5m2!1sid!2sid" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </Cell>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Kontak;