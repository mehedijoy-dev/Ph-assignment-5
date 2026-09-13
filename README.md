# 🧩 Dev Stack

**Dev Stack** is a technology explorer where developers can browse popular frontend, backend, database, styling, DevOps, and tooling technologies, and build their own personal "stack" by adding the tools they'd use for their next project. Selected technologies show up in a live sidebar, with the ability to remove individual items or clear the whole stack at once.

---

## ✨ Features

- **Browse & Add to Stack** — 15 curated technologies displayed as cards (icon, badge, rating, difficulty, category). Clicking **Add to Stack** moves a technology into the "Your Stack" panel. Trying to add the same technology twice shows a duplicate-warning toast instead of adding it again.

- **Live Stack Management** — The "Your Stack" sidebar updates instantly as technologies are added, showing the icon, name, and category of each pick. Each item can be removed individually with the ✕ button, or the entire stack can be cleared at once with **Remove All** — all backed by `react-toastify` alerts for add / duplicate / remove / remove-all actions.

- **Single-Source Gradient Theming** — The signature orange → pink → violet gradient (brand name, hero heading highlight, and primary buttons) is defined once in `src/index.css`, so the entire UI can be re-themed by editing a single value.

Other highlights: fully responsive layout (1 column on mobile, 2 on tablet, 3 on desktop), a sticky navbar with a mobile hamburger menu, and a loading state while the local JSON technology data is fetched.

---

## ⚙️ Tech Stack

- React 18 (Vite)
- Tailwind CSS + DaisyUI
- JavaScript (ES6+)
- react-toastify for alerts/notifications
- JSON as the local technology data source, loaded via `fetch` inside `useEffect`

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🎓 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript. It's used because it makes describing what the UI should look like much more readable than calling `React.createElement()` manually.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent — read-only from the child's side. State is data a component **owns and manages itself**, and it can change over time, which triggers a re-render. In this project, `technologies` and `stack` are state inside `App.jsx`, while `tech`, `isAdded`, and `onAdd` are props passed into `TechnologyCard`.

**3. What does the `useState` hook do, and where did you use it?**
`useState` lets a component hold and update local state between renders. It's used in `App.jsx` for `technologies`, `stack`, and `loading`, and in `Navbar.jsx` for `menuOpen` (mobile menu toggle).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects after a component renders — things like network requests that shouldn't happen during render itself. Fetching `technologies.json` is a side effect, so it's placed inside `useEffect` with an empty dependency array `[]` so it runs once, right after `App` mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses `key` to track which list item is which between renders, so it can update or remove the correct elements efficiently instead of re-rendering the whole list. Without a stable key, React can misidentify items after changes, causing bugs. Each technology's `id` is used as the key here.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a condition. One example is in `StackPanel.jsx` — it shows an empty message when `stack.length === 0`, otherwise it maps over the stack items.

**7. How do you pass data from a parent to a child, and how does a child send something back to the parent?**
A parent passes data down through **props** — e.g. `App.jsx` passes `tech`, `isAdded`, and `onAdd` into `TechnologyCard`. For a child to send data back up, the parent passes a function as a prop, and the child calls it — like `onAdd(tech)` being called inside `TechnologyCard`, which runs `handleAddToStack` back in `App.jsx`.
