
import Slider from "../Slider";
import Jyotish from "../jyotish"
import Cards from "../LinkSection"
// import LinkSection from "@/app/components/LinkSection";


export default function Home() {
  return (
    <>
      <Slider />
      <Jyotish />
      <Cards/>
      <section className="importantlink-section text-center py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="video-container">
              <a href="#" data-toggle="modal" data-target="#exampleModal">
                <div className="iframe-container relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Ujq6B8bVN8c?si=3h7_wGmjCM4di6Cq"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </a>
            </div>
            <div className="video-container">
              <a href="#" data-toggle="modal" data-target="#exampleModal">
                <div className="iframe-container relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/G37Z8I1reu8?si=NboqVbpF900Ul4hK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}
