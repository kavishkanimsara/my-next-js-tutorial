import Card from "@/components/card";
import Link from "next/link";

function Notifications() {
    return (
        <Card>
            This is Notifications Page
            <Link href="/dashboard/archived">Go to Archived</Link>
        </Card>
    );
}

export default Notifications;