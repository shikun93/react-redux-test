import React,{Component} from "react";
import { connect } from "react-redux";
import { loading } from "@/store/actions";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;
import { routerTrigger } from "../app/util";

import "@/less/login.less";

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
      <Form onSubmit={() => this.props.handleSubmit(this)} className="login-form">
        <FormItem label="用户名" {...formItemLayout}>
          {getFieldDecorator("admin_name", {
            
          })(
            <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem label="密码" {...formItemLayout}>
          {getFieldDecorator("admin_password", {
            
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

	handleSubmit = (t) => {
    let {dispatch} = this.props;
    t.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(loading(values,routerTrigger(this,"/main")));
      }
    });
  }

	render(){
		let t = this;
		return (
			<div className="login">
               <h1>十间鱼后台管理系统</h1>
               <div className="form_main">
                    <WrappedNormalLoginForm  handleSubmit={t.handleSubmit} />
               </div>
            </div>
		);
	}
}

function selectLogin (state) {
	return {
		err:state.login.error
	};
}

export default connect(selectLogin)(Login);