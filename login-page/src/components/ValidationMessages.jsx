import { Check, X } from "lucide-react";
const PasswordValidationMessages = ({ nameFieldUsed, emailFieldUsed, samePass, sixChars }) => {
    return (
      <div>
        <p className={`${nameFieldUsed ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {nameFieldUsed ? 
            <p className="flex gap-1 align-middle"><Check size={16} /> <span className="-translate-y-0.5">Campo nome usado</span></p> 
            : 
            <p className="flex gap-1 align-middle"><X size={16} /><span className="-translate-y-0.5">Campo nome vazio</span></p>}
        </p>
        <p className={`${emailFieldUsed ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {emailFieldUsed ? 
            <p className="flex gap-1 align-middle"><Check size={16} /><span className="-translate-y-0.5">Campo de email usado</span></p> 
            :
            <p className="flex gap-1 align-middle"><X size={16} /><span className="-translate-y-0.5">Campo de email vazio</span></p>}
        </p>
        <p className={`${samePass ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {samePass ? 
            <p className="flex gap-1 align-middle"><Check size={16} /><span className="-translate-y-0.5">As senhas são iguais</span></p> 
            :
            <p className="flex gap-1 align-middle"><X size={16} /><span className="-translate-y-0.5">As senhas são diferentes</span></p>}
        </p>
        <p className={`${sixChars ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {sixChars ? 
            <p className="flex gap-1 align-middle"><Check size={16} /><span className="-translate-y-0.5">A senha tem 6 ou mais caracteres</span></p> 
            :
            <p className="flex gap-1 align-middle"><X size={16} /><span className="-translate-y-0.5">A senha precisa ter pelo menos 6 caracteres</span></p>}
        </p>
      </div>
    );
  };
  
  export default PasswordValidationMessages;
  