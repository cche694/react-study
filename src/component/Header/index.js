/*
* @Author: chang__ccge
* @Date:   2020-09-09 00:11:05
* @Last Modified by:   chang__ccge
* @Last Modified time: 2020-09-10 16:15:48
*/
import React,{Component,Fragment} from 'react'
import 'antd/dist/antd.css'
import logo from './logo.png'
import './style.css'
import axios from 'axios'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

  


class AppHeader  extends Component {
	constructor(props){
		super(props)
		axios.get('')
		this.state={
			List:[]
		}
	}

	getMenuItem(){

		return this.state.List.map((item)=>{
			return (
				<Menu.Item className='ant-menu-item'key={item.id}>
				<Link to={`/${item.id}`}>
					<Icon type={item.icon}></Icon>
			        {item.title}
				</Link>
		        </Menu.Item>
		        )
		})

		
	}

	componentDidMount(){
		axios.get('http://www.dell-lee.com/react/api/header.json')
		.then((res)=>{
			let List=[...this.state.List]
			List = res.data.data
			this.setState({
				List:List
			})
		})
	}

	render(){
		return (
			<Fragment>
			<Link to='/'><img src={logo} className='logo' alt='logo'/></Link>		
			<Menu className="ant-menu" mode="horizontal">
					{this.getMenuItem()}
			</Menu>
			</Fragment>
			)
	}
}
export default AppHeader