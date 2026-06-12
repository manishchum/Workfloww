/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Onboarding from "./pages/Onboarding";
import CareerProgression from "./pages/CareerProgression";
import SOPAudits from "./pages/SOPAudits";
import RewardsRecognition from "./pages/RewardsRecognition";
import Ticketing from "./pages/Ticketing";
import MobileLearning from "./pages/MobileLearning";
import Communication from "./pages/Communication";
import SelfLearning from "./pages/SelfLearning";
import SeamlessTraining from "./pages/SeamlessTraining";
import Retail from "./pages/industries/Retail";
import QSRRetail from "./pages/industries/QSRRetail";
import FMCG from "./pages/industries/FMCG";
import Supermarkets from "./pages/industries/Supermarkets";
import Delivery from "./pages/industries/Delivery";
import BPO from "./pages/industries/BPO";
import Finance from "./pages/industries/Finance";
import Hospitality from "./pages/industries/Hospitality";
import ManufacturingIndustrial from "./pages/industries/ManufacturingIndustrial";
import Contact from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CEO from "./pages/use-cases/CEO";
import CHRO from "./pages/use-cases/CHRO";
import SalesHead from "./pages/use-cases/SalesHead";
import OperationsHead from "./pages/use-cases/OperationsHead";
import SalesTeam from "./pages/features/SalesTeam";
import SalesTool from "./pages/features/SalesTool";
import Execution from "./pages/features/Execution";
import ContentEngine from "./pages/ContentEngine";
import BuilderLab from "./pages/BuilderLab";
import LighthouseProgram from "./pages/LighthouseProgram";
import Pricing from "./pages/Pricing";
import Analytics from "./Analytics";
import AiMetamind from "./pages/AiMetamind";

export default function App() {
  return (
    <Router>
      <Analytics />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/features/career-progression" element={<CareerProgression />} />
          <Route path="/features/sop-audits" element={<SOPAudits />} />
          <Route path="/features/rewards-recognition" element={<RewardsRecognition />} />
          <Route path="/features/ticketing" element={<Ticketing />} />
          <Route path="/mobile-learning" element={<MobileLearning />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/features/self-learning" element={<SelfLearning />} />
          <Route path="/features/seamless-training" element={<SeamlessTraining />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/qsr-cloud-kitchens" element={<QSRRetail />} />
          <Route path="/industries/fmcg-beverages" element={<FMCG />} />
          <Route path="/industries/supermarkets-grocery" element={<Supermarkets />} />
          <Route path="/industries/delivery-partners" element={<Delivery />} />
          <Route path="/industries/bpo-contact-centres" element={<BPO />} />
          <Route path="/industries/insurance-banking" element={<Finance />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/industries/manufacturing-industrial" element={<ManufacturingIndustrial />} />
          <Route path="/use-cases/ceo" element={<CEO />} />
          <Route path="/use-cases/chro" element={<CHRO />} />
          <Route path="/use-cases/sales-head" element={<SalesHead />} />
          <Route path="/use-cases/operations-head" element={<OperationsHead />} />
          <Route path="/features/sales-team" element={<SalesTeam />} />
          <Route path="/features/sales-tool" element={<SalesTool />} />
          <Route path="/features/execution" element={<Execution />} />
          <Route path="/features/content-engine" element={<ContentEngine />} />
          <Route path="/builder-lab" element={<BuilderLab />} />
          <Route path="/lighthouse-program" element={<LighthouseProgram />} />
          <Route path="/ai-metamind" element={<AiMetamind />} />
        </Routes>
      </Layout>
    </Router>
  );
}
