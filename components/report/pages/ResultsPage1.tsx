import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';
import BioAgeScatterPlot from '../charts/BioAgeScatterPlot';
import { ReportData, CalculatedMetrics } from '@/types/report.types';
import { formatAge } from '@/lib/calculations';

interface ResultsPage1Props {
  data: ReportData;
  metrics: CalculatedMetrics;
}

export default function ResultsPage1({ data, metrics }: ResultsPage1Props) {
  const comparisonYears = Math.abs(metrics.ageDifference);
  const comparisonPercent = Math.abs(metrics.percentDifference).toFixed(1);

  return (
    <PageWrapper pageNumber={3} className="bio-age-page">
      <PageHeader 
        title="Biological Age" 
        subtitle="Your Biological Age Assessment"
      />

      <div className="bio-age-layout">
        <div className="bio-age-summary">
          {/* Key Results - Compact Feature Numbers */}
          <div className="comparison-block">
            <div className="comparison-item">
              <p className="result-label">Chronological Age</p>
              <p className="result-value" style={{ fontSize: '42pt' }}>{formatAge(data.chronologicalAge)}</p>
              <p className="result-description" style={{ fontSize: '9pt', marginTop: '6px' }}>Your calendar age</p>
            </div>
            
            <div className="comparison-item">
              <p className="result-label">Biological Age</p>
              <p className={`result-value ${metrics.isYounger ? 'positive' : 'negative'}`} style={{ fontSize: '42pt' }}>
                {formatAge(data.biologicalAge)}
              </p>
              <p className="result-description" style={{ fontSize: '9pt', marginTop: '6px' }}>Based on PCGrimAge</p>
            </div>
          </div>

          {/* Key Finding - Compact callout */}
          <div className={`callout-box ${metrics.isYounger ? 'success' : 'danger'}`}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10.5pt',
              fontWeight: 500,
              color: '#1a1a1a',
              margin: 0,
              lineHeight: 1.5
            }}>
              You are{' '}
              <span style={{ 
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600 
              }}>
                {comparisonYears} years ({comparisonPercent}%) {metrics.isYounger ? 'younger' : 'older'}
              </span>
              {' '}than your chronological age
            </p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bio-age-chart">
          <h3 className="bio-age-chart-title">Age Comparison Chart</h3>
          <BioAgeScatterPlot 
            chronologicalAge={data.chronologicalAge}
            biologicalAge={data.biologicalAge}
          />
          <p className="chart-caption">
            Your biological age compared to the reference population
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
