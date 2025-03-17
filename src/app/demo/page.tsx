import { ButterflyBackground } from "../animation/_components/butter-fly";
import { DemoComponents } from "./_components/components";
import DoodleUI from "./_components/doodle";

export default function page() {
    return (
        <div>
           <DoodleUI/>
            <ButterflyBackground/>
        </div>
    );
}