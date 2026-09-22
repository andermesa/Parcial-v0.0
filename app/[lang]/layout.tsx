interface Props {
    children: React.ReactNode;
    params: Promise<{ lang: "es" | "en" }>;
}

export default async function Layout({ children, params }: Props) {
    const { lang } = await params;

    return (
        <html lang={lang}>
            <body>{children}</body>
        </html>
    );
}