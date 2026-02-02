import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';
import { Apple } from 'lucide-react';

export default function DietPage() {
  return (
    <PageWrapper pageNumber={7}>
      <PageHeader
        title="Recommendations | Diet"
        subtitle="Nutritional shifts that slow biological aging"
        icon={Apple}
      />

      <div className="two-column-text">
        <div>
          <p className="lead-text">
            Your diet shapes inflammation, oxidative stress, mitochondrial function,
            and DNA repair. Small, consistent changes can lead to meaningful gains
            in biological aging.
          </p>

          <div className="content-block">
            <h3>Core Dietary Principles</h3>
            <ul className="bullet-list">
              <li>Choose whole grains over refined carbohydrates</li>
              <li>Prioritize plant-based proteins and lean fish</li>
              <li>Emphasize healthy fats like olive oil and nuts</li>
              <li>Load up on diverse vegetables and fruits</li>
              <li>Reduce sodium and increase potassium-rich foods</li>
              <li>Minimize added sugars and sweetened beverages</li>
              <li>Consider omega-3 supplementation if intake is low</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="infographic-placeholder tall">Plate Balance Guide</div>
          <div className="mt-3 infographic-grid">
            <div className="infographic-placeholder short">Whole Grains</div>
            <div className="infographic-placeholder short">Healthy Fats</div>
            <div className="infographic-placeholder short">Plant Protein</div>
            <div className="infographic-placeholder short">Colorful Produce</div>
          </div>
        </div>
      </div>

      <div className="two-column-text">
        <div className="content-block">
          <h3>What to Avoid</h3>
          <ul className="bullet-list">
            <li>Processed meats and deep-fried foods</li>
            <li>Sugary beverages and desserts</li>
            <li>Excess alcohol</li>
            <li>Trans fats in packaged baked goods</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
