import Appbar from "./Component/Appbar"
import Footer from "./Component/Footer"
import Addstudent from "./Component/AddStudent";
import DisplayStudent from "./Component/DisplayStudent";
function App() {
  return (
    <div className="app">
      <Appbar/>
      <Addstudent/>
      <DisplayStudent/>
      <Footer/>
      
  
    </div>
  );
}

export default App;
