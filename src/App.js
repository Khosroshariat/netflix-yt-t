import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import ProtectedRoute from "./components/ProtectedRoute";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";

function App() {
  return (
    <>
    <RecoilRoot>
    <AuthContextProvider>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthContextProvider>
    </RecoilRoot>
    </>
  );
}

export default App;
