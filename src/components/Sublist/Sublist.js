import React, { Component } from 'react';
import api from '../../utils/api'
class Sublist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisSubData:{
                'column_id': this.props.match.params.id
            }
        }
    }
    render() { 
        return ( 
            <>
                {
                    this.state.thisSubData.column_name &&
                    <div className='sub-page'>
                        <div className='sub-page-column'>
                            {this.state.thisSubData.column_name}
                        </div>
                        <ul>
                            {
                                this.state.thisSubData.art_list.map((item,index)=>{
                                    return (
                                    <li key={`${item.article_id}+${index}`}>
                                        <a 
                                            href={item.article_url} 
                                            target='_blank' rel="noopener noreferrer"
                                        >
                                        {   
                                            item.article_pic!=='' && 
                                            <>
                                                <div className='sub-page-image'>    
                                                <img src={item.article_pic} alt=""/>
                                                </div>
                                                <div className='sub-page-text'>
                                                    <div className='sub-page-title'>{item.article_title}</div>
                                                    <div className='sub-page-summary'>{item.article_summary}</div>
                                                </div>
                                            </>                                            
                                        }
                                        {   
                                            item.article_pic==='' && 
                                            <>
                                                <div className='sub-page-title'>{item.article_title}</div>
                                                <div className='sub-page-summary'>{item.article_summary}</div>
                                            </>                                            
                                        }
                                        </a>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </>
         );
    }
    componentDidMount (){
        this.importData(this.state.thisSubData['column_id'])
    }
    componentDidUpdate(){
        if(this.props.match.params.id!==this.state.thisSubData.column_id){
            this.importData(this.props.match.params.id)
        }
    }
    componentWillUnmount(){
        this.setState({})
    }
    async importData(id) {
        const data = await api.get("/node_" + id + ".json").then(data => {
            this.setState({
                thisSubData:data.data.data
            })
        })
        return data;
    }
}
 
export default Sublist;