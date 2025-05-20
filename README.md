# Katalog uživatelů s přihlášením – Next.js

## ✅ Zadání: „Katalog uživatelů s přihlášením"

Vytvořil jsem jednoduchou frontendovou aplikaci v Next.js s následujícími funkcemi:

### 1. Stránka s přehledem uživatelů

-   Seznam uživatelů načtený z REST API: https://jsonplaceholder.typicode.com/users
-   Zobrazení jména a e-mailu
-   Implementace stránkování (po 5 uživatelích na stránku)

### 2. Přidání nového uživatele (lokálně)

-   Formulář pro zadání nového uživatele (jméno, e-mail)
-   Validace vstupů pomocí Zod
-   Po odeslání formuláře se uživatel přidá do lokálního stavu (cookies)
-   Nový uživatel se zobrazí v seznamu uživatelů (nahoře)

### 3. Bonusové funkce

-   Stylování pomocí Tailwind CSS
-   Vlastní hook useUsers
-   Server Components a Server Actions
-   Přihlášení pomocí next-auth
-   Přepínání světlého/tmavého režimu

## 🛠️ Technické detaily

### Použité technologie

-   Next.js 14 s App Routerem
-   TypeScript
-   Tailwind CSS
-   shadcn/ui komponenty
-   React Hook Form
-   Zod pro validaci
-   next-auth pro autentizaci

### Struktura projektu

```
/app                     # Next.js App Router struktura
  /api                   # API endpointy
    /auth                # Autentizační API
  /login                 # Přihlašovací stránka
  /users                 # Stránky s uživateli
    /add                 # Stránka pro přidání uživatele
  layout.tsx             # Hlavní layout aplikace
/components              # React komponenty
  /ui                    # UI komponenty (shadcn)
/hooks                   # Custom React hooks
/lib                     # Utility, typy a validační schémata
```

## 🚀 Jak spustit projekt

### Požadavky

-   Node.js 18+
-   npm nebo yarn

### Instalace a spuštění

1. Naklonujte repozitář:

```bash
git clone <url-repozitáře>
cd katalog-uzivatelu
```

2. Nainstalujte závislosti:

```shellscript
npm install
# nebo s legacy-peer-deps pokud narazíte na konflikty
npm install --legacy-peer-deps
```

3. Spusťte vývojový server:

```shellscript
npm run dev
```

4. Otevřete prohlížeč na adrese [http://localhost:3000](http://localhost:3000)

## 🔑 Přihlašovací údaje

Pro přihlášení do aplikace použijte:

-   **E-mail**: [admin@example.com](mailto:admin@example.com)
-   **Heslo**: password

## 📝 Implementační detaily

### Autentizace

Aplikace používá next-auth s Credentials providerem pro správu přihlášení. V reálném projektu by byla autentizace napojena na databázi, ale pro účely demonstrace je použit statický uživatelský účet.

### Správa stavu

-   Server Components jsou použity pro načítání dat
-   Client Components jsou použity pro interaktivní prvky
-   Server Actions jsou použity pro manipulaci s daty (přidání uživatele)

### Ukládání dat

Nově přidaní uživatelé jsou ukládáni do cookies prohlížeče. V produkčním prostředí by byla použita databáze.

### Formuláře

Formuláře jsou implementovány pomocí React Hook Form s validací Zod, což zajišťuje:

-   Typovou bezpečnost
-   Validaci na straně klienta
-   Efektivní správu stavu formuláře

### Responzivní design

Aplikace je plně responzivní a funguje na mobilních i desktopových zařízeních díky Tailwind CSS.

## 🔍 Testování

Aplikaci lze otestovat následujícím způsobem:

1. Přihlášení pomocí demo účtu
2. Procházení seznamu uživatelů a stránkování
3. Přidání nového uživatele přes formulář
4. Ověření, že se nový uživatel zobrazí na začátku seznamu
5. Odhlášení a opětovné přihlášení
6. Přepnutí mezi světlým a tmavým režimem

## 📚 Závěr

Tento projekt demonstruje mé schopnosti v oblasti vývoje moderních webových aplikací s využitím Next.js, TypeScript a dalších aktuálních technologií. Kód je strukturován s důrazem na čitelnost, udržitelnost a škálovatelnost.
