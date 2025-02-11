import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/*Components */
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Container from "./components/layout/Container.jsx";
import Message from "./components/layout/Message.jsx";

/*Context */
import { UserProvider } from "./context/UserContext.jsx";

/*Pages */
import Home from "./components/pages/Home.jsx";
import Register from "./components/pages/Auth/Register.jsx";
import Login from "./components/pages/Auth/Login.jsx";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Navbar />
          <Message />
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
          <Footer />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
