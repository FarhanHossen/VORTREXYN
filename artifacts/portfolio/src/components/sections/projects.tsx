/**
 * projects.tsx — "Things I've Built" section.
 *
 * The most complex section in the portfolio. Renders a list of project
 * cards, each containing metadata, bullet points, a screenshot carousel,
 * and tech stack tags.
 *
 * Key components defined in this file:
 *   SlotImage         — A single slot in the 3D-perspective carousel track
 *   ScreenshotCarousel — Full carousel with drag, arrow buttons, dots, caption
 *   Projects          — The exported section component
 *   SectionHeader     — Local reusable heading block
 *
 * ── Carousel architecture ─────────────────────────────────────────────────
 * The screenshot carousel is a "virtual infinite" carousel built with
 * Framer Motion's `useMotionValue` and `useTransform`.
 *
 * Core idea:
 *   - A single `trackX` MotionValue represents the horizontal offset of the
 *     entire track (in pixels). Moving it left scrolls the carousel right.
 *   - Five SlotImage components are rendered at relative virtual positions
 *     [-2, -1, 0, +1, +2] around a `centerVirtual` index.
 *   - Each SlotImage maps its screen X position to visual properties
 *     (size, opacity, blur, border glow) using `useTransform`, creating
 *     the illusion of depth/perspective.
 *   - Images are addressed modulo `total` so the carousel wraps infinitely.
 *
 * Two config objects define the slot dimensions for portrait (mobile
 * screenshots) and landscape (web/desktop screenshots) modes.
 *
 * ── Projects data ─────────────────────────────────────────────────────────
 * Projects are listed newest → oldest. The `id` field drives:
 *   - React keys
 *   - data-testid attributes for e2e testing
 *   - The `landscape` prop on ScreenshotCarousel (id === 2 = Car Rental = web)
 *
 * To add a new project: push a new object to the PROJECTS array with a
 * unique `id`, then add screenshot PNGs to `public/screenshots/`.
 */

import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Github, ExternalLink, Terminal, Code2, Layers, Smartphone, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Carousel configuration types ──────────────────────────────────────────

/**
 * CarouselConfig — Describes the pixel dimensions for one carousel mode.
 *
 * slotSpacing     — Horizontal distance (px) between adjacent slot centres.
 *                   Also used as the snap unit when dragging.
 * containerHeight — Fixed height (px) of the carousel container div.
 * widths          — [outermost, middle, center] slot widths in px.
 *                   Slots grow as they approach the center position.
 * heights         — [outermost, middle, center] slot heights in px.
 */
type CarouselConfig = {
  slotSpacing: number;
  containerHeight: number;
  widths:  [number, number, number]; // [outer, inner, center]
  heights: [number, number, number];
};

/**
 * PORTRAIT_CONFIG — Used for mobile app screenshots (tall/narrow images).
 * Narrower slot spacing keeps phone-shaped cards well-packed.
 */
const PORTRAIT_CONFIG: CarouselConfig = {
  slotSpacing:     130,
  containerHeight: 330,
  widths:  [68,  108, 162],
  heights: [121, 192, 288],
};

/**
 * LANDSCAPE_CONFIG — Used for web/desktop screenshots (wide/short images).
 * Wider spacing and shallower heights suit 16:9-ish screenshots.
 * Applied to the Car Rental project (id === 2) which is a web app.
 */
const LANDSCAPE_CONFIG: CarouselConfig = {
  slotSpacing:     215,
  containerHeight: 220,
  widths:  [134, 195, 274],
  heights: [84,  122, 171],
};

// ── Project data ───────────────────────────────────────────────────────────

/**
 * PROJECTS — All featured project entries, sorted newest → oldest.
 *
 * Fields:
 *   id          — unique number; controls landscape carousel & test IDs
 *   title       — project display name
 *   subtitle    — one-line descriptor shown below the title
 *   year        — release/completion year string
 *   type        — 'mobile' | 'web' — controls the badge icon shown
 *   bullets     — array of achievement strings rendered as a bullet list
 *   screenshots — ordered array of { src, alt } for the carousel
 *                 src paths are relative to /public/screenshots/
 *   tags        — tech stack pills shown at the bottom of the card
 *   github      — GitHub repo URL (optional)
 *   demo        — live site or App Store URL (optional)
 *   demoLabel   — button label for the demo link (e.g. "App Store", "Live Site")
 *   website     — additional website URL shown as a second button (optional)
 */
