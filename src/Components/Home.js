import '../App.css';
import logo from '../Logo.jpeg';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <a className="App-link" href="https://www.anzilsoft.com/" target="_blank" rel="noreferrer"  >
                www.anzilsoft.com
            </a>
            <p>
                <Link to={"/assignment1"} className="btn btn-primary m-3 p-3">Assignment1</Link>
                <Link to={"/assignment2"} className="btn btn-primary m-3 p-3">Assignment2</Link>
            </p>
            <div>Assignment Done by Nitin Eknath Mungase</div>
        </div>
    );
}
export default Home;