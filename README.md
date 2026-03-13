# Mansi — Portfolio Website

A clean, fast, multi-page portfolio built with HTML, CSS and vanilla JavaScript.
No frameworks, no build steps — just open and edit.

---

## 📁 File Structure

```
mansi-portfolio/
├── index.html          ← Home page
├── about.html          ← About me page
├── projects.html       ← Projects listing (cards)
├── project-detail.html ← Individual project template
├── blog.html           ← Blog listing (cards)
├── blog-post.html      ← Individual blog post template
├── css/
│   └── style.css       ← All styles (colours, fonts, spacing)
├── js/
│   ├── data.js         ← ⭐ ALL your content lives here — edit this!
│   └── main.js         ← Navigation, transitions, scroll effects
└── images/             ← Put all your photos here
```

---

## ✏️ HOW TO EDIT CONTENT

**All content is in one file: `js/data.js`**

### Change personal info
Open `js/data.js` and edit the top section:
```js
name: "Mansi",
email: "your@email.com",
instagram: "https://instagram.com/...",
linkedin: "https://linkedin.com/in/...",
```

### Add a new project
In `data.js`, copy an existing project block inside `projects: [...]` and paste below. Change:
- `id` — a unique short name (no spaces), e.g. `"my-new-project"`
- `number` — e.g. `"06"`
- `title`, `image`, `summary`
- `detail` section — tools, standards, domain, mission, framework, impact

### Add a new blog post
In `data.js`, copy the blog block inside `blogs: [...]` and paste below. Change:
- `id`, `title`, `date`, `readTime`, `image`, `excerpt`
- `content` — write your full blog post as HTML paragraphs:
  ```js
  content: `
    <p>Your first paragraph here.</p>
    <p>Your second paragraph here.</p>
  `
  ```

---

## 🖼️ Adding Photos

1. Place your images in the `images/` folder
2. Update the filename in `data.js`:
   ```js
   image: "images/your-photo.jpg"
   ```

**Suggested image sizes:**
- Hero photo: 800×1000px (portrait)
- Project images: 800×500px (landscape)
- Blog images: 800×500px (landscape)
- About photo: 800×600px

---

## 🎨 Changing Colours / Fonts

Open `css/style.css` and look for the `:root` section at the top:
```css
:root {
  --cream:    #f0ede4;   ← page background
  --forest:   #1a3d2b;   ← dark green (nav, contact bg)
  --accent:   #4a7c59;   ← accent green
  --charcoal: #1a1a1a;   ← dark text
  ...
}
```
Change any hex colour here and it updates everywhere automatically.

**Fonts** are imported from Google Fonts at the top of `style.css`.
Currently using: `Cormorant Garamond` (display) + `DM Sans` (body).

---

## 🚀 DEPLOY TO VERCEL (Free)

### Step 1 — Push to GitHub
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (name it e.g. `mansi-portfolio`)
3. Upload all these files to the repository (drag & drop works)

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `mansi-portfolio` repository
4. Click **Deploy** — no settings needed!

Vercel will give you a free URL like `mansi-portfolio.vercel.app` 🎉

### Step 3 — Update content
Any time you edit files and push to GitHub, Vercel auto-deploys in ~30 seconds.

---

## 📧 Making the Contact Form Work

Currently the form shows an alert. To receive real emails for free:
1. Go to [formspree.io](https://formspree.io) → create free account
2. Create a form → copy your form endpoint URL
3. In `index.html`, find `handleContact()` and replace the alert with:
   ```js
   const data = new FormData(e.target);
   await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: data });
   alert('Message sent!');
   ```

---

## 📝 To Add More Pages

1. Copy `project-detail.html` or `blog-post.html`
2. Add a new entry in `data.js`
3. The page will automatically load based on the `?id=` URL parameter

---

Built with ❤️ — Clean HTML/CSS/JS, no dependencies.
