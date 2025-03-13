import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirm, setConfirm] = useState("");


    const [show, setShow] = useState(false);
    

    function register(){
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "" || confirm.trim() === "") {
            alert("Dados insuficientes");
            return(-1);
        }
        if (senha !== confirm) {
            // ! fazer confirmações de senha, usar states e criar um componente para limpar o codigo
        }
        
    }

    return(
        <div className='bg-neutral-800 w-screen min-h-screen flex justify-center items-center flex-col text-white'>
            <h1 className="text-4xl font-extrabold font-serif m-5">Cadastro</h1>
            <form className="flex flex-col gap-2 w-90">
                <Input placeholder="Nome" value={nome}  type="text" onChange={(event) => setNome(event.target.value)} />
                <Input placeholder="E-mail" value={email} type="email" onChange={(event) => setEmail(event.target.value)} />
                <div className="flex flex-row">
                    <div className="flex flex-col gap-2 flex-2 mr-2">
                        <Input 
                            placeholder="Senha"  
                            type={show ? "text" : "password"} 
                            value={senha} 
                            onChange={(event) => setSenha(event.target.value)} />
                            
                        <Input 
                            placeholder="Confirme sua senha" 
                            type={show ? "text" : "password"} 
                            value={confirm} 
                            onChange={(event) => setConfirm(event.target.value)} />
                            
                    </div>
                    <span className="flex self-center cursor-pointer select-none" onClick={() => setShow(!show) }>
                        {show ? <Eye size={50} /> : <EyeOff size={50}/>}
                    </span>
                </div>
                
                <input type="submit" value="Cadastrar" className="rounded-md w-90 h-15 cursor-pointer bg-linear-65 from-purple-500 to-pink-500 font-extrabold" onClick={register} />
            </form>
            
        </div> 
    )
}

export default Login;