<div align="center">

# 🏆 YouTube: Less Boring Edition (LBE)

> A modular, customizable userscript layer that transforms YouTube into a slightly less boring place.

[![Version](https://img.shields.io/badge/version-0.2-blue.svg)](https://github.com/Kas1mov)
[![Platform](https://img.shields.io/badge/platform-Tampermonkey-green.svg)](https://www.tampermonkey.net/)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange.svg)](#-license-and-usage)
[![Author](https://img.shields.io/badge/author-Kas1mov-brightgreen.svg)](https://github.com/Kas1mov)

---

</div>

## 📌 Overview

**YouTube: Less Boring Edition (LBE)** is a personal userscript modification for YouTube created by **Kas1mov**.

The project started as a very simple idea: protect the **Like** button from accidental clicks and customize a few YouTube interface labels. It gradually evolved into a modular client-side customization layer with its own UI, achievement system, settings, localization, dynamic DOM replacements, and automation features.

LBE runs directly in the browser through a userscript manager such as Tampermonkey and does not require an external account or backend service for its core functionality.

---

## ✨ Features Overview

| Feature | Description |
| :--- | :--- |
| **🏆 Achievement System** | Unlockable achievements with animated notifications and persistent progress. |
| **🔐 Like Protection** | Protects the main video Like button with a four-digit PIN. |
| **🎨 UI Customization** | Dynamically replaces YouTube interface labels with custom text. |
| **📺 Ad Reload** | Detects active video advertisements and automatically reloads the page. |
| **⚙️ LBE Settings UI** | Provides a custom settings interface integrated directly into YouTube. |
| **✏️ Module Editors** | Allows individual module settings to be changed without editing source code. |
| **🌐 Dual Localization** | Supports Russian (🇷🇺) and English (🇬🇧) with instant language switching. |
| **🫠 Animated UI** | Smooth transitions, menu animations, button effects, and achievement alerts. |
| **🔊 Achievement Sound** | Plays a custom notification sound when an achievement is unlocked. |
<img width="400" height="406" alt="YouTube и еще 15 страниц — Профиль 1_ Microsoft_ Edge 2026-08-15 17-21-45 (online-video-cutter com)" src="https://github.com/user-attachments/assets/276c00de-7733-4336-a56c-8309f04a8a96" />

---

## 🚀 Detailed Feature Breakdown

### 🏆 Achievement System

LBE includes its own achievement system with persistent progress and notification sounds. Achievements appear as animated notifications in the top-right corner of the screen when unlocked and can be reviewed later through **YouTube LBE → Achievements**.

**Current Achievements:**

* 🏆 **First Launch** — Awarded when LBE is launched for the first time.
* 🏆 **Don't Touch My Algorithm** — Unlocked when Like Protection successfully blocks the first Like click.
* 🏆 **Nice** — Unlocked after successfully placing the first Like through the Like Protection system.

Achievement progress is stored locally using `localStorage`.


<img width="314" height="244" alt="Screenshot_3587" src="https://github.com/user-attachments/assets/683cc549-42b9-4f2e-b9e9-2f9caf18b243" />  <img width="400" height="147" alt="YouTube и еще 11 страниц — Профиль 1_ Microsoft_ Edge 2026-08-15 17-50-32 (online-video-cutter com)" src="https://github.com/user-attachments/assets/2fc9a540-fb12-479a-a623-e7175cb010f9" />





---

### 🔐 Like Protection

Designed to prevent accidental clicks on the main YouTube video Like button.

```text
[ 👍 Like Click ] ──> [ LBE Blocks Click ] ──> [ Button shows "НЕТ" ] ──> [ Enter 4-digit PIN ] ──> [ Unlocked for Real Like ]
```

* **Default PIN:** `5678` (configurable via LBE Settings).
* **Scope:** Only targets the main video Like button; comment likes are not affected.
* **Unlock Timeout:** Configurable duration for how long the real Like button remains available after PIN entry.
* **Native Flow:** LBE preserves native YouTube behavior by letting YouTube handle the actual Like action once unlocked.

---

### 🎨 UI Customization

Replace standard YouTube interface text with custom names directly from **LBE Settings → UI Customization → Edit** without touching source code:

| Original YouTube Text | Custom Replacement Example |
| :--- | :--- |
| **Нравится** | Пойдёт |
| **Поделиться** | Секрет |
| **Комментарии** | Мнения существ |
| **Сохранить** | В закладки |

New replacements can be added, edited, or removed at any time.

---

### 📺 Ad Reload

Checks YouTube video pages for active advertisements and automatically reloads the page upon detection.

* **Configuration:** Adjustable detection delay and maximum reload count limits.
* **Scope:** Operates strictly in video-page-only mode.
* **Session Tracking:** Tracks reload counters per video in `sessionStorage`.

> ⚠️ *Ad detection relies on YouTube's player DOM structure and may require updates if YouTube changes its interface.*
> 
<img width="400" height="241" alt="UPDATE 2 0 СИЛЬНО МЕНЯЕТ STALKER 2! GSC ПОКАЗАЛИ ВСЕ ИЗМЕНЕНИЯ - YouTube и еще 12 страниц — Профиль 1_ Microsoft_ Edge 2026-08-15 17-59-35 (online-v" src="https://github.com/user-attachments/assets/15f8e8f8-2c0e-4cc3-ae50-16c050cd95ed" />

---

### ⚙️ LBE Settings & Module Editors

Accessible via the **🏆 LBE** button in the YouTube header.

* **Control Panel:** Toggle modules `[ ON / OFF ]` or click `[ Edit ]` to open individual module setup.
* **Ad Reload Editor:** Configure delay, maximum reloads, and page constraints.
* **Like Protection Editor:** Change password and unlock timeout.
* **UI Customization Editor:** Manage, add, or remove custom text replacement key-value pairs.
* 
<img width="400" height="375" alt="YouTube и еще 10 страниц — Профиль 1_ Microsoft_ Edge 2026-08-15 18-06-19 (online-video-cutter com)" src="https://github.com/user-attachments/assets/f00a1357-3301-4348-8b2e-4d524d0a3a3e" />

---

### 🌐 Localization & 🫠 Animated UI

* **Dual Localization:** Instant language switching between 🇷🇺 **Русский** and 🇬🇧 **English** without page reloads. Rebuilds menus, settings, labels, and placeholders on the fly.
* **Animations:** Features smooth top-sliding menus, page transitions, interactive button hover/press states, and a jelly-style animation for the header icon.
* **Audio Feedback:** Custom notification sound plays alongside achievement unlock banners.

---

## 🧩 Architecture & Technical Overview

LBE creates a client-side customization layer on top of YouTube's single-page application (SPA) architecture using standard web APIs and DOM observers.

```text
YouTube SPA Web Application
│
├── Native DOM / Player APIs
│
└── 🏆 LBE Control Layer (Userscript Engine)
├── 🏆 Achievement Engine (localStorage)
├── 🔐 Interactive Security Interceptor
├── 🎨 MutationObserver UI Replacer
├── 📺 Player State Watcher (sessionStorage)
├── ⚙️ Integrated Settings Overlay
└── 🌐 Dynamic Localization Handler
```

Because YouTube relies heavily on dynamic DOM updates and SPA navigation, LBE continuously monitors navigation events to reapply customizations reliably.

---
## 📜 Release History

### Why v0.2?

YouTube: Less Boring Edition did not start as the project it is today.
The very first version of LBE was much smaller and was created as a simple experiment. **v0.1** focused on only a few basic features: protecting the YouTube Like button and replacing selected YouTube interface labels with custom text.
There was no full settings system, no achievement system, no localization, no Ad Reload, and no dedicated LBE interface.
As development continued, the project grew far beyond its original concept.
The simple userscript gradually became a modular customization layer with its own interface, persistent settings, achievements, localization, animations, module editors, and additional functionality.
Because the amount of new functionality significantly changed the project compared to its original prototype, the next public milestone was released as **v0.2** instead of continuing to treat it as a small v0.1 update.

### v0.2 — The First Official Release
**v0.2** represents the first major evolution of LBE.

It introduced:

* 🏆 Achievement System
* 🔐 Improved Like Protection
* 🎨 UI Customization
* 📺 Ad Reload
* ⚙️ LBE Settings
* ✏️ Module Editors
* 🌐 Russian / English Localization
* 🫠 Animated UI
* 🔊 Achievement Sound
* 💾 Persistent local configuration


### v0.1 — The Beginning
The original LBE prototype introduced the basic concept:
* 🔐 Like Protection
* 🎨 Custom YouTube interface labels
The goal was simple:
> Make YouTube a little less boring.
That small experiment became the foundation for everything that followed.
> 
In other words, **v0.1 was the prototype. v0.2 is where LBE became an actual project.**
This is why the first public release is **v0.2** rather than v0.1.
> **From a simple userscript experiment to YouTube: Less Boring Edition.**

## 💾 Local Storage Schema

LBE stores all user configuration, settings, and achievement data locally in the browser without requiring external accounts or backend databases:

| Storage Key | Storage Type | Description |
| :--- | :--- | :--- |
| `youtubeLBE_achievements_v2` | `localStorage` | Achievement unlock states and progress timestamps |
| `youtubeLBE_settings_v4` | `localStorage` | Active module toggles and custom configurations |
| `youtubeLBE_language_v1` | `localStorage` | Selected UI language preference (`ru` / `en`) |
| `youtubeLBE_adReload` | `sessionStorage` | Session-based ad reload counter per video |

---

## 📦 Installation

1. **Install Extension:** Add [Tampermonkey](https://www.tampermonkey.net/) (or a compatible userscript manager) to your browser.
2. **Install Script:** Open the `youtube-lbe.user.js` file and confirm the installation.
3. **Run:** Open or refresh YouTube. The **🏆 LBE button** will appear in the top-right area of the header.

---

## 🧪 Project Status & Version

* **Current Version:** `v0.2`
* **Status:** Active personal experimental project under continuous development. Features and internal implementations may evolve between releases.

---

## 📄 License and Usage

* **Personal Use:** Free for personal, educational, and non-commercial use.
* **Forks & Mods:** Fan-made modifications and non-commercial forks are welcomed.
* **Restrictions:** Commercial resale, monetization, or rebranding LBE as a paid commercial product is strictly prohibited.

---

<div align="center">

**YouTube: Less Boring Edition** • Created with 💡 by **[Kas1mov](https://github.com/Kas1mov)**

*YouTube doesn't have to be boring ;)*

</div>
