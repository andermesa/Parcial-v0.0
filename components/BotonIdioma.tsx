"use client";

import Link from "next/link";

function BotonIdioma() {
    const cambiarIdioma = (idioma: string) => {
        document.cookie = `idioma=${idioma}; path=/; max-age=31536000`;
    };

    return (
        <div className="flex gap-2">
            <Link
                href="/es"
                onClick={() => cambiarIdioma("es")}
                className="bg-blue-600 text-white px-3 py-2 rounded"
            >
                Español
            </Link>

            <Link
                href="/en"
                onClick={() => cambiarIdioma("en")}
                className="bg-gray-600 text-white px-3 py-2 rounded"
            >
                English
            </Link>
        </div>
    );
}

export default BotonIdioma;