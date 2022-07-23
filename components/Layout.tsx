export const Layout = ({children}: LayoutProps) => {
    return (
        <main className="bg-base-dawn dark:bg-base">
            {children}
        </main>
    )
}


interface LayoutProps {
    children: React.ReactNode;
}