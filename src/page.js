import React, { Component } from 'react';
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Index from './components/Index/Index'
import Footer from './components/Footer/Footer'

import store from './store'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        
    }
    render() { 
        return ( 
            <>
                <Banner></Banner>
                {
                    this.state.nav &&
                    <Nav></Nav>
                }
                {
                    this.state.nav===undefined &&
                    <Index></Index>
                }
                <Footer></Footer>
            </>
         );
    }
}
 
export default Page;