import { getDictionary } from "./dictionaries";
import LanguageSelector from "@/components/LanguageSelector";
interface Props {
    params: Promise<{ lang: "es" | "en" }>;
}

export default async function Page({ params }: Props) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="p-8">
            <LanguageSelector />
            <h1 className="text-3xl font-bold">
                {dict.welcome}
            </h1>

            <p className="mt-4">
                {dict.profile}
            </p>

            <p className="mt-2">
                {dict.home}
            </p>
        </main>
    );
}