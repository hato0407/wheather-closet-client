import GlobalStyle from './style/GlobalStyle';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
