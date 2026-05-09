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
import QSR from "./pages/industries/QSR";
import Supermarkets from "./pages/industries/Supermarkets";
import Delivery from "./pages/industries/Delivery";
import BPO from "./pages/industries/BPO";
import Finance from "./pages/industries/Finance";
import Hospitality from "./pages/industries/Hospitality";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/features/career-progression" element={<CareerProgression />} />
          <Route path="/features/sop-audits" element={<SOPAudits />} />
          <Route path="/features/rewards-recognition" element={<RewardsRecognition />} />
          <Route path="/features/ticketing" element={<Ticketing />} />
          <Route path="/mobile-learning" element={<MobileLearning />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/features/self-learning" element={<SelfLearning />} />
          <Route path="/features/seamless-training" element={<SeamlessTraining />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/qsr-cloud-kitchens" element={<QSR />} />
          <Route path="/industries/supermarkets-grocery" element={<Supermarkets />} />
          <Route path="/industries/delivery-partners" element={<Delivery />} />
          <Route path="/industries/bpo-contact-centres" element={<BPO />} />
          <Route path="/industries/insurance-banking" element={<Finance />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
        </Routes>
      </Layout>
    </Router>
  );
}
