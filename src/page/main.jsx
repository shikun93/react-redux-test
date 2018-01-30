import React,{Component} from "react";
import { connect } from "react-redux";
//import { changeValue } from "@/store/actions";
import { Menu, Dropdown, Icon } from 'antd';
const FormItem = Form.Item;

import style from "@/less/login.less";

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount(){
	  Actions.setHeight(document.body.offsetHeight);
        window.onresize = () =>{
            Actions.setHeight(document.body.offsetHeight);
        }
	}

	handleSubmit(t){
        this.props.form.validateFields((err, values) => {
          if (!err) {

            //routerTrigger(t,"/main");
          }
        });
    }

	render(){
		let t = this;
		
     const menu = (
          <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修改密码</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">修改个人信息</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">退出</a>
            </Menu.Item>
          </Menu>
        );
     
		return (
			 <div className="admin">
                <p className="header_back"></p>
                <div className="header">
                    <span>十间鱼</span>
                    <div className="menu">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="javascript:void(0)">
                               <Icon type="bars"  style={{fontSize:'30px',color:'#323232'}}/>
                            </a>
                        </Dropdown>
                    </div> 
                </div>
                <div className="body">
                    <div className="slider">
                        <ul className="nav">
                            <li>
                                <a className="ant-dropdown-link" href="#">
                                    <i className="icon iconfont icon-shouye tip"></i>
                                    <span>首页</span>
                                </a>
                            </li>
                            <li>
                                <a className="ant-dropdown-link" href="#">
                                    <i className="icon iconfont icon-caidan1 tip"></i>
                                    <span>订单</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="content_header"></div>
                        <div className="router_view" style={{height:t.state.height}}></div>
                        <div className="footer">
                            十间鱼@ 版权所有
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

function selectLogin (state) {
	return {
		value:state.login.val?state.login.val:1,
		a:1
	};
}

export default connect(selectLogin)(Login);