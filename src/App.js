import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import ProductItem from "./components/ProductItem/ProductItem";
import cl from "./App.css"
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter,
    Routes,
    Route, useParams
} from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
function App() {
    function ProductWrapper(){
        const { id} = useParams();
        return <Product id={id} />
    }

    return (
        <BrowserRouter>
            <div className="app">

              <Header/>
                <Routes>
                    <Route exact path='/' element={<Main/>}/>
                    <Route path="/products"> />
                        <Route path=":id" element={<ProductWrapper />} />
                    </Route>
                    <Route path='/about' element={<About/>}/>
                </Routes>

                <Footer/>

            </div>
        </BrowserRouter>
  );
}

export default App;
