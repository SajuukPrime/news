import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar]);
class RightSwiperUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        if(this.props.thisData.art_list.length<=2){
            const temp = JSON.parse(JSON.stringify(this.props))
            this.setState(temp)
            this.setState({
                'isNotSwiper':true
            })
        }else{
            const temp = JSON.parse(JSON.stringify(this.props))
            const tempSwiperList=[]
            for(let i=0;i<6;i++){
                if((i+2)%2===0){
                    const n = [];
                    n.push(temp.thisData.art_list[i])
                    tempSwiperList.push(n)
                }else{
                    tempSwiperList[(i+1)/2-1].push(temp.thisData.art_list[i])
                }
            }
            temp.thisData.art_list=tempSwiperList
            this.setState(temp)
            this.setState({
                'isNotSwiper':false
            })
        }        
    }
    render() { 
        let props = this.state.thisData
        if(props){
           return ( 
            <div className="grey-block">
            <div className="title_1">
                {props.column_name}
            </div>
            <div className="swiper-2">
                {
                    this.state.isNotSwiper===true &&
                    props.art_list.map((item,index)=>{
                        return (
                            <div className="rp-item-1" key={index}>
                                <a 
                                href={item.article_url}
                                target='_blank' rel="noopener noreferrer">
                                    <img src={item.article_pic} alt=""/>
                                    <dl>
                                        <dt>{item.article_title}</dt>
                                    </dl>
                                </a>
                            </div>
                        )
                    })
                }
                {
                    this.state.isNotSwiper===false &&
                    <>
                    <Swiper
                    slidesPerView={1}
                    autoplay={false}
                    loop={true}>
                        {
                        props.art_list.map((item,index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    {
                                        item.map((item2,index2)=>(
                                            <div className="rp-item-1" key={`${item2.article_id}+${index2}`}>
                                                <a 
                                                href={item2.article_url}
                                                target='_blank' rel="noopener noreferrer">
                                                    <img src={item2.article_pic} alt=""/>
                                                    <dl>
                                                        <dt>{item2.article_title}</dt>
                                                    </dl>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                    </>
                }
            </div>
        </div>
         ); 
        }
        else{
            return (
                <></>
            )
        }
        
    }
}
export default RightSwiperUI;