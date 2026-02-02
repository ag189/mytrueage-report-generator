import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';

export default function SupplementsLifestylePage() {
  return (
    <PageWrapper pageNumber={8}>
      <PageHeader
        title="Recommendations | Supplements"
        subtitle="Targeted support for healthy aging"
      />

      <div className="two-column-text">
        <div>
          <p className="lead-text">
            Supplements can help address specific deficiencies and support healthy
            aging when aligned with your individual needs and lab results.
          </p>
          <div className="content-block">
            <h3>Key Supplements</h3>
            <p className="small-text mt-1">
              Supplementation should address deficiencies, not replace a healthy diet.
              Consult your doctor before starting a regimen.
            </p>
            <ul className="bullet-list">
              <li>Omega-3 (EPA/DHA): 1-2g daily for inflammation control</li>
              <li>Vitamin D: 1000-2000 IU daily based on blood levels</li>
              <li>B Vitamins (B6, B9, B12): support methylation and energy</li>
              <li>Magnesium: 300-400mg daily for metabolic balance</li>
              <li>Zinc: 15-30mg daily, do not exceed 40mg</li>
              <li>Vitamin C: 250-500mg daily for antioxidant support</li>
              <li>Probiotics: 1-2 times weekly for gut health</li>
              <li>Fiber supplement if daily intake is low</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="infographic-placeholder tall">Supplement Stack Overview</div>
        </div>
      </div>

      <div className="two-column-text">
        <div className="content-block">
          <h3>Stress Management</h3>
          <ul className="bullet-list">
            <li>Meditation: 10-20 minutes daily</li>
            <li>Deep breathing: 5-10 minutes to activate recovery</li>
            <li>Progressive muscle relaxation routines</li>
            <li>Time in nature: 20+ minutes in green spaces</li>
            <li>Social connection and professional support</li>
          </ul>
        </div>

        <div className="content-block">
          <h3>Toxin Avoidance</h3>
          <ul className="bullet-list">
            <li>Quit smoking and avoid secondhand smoke</li>
            <li>Limit alcohol to moderate levels</li>
            <li>Reduce exposure to air pollution and pesticides</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
