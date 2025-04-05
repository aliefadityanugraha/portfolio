import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "@/app/components/SplitText/SplitText";
import BlurText from "@/app/components/BlurText/BlurText";
import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import Squares from "@/app/components/Squares/Squares";
import Aurora from "@/app/components/Aurora/Aurora";
import GradientText from "@/app/components/GradientText/GradientText";
import ScrollVelocity from "@/app/components/ScrollVelocity/ScrollVelocity";
import Masonry from "@/app/components/Masonry/Masonry";

export default function Home() {

    const data = [
        { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
        { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
        { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
        { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
        { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
        { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
        { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
        { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
        { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    ];

  return (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
              <Aurora
                  colorStops={["#C6DE41", "#2D6E7E", "#153B44"]}
                  blend={0.5}
                  amplitude={1.0}
                  speed={0.5}
              />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 opacity-10">
              <Squares
                  speed={0.3}
                  squareSize={40}
                  direction='diagonal'
                  borderColor='#eee'
                  hoverFillColor='#eee'
              />
          </div>
          <div className="container mx-auto h-screen">
              <div className="grid grid-cols-12">
                  <div className="lg:col-span-6 col-span-12 h-screen">
                     <div className="flex items-center h-full lg:p-0 p-4">
                         <div className="flex flex-col items-start gap-4 p-0 m-0">
                             <div className="flex items-center gap-2">
                                <div className="lg:text-2xl text-xl text-white">
                                    <AnimatedContent
                                        distance={150}
                                        direction="horizontal"
                                        reverse={false}
                                        config={{tension: 80, friction: 20}}
                                        initialOpacity={0}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.2}
                                    >I'am Ready For Job</AnimatedContent>
                                </div>
                                 <AnimatedContent
                                     distance={150}
                                     direction="horizontal"
                                     reverse={true}
                                     config={{ tension: 80, friction: 20 }}
                                     initialOpacity={0}
                                     animateOpacity
                                     scale={1.1}
                                     threshold={0.2}
                                 >
                                     <RotatingText
                                         texts={['Web Design', 'Web Development', 'Web Programming', 'AI Developer']}
                                         mainClassName="p-0 sm:px-2 md:px-3 bg-[#C6DE41] text-[#2D6E7E] overflow-hidden sm:py-1 md:py-2 justify-center rounded-full lg:text-2xl text-xl font-bold inline-flex transition-all"
                                         staggerFrom={"last"}
                                         initial={{ y: "100%" }}
                                         animate={{ y: 0 }}
                                         exit={{ y: "-120%" }}
                                         staggerDuration={0.025}
                                         splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                         transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                         rotationInterval={2000}
                                     />
                                 </AnimatedContent>
                             </div>

                             <div className="flex flex-col items-start">
                                 <SplitText
                                     text="I'm Alief Aditya"
                                     className="lg:text-6xl text-5xl font-semibold text-center"
                                     delay={50}
                                     animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                     animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                     threshold={0.2}
                                     rootMargin="-50px"
                                 />
                                 <SplitText
                                     text="Full Stack Developer"
                                     className="lg:text-5xl text-4xl font-semibold text-center text-[#C6DE41]"
                                     delay={150}
                                     animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                     animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                     threshold={0.2}
                                     rootMargin="-50px"
                                 />
                             </div>
                             <div>
                                 <BlurText
                                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi dolorum inventore ipsum molestias sint tempore. Asperiores debitis dicta dolor ea iure nulla quam similique voluptas. Non, saepe, sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                     delay={50}
                                     animateBy="words"
                                     direction="top"
                                     className="lg:text-xl text-lg mb-8"
                                 />
                             </div>
                             <div className="flex items-center gap-2">
                                 <AnimatedContent
                                     distance={150}
                                     direction="vertical"
                                     reverse={true}
                                     config={{ tension: 80, friction: 20 }}
                                     initialOpacity={0}
                                     animateOpacity
                                     scale={1}
                                     threshold={0.2}
                                     delay={1000}
                                 >
                                     <GradientText
                                         colors={["#C6DE41", "#2D6E7E", "#153B44", "#4079ff", "#40ffaa"]}
                                         animationSpeed={3}
                                         showBorder={true}
                                     >
                                         Contact Me
                                     </GradientText>
                                 </AnimatedContent>
                                 <AnimatedContent
                                     distance={150}
                                     direction="vertical"
                                     reverse={true}
                                     config={{ tension: 80, friction: 20 }}
                                     initialOpacity={0}
                                     animateOpacity
                                     scale={1}
                                     threshold={0.2}
                                     delay={1100}
                                 >
                                     <GradientText
                                         colors={["#C6DE41", "#2D6E7E", "#153B44", "#4079ff", "#40ffaa"]}
                                         animationSpeed={3}
                                         showBorder={true}
                                     >
                                         Text Me
                                     </GradientText>
                                 </AnimatedContent>
                             </div>
                         </div>
                     </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 lg:block hidden">
                    <Lanyard  position={[0, 0, 12]} gravity={[0, -40, 0]}/>
                  </div>
              </div>
          </div>
          <div className="container mx-auto h-screen overflow-y-hidden">
              <ScrollVelocity
                  className="custom-scroll-text text-sm text-[#2D6E7E]"
              />
              <div className="flex items-center justify-center mt-40">
                  <div className="grid grid-cols-12 lg:p-0 p-4 gap-8">
                      <div className="lg:col-span-6 col-span-12">
                          <Masonry data={data} />
                      </div>
                      <div className="lg:col-span-6 col-span-12 flex flex-col justify-center">
                          <SplitText
                              text="Move To Heaven"
                              className="lg:text-xl text-lg font-semibold text-center text-[#C6DE41]"
                              delay={150}
                              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                              threshold={0.2}
                              rootMargin="-50px"
                          />
                          <SplitText
                              text="Full Stack Developer"
                              className="lg:text-3xl text-2xl font-bold text-center text-[#fff]"
                              delay={150}
                              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                              threshold={0.2}
                              rootMargin="-50px"
                          />
                          <BlurText
                              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi dolorum inventore ipsum molestias sint tempore. Asperiores debitis dicta dolor ea iure nulla quam similique voluptas. Non, saepe, sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                              delay={50}
                              animateBy="words"
                              direction="top"
                              className="lg:text-xl text-lg mb-8 mt-2"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
