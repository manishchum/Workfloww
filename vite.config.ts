import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const prerenderRoutes = [
  '/',
  '/about',
  '/pricing',
  '/onboarding',
  '/features/career-progression',
  '/features/sop-audits',
  '/features/rewards-recognition',
  '/features/ticketing',
  '/mobile-learning',
  '/communication',
  '/features/self-learning',
  '/features/seamless-training',
  '/contact',
  '/privacy-policy',
  '/industries/retail',
  '/industries/qsr-cloud-kitchens',
  '/industries/fmcg-beverages',
  '/industries/supermarkets-grocery',
  '/industries/delivery-partners',
  '/industries/bpo-contact-centres',
  '/industries/insurance-banking',
  '/industries/hospitality',
  '/industries/manufacturing-industrial',
  '/use-cases/ceo',
  '/use-cases/chro',
  '/use-cases/sales-head',
  '/use-cases/operations-head',
  '/features/sales-team',
  '/features/sales-tool',
  '/features/execution',
  '/features/content-engine',
  '/builder-lab',
  '/lighthouse-program',
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    optimizeDeps: {
      include: ['react-use', '@calcom/atoms']
    }
  };
});
