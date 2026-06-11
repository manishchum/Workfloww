import type { RouteObject } from "react-router-dom";
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

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/pricing",
    element: <Layout><Pricing /></Layout>,
  },
  {
    path: "/onboarding",
    element: <Layout><Onboarding /></Layout>,
  },
  {
    path: "/features/career-progression",
    element: <Layout><CareerProgression /></Layout>,
  },
  {
    path: "/features/sop-audits",
    element: <Layout><SOPAudits /></Layout>,
  },
  {
    path: "/features/rewards-recognition",
    element: <Layout><RewardsRecognition /></Layout>,
  },
  {
    path: "/features/ticketing",
    element: <Layout><Ticketing /></Layout>,
  },
  {
    path: "/mobile-learning",
    element: <Layout><MobileLearning /></Layout>,
  },
  {
    path: "/communication",
    element: <Layout><Communication /></Layout>,
  },
  {
    path: "/features/self-learning",
    element: <Layout><SelfLearning /></Layout>,
  },
  {
    path: "/features/seamless-training",
    element: <Layout><SeamlessTraining /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/privacy-policy",
    element: <Layout><PrivacyPolicy /></Layout>,
  },
  {
    path: "/industries/retail",
    element: <Layout><Retail /></Layout>,
  },
  {
    path: "/industries/qsr-cloud-kitchens",
    element: <Layout><QSRRetail /></Layout>,
  },
  {
    path: "/industries/fmcg-beverages",
    element: <Layout><FMCG /></Layout>,
  },
  {
    path: "/industries/supermarkets-grocery",
    element: <Layout><Supermarkets /></Layout>,
  },
  {
    path: "/industries/delivery-partners",
    element: <Layout><Delivery /></Layout>,
  },
  {
    path: "/industries/bpo-contact-centres",
    element: <Layout><BPO /></Layout>,
  },
  {
    path: "/industries/insurance-banking",
    element: <Layout><Finance /></Layout>,
  },
  {
    path: "/industries/hospitality",
    element: <Layout><Hospitality /></Layout>,
  },
  {
    path: "/industries/manufacturing-industrial",
    element: <Layout><ManufacturingIndustrial /></Layout>,
  },
  {
    path: "/use-cases/ceo",
    element: <Layout><CEO /></Layout>,
  },
  {
    path: "/use-cases/chro",
    element: <Layout><CHRO /></Layout>,
  },
  {
    path: "/use-cases/sales-head",
    element: <Layout><SalesHead /></Layout>,
  },
  {
    path: "/use-cases/operations-head",
    element: <Layout><OperationsHead /></Layout>,
  },
  {
    path: "/features/sales-team",
    element: <Layout><SalesTeam /></Layout>,
  },
  {
    path: "/features/sales-tool",
    element: <Layout><SalesTool /></Layout>,
  },
  {
    path: "/features/execution",
    element: <Layout><Execution /></Layout>,
  },
  {
    path: "/features/content-engine",
    element: <Layout><ContentEngine /></Layout>,
  },
  {
    path: "/builder-lab",
    element: <Layout><BuilderLab /></Layout>,
  },
  {
    path: "/lighthouse-program",
    element: <Layout><LighthouseProgram /></Layout>,
  },
];

export default routes;
