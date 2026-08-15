// ==UserScript==

// @name         YouTube: Less Boring Edition
// @namespace    https://github.com/Kas1mov/youtube-lbe
// @version      0.2
// @description  YouTube LBE — a customizable mod layer for YouTube.
// @author       Kas1mov
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    /*
    ============================================================
    YouTube: Less Boring Edition
    Version 0.2

    by Kas1mov

    MODULES:
      1. Achievement System
      2. Like Protection
      3. UI Customization
      4. Ad Reload
      5. LBE Header Menu
      6. LBE Settings
      7. Module Editor
      8. Animated UI
      9. Localization

    ============================================================
    */


    // ============================================================
    // CONFIG
    // ============================================================

    const LBE_CONFIG = {

        likePassword: '5678',

        unlockTimeout: 15000,


        // --------------------------------------------------------
        // UI CUSTOMIZATION
        // --------------------------------------------------------

        uiCustomization: {

            enabled: true,

            replacements: {

                'Поделиться': 'Секрет',
                'Сохранить': 'В закладки',
                'комментариев': 'мнения существ',
                'Не нравится': 'Говно',
                'Задавайте вопросы': 'Гемини вопросы',
                'В этом видео нет описания':
                    'Автор ленивое чмо без описания',
                'тыс.': 'К',
                'ответ': 'подсос',
                'ответов': 'подсосов',
                'года': 'зим',
                'год': 'зима',
                'Главная': 'Второстепенное',
                'Видео': 'Жалкий контент',
                'Shorts': 'Тиктоки для деградации',
                'Плейлисты': 'Божество контента',
                'Записи': 'Личная жизнь',
                'млн': 'М'
            },

            replaceLikeText: true,
            likeText: 'Пойдёт',

            replaceDislikeText: true,
            dislikeText: 'Не пойдёт',

            protectedLikeText: 'НЕТ'
        },


        // --------------------------------------------------------
        // ACHIEVEMENTS
        // --------------------------------------------------------

        achievements: {

            storageKey:
                'youtubeLBE_achievements_v2',

            notification: {

                showTime: 4500,

                width: 340
            }
        },


        // --------------------------------------------------------
        // AD RELOAD
        // --------------------------------------------------------

        adReload: {

            enabled: true,

            onlyWatchPages: true,

            checkDelay: 1000,

            maxReloads: 3,

            storageKey:
                'youtubeLBE_adReload'
        },


        // --------------------------------------------------------
        // SETTINGS
        // --------------------------------------------------------

        settings: {

            storageKey:
                'youtubeLBE_settings_v4'
        },


        // --------------------------------------------------------
        // LANGUAGE
        // --------------------------------------------------------

        language: {

            storageKey:
                'youtubeLBE_language_v1',

            default:
                'ru'
        },


        // --------------------------------------------------------
        // HEADER
        // --------------------------------------------------------

        header: {

            enabled: true,

            icon: '🏆',

            title: 'YouTube LBE'
        },


        // --------------------------------------------------------
        // BRANDING
        // --------------------------------------------------------

        branding: {

            name:
                'YouTube: Less Boring Edition',

            author:
                'by Kas1mov',

            version:
                'v0.2'
        }
    };


    // ============================================================
    // LOCALIZATION
    // ============================================================

    const LANG = {

        ru: {

            settings:
                'Настройки',

            achievements:
                'Достижения',

            settingsTitle:
                'Настройки LBE',

            achievementsTitle:
                'Достижения',

            functions:
                'Функции',

            edit:
                'Edit',

            on:
                'ON',

            off:
                'OFF',

            back:
                '←',

            save:
                'Cохранить',

            cancel:
                'Отмена',

            addReplacement:
                '+ Добавить замену',

            original:
                'Оригинал',

            replacement:
                'Замена',

            adReload:
                '📺 Ad Reload',

            adReloadDescription:
                'Автоматически перезагружать страницу при рекламе.',

            likeProtection:
                '🔐 Like Protection',

            likeProtectionDescription:
                'Защищать лайк четырёхзначным кодом.',

            uiCustomization:
                '🎨 UI Customization',

            uiCustomizationDescription:
                'Изменять названия интерфейса YouTube.',

            adReloadTitle:
                '📺 Ad Reload',

            adCheckDelay:
                'Задержка проверки рекламы (мс)',

            maxReloads:
                'Максимум перезагрузок',

            onlyWatchPages:
                '🎬 Только страницы видео',

            onlyWatchPagesDescription:
                'Не проверять главную, поиск, Shorts и другие страницы.',

            likeProtectionTitle:
                '🔐 Like Protection',

            password:
                'Пароль',

            unlockTimeout:
                'Время разблокировки (мс)',

            uiCustomizationTitle:
                '🎨 UI Customization',

            textReplacements:
                'Замены текста',

            achievementUnlocked:
                'Achievement unlocked',

            achievementDate:
                'Получено',

            locked:
                'Заблокировано',

            firstLaunch:
                'Первый запуск',

            firstLaunchDescription:
                'Открыть YouTube после установки LBE.',

            blockedLike:
                'Не трогай мой алгоритм',

            blockedLikeDescription:
                'Заблокировать первый лайк.',

            firstLike:
                'Пойдёт',

            firstLikeDescription:
                'Поставить первый лайк через систему защиты.',

            passwordError:
                'Пароль должен содержать ровно 4 цифры.',

            language:
                'Язык'
        },

        en: {

            settings:
                'Settings',

            achievements:
                'Achievements',

            settingsTitle:
                'LBE Settings',

            achievementsTitle:
                'Achievements',

            functions:
                'Features',

            edit:
                'Edit',

            on:
                'ON',

            off:
                'OFF',

            back:
                '←',

            save:
                'Save',

            cancel:
                'Cancel',

            addReplacement:
                '+ Add replacement',

            original:
                'Original',

            replacement:
                'Replacement',

            adReload:
                '📺 Ad Reload',

            adReloadDescription:
                'Automatically reload the page when an ad is detected.',

            likeProtection:
                '🔐 Like Protection',

            likeProtectionDescription:
                'Protect the Like button with a four-digit code.',

            uiCustomization:
                '🎨 UI Customization',

            uiCustomizationDescription:
                'Change YouTube interface labels.',

            adReloadTitle:
                '📺 Ad Reload',

            adCheckDelay:
                'Ad check delay (ms)',

            maxReloads:
                'Maximum reloads',

            onlyWatchPages:
                '🎬 Watch pages only',

            onlyWatchPagesDescription:
                'Ignore home, search, Shorts and other pages.',

            likeProtectionTitle:
                '🔐 Like Protection',

            password:
                'Password',

            unlockTimeout:
                'Unlock timeout (ms)',

            uiCustomizationTitle:
                '🎨 UI Customization',

            textReplacements:
                'Text replacements',

            achievementUnlocked:
                'Achievement unlocked',

            achievementDate:
                'Unlocked',

            locked:
                'Locked',

            firstLaunch:
                'First Launch',

            firstLaunchDescription:
                'Open YouTube after installing LBE.',

            blockedLike:
                'Don’t Touch My Algorithm',

            blockedLikeDescription:
                'Block the first Like.',

            firstLike:
                'Nice',

            firstLikeDescription:
                'Like a video through the protection system.',

            passwordError:
                'Password must contain exactly 4 digits.',

            language:
                'Language'
        }
    };


    // ============================================================
    // LANGUAGE
    // ============================================================

    function loadLanguage() {

        try {

            const value =
                localStorage.getItem(
                    LBE_CONFIG.language.storageKey
                );

            if (
                value === 'ru' ||
                value === 'en'
            ) {

                return value;
            }

        } catch (error) {

            console.warn(
                '[YouTube LBE] Language load failed:',
                error
            );
        }

        return LBE_CONFIG.language.default;
    }


    let currentLanguage =
        loadLanguage();


    function saveLanguage() {

        try {

            localStorage.setItem(
                LBE_CONFIG.language.storageKey,
                currentLanguage
            );

        } catch (error) {

            console.warn(
                '[YouTube LBE] Language save failed:',
                error
            );
        }
    }


    function t(key) {

        return (
            LANG[currentLanguage]?.[key] ??
            LANG.ru[key] ??
            key
        );
    }


    // ============================================================
    // DEFAULT SETTINGS
    // ============================================================

    const DEFAULT_SETTINGS = {

        adReload:
            LBE_CONFIG.adReload.enabled,

        likeProtection:
            true,

        uiCustomization:
            LBE_CONFIG.uiCustomization.enabled,

        adCheckDelay:
            LBE_CONFIG.adReload.checkDelay,

        maxAdReloads:
            LBE_CONFIG.adReload.maxReloads,

        password:
            LBE_CONFIG.likePassword,

        unlockTimeout:
            LBE_CONFIG.unlockTimeout,

        replacements: {
            ...LBE_CONFIG
                .uiCustomization
                .replacements
        },

        replaceLikeText:
            LBE_CONFIG
                .uiCustomization
                .replaceLikeText,

        likeText:
            LBE_CONFIG
                .uiCustomization
                .likeText,

        replaceDislikeText:
            LBE_CONFIG
                .uiCustomization
                .replaceDislikeText,

        dislikeText:
            LBE_CONFIG
                .uiCustomization
                .dislikeText
    };


    // ============================================================
    // SETTINGS STORAGE
    // ============================================================

    function loadLBESettings() {

        try {

            const raw =
                localStorage.getItem(
                    LBE_CONFIG
                        .settings
                        .storageKey
                );

            if (!raw) {

                return {
                    ...DEFAULT_SETTINGS,
                    replacements: {
                        ...DEFAULT_SETTINGS
                            .replacements
                    }
                };
            }

            const parsed =
                JSON.parse(raw);

            return {

                ...DEFAULT_SETTINGS,

                ...parsed,

                replacements: {

                    ...DEFAULT_SETTINGS
                        .replacements,

                    ...(parsed.replacements || {})
                }
            };

        } catch (error) {

            console.warn(
                '[YouTube LBE] Settings load failed:',
                error
            );

            return {

                ...DEFAULT_SETTINGS,

                replacements: {
                    ...DEFAULT_SETTINGS
                        .replacements
                }
            };
        }
    }


    const LBE_SETTINGS =
        loadLBESettings();


    function syncConfigFromSettings() {

        LBE_CONFIG.likePassword =
            LBE_SETTINGS.password;

        LBE_CONFIG.unlockTimeout =
            LBE_SETTINGS.unlockTimeout;

        LBE_CONFIG.adReload.checkDelay =
            LBE_SETTINGS.adCheckDelay;

        LBE_CONFIG.adReload.maxReloads =
            LBE_SETTINGS.maxAdReloads;

        LBE_CONFIG.uiCustomization
            .replacements =
            {
                ...LBE_SETTINGS
                    .replacements
            };

        LBE_CONFIG.uiCustomization
            .replaceLikeText =
            LBE_SETTINGS
                .replaceLikeText;

        LBE_CONFIG.uiCustomization
            .likeText =
            LBE_SETTINGS
                .likeText;

        LBE_CONFIG.uiCustomization
            .replaceDislikeText =
            LBE_SETTINGS
                .replaceDislikeText;

        LBE_CONFIG.uiCustomization
            .dislikeText =
            LBE_SETTINGS
                .dislikeText;
    }


    syncConfigFromSettings();


    function saveLBESettings() {

        try {

            localStorage.setItem(
                LBE_CONFIG
                    .settings
                    .storageKey,

                JSON.stringify(
                    LBE_SETTINGS
                )
            );

        } catch (error) {

            console.warn(
                '[YouTube LBE] Settings save failed:',
                error
            );
        }
    }


    // ============================================================
    // STATE
    // ============================================================

    const state = {

        videoId: null,

        mode: 'idle',

        passwordInput: '',

        unlockTimer: null,

        waitingForLike: false,

        scanScheduled: false,

        adCheckTimer: null,

        adCheckInProgress: false,

        lbeMenuOpen: false,

        settingsOpen: false,

        achievementsOpen: false,

        editorOpen: false,

        editorType: null
    };


    // ============================================================
    // ACHIEVEMENTS
    // ============================================================

    const ACHIEVEMENTS = {

        firstLaunch: {

            id: 'firstLaunch',

            icon: '🏆',

            titleKey:
                'firstLaunch',

            descriptionKey:
                'firstLaunchDescription'
        },

        blockedLike: {

            id: 'blockedLike',

            icon: '🏆',

            titleKey:
                'blockedLike',

            descriptionKey:
                'blockedLikeDescription'
        },

        firstLike: {

            id: 'firstLike',

            icon: '🏆',

            titleKey:
                'firstLike',

            descriptionKey:
                'firstLikeDescription'
        }
    };


    function loadAchievements() {

        const defaults = {};

        Object.keys(
            ACHIEVEMENTS
        ).forEach(id => {

            defaults[id] = null;

        });

        try {

            const raw =
                localStorage.getItem(
                    LBE_CONFIG
                        .achievements
                        .storageKey
                );

            if (!raw) {

                return defaults;
            }

            return {

                ...defaults,

                ...JSON.parse(raw)
            };

        } catch (error) {

            console.warn(
                '[YouTube LBE] Achievement load failed:',
                error
            );

            return defaults;
        }
    }


    let achievementsState =
        loadAchievements();


    function saveAchievements() {

        try {

            localStorage.setItem(
                LBE_CONFIG
                    .achievements
                    .storageKey,

                JSON.stringify(
                    achievementsState
                )
            );

        } catch (error) {

            console.warn(
                '[YouTube LBE] Achievement save failed:',
                error
            );
        }
    }


    // ============================================================
    // ACHIEVEMENT SOUND
    // ============================================================

    function playAchievementSound() {

        try {

            const audio =
                new Audio(
                    'https://www.myinstants.com/media/sounds/steam-achievement.mp3'
                );

            audio.volume = 0.7;
            audio.preload = 'auto';

            const promise =
                audio.play();

            if (promise) {

                promise.catch(error => {

                    console.warn(
                        '[YouTube LBE] Achievement sound blocked:',
                        error
                    );

                });
            }

        } catch (error) {

            console.warn(
                '[YouTube LBE] Achievement sound failed:',
                error
            );
        }
    }


    // ============================================================
    // BODY
    // ============================================================

    function waitForBody() {

        return new Promise(resolve => {

            if (document.body) {

                resolve();
                return;
            }

            const observer =
                new MutationObserver(() => {

                    if (document.body) {

                        observer.disconnect();
                        resolve();
                    }
                });

            observer.observe(
                document.documentElement,
                {
                    childList: true,
                    subtree: true
                }
            );
        });
    }


    // ============================================================
    // YOUTUBE READY
    // ============================================================

    async function waitForYouTubeReady() {

        await waitForBody();

        if (
            document.readyState !==
            'complete'
        ) {

            await new Promise(resolve => {

                window.addEventListener(
                    'load',
                    resolve,
                    {
                        once: true
                    }
                );

            });
        }

        await new Promise(resolve => {

            setTimeout(
                resolve,
                1000
            );

        });

        while (
            !document.querySelector(
                'ytd-app, #page-manager, #content'
            )
        ) {

            await new Promise(resolve => {

                setTimeout(
                    resolve,
                    100
                );

            });
        }

        console.log(
            '[YouTube LBE] YouTube loaded.'
        );
    }


    // ============================================================
    // ACHIEVEMENT OVERLAY
    // ============================================================

    let lbeOverlay = null;
    let lbeShadow = null;


    async function createLBEOverlay() {

        if (lbeOverlay) {
            return lbeShadow;
        }

        await waitForBody();

        lbeOverlay =
            document.createElement('div');

        lbeOverlay.id =
            'youtube-lbe-overlay-host';

        lbeOverlay.style.cssText = `
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            z-index: 2147483647;
            pointer-events: none;
        `;

        document.documentElement.appendChild(
            lbeOverlay
        );

        lbeShadow =
            lbeOverlay.attachShadow({
                mode: 'open'
            });

        const style =
            document.createElement('style');

        style.textContent = `
            .achievement-container {
                position: fixed;
                top: 20px;
                right: 20px;
                width:
                    ${LBE_CONFIG.achievements.notification.width}px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
                font-family:
                    Roboto,
                    Arial,
                    sans-serif;
            }

            .achievement {
                box-sizing: border-box;
                width: 100%;
                min-height: 92px;
                padding: 15px 16px;
                background:
                    linear-gradient(
                        135deg,
                        rgba(35,35,35,.98),
                        rgba(18,18,18,.98)
                    );
                border:
                    1px solid
                    rgba(255,255,255,.12);
                border-radius: 5px;
                box-shadow:
                    0 8px 30px
                    rgba(0,0,0,.55);
                display: flex;
                align-items: center;
                gap: 13px;
                color: white;
                transform:
                    translateX(
                        calc(100% + 50px)
                    );
                opacity: 0;
                transition:
                    transform .35s
                    cubic-bezier(.2,.8,.2,1),
                    opacity .35s ease;
            }

            .achievement.visible {
                transform:
                    translateX(0);
                opacity: 1;
            }

            .achievement-icon {
                width: 42px;
                height: 42px;
                min-width: 42px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                background:
                    rgba(255,255,255,.08);
                font-size: 24px;
            }

            .achievement-content {
                min-width: 0;
            }

            .achievement-header {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: .9px;
                opacity: .62;
                margin-bottom: 3px;
            }

            .achievement-title {
                font-size: 16px;
                font-weight: 600;
                line-height: 1.2;
                margin-bottom: 4px;
            }

            .achievement-description {
                font-size: 12px;
                line-height: 1.35;
                opacity: .68;
            }
        `;

        lbeShadow.appendChild(
            style
        );

        const container =
            document.createElement('div');

        container.className =
            'achievement-container';

        lbeShadow.appendChild(
            container
        );

        return lbeShadow;
    }


    async function showAchievement(id) {

        const achievement =
            ACHIEVEMENTS[id];

        if (
            !achievement ||
            achievementsState[id]
        ) {

            return false;
        }

        const shadow =
            await createLBEOverlay();

        const container =
            shadow.querySelector(
                '.achievement-container'
            );

        if (!container) {
            return false;
        }

        const toast =
            document.createElement('div');

        toast.className =
            'achievement';

        const icon =
            document.createElement('div');

        icon.className =
            'achievement-icon';

        icon.textContent =
            achievement.icon;

        const content =
            document.createElement('div');

        content.className =
            'achievement-content';

        const header =
            document.createElement('div');

        header.className =
            'achievement-header';

        header.textContent =
            t('achievementUnlocked');

        const title =
            document.createElement('div');

        title.className =
            'achievement-title';

        title.textContent =
            t(achievement.titleKey);

        const description =
            document.createElement('div');

        description.className =
            'achievement-description';

        description.textContent =
            t(achievement.descriptionKey);

        content.appendChild(header);
        content.appendChild(title);
        content.appendChild(description);

        toast.appendChild(icon);
        toast.appendChild(content);

        container.appendChild(toast);

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                toast.classList.add(
                    'visible'
                );

            });
        });

        achievementsState[id] =
            new Date().toISOString();

        saveAchievements();

        playAchievementSound();

        setTimeout(() => {

            toast.classList.remove(
                'visible'
            );

            setTimeout(() => {

                toast.remove();

            }, 400);

        }, LBE_CONFIG
            .achievements
            .notification
            .showTime);

        console.log(
            `%c[YouTube LBE] Achievement unlocked: ${t(achievement.titleKey)}`,
            'color:#ffd54a;font-weight:bold;'
        );

        return true;
    }


    // ============================================================
    // STYLES
    // ============================================================

    function createLBEStyles() {

        if (
            document.getElementById(
                'youtube-lbe-style'
            )
        ) {

            return;
        }

        const style =
            document.createElement('style');

        style.id =
            'youtube-lbe-style';

        style.textContent = `

            .youtube-lbe-header-button {
                width: 40px;
                height: 40px;
                margin-left: 4px;
                margin-right: 4px;
                padding: 0;
                border: none;
                border-radius: 50%;
                background: transparent;
                color: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 21px;
                transform-origin: center;
                transition:
                    background .15s ease,
                    transform .15s
                    cubic-bezier(.2,.8,.2,1);
            }

            .youtube-lbe-header-button:hover {
                background:
                    rgba(255,255,255,.10);
                transform:
                    scale(1.06);
            }

            .youtube-lbe-header-button:active {
                transform:
                    scale(.82);
            }

            .youtube-lbe-header-button.lbe-jelly {
                animation:
                    lbeJelly
                    .48s
                    cubic-bezier(.36,.07,.19,.97);
            }

            @keyframes lbeJelly {

                0% {
                    transform:
                        scale(1)
                        rotate(0deg);
                }

                18% {
                    transform:
                        scale(.82,1.18)
                        rotate(-3deg);
                }

                36% {
                    transform:
                        scale(1.18,.84)
                        rotate(3deg);
                }

                52% {
                    transform:
                        scale(.91,1.08)
                        rotate(-2deg);
                }

                68% {
                    transform:
                        scale(1.08,.94)
                        rotate(1deg);
                }

                84% {
                    transform:
                        scale(.98,1.02)
                        rotate(0deg);
                }

                100% {
                    transform:
                        scale(1)
                        rotate(0deg);
                }
            }

            .youtube-lbe-panel {
                position: fixed;
                top: 58px;
                right: 18px;
                width: 390px;
                max-height:
                    calc(100vh - 80px);
                overflow-y: auto;
                box-sizing: border-box;
                padding: 16px;
                border-radius: 12px;
                background:
                    rgba(25,25,25,.985);
                border:
                    1px solid
                    rgba(255,255,255,.10);
                box-shadow:
                    0 12px 40px
                    rgba(0,0,0,.55);
                z-index:
                    2147483646;
                color: white;
                font-family:
                    Roboto,
                    Arial,
                    sans-serif;
                opacity: 0;
                visibility: hidden;
                transform:
                    translateY(-24px)
                    scale(.94);
                transform-origin:
                    top right;
                pointer-events: none;
                transition:
                    opacity .24s ease,
                    transform .42s
                    cubic-bezier(.16,1,.3,1),
                    visibility 0s linear .42s;
            }

            .youtube-lbe-panel.open {
                opacity: 1;
                visibility: visible;
                transform:
                    translateY(0)
                    scale(1);
                pointer-events: auto;
                transition:
                    opacity .18s ease,
                    transform .45s
                    cubic-bezier(.16,1.2,.3,1),
                    visibility 0s;
            }

            .youtube-lbe-panel.lbe-closing {
                opacity: 0;
                transform:
                    translateY(-14px)
                    scale(.97);
                pointer-events: none;
            }

            .youtube-lbe-main-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 14px;
            }

            .youtube-lbe-main-title {
                font-size: 18px;
                font-weight: 600;
                white-space: nowrap;
            }

            .youtube-lbe-language {
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .youtube-lbe-language-button {
                width: 31px;
                height: 27px;
                padding: 0;
                border: none;
                border-radius: 6px;
                background:
                    rgba(255,255,255,.04);
                cursor: pointer;
                font-size: 17px;
                opacity: .38;
                transform:
                    scale(.95);
                transition:
                    opacity .15s ease,
                    background .15s ease,
                    transform .15s ease;
            }

            .youtube-lbe-language-button:hover {
                opacity: .8;
                background:
                    rgba(255,255,255,.08);
                transform:
                    scale(1);
            }

            .youtube-lbe-language-button.active {
                opacity: 1;
                background:
                    rgba(255,255,255,.10);
                transform:
                    scale(1);
            }

            .youtube-lbe-menu-button {
                width: 100%;
                border: none;
                padding: 11px;
                margin-top: 7px;
                border-radius: 8px;
                background:
                    rgba(255,255,255,.06);
                color: white;
                text-align: left;
                cursor: pointer;
                font-size: 14px;
                transition:
                    background .15s ease,
                    transform .12s ease;
            }

            .youtube-lbe-menu-button:hover {
                background:
                    rgba(255,255,255,.11);
                transform:
                    translateX(3px);
            }

            .youtube-lbe-menu-button:active {
                transform:
                    scale(.97);
            }

            .youtube-lbe-brand {
                margin-top: 14px;
                padding-top: 12px;
                border-top:
                    1px solid
                    rgba(255,255,255,.08);
                font-size: 11px;
                opacity: .48;
                text-align: right;
                line-height: 1.5;
                white-space:
                    pre-line;
            }

            .youtube-lbe-page-header {
                display: flex;
                align-items: center;
                gap: 9px;
                margin-bottom: 17px;
            }

            .youtube-lbe-back-button {
                width: 34px;
                height: 34px;
                padding: 0;
                border: none;
                border-radius: 50%;
                background:
                    rgba(255,255,255,.07);
                color: white;
                cursor: pointer;
                font-size: 17px;
                transition:
                    background .15s ease,
                    transform .15s ease;
            }

            .youtube-lbe-back-button:hover {
                background:
                    rgba(255,255,255,.12);
                transform:
                    scale(1.06);
            }

            .youtube-lbe-back-button:active {
                transform:
                    scale(.88);
            }

            .youtube-lbe-page-title {
                font-size: 19px;
                font-weight: 600;
            }

            .youtube-lbe-section {
                margin-top: 17px;
                padding-top: 13px;
                border-top:
                    1px solid
                    rgba(255,255,255,.08);
            }

            .youtube-lbe-section-title {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: .8px;
                opacity: .5;
                margin-bottom: 7px;
            }

            .youtube-lbe-module {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 11px 4px;
                border-radius: 8px;
                transition:
                    background .15s ease;
            }

            .youtube-lbe-module:hover {
                background:
                    rgba(255,255,255,.025);
            }

            .youtube-lbe-module-info {
                flex: 1;
                min-width: 0;
            }

            .youtube-lbe-module-title {
                font-size: 14px;
                font-weight: 500;
            }

            .youtube-lbe-module-description {
                margin-top: 3px;
                font-size: 11px;
                line-height: 1.3;
                opacity: .5;
            }

            .youtube-lbe-module-actions {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .youtube-lbe-toggle {
                min-width: 48px;
                padding: 6px 9px;
                border: none;
                border-radius: 6px;
                color: white;
                font-size: 11px;
                font-weight: 700;
                cursor: pointer;
                transition:
                    background .14s ease,
                    transform .12s ease;
            }

            .youtube-lbe-toggle.on {
                background:
                    #2e7d32;
            }

            .youtube-lbe-toggle.off {
                background:
                    #555;
            }

            .youtube-lbe-toggle:hover {
                filter:
                    brightness(1.1);
            }

            .youtube-lbe-toggle:active {
                transform:
                    scale(.88);
            }

            .youtube-lbe-edit {
                padding: 6px 9px;
                border: none;
                border-radius: 6px;
                background:
                    rgba(255,255,255,.08);
                color: white;
                font-size: 11px;
                cursor: pointer;
                transition:
                    background .15s ease,
                    transform .12s ease;
            }

            .youtube-lbe-edit:hover {
                background:
                    rgba(255,255,255,.14);
                transform:
                    translateY(-1px);
            }

            .youtube-lbe-edit:active {
                transform:
                    scale(.92);
            }

            .youtube-lbe-editor-row {
                margin-bottom: 14px;
            }

            .youtube-lbe-editor-label {
                display: block;
                margin-bottom: 6px;
                font-size: 12px;
                opacity: .65;
            }

            .youtube-lbe-input {
                width: 100%;
                box-sizing: border-box;
                padding: 9px 10px;
                border:
                    1px solid
                    rgba(255,255,255,.10);
                border-radius: 7px;
                background:
                    rgba(0,0,0,.25);
                color: white;
                outline: none;
                font-family:
                    inherit;
                font-size: 13px;
            }

            .youtube-lbe-input:focus {
                border-color:
                    rgba(255,255,255,.3);
                background:
                    rgba(0,0,0,.35);
            }

            .youtube-lbe-editor-buttons {
                display: flex;
                gap: 7px;
                margin-top: 16px;
            }

            .youtube-lbe-primary-button {
                flex: 1;
                padding: 9px;
                border: none;
                border-radius: 7px;
                background:
                    rgba(255,255,255,.12);
                color: white;
                cursor: pointer;
                transition:
                    background .15s ease,
                    transform .12s ease;
            }

            .youtube-lbe-primary-button:hover {
                background:
                    rgba(255,255,255,.18);
            }

            .youtube-lbe-primary-button:active {
                transform:
                    scale(.96);
            }

            .youtube-lbe-replacement {
                display: flex;
                gap: 7px;
                align-items: center;
                margin-bottom: 7px;
            }

            .youtube-lbe-replacement
            .youtube-lbe-input {
                min-width: 0;
            }

            .youtube-lbe-remove {
                width: 34px;
                min-width: 34px;
                height: 34px;
                border: none;
                border-radius: 6px;
                background:
                    rgba(255,60,60,.14);
                color: white;
                cursor: pointer;
                transition:
                    background .15s ease,
                    transform .12s ease;
            }

            .youtube-lbe-remove:hover {
                background:
                    rgba(255,60,60,.25);
            }

            .youtube-lbe-remove:active {
                transform:
                    scale(.88);
            }

            .youtube-lbe-add {
                width: 100%;
                padding: 9px;
                margin-top: 6px;
                border: none;
                border-radius: 7px;
                background:
                    rgba(255,255,255,.07);
                color: white;
                cursor: pointer;
            }

            .youtube-lbe-achievement-item {
                display: flex;
                gap: 12px;
                align-items: center;
                padding: 10px;
                margin-top: 7px;
                border-radius: 8px;
                background:
                    rgba(255,255,255,.05);
                transition:
                    background .15s ease,
                    transform .15s ease;
            }

            .youtube-lbe-achievement-item:hover {
                background:
                    rgba(255,255,255,.08);
                transform:
                    translateX(2px);
            }

            .youtube-lbe-achievement-item.locked {
                opacity: .35;
                filter:
                    grayscale(1);
            }

            .youtube-lbe-achievement-item-icon {
                width: 38px;
                min-width: 38px;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                background:
                    rgba(255,255,255,.07);
                font-size: 20px;
            }

            .youtube-lbe-achievement-item-title {
                font-size: 14px;
                font-weight: 600;
            }

            .youtube-lbe-achievement-item-description {
                margin-top: 2px;
                font-size: 11px;
                line-height: 1.3;
                opacity: .6;
            }

            .youtube-lbe-achievement-item-date {
                margin-top: 3px;
                font-size: 10px;
                opacity: .4;
            }
        `;

        document.head.appendChild(
            style
        );
    }


    // ============================================================
    // HEADER BUTTON
    // ============================================================

    function insertLBEHeaderButton() {

        if (
            !LBE_CONFIG.header.enabled
        ) {

            return;
        }

        if (
            document.querySelector(
                '.youtube-lbe-header-button'
            )
        ) {

            return;
        }

        const buttonsContainer =

            document.querySelector(
                'ytd-masthead #end #buttons'
            ) ||

            document.querySelector(
                'ytd-masthead #buttons'
            );

        if (!buttonsContainer) {

            return;
        }

        createLBEStyles();

        const button =
            document.createElement(
                'button'
            );

        button.className =
            'youtube-lbe-header-button';

        button.type =
            'button';

        button.textContent =
            LBE_CONFIG.header.icon;

        button.title =
            LBE_CONFIG.header.title;

        button.setAttribute(
            'aria-label',
            LBE_CONFIG.header.title
        );

        button.addEventListener(
            'click',
            event => {

                event.preventDefault();
                event.stopPropagation();

                button.classList.remove(
                    'lbe-jelly'
                );

                void button.offsetWidth;

                button.classList.add(
                    'lbe-jelly'
                );

                setTimeout(() => {

                    button.classList.remove(
                        'lbe-jelly'
                    );

                }, 500);

                toggleLBEMenu();
            }
        );

        const avatar =
            buttonsContainer.querySelector(
                'ytd-topbar-menu-button-renderer'
            );

        if (
            avatar &&
            avatar.parentElement ===
                buttonsContainer
        ) {

            buttonsContainer.insertBefore(
                button,
                avatar
            );

        } else {

            buttonsContainer.appendChild(
                button
            );
        }
    }


    // ============================================================
    // PANEL ANIMATION
    // ============================================================

    function animateOpen(element) {

        if (!element) {
            return;
        }

        element.classList.remove(
            'lbe-closing'
        );

        void element.offsetWidth;

        element.classList.add(
            'open'
        );
    }


    function animateClose(
        element,
        callback
    ) {

        if (
            !element ||
            !element.classList.contains(
                'open'
            )
        ) {

            if (callback) {
                callback();
            }

            return;
        }

        element.classList.add(
            'lbe-closing'
        );

        setTimeout(() => {

            element.classList.remove(
                'open',
                'lbe-closing'
            );

            if (callback) {
                callback();
            }

        }, 280);
    }


    // ============================================================
    // MAIN MENU
    // ============================================================

    function createMainMenu() {

        let menu =
            document.querySelector(
                '.youtube-lbe-main-menu'
            );

        if (menu) {
            return menu;
        }

        menu =
            document.createElement(
                'div'
            );

        menu.className =
            'youtube-lbe-panel youtube-lbe-main-menu';


        // --------------------------------------------------------
        // HEADER
        // --------------------------------------------------------

        const header =
            document.createElement(
                'div'
            );

        header.className =
            'youtube-lbe-main-header';


        const title =
            document.createElement(
                'div'
            );

        title.className =
            'youtube-lbe-main-title';

        title.textContent =
            '🏆 YouTube LBE';


        const language =
            document.createElement(
                'div'
            );

        language.className =
            'youtube-lbe-language';


        const ruButton =
            document.createElement(
                'button'
            );

        ruButton.type =
            'button';

        ruButton.className =
            'youtube-lbe-language-button';

        ruButton.textContent =
            '🇷🇺';

        ruButton.title =
            'Русский';


        const enButton =
            document.createElement(
                'button'
            );

        enButton.type =
            'button';

        enButton.className =
            'youtube-lbe-language-button';

        enButton.textContent =
            '🇬🇧';

        enButton.title =
            'English';


        function refreshLanguageButtons() {

            ruButton.classList.toggle(
                'active',
                currentLanguage === 'ru'
            );

            enButton.classList.toggle(
                'active',
                currentLanguage === 'en'
            );
        }


        ruButton.addEventListener(
            'click',
            event => {

                event.preventDefault();
                event.stopPropagation();

                setLanguage('ru');
            }
        );


        enButton.addEventListener(
            'click',
            event => {

                event.preventDefault();
                event.stopPropagation();

                setLanguage('en');
            }
        );


        language.appendChild(
            ruButton
        );

        language.appendChild(
            enButton
        );


        refreshLanguageButtons();


        header.appendChild(title);
        header.appendChild(language);


        menu.appendChild(header);


        // --------------------------------------------------------
        // SETTINGS
        // --------------------------------------------------------

        const settingsButton =
            document.createElement(
                'button'
            );

        settingsButton.type =
            'button';

        settingsButton.className =
            'youtube-lbe-menu-button';

        settingsButton.textContent =
            `⚙ ${t('settings')}`;

        settingsButton.addEventListener(
            'click',
            event => {

                event.stopPropagation();

                openSettingsPage();
            }
        );

        menu.appendChild(
            settingsButton
        );


        // --------------------------------------------------------
        // ACHIEVEMENTS
        // --------------------------------------------------------

        const achievementsButton =
            document.createElement(
                'button'
            );

        achievementsButton.type =
            'button';

        achievementsButton.className =
            'youtube-lbe-menu-button';

        achievementsButton.textContent =
            `🏆 ${t('achievements')}`;

        achievementsButton.addEventListener(
            'click',
            event => {

                event.stopPropagation();

                openAchievementsPage();
            }
        );

        menu.appendChild(
            achievementsButton
        );


        // --------------------------------------------------------
        // BRANDING
        // --------------------------------------------------------

        const brand =
            document.createElement(
                'div'
            );

        brand.className =
            'youtube-lbe-brand';

        brand.textContent =
            `${LBE_CONFIG.branding.name}
${LBE_CONFIG.branding.author}
${LBE_CONFIG.branding.version}`;

        menu.appendChild(
            brand
        );


        document.body.appendChild(
            menu
        );


        return menu;
    }


    // ============================================================
    // MODULE ROW
    // ============================================================

    function createModuleRow(
        parent,
        titleText,
        descriptionText,
        settingsKey,
        editorCallback
    ) {

        const row =
            document.createElement(
                'div'
            );

        row.className =
            'youtube-lbe-module';


        const info =
            document.createElement(
                'div'
            );

        info.className =
            'youtube-lbe-module-info';


        const title =
            document.createElement(
                'div'
            );

        title.className =
            'youtube-lbe-module-title';

        title.textContent =
            titleText;


        const description =
            document.createElement(
                'div'
            );

        description.className =
            'youtube-lbe-module-description';

        description.textContent =
            descriptionText;


        info.appendChild(title);
        info.appendChild(description);


        const actions =
            document.createElement(
                'div'
            );

        actions.className =
            'youtube-lbe-module-actions';


        const toggle =
            document.createElement(
                'button'
            );

        toggle.type =
            'button';

        toggle.className =
            'youtube-lbe-toggle';


        const edit =
            document.createElement(
                'button'
            );

        edit.type =
            'button';

        edit.className =
            'youtube-lbe-edit';

        edit.textContent =
            t('edit');

        edit.title =
            t('edit');


        function refresh() {

            const enabled =
                Boolean(
                    LBE_SETTINGS[
                        settingsKey
                    ]
                );

            toggle.textContent =
                enabled
                    ? t('on')
                    : t('off');

            toggle.classList.toggle(
                'on',
                enabled
            );

            toggle.classList.toggle(
                'off',
                !enabled
            );

            toggle.setAttribute(
                'aria-pressed',
                String(enabled)
            );
        }


        toggle.addEventListener(
            'click',
            event => {

                event.preventDefault();
                event.stopPropagation();


                LBE_SETTINGS[
                    settingsKey
                ] =
                    !LBE_SETTINGS[
                        settingsKey
                    ];


                saveLBESettings();

                refresh();


                if (
                    settingsKey ===
                    'likeProtection'
                ) {

                    if (
                        !LBE_SETTINGS
                            .likeProtection
                    ) {

                        state.mode =
                            'idle';

                        state.passwordInput =
                            '';

                        state.waitingForLike =
                            false;

                        clearTimeout(
                            state.unlockTimer
                        );

                        disableLikeProtection();
                    }
                }


                if (
                    settingsKey ===
                    'adReload'
                ) {

                    clearTimeout(
                        state.adCheckTimer
                    );

                    if (
                        LBE_SETTINGS
                            .adReload &&
                        isWatchPage()
                    ) {

                        scheduleAdCheck();
                    }
                }


                if (
                    settingsKey ===
                    'uiCustomization'
                ) {

                    scheduleScan();
                }

            }
        );


        edit.addEventListener(
            'click',
            event => {

                event.preventDefault();
                event.stopPropagation();

                editorCallback();
            }
        );


        actions.appendChild(toggle);
        actions.appendChild(edit);


        row.appendChild(info);
        row.appendChild(actions);


        parent.appendChild(row);


        refresh();


        return row;
    }


    // ============================================================
    // SETTINGS PAGE
    // ============================================================

    function createSettingsPage() {

        let page =
            document.querySelector(
                '.youtube-lbe-settings-page'
            );


        if (page) {

            return page;
        }


        page =
            document.createElement(
                'div'
            );

        page.className =
            'youtube-lbe-panel youtube-lbe-settings-page';


        const header =
            document.createElement(
                'div'
            );

        header.className =
            'youtube-lbe-page-header';


        const back =
            document.createElement(
                'button'
            );

        back.type =
            'button';

        back.className =
            'youtube-lbe-back-button';

        back.textContent =
            t('back');

        back.addEventListener(
            'click',
            () => {

                showMainMenu();
            }
        );


        const title =
            document.createElement(
                'div'
            );

        title.className =
            'youtube-lbe-page-title';

        title.textContent =
            `⚙ ${t('settingsTitle')}`;


        header.appendChild(back);
        header.appendChild(title);

        page.appendChild(header);


        const section =
            document.createElement(
                'div'
            );

        section.className =
            'youtube-lbe-section';


        const sectionTitle =
            document.createElement(
                'div'
            );

        sectionTitle.className =
            'youtube-lbe-section-title';

        sectionTitle.textContent =
            t('functions');

        section.appendChild(
            sectionTitle
        );


        createModuleRow(
            section,
            t('adReload'),
            t('adReloadDescription'),
            'adReload',
            () => {

                openEditor(
                    'adReload'
                );

            }
        );


        createModuleRow(
            section,
            t('likeProtection'),
            t('likeProtectionDescription'),
            'likeProtection',
            () => {

                openEditor(
                    'likeProtection'
                );

            }
        );


        createModuleRow(
            section,
            t('uiCustomization'),
            t('uiCustomizationDescription'),
            'uiCustomization',
            () => {

                openEditor(
                    'uiCustomization'
                );

            }
        );


        page.appendChild(section);


        const brand =
            document.createElement(
                'div'
            );

        brand.className =
            'youtube-lbe-brand';

        brand.textContent =
            `${LBE_CONFIG.branding.name}
${LBE_CONFIG.branding.author}
${LBE_CONFIG.branding.version}`;

        page.appendChild(
            brand
        );


        document.body.appendChild(
            page
        );


        return page;
    }


    // ============================================================
    // ACHIEVEMENTS PAGE
    // ============================================================

    function createAchievementsPage() {

        let page =
            document.querySelector(
                '.youtube-lbe-achievements-page'
            );


        if (page) {

            refreshAchievementsPage();

            return page;
        }


        page =
            document.createElement(
                'div'
            );

        page.className =
            'youtube-lbe-panel youtube-lbe-achievements-page';


        const header =
            document.createElement(
                'div'
            );

        header.className =
            'youtube-lbe-page-header';


        const back =
            document.createElement(
                'button'
            );

        back.type =
            'button';

        back.className =
            'youtube-lbe-back-button';

        back.textContent =
            t('back');

        back.addEventListener(
            'click',
            () => {

                showMainMenu();
            }
        );


        const title =
            document.createElement(
                'div'
            );

        title.className =
            'youtube-lbe-page-title';

        title.textContent =
            `🏆 ${t('achievementsTitle')}`;


        header.appendChild(back);
        header.appendChild(title);

        page.appendChild(header);


        const list =
            document.createElement(
                'div'
            );

        list.className =
            'youtube-lbe-achievements-list';

        page.appendChild(list);


        document.body.appendChild(
            page
        );


        refreshAchievementsPage();


        return page;
    }


    function refreshAchievementsPage() {

        const page =
            document.querySelector(
                '.youtube-lbe-achievements-page'
            );


        if (!page) {
            return;
        }


        const list =
            page.querySelector(
                '.youtube-lbe-achievements-list'
            );


        if (!list) {
            return;
        }


        list.replaceChildren();


        Object.values(
            ACHIEVEMENTS
        ).forEach(
            achievement => {

                const unlocked =
                    Boolean(
                        achievementsState[
                            achievement.id
                        ]
                    );


                const item =
                    document.createElement(
                        'div'
                    );

                item.className =
                    'youtube-lbe-achievement-item';


                if (!unlocked) {

                    item.classList.add(
                        'locked'
                    );
                }


                const icon =
                    document.createElement(
                        'div'
                    );

                icon.className =
                    'youtube-lbe-achievement-item-icon';

                icon.textContent =
                    unlocked
                        ? achievement.icon
                        : '🔒';


                const content =
                    document.createElement(
                        'div'
                    );


                const title =
                    document.createElement(
                        'div'
                    );

                title.className =
                    'youtube-lbe-achievement-item-title';

                title.textContent =
                    t(
                        achievement.titleKey
                    );


                const description =
                    document.createElement(
                        'div'
                    );

                description.className =
                    'youtube-lbe-achievement-item-description';

                description.textContent =
                    t(
                        achievement.descriptionKey
                    );


                content.appendChild(title);
                content.appendChild(description);


                const status =
                    document.createElement(
                        'div'
                    );

                status.className =
                    'youtube-lbe-achievement-item-date';


                if (unlocked) {

                    status.textContent =
                        `${t('achievementDate')}: ${
                            new Date(
                                achievementsState[
                                    achievement.id
                                ]
                            ).toLocaleString(
                                currentLanguage === 'ru'
                                    ? 'ru-RU'
                                    : 'en-US'
                            )
                        }`;

                } else {

                    status.textContent =
                        t('locked');
                }


                content.appendChild(status);


                item.appendChild(icon);
                item.appendChild(content);


                list.appendChild(item);

            }
        );
    }


    // ============================================================
    // EDITOR BASE
    // ============================================================

    function createEditorPage(
        titleText
    ) {

        const page =
            document.createElement(
                'div'
            );

        page.className =
            'youtube-lbe-panel youtube-lbe-editor-page';


        const header =
            document.createElement(
                'div'
            );

        header.className =
            'youtube-lbe-page-header';


        const back =
            document.createElement(
                'button'
            );

        back.type =
            'button';

        back.className =
            'youtube-lbe-back-button';

        back.textContent =
            t('back');

        back.addEventListener(
            'click',
            () => {

                showSettingsPage();
            }
        );


        const title =
            document.createElement(
                'div'
            );

        title.className =
            'youtube-lbe-page-title';

        title.textContent =
            titleText;


        header.appendChild(back);
        header.appendChild(title);

        page.appendChild(header);


        return page;
    }


    function addInput(
        parent,
        labelText,
        value,
        type = 'text'
    ) {

        const row =
            document.createElement(
                'div'
            );

        row.className =
            'youtube-lbe-editor-row';


        const label =
            document.createElement(
                'label'
            );

        label.className =
            'youtube-lbe-editor-label';

        label.textContent =
            labelText;


        const input =
            document.createElement(
                'input'
            );

        input.className =
            'youtube-lbe-input';

        input.type =
            type;

        input.value =
            value;


        row.appendChild(label);
        row.appendChild(input);

        parent.appendChild(row);


        return input;
    }


    function addEditorButtons(
        parent,
        saveCallback
    ) {

        const buttons =
            document.createElement(
                'div'
            );

        buttons.className =
            'youtube-lbe-editor-buttons';


        const save =
            document.createElement(
                'button'
            );

        save.type =
            'button';

        save.className =
            'youtube-lbe-primary-button';

        save.textContent =
            t('save');


        save.addEventListener(
            'click',
            () => {

                saveCallback();

                showSettingsPage();
            }
        );


        const cancel =
            document.createElement(
                'button'
            );

        cancel.type =
            'button';

        cancel.className =
            'youtube-lbe-primary-button';

        cancel.textContent =
            t('cancel');


        cancel.addEventListener(
            'click',
            () => {

                showSettingsPage();
            }
        );


        buttons.appendChild(save);
        buttons.appendChild(cancel);


        parent.appendChild(buttons);
    }


    // ============================================================
    // EDITOR DISPATCH
    // ============================================================

    function openEditor(type) {

    closeAllPanels();

    state.editorType =
        type;


    if (type === 'adReload') {

        openAdReloadEditor();

        return;
    }


    if (type === 'likeProtection') {

        openLikeProtectionEditor();

        return;
    }


    if (type === 'uiCustomization') {

        openUICustomizationEditor();

        return;
    }
}

    // ============================================================
    // AD RELOAD EDITOR
    // ============================================================

    function openAdReloadEditor() {

        const page =
            createEditorPage(
                t('adReloadTitle')
            );


        const section =
            document.createElement(
                'div'
            );

        section.className =
            'youtube-lbe-section';


        const delay =
            addInput(
                section,
                t('adCheckDelay'),
                String(
                    LBE_SETTINGS
                        .adCheckDelay
                ),
                'number'
            );


        const maxReloads =
            addInput(
                section,
                t('maxReloads'),
                String(
                    LBE_SETTINGS
                        .maxAdReloads
                ),
                'number'
            );


        const onlyWatchRow =
            document.createElement(
                'div'
            );

        onlyWatchRow.className =
            'youtube-lbe-module';


        const info =
            document.createElement(
                'div'
            );

        info.className =
            'youtube-lbe-module-info';


        const label =
            document.createElement(
                'div'
            );

        label.className =
            'youtube-lbe-module-title';

        label.textContent =
            t('onlyWatchPages');


        const desc =
            document.createElement(
                'div'
            );

        desc.className =
            'youtube-lbe-module-description';

        desc.textContent =
            t(
                'onlyWatchPagesDescription'
            );


        info.appendChild(label);
        info.appendChild(desc);


        const checkbox =
            document.createElement(
                'input'
            );

        checkbox.type =
            'checkbox';

        checkbox.checked =
            LBE_CONFIG
                .adReload
                .onlyWatchPages;


        onlyWatchRow.appendChild(info);
        onlyWatchRow.appendChild(checkbox);


        section.appendChild(
            onlyWatchRow
        );


        page.appendChild(
            section
        );


        addEditorButtons(
            page,
            () => {

                LBE_SETTINGS
                    .adCheckDelay =
                    Math.max(
                        100,
                        Number(
                            delay.value
                        ) || 1000
                    );


                LBE_SETTINGS
                    .maxAdReloads =
                    Math.max(
                        1,
                        Number(
                            maxReloads.value
                        ) || 3
                    );


                LBE_CONFIG
                    .adReload
                    .onlyWatchPages =
                    checkbox.checked;


                syncConfigFromSettings();
                saveLBESettings();


                clearTimeout(
                    state.adCheckTimer
                );


                if (
                    LBE_SETTINGS.adReload &&
                    isWatchPage()
                ) {

                    scheduleAdCheck();
                }
            }
        );


        document.body.appendChild(
            page
        );


        animateOpen(page);


        state.editorOpen =
            true;
    }


    // ============================================================
    // LIKE PROTECTION EDITOR
    // ============================================================

    function openLikeProtectionEditor() {

        const page =
            createEditorPage(
                t('likeProtectionTitle')
            );


        const section =
            document.createElement(
                'div'
            );

        section.className =
            'youtube-lbe-section';


        const password =
            addInput(
                section,
                t('password'),
                String(
                    LBE_SETTINGS
                        .password
                ),
                'password'
            );


        const timeout =
            addInput(
                section,
                t('unlockTimeout'),
                String(
                    LBE_SETTINGS
                        .unlockTimeout
                ),
                'number'
            );


        page.appendChild(
            section
        );


        addEditorButtons(
            page,
            () => {

                const newPassword =
                    password.value.trim();


                if (
                    /^\d{4}$/.test(
                        newPassword
                    )
                ) {

                    LBE_SETTINGS
                        .password =
                        newPassword;

                } else {

                    console.warn(
                        '[YouTube LBE]',
                        t('passwordError')
                    );

                    return;
                }


                LBE_SETTINGS
                    .unlockTimeout =
                    Math.max(
                        1000,
                        Number(
                            timeout.value
                        ) || 15000
                    );


                syncConfigFromSettings();
                saveLBESettings();
            }
        );


        document.body.appendChild(
            page
        );


        animateOpen(page);


        state.editorOpen =
            true;
    }


    // ============================================================
    // UI CUSTOMIZATION EDITOR
    // ============================================================

    function openUICustomizationEditor() {

        const page =
            createEditorPage(
                t('uiCustomizationTitle')
            );


        const section =
            document.createElement(
                'div'
            );

        section.className =
            'youtube-lbe-section';


        const sectionTitle =
            document.createElement(
                'div'
            );

        sectionTitle.className =
            'youtube-lbe-section-title';

        sectionTitle.textContent =
            t('textReplacements');


        section.appendChild(
            sectionTitle
        );


        const list =
            document.createElement(
                'div'
            );


        Object.entries(
            LBE_SETTINGS
                .replacements
        ).forEach(
            ([from, to]) => {

                addReplacementRow(
                    list,
                    from,
                    to
                );
            }
        );


        section.appendChild(list);


        const addButton =
            document.createElement(
                'button'
            );

        addButton.type =
            'button';

        addButton.className =
            'youtube-lbe-add';

        addButton.textContent =
            t('addReplacement');


        addButton.addEventListener(
            'click',
            () => {

                addReplacementRow(
                    list,
                    '',
                    ''
                );
            }
        );


        section.appendChild(
            addButton
        );


        page.appendChild(
            section
        );


        addEditorButtons(
            page,
            () => {

                const replacements = {};


                list
                    .querySelectorAll(
                        '.youtube-lbe-replacement'
                    )
                    .forEach(
                        row => {

                            const inputs =
                                row.querySelectorAll(
                                    'input'
                                );


                            if (
                                inputs.length <
                                2
                            ) {
                                return;
                            }


                            const from =
                                inputs[0]
                                    .value
                                    .trim();


                            const to =
                                inputs[1]
                                    .value;


                            if (from) {

                                replacements[
                                    from
                                ] =
                                    to;
                            }
                        }
                    );


                LBE_SETTINGS
                    .replacements =
                    replacements;


                syncConfigFromSettings();
                saveLBESettings();

                scheduleScan();
            }
        );


        document.body.appendChild(
            page
        );


        animateOpen(page);


        state.editorOpen =
            true;
    }


    function addReplacementRow(
        list,
        fromValue,
        toValue
    ) {

        const row =
            document.createElement(
                'div'
            );

        row.className =
            'youtube-lbe-replacement';


        const from =
            document.createElement(
                'input'
            );

        from.className =
            'youtube-lbe-input';

        from.placeholder =
            t('original');

        from.value =
            fromValue;


        const to =
            document.createElement(
                'input'
            );

        to.className =
            'youtube-lbe-input';

        to.placeholder =
            t('replacement');

        to.value =
            toValue;


        const remove =
            document.createElement(
                'button'
            );

        remove.className =
            'youtube-lbe-remove';

        remove.type =
            'button';

        remove.textContent =
            '×';


        remove.addEventListener(
            'click',
            () => {

                row.remove();
            }
        );


        row.appendChild(from);
        row.appendChild(to);
        row.appendChild(remove);


        list.appendChild(row);
    }


    // ============================================================
    // PANEL HELPERS
    // ============================================================

