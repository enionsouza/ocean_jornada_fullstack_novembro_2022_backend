import './style.css';

const ItemCard = ({item}) => {
  const {_id, nome, imagemURL} = item;
  return (
    <div className="item-card">
      <div className="item-card-title">
        <div className="item-card-title-vbar" />
        <h1>{nome}</h1>
      </div>
      <img src={imagemURL} alt="Imagem do Item" />
    </div>
  )
}

export default ItemCard;