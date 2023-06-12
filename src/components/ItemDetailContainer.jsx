import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import productos from "./json/products.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

 /*   useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = (productos.find(item => item.idx === parseInt(id)));
                resolve(producto);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        });
    },[id]);*/

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id])

    return (
        <>
            <ItemDetail producto={item}/>
        </>
    )
}

export default ItemDetailContainer;