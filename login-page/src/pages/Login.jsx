import { useEffect, useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import { Eye, EyeOff } from "lucide-react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
  const [emailFieldUsed, setEmailFieldUsed] = useState(false);
  const [passFieldUsed, setPassFieldUsed] = useState(false);

  useEffect(() => {
    setEmailFieldUsed(email.trim())
    setPassFieldUsed(password.trim())
  }, [email, password])

  function login() {
    if(email === "email@gmail.com" && password === "gui123"){
      alert("Login realizado com sucesso");
    }
    else{
      alert("Credenciais inválidas")
    }
  }

  return (
    <div className="min-w-[500px] h-[390px] flex justify-center items-center flex-col text-white">
      <Title>Login</Title>
      <form className="flex flex-col gap-2 min-w-90 ">      
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
          disabled={!emailFieldUsed || passFieldUsed}
          onClick={login}
        >
          Cadastrar
        </button>
        
        
      </form>

    </div>
  );
}

export default Login;
