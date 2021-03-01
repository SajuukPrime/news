import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className="footer">
                    版权所有 中国互联网新闻中心<span></span>电子邮件: news@china.org.cn 电话: 86-10-88828000<span></span>京ICP证 040089号 网络传播视听节目许可证号:0105123
                </div>
            </>
         );
    }
}
 
export default Footer;