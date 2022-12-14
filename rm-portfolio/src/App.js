// Imports go Here
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Splash from "./Splash";
import PortfolioCards from "./PortfolioCards";
import Footer from "./Footer";
//import Portfolio from "./Portfolio.json";
import "./App.css";

function App() {
    console.log("Started App")

    const [portfolioData, setPortfolioData] = useState([]);
    const [page, setPage] = useState("landing");
    
    useEffect(() => {
      let endpoint = "Portfolio.json"
      axios.get(endpoint)
        .then((response) => setPortfolioData(response.data))
    },[]);
    

    // useEffect(() => {
    //   let endpoint = "https://8000-rdmullins-rmportfolioba-6vga65t3wbs.ws-us78.gitpod.io/api/projects"
    //   axios.get(endpoint)
    //     .then((response)=> setPortfolioData(response.data))
    // },[]);
    
        //console.log("Inside App function.");
        //const [post] = React.useState(null);
        
  
        if (portfolioData.length === 0) return (
          <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          );
        
        console.log(portfolioData);
    
        return (
          <>
          <div className="container">
            {(page === "landing") && 
              <>
              <Splash 
                pageUpdater={setPage} />
              <Footer />
              </>
            }
            {(page === "portfolio") && 
              <>
              <PortfolioCards 
                pageUpdater={setPage} 
                portfolioData={portfolioData} />
              <Footer />   
              </> 
            }

          </div>
          </>
        );
      }
      
      export default App;