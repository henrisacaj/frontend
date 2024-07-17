import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AnimatedCounter = () => {
    const [counterState, setCounterState] = useState(false)
    return (
        <div className="px-40 py-12">
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-30 pt-30">
                    <div>
                    <h2 className="text-6xl font-bold text-orange-500 text-center">
                        { counterState && 
                            <CountUp start={1950} end={2021} duration={2.75} separator=""></CountUp>
                        }
                    </h2>
                    <p className="py-2 text-orange-500 font-medium text-center">gegründet</p>
                    </div>
                    <div>
                    <h2 className="text-6xl font-bold text-orange-500 text-center">
                        { counterState && 
                            <CountUp start={0} end={50} duration={2.75}></CountUp>
                        }+
                    </h2>
                    <p className="py-2 text-orange-500 font-medium text-center">abgeschlossene Projekte</p>
                    </div>
                    <div>
                    <h2 className="text-6xl font-bold text-orange-500 text-center">
                        { counterState && 
                            <CountUp start={0} end={5} duration={2.75}></CountUp>
                        }</h2>
                    <p className="py-2 text-orange-500 font-medium text-center">Partner</p>
                    </div>
                    <div>
                    <h2 className="text-6xl font-bold text-orange-500 text-center">
                        { counterState && 
                            <CountUp start={0} end={100000} duration={2.75} separator="."></CountUp>
                        }€</h2>
                    <p className="py-2 text-orange-500 font-medium text-center">Umsatz</p>
                    </div>
                </div>
            </ScrollTrigger>
            
        </div>
    );
};

export default AnimatedCounter;
