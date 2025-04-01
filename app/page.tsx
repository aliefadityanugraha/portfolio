"use client"
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "@/app/components/SplitText/SplitText";
import BlurText from "@/app/components/BlurText/BlurText";
import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import Squares from "@/app/components/Squares/Squares";
import Aurora from "@/app/components/Aurora/Aurora";
import GradientText from "@/app/components/GradientText/GradientText";

export default function Home() {
  return (
      <div className="min-h-screen overflow-x-hidden bg-[#222222]">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
              <Aurora
                  colorStops={["#E4E4E4", "#044343", "#045757"]}
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
                     <div className="flex items-center h-full">
                         <div className="flex flex-col items-start gap-4 p-0 m-0">
                             <div className="flex items-center gap-2">
                                <div className="text-2xl text-white font-bold">
                                    <AnimatedContent
                                        distance={150}
                                        direction="horizontal"
                                        reverse={false}
                                        config={{tension: 80, friction: 20}}
                                        initialOpacity={0.2}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.2}
                                    >I'am Ready For Job</AnimatedContent>
                                </div>
                                 <RotatingText
                                     texts={['Web Design', 'Web Development', 'Web Programming', 'AI Developer']}
                                     mainClassName="px-2 sm:px-2 md:px-3 bg-[#045757] text-[#E4E4E4] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-2xl text-2xl font-bold inline-flex transition-all"
                                     staggerFrom={"last"}
                                     initial={{ y: "100%" }}
                                     animate={{ y: 0 }}
                                     exit={{ y: "-120%" }}
                                     staggerDuration={0.025}
                                     splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                     transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                     rotationInterval={2000}
                                 />
                             </div>

                             <div className="flex flex-col items-start">
                                 <SplitText
                                     text="I'am Alief Aditya"
                                     className="text-6xl font-semibold text-center"
                                     delay={50}
                                     animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                     animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                     // easing="easeOutCubic"
                                     threshold={0.2}
                                     rootMargin="-50px"
                                     // onLetterAnimationComplete={handleAnimationComplete}
                                 />
                                 <SplitText
                                     text="Full Stack Developer"
                                     className="text-6xl font-semibold text-center"
                                     delay={150}
                                     animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                     animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                     // easing="easeOutCubic"
                                     threshold={0.2}
                                     rootMargin="-50px"
                                     // onLetterAnimationComplete={handleAnimationComplete}
                                 />
                             </div>
                             <div>
                                 <BlurText
                                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi dolorum inventore ipsum molestias sint tempore. Asperiores debitis dicta dolor ea iure nulla quam similique voluptas. Non, saepe, sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                     delay={50}
                                     animateBy="words"
                                     direction="top"
                                     // onAnimationComplete={handleAnimationComplete}
                                     className="text-xl mb-8"
                                 />
                             </div>
                             <div className="flex items-center">
                                 <GradientText
                                     colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                     animationSpeed={3}
                                     showBorder={true}
                                     className="custom-class"
                                 >
                                    Contact Me
                                 </GradientText>
                             </div>
                         </div>
                     </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12 lg:block hidden">
                    <Lanyard  position={[0, 0, 15]} gravity={[0, -40, 0]}/>
                  </div>
              </div>
          </div>

      </div>
  )
}
