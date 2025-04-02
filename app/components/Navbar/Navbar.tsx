import FadeContent from "@/app/components/FadeContent/FadeContent";
import AnimatedContent from "@/app/components/AnimatedContent/AnimatedContent";
import SplitText from "@/app/components/SplitText/SplitText";

export default function Navbar() {
    return (
        <>
            <nav
                className="container mx-auto pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full py-3 px-8 m-2 transition-colors bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-[#eee] border-opacity-10">
                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <a className="lg:text-3xl text-xl font-bold" href="/">Portfolio.</a>
                </AnimatedContent>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <ul className="hidden gap-6 lg:text-lg text-sm sm:flex">
                        <li className="group relative">
                            <a className="" href="/">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">Home
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Home
                                </div>
                            </span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a className="active-link" href="/about">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">About
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">About
                                </div>
                            </span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a className="" href="/projects">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">Projects
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Projects
                                </div>
                            </span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a className="" href="/contact">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">Contact
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Contact
                                </div>
                            </span>
                            </a>
                        </li>
                    </ul>
                </FadeContent>

                <div className="flex items-center justify-center gap-4">
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
                       <button className="px-4 py-2 text-white rounded-full border">
                           Get More
                       </button>
                    </AnimatedContent>
                </div>
            </nav>
        </>
    )
}