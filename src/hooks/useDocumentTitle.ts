import { useEffect } from "react";

const SITE_NAME = "Amun Ahmad";

// Sets the browser tab title for a page. Pass the page name only ("Projects");
// the site name is appended. Pass nothing on the landing page to use the default.
function useDocumentTitle(pageName?: string) {
  useEffect(() => {
    document.title = pageName
      ? `${pageName} | ${SITE_NAME}`
      : `${SITE_NAME} | Full-Stack Developer`;
  }, [pageName]);
}

export default useDocumentTitle;
