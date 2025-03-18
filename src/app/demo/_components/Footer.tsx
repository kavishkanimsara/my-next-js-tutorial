import FooterContent from "./footer-content";

export default function Footer() {
    return (
        <div className=" relative bottom-0 w-full z-0">  
            <img src="/footer_img_3.svg" alt="footer" className="w-full" />
            <div>
                <FooterContent />
            </div>
        </div>
    );
}