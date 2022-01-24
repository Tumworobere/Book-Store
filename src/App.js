import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Categories from './components/categories';
import BooksList from './components/bookList';

function App() {
  return (
    <Router>

      <Navbar />
      <div className="main">
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <div>
                <BooksList />

              </div>
)}
          />
          <Route path="/categories" element={<Categories />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
