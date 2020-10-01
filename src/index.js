import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css'
import AppHeader from './component/Header'
import Detail from './container/Detail'
import List from './container/List'
import Login from './component/Login'
import Vip from './container/Vip'

const { Header, Footer, Content } = Layout

class App extends Component{
	render(){
		return (
			<BrowserRouter>
				<Layout style={{
					minWidth:1300
				}}>
				      <Header className="header">
						<AppHeader/>
				      </Header>
						<Login></Login>
				      <Content className="content">
				      <Switch>
					      <Route path='/vip' component={Vip}></Route>
					      <Route path='/detail/:id' component={Detail}/>
						  <Route path='/:id?' component={List}/>
				      </Switch>
				      </Content>
				      <Footer className="footer">Footer</Footer>
			    </Layout>
			</BrowserRouter>
			
			)
	}
}


ReactDOM.render(<App></App>,document.getElementById('root')
	);


