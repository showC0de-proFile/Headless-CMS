import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./PageFAQDisplayQuestionsSection";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SEOBlock } from "./SeoBlock";

export const CMSSections = {
  PagefaqDisplayquestionSectionRecord: (props) => (
    <PageFAQDisplayQuestionsSection {...props} />
  ),
  // CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommonSeoBlockRecord: SEOBlock,
  CommomMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: (props) => <PageHomeHeroSection {...props} />,
  CommomFooterRecord: (props) => <Footer {...props} />,
};
