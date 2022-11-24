import { useNavigate } from 'react-router-dom';
import { Api } from '../../api/api';
import './style.css';

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const imagemURL = e.target.imagemURL.value;

    const payload = {nome, imagemURL};

    const postData = async () => {
      const postURL = Api.items.create();
      const data = await Api.buildApiPostRequest(postURL, payload);
      if (data.status === 200) {
        navigate('/');
      } else {
        alert("Algum erro aconteceu na criação do item. Por favor, tente novamente.");
      }
    }

    postData();

  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">
            Nome: 
            <input type="text" id="nome" />
          </label>
        </div>
        <div>
          <label htmlFor="imagemURL">
            URL da imagem: 
            <input type="text" id="imagemURL" />
          </label>
        </div>
        <div>
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  );
}

export default Create;