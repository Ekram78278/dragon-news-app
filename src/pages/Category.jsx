import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategory(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategory(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      console.log(filteredNews);
      setCategory(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="font-bold mb-5">
        {" "}
        Total <span className="text-secondary">{category.length}</span> news
        found{" "}
      </h2>
      <div className="grid grid-cols-1"></div>
      {category.map((news) => (
        <NewsCard key={news.id} news ={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
