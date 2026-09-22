import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname !== "/") {
        return NextResponse.next();
    }

    const idiomaGuardado = request.cookies.get("idioma")?.value;

    if (idiomaGuardado === "es" || idiomaGuardado === "en") {
        return NextResponse.redirect(
            new URL(`/${idiomaGuardado}`, request.url)
        );
    }

    const idioma = request.headers.get("accept-language");

    if (idioma && idioma.toLowerCase().startsWith("en")) {
        return NextResponse.redirect(new URL("/en", request.url));
    }

    return NextResponse.redirect(new URL("/es", request.url));
}