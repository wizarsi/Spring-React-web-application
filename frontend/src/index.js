import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";
import "../src/myAssets/style.css"

ReactDOM.render(
    <div style={{width:"100%",height:"100%"}}>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
    ,
    document.getElementById('root'))