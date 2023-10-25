function PerfilCard() {
  return (
    <div className="perfil-card">
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Foto do usuário"
        className="perfil-imagem"
        style={{ width: "100px" }}
      />
      <h2>Nome do Usuário</h2>
      <p>Esta é uma breve descrição do usuário.</p>
    </div>
  );
}

export default PerfilCard;
