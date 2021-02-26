import React, { Component } from 'react';
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Main from './components/main'
import Footer from './components/Footer/Footer'

import store from './store'

class Page extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = {  }
        
    }
    render() { 
        return ( 
            <>
                <Banner></Banner>
                <Nav></Nav>
                <Main></Main>
                <Footer></Footer>
            </>
         );
    }
}
 
export default Page;