const PROJECTS = [
  {
    id: 1,
    title: 'VORTREXYN Portfolio',
    subtitle: 'Personal Developer Portfolio Website',
    year: '2026',
    type: 'web' as const,
    bullets: [
      'Designed and built a personal portfolio website with a Deep Space Glass aesthetic — animated background orbs, glass-morphism cards, and a custom scroll-tracking navbar.',
      'Built a custom infinite screenshot carousel using Framer Motion — supporting drag, snap-to-slot physics, arrow navigation, and dot indicators for both portrait and landscape screenshots.',
      'Deployed as a fully responsive single-page application covering projects, skills, experience, education, achievements, licences, and contact sections.',
    ],
    screenshots: [
      { src: '/screenshots/portfolio-hero.png',            alt: 'Hero — landing' },
      { src: '/screenshots/portfolio-personal-info.png',   alt: 'Personal Information' },
      { src: '/screenshots/portfolio-social-profiles.png', alt: 'Social Profiles' },
      { src: '/screenshots/portfolio-projects.png',        alt: 'Projects' },
      { src: '/screenshots/portfolio-skills.png',          alt: 'Technical Toolkit' },
      { src: '/screenshots/portfolio-experience.png',      alt: 'Work Experience' },
      { src: '/screenshots/portfolio-education.png',       alt: 'Education' },
      { src: '/screenshots/portfolio-licenses.png',        alt: 'Licences & Achievements' },
      { src: '/screenshots/portfolio-cocurricular.png',    alt: 'Co-curricular Activities' },
      { src: '/screenshots/portfolio-contact.png',         alt: 'Contact' },
    ],
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Git'],
    github: 'https://github.com/FarhanHossen',
  },
  {
    id: 2,
    title: 'VORTREXYN Bubble Pop',
    subtitle: 'Cross-Platform Arcade Mobile Game',
    year: '2025',
    type: 'mobile' as const,
    bullets: [
      'Developed and published a cross-platform arcade mobile game on the Apple App Store with real-time global leaderboard and Firebase-authenticated user accounts.',
      'Engineered full iOS deployment pipeline including Apple Distribution Certificates, Provisioning Profiles, App Store Connect submission, and TestFlight beta testing via EAS (Expo Application Services).',
      'Integrated Firebase Authentication and Cloud Firestore for persistent player accounts and live score synchronization across all devices.',
      'Built and deployed a responsive marketing website using React, Vite, and Tailwind CSS, hosted on Netlify with CI/CD auto-deploy from GitHub.',
      'Configured custom domain with Cloudflare DNS, SSL/TLS termination, and App Store Connect domain verification.',
      'Architected a pnpm monorepo managing mobile app, API server, and website as isolated workspace packages with shared TypeScript configuration.',
      'Automated GitHub synchronization pipeline to maintain clean version history across a full-stack TypeScript codebase.',
    ],
    screenshots: [
      { src: '/screenshots/bubble-pop-splash.png', alt: 'Splash screen' },
      { src: '/screenshots/bubble-pop-signin.png', alt: 'Sign in' },
      { src: '/screenshots/bubble-pop-signup.png', alt: 'Sign up' },
      { src: '/screenshots/bubble-pop-reset.png', alt: 'Reset password' },
      { src: '/screenshots/bubble-pop-lobby.png', alt: 'Game lobby & settings' },
      { src: '/screenshots/bubble-pop-leaderboard.png', alt: 'Global leaderboard' },
      { src: '/screenshots/bubble-pop-gameplay-easy.png', alt: 'Gameplay — Easy' },
      { src: '/screenshots/bubble-pop-gameplay-medium.png', alt: 'Gameplay — Medium' },
      { src: '/screenshots/bubble-pop-gameplay-hard.png', alt: 'Gameplay — Hard' },
      { src: '/screenshots/bubble-pop-gameplay-extreme.png', alt: 'Gameplay — Extreme' },
    ],
    tags: ['React Native', 'Expo', 'Firebase Auth', 'Cloud Firestore', 'React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Node.js', 'pnpm', 'EAS', 'Netlify', 'Cloudflare', 'App Store Connect', 'Git', 'REST APIs'],
    github: 'https://github.com/FarhanHossen/VORTREXYN-Bubble-Pop',
    demo: 'https://apps.apple.com/us/app/vortrexyn-bubble-pop/id6764064306',
    demoLabel: 'App Store',
    website: 'https://vortrexynbubblepop.app/',
  },
  {
    id: 3,
    title: 'VORTREXYN Premium Car Rental',
    subtitle: 'Full-Stack Car Rental Platform',
    year: '2024',
    type: 'web' as const,
    bullets: [
      'Built a full-stack car rental platform with 625+ vehicles, Firebase Authentication, real-time Firestore database, and PayPal live payment integration.',
      'Developed an admin dashboard with role-based access control, booking approval workflow, fleet stock management, and AI-generated vehicle images and descriptions using OpenAI DALL-E 3 and GPT-4o-mini.',
      'Implemented automated transactional email notifications for booking confirmations and cancellations via EmailJS.',
      'Deployed to a custom domain with Netlify serverless functions proxying OpenAI API calls and a Node.js/Express backend serving a static HTML/CSS/JS frontend.',
    ],
    screenshots: [
      { src: '/screenshots/car-rental-splash.png',          alt: 'Splash screen' },
      { src: '/screenshots/car-rental-signin.png',          alt: 'Sign in' },
      { src: '/screenshots/car-rental-signup.png',          alt: 'Create account' },
      { src: '/screenshots/car-rental-reset.png',           alt: 'Reset password' },
      { src: '/screenshots/car-rental-fleet.png',           alt: 'Browse fleet' },
      { src: '/screenshots/car-rental-car-detail.png',      alt: 'Car detail & booking' },
      { src: '/screenshots/car-rental-confirm-order.png',   alt: 'Confirm order' },
      { src: '/screenshots/car-rental-my-reservations.png', alt: 'My reservations' },
      { src: '/screenshots/car-rental-profile.png',         alt: 'My profile' },
      { src: '/screenshots/car-rental-admin-overview.png',  alt: 'Admin — overview' },
      { src: '/screenshots/car-rental-admin-bookings.png',  alt: 'Admin — all bookings' },
      { src: '/screenshots/car-rental-admin-fleet.png',     alt: 'Admin — fleet inventory' },
      { src: '/screenshots/car-rental-admin-users.png',     alt: 'Admin — all users' },
      { src: '/screenshots/car-rental-admin-revenue.png',   alt: 'Admin — revenue stats' },
      { src: '/screenshots/car-rental-admin-add-vehicle.png', alt: 'Admin — add vehicle' },
    ],
    tags: ['JavaScript', 'Firebase Auth', 'Firestore', 'Node.js', 'Express.js', 'OpenAI API', 'PayPal SDK', 'EmailJS', 'Netlify', 'HTML5', 'CSS3', 'Git'],
    github: 'https://github.com/FarhanHossen/VORTREXYN-Premium-Car-Rental',
    demo: 'https://vortrexyn-premium-car-rental-system.com/',
    demoLabel: 'Website',
  },
  {
    id: 4,
    title: 'VORTREXYN Online Grocery Store',
    subtitle: 'Full-Stack Online Grocery Platform',
    year: '2024',
    type: 'web' as const,
    bullets: [
      'Built and deployed a full-stack online grocery platform featuring 500+ products across multiple categories, a multi-step checkout flow (cart → delivery → payment → confirmation), and a reward points system redeemable against orders.',
      'Integrated Firebase Authentication supporting email/password sign-up, Google OAuth, password reset via email, and session-based access control across all protected routes.',
      'Engineered AI-powered product image generation using OpenAI GPT-Image-1, with generated images stored in Firebase Storage and served dynamically across product listings.',
      'Designed and implemented a luxury dark "Night Market Glow" UI across all pages — fully responsive, with gold accent animations, glassmorphism cards, and an animated hexagon brand logo built entirely in SVG.',
      'Built a secure admin dashboard with product management (add/edit/delete with AI image generation), user management, and order visibility — protected behind server-side credential authentication.',
      'Architected a dual-database backend: PostgreSQL (Neon) for the product catalogue and Cloud Firestore for user profiles, cart state, delivery addresses, order history, and reward points.',
      'Automated transactional email delivery using Nodemailer (Gmail SMTP), sending order confirmation emails with full order summary, delivery address, and points earned on every successful checkout.',
      'Deployed via Netlify Functions (serverless-http wrapper), connected to GitHub for continuous deployment, with custom domain and DNS managed through Cloudflare.',
    ],
    screenshots: [
      { src: '/screenshots/grocery-splash.png',         alt: 'Splash screen' },
      { src: '/screenshots/grocery-home.png',           alt: 'Home — hero & features' },
      { src: '/screenshots/grocery-categories.png',     alt: 'Shop by category' },
      { src: '/screenshots/grocery-footer.png',         alt: 'Footer & category links' },
      { src: '/screenshots/grocery-signin.png',         alt: 'Sign in' },
      { src: '/screenshots/grocery-reset.png',          alt: 'Reset password' },
      { src: '/screenshots/grocery-signup.png',         alt: 'Create account' },
      { src: '/screenshots/grocery-all-products.png',   alt: 'All products listing' },
      { src: '/screenshots/grocery-cart.png',           alt: 'Shopping cart' },
      { src: '/screenshots/grocery-delivery.png',       alt: 'Delivery details' },
      { src: '/screenshots/grocery-payment.png',        alt: 'Payment & reward points' },
      { src: '/screenshots/grocery-order-confirmed.png', alt: 'Order confirmed' },
      { src: '/screenshots/grocery-admin-signin.png',     alt: 'Admin sign in' },
      { src: '/screenshots/grocery-admin-dashboard.png',  alt: 'Admin dashboard' },
      { src: '/screenshots/grocery-admin-dashboard2.png', alt: 'Admin — product list & user management' },
    ],
    tags: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'OpenAI API', 'Nodemailer', 'Netlify Functions', 'Serverless-HTTP', 'Git', 'GitHub', 'Netlify', 'Cloudflare'],
    github: 'https://github.com/FarhanHossen/VORTREXYN-Online-Grocery-Store',
    demo: 'https://vortrexyn-online-grocery-store.com/',
    demoLabel: 'Website',
  },
  {
    id: 5,
    title: 'Explainable Breast Cancer Detection from Histopathology Images',
    subtitle: 'BRAC University Thesis',
    year: '2023',
    type: 'web' as const,
    bullets: [
      'Built a deep learning-based computer-aided diagnosis (CAD) system for binary breast cancer classification (benign vs. malignant) achieving 97.535% accuracy on the BreakHis dataset of 9,109 histopathology images from 82 patients across four magnification levels (40X–400X).',
      'Applied transfer learning on three CNN architectures — VGG19 (95.65%), ResNet50V2 (94.38%), and MobileNetV2 (94.86%) — pre-trained on ImageNet, with custom layers including Global Average Pooling, Batch Normalization, and Dropout to reduce overfitting.',
      'Engineered a feature fusion pipeline by concatenating last-layer feature vectors from all three CNN models into a unified representation, then benchmarked seven linear classifiers (KNN, Random Forest, XGBoost, AdaBoost, SGD, Decision Tree, Logistic Regression); KNN and Random Forest achieved best performance at 97.535% and 97.455% respectively — surpassing prior state-of-the-art fusion models (91.1%).',
      'Implemented GradCAM (Gradient-weighted Class Activation Mapping) as an Explainable AI (XAI) technique to generate class-specific heatmaps over whole slide images, visually highlighting tumour regions of interest (ROI) and making model predictions interpretable for clinical use.',
    ],
    screenshots: [],
    tags: ['Python', 'TensorFlow', 'Keras', 'VGG19', 'ResNet50V2', 'MobileNetV2', 'KNN', 'Random Forest', 'XGBoost', 'AdaBoost', 'GradCAM', 'XAI', 'NumPy', 'scikit-learn', 'ImageNet Transfer Learning'],
  },
  {
    id: 6,
    title: 'VORTREXYN Hangman',
    subtitle: 'Cross-Platform Kids Word-Guessing Mobile Game',
    year: '2022',
    type: 'mobile' as const,
    bullets: [
      'Built and published an iOS word-guessing game on the Apple App Store featuring 1,427 words across 4 difficulty tiers (Easy / Medium / Hard / Extreme), an animated hangman figure, per-word category hints, and a one-time SOS hint system per round.',
      'Implemented a global real-time leaderboard using Cloud Firestore, tracking wins, win rate, and best streak per difficulty level for all registered players.',
      'Integrated Firebase Authentication supporting email/password sign-up, sign-in, password reset, and anonymous guest play.',
      'Engineered animated game UI using React Native Reanimated — including progressive hangman body-part reveals, confetti win modals, letter-reveal effects, and a colour-coded on-screen keyboard with used-letter tracking.',
      'Managed the full iOS deployment pipeline: Apple Distribution Certificates, Provisioning Profiles, App Store Connect submission, and EAS Build configuration (build 3, SDK 54).',
      'Built a companion marketing website (React + Vite + Tailwind) deployed on Netlify with a custom domain, SSL, and SPA routing.',
      'Configured App Store Connect domain verification, custom domain SSL, and privacy policy compliance at vortrexynhangman.app/privacy.',
    ],
    screenshots: [
      { src: '/screenshots/hangman-splash.png', alt: 'Splash screen' },
      { src: '/screenshots/hangman-signin.png', alt: 'Sign in' },
      { src: '/screenshots/hangman-signup.png', alt: 'Create account' },
      { src: '/screenshots/hangman-forgot-password.png', alt: 'Forgot password' },
      { src: '/screenshots/hangman-home.png', alt: 'Home — select difficulty' },
      { src: '/screenshots/hangman-leaderboard.png', alt: 'Leaderboard' },
      { src: '/screenshots/hangman-profile.png', alt: 'Profile & stats' },
      { src: '/screenshots/hangman-gameplay-easy.png', alt: 'Gameplay — Easy' },
      { src: '/screenshots/hangman-gameplay-medium.png', alt: 'Gameplay — Medium' },
      { src: '/screenshots/hangman-gameplay-hard.png', alt: 'Gameplay — Hard' },
      { src: '/screenshots/hangman-gameplay-extreme.png', alt: 'Gameplay — Extreme' },
      { src: '/screenshots/hangman-emoji-hint.png', alt: 'Emoji hint card' },
      { src: '/screenshots/hangman-win-modal.png', alt: 'Win modal' },
      { src: '/screenshots/hangman-category-health.png', alt: 'Category — Health' },
      { src: '/screenshots/hangman-category-colors.png', alt: 'Category — Colors' },
      { src: '/screenshots/hangman-category-music.jpg', alt: 'Category — Music' },
    ],
    tags: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'Firebase Auth', 'Cloud Firestore', 'React Native Reanimated', 'EAS Build', 'App Store Connect', 'React', 'Vite', 'Tailwind CSS', 'Netlify', 'Git'],
    github: 'https://github.com/FarhanHossen/VORTREXYN-Hangman',
    demo: 'https://apps.apple.com/au/app/vortrexyn-hangman/id6767557504',
    demoLabel: 'App Store',
    website: 'https://vortrexynhangman.app/',
  },
];

