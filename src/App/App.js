import React,{Component} from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBars from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
// import Content from "../components/Content/Content";
import Setting from "../components/setting/setting";
import Profile from "../components/profile/profile";
import Error404 from "../components/Error404/Error404";
import Home from "../components/Home/Home";
import About from "../components/About/About";
// import "./App.css"

class App extends Component {
    render() {
        return(
                <div className="App">
                    <NavBars/>
                    <br/>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                            <Route path="*" element={<Error404 color="danger"/>}/>
                        </Routes>
                     </BrowserRouter>

                    <Footer/>
                </div>
        );
    }
}

export default App