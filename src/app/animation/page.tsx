import GSAPHero from "./_components/animated-hero";
import { ButterflyBackground } from "./_components/butter-fly";
import GlowingCircles from "./_components/glowing-ciecles";
import RollingText from "./_components/rolling-rext";
import Subtitle from "./_components/sub-title";

export default function page() {
    return (
        <div>
            <div className="z-20 relative">
                <GSAPHero/>
                <RollingText/>
                <Subtitle/>
            </div>
            <ButterflyBackground/>
            <GlowingCircles/>
        </div>
    );
}