// ── Shared animation variant ───────────────────────────────────────────────

/**
 * fadeUp — Scroll-triggered entrance animation for project cards.
 * Each card staggers by (index × 0.08s) via the `custom` prop.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

// ── Carousel sub-components ────────────────────────────────────────────────

/**
 * SlotImage — One image slot in the perspective carousel.
 *
 * How it works:
 *   1. `screenX` is derived by adding the shared `trackX` motion value to
 *      this slot's fixed `virtualPos * slotSpacing` offset. As `trackX`
 *      changes (drag or animation), every slot's screenX updates together.
 *
 *   2. `centeredness` maps screenX to a 0→1 value:
 *        0 = far from centre (2 slots away), 1 = exactly at centre.
 *      This single derived value drives all the visual properties below.
 *
 *   3. Visual properties all derived from `centeredness` via useTransform:
 *        opacity   — fades out far slots (0.10 → 1)
 *        blurPx    — blurs out far slots (7px → 0)
 *        imgWidth/Height — grows toward centre (small → large)
 *        borderA   — border opacity (faint → bright cyan glow)
 *        shadow    — box-shadow cyan glow intensity
 *
 *   4. The slot is positioned at the track centre (left:'50%', top:'50%')
 *      and then offset by its computed screenX and negative half-width/height
 *      to keep it centred on its track position.
 *
 * Props:
 *   trackX      — shared MotionValue<number> representing the track's X offset
 *   virtualPos  — this slot's position relative to the carousel track (can be
 *                 any integer; wraps with modulo in the parent)
 *   screenshot  — { src, alt } image to display
 *   offset      — relative position from center: -2,-1,0,+1,+2
 *                 0 = center slot (grab cursor, no click to navigate)
 *   onSlotClick — called when a non-center slot is clicked (navigates carousel)
 *   cfg         — CarouselConfig with spacing and dimension values
 */
