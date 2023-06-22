import { getCMSContent } from "./CMSProvider";
import { cmsSections } from "../../components/cmsSections";

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    console.log("wiii>>", sectionProps);
    const Component = cmsSections[sectionProps.componentName];
    const commonSeoBlockRecord = Component && Component.CommonSeoBlockRecord;

    const isVisible =
      sectionProps.visible === true || sectionProps.visible === undefined;

    if (!Component) return null;
    if (!isVisible) return null;

    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}
