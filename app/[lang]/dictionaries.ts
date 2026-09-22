import es from "@/dictionaries/es.json";
import en from "@/dictionaries/en.json";

const dictionaries = {
    es,
    en
};

export function getDictionary(lang: "es" | "en") {
    return dictionaries[lang];
}