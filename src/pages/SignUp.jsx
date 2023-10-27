import "../components/HomePage/Main/Main.css";
import "../App.css";
import { Link } from "react-router-dom";

export default function SignUp({user, setUser, handeSubmit}) {
  return (
    <div className="signup">
      <form className="form" onSubmit={handeSubmit} action="">
        <h3>Регистрация</h3>
        <input
          type="text"
          name="username..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="username..."
        />
        <button>Регистрация</button>
        
      </form>
    </div>
  );
}
