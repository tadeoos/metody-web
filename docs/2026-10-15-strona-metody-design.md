# Strona Metody – ustalenia (2026-10-15)

**Cel:** wizytówka + portfolio pracowni stolarskiej. Kontakt telefon/mail, bez formularza wyceny.
**Język:** tylko polski. **Domena:** pracowniametody.pl. **Hosting:** GitHub Pages (publiczne repo), Astro.

## Źródła
- Makieta Figma (tylko mobile, porzucona): https://www.figma.com/design/wzl4CsYpjfFjbku6WqcHbr/Metody
  – punkt wyjścia (opcja B): logo, krój geometryczny, zaokrąglone zdjęcia, kółka z krokami; układ projektowany swobodnie.
- Teksty: Google Doc „teksty na str_20261014.docx”.
- Zdjęcia: folder na Drive (Kredens, Stara Ochota, Drobne).

## Struktura
- `/` – hero, O nas, Wybrane realizacje, Jak pracujemy (5 kroków, rozwijane), Kontakt.
- `/realizacje/<slug>/` – tytuł, okładka, metryczka (Projekt / Wykonanie / Inwestor / Zdjęcia + opcjonalne), opis, galeria z lightboxem, link do następnej.
- 404, sitemap, meta OG. Bez analityki i ciasteczek.

## Decyzje projektowe
- Motyw: jeden duży zaokrąglony róg na zdjęciach i sekcjach – nawiązanie do zaokrąglonych krawędzi mebli pracowni.
- Paleta z realizacji: biel, atrament, orzech (akcent), błękit wnęki kredensu (tło „Jak pracujemy”).
- Krój: Jost (self-hosted przez @fontsource – bez zapytań do Google).
- Narracja w liczbie mnogiej („my”) – jak w dokumencie z tekstami (Figma miała „ja”).
- Treść realizacji w kolekcji `src/content/realizacje/*/index.md` – folder = realizacja, tak jak na Drive.

## Etap 2 (później)
Samodzielne dodawanie realizacji przez pracownię: git-based CMS (Sveltia/Decap) pod `/admin`
albo automatyczna synchronizacja folderu z Drive przez GitHub Action.
