import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Modal,Button,Input,message } from 'antd';
import './style.css'
import axios from 'axios'

class Login extends Component {
	constructor(props){
			super(props)
			this.state={
				login:false,
				modal:false,
				user:'',
				password:''
			}
			this.loginHandler=this.loginHandler.bind(this)
			this.handleCancel=this.handleCancel.bind(this)
			this.userChange=this.userChange.bind(this)
			this.passwordChange=this.passwordChange.bind(this)
			this.checkLogin=this.checkLogin.bind(this)
			this.logoutHandler=this.logoutHandler.bind(this)
		}

	loginHandler(){
		this.setState({
			modal:true
		})
	}
	handleCancel(){
		this.setState({
			modal:false
		})
	}
	userChange(e){
		let {user}=this.state
		user=e.target.value
		this.setState({
			user
		})
	}
	passwordChange(e){
		let {password} =this.state
		password= e.target.value
		this.setState({
			password
		})
	}
	checkLogin(e){
		const {user,password}=this.state
		const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&&password=${password}`
		axios.get(url,{
			withCredentials:true
		})
		.then(res=>{
			let login=res.data.data.login
			if(login){
				message.success('登录成功')
				this.setState({
								login:true,
								modal:false
							})
			}else{
				message.error  ('登录失败')
			}
			
		})		
	}
	logoutHandler(){
		axios.get('http://www.dell-lee.com/react/api/logout.json',{
			withCredentials:true
			})
		.then(res=>{
			
			const data=res.data.data
			if(data.logout){
				this.setState({
					login:false
				})
			}
		})
		console.log(this.props)
		this.props.history.push('/')

	}

	render(){
		return(
			<div className='login'>
			{
				this.state.login?
				<Button type="primary" onClick={this.logoutHandler}>退出</Button>
				:<Button type="primary" onClick={this.loginHandler}>登录</Button>
			}
				<Link to='/vip'>
						<Button type="primary" style={{
						marginLeft:10,
						width:63.84
					}}>VIP</Button>
				</Link>
				
				 <Modal
			          title="Basic Modal"
			          visible={this.state.modal}
			          onKeyup={this.keyUp}
			          onOk={this.checkLogin}
			          onCancel={this.handleCancel}
			        >
			        <Input placeholder="请输入用户名"  style={{
			        	marginBottom:10
			        }}
			        value={this.state.user}
			        onChange={this.userChange}
			        />
			        <Input placeholder="请输入密码" 
			        type='password' 
			        value={this.state.password}
			        onChange={this.passwordChange}
			        />
		        </Modal>
			</div>
			)
	}
	componentDidMount(){

		axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
			withCredentials:true
		})
		.then(res=>{
			const {login}=res.data.data
			this.setState({
				login
			})
		})
	}
}
export default withRouter(Login)