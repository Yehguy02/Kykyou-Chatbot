export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <main>
            <div>root layout</div>
            {children}
        </main>
    )
}