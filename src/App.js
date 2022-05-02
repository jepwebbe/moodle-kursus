import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { Header } from './components/Header/Header';
import { Frontpage } from './pages/frontpage/Frontpage';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="frontpage" element={<Frontpage />} />
        <Route path="/contactpage" />
        <Route path="/productpage" />
        <Route path="/loginpage" />
{/*         <Route path="/">
          <Navigate to="frontpage"/>
        </Route> */}

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>This is not a place for you!</p>
            </main>
      }
    />
          
      </Routes>

    </BrowserRouter>

  );
}

export default App;

/*
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>*/