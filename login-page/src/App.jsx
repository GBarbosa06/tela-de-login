import { useEffect, useState } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import { Eye, EyeOff } from "lucide-react";
import PageChange from "./components/PageChange";
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [emailFieldUsed, setEmailFieldUsed] = useState(false);
  const [passFieldUsed, setPassFieldUsed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmailFieldUsed(email.trim() !== "");
    setPassFieldUsed(password.trim() !== "");
  }, [email, password]);

  function login(event) {
    event.preventDefault();

    if (email === "email@gmail.com" && password === "gui123") {
      alert("Login realizado com sucesso");
    } else {
      alert("Credenciais inválidas");
    }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-800 to-slate-950 flex justify-center items-center flex-col text-white relative">
      <BackgroundBeams className="absolute top-0 left-0 z-0" />
      <div className="flex flex-col items-center relative z-10">
        <Title>Login</Title>
        <form className="flex flex-col gap-2" onSubmit={login}>
          <Input
            placeholder="Email"
            value={email}
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className="flex flex-row gap-2">
            <Input
              placeholder="Senha"
              value={password}
              type={show ? "text" : "password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <span
              className="flex self-center cursor-pointer select-none"
              onClick={() => setShow(!show)}
            >
              {show ? <Eye size={33} /> : <EyeOff size={33} />}
            </span>
          </div>
          <button
            type="submit"
            className={`rounded-md w-90 h-13 transition-all
                          ${
                            !emailFieldUsed || !passFieldUsed
                              ? "bg-gray-700 cursor-not-allowed"
                              : "bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold p-3 hover:brightness-110 cursor-pointer"
                          }`}
            disabled={!emailFieldUsed || !passFieldUsed}
            
          >
            Cadastrar
          </button>
        </form>
        <PageChange>Ainda não tem uma conta? <button className="text-blue-300 cursor-pointer hover:text-blue-400" onClick={() => navigate("/register")}>Registrar</button></PageChange>
        <PageChange><button className="text-blue-300 cursor-pointer hover:text-blue-400" onClick={() => alert("Um e-mail com instruções para redefinir sua senha foi enviado. Verifique sua caixa de entrada e spam")}>Esqueci minha senha</button> </PageChange>
        
      </div>
      
    </div>
  );
}

export default App;
