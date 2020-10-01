/*
* @Author: chang__ccge
* @Date:   2020-09-09 06:48:39
* @Last Modified by:   chang__ccge
* @Last Modified time: 2020-09-10 16:12:19
*/
import React,{Component} from 'react'
import 'antd/dist/antd.css';
import { List } from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'



class PageList extends Component {
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentWillReceiveProps(nextprops){
		const id=nextprops.match.params.id
		this.getDataByAxios(id)
	}

	componentDidMount(){
		
		const id=this.props.match.params.id
		this.getDataByAxios(id)
	}

	getDataByAxios(id){
		axios.get('http://www.dell-lee.com/react/api/List.json?id='+id)
		.then((res)=>{
			let newData=[...this.state.data]
			newData=res.data.data
			this.setState({
				data:newData
			})
		})
	}
	render(){
		return(
			  <List
			    style={{
			    	background:'#fff'
			    }}
			      bordered
			      dataSource={this.state.data}
			      renderItem={item => <Link to={`/detail/${item.id}`}><List.Item>{item.title}</List.Item></Link>}
			      key={this.state.data.id}
			    />
			)
	}
}
export default PageList