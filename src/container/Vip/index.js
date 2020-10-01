/*
* @Author: chang__ccge
* @Date:   2020-09-11 14:05:16
* @Last Modified by:   chang__ccge
* @Last Modified time: 2020-09-12 06:02:51
*/
import React,{Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Vip extends Component{
	constructor(props){
		super(props)
		this.state={
			login:true,
			fetchFinish:false
		}
	}
	render(){
	if(this.state.login){
		if(this.state.fetchFinish){
			return <div>vip</div>
		}else{
			return <div>正在获取数据...</div>
		}
		
	}else{
		return <Redirect to='/'></Redirect>
	}
			
	}
	componentDidMount(){
		axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
			withCredentials:true
		})
		.then(res=>{
			console.log(res)
			const {login}=res.data.data
			console.log(login)
			this.setState({
				login,
				fetchFinish:true
			})

		})
	}
}
export default Vip