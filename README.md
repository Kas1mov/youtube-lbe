# YouTube: Less Boring Edition

> A customizable userscript mod that makes YouTube a little less boring.

**YouTube: Less Boring Edition (LBE)** is a personal userscript modification for YouTube created by **Kas1mov**.

The project started as a very simple idea: protect the Like button from accidental clicks and customize a few YouTube interface labels.

It gradually grew into a small modular system with its own UI, achievements, settings, localization and additional features.

---

## ✨ Features

### 🏆 Achievement System

LBE has its own achievement system with persistent progress.

Achievements appear as animated notifications in the top-right corner and can be viewed later through the LBE menu.

Currently available:

- 🏆 **First Launch**
- 🏆 **Don't Touch My Algorithm**
- 🏆 **Nice**

Achievement progress is stored locally using `localStorage`.

---

### 🔐 Like Protection

Protect the YouTube Like button from accidental clicks.

When the Like button is pressed:

```text
👍 Like
   ↓
НЕТ
   ↓
Enter code
   ↓
5678
   ↓
Real YouTube Like
