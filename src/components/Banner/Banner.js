import React, { Component } from 'react';
import store from '../../store'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().banner
    }
    render() { 
        return (
            <>
                <div className="top"><img src="http://images.china.cn/images1/ch/2020newschina/src/assets/bg_5.png" alt="" /></div>
                <div className="banner" style={this.state.isMobileDevice?this.state.mobile:this.state.desktop}></div>
            </>
        );
    }
    componentDidMount(){
        this.setState({
            'isMobileDevice':navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
        })

    }
}
 
export default Banner;