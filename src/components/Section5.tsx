import "../styles/section5.css";

const Section5 = () => {
  const Blogs: BlogType[] = [
    {
      title: "How can I become a banker?",
      timestamp: "07 JUN 2022",
      thumbnail: "/temp-blogthumb1.png",
    },
    {
      title: "How can I list my tokens for sale?",
      timestamp: "12 JUL 2022",
      thumbnail: "/temp-blogthumb2.png",
    },
    {
      title: "Is there an app for this?",
      timestamp: "07 JUN 2022",
      thumbnail: "/temp-blogthumb2.png",
    },
  ];
  return (
    <div className="s5">
      <div className="text-container">
        <h3>Learn more about the project</h3>
        <h1>The Official BackedBy Blog</h1>
      </div>
      <div className="blogs-container">
        {Blogs.map((blog) => (
          <Blog {...blog} />
        ))}
      </div>
      <div className="btn-container">
        <button className="btn-primary">SIGN UP</button>
        <button className="btn-secondary">MORE RESOURCE</button>
      </div>
    </div>
  );
};

type BlogType = {
  title: string;
  timestamp: string;
  thumbnail: string;
};

export const Blog = ({ title, timestamp, thumbnail }: BlogType) => {
  return (
    <div className="blog">
      <img className="thumbnail" src={thumbnail} alt={thumbnail} />
      <div className="about">
        <h3 className="timestamp">{timestamp}</h3>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Section5;
