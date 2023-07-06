import React from "react";
import get from "lodash/get";

const CMSContext = React.createContext({
  cmsContent: {},
});

export const getCMSContent = (path = "") => {
  const cmsContent = React.useContext(CMSContext).cmsContent;

  if (path === "") return cmsContent;

  const output = get(cmsContent, path);

  if (!output)
    throw new Error(
      `The key could not be found: "${path}". Review your query and try again.`
    );

  return output;
};

export default function CMSProvider({ cmsContent, children }) {
  return (
    <CMSContext.Provider value={{ cmsContent }}>{children}</CMSContext.Provider>
  );
}
