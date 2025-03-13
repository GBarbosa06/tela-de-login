import { useState } from "react";
import Input from "./Input";

function Login() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirm, setConfirm] = useState("");
    

    function register(){
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "" || confirm.trim() === "") {
            alert("Dados insuficientes");
            return(-1);
        }
        
    }

    return(
        <div className='bg-neutral-800 w-screen min-h-screen flex justify-center items-center flex-col text-white'>
            <h1 className="text-4xl font-extrabold font-serif m-5">Cadastro</h1>
            <div className="flex flex-col gap-2">
                <Input placeholder="Nome" value={nome}  type="text" onChange={(event) => setNome(event.target.value)} />
                <Input placeholder="E-mail" value={email} type="email" onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="Senha" value={senha} type="password" onChange={(event) => setSenha(event.target.value)} />
                <Input placeholder="Confirme sua senha" type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} />

                <input type="submit" value="Cadastrar" className="rounded-md w-90 h-15 cursor-pointer bg-linear-65 from-purple-500 to-pink-500 font-extrabold" onClick={register} />
            </div>
            
        </div> 
    )
}

export default Login;