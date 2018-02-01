import React,{Component} from "react";
import { connect } from "react-redux";

class Test extends Component {

	constructor(props) {
		super(props);
		this.state = {
           time: new Date(),
           value:"a"
		};
	}

	componentDidMount(){
       this.setTime = setInterval(() => {
            this.setState({time:new Date()});
       },1000);
	}

    componentDidUnMount (){
        clearInterval(this.setTime);
    }

    change (e){
        this.setState({value:e.target.value});
    }

	render(){
		return (
			<div className="admin">
                {this.state.time.toLocaleTimeString()}
                <form>
                    <input type="text" name="username"/>
                    <input type="submit" value="submit"/>
                    <select value={this.state.value} onChange = {(e) =>this.change(e)}>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                        <option value="d">d</option>
                    </select>
                </form>
            </div>
		);
	}
}

export default connect()(Test);