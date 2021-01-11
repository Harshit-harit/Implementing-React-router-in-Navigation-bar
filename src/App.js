
import './App.css';
import { Route , Switch} from "react-router-dom";
import about from "./about";
import contact from "./contact";
import no from "./no"
import error from "./error"
import Navbar from "./Navbar"



 

// function App(){

// return <h1>hello</h1>;

// }

const App=()=> {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/"component={about}/>
                <Route path="/contact"component={contact}/>
                <Route path="/no"component={no}/>
                <Route component={error}/>
            </Switch>
        {/* <about />
        <contact /> */}
        </>

) } 
export default App;
