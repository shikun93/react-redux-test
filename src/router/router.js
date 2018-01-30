import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter as Router,Route} from "react-router-dom";
import Loadable from "react-loadable";
import {createStore} from "redux";
import todoApp from "@/store/reducers";

const store = createStore(todoApp);

window.routerTrigger = function(t,url){
    t.props.history.push(url);
};

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Login = Loadable({
	loader: () => import("../page/login"),
	loading: MyLoadingComponent
});

ReactDOM.render(
	<Provider store={store}>
        <Router>
            <Route exact path = "/" component = {Login}/>
        </Router>
    </Provider>,document.getElementById("app")
);