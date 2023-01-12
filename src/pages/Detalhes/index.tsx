import { useEffect, useState } from 'react';
import stylesTema from 'styles/Tema.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from 'types/IUser';
import axios from 'axios';
import Geral from './Geral';
import Endereco from './Endereco';
import PreLoader from 'components/PreLoader';

export default function Detalhes() {
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const [usuario, setUsuario] = useState<IUser>();
  const navigate = useNavigate();

  const [nomeCompleto, setNomeCompleto] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  const [cep, setCep] = useState<string>('');
  const [rua, setRua] = useState<string>('');
  const [numero, setNumero] = useState<Number>(0);
  const [cidade, setCidade] = useState<string>('');

  const setarStatesUsuario = () => {
    setEmail(usuario?.email ? usuario.email : '');
    setUsername(usuario?.username ? usuario.username : '');
    setSenha(usuario?.password ? usuario.password : '');
    setTelefone(usuario?.phone ? usuario.phone: '');

    setCep(usuario?.address.zipcode ? usuario.address.zipcode : '');
    setRua(usuario?.address.street ? usuario.address.street : '');
    setNumero(usuario?.address.number ? usuario.address.number : 0);
    setCidade(usuario?.address.city ? usuario.address.city : '');
    
    let nomeComp = usuario?.name.firstname + ' ' + usuario?.name.lastname;
    setNomeCompleto(nomeComp);
  };

  useEffect(() => {
    const getUser = async () => {
      axios.get<IUser>(`https://fakestoreapi.com/users/${id}`)
      .then(r => {
        console.log(r);

        setUsuario(r.data);
        setarStatesUsuario();
        setLoading(false);
      })
      .catch(e => console.log(e))
    };

    if (id) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [usuario?.id]);

  const salvarUsuario = () => {
    const saveUser = async () => {
      let nome = nomeCompleto?.split(' ');

      if (!nome) {
        return;
      }

      const json = {
        email: email,
        username: username,
        password: senha,
        name: {
          firstname: nome[0],
          lastname: nome[1]
        },
        address: {
          city: cidade,
          street: rua,
          number: numero,
          zipcode: cep,
          geolocation: {
            lat: '',
            long: ''
          }
        },
        phone: telefone
      };

      if (id) {
        axios.put(`https://fakestoreapi.com/users/${id}`, json)
          .then(r => {
            console.log(r);

            navigate('/usuarios');
          })
          .catch(e => console.log(e))
      } else {
        axios.post('https://fakestoreapi.com/users', json)
          .then(r => {
            console.log(r);

            navigate(`/detalhes/${r.data.id}`);
          })
          .catch(e => console.log(e))
      }
    };

    saveUser();
  };

  const excluirUsuario = () => {
    const deleteUser = async () => {
      axios.delete<IUser>(`https://fakestoreapi.com/users/${id}`)
      .then(r => {
        console.log(r);

        setUsuario(undefined);
        setarStatesUsuario();
        navigate('/usuarios');
      })
      .catch(e => console.log(e))
    };

    deleteUser();
  };

  if (loading) {
    return (
      <div>
        <PreLoader />
      </div>
    );
  }

  return (
    <section>
      <div className={stylesTema.voltar}>
        <h2
          className={stylesTema.voltar__texto}
          onClick={() => navigate(-1)}
        >
          {'< Voltar'}
        </h2>
        <button
          type='button'
          id='cadastrar'
          name='cadastrar'
          className={stylesTema.voltar__botao__salvar}
          onClick={() => salvarUsuario()}
        >
          Salvar
        </button>
        <button
          type='button'
          id='excluir'
          name='excluir'
          style={{
            display: id ? 'block' : 'none'
          }}
          className={stylesTema.voltar__botao__excluir}
          onClick={() => excluirUsuario()}
        >
          Excluir
        </button>
      </div>
      <div className={stylesTema.container}>
        <Geral 
          nomeCompleto={nomeCompleto}
          setNomeCompleto={setNomeCompleto}
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          senha={senha}
          setSenha={setSenha}
          telefone={telefone}
          setTelefone={setTelefone}
        />
        <Endereco
          cep={cep}
          setCep={setCep}
          rua={rua}
          setRua={setRua}
          numero={numero}
          setNumero={setNumero}
          cidade={cidade}
          setCidade={setCidade}
        />
      </div>
    </section>
  );
}