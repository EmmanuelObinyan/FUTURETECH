import React from "react";
import NavBar from "../components/layouts/NavBar";
import TextHeader from "../components/ui/TextHeader";
import ResourceCard from "../components/ui/ResourceCard";
import SectionCard from "../components/ui/SectionCard";
import PodCastCard from "../components/ui/PodCastCard";
import cyberAI from '../assets/cyberAI.mp4'
import { useObserver } from "../config/ObserverContext";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const PodcastsPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const {visible,observerRef}=useObserver()
  return (
    <>
      <NavBar />
      <section className=" text-white font-inter bg-[#141414] font-semibold xs:mt-26 sm:mt-32 lg:mt-37">
        <TextHeader
          margin={true}
          news_header="unlock the world of artificial intelligence through podcasts"
          news_text={
            "Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
          }
        />
        {/* for the first video body  */}
         <div className="bg-[#141414] capitalize flex mt-3 flex-col md:flex-row">
              <PodCastCard/>
                  <aside>
                      <ResourceCard
                      ShowMedia ={false}
                      content_video={cyberAI}
                      showBtn={false}
                image_classname="xs:h-[10rem]  sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full "
                content_title="quantum computing whitepaper"
                content_text="An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining."
              />
              <figure className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 ">
                <SectionCard
                  TextInvert={false}
                  sub_title="publication date"
                  sub_text="july 2023"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="category"
                  sub_text="quantum computing"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="author"
                  sub_text="dr.quantum"
                />
              </figure>
                  </aside>
         </div>
          
      </section>
    </>
  );
};

export default PodcastsPage;
