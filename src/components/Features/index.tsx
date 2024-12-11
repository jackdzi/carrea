"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { Fade } from "react-awesome-reveal";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-screen-md">
          <Fade>
            <SectionTitle
              title="Divisions of the Club"
              paragraph="To get a car on the road, it takes an effort from many students, across many disciplines."
              center
            />
          </Fade>
            <Fade>
          <div className="grid grid-cols-1 place-items-center gap-x-28 gap-y-10 md:grid-cols-2">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
          </div>
            </Fade>
        </div>
      </section>
    </>
  );
};

export default Features;
