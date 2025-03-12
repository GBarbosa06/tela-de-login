import Input from "./Input";

function Login() {
    return(
        <div className='bg-neutral-800 w-screen min-h-screen flex justify-center items-center flex-col text-white'>
            <h1 className="text-4xl font-extrabold font-serif m-5">Cadastro</h1>
            <div className="flex flex-col gap-2">
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme sua senha" />

                <input type="submit" value="Cadastrar" className="rounded-md w-90 h-15 cursor-pointer bg-linear-65 from-purple-500 to-pink-500 font-extrabold" />
            </div>
            
        </div>
    )
}

export default Login;