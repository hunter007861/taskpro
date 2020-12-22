import './App.css';
import Feed from './views/Feed';
import Header from "./views/Header";
import Sidebar from "./views/SideBar";
import Widgets from "./views/Widgets";

function App() {
  return (
      <div className="App">
          <Header />
          <div className="AppBody">
          <Sidebar />
              <Feed />
              <Widgets/>
          </div>
    </div>
  );
}

export default App;
