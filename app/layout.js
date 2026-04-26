import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';
import './globals.css';

export const metadata = {
  title: 'Atreides | Maritime Digital Twin & Sensor Intelligence',
  description:
    'A maritime digital twin platform that combines non-intrusive sensors, live vessel telemetry, and predictive analytics to reduce failures, cut claims, and improve fleet performance.',
  keywords: [
    'maritime digital twin',
    'predictive maintenance',
    'fleet intelligence',
    'sensor platform',
    'marine analytics',
  ],
  openGraph: {
    title: 'Atreides | Maritime Digital Twin & Sensor Intelligence',
    description:
      'Non-intrusive awareness for safer vessels, sharper underwriting, and fleet-wide operational intelligence.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atreides | Maritime Digital Twin & Sensor Intelligence',
    description:
      'Live vessel twins, non-intrusive sensors, and predictive intelligence for modern fleets.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
