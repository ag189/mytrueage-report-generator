import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';

export default function SleepExercisePage() {
  return (
    <PageWrapper pageNumber={9}>
      <PageHeader
        title="Recommendations | Lifestyle"
        subtitle="Sleep & exercise essentials"
      />

      <div className="two-column-text">
        <div>
          <p className="lead-text">
            Sleep is a foundational pillar of health that is often overlooked, yet
            it is one of the most effective levers for improving energy, recovery,
            and long-term resilience.
          </p>
          <div className="content-block">
            <h3>Sleep: The Foundation</h3>
            <p className="mt-2">
              Adults need 7-9 hours of quality sleep. Chronic sleep deprivation
              accelerates aging, weakens immunity, and increases disease risk.
            </p>
            <ul className="bullet-list">
              <li>Consistent sleep and wake times</li>
              <li>Cool, dark, quiet sleep environment</li>
              <li>Avoid caffeine after 2pm</li>
              <li>Limit alcohol and late-night meals</li>
              <li>Reduce screen time 1 hour before bed</li>
            </ul>
          </div>

          <div className="content-block">
            <h3>Exercise: Move to Stay Young</h3>
            <p className="mt-2">
              Regular activity preserves cardiovascular health, muscle mass, and brain
              function. Choose a mix of aerobic, strength, and mobility work.
            </p>
            <ul className="bullet-list">
              <li>150-300 minutes of moderate activity per week</li>
              <li>Or 75-150 minutes of vigorous activity per week</li>
              <li>Strength training 2-3 sessions per week</li>
              <li>Flexibility and balance 2-3 sessions per week</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="infographic-placeholder tall">Sleep & Exercise Overview</div>
        </div>
      </div>
    </PageWrapper>
  );
}
