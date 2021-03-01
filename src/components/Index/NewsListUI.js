import React, { Component } from 'react';
class NewsListUI extends Component {
    constructor(props) {
        super(props);
        this.temp=JSON.parse(JSON.stringify(props))
        for(let i=0;i<this.temp.thisData.art_list.length;i++){
            this.temp.thisData.art_list[i].isActive=false
        }
        this.count=8
        this.cur=0
        this.state = this.temp
        this.addMore=this.addMore.bind(this)
    }
    render() { 
        const props = this.state.thisData
        return ( 
            <div className="news-list">
            <div className="title_1">{props.column_name}</div>
            <ul>
                {
                    props.art_list.map((item,index)=>{
                        if(item.article_pic!==''&& item.article_introTitle!=="大图" && item.isActive){
                            return (
                                <li className="item-normal" key={index}>
                                <a 
                                href={item.article_url} 
                                target='_blank' rel="noopener noreferrer"
                                >
                                    <img src={item.article_pic} alt=""/>
                                    <div className="item-text">
                                        <div className="item-title">
                                            {item.article_title}
                                        </div>
                                        <div className="item-info">
                                            <div className="item-source">
                                                {item.article_source}
                                            </div>
                                            <div className="item-pubdate">
                                                {item.article_pubTime}
                                            </div>
                                        </div>
                                        {
                                            (item.article_introTitle==="大图" ||item.article_introTitle==="原创") &&
                                            <div className="marker">
                                                {item.article_introTitle}
                                            </div>
                                        }
                                    </div>
                                </a>
                                </li>
                            )
                        }
                        if(item.article_introTitle==="大图" && item.isActive){
                            return (
                                <li className="item-bigpic" key={index}>
                                <a 
                                href={item.article_url} 
                                target='_blank' rel="noopener noreferrer"
                                >
                                    <div className="item-title">
                                        {item.article_title}
                                    </div>
                                    <img src={item.article_pic} alt=""/>
                                    <div className="item-text">
                                        <div className="item-info">
                                            <div className="item-source">
                                                {item.article_source}
                                            </div>
                                            <div className="item-pubdate">
                                                {item.article_pubTime}
                                            </div>
                                        </div>
                                        {
                                            (item.article_introTitle==="大图" ||item.article_introTitle==="原创") &&
                                            <div className="marker">
                                                {item.article_introTitle}
                                            </div>
                                        }
                                    </div>
                                </a>
                                </li>
                            )
                        }
                        else if( item.isActive){
                            return (
                            <li className="item-nopic" key={index}>
                                <div className="item-text">
                                <a 
                                href={item.article_url} 
                                target='_blank' rel="noopener noreferrer"
                                >                                    
                                    <div className="item-title">
                                        {item.article_title}
                                    </div>
                                    <div className="item-info">
                                        <div className="item-source">
                                            {item.article_source}
                                        </div>
                                        <div className="item-pubdate">
                                            {item.article_pubTime}
                                        </div>
                                    </div>
                                    {
                                        (item.article_introTitle==="大图" ||item.article_introTitle==="原创") &&
                                        <div className="marker">
                                            {item.article_introTitle}
                                        </div>
                                    }
                                </a>
                                </div>
                            </li>
                        )}
                    })
                }
            </ul>
            {
                !props.art_list[props.art_list.length-1].isActive &&
                <div className="more-btn" onClick={this.addMore}>更 多 </div>
            }
        </div>
        );
    }
    componentDidMount(){
        this.addMore()
    }
    addMore(){
        this.cur+=1
        for(let i=0;i<this.temp.thisData.art_list.length;i++){
            if(i<this.count*this.cur){
                this.temp.thisData.art_list[i].isActive=true
            }
        }
        this.setState(this.temp)
    }
}

export default NewsListUI;