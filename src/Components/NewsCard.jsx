import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();
  return (
    <div className="">
      <div className="border-2 border-base-200  rounded-lg my-6">
        <div className="border-box rounded-lg bg-base-200 p-3 w-full">
          <div className="flex gap-3 ">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={author.img}
              alt=""
            />
            <div>
              <p className="font-bold">{author.name}</p>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="font-bold my-4">{news.title}</h1>
          <img className="my-2 w-full" src={news.image_url} alt="" />
        </div>

        <div className="px-4 text-sm text-accen mb-4">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${news.id}`} className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
