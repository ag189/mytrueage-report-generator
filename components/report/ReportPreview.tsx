'use client';

import React from 'react';
import { ReportData } from '@/types/report.types';
import { calculateMetrics } from '@/lib/calculations';
import CoverPage from './pages/CoverPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import ResultsPage1 from './pages/ResultsPage1';
import ResultsPage2 from './pages/ResultsPage2';
import UnderstandingResultsPage from './pages/UnderstandingResultsPage';
import SciencePage from './pages/SciencePage';
import RecommendationsPage from './pages/RecommendationsPage';
import FaqPage from './pages/FaqPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ReferencesPage from './pages/ReferencesPage';
import '@/styles/report.css';

interface ReportPreviewProps {
  data: ReportData;
}

export default function ReportPreview({ data }: ReportPreviewProps) {
  const metrics = calculateMetrics(data);

  return (
    <div className="report-preview-container">
      <div className="report-pages-wrapper">
        <CoverPage data={data} />
        <PersonalInfoPage data={data} />
        <ResultsPage1 data={data} metrics={metrics} />
        <ResultsPage2 data={data} metrics={metrics} />
        <UnderstandingResultsPage />
        <SciencePage />
        <RecommendationsPage />
        <FaqPage />
        <DisclaimerPage />
        <ReferencesPage />
      </div>
    </div>
  );
}
