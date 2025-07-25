import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import DetailFashion from "../DetailProduct/DetailFashion";
import DetailProducts from '../DetailProduct/DetailProducts';

const DetailPage = () => {
  const params = useParams();
  const state = useContext(GlobalState);

  const [products] = state.productAPI.products;
  const [fashions] = state.fashionAPI.fashions;

  const [detailData, setDetailData] = useState(null);
  const [type, setType] = useState(''); // 'product' or 'fashion'

  useEffect(() => {
    const foundProduct = products.find(prod => prod._id === params.id);
    const foundFashion = fashions.find(fash => fash._id === params.id);

    if (foundProduct) {
      setDetailData(foundProduct);
      setType('product');
    } else if (foundFashion) {
      setDetailData(foundFashion);
      setType('fashion');
    }
  }, [params.id, products, fashions]);

  if (!detailData) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  return (
    <>
      {type === 'product' ? (
        <DetailProducts product={detailData} />
      ) : (
        <DetailFashion fashion={detailData} />
      )}
    </>
  );
};

export default DetailPage;