function SlotImage({
  trackX,
  virtualPos,
  screenshot,
  offset,
  onSlotClick,
  cfg,
}: {
  trackX: MotionValue<number>;
  virtualPos: number;
  screenshot: { src: string; alt: string };
  offset: number;
  onSlotClick: () => void;
  cfg: CarouselConfig;
}) {
  const { slotSpacing, widths, heights } = cfg;

  // screenX: pixel position of this slot on screen, tracking the drag offset
  const screenX = useTransform(trackX, (tx) => tx + virtualPos * slotSpacing);

  // centeredness: 0 = far away, 1 = perfectly centred
  // Clamps beyond ±2 slots so extreme positions don't exceed the range
  const centeredness = useTransform(
    screenX,
    [-2 * slotSpacing, -slotSpacing, 0, slotSpacing, 2 * slotSpacing],
    [0, 0.45, 1, 0.45, 0],
    { clamp: true },
  );

  // Visual property derivations from centeredness
  const opacity   = useTransform(centeredness, [0, 0.45, 1], [0.10,       0.45,       1]);
  const blurPx    = useTransform(centeredness, [0, 0.45, 1], [7,          2.8,        0]);
  const filter    = useTransform(blurPx, (b) => `blur(${b}px)`);
  const imgWidth  = useTransform(centeredness, [0, 0.45, 1], [widths[0],  widths[1],  widths[2]]);
  const imgHeight = useTransform(centeredness, [0, 0.45, 1], [heights[0], heights[1], heights[2]]);
  // borderA is the alpha channel (0–1) of the cyan border colour
  const borderA   = useTransform(centeredness, [0, 0.45, 1], [0.04,       0.15,       0.55]);
  const border    = useTransform(borderA, (a) => `2px solid rgba(56,189,248,${a})`);
  const shadow    = useTransform(centeredness, [0, 0.45, 1], [
    '0 0 0px rgba(56,189,248,0)',
    '0 0 10px rgba(56,189,248,0.07)',
    '0 0 30px rgba(56,189,248,0.20)',
  ]);

  // Negative half-dimensions for centering the slot on its position
  const halfW = useTransform(imgWidth,  (w) => -w / 2);
  const halfH = useTransform(imgHeight, (h) => -h / 2);

  // Center slot (offset === 0) uses grab cursor; side slots use pointer
  const isCenter = offset === 0;

  return (
    // Anchored to the centre of the container; slot position applied via motion x/y
    <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
      <motion.div
        style={{
          // Combine screenX + halfW so the slot is centred on its track position
          x: useTransform([screenX, halfW] as MotionValue[], ([sx, hw]: number[]) => sx + hw),
          y: halfH,
          opacity,
          filter,
          width: imgWidth,
          height: imgHeight,
          border,
          boxShadow: shadow,
          borderRadius: 16,
          overflow: 'hidden',
          background: 'hsl(222 48% 7%)',
          // Center slot shows grab cursor (for dragging); side slots show pointer
          cursor: isCenter ? 'grab' : 'pointer',
        }}
        // Side slots navigate on click; center slot ignores click (drag only)
        onClick={() => !isCenter && onSlotClick()}
      >
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top', display: 'block' }}
          draggable={false}   // prevent browser native drag conflicting with pointer events
          loading="lazy"      // defer off-screen image fetching
        />
      </motion.div>
    </div>
  );
}

