import React, { use } from 'react';
import FeatureCard from './FeatureCard';

const Feature = ({ feature }) => {
  const featureData = use(feature);
  return (
    <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch">
      {
        featureData.map(card => <FeatureCard key={card.id} card={card}></FeatureCard>)
    }
    </div>
  );
};

export default Feature;