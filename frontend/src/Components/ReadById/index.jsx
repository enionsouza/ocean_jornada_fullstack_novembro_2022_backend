import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard";
import { Api } from '../../api/api';

const ReadById = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const readByIdURL = Api.items.readById(id);
      const data = await Api.buildApiGetRequest(readByIdURL);
      const apiItem = await data.json();
      setItem(apiItem);
    };
    fetchData();
  }, []);

  if (Object.keys(item).length === 0) {
    return <div>Carregando...</div>
  }

  return (
    <ItemCard item={item} />
  )
};

export default ReadById;