import React from "react";

import InfoSections from "../../components/InfoSections/InfoSections";
import { homeObjFour, homeObjOne, homeObjThre, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <div>
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <InfoSections {...homeObjThre} />
      <InfoSections {...homeObjFour} />
    </div>
  );
};

export default Home;
