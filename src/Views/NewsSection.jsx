import React, {useEffect} from "react";
import NewsCard from "../Components/NewsCard";
import image1 from "../Assets/Images/GroupOverview.jpeg";
import image2 from "../Assets/Images/ceo-image.jpeg";
import backgroundImage from "../Assets/Images/aboutcompanyimage.jpg";

const NewsSection = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const newsList = [
    {
      image: image1,
      title: "RBI removes PCA restrictions on UCO Bank",
      description:
        "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India ...",
    },
    {
      image: image2,
      title: "Microsoft acquires video creation and editing tool",
      description:
        "Video editing software may become the next big addition to Microsoft’s suite of productivity tools...",
    },
    {
      image: image1,
      title: "RBI removes PCA restrictions on UCO Bank",
      description:
        "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India ...",
    },
    {
      image: image2,
      title: "Microsoft acquires video creation and editing tool",
      description:
        "Video editing software may become the next big addition to Microsoft’s suite of productivity tools...",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/80 h-[110vh]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold text-center">News</h1>
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsList.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              onClick={() => console.log(`Read more about: ${news.title}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsSection;
