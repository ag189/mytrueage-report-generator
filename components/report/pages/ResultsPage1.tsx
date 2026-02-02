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
    <PageWrapper pageNumber={3}>
      <PageHeader 
        title="Biological Age" 
        subtitle="Your Biological Age Assessment"
      />

      {/* Key Results - Magazine Feature Numbers */}
      <div className="comparison-block" style={{ margin: '18px 0' }}>
        <div className="comparison-item">
          <p className="result-label">Chronological Age</p>
          <p className="result-value" style={{ fontSize: '48pt' }}>{formatAge(data.chronologicalAge)}</p>
          <p className="result-description">Your calendar age in years</p>
        </div>
        
        <div className="comparison-item">
          <p className="result-label">Biological Age</p>
          <p className={`result-value ${metrics.isYounger ? 'positive' : 'negative'}`} style={{ fontSize: '48pt' }}>
            {formatAge(data.biologicalAge)}
          </p>
          <p className="result-description">Based on PCGrimAge analysis</p>
        </div>
      </div>

      {/* Key Finding - Minimal callout */}
      <div className={`callout-box ${metrics.isYounger ? 'success' : 'danger'}`} style={{ margin: '12px 0 16px' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11pt',
          fontWeight: 500,
          color: '#1a1a1a',
          margin: 0,
          lineHeight: 1.6
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

      {/* Chart Section */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '16px' }}>Age Comparison</h3>
        <BioAgeScatterPlot 
          chronologicalAge={data.chronologicalAge}
          biologicalAge={data.biologicalAge}
        />
        <p className="chart-caption">
          The diagonal represents where biological age equals chronological age
        </p>
      </div>
    </PageWrapper>
  );
}
