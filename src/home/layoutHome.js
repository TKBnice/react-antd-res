  
  import React from 'react';
  import { Layout, Menu, Icon ,Avatar,Dropdown} from 'antd';
  import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

  import Home from './Home';
  import TableDemo from '../dashboard/TableDemo';
  import TodoDemo from '../dashboard/TodoDemo';
  import Workplace from '../dashboard/Workplace';
  import UserCenter from '../dashboard/userCenter';
  // import Login from '../login/login';

  import './layoutHome.css';

  const { Header, Footer, Sider, Content } = Layout;
  const SubMenu = Menu.SubMenu;

  const menuHeader = (
    <Menu>
      <Menu.Item key="1">
          <Link to="/userCenter">用户中心</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <a >系统设置</a>
      </Menu.Item>
      <Menu.Item key="3">
      <Link to="/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  );


  class layoutHome extends React.Component {
    render() {
  
      return (

        <Layout>
          <Sider width={256} style={{ minHeight: '100vh' }}>
            <div className="home-logo-wrap">
              <Avatar icon="user" style={{float:'left'}} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
              <span style={{float:'left',marginLeft:"10px"}}>后台管理系统</span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/"><Icon type="pie-chart" /><span>仪表盘</span></Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
              >
                <Menu.Item key="2"><Link to="/todoDemo">Todo Demo</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/tableDemo">Table Demo</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/workplace">工作台</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout >
            <Header className="home-header" style={{overflow:"hidden",padding:"0 16px"}}>
                <div style={{float:"left",}}>
                  <Dropdown overlay={menuHeader} trigger={['click']}>
                    <a  href="#" style={{color:"#fff",}}>
                      hello Jack <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
                <div style={{float:"right",}}>
                  <a style={{marginRight:"12px"}} href="https://github.com/TKBnice"  target="_blank">
                    <Avatar size="small" src="https://github.com/fluidicon.png" />
                  </a>
                  <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                </div>
      
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>

              <div style={{  background: '#fff', minHeight: 360 }}>
                <Route exact path="/"  component={Home} />
                <Route path="/todoDemo" component={TodoDemo}/>
                <Route path="/tableDemo" component={TableDemo}/>
                <Route path="/workplace" component={Workplace}/>
                <Route path="/userCenter" component={UserCenter}/>
              </div>
              
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          {/* <Route path="/login"  component={Login} /> */}
        </Layout>

                  



      )
    
    
    };  
  }
  
  export default layoutHome;
  
  
  
  
