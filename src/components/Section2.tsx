import Video from "../assets/videoprop";
import "../styles/section2.css";

const Section2 = () => {
  return (
    <section className="s2">
      <div className="div-1">
        <div className="text-sec">
          <h2>A little bit about us</h2>
          <h1>What is BackedBy?</h1>
          <p>
            BackedBy is a decentralized, independent payment platform made to
            empower creators!
          </p>
          <p>
            BackedBy uses the power of web3 to give creators a way to post
            exclusive content for members directly collect payment from their
            audience through the sale of menbership NFTs.
          </p>
        </div>
        <div className="vid-sec">
          <div className="vid-container">
            <h4>WATCH THE VIDEO</h4>
            <Video />
          </div>
        </div>
      </div>
      <div className="div-2">
        <div className="feature">
          <h3>Fund</h3>
          <p>your work through community invesment</p>
        </div>
        <div className="feature">
          <h3>Earn</h3>
          <p>from a recurring income stream</p>
        </div>
        <div className="feature">
          <h3>Own</h3>
          <p>your content platform</p>
        </div>
      </div>
      <div className="div-3">
        <button className="btn-primary">SIGN UP</button>
        <button className="btn-secondary">LEARN MORE</button>
      </div>
    </section>
  );
};

export default Section2;
