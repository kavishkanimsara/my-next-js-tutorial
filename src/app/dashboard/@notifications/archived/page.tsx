import Link from "next/link";

function ArchivedNotifications() {
    return (
        <div>
            This is Archived Notifications Page
            <Link className=" font-bold text-blue-500" href="/dashboard">Go Back</Link>
        </div>
    );
}

export default ArchivedNotifications;