import React from 'react';

interface PageFooterProps {
  text?: string;
}

export default function PageFooter({ text = 'myTrueAge Report | Powered by GENESSENSE & MEDGENOME' }: PageFooterProps) {
  return (
    <div className="page-footer">
      {text}
    </div>
  );
}
