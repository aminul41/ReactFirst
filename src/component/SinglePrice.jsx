import "./BioData.css";
function SinglePrice(obj) {
  return (
    <article className="card__content grid">
      <div className="card__pricing">
        <div className="card__pricing-number">
          <span className="card__pricing-symbol">$</span>
          {obj.planPrice}
        </div>
        <span className="card__pricing-month">/month</span>
      </div>
      <header className="card__header">
        <div className="card__header-circle grid">
          <img
            src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/free-coin.png"
            alt=""
            className="card__header-img"
          />
        </div>

        <span className="card__header-subtitle">{obj.planSubTitle}</span>
        <h1 className="card__header-title">{obj.planTitle}</h1>
      </header>
      {obj?.feature && (
        <ul className="card__list grid">
          {obj?.feature?.map((el) => {
            return (
              <li className="card__list-item" key={el}>
                <i className="uil uil-check card__list-icon"></i>
                <p className="card__list-description">{el}</p>
              </li>
            );
          })}
        </ul>
      )}
      <button className="card__button">Choose this plan</button>
    </article>
  );
}
export default SinglePrice;
