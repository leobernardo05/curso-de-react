function Input (props){
    return (
        <input 
            // estilo sempre será o mesmo
            className="border-slate-300 w-full outline-slate-400 px-4 py-2 rounded-md flex"
            {...props}
         />
        
    );
}

export default Input;