/**
 * ScreenshotCarousel — Draggable infinite image carousel.
 *
 * State:
 *   centerVirtual — the virtual index of the currently centred image.
 *                   Increments/decrements as the user navigates. Wraps
 *                   to the image array via the `imgAt` helper.
 *   trackX        — MotionValue tracking the pixel offset of the whole
 *                   track. Driven by drag events and animated by
 *                   framer-motion's `animate()` for smooth transitions.
 *   isDragging    — ref (not state) to avoid re-renders during pointer drag
 *   startX        — pointer X position at drag start
 *   baseTrackX    — trackX value at drag start (for delta calculation)
 *   busy          — ref flag: prevents new navigation while an animation
 *                   is still running (avoids queued/stacking animations)
 *
 * Navigation methods:
 *   navigateSteps(n) — animates trackX by n slots and updates centerVirtual.
 *                      Duration scales slightly with distance (multi-step jumps).
 *   prev / next      — convenience wrappers for navigateSteps(-1) / (+1)
 *
 * Drag handling (pointer events):
 *   onPointerDown — captures the pointer (keeps tracking even outside element)
 *   onPointerMove — updates trackX in real time for live drag feedback
 *   onPointerUp   — snaps to nearest slot (or springs back if no full step taken)
 *
 * Props:
 *   screenshots — ordered array of { src, alt } for this project
 *   landscape   — if true, uses LANDSCAPE_CONFIG instead of PORTRAIT_CONFIG
 */
