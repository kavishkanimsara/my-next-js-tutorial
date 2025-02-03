export default function DashboardLayout({
    children,
    revenue,
    user,
    notifications,
    login
  }: Readonly<{
    children: React.ReactNode;
    revenue : React.ReactNode
    user : React.ReactNode
    notifications : React.ReactNode
    login : React.ReactNode
  }>) {
    const isLoggedIn = true;
    return isLoggedIn ?(

        <div>
            <div>Dashboard Layout</div>
            <div>{children}</div>
            <div>{revenue}</div>
            <div>{user}</div>
            <div>{notifications}</div>
        </div>
    ) : (
        <div>
            <div>{login}</div>
        </div>
    );
  }