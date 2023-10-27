import { Route, Routes , useNavigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { uid } from "uid";
import { useEffect, useState } from "react";
import getStore from "./utils/get";
import SharredLayout from "./components/SharredLayout";

function App() {
  const navigate = useNavigate()
  const id = uid();
  const img = "https://picsum.photos/200/300";
  const [user, setUser] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("форма пусто");
    } else {
      const newItem = { id: id, title: user, img: img };
      setUsers([...users, newItem]);
      if (user.length>0) {
        navigate('/')
      }
      setUser("");
    }
  };

  
  const [users, setUsers] = useState(getStore("users"));
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharredLayout/>}>
          <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/signup"
          element={
            <SignUp user={user} setUser={setUser} handeSubmit={handeSubmit} />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
