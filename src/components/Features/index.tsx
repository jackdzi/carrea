import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-screen-md">
          <SectionTitle
            title="Divisions of the Club"
            paragraph="To get a car on the road, it takes an effort from many students, across many disciplines."
            center
          />

          <div className="grid grid-cols-1 gap-x-28 gap-y-10 md:grid-cols-2 place-items-center">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
