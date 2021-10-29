import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Product from './components/Product';
import MyBreadCrumb from './components/MyBreadCrumb';
function App() {
  return (
    <div className="container">
      <h1>Hello A section</h1>
      <MyBreadCrumb />
      <Product />
      <Student />
      <Student />
      <Student />
      <Student />
    </div>
  );
}

export default App;
