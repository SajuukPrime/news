import React from 'react';

const RightTextUI = (data)=>{
    const props = data.thisData
    return(
        <>
            <div className="grey-block">
                <div className="title_1">
                    {props.column_name}
                </div>
                <div className="rp-item-2">
                    <ul>
                        {
                            props.art_list.map((item,index)=>{
                                if(index<6){
                                    return (
                                        <li key={index}>
                                            <a 
                                            href={props.article_url}
                                            target='_blank' rel="noopener noreferrer">
                                                {item.article_title}
                                            </a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightTextUI;