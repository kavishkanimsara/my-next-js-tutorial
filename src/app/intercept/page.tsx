import Link from "next/link";

function ImagePage() {
    return (
        <div>
            This is main image page
            <Link href="/intercept/view">Go to Image 1</Link>
        </div>
    );
}

export default ImagePage;