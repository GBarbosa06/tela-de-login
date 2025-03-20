import { useEffect, useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import ValidationMessages from "../components/ValidationMessages";
import { Eye, EyeOff } from "lucide-react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameFieldUsed, setNameFieldUsed] = useState(false);
  const [emailFieldUsed, setEmailFieldUsed] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [samePass, setSamePass] = useState(false);
  const [sixChars, setSixChars] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNameFieldUsed(name.trim() !== "");
    setEmailFieldUsed(email.trim() !== "");
    setSamePass(password === confirm && password.trim() !== "");
    setSixChars(password.length >= 6);
  }, [name, email, password, confirm]);

  function register(event) {
    event.preventDefault();

    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className=" min-w-[500px] h-[390px] flex justify-center items-center flex-col text-white">
      <Title>Cadastro</Title>
      <form className="flex flex-col gap-2 w-90">
        <Input
          placeholder="Nome"
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <div className="flex flex-row">
          <div className="flex flex-col gap-2 flex-2 mr-4">
            <Input
              placeholder="Senha"
              type={show ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Input
              placeholder="Confirme sua senha"
              type={show ? "text" : "password"}
              value={confirm}
              onChange={(event) => {
                setConfirm(event.target.value);
              }}
            />
          </div>
          <span
            className="flex self-center cursor-pointer select-none"
            onClick={() => setShow(!show)}
          >
            {show ? <Eye size={50} /> : <EyeOff size={50} />}
          </span>
        </div>
        <ValidationMessages
          nameFieldUsed={nameFieldUsed}
          emailFieldUsed={emailFieldUsed}
          samePass={samePass}
          sixChars={sixChars}
        />
        <button
          type="submit"
          className={`rounded-md w-90 h-15 transition-all
                        ${
                          !samePass || !sixChars
                            ? "bg-gray-700 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold p-3 hover:brightness-110 cursor-pointer"
                        }`}
          onClick={register}
          disabled={!nameFieldUsed || !emailFieldUsed || !samePass || !sixChars}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
