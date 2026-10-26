import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Read from './components/Read.jsx';
import Create from './components/Create.jsx';
import './App.css';

function App() {  return (
    <div className="page-layout">      <NavigationBar />
      <main className="container page-content">
        <div className="content-panel">          {/* Change the page content while keeping the surrounding layout. */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </main>      {/* This sits outside Routes so the same footer appears on all pages. */}
      <Footer />
    </div>
  );
}

export default App;
