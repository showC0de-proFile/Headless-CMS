import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SEOBlock } from "./Seoblack";

export const CMSSections = {
  CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommomMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: (props) => <PageHomeHeroSection {...props} />,
  CommomFooterRecord: (props) => <Footer {...props} />,
};