function closeAllPanels(removeFromDOM = false) {

    document
        .querySelectorAll(
            '.youtube-lbe-panel'
        )
        .forEach(panel => {

            panel.classList.remove(
                'open',
                'lbe-closing'
            );

            if (removeFromDOM) {
                panel.remove();
            }
        });


    state.lbeMenuOpen =
        false;

    state.settingsOpen =
        false;

    state.achievementsOpen =
        false;

    state.editorOpen =
        false;
}


    function showMainMenu() {

        closeAllPanels();


        state.editorType =
            null;


        const menu =
            createMainMenu();


        animateOpen(menu);


        state.lbeMenuOpen =
            true;
    }


    function showSettingsPage() {

        closeAllPanels();


        state.editorType =
            null;


        const page =
            createSettingsPage();


        animateOpen(page);


        state.settingsOpen =
            true;
    }


    function openSettingsPage() {

        showSettingsPage();
    }


    function openAchievementsPage() {

        closeAllPanels();


        state.editorType =
            null;


        const page =
            createAchievementsPage();


        refreshAchievementsPage();

        animateOpen(page);


        state.achievementsOpen =
            true;
    }


    // ============================================================
    // LANGUAGE SWITCH
    // ============================================================

    function setLanguage(language) {

    if (
        language !== 'ru' &&
        language !== 'en'
    ) {

        return;
    }


    if (
        currentLanguage === language
    ) {

        return;
    }


    /*
     * Запоминаем текущий экран
     * ДО удаления старого интерфейса.
     */

    let currentView = 'none';

    if (state.editorOpen) {

        currentView =
            'editor';

    } else if (state.settingsOpen) {

        currentView =
            'settings';

    } else if (state.achievementsOpen) {

        currentView =
            'achievements';

    } else if (state.lbeMenuOpen) {

        currentView =
            'main';
    }


    const editorType =
        state.editorType;


    /*
     * Меняем язык.
     */

    currentLanguage =
        language;


    saveLanguage();


    /*
     * УДАЛЯЕМ старые панели.
     *
     * Это ключевой фикс.
     */

    closeAllPanels(true);


    /*
     * Старый editorType тоже не должен
     * случайно остаться после пересоздания.
     */

    state.editorType =
        null;


    /*
     * Создаём интерфейс заново.
     * Теперь createMainMenu(), createSettingsPage()
     * и редакторы гарантированно используют новый t().
     */

    switch (currentView) {

        case 'main':

            showMainMenu();

            break;


        case 'settings':

            openSettingsPage();

            break;


        case 'achievements':

            openAchievementsPage();

            break;


        case 'editor':

            if (editorType) {

                openEditor(
                    editorType
                );

            } else {

                openSettingsPage();
            }

            break;
    }


    console.log(
        `[YouTube LBE] Language changed to ${currentLanguage}.`
    );
}

    // ============================================================
    // TOGGLE MAIN MENU
    // ============================================================

    function toggleLBEMenu() {

        if (

            state.settingsOpen ||

            state.achievementsOpen ||

            state.editorOpen

        ) {

            closeAllPanels();

            state.editorType =
                null;


            const menu =
                createMainMenu();


            animateOpen(menu);


            state.lbeMenuOpen =
                true;


            return;
        }


        const menu =
            createMainMenu();


        if (
            menu.classList.contains(
                'open'
            )
        ) {

            animateClose(
                menu,
                () => {

                    state.lbeMenuOpen =
                        false;

                }
            );

        } else {

            animateOpen(menu);

            state.lbeMenuOpen =
                true;
        }
    }


    // ============================================================
    // OUTSIDE CLICK
    // ============================================================

    document.addEventListener(
        'click',
        event => {

            const target =
                event.target;


            const menu =
                document.querySelector(
                    '.youtube-lbe-main-menu'
                );


            const headerButton =
                document.querySelector(
                    '.youtube-lbe-header-button'
                );


            if (

                state.lbeMenuOpen &&

                menu &&

                !menu.contains(target) &&

                headerButton &&

                !headerButton.contains(target)

            ) {

                animateClose(
                    menu,
                    () => {

                        state.lbeMenuOpen =
                            false;
                    }
                );
            }

        },
        true
    );


    // ============================================================
    // VIDEO PAGE
    // ============================================================

    function isWatchPage() {

        return (

            location.hostname ===
                'www.youtube.com' &&

            location.pathname ===
                '/watch'
        );
    }


    function getCurrentVideoId() {

        try {

            return new URL(
                location.href
            )
                .searchParams
                .get('v');

        } catch (_) {

            return null;
        }
    }


    // ============================================================
    // LIKE BUTTONS
    // ============================================================

    function getLikeButtons() {

        const selectors = [

            '#segmented-like-button button',

            'like-button-view-model button',

            'ytd-segmented-like-dislike-button-renderer ' +
                '#segmented-like-button button',

            'ytd-toggle-button-renderer button'
        ];


        const result = [];


        for (
            const selector
            of selectors
        ) {

            document
                .querySelectorAll(
                    selector
                )
                .forEach(
                    button => {

                        if (
                            !result.includes(
                                button
                            )
                        ) {

                            result.push(
                                button
                            );
                        }
                    }
                );
        }


        return result.filter(
            isActualVideoLikeButton
        );
    }


    function isActualVideoLikeButton(
        button
    ) {

        if (!button) {

            return false;
        }


        if (
            button.closest(
                'ytd-comment-thread-renderer,' +
                'ytd-comment-view-model,' +
                '#comments'
            )
        ) {

            return false;
        }


        if (
            button.closest(
                '#segmented-dislike-button'
            ) ||
            button.closest(
                'dislike-button-view-model'
            )
        ) {

            return false;
        }


        if (
            button.closest(
                '#segmented-like-button'
            ) ||
            button.closest(
                'like-button-view-model'
            )
        ) {

            return true;
        }


        const aria =
            (
                button.getAttribute(
                    'aria-label'
                ) || ''
            ).toLowerCase();


        return (

            aria.includes(
                'like this video'
            ) ||

            aria.includes(
                'нравится'
            ) ||

            aria.includes(
                'понравилось'
            )
        );
    }


    function getPrimaryLikeButton() {

        const buttons =
            getLikeButtons();


        if (
            !buttons.length
        ) {

            return null;
        }


        const preferred =
            buttons.find(
                button => {

                    return Boolean(
                        button.closest(
                            'ytd-watch-metadata,' +
                            'ytd-video-primary-info-renderer,' +
                            '#top-level-buttons-computed,' +
                            '#actions'
                        )
                    );
                }
            );


        return preferred ||
            buttons[0];
    }


    // ============================================================
    // LIKE STATE
    // ============================================================

    function isLiked(button) {

        if (!button) {
            return false;
        }


        if (
            button.getAttribute(
                'aria-pressed'
            ) === 'true'
        ) {

            return true;
        }


        const host =
            button.closest(
                '#segmented-like-button,' +
                'like-button-view-model,' +
                'ytd-toggle-button-renderer'
            );


        return Boolean(
            host &&
            host.getAttribute(
                'aria-pressed'
            ) === 'true'
        );
    }


    function getButtonTextNodes(
        button
    ) {

        if (!button) {
            return [];
        }


        return [
            ...button.querySelectorAll(
                'yt-formatted-string,' +
                '.yt-core-attributed-string,' +
                'span'
            )
        ].filter(
            element => {

                if (
                    element.closest(
                        'yt-icon'
                    )
                ) {

                    return false;
                }


                return Boolean(
                    element.textContent
                        .trim()
                );
            }
        );
    }


    // ============================================================
    // LIKE PROTECTION
    // ============================================================

    function enableLikeProtection() {

        if (
            !LBE_SETTINGS.likeProtection
        ) {

            return false;
        }


        const button =
            getPrimaryLikeButton();


        if (!button) {
            return false;
        }


        if (
            isLiked(button)
        ) {

            return false;
        }


        if (
            !button.dataset
                .lbeOriginalAria
        ) {

            button.dataset
                .lbeOriginalAria =
                button.getAttribute(
                    'aria-label'
                ) || '';
        }


        button.dataset
            .lbeProtected =
            'true';


        button.setAttribute(
            'aria-label',
            LBE_CONFIG
                .uiCustomization
                .protectedLikeText
        );


        getButtonTextNodes(
            button
        ).forEach(
            element => {

                if (
                    element.dataset
                        .lbeOriginalDisplay ===
                    undefined
                ) {

                    element.dataset
                        .lbeOriginalDisplay =
                        element.style.display;
                }


                element.style.display =
                    'none';
            }
        );


        if (
            !button.querySelector(
                '.youtube-lbe-protected-label'
            )
        ) {

            const label =
                document.createElement(
                    'span'
                );


            label.className =
                'youtube-lbe-protected-label';


            label.textContent =
                LBE_CONFIG
                    .uiCustomization
                    .protectedLikeText;


            label.style.cssText = `
                display: inline-flex;
                align-items: center;
                margin-left: 7px;
                font-size: 14px;
                font-weight: 500;
                line-height: 1;
            `;


            button.appendChild(
                label
            );
        }


        return true;
    }


    function disableLikeProtection() {

        document
            .querySelectorAll(
                'button[data-lbe-protected="true"]'
            )
            .forEach(
                button => {

                    button
                        .querySelectorAll(
                            '.youtube-lbe-protected-label'
                        )
                        .forEach(
                            element => {

                                element.remove();
                            }
                        );


                    button
                        .querySelectorAll(
                            '[data-lbe-original-display]'
                        )
                        .forEach(
                            element => {

                                element.style.display =
                                    element.dataset
                                        .lbeOriginalDisplay;

                                delete element.dataset
                                    .lbeOriginalDisplay;
                            }
                        );


                    if (
                        button.dataset
                            .lbeOriginalAria !==
                        undefined
                    ) {

                        button.setAttribute(
                            'aria-label',
                            button.dataset
                                .lbeOriginalAria
                        );
                    }


                    delete button.dataset
                        .lbeProtected;

                    delete button.dataset
                        .lbeOriginalAria;
                }
            );
    }


    // ============================================================
    // UI CUSTOMIZATION
    // ============================================================

    function applyTextReplacements() {

        if (
            !LBE_SETTINGS
                .uiCustomization
        ) {

            return;
        }


        const config =
            LBE_CONFIG
                .uiCustomization;


        if (
            !config.enabled ||
            !document.body
        ) {

            return;
        }


        const replacements = {
            ...LBE_SETTINGS
                .replacements
        };


        if (
            LBE_SETTINGS
                .replaceLikeText
        ) {

            replacements['Нравится'] =
                LBE_SETTINGS
                    .likeText;
        }


        if (
            LBE_SETTINGS
                .replaceDislikeText
        ) {

            replacements['Не нравится'] =
                LBE_SETTINGS
                    .dislikeText;
        }


        const entries =
            Object.entries(
                replacements
            );


        if (!entries.length) {
            return;
        }


        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode(node) {

                        const parent =
                            node.parentElement;


                        if (!parent) {

                            return NodeFilter
                                .FILTER_REJECT;
                        }


                        if (
                            lbeShadow &&
                            node.getRootNode() ===
                                lbeShadow
                        ) {

                            return NodeFilter
                                .FILTER_REJECT;
                        }


                        const tag =
                            parent.tagName;


                        if (
                            tag === 'SCRIPT' ||
                            tag === 'STYLE' ||
                            tag === 'NOSCRIPT' ||
                            tag === 'TEXTAREA'
                        ) {

                            return NodeFilter
                                .FILTER_REJECT;
                        }


                        return NodeFilter
                            .FILTER_ACCEPT;
                    }
                }
            );


        const nodes = [];


        while (
            walker.nextNode()
        ) {

            nodes.push(
                walker.currentNode
            );
        }


        nodes.forEach(
            node => {

                let text =
                    node.nodeValue;


                for (
                    const [from, to]
                    of entries
                ) {

                    if (
                        text.includes(
                            from
                        )
                    ) {

                        text =
                            text.replaceAll(
                                from,
                                to
                            );
                    }
                }


                node.nodeValue =
                    text;
            }
        );
    }


    // ============================================================
    // LIKE CLICK
    // ============================================================

    document.addEventListener(
        'click',
        function (event) {

            const clicked =
                event.target instanceof
                    Element
                    ? event.target.closest(
                        'button'
                    )
                    : null;


            if (!clicked) {
                return;
            }


            const likeButton =
                clicked.closest(
                    '#segmented-like-button button,' +
                    'like-button-view-model button,' +
                    'ytd-toggle-button-renderer button'
                );


            if (
                !likeButton ||
                !isActualVideoLikeButton(
                    likeButton
                )
            ) {

                return;
            }


            if (
                state.mode === 'protected' &&
                likeButton.dataset
                    .lbeProtected === 'true'
            ) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                return;
            }


            if (
                LBE_SETTINGS.likeProtection &&
                state.mode === 'idle' &&
                !isLiked(likeButton)
            ) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();


                state.mode =
                    'protected';

                state.passwordInput =
                    '';


                enableLikeProtection();

                showAchievement(
                    'blockedLike'
                );


                console.log(
                    '[YouTube LBE] Like protected.'
                );


                return;
            }


            if (
                LBE_SETTINGS.likeProtection &&
                state.mode === 'unlocked' &&
                !isLiked(likeButton)
            ) {

                state.waitingForLike =
                    true;


                setTimeout(
                    checkWhetherLikeWasApplied,
                    150
                );

                return;
            }

        },
        true
    );


    // ============================================================
    // PASSWORD INPUT
    // ============================================================

    document.addEventListener(
        'keydown',
        function (event) {

            if (
                !LBE_SETTINGS.likeProtection ||
                state.mode !== 'protected'
            ) {

                return;
            }


            const target =
                event.target;


            if (
                target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement ||
                target.isContentEditable
            ) {

                return;
            }


            if (
                !/^\d$/.test(
                    event.key
                )
            ) {

                return;
            }


            event.preventDefault();


            state.passwordInput +=
                event.key;


            if (
                state.passwordInput ===
                LBE_SETTINGS.password
            ) {

                unlockLike();

                return;
            }


            if (
                !LBE_SETTINGS
                    .password
                    .startsWith(
                        state.passwordInput
                    )
            ) {

                state.passwordInput =
                    '';

                state.mode =
                    'idle';


                clearTimeout(
                    state.unlockTimer
                );


                disableLikeProtection();


                console.log(
                    '[YouTube LBE] Wrong password.'
                );
            }

        },
        true
    );


    // ============================================================
    // UNLOCK LIKE
    // ============================================================

    function unlockLike() {

        state.passwordInput =
            '';

        state.mode =
            'unlocked';


        clearTimeout(
            state.unlockTimer
        );


        disableLikeProtection();


        state.unlockTimer =
            setTimeout(
                () => {

                    if (
                        state.mode ===
                            'unlocked' &&
                        !state.waitingForLike
                    ) {

                        state.mode =
                            'idle';
                    }

                },
                LBE_SETTINGS
                    .unlockTimeout
            );


        console.log(
            '[YouTube LBE] Like unlocked.'
        );
    }


    // ============================================================
    // CHECK REAL LIKE
    // ============================================================

    function checkWhetherLikeWasApplied() {

        if (
            !state.waitingForLike
        ) {

            return;
        }


        const button =
            getPrimaryLikeButton();


        if (!button) {

            setTimeout(
                checkWhetherLikeWasApplied,
                250
            );

            return;
        }


        if (
            isLiked(button)
        ) {

            state.waitingForLike =
                false;

            state.mode =
                'idle';


            clearTimeout(
                state.unlockTimer
            );


            showAchievement(
                'firstLike'
            );


            return;
        }


        setTimeout(
            checkWhetherLikeWasApplied,
            250
        );
    }


    // ============================================================
    // AD STORAGE
    // ============================================================

    function getAdReloadInfo() {

        try {

            const raw =
                sessionStorage.getItem(
                    LBE_CONFIG
                        .adReload
                        .storageKey
                );


            if (!raw) {

                return {
                    videoId: null,
                    count: 0
                };
            }


            const parsed =
                JSON.parse(raw);


            return {

                videoId:
                    parsed.videoId ||
                    null,

                count:
                    Number.isFinite(
                        parsed.count
                    )
                        ? parsed.count
                        : 0
            };


        } catch (_) {

            return {
                videoId: null,
                count: 0
            };
        }
    }


    function saveAdReloadInfo(
        videoId,
        count
    ) {

        try {

            sessionStorage.setItem(
                LBE_CONFIG
                    .adReload
                    .storageKey,

                JSON.stringify({
                    videoId,
                    count
                })
            );

        } catch (_) {}
    }


    // ============================================================
    // AD DETECTION
    // ============================================================

    function isAdCurrentlyShowing() {

        if (
            !LBE_SETTINGS.adReload ||
            !LBE_CONFIG.adReload.enabled
        ) {

            return false;
        }


        if (
            LBE_CONFIG
                .adReload
                .onlyWatchPages &&
            !isWatchPage()
        ) {

            return false;
        }


        const moviePlayer =
            document.querySelector(
                '#movie_player'
            );


        if (
            moviePlayer &&
            moviePlayer.classList.contains(
                'ad-showing'
            )
        ) {

            return true;
        }


        const playerAd =
            document.querySelector(
                [
                    '.ytp-ad-player-overlay',
                    '.ytp-ad-text',
                    '.ytp-ad-skip-button',
                    '.ytp-ad-preview-container',
                    '.ytp-ad-module',
                    '#player-ads'
                ].join(',')
            );


        if (playerAd) {

            const style =
                window.getComputedStyle(
                    playerAd
                );


            const rect =
                playerAd.getBoundingClientRect();


            if (
                style.display !== 'none' &&
                style.visibility !== 'hidden' &&
                rect.width > 0 &&
                rect.height > 0
            ) {

                return true;
            }
        }


        const playerContainer =
            document.querySelector(
                '.html5-video-player'
            );


        if (
            playerContainer &&
            (
                playerContainer.classList.contains(
                    'ad-interrupting'
                ) ||
                playerContainer.classList.contains(
                    'ad-showing'
                )
            )
        ) {

            return true;
        }


        return false;
    }


    // ============================================================
    // AD RELOAD
    // ============================================================

    function scheduleAdCheck() {

        if (
            !LBE_SETTINGS.adReload ||
            !LBE_CONFIG.adReload.enabled ||
            (
                LBE_CONFIG
                    .adReload
                    .onlyWatchPages &&
                !isWatchPage()
            )
        ) {

            return;
        }


        clearTimeout(
            state.adCheckTimer
        );


        state.adCheckTimer =
            setTimeout(
                performAdCheck,
                LBE_SETTINGS
                    .adCheckDelay
            );
    }


    function performAdCheck() {

        if (
            !LBE_SETTINGS.adReload ||
            state.adCheckInProgress
        ) {

            return;
        }


        state.adCheckInProgress =
            true;


        try {

            const videoId =
                getCurrentVideoId();


            if (!videoId) {

                return;
            }


            const info =
                getAdReloadInfo();


            if (
                info.videoId !==
                videoId
            ) {

                saveAdReloadInfo(
                    videoId,
                    0
                );


                info.videoId =
                    videoId;


                info.count =
                    0;
            }


            if (
                info.count >=
                LBE_SETTINGS.maxAdReloads
            ) {

                return;
            }


            if (
                !isAdCurrentlyShowing()
            ) {

                return;
            }


            const nextCount =
                info.count + 1;


            saveAdReloadInfo(
                videoId,
                nextCount
            );


            console.log(
                `%c[YouTube LBE] Advertisement detected. Reload ${nextCount}/${LBE_SETTINGS.maxAdReloads}`,
                'color:#ff9800;font-weight:bold;'
            );


            setTimeout(
                () => {

                    location.reload();

                },
                50
            );


        } finally {

            state.adCheckInProgress =
                false;
        }
    }


    // ============================================================
    // VIDEO CHANGE
    // ============================================================

    function handleVideoChange() {

        const newVideoId =
            getCurrentVideoId();


        if (
            newVideoId ===
            state.videoId
        ) {

            return;
        }


        state.videoId =
            newVideoId;


        state.mode =
            'idle';

        state.passwordInput =
            '';

        state.waitingForLike =
            false;


        clearTimeout(
            state.unlockTimer
        );


        disableLikeProtection();


        if (
            LBE_SETTINGS.adReload &&
            isWatchPage()
        ) {

            scheduleAdCheck();
        }
    }


    // ============================================================
    // SCAN
    // ============================================================

    function scheduleScan() {

        if (
            state.scanScheduled
        ) {

            return;
        }


        state.scanScheduled =
            true;


        requestAnimationFrame(
            () => {

                state.scanScheduled =
                    false;


                handleVideoChange();

                applyTextReplacements();

                insertLBEHeaderButton();
            }
        );
    }


    // ============================================================
    // NAVIGATION
    // ============================================================

    function setupNavigationListeners() {

        document.addEventListener(
            'yt-navigate-start',
            () => {

                state.mode =
                    'idle';

                state.passwordInput =
                    '';

                state.waitingForLike =
                    false;


                clearTimeout(
                    state.unlockTimer
                );


                clearTimeout(
                    state.adCheckTimer
                );


                disableLikeProtection();

                closeAllPanels();
            }
        );


        document.addEventListener(
            'yt-navigate-finish',
            () => {

                scheduleScan();


                if (
                    LBE_SETTINGS.adReload &&
                    isWatchPage()
                ) {

                    scheduleAdCheck();
                }
            }
        );


        window.addEventListener(
            'popstate',
            scheduleScan
        );


        window.addEventListener(
            'hashchange',
            scheduleScan
        );
    }


    // ============================================================
    // MUTATION OBSERVER
    // ============================================================

    function setupMutationObserver() {

        const observer =
            new MutationObserver(
                () => {

                    scheduleScan();


                    if (
                        state.mode ===
                            'protected' &&
                        LBE_SETTINGS
                            .likeProtection
                    ) {

                        const button =
                            getPrimaryLikeButton();


                        if (
                            button &&
                            !button.dataset
                                .lbeProtected
                        ) {

                            enableLikeProtection();
                        }
                    }

                }
            );


        observer.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );
    }


    // ============================================================
    // INITIALIZATION
    // ============================================================

    async function initialize() {

        console.log(
            '[YouTube LBE] Waiting for YouTube...'
        );


        await waitForYouTubeReady();


        console.log(
            '[YouTube LBE] Starting LBE...'
        );


        await createLBEOverlay();


        createLBEStyles();


        setupNavigationListeners();


        setupMutationObserver();


        state.videoId =
            getCurrentVideoId();


        insertLBEHeaderButton();


        showAchievement(
            'firstLaunch'
        );


        scheduleScan();


        if (
            LBE_SETTINGS.adReload &&
            isWatchPage()
        ) {

            scheduleAdCheck();
        }


        console.log(
            `%c${LBE_CONFIG.branding.name} ${LBE_CONFIG.branding.version}`,
            'color:#ff0000;font-weight:bold;font-size:14px;'
        );


        console.log(
            `%c${LBE_CONFIG.branding.author}`,
            'color:#aaaaaa;font-weight:bold;'
        );


        console.log(
            '%c🏆 Achievement System: ON',
            'color:#ffd54a;font-weight:bold;'
        );


        console.log(
            `%c🔐 Like Protection: ${
                LBE_SETTINGS.likeProtection
                    ? 'ON'
                    : 'OFF'
            }`,
            'color:#72a7ff;font-weight:bold;'
        );


        console.log(
            `%c🎨 UI Customization: ${
                LBE_SETTINGS.uiCustomization
                    ? 'ON'
                    : 'OFF'
            }`,
            'color:#c084fc;font-weight:bold;'
        );


        console.log(
            `%c📺 Ad Reload: ${
                LBE_SETTINGS.adReload
                    ? 'ON'
                    : 'OFF'
            }`,
            'color:#ff9800;font-weight:bold;'
        );


        console.log(
            `%c🌐 Language: ${currentLanguage}`,
            'color:#8ab4f8;font-weight:bold;'
        );


        console.log(
            '%c🏆 LBE Header: ON',
            'color:#ffd54a;font-weight:bold;'
        );
    }


    // ============================================================
    // START
    // ============================================================

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true
            }
        );

    } else {

        initialize();
    }

})();
