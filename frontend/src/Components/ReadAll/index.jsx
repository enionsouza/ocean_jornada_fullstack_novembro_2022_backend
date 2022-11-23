import ItemCard from '../ItemCard';
import './style.css';

const ReadAll = () => {
  const items = [
    {
      _id: "1",
      nome: "Item 1",
      imagemURL: "https://picsum.photos/250/200"
    },
    {
      _id: "2",
      nome: "Item 2",
      imagemURL: "https://picsum.photos/250/201"
    },
    {
      _id: "3",
      nome: "Item 3",
      imagemURL: "https://picsum.photos/251/200"
    },
    {
      _id: "4",
      nome: "Item 4",
      imagemURL: "https://picsum.photos/251/201"
    },
  ];

  return (
    <div className="read-all">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
    
  )
}

export default ReadAll;