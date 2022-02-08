import '../assets/css/App.css';
import "../assets/css/general.css"
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

function App() {
  return (
    <div id="wrapper">
    <SideBar/>
    <ContentWrapper/>
    </div>
  );
}

export default App;
