import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className="top"><img src="./assets/img/bg_5.png" alt="" /></div>
                <div className="banner">全民行动抗击新冠肺炎疫情</div>
            </>
        );
    }
}
 
export default Banner;