const isLoggedIn = true;

function LoginStatus() {
  return (
    <h2>{isLoggedIn ? "Bem-vindo de volta!" : "Por favor, faça login."}</h2>
  );
}

export default LoginStatus;
