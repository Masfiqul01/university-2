# KKJSTU University Website

Complete Next.js frontend expansion for **Khulna Khan Jahan Science and Technology University (KKJSTU)**.

## Included

- Existing v0 homepage and visual system preserved
- Existing About page preserved
- Added all remaining major university routes using a reusable App Router catch-all page
- Responsive layouts for desktop, tablet and mobile
- Academics, admissions, research, campus life, news, events, notices, career, library, student portal, faculty directory and contact pages
- Reusable cards, page heroes, breadcrumbs and CTAs
- Editable placeholder content where official KKJSTU facts were not supplied

## Important

The content is intentionally marked/structured as editable where official university information is unknown. Replace placeholder names, dates, phone numbers, addresses, emails, programs and links with verified KKJSTU information before production.

## Run

```bash
pnpm install
pnpm dev
```

Then open the local URL shown by Next.js.


### KKJSTU Brand Colors
The existing design/layout is preserved. Global colors use the KKJSTU palette: #120A80 (blue), #0B0754 (navy), #FD9900 (orange), #F8FAFC (background), and #FFFFFF (white).


## Final requested additions

The original `KKJSTU-website-logo-colors.zip` design is kept as the base. Only the requested additions were made:

- Administration added to the main navbar.
- Desktop hover opens a wide Administration mega-menu.
- Clicking Administration opens the full `/administration` page.
- Administration submenu pages are available under `/administration/...`.
- Student Portal remains available.
- A redesigned responsive Teacher Portal is available at `/teacher-portal`.
- Teacher Portal is also linked from the Administration menu and footer.
- Logo and image URLs can be changed from `lib/site-assets.ts`.

### Change logo

Open `lib/site-assets.ts` and set `LOGO_URL` to your direct image URL. Leave it empty to keep the existing KKJSTU text logo.

### Change images

In `IMAGE_URLS`, replace any value with a direct image URL. The key is the existing local image path and the value is the image that the site should use.

Example:

```ts
export const LOGO_URL = "https://example.com/my-logo.png"

export const IMAGE_URLS = {
  "/images/hero-campus.png": "https://example.com/my-hero.jpg",
  "/images/admissions-building.png": "https://example.com/my-admissions.jpg",
}
```

