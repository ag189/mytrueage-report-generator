import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ReportData } from '@/types/report.types';

interface CoverPageProps {
  data: ReportData;
}

export default function CoverPage({ data }: CoverPageProps) {
  return (
    <PageWrapper className="cover-page" noPadding>
      <div className="cover-content">
        {/* Top Section - Image-backed hero */}
        <div className="cover-top">
          <div className="cover-hero-image" />
          <div className="cover-hero-blur" />
          <div className="cover-hero-overlay" />
          <div className="cover-hero-content">
            <div className="cover-card">
              <h1 className="cover-title">myTrueAge</h1>
              <p className="cover-subtitle">
                Scientific Insights to reverse the pace of aging
              </p>
              <div className="cover-powered-row">
                <p className="cover-powered">Powered by</p>
                <img className="cover-logo" src="/images/gp-logo.png" alt="GenePathDX" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Minimal footer */}
        <div className="cover-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '9pt',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                margin: 0
              }}>
                {data.name}'s Personal Health Report
              </p>
            </div>
            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '11pt',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.1em'
            }}>
              2026
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
