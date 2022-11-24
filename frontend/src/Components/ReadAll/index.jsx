import { useEffect, useState } from 'react';
import { Api } from '../../api/api';
import ItemCard from '../ItemCard';
import './style.css';

const ReadAll = () => {
  const [items, setItems] = useState(null);

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
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default ReadAll;