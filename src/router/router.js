import "core-js/fn/object/assign";
import "core-js/fn/promise";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {HashRouter as Router,Route} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import Loadable from "react-loadable";

import "antd/dist/antd.less";
import todoApp from "@/store/reducers";

const store = createStore(todoApp,applyMiddleware(thunk));

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

const Main = Loadable({
    loader: () => import("../page/main"),
    loading: MyLoadingComponent
});
const Test = Loadable({
    loader: () => import("../page/test"),
    loading: MyLoadingComponent
});

ReactDOM.render(
	<Provider store={store}>
        <Router>
            <div>
                <Route exact path = "/" component = {Login}/>
                <Route path = "/main" component = {Main}/>
                <Route path = "/test" component = {Test}/>
            </div>  
        </Router>
    </Provider>,document.getElementById("app")
);