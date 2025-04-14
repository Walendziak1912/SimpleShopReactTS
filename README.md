# SimpleShopReactTS

Wersja TypeScript projektu sklepu internetowego, oparta na React, React Router i Vite.

## Wymagania

- Node.js (najnowsza wersja LTS)
- npm lub yarn

## Instalacja

Aby zainstalować zależności projektu, wykonaj:

```bash
npm install
# lub
yarn
```

## Uruchomienie aplikacji

### Backend (serwer JSON)

Aby uruchomić serwer JSON z danymi testowymi:

```bash
cd back-end
npm run dev
# lub
yarn dev
```

Serwer będzie dostępny pod adresem: http://localhost:3000

### Frontend (aplikacja React TypeScript)

Aby uruchomić aplikację w trybie deweloperskim:

```bash
cd front-end
npm run dev
# lub
yarn dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:5173

## Struktura projektu

```
front-end/
├── src/
│   ├── api/                   # Loadery danych i funkcje API
│   ├── assets/                # Zasoby (obrazy, ikony)
│   ├── components/            # Komponenty wielokrotnego użytku
│   ├── constants/             # Stałe i konfiguracja
│   ├── styles/                # Globalne style
│   ├── types/                 # Definicje typów TypeScript
│   ├── views/                 # Komponenty widoków (strony)
│   ├── App.tsx                # Główny komponent aplikacji
│   └── main.tsx               # Punkt wejścia aplikacji
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Główne funkcjonalności

- Przeglądanie kategorii produktów
- Filtrowanie według kategorii i podkategorii
- Przeglądanie szczegółów produktu
- Dodawanie do ulubionych
- Koszyk zakupowy
