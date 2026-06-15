import fs from 'fs';
import path from 'path';
import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

if (process.env.VERCEL === '1') {
  console.log('Skipping Puppeteer prerender on Vercel; SPA routes use the index.html rewrite.');
  process.exit(0);
}

/**
 * Convert camelCase and PascalCase to kebab-case
 */
const camelToKebab = (str) => {
  // Insert hyphen before uppercase letters, but handle consecutive uppercase (acronyms)
  let result = str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase boundaries
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2') // ACRONYM boundaries
    .toLowerCase()
    .replace(/^-+/, ''); // Remove leading hyphens
  return result;
};

/**
 * Map special cases that don't follow naming conventions
 */
const specialCaseRoutes = {
  'ContactUs': 'contact',
  'SOPAudits': 'sop-audits',
  'PrivacyPolicy': 'privacy-policy',
  'CareerProgression': 'career-progression',
  'RewardsRecognition': 'rewards-recognition',
  'MobileLearning': 'mobile-learning',
  'SelfLearning': 'self-learning',
  'SeamlessTraining': 'seamless-training',
  'ContentEngine': 'content-engine',
  'BuilderLab': 'builder-lab',
  'LighthouseProgram': 'lighthouse-program',
  'QSRRetail': 'qsr-cloud-kitchens',
};

const getRouteName = (componentName) => {
  // Check for special cases first
  if (specialCaseRoutes[componentName]) {
    return specialCaseRoutes[componentName];
  }
  // Default: convert camelCase to kebab-case
  return camelToKebab(componentName);
};

/**
 * Recursively scan src/pages and generate routes
 */
const discoverRoutes = () => {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const routes = [];

  const walk = (dir, prefix = '') => {
    if (!fs.existsSync(dir)) {
      console.warn(`Pages directory not found: ${dir}`);
      return;
    }

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively walk subdirectories (industries/, features/, use-cases/)
        walk(fullPath, prefix ? `${prefix}/${file}` : `/${file}`);
      } else if (file.endsWith('.tsx') && !file.startsWith('.')) {
        // Extract component name and convert to route
        const componentName = file.replace('.tsx', '');

        // Skip non-page files (e.g., Features.tsx is just a layout, not a page)
        if (componentName === 'Features') return;

        let route;
        if (componentName === 'Home') {
          route = '/';
        } else if (prefix) {
          // Has a directory prefix (e.g., /industries, /features, /use-cases)
          route = `${prefix}/${getRouteName(componentName)}`;
        } else {
          // Top-level page file
          route = `/${getRouteName(componentName)}`;
        }

        routes.push(route);
      }
    });
  };

  walk(pagesDir);
  return routes.sort();
};

const routes = discoverRoutes();

const distDir = path.join(process.cwd(), 'dist');
const prerenderer = new Prerenderer({
  staticDir: distDir,
  renderer: new PuppeteerRenderer({ headless: true }),
});

const writeRoute = (route, html) => {
  const routePath = route === '/' ? '' : route.replace(/^\//, '');
  const outputDir = path.join(distDir, routePath);
  const outputPath = path.join(outputDir, 'index.html');

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, html.trim(), 'utf8');
};

const run = async () => {
  try {
    console.log(`🔍 Discovered ${routes.length} routes to prerender:`);
    routes.forEach(route => console.log(`   - ${route}`));
    
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);
    renderedRoutes.forEach((renderedRoute) => writeRoute(renderedRoute.route, renderedRoute.html));
    console.log(`\n✅ Prerendered ${renderedRoutes.length} routes to ${distDir}`);
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    process.exit(1);
  } finally {
    prerenderer.destroy();
  }
};

run();
