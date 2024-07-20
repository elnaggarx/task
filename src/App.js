import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "./styles.css";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}

export default App;
