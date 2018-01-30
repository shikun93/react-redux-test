import React,{Component} from "react";
import { connect } from "react-redux";
import { changeHeight } from "@/store/actions";
import { Menu, Dropdown, Icon } from "antd";

import "@/less/login.less";

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount(){
        let { dispatch } = this.props;
        dispatch(changeHeight(document.body.offsetHeight));
        window.onresize = () =>{
            dispatch(changeHeight(document.body.offsetHeight));
        };
	}

	render(){
		let t = this;
		let { height } = t.props;
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
                               <Icon type="bars"  style={{fontSize:"30px",color:"#323232"}}/>
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
                        <div className="router_view" style={{height:height}}></div>
                        <div className="footer">
                            十间鱼@ 版权所有
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

function selectMain (state) {
	return {
		height:state.main.height?state.main.height:"400px"
	};
}

export default connect(selectMain)(Main);