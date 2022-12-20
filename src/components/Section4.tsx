import "../styles/section4.css";

const Section4 = () => {
  const Items: ItemType[] = [
    {
      quarter: 1,
      year: 2022,
      status: "completed",
      title: "MVP Launched on Testnet",
      description: `A functional version of BackedBy that allows creators to make profiles, mint $PROJECT tokens, setup tiers for membership access, and post content. Creators can also choose to list their $PROJECT tokens for sale. 
        Individuals interested in directly investing in creators can become Backers by buying $PROJECT tokens. Subscribers can then choose a membership tier for purchase to access content. 
        All revenue from membership purchases are distributed to $PROJECT token holders. All transactions are performed using the chain native token. `,
    },
    {
      quarter: 4,
      year: 2022,
      status: "scheduled",
      title: "Monitised Messaging",
      description: `Creators can choose to accept and monetize direct messages from fans`,
    },
    {
      quarter: 4,
      year: 2022,
      status: "scheduled",
      title: "Distributed File Storage",
      description: `All creator content encrypted and hosted on a distributed file storage service. Decentralized access control to content for membership NFT holders.`,
    },
    {
      quarter: 1,
      year: 2023,
      status: "scheduled",
      title: "Launch of version 1 on Mainnet",
      description: `All creator content encrypted and hosted on a distributed file storage service. Decentralized access control to content for membership NFT holders.`,
    },
    {
      quarter: 2,
      year: 2023,
      status: "scheduled",
      title: "Founding Creators Onboarded",
      description: `Outreact efforts focused on onboarding a diverse set of founding creators, representing the core of the BackedBy platform.`,
    },
  ];
  return (
    <div className="s4">
      <div className="header">
        <h4>Where are we going with this?</h4>
        <h1>The BackedBy Roadmap</h1>
      </div>
      <div className="items-container">
        {Items.map((item) => (
          <Item {...item} />
        ))}
      </div>
      <div className="btn-container">
        <button className="btn-primary">SIGN UP</button>
        <button className="btn-secondary">GET UPDATES</button>
      </div>
    </div>
  );
};

type ItemType = {
  quarter: number;
  year: number;
  status: "completed" | "scheduled";
  title: string;
  description: string;
};

export const Item = ({
  quarter,
  year,
  status,
  title,
  description,
}: ItemType) => {
  return (
    <div className="item">
      <div className="header">
        <div
          className={`timestamp timestamp-${
            status == "completed" ? "completed" : "scheduled"
          }`}
        >
          <h1>Q{quarter}</h1>
          <h3>{year}</h3>
        </div>
        <div className="title-bar">
          <h1 className="title">{title}</h1>
          <h4
            className={`status status-${
              status == "completed" ? "completed" : "scheduled"
            }`}
          >
            {status}
          </h4>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section4;
