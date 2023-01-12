import stylesTema from 'styles/Tema.module.scss';

interface Props {
  cep: string
  setCep: React.Dispatch<React.SetStateAction<string>>
  rua: string
  setRua: React.Dispatch<React.SetStateAction<string>>
  numero: Number
  setNumero: React.Dispatch<React.SetStateAction<Number>>
  cidade: string
  setCidade: React.Dispatch<React.SetStateAction<string>>
}

export default function Endereco({
  cep,
  setCep,
  rua,
  setRua,
  numero,
  setNumero,
  cidade,
  setCidade
}: Props) {
  return (
    <>
      <div className={stylesTema.container__titulo}>
        <h3>Endereço</h3>
      </div>
      <div className={stylesTema.grupoInputs}>
        <div className={stylesTema.grupoInputs__coluna}>
          <input
            type='text'
            id='zipcode'
            name='zipcode'
            placeholder='Zip code'
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
          <input
            type='text'
            id='street'
            name='street'
            placeholder='Street'
            value={rua?.toUpperCase()}
            onChange={e => setRua(e.target.value)}
          />
        </div>
        <div className={stylesTema.grupoInputs__coluna}>
          <input
            type='number'
            id='number'
            name='number'
            placeholder='Number'
            value={String(numero)}
            onChange={e => setNumero(Number(e.target.value))}
          />
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City'
            value={cidade?.toUpperCase()}
            onChange={e => setCidade(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}