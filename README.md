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
```

The protection blocks the first click and requires a four-digit code before allowing the real YouTube Like action.

The protection only targets the main video Like button and does not interfere with comment Likes.

The password and unlock timeout can be configured through LBE Settings → Like Protection → Edit.

🎨 UI Customization

Change YouTube interface text to whatever you want.

Example:

Нравится        → Пойдёт
Поделиться      → Секрет
Комментарии     → Мнения существ
Сохранить       → В закладки

Custom replacements can be edited directly from:

LBE Settings → UI Customization → Edit

New replacements can be added or removed without editing the userscript source code.

📺 Ad Reload

LBE can check video pages for an active advertisement and automatically reload the page when one is detected.

The feature includes:

configurable detection delay;
configurable reload limit;
video-page-only mode;
per-video reload tracking.

The reload counter is stored in sessionStorage.

⚠️ Ad detection depends on YouTube's current player DOM and may need updates if YouTube changes its interface.

⚙️ LBE Settings

LBE has its own settings menu integrated directly into YouTube.

Each module has:

[ ON ] [ Edit ]

ON/OFF enables or disables the module.

Edit opens its individual configuration.

Current modules:

📺 Ad Reload
🔐 Like Protection
🎨 UI Customization
🌐 Localization

LBE includes built-in localization:

🇷🇺 Русский
🇬🇧 English

The language can be switched directly from the LBE menu.

The interface updates without reloading the page.

The selected language is stored locally and restored on the next visit.

🫠 Animated UI

LBE has its own animated interface instead of relying entirely on YouTube's UI.

This includes:

animated LBE menu opening;
smooth page transitions;
button press animations;
jelly animation for the LBE button;
animated achievement notifications.
🔊 Achievement Sound

Achievements can play a custom notification sound when unlocked.

🧩 How It Works

LBE runs as a userscript through a userscript manager such as Tampermonkey.

It does not modify YouTube's source code.

Instead, it adds a separate customization layer on top of the existing YouTube interface.

Conceptually:

YouTube
   │
   ├── Original interface
   │
   └── LBE
        ├── Achievements
        ├── Like Protection
        ├── UI Customization
        ├── Ad Reload
        ├── Settings
        └── Localization
📦 Installation
1. Install Tampermonkey

Install Tampermonkey for your browser.

2. Install LBE

Open the LBE userscript file:

youtube-lbe.user.js

Then install it through Tampermonkey.

3. Open YouTube

Open or reload YouTube.

The LBE 🏆 button will appear in the top-right YouTube header.

🏆 LBE Menu

The main LBE menu contains:

🏆 YouTube LBE        🇷🇺 🇬🇧


⚙ Settings
🏆 Achievements

The bottom of the menu displays the project information:

YouTube: Less Boring Edition
by Kas1mov
v0.2
💾 Local Storage

LBE stores its data locally in the browser.

Examples include:

youtubeLBE_achievements_v2
youtubeLBE_settings_v4
youtubeLBE_language_v1

Ad Reload additionally uses:

youtubeLBE_adReload

stored in sessionStorage.

No account or external database is required for LBE's local settings and achievements.

🧪 Project Status

LBE is currently a personal experimental project.

The project is actively evolving from a simple userscript into a more complete modular customization layer for YouTube.

Features and internal implementation may change between versions.

📜 Version

v0.2

Current release includes:

🏆 Achievement System
🔐 Like Protection
🎨 UI Customization
📺 Ad Reload
⚙️ LBE Settings
✏️ Module Editors
🇷🇺 Russian localization
🇬🇧 English localization
🫠 Animated UI
🔊 Achievement Sound
💾 Persistent local settings
👤 Author

Kas1mov

YouTube: Less Boring Edition

📄 License

LBE is intended to remain free for personal and non-commercial use.

Fan-made modifications and non-commercial forks are allowed.

Commercial resale of LBE or modified versions of LBE is not permitted.

See the repository license for the complete terms.
