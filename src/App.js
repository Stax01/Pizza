import Header from "./component/header";
import Home from "./pages/home";
import {Switch, Route} from 'react-router-dom'
import Cart from "./pages/Cart";


function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' exact component={Home}/>
                <Route path='/cart' exact component={Cart}/>

            </div>
        </div>
    );
}

export default App;
