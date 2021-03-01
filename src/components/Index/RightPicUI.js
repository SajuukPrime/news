import React from 'react';

const RightPicUI = (data)=>{
    const props = data.thisData
    return(
        <>
            <div className="grey-block">
                <div className="title_1">
                    {props.column_name}
                </div>
                <div className="rp-item-1">
                    <a 
                    href={props.art_list[0].article_url}
                    target='_blank' rel="noopener noreferrer">
                        <img src={props.art_list[0].article_pic} alt=""/>
                        <dl>
                            <dt>{props.art_list[0].article_title}</dt>
                            <dd>{props.art_list[0].article_summary}</dd>
                        </dl>
                    </a>
                </div>
            </div>
        </>
    )
}

export default RightPicUI;