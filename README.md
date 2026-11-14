# GD Lacrosse Camps website

Plain HTML/CSS site, ready to host free on GitHub Pages.

## Files
- `index.html` – home page
- `schedule.html`, `contact.html` – Schedule and Contact pages
- `styles.css` – all the styling (colors are at the top)
- `site.js` – mobile menu, scrolling word banner, form handling
- `images/` – photos and logo (swap in your originals using the **same file names**)
- `fonts/` – Poppins font files

## Things to fill in
1. **Register button:** in each `.html` file, find `REGISTER LINK` and change `href="contact.html"` to your registration form link.
2. **Email signup + contact form:** these send to gdlaxcamps@gmail.com through FormSubmit (free, no account). The first time someone submits, FormSubmit emails gdlaxcamps@gmail.com an activation link. Click it once and forms work from then on.
3. **Scrolling words:** edit `const WORDS = [...]` in `site.js`.
4. **Domain:** if your domain isn't `gdlaxcamps.com`, change it in `sitemap.xml` and `robots.txt`.

## Put it online (GitHub Pages)
1. Create a free account at github.com and click **New repository**. Name it something like `gdlaxcamps`, set it to **Public**, and create it.
2. Click **uploading an existing file**, drag in **everything inside this folder** (not the folder itself), and click **Commit changes**.
3. Go to **Settings → Pages**. Under "Branch," pick **main** and **/(root)**, then click **Save**. After about a minute your site is live at `https://YOURUSERNAME.github.io/gdlaxcamps/`.
4. On the same page, type your domain (for example `gdlaxcamps.com`) under **Custom domain** and click **Save**.

## Point your Squarespace domain at it
In Squarespace: **Domains → your domain → DNS → DNS Settings**.
1. Delete any old records pointing to Google Sites or Squarespace's website (A records, or a `www` CNAME to `ghs.googlehosted.com` or Squarespace).
2. Add these **custom records**:

| Host | Type  | Data |
|------|-------|------|
| @    | A     | 185.199.108.153 |
| @    | A     | 185.199.109.153 |
| @    | A     | 185.199.110.153 |
| @    | A     | 185.199.111.153 |
| www  | CNAME | YOURUSERNAME.github.io |

3. Give it anywhere from a few minutes to a few hours. Then go back to GitHub **Settings → Pages** and check **Enforce HTTPS**.

## Get it on Google
Go to search.google.com/search-console, add your domain, verify it (Google gives you a TXT record to add in Squarespace DNS), then submit `sitemap.xml` under **Sitemaps**.
