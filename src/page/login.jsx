import React,{Component} from "react";
import { connect } from "react-redux";
//import { changeValue } from "@/store/actions";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

import style from "@/less/login.less";

class LoginForm extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };

    const formItemLayout1 = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18,offset:5 },
      },
    };

    return (
      <Form onSubmit={this.props.handleSubmit.bind(this,this.props.parentThis)} className="login-form">
        <FormItem label="用户名" {...formItemLayout}>
          {getFieldDecorator("userName", {
            
          })(
            <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem label="密码" {...formItemLayout}>
          {getFieldDecorator("password", {
            
          })(
            <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem {...formItemLayout1}>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
        </FormItem>
         <FormItem {...formItemLayout1}>
            <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
            </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);



class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount(){
	
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
		//let { value } = this.props;
		return (
			<div className={style.login}>
               <h1>十间鱼后台管理系统</h1>
               <div className={style.form_main}>
                    <WrappedNormalLoginForm  handleSubmit={t.handleSubmit}  parentThis = {t}/>
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