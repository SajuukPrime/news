import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import React, { Component } from 'react';
import api from '../../utils/api'
import store from '../../store'

//ui
import HeadlineUI from './HeadlineUI'
import SwiperUI from './SwiperUI'
import NewsListUI from './NewsListUI'
import RightPicUI from './RightPicUI'
import RightSwiperUI from './RightSwiperUI'
import RightTextUI from './RightTextUI'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().config.index;
    }
    render() { 
        return ( 
            <>
                {
                    this.state['headline'].art_list &&
                    <HeadlineUI thisData = {this.state['headline'].art_list[0]}></HeadlineUI>
                }
                <div className="wrapper">
                    <div className="list-left">
                        {
                            this.state['left-swiper'].art_list &&
                            <SwiperUI thisData = {this.state['left-swiper'].art_list}></SwiperUI>
                        }
                        {
                            this.state['left-list'].art_list &&
                            <NewsListUI thisData = {this.state['left-list']}></NewsListUI>
                        }
                    </div>
                    <div className="list-right">
                        {
                            this.state['right-list-pic'].art_list &&
                            <RightPicUI thisData = {this.state['right-list-pic']}></RightPicUI>
                        }
                        {
                            this.state['right-list-swiper'].art_list &&
                            <RightSwiperUI thisData = {this.state['right-list-swiper']}></RightSwiperUI>
                        }
                        {
                            this.state['right-list-text'].art_list &&
                            <RightTextUI thisData = {this.state['right-list-text']}></RightTextUI>
                        }
                    </div>
                    <div className='iframe-elements'>
                        <div dangerouslySetInnerHTML = {{ __html:this.state.iframeDom }}></div>
                    </div>
                </div>
                <div id="expand-modules" className='wrapper'></div>
            </>
         );
    }
    componentDidMount(){
        this.setState({
            'iframeDom':store.getState().config.iframeDom
        })
        this.init()
    }
    async importData(id) {
        const data = await api.get("/node_" + id + ".json")
        return data;
    }
    async init(){
        for(let column in this.state){
            const thisData = await this.importData(this.state[column].id)
            const n={}
            n[column]=thisData.data.data
            this.setState(n)
        }
    }
}
 
export default Index;