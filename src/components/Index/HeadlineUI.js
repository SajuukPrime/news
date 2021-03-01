import React from 'react';
const HeadlineUI = (data)=>{
    const props =data.thisData
    return(
        <div className='headline wrapper'>
            <div className='logo'>
                <img src="http://images.china.cn/images1/ch/2020newschina/src/assets/bg_3.png" alt={props.article_title} />
            </div>
            <div className="hd-text">
                <a 
                href={props.article_url}
                target='_blank' rel="noopener noreferrer">
                    {props.article_title}
                </a>
            </div>
        </div>
    )
}

export default HeadlineUI;
