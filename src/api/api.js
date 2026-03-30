import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function DataFetcher() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/data/products.json')
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { products, loading }
}

export default DataFetcher


export function useFetchData() {
    const [toolData, setToolData] = useState([])
     const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('/data/tool.json');
            setToolData(res.data);
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);
    
    return { toolData, loading };
}