function ScreenshotCarousel({
  screenshots,
  landscape = false,
}: {
  screenshots: { src: string; alt: string }[];
  landscape?: boolean;
}) {
  // Select the dimension config based on portrait vs landscape mode
  const cfg = landscape ? LANDSCAPE_CONFIG : PORTRAIT_CONFIG;
  const { slotSpacing, containerHeight } = cfg;

  // centerVirtual: unbounded integer index of the centred image
  const [centerVirtual, setCenterVirtual] = useState(0);

  // Framer Motion value driving the entire track's horizontal offset
  const trackX      = useMotionValue(0);

  // Refs used during drag — not state, so they don't trigger re-renders
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const baseTrackX  = useRef(0);

  // busy prevents queuing multiple animations simultaneously
  const busy        = useRef(false);

  const total = screenshots.length;

  /**
   * imgAt — Maps any virtual index to a real array index via modulo.
   * Handles negative indices correctly (JS % can return negative values).
   * e.g. imgAt(-1) with total=5 → 4 (wraps around to the last image).
   */
  const imgAt = (v: number) => ((v % total) + total) % total;

  // The actual screenshot array index currently in the center slot
  const activeImg = imgAt(centerVirtual);

  /**
   * navigateSteps — Core navigation function.
   * Animates trackX to the position that places (centerVirtual + steps)
   * at the center, then updates centerVirtual state on completion.
   *
   * The animation uses a cubic-bezier ease curve for a natural deceleration.
   * Duration grows with step count (multi-jump feels slower/heavier).
   *
   * `busy.current` is set true for the duration to block concurrent calls.
   */
  const navigateSteps = (steps: number) => {
    if (busy.current || steps === 0) return;
    busy.current = true;
    const target = -centerVirtual * slotSpacing - steps * slotSpacing;
    const duration = Math.min(0.32 + (Math.abs(steps) - 1) * 0.07, 0.58);
    animate(trackX, target, {
      type: 'tween',
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      onComplete: () => {
        setCenterVirtual((v) => v + steps);
        busy.current = false;
      },
    });
  };

  const prev = () => navigateSteps(-1);
  const next = () => navigateSteps(1);

  /**
   * onPointerDown — Drag start.
   * Captures the pointer so the element keeps receiving events even if
   * the cursor leaves its bounds. Skips if a button was the direct target
   * (arrow buttons handle their own clicks separately).
   */
  const onPointerDown = (e: React.PointerEvent) => {
    if (busy.current) return;
    if ((e.target as Element).closest('button')) return; // don't steal arrow clicks
    isDragging.current = true;
    startX.current = e.clientX;
    baseTrackX.current = trackX.get();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  };

  /**
   * onPointerMove — Live drag update.
   * Sets trackX directly (no animation) for immediate visual feedback.
   */
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    trackX.set(baseTrackX.current + (e.clientX - startX.current));
  };

  /**
   * onPointerUp — Drag end / snap.
   * Converts the raw pixel delta to a step count by dividing by slotSpacing.
   * Clamps to at most (total - 1) steps to prevent jumps larger than the array.
   * If the drag was too small to move a full step, springs back to base position.
   */
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const rawDelta = e.clientX - startX.current;
    const rawSteps = -Math.round(rawDelta / slotSpacing);
    const steps = Math.max(-(total - 1), Math.min(total - 1, rawSteps));
    if (steps !== 0) {
      navigateSteps(steps);
    } else {
      // No full step reached — spring back to current center position
      animate(trackX, baseTrackX.current, { type: 'spring', stiffness: 400, damping: 38 });
    }
  };

  /**
   * arrowBtn — Factory for the left/right navigation arrow buttons.
   * Renders a circular button pinned to the left or right edge of the
   * carousel container. stopPropagation prevents the pointer-down handler
   * on the parent div from capturing clicks on these buttons.
   *
   * @param onClick — prev() or next()
   * @param side    — 'left' or 'right' controls absolute positioning
   */
  const arrowBtn = (onClick: () => void, side: 'left' | 'right') => (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="absolute z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all"
      style={{
        [side]: 4,               // positions left:4 or right:4
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'hsl(221 39% 14%)',
        border: '1px solid hsl(215 33% 22%)',
        color: 'hsl(215 20% 68%)',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.4)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'hsl(215 20% 68%)'; (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)'; }}
    >
      {side === 'left' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
    </button>
  );

  return (
    <div className="mb-6 select-none">

      {/* ── Track container ──────────────────────────────────────────────
          Fixed height from config. overflow:hidden clips side slots.
          touchAction:'pan-y' allows vertical page scroll on touch devices
          while horizontal drag is still captured by pointer events.     */}
      <div
        className="relative"
        style={{ height: containerHeight, overflow: 'hidden', touchAction: 'pan-y', cursor: 'grab' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp} // treat cancelled pointer same as up
      >
        {arrowBtn(prev, 'left')}

        {/* Render 5 slots: positions -2, -1, 0, +1, +2 relative to center.
            The two outermost slots (-2, +2) are nearly invisible (low opacity,
            heavy blur) but are rendered so the transition from -1 to -2 and
            +1 to +2 looks smooth without any pop-in.
            `off < 0 ? prev : off > 0 ? next` means clicking a left slot goes
            backward and clicking a right slot goes forward.              */}
        {([-2, -1, 0, 1, 2] as const).map((off) => (
          <SlotImage
            key={off}
            trackX={trackX}
            virtualPos={centerVirtual + off}
            screenshot={screenshots[imgAt(centerVirtual + off)]}
            offset={off}
            onSlotClick={off < 0 ? prev : off > 0 ? next : () => {}}
            cfg={cfg}
          />
        ))}

        {arrowBtn(next, 'right')}
      </div>

      {/* ── Dot indicators ───────────────────────────────────────────────
          One dot per screenshot. The active dot is wider (18px) and cyan;
          inactive dots are narrow (5px) and dark.
          Clicking a dot calculates the shortest path to that image
          (e.g. wrapping around if it's faster to go backward) and
          navigates by one step in that direction. One step per click
          was chosen intentionally for predictable animation speed.     */}
      <div className="flex justify-center gap-1.5 mt-3">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (busy.current) return;
              // Shortest-path calculation: find the direction (forward or back)
              // that requires fewer steps to reach image i from activeImg.
              const diff = ((i - activeImg) + total) % total;
              const shortDiff = diff > total / 2 ? diff - total : diff;
              if (shortDiff === 0) return; // already centered
              // Always move one step in the correct direction
              navigateSteps(shortDiff > 0 ? -1 : 1);
            }}
            className="rounded-full transition-all"
            style={{
              width: i === activeImg ? 18 : 5,  // active dot is wider (pill shape)
              height: 5,
              background: i === activeImg ? 'hsl(199 93% 60%)' : 'hsl(215 33% 22%)',
            }}
          />
        ))}
      </div>

      {/* Caption — shows the alt text of the current centre image and
          the "index / total" counter in a muted monospace style.       */}
      <p className="text-center font-mono text-xs mt-2" style={{ color: 'hsl(215 16% 50%)' }}>
        {screenshots[activeImg].alt}
        <span style={{ color: 'hsl(215 33% 28%)' }}> · {activeImg + 1}/{total}</span>
      </p>
    </div>
  );
}

