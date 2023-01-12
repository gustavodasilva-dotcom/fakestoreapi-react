import stylesTema from 'styles/Tema.module.scss';

interface Props {
  nomeCompleto: string
  setNomeCompleto: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  senha: string
  setSenha: React.Dispatch<React.SetStateAction<string>>
  telefone: string
  setTelefone: React.Dispatch<React.SetStateAction<string>>
}

export default function Geral({
  nomeCompleto,
  setNomeCompleto,
  email,
  setEmail, 
  username,
  setUsername,
  senha,
  setSenha,
  telefone,
  setTelefone
}: Props) {
  return (
    <>
      <div className={stylesTema.container__titulo}>
        <h3>Geral</h3>
      </div>
      <div className={stylesTema.grupoInputs}>
        <div className={stylesTema.grupoInputs__coluna}>
          <input
            type='text'
            id='firstname'
            name='firstname'
            placeholder='Nome completo'
            value={nomeCompleto}
            onChange={e => setNomeCompleto(e.target.value)}
          />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='E-mail'
            value={email?.toUpperCase()}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={stylesTema.grupoInputs__coluna}>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Nome de usuário'
            value={username?.toUpperCase()}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Senha'
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>
        <div className={stylesTema.grupoInputs__coluna}>
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='Telefone'
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}