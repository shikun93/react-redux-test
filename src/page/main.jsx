import React,{Component} from "react";
import { connect } from "react-redux";
import { mainHeight,mainGetMenu,getNextMenu } from "@/store/actions";
import { Menu, Dropdown, Icon } from "antd";

import "@/less/main.less";
import "@/font/iconfont.less";

const iconType = {
    "Admin.Index":"home",
    "Admin.SettingManage":"desktop",
    "Admin.ShopManage":"laptop",
    "Admin.ConsultManage":"setting",
    "Admin.ForumManage":"phone",
    "Admin.TemplateManage":"table",
    "Admin.AppsManage":"mobile",
};

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
           
		};
	}

	componentDidMount(){
        let { dispatch } = this.props;
        let token = sessionStorage.getItem("token");
        dispatch(mainHeight(document.body.offsetHeight));
        dispatch(mainGetMenu(token));
        window.onresize = () =>{
            dispatch(mainHeight(document.body.offsetHeight));
        };
	}

    nextGetList = (n) => {
        let { dispatch } = this.props;
        dispatch(getNextMenu(n));
    }

	render(){
		let t = this;
		let { height,menuList,childMenu } = t.props;
        
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
                    <div className="header_menu">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="javascript:void(0)">
                               <Icon type="bars"  style={{fontSize:"30px",color:"#323232"}}/>
                            </a>
                        </Dropdown>
                    </div> 
                </div>
                <div className="body">
                    <div className="slider">
                        <ul className="slider_nav">
                            {
                                menuList.map(function(item,i){
                                    return (
                                        <li key = {i} className="">
                                            <a className="ant-dropdown-link" href="javascript:void(0)" onClick={() => t.nextGetList(i)}>
                                                <Icon type={iconType[item.c]} style={{ fontSize: 28,float:"left" }} />
                                                <span>{item.admin_menu_name}</span>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="content">
                        <div className="content_header">
                            <ul className="content_header_nav">
                                {
                                    childMenu.map(function(item,i){
                                        return (
                                            <li key = {i}>
                                                <a className="ant-dropdown-link" href="javascript:void(0)">
                                                    <span>{item.admin_menu_name}</span>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="router_view" style={{height:height}}>
            
                        </div>
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
		height:state.main.height?state.main.height:"400px",
        menuList:state.main.menu,
        childMenu:state.main.childMenu
	};
}

export default connect(selectMain)(Main);