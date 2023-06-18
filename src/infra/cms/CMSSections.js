import { CMSSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionsProps) => {
    const Component = CMSSections[sectionsProps.componentName];
    if (!Component) return null;
    return <Component key={sectionsProps.id} {...sectionsProps} />;
  });
}