// ── Main exported component ────────────────────────────────────────────────

/**
 * Projects — "Things I've Built" section.
 *
 * Renders the PROJECTS array as vertically-stacked glass-morphism cards.
 * Each card contains:
 *   - Header row: type badge, year, title, subtitle, GitHub icon, demo link
 *   - Bullet points (key achievements)
 *   - ScreenshotCarousel (portrait or landscape based on project id)
 *   - Tech stack tag pills
 *
 * After all PROJECTS cards, a placeholder "More projects coming soon" card
 * is shown with a dashed border to indicate the section is actively growing.
 *
 * Hover effect on cards: purple border glow + slight background brightening.
 * This is applied via inline onMouseEnter/Leave handlers because the exact
 * rgba values can't be expressed as Tailwind utility classes.
 */
export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading with Layers icon */}
        <SectionHeader icon={<Layers size={16} />} label="projects" title="Things I've Built" />

        <div className="mt-10 space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} // triggers 60px before fully visible
              custom={i}                                  // stagger delay per card
              data-testid={`project-card-${p.id}`}       // for e2e test selectors
              className="p-7 rounded-2xl backdrop-blur-xl transition-all duration-300 group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              // Hover: border turns purple, background brightens slightly
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,92,255,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* ── Card header ───────────────────────────────────────────
                  Left: "featured project" label + type badge + year + title + subtitle
                  Right: GitHub icon link + demo button                    */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {/* "featured project" monospace label with terminal icon */}
                    <Terminal size={13} style={{ color: 'hsl(199 93% 60%)' }} />
                    <span className="font-mono text-xs" style={{ color: 'hsl(199 93% 60%)' }}>
                      featured project
                    </span>

                    {/* Type badge: Smartphone icon for mobile, Globe for web */}
                    {p.type === 'mobile' ? (
                      <span className="font-mono text-xs flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(56,189,248,0.08)', color: 'hsl(199 93% 60%)', border: '1px solid rgba(56,189,248,0.18)' }}>
                        <Smartphone size={10} /> mobile
                      </span>
                    ) : (
                      <span className="font-mono text-xs flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(56,189,248,0.08)', color: 'hsl(199 93% 60%)', border: '1px solid rgba(56,189,248,0.18)' }}>
                        <Globe size={10} /> web
                      </span>
                    )}

                    {/* Year shown inline after the type badge */}
                    {p.year && (
                      <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
                        · {p.year}
                      </span>
                    )}
                  </div>

                  {/* Project title + subtitle */}
                  <h3 className="text-xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
                    {p.title}
                  </h3>
                  <p className="font-mono text-sm mt-0.5" style={{ color: 'hsl(215 16% 58%)' }}>
                    {p.subtitle}
                  </p>
                </div>

                {/* GitHub icon + demo link (top-right of card header) */}
                <div className="flex gap-3 ml-4 shrink-0 pt-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-github-${p.id}`}
                      title="View on GitHub"
                      className="transition-colors"
                      style={{ color: 'hsl(215 16% 55%)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(199 93% 60%)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 16% 55%)')}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {'website' in p && p.website && (
                    <a
                      href={p.website as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-website-${p.id}`}
                      title="Visit website"
                      className="font-mono text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded transition-all"
                      style={{ color: 'hsl(215 20% 68%)', border: '1px solid hsl(215 33% 22%)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(215 20% 68%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)';
                      }}
                    >
                      <ExternalLink size={12} />
                      Website
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-demo-${p.id}`}
                      title={p.demoLabel ?? 'View live site'}
                      className="font-mono text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded transition-all"
                      style={{ color: 'hsl(215 20% 68%)', border: '1px solid hsl(215 33% 22%)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(215 20% 68%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)';
                      }}
                    >
                      <ExternalLink size={12} />
                      {p.demoLabel ?? 'Live Site'}
                    </a>
                  )}
                </div>
              </div>

              {/* ── Bullet points ────────────────────────────────────────
                  Each bullet is prefixed with a small cyan dot (not a
                  ChevronRight, unlike experience.tsx — intentional visual
                  difference to make projects feel less like a resume).   */}
              <ul className="space-y-2 mb-5">
                {p.bullets.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'hsl(215 25% 72%)' }}>
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: 'hsl(199 93% 60%)' }} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* ── Screenshot carousel ──────────────────────────────────
                  Only rendered when the project has screenshots defined.
                  `landscape` is true for all web-type projects (wide screenshots).
                  Mobile projects use portrait mode.                          */}
              {'screenshots' in p && p.screenshots && p.screenshots.length > 0 && (
                <ScreenshotCarousel screenshots={p.screenshots} landscape={p.type === 'web'} />
              )}

              {/* ── Tech stack tags ──────────────────────────────────────
                  Cyan-tinted pill badges for each technology used.
                  Background uses a dark navy (hsl 222 48% 11%) to keep
                  tags visually distinct from the card background.        */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: 'hsl(222 48% 11%)',
                      color: 'hsl(199 93% 60%)',
                      border: '1px solid rgba(56,189,248,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── Placeholder card ─────────────────────────────────────────
              Shown after all real project cards. Dashed border and muted
              text signal that more projects are being prepared.
              Uses custom={1} (not i+1) to animate independently.        */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="p-7 rounded-2xl flex items-center justify-between"
            style={{ border: '1px dashed hsl(215 33% 17%)', color: 'hsl(215 16% 50%)' }}
          >
            <div>
              <p className="font-mono text-sm" style={{ color: 'hsl(215 16% 50%)' }}>
                More projects coming soon
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: 'hsl(215 16% 40%)' }}>
                Currently working on new builds
              </p>
            </div>
            <Code2 size={20} style={{ color: 'hsl(215 33% 17%)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section header ─────────────────────────────────────────────────────────

/**
 * SectionHeader — Local reusable heading block (defined per-file, not shared).
 * Renders: [icon] // label  →  Title  →  cyan underline bar.
 * Animates in from y=16 on scroll with a 0.45s ease transition.
 *
 * Props:
 *   icon  — Lucide icon element displayed in cyan
 *   label — short text for the monospace "// label" comment line
 *   title — large bold section heading
 */
function SectionHeader({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: 'hsl(199 93% 60%)' }}>{icon}</span>
        <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
          // {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
        {title}
      </h2>
      {/* Solid cyan underline — 48px wide, 1px tall */}
      <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
    </motion.div>
  );
}
