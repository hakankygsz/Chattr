import { HelmetProvider, Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description?: string;
  keywords?: string;
  favicon?: string;
  ogImage?: string;
  twitterCard?: string;
}

const PageMeta = ({
  title,
  description,
  keywords,
  favicon,
  ogImage,
  twitterCard,
}: PageMetaProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {favicon && <link rel="icon" href={favicon} />}
    
    {/* Open Graph */}
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description || ''} />
    
    {/* Twitter Card */}
    {twitterCard && <meta name="twitter:card" content={twitterCard} />}
    {ogImage && <meta name="twitter:image" content={ogImage} />}
    
  </Helmet>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
