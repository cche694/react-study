/*
* @Author: chang__ccge
* @Date:   2020-09-09 06:48:33
* @Last Modified by:   chang__ccge
* @Last Modified time: 2020-09-11 06:16:10
*/
import React,{Component} from 'react'
import axios from 'axios'
import { Card } from 'antd';
import './style.css'
class Detail extends Component {
	constructor(props){
		super(props)
		this.state={
			title:'',
			content:''
		}
	}
	componentDidMount(){
		const id= this.props.match.params.id
		axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id)
		.then(res=>{
			const data = res.data.data
				this.setState(data)
		})

	}
	render(){
		return(
			  <div className="site-card-border-less-wrapper">
    <Card title={this.state.title} bordered={false}>
      <div dangerouslySetInnerHTML ={{__html:this.state.content}}></div>
    </Card>
  </div>
			)
	}
}
export default Detail