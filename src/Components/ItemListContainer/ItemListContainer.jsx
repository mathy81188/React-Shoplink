import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true); // control de estado de carga
  
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Cada vez que cambia el id, vuelve a cargar

    const collectionRef = id
      ? query(collection(db, "productos"), where("category", "==", id))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((response) => {
        const prodsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProds(prodsAdapted);
      })
      .catch((error) => {
        console.log("Error de Firebase:", error);
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga después de obtener los datos o en caso de error
      });

  }, [id]);

  return (
    <div className="container-ilc">
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
