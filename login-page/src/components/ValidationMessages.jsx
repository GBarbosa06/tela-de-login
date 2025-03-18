const PasswordValidationMessages = ({ nameFieldUsed, emailFieldUsed, samePass, sixChars }) => {
    return (
      <div>
        <p className={`${nameFieldUsed ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {nameFieldUsed ? "Campo nome usado" : "Campo nome vazio"}
        </p>
        <p className={`${emailFieldUsed ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {emailFieldUsed ? "Campo de email usado" : "Campo de email vazio"}
        </p>
        <p className={`${samePass ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {samePass ? "As senhas são iguais" : "As senhas são diferentes"}
        </p>
        <p className={`${sixChars ? "text-green-400" : "text-red-400"} font-semibold text-sm h-4`}>
          {sixChars ? "A senha tem 6 ou mais caracteres" : "A senha precisa ter pelo menos 6 caracteres"}
        </p>
      </div>
    );
  };
  
  export default PasswordValidationMessages;
  