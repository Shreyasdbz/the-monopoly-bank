/** @format */

import "./style/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContextProvider } from "./context/ThemeContext";
import { PlayersContextProvider } from "./context/PlayersContext";
import { TransactionsContextProvider } from "./context/TransactionsContext";

import Home from "./routes/Home";
import Game from "./routes/Game";
import SiteColors from "./routes/SiteColors";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContextProvider>
          <PlayersContextProvider>
            <TransactionsContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/sitecolors" element={<SiteColors />} />
              </Routes>
            </TransactionsContextProvider>
          </PlayersContextProvider>
        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
