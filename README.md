# myTrueAge Report Generator

A Next.js application for generating professional biological aging test reports with PDF export functionality.

## Features

- ✅ Data entry form with validation
- ✅ Real-time age calculation from DOB
- ✅ Live HTML preview of report
- ✅ Beautiful charts (scatter plot & gauge)
- ✅ PDF generation with Puppeteer
- ✅ Responsive design
- ✅ Professional styling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: Puppeteer
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mytrueage-report-generator
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
mytrueage-report-generator/
├── app/
│   ├── page.tsx                          # Main page with form/preview toggle
│   ├── preview/page.tsx                  # Standalone preview page
│   ├── layout.tsx                        # Root layout
│   ├── globals.css                       # Global styles
│   └── api/
│       └── generate-pdf/
│           └── route.ts                  # PDF generation API endpoint
│
├── components/
│   ├── forms/
│   │   └── DataEntryForm.tsx            # Main input form
│   │
│   └── report/
│       ├── ReportPreview.tsx            # Full report preview wrapper
│       │
│       ├── pages/
│       │   ├── CoverPage.tsx            # Page 1: Cover
│       │   ├── PersonalInfoPage.tsx     # Page 2: Personal details
│       │   ├── ResultsPage1.tsx         # Page 3: Bio Age results
│       │   └── ResultsPage2.tsx         # Page 4: Pace of Aging
│       │
│       ├── charts/
│       │   ├── BioAgeScatterPlot.tsx    # Scatter plot chart
│       │   └── PaceOfAgingGauge.tsx     # Speedometer gauge
│       │
│       └── layout/
│           ├── PageHeader.tsx           # Reusable page header
│           ├── PageFooter.tsx           # Reusable page footer
│           └── PageWrapper.tsx          # Standard page container
│
├── lib/
│   ├── calculations.ts                  # Age & metrics calculations
│   └── formatters.ts                    # Formatting utilities
│
├── types/
│   └── report.types.ts                  # TypeScript interfaces
│
├── public/
│   ├── images/                          # 📁 DROP YOUR IMAGES HERE
│   │   └── README.md                    # Instructions for images
│   │
│   └── icons/                           # 📁 DROP YOUR ICONS HERE
│       ├── diet/
│       ├── supplements/
│       └── lifestyle/
│
└── styles/
    └── report.css                       # PDF-specific styles
```

## Image Assets

### Where to Add Your Images

All image assets should be placed in the `public/` folder:

#### Main Images
Place in `public/images/`:
- `cover-graphic.jpg` - Cover page hero image (aging stages)
- `dna-methylation.svg` - DNA illustration
- `logo.svg` - GENESSENSE/MEDGENOME logo

#### Icons
Place in respective folders under `public/icons/`:

**Diet icons** (`public/icons/diet/`):
- grain.svg, vegetables.svg, protein.svg, fish.svg, beverage.svg, ketogenic.svg

**Supplement icons** (`public/icons/supplements/`):
- omega3.svg, probiotics.svg, vitamins.svg, minerals.svg

**Lifestyle icons** (`public/icons/lifestyle/`):
- meditation.svg, sleep.svg, exercise.svg

### Using Images in Components

```tsx
import Image from 'next/image';

// Example usage
<Image 
  src="/images/logo.svg" 
  alt="Logo" 
  width={200} 
  height={100} 
/>
```

## Current MVP Features (Pages 1-4)

The current implementation includes:

1. **Cover Page** - Branding and title
2. **Personal Information Page** - Patient details with icons
3. **Results Page 1** - Biological Age with scatter plot
4. **Results Page 2** - Pace of Aging with gauge chart

## Adding More Pages

To add additional pages (5-13 as per PRD):

1. Create new page component in `components/report/pages/`
2. Import and add to `ReportPreview.tsx`
3. Use existing layout components for consistency

Example:
```tsx
// components/report/pages/IntroductionPage.tsx
import PageWrapper from '../layout/PageWrapper';
import PageHeader from '../layout/PageHeader';

export default function IntroductionPage() {
  return (
    <PageWrapper pageNumber={5}>
      <PageHeader title="Introduction to Biological Age" />
      {/* Your content here */}
    </PageWrapper>
  );
}
```

## PDF Generation

The app uses Puppeteer to generate PDFs. The process:

1. User fills form → clicks "Preview Report"
2. Preview renders in browser
3. User clicks "Download PDF"
4. API route launches Puppeteer
5. Puppeteer navigates to preview page
6. PDF generated and downloaded

### PDF Generation Notes

- Default timeout: 60 seconds
- Charts rendered via client-side components
- Background colors/images included
- A4 format (210mm × 297mm)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables if needed
4. Deploy

**Important for Vercel**: Add `vercel.json` for longer function timeout:

```json
{
  "functions": {
    "app/api/generate-pdf/route.ts": {
      "maxDuration": 60
    }
  }
}
```

### Environment Variables

For production, you may need:

```env
VERCEL_URL=your-deployment-url.vercel.app
```

## Sample Data for Testing

Use these values to test the application:

- **Name**: John Doe
- **Date of Birth**: 1953-06-15
- **Gender**: Male
- **Sample Type**: EDTA Blood
- **Kit ID**: KIT123456
- **Chronological Age**: 70.56
- **Biological Age**: 67.26
- **DunedinPACE**: 1.001

## Customization

### Colors

Edit CSS variables in `styles/report.css`:

```css
:root {
  --primary-blue: #1e40af;
  --light-blue: #3b82f6;
  --orange: #f97316;
  --green: #22c55e;
  /* ... */
}
```

### Typography

Modify in `styles/report.css` under the Typography section.

## Troubleshooting

### Puppeteer Issues

If PDF generation fails:

1. **Local Development**: Ensure Chrome/Chromium is installed
2. **Production**: Use `chrome-aws-lambda` for serverless

```bash
npm install chrome-aws-lambda
```

### Chart Not Rendering

- Ensure `'use client'` directive is at top of chart components
- Check browser console for errors
- Verify Recharts is installed

## License

Proprietary - GENESSENSE & MEDGENOME

## Support

For issues or questions, contact the development team.
