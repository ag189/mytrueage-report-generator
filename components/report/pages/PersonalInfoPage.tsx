import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';
import { ReportData } from '@/types/report.types';
import { formatDate } from '@/lib/calculations';

interface PersonalInfoPageProps {
  data: ReportData;
}

export default function PersonalInfoPage({ data }: PersonalInfoPageProps) {
  return (
    <PageWrapper pageNumber={2}>
      <PageHeader title="Personal Information" />

      {/* Clean, minimal info rows */}
      <div style={{ marginTop: '48px' }}>
        <div className="info-row">
          <span className="info-label">Patient Name</span>
          <span className="info-value">{data.name}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Date of Birth</span>
          <span className="info-value">
            {formatDate(data.dateOfBirth)}
          </span>
        </div>

        <div className="info-row">
          <span className="info-label">Age</span>
          <span className="info-value">{data.age} years</span>
        </div>

        <div className="info-row">
          <span className="info-label">Gender</span>
          <span className="info-value">{data.gender}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Sample Type</span>
          <span className="info-value">{data.sampleType}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Kit ID</span>
          <span className="info-value">{data.kitId}</span>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" style={{ marginTop: '56px' }}></div>

      {/* Report metadata */}
      <div style={{ marginTop: '32px' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '9pt',
          fontWeight: 500,
          color: '#6b6b6b',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px'
        }}>
          Report Generated
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11pt',
          fontWeight: 400,
          color: '#3d3d3d'
        }}>
          {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </PageWrapper>
  );
}
