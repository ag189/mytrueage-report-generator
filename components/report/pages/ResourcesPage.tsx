import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';
import { Link2 } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <PageWrapper pageNumber={8}>
      <PageHeader
        title="Resources"
        subtitle="Communities, newsletters, and further reading"
        icon={Link2}
      />

      <div className="content-block">
        <p className="lead-text">
          Stay connected and keep learning. Join us and share the journey!
        </p>
      </div>

      <div className="callout-stack">
        <div className="callout-box callout-box-with-qr info">
          <div className="callout-box-content">
            <div className="callout-box-text">
              <h4>Join the Longevity Lab community.</h4>
              <p className="callout-text">
                Join a community of over 5,000 members to get access to live webinars,
                educational content, and more to keep learning about health.
              </p>
              <p className="callout-qr-cta">Scan the code to join the community</p>
            </div>
            <div className="callout-box-qr">
              <img src="/images/community-qr.gif" alt="Community QR code" className="callout-qr-image" />
            </div>
          </div>
        </div>

        <div className="callout-box callout-box-with-qr info">
          <div className="callout-box-content">
            <div className="callout-box-text">
              <h4>Subscribe to our newsletter</h4>
              <p className="callout-text">
                Get a weekly or bi-weekly insight delivered straight to your inbox about
                best practices, tips, and interpreting science-backed interventions that
                you can implement in daily life.
              </p>
              <p className="callout-qr-cta">Subscribe to join the newsletter</p>
            </div>
            <div className="callout-box-qr">
              <img src="/images/newsletter-qr.gif" alt="Newsletter QR code" className="callout-qr-image" />
            </div>
          </div>
        </div>

        <div className="callout-box callout-box-with-qr info">
          <div className="callout-box-content">
            <div className="callout-box-text">
              <h4>Join our menopause-focused care community.</h4>
              <p className="callout-text">
                Join our exclusive community of women to seek support for menopause or
                perimenopause. Connect with experts and peers, access tailored resources,
                and get guidance on symptoms, lifestyle adjustments, and care pathways.
              </p>
              <p className="callout-qr-cta">Scan the code to join the community</p>
            </div>
            <div className="callout-box-qr">
              <img src="/images/menopause-qr.gif" alt="Menopause community QR code" className="callout-qr-image" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
