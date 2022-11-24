import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../api/api';
import ItemCard from '../ItemCard';
import './style.css';

const ReadAll = () => {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const readAllURL = Api.items.readAll();
      const data = await Api.buildApiGetRequest(readAllURL);
      const apiItems = await data.json();
      setItems(apiItems);
    }
    fetchData();
    return () => {}
  }, []);

  return items && (
    <div className="read-all">
      {items.map((item) => (
        <div
          key={item._id}
          className="item-card-clickable"
          onClick={() => navigate(`visualizar/${item._id}`)}
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default ReadAll;