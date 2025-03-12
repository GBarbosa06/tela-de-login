
function Input(props) {
    return(
        <input type="email" className="bg-neutral-500 rounded-md w-90 h-9 p-2 hover:bg-neutral-400 transition-colors" placeholder={props.placeholder} />
    )
}

export default Input;