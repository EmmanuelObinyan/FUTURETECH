import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import TabCard from "../components/ui/TabCard";
import TabLayout from "../components/ui/TabLayout";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import pic1 from "../assets/newcol1.png";
import pic2 from "../assets/newscol2.png";
import pic3 from "../assets/newscol3.png";
import { useTab } from "../config/TabContext";
import TextHeader from "../components/ui/TextHeader";
import { useObserver } from "../config/ObserverContext";
import NewsPost from "../components/ui/NewsPost";
import NewsCard from "../components/ui/NewsCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { Suspense, lazy } from "react";
const LazySection = lazy(() => import("../components/ui/VideoComp"));
import MainSectionComp from "../components/ui/MainSectionComp";
const NewsPage = () => {
  const { visible, observerRef } = useObserver();
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const { NewsArr } = useTab();
  const ButtonTabs = [
    "all",
    "technology",
    "politics",
    "health",
    "environment",
    "sports",
  ];
  return (
    <>
      <Navbar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        {/* revisit page to fix the appropriate picture and the text for the news page */}
        <TextHeader
          news_header="todays headline: stay informed"
          news_text="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories.
             Discover the world through our news coverage."
        />
        <NewsPost />
        <section
          className="grid xs:grid-cols-1 sm:grid-cols-3 place-items-center h-fit bg-[#141414] sm:p-2 md:p-4 lg:p-6 md:gap-3 lg:gap-0 w-full"
          ref={observerRef}
          data-aos={visible ? "fade-up" : "fade-down"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <NewsCard
            news_image={pic1}
            news_title="a decisive victory for progressive policies"
            category="politics"
            likeCount={2.2 + "k"}
            shareCount={60}
          />
          <NewsCard
            news_image={pic2}
            news_title="tech giants unveil cutting-edge AI innovations"
            category="technology"
            likeCount={6 + "k"}
            shareCount={92}
          />
          <NewsCard
            news_image={pic3}
            news_title="COVID-19 variants"
            category="health"
            likeCount={10 + "k"}
            shareCount={124}
          />
        </section>
        <MainSectionComp
          top_text="welcome to our news hub"
          body_text="discover the world of headlines"
          showBtn={true}
          btnText="view all news"
          width={true}
          handleNavigate={() => navigate("/news")}
        />
        <div
          className="p-2 h-fit font-inter  text-white bg-[#141414] w-[100%] "
          ref={observerRef}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
        >
          <TabCard TabsItems={ButtonTabs} />
          <TabLayout blog={NewsArr} />
        </div>
        <MainSectionComp
          top_text="featured videos"
          body_text="visual insights for the modern viewer"
          showBtn={true}
          btnText="view all "
          width={true}
          handleNavigate={() => navigate("/news")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 sm:p-2 md:p-4 lg:p-6 bg-[#141414] text-white font-inter h-fit  xs:place-items-center ">
          <Suspense fallback={<div>...loading</div>}>
            <LazySection />
          </Suspense>
        </div>
        {/* for the footer part */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default NewsPage;
