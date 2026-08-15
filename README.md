<div align="center">

# 🏆 YouTube: Less Boring Edition (LBE)

> A modular, customizable userscript layer that transforms YouTube into a slightly less boring place.

[![Version](https://img.shields.io/badge/version-0.2-blue.svg)](https://github.com/Kas1mov)
[![Platform](https://img.shields.io/badge/platform-Tampermonkey-green.svg)](https://www.tampermonkey.net/)
[![License](https://img.shields.io/badge/license-Non--Commercial-orange.svg)](#-license)
[![Author](https://img.shields.io/badge/author-Kas1mov-brightgreen.svg)](https://github.com/Kas1mov)

---

</div>

## 📌 Overview

**YouTube: Less Boring Edition (LBE)** started with a simple idea: protect the **Like** button from accidental clicks and tweak standard YouTube labels.

Today, it is a fully modular client-side framework featuring its own UI, achievement system, localized settings, dynamic DOM replacements, and smart automation modules — all running client-side without external dependencies.

---

## ✨ Key Features at a Glance

| Feature | Status | Description |
| :--- | :---: | :--- |
| **🏆 Achievement System** | `Active` | Unlocks animated notifications & persistent progress via `localStorage`. |
| **🔐 Like Protection** | `Active` | Requires a 4-digit security PIN before registering a video Like. |
| **🎨 UI Customization** | `Active` | Dynamically overrides YouTube DOM labels with custom text strings. |
| **📺 Ad Reload** | `Active` | Detects player ad wrappers and reloads the video page automatically. |
| **⚙️ Integrated GUI** | `Active` | Native-feeling YouTube overlay with smooth jelly animations & toggle switches. |
| **🌐 Dual Localization** | `Active` | Instant dynamic translation switching (🇷🇺 RU / 🇬🇧 EN) without page reloads. |

---

## 🚀 Deep Dive into Core Modules

### 🏆 Achievement System
Tracks local milestones and triggers animated overlay alerts in the top-right corner.
- 🏆 **First Launch** — Unlocked upon first initialization.
- 🏆 **Don't Touch My Algorithm** — Triggered via Like protection rules.
- 🏆 **Nice** — Hidden milestone.

### 🔐 Like Protection Architecture
Prevents accidental algorithm polling on miss-clicks:

```text
[ Click Like ] ──> [ Intercept ] ──> [ PIN Prompt (5678) ] ──> [ Execute Native Like ]
