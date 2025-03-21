import React from 'react';
import ReactDOM from "react-dom/client";
import { SearchContextProvider } from "./context/SearchContext";
import Search from "./components/Search/Search";
import {Box} from "@mui/material";
import './index.css';
import SearchResults from "./components/SearchResults/SearchResults";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <SearchContextProvider>
      <div className='layout'>
        <header>
          <div>Welcome to Rod's ice Cream Parlor Search</div>
          <div>
            <Search />
          </div>

        </header>
        <main className='mainContainer'>
          <Box sx={{
            padding: '10px'
          }}>
            <SearchResults />
          </Box>
        </main>
        <footer>
          &copy; Copyright Rod Davis 2025
        </footer>
      </div>
    </SearchContextProvider>
  );
};

root.render(<App />);
