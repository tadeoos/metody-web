# Metody – strona pracowni stolarskiej

Statyczna strona-wizytówka i portfolio pracowni **Metody** ([pracowniametody.pl](https://pracowniametody.pl)).
Zbudowana w [Astro](https://astro.build), hostowana za darmo na GitHub Pages.

## Uruchomienie lokalnie

Wymaga Node 22+ i pnpm.

```sh
pnpm install
pnpm dev        # podgląd na http://localhost:4321
pnpm build      # produkcyjny build do dist/
```

## Gdzie co jest

| Co zmienić                         | Gdzie                                         |
| ---------------------------------- | --------------------------------------------- |
| Mail, telefon, Facebook, Instagram | `src/data/site.ts`                            |
| Tekst o pracowni i „Jak pracujemy” | `src/pages/index.astro`                       |
| Realizacje (teksty + zdjęcia)      | `src/content/realizacje/<nazwa>/`             |
| Kolory, fonty                      | `src/styles/global.css` (zmienne na górze)    |
| Logo (SVG wycięte z `brand/Metody_logo_krzywe.pdf`) | `src/assets/logo/`, `public/favicon.svg` |

## Jak dodać nową realizację

1. Utwórz folder `src/content/realizacje/<nazwa-bez-polskich-znakow>/`, np. `szafa-mokotow`.
   Nazwa folderu staje się adresem: `pracowniametody.pl/realizacje/szafa-mokotow/`.
2. Wrzuć do niego zdjęcia (JPG). Dobrze je wcześniej zmniejszyć do ok. 2400 px na dłuższym boku –
   strona i tak sama wygeneruje mniejsze wersje.
3. Dodaj plik `index.md` według wzoru:

   ```md
   ---
   title: Szafa na Mokotowie
   subtitle: Jedno zdanie, które pojawi się pod tytułem
   order: 4            # kolejność na stronie głównej (mniejsza = wyżej)
   zdjecia: Imię Nazwisko   # autor zdjęć, opcjonalnie – mała linijka pod opisem
   photos:
     - src: ./01.jpg   # pierwsze zdjęcie = okładka
       alt: Krótki opis tego, co widać na zdjęciu
     - src: ./02.jpg
       alt: ...
       caption: Opcjonalny podpis pod zdjęciem
   ---

   Opis projektu – co w nim było ciekawego. Zwykły tekst, akapity oddzielone pustą linią.
   ```

4. Commit + push do `main` – GitHub sam zbuduje i opublikuje stronę (ok. 2–3 minuty).

Galeria układa się sama: zdjęcia na przemian przy lewej i prawej krawędzi ekranu, na dużym ekranie
w luźnym zygzaku. Pole `caption` to opcjonalny podpis pod zdjęciem (mały, szary tekst) – używaj
oszczędnie, do rzeczy, których nie widać od razu.

## Podgląd bez domeny

Dopóki domena nie jest podpięta, strona działa pod `https://<login>.github.io/<repo>/`.
Steruje tym trzy zmienne repo (**Settings → Secrets and variables → Actions → Variables**):
`SITE_URL` (np. `https://tadeoos.github.io`), `BASE_PATH` (np. `/metody-web`) i `NOINDEX=true`
(wersja podglądowa nie jest indeksowana przez Google). Po podpięciu domeny usuń wszystkie trzy.

## Wdrożenie (jednorazowa konfiguracja)

1. Wypchnij repo na GitHuba (publiczne – darmowe GitHub Pages wymaga publicznego repo).
2. W repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. W **Settings → Pages → Custom domain** wpisz `pracowniametody.pl` (plik `public/CNAME` już to zawiera)
   i po weryfikacji zaznacz **Enforce HTTPS**.
4. U rejestratora domeny ustaw DNS:
   - dla `pracowniametody.pl` cztery rekordy **A**:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (opcjonalnie IPv6 – rekordy **AAAA**: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)
   - dla `www.pracowniametody.pl` rekord **CNAME** → `<twoj-login>.github.io`
5. Zalecane: zweryfikuj domenę w ustawieniach **konta** GitHub (avatar → Settings → Pages → Add a domain). Chroni to przed przejęciem domeny przez cudze repo.
