import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Example2 = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`
      );
      setItems((prevItems) => [...prevItems, ...response.data]);
      setIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className='container'>
      <div className='row'>
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Example2;
