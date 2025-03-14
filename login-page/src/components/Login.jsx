import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
        const [samePass, setSamePass] = useState(false);
        const [sixChars, setSixChars] = useState(false);
    const [show, setShow] = useState(false);
    
    function verifyPasswords (pass, conf) {
        setSamePass(pass === conf);
        setSixChars(pass.length >= 6);
    };

    function register(event){
        event.preventDefault();

        verifyPasswords(password, confirm);

        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
            alert("Dados insuficientes");
            return(-1);
        }

        alert("Cadastro realizado com sucesso!")
        
    }

    return(
        <div className='bg-neutral-800 w-screen min-h-screen flex justify-center items-center flex-col text-white'>
            <h1 className="text-4xl font-extrabold font-serif m-5">Cadastro</h1>
            <form className="flex flex-col gap-2 w-90">
                <Input 
                    placeholder="Nome" 
                    value={name}  
                    type="text" 
                    onChange={(event) => setName(event.target.value)} />
                <Input 
                    placeholder="E-mail" 
                    value={email} 
                    type="email" 
                    onChange={(event) => setEmail(event.target.value)} />
                <div className="flex flex-row">
                    <div className="flex flex-col gap-2 flex-2 mr-2">
                        <Input 
                            placeholder="Senha"  
                            type={show ? "text" : "password"} 
                            value={password} 
                            onChange={(event) => {
                                setPassword(event.target.value);
                                verifyPasswords(password, event.target.value)
                                }} />
                            
                        <Input 
                            placeholder="Confirme sua senha" 
                            type={show ? "text" : "password"} 
                            value={confirm} 
                            onChange={(event) => { 
                                setConfirm(event.target.value); 
                                verifyPasswords(password, event.target.value);
                                 }} />
                            
                            
                            
                    </div>
                    <span className="flex self-center cursor-pointer select-none" onClick={() => setShow(!show) }>
                        {show ? <Eye size={50} /> : <EyeOff size={50}/>}
                    </span>
                    
                </div>
                    <p className={`${samePass ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`} >
                        {samePass ? "As senhas são iguais" : "As senhas são diferentes"}
                    </p>
                    <p className={`${sixChars ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
                        {sixChars ? "A senha tem 6 ou mais caracteres" : "A senha precisa ter pelo menos 6 caracteres"}
                        </p>
                <input 
                    type="submit" 
                    value="Cadastrar" 
                    className={`rounded-md w-90 h-15 transition-all
                        ${!samePass || !sixChars ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold p-3 hover:brightness-110 cursor-pointer"}` }
                    onClick={register} 
                    disabled={!samePass || !sixChars}
                    />
            </form>
            
        </div> 
    )
}

export default Login;