import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Api } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({item, isDeleteEnabled}) => {
  const navigate = useNavigate();
  const {_id, nome, imagemURL } = item;

  const deleteItem = async () => {
    if (!confirm('Tem certeza de que deseja excluir esse item?')) {
      return;
    }

    const deleteURL = Api.items.delete(_id);
    const data = await Api.buildApiDeleteRequest(deleteURL);
    const res = await data.json();

    if (data.status === 200) {
      alert(res.message);
      navigate('/');
    } else {
      alert('Algum erro aconteceu! Tente novamente.')
    }
  };

  return (
    <div className="item-card">
      <div className="item-card-title">
        <div className="item-card-title-vbar" />
        <h1>{nome}</h1>
      </div>
      <img src={imagemURL} alt="Imagem do Item" />
      <FontAwesomeIcon
        style={{ display: isDeleteEnabled ? 'initial' : 'none' }}
        icon={faTrashCan}
        className="item-card-icon-delete"
        onClick={deleteItem}/> 
    </div>
  )
}

export default ItemCard;