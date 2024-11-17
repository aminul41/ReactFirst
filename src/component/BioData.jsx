import SinglePrice from "./SinglePrice.jsx";
function BioData(obj) {
  return (
    <>
      <section className="card container grid">
        <div className="card__container grid">
          <SinglePrice
            planTitle="Basic"
            planSubTitle="Free"
            planPrice={0}
            feature={[
              "3 user request",
              "10 downloads por day",
              "Daily content updates",
              "Fully editable files",
            ]}
          />
          <SinglePrice
            planTitle="Professional"
            planSubTitle="Most popular"
            planPrice={19}
            feature={[
              "100 user request",
              "Unlimited downloads",
              "Unlock all features from our site",
              "Daily content updates",
            ]}
          />
        </div>
      </section>
      <div className="bio_data">
        <h1>Our Country {obj.country}</h1>
        <h3>My name {obj.name}</h3>
        <h4>My age {obj.age}</h4>
      </div>
    </>
  );
}
export default BioData;
