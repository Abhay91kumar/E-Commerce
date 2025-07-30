import { useEffect, useState } from 'react';
import axios from 'axios';

const FashionAPI = () => {

    const [fashions, setFashions] = useState([]);

    const getFashions = async () => {
        try {
            const res = await axios.get('https://e-commerce-2-zt8t.onrender.com/api/fashion',{ withCredentials: true });
            // console.log('Fashion:', res.data);
            setFashions(res.data.fashions); 
        } catch (err) {
            console.error('Error fetching fashion data:', err);
        }
    }

    useEffect(() => {
        getFashions();
    }, []);

    return {
        fashions: [fashions, setFashions]
    };
}

export default FashionAPI;
