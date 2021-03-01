import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from '../../store'
import Index from '../Index/Index'
import Sublist from '../Sublist/Sublist'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() {
        return (
            <>
                <Router>
                    <div className='nav'>
                        <a href="http://www.china.com.cn/">中国网首页</a>
                        <a href="http://news.china.com.cn/"
                        target='_blank' rel="noopener noreferrer">新闻中心首页</a>
                        <span className='router-element'><Link to='/'>首页</Link></span>
                        {
                            this.state.nav.columns.map((item,index)=>{
                                return (
                                    <span className='router-element' key={index}>
                                        <Link to={`/subpage/${item.id}`}>{item.text}</Link>
                                    </span>
                                )
                            })
                        }           
                    </div>
                    <Route path="/" exact component={Index} />
                    <Route path={`/subpage/:id`} component={Sublist} />
                </Router>
            </>
        );
    }
}

export default Nav;