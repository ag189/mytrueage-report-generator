import React from 'react';

interface PageFooterProps {
  text?: string;
}

export default function PageFooter({ text = '©myDNAge | Powered by GenePathDX' }: PageFooterProps) {
  return (
    <div className="page-footer">
      <span className="text-muted">{text}</span>
    </div>
  );
}
