import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Meta({ pageTitle }: { pageTitle: string }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
    </HelmetProvider>
  );
}
