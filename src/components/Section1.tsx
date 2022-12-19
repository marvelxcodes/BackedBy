import "../styles/section1.css";

const Section1 = () => {
  return (
    <section className="s1">
      <div className="card">
        <h1>Offer exclusive</h1>
        <span>
          <h1>content</h1>
          <h3 className="prop-1">powered <br/> by web3</h3>
        </span>
        <h3>
          <b>Offer your fans a monthly membership</b> for exclusive content with
          the power of web3
        </h3>
        <div className="btns">
          <button className="btn-primary" id="1">sign up</button>
          <button className="btn-secondary" id="2">learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
