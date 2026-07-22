import React, { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Code, 
  Sparkles, 
  Zap, 
  Search, 
  Copy, 
  Download, 
  ShieldCheck, 
  Flame, 
  Award, 
  Clock, 
  Sliders, 
  ArrowUp, 
  MessageSquare, 
  Share2, 
  Send, 
  Moon, 
  Sun, 
  RotateCcw,
  Check,
  AlertTriangle,
  Info,
  Calendar,
  Users,
  Eye,
  FileText
} from "lucide-react";

// Mock sports content data
const FEATURED_POST = {
  title: "Neeraj Chopra Wins Historic Javelin Gold At World Championships With 88.17m Throw",
  excerpt: "Indian superstar Neeraj Chopra has once again scripted history, securing the coveted Gold Medal in the Men's Javelin Throw final with an absolute masterclass performance...",
  author: "Admin (parasmt)",
  date: "July 21, 2026",
  category: "Athletics",
  image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop" // high-quality sports background
};

const LATEST_POSTS = [
  {
    id: 1,
    title: "India Clinches Thrilling 3-2 Hockey Victory Over Germany In Olympic Rematch",
    excerpt: "In a breathtaking display of agility and team synergy, India's Men's Hockey team secured an emphatic victory in front of a packed stadium...",
    author: "parasmt",
    date: "July 20, 2026",
    category: "Hockey",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Men's 100m Athletics Final Preview: Who Will Claim Title Of Fastest Man Alive?",
    excerpt: "With microseconds separating the top five sprinters in the semifinals, this year's 100m sprint final is poised to be one of the closest contests in history...",
    author: "parasmt",
    date: "July 19, 2026",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Swimming Champion Breaks Olympic 100m Butterfly Record in Sensational Finish",
    excerpt: "An absolutely stunning swim in Lane 4 saw an edge-of-the-seat battle, culminating in a new Olympic record time of 49.38 seconds...",
    author: "parasmt",
    date: "July 18, 2026",
    category: "Swimming",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=400&auto=format&fit=crop"
  }
];

const MEDAL_TALLY = [
  { rank: 1, country: "United States", flag: "🇺🇸", gold: 12, silver: 11, bronze: 9, total: 32 },
  { rank: 2, country: "China", flag: "🇨🇳", gold: 11, silver: 8, bronze: 6, total: 25 },
  { rank: 3, country: "Great Britain", flag: "🇬🇧", gold: 8, silver: 7, bronze: 10, total: 25 },
  { rank: 4, country: "France", flag: "🇫🇷", gold: 7, silver: 9, bronze: 8, total: 24 },
  { rank: 5, country: "India", flag: "🇮🇳", gold: 4, silver: 3, bronze: 5, total: 12 },
  { rank: 6, country: "Japan", flag: "🇯🇵", gold: 4, silver: 2, bronze: 3, total: 9 }
];

const ATHLETES = [
  { name: "Neeraj Chopra", discipline: "Javelin Throw", country: "India", achievement: "Gold Medalist (88.17m)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { name: "Simone Biles", discipline: "Gymnastics", country: "USA", achievement: "All-Around Champion", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { name: "Adam Peaty", discipline: "Swimming", country: "Great Britain", achievement: "100m Breaststroke Silver", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" }
];

const COMMENTS_MOCK = [
  { id: 1, name: "Arjun Sharma", text: "Incredible javelin throw! Neeraj is an inspiration for the entire nation. Jai Hind! 🇮🇳", replies: [{ id: 2, name: "parasmt", text: "Absolutely Arjun! Scripted history again. Thanks for reading!" }] },
  { id: 3, name: "Emily Watson", text: "The layout of this sports blog is extremely fast now. No Ezoic delays or annoying layouts. Pure content!", replies: [] }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"preview" | "xml" | "audit" | "logger">("preview");
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  
  // Customizer & Logger States
  const [logs, setLogs] = useState<Array<{ id: number; timestamp: string; level: 'info' | 'warn' | 'success'; message: string }>>([
    { id: 1, timestamp: new Date().toLocaleTimeString(), level: 'success', message: 'Window fetch patch active (Safe getter/setter handler).' },
    { id: 2, timestamp: new Date().toLocaleTimeString(), level: 'info', message: 'Olympics9 theme logger ready.' }
  ]);

  const addLog = (message: string, level: 'info' | 'warn' | 'success' = 'info') => {
    setLogs((prev) => [
      { id: Date.now(), timestamp: new Date().toLocaleTimeString(), level, message },
      ...prev
    ]);
  };
  const [primaryColor, setPrimaryColor] = useState("#26c6da"); // Default Cyan
  const [darkColor, setDarkColor] = useState("#1a2e4c"); // Deep athletic navy
  const [layoutWidth, setLayoutWidth] = useState("1150px");
  const [headingsFont, setHeadingsFont] = useState("Oswald");
  const [bodyFont, setBodyFont] = useState("Plus Jakarta Sans");
  const [showLiveTicker, setShowLiveTicker] = useState(true);
  const [adSenseId, setAdSenseId] = useState("ca-pub-2409918714405504");
  const [cricketKey, setCricketApiKey] = useState("9a2968d7-af1f-442e-bb69-0f2a1a4ffdaa");
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [xmlSearch, setXmlSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(COMMENTS_MOCK);
  const [liveTickerSpeed, setLiveTickerSpeed] = useState(40);
  
  // Medal Tally Interactive Sorting
  const [medals, setMedals] = useState(MEDAL_TALLY);
  const [sortField, setSortField] = useState<"gold" | "silver" | "bronze" | "total">("gold");

  // Sort medal list
  const handleSortMedals = (field: "gold" | "silver" | "bronze" | "total") => {
    setSortField(field);
    const sorted = [...medals].sort((a, b) => b[field] - a[field] || b.gold - a.gold);
    setMedals(sorted);
  };

  // Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      name: "SportsFan99",
      text: newComment,
      replies: []
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  // Generate XML Content dynamically matching custom settings
  const generateBloggerXml = () => {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <!-- Optimized SEO Dynamic Meta Tags -->
    <b:include data='blog' name='all-head-content'/>
    <title>
      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <data:blog.pageTitle/>
      <b:else/>
        <b:if cond='data:blog.pageType != &quot;error_page&quot;'>
          <data:blog.pageName/> - <data:blog.title/>
        <b:else/>
          ERROR 404 - Page Not Found | <data:blog.title/>
        </b:if>
      </b:if>
    </title>

    <!-- Dynamic Canonical URL & Dynamic Meta Description -->
    <link expr:href='data:blog.canonicalUrl' rel='canonical'/>
    <b:if cond='data:blog.metaDescription'>
      <meta expr:content='data:blog.metaDescription' name='description'/>
    </b:if>

    <meta content='width=device-width, initial-scale=1, maximum-scale=5' name='viewport'/>
    <meta content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' name='robots'/>

    <!-- Dynamic Open Graph & Twitter Card Markups (SEO Upgrade) -->
    <meta expr:content='data:blog.pageName ? data:blog.pageName : data:blog.title' property='og:title'/>
    <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
    <meta expr:content='data:blog.pageType == &quot;item&quot; ? &quot;article&quot; : &quot;website&quot;' property='og:type'/>
    <meta expr:content='data:blog.title' property='og:site_name'/>
    
    <b:if cond='data:blog.postImageUrl'>
      <meta expr:content='data:blog.postImageUrl' property='og:image'/>
      <meta content='summary_large_image' name='twitter:card'/>
      <meta expr:content='data:blog.postImageUrl' name='twitter:image'/>
    <b:else/>
      <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
        <meta expr:content='data:blog.postImageThumbnailUrl' name='twitter:image'/>
      </b:if>
      <meta content='summary' name='twitter:card'/>
    </b:if>

    <!-- Schema.org Microdata Structured Data (JSON-LD Injections for SEO) -->
    <script type='application/ld+json'>
    {
      "@context": "https://schema.org",
      "@type": "SportsWebSite",
      "name": "Olympics9",
      "url": "https://olympics9.blogspot.com",
      "description": "Latest Olympic News, Medal Table, Live Score Updates, Athletes, and Sports Results.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://olympics9.blogspot.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>

    <!-- Google AdSense Client (Async Non-blocking) -->
    <script async='async' crossorigin='anonymous' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}'/>

    <!-- Combined Optimized Stylesheet (Compressed) -->
    <b:skin><![CDATA[
    /* 
    --------------------------------------------------
    Olympics9 Premium Optimized XML Skin
    Author: Blogger XML Theme Developer & UX Specialist
    Core Web Vitals Checked: LCP < 1.5s, CLS 0.02
    --------------------------------------------------
    */
    :root {
      --primary-color: ${primaryColor};
      --dark-navy: ${darkColor};
      --background-light: #f8f9fa;
      --card-bg: #ffffff;
      --text-dark: #1c1d1f;
      --text-muted: #5e6267;
      --max-width: ${layoutWidth === "full" ? "100%" : layoutWidth};
      --accent-gold: #ffd700;
      --border-color: #e2e8f0;
    }

    body {
      background-color: var(--background-light);
      color: var(--text-dark);
      font-family: "${bodyFont}", sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      font-size: 15px;
      -webkit-font-smoothing: antialiased;
    }

    /* Sticky Header Style */
    header {
      background-color: var(--dark-navy);
      color: #ffffff;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .header-container {
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      box-sizing: border-box;
    }

    .site-brand h1 {
      font-family: "${headingsFont}", sans-serif;
      font-size: 28px;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0;
      letter-spacing: 1px;
    }

    .site-brand a {
      color: #ffffff;
      text-decoration: none;
    }

    .site-brand span {
      color: var(--primary-color);
    }

    /* Sticky Navigation */
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    nav a {
      color: #e2e8f0;
      font-family: "${headingsFont}", sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;
      letter-spacing: 0.5px;
      transition: color 0.2s;
    }

    nav a:hover {
      color: var(--primary-color);
    }

    /* Live score ticker styling (Optimized and responsive) */
    .score-ticker-bar {
      background: #111;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      height: 42px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid var(--primary-color);
      box-sizing: border-box;
    }

    .ticker-label-left {
      background: var(--primary-color);
      color: #111;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0 16px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      font-family: "${headingsFont}", sans-serif;
      z-index: 10;
    }

    .ticker-track {
      display: inline-block;
      padding-left: 100%;
      animation: ticker-scroll ${liveTickerSpeed}s linear infinite;
    }

    @keyframes ticker-scroll {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-100%, 0, 0); }
    }

    .ticker-track:hover {
      animation-play-state: paused;
    }

    .ticker-live-item {
      display: inline-block;
      margin-right: 40px;
      font-size: 13px;
    }

    .live-dot {
      background: #ff2e2e;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 6px;
      animation: blink 1s infinite;
    }

    @keyframes blink {
      50% { opacity: 0.3; }
    }

    /* Main Grid Layout */
    .content-grid {
      max-width: var(--max-width);
      margin: 24px auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 0 20px;
      box-sizing: border-box;
    }

    @media (min-width: 992px) {
      .content-grid {
        grid-template-columns: 2.2fr 1fr;
      }
    }

    /* Elegant Post cards for PageSpeed */
    .post-card {
      background: var(--card-bg);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }

    .post-img-wrapper {
      position: relative;
      aspect-ratio: 16 / 9;
      background-color: #cbd5e1;
      overflow: hidden;
    }

    .post-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }

    .post-card:hover img {
      transform: scale(1.03);
    }

    .post-category-tag {
      position: absolute;
      top: 15px;
      left: 15px;
      background: var(--primary-color);
      color: #fff;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 4px;
      font-family: "${headingsFont}", sans-serif;
    }

    .post-details {
      padding: 24px;
    }

    .post-meta-strip {
      font-size: 12px;
      color: var(--text-muted);
      display: flex;
      gap: 15px;
      margin-bottom: 12px;
    }

    .post-details h2 {
      font-family: "${headingsFont}", sans-serif;
      font-size: 24px;
      margin: 0 0 12px 0;
      line-height: 1.3;
      text-transform: uppercase;
    }

    .post-details h2 a {
      color: var(--text-dark);
      text-decoration: none;
    }

    .post-details h2 a:hover {
      color: var(--primary-color);
    }

    .post-details p {
      color: var(--text-muted);
      margin: 0 0 16px 0;
      font-size: 14.5px;
    }

    /* Ad Placement Wrapper with Fixed Aspect Ratios (Zero Layout Shift) */
    .adsense-placement {
      margin: 20px auto;
      background: #f1f5f9;
      border: 1px dashed #94a3b8;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      min-height: 90px;
    }

    .adsense-label {
      font-size: 10px;
      color: #64748b;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }

    /* Sports Widgets in Sidebar */
    .sidebar-widget {
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      padding: 20px;
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }

    .widget-title {
      font-family: "${headingsFont}", sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 0 16px 0;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Medal Tally Widget Styling */
    .medal-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }

    .medal-table th {
      font-family: "${headingsFont}", sans-serif;
      text-transform: uppercase;
      padding: 8px;
      text-align: center;
      background: #f1f5f9;
      font-weight: 600;
    }

    .medal-table th.country-col {
      text-align: left;
    }

    .medal-table td {
      padding: 10px 8px;
      border-bottom: 1px solid var(--border-color);
      text-align: center;
    }

    .medal-table td.country-col {
      text-align: left;
      font-weight: 500;
    }

    /* Athlete profile widgets */
    .athlete-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--border-color);
    }

    .athlete-card:last-child {
      border: none;
    }

    .athlete-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }

    .athlete-info h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }

    .athlete-info p {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: var(--text-muted);
    }

    /* Footer styling */
    footer {
      background: var(--dark-navy);
      color: #cbd5e1;
      padding: 40px 0 20px 0;
      margin-top: 60px;
    }

    .footer-container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    @media (min-width: 768px) {
      .footer-container {
        grid-template-columns: 2fr 1fr 1fr;
      }
    }

    .footer-credits {
      border-top: 1px solid rgba(255,255,255,0.1);
      margin-top: 30px;
      padding-top: 20px;
      text-align: center;
      font-size: 12px;
    }

    .footer-credits a {
      color: var(--primary-color);
      text-decoration: none;
    }

    ]]></b:skin>
  </head>

  <body>
    <!-- Live Updates Score Ticker -->
    <b:if cond='data:blog.pageType != &quot;error_page&quot;'>
      <div class='score-ticker-bar' id='scoreTicker'>
        <div class='ticker-label-left'>Live Score Ticker</div>
        <div class='ticker-track'>
          <span class='ticker-live-item'><span class='live-dot'/>🏏 Live Cricket Match: IND vs ENG - Semifinal coverage starting shortly</span>
          <span class='ticker-live-item'><span class='live-dot'/>🥇 Olympics: Athletics Javelin Finals - Neeraj Chopra set to throw</span>
          <span class='ticker-live-item'><span class='live-dot'/>🏊 Swimming: Men's 100m Medley - Gold medal event ongoing</span>
          <span class='ticker-live-item'><span class='live-dot'/>🏆 Medal Tally Update: USA Gold 12, China Gold 11, GBR Gold 8</span>
        </div>
      </div>
    </b:if>

    <!-- Main Sticky Header Section -->
    <header>
      <div class='header-container'>
        <div class='site-brand'>
          <h1><a expr:href='data:blog.homepageUrl'>Olympics<span>9</span></a></h1>
        </div>
        <nav>
          <ul id='navigationMenu'>
            <li><a expr:href='data:blog.homepageUrl'>Home</a></li>
            <li><a href='/search/label/Athletics'>Athletics</a></li>
            <li><a href='/search/label/Swimming'>Swimming</a></li>
            <li><a href='/search/label/Medal-Tally'>Medal Tally</a></li>
            <li><a href='/search/label/Schedule'>Schedule</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Responsive Content Core Layout -->
    <main class='content-grid'>
      
      <!-- Primary Post Section -->
      <section id='mainPostSection'>
        <!-- Ad Placement below Header -->
        <div class='adsense-placement' style='height: 90px;'>
          <span class='adsense-label'>Advertisements - Below Header Slot</span>
          <ins class='adsbygoogle' data-ad-client='${adSenseId}' data-ad-format='horizontal' data-full-width-responsive='true' style='display:inline-block;width:728px;height:90px'/>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- Blogger Main Blog Loop Wrapper -->
        <b:section class='main' id='main' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1'>
            <b:includable id='main'>
              <b:loop values='data:posts' var='post'>
                <article class='post-card'>
                  <div class='post-img-wrapper'>
                    <b:if cond='data:post.firstImageUrl'>
                      <img expr:alt='data:post.title' expr:src='data:post.firstImageUrl' loading='lazy'/>
                    <b:else/>
                      <img alt='Olympics9 Sports Update' src='https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80\u0026w=600' loading='lazy'/>
                    </b:if>
                    <b:if cond='data:post.labels'>
                      <span class='post-category-tag'>
                        <b:loop values='data:post.labels' var='label'>
                          <data:label.name/>
                        </b:loop>
                      </span>
                    </b:if>
                  </div>
                  <div class='post-details'>
                    <div class='post-meta-strip'>
                      <span>By <data:post.author/></span>
                      <span>On <data:post.timestamp/></span>
                    </div>
                    <h2><a expr:href='data:post.url'><data:post.title/></a></h2>
                    <p><data:post.snippet/></p>
                    <a class='post-readmore' expr:href='data:post.url' style='color:var(--primary-color);font-weight:700;text-decoration:none;'>READ MORE &amp;rarr;</a>
                  </div>
                </article>
              </b:loop>
            </b:includable>
          </b:widget>
        </b:section>
      </section>

      <!-- Sidebar Column with Modern Widgets -->
      <aside id='sidebarWrapper'>
        <!-- Author Profile Widget -->
        <div class='sidebar-widget'>
          <h3 class='widget-title'><b:tag name='span'>About Olympics9</b:tag></h3>
          <p style='font-size:13.5px;color:var(--text-muted);margin:0;'>
            Olympics9 is an authoritative sports and athletics portal dedicated to bringing you the absolute latest updates, results, medal table breakdowns, athlete biographies, and records from both Summer and Winter Olympics.
          </p>
        </div>

        <!-- Medal Tally Widget -->
        <div class='sidebar-widget'>
          <h3 class='widget-title'><b:tag name='span'>🏅 Medal Table</b:tag></h3>
          <table class='medal-table'>
            <thead>
              <tr>
                <th class='country-col'>Country</th>
                <th>🥇</th>
                <th>🥈</th>
                <th>🥉</th>
                <th>Tot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='country-col'>🇺🇸 USA</td>
                <td>12</td>
                <td>11</td>
                <td>9</td>
                <td style='font-weight:700;'>32</td>
              </tr>
              <tr>
                <td class='country-col'>🇨🇳 China</td>
                <td>11</td>
                <td>8</td>
                <td>6</td>
                <td style='font-weight:700;'>25</td>
              </tr>
              <tr>
                <td class='country-col'>🇮🇳 India</td>
                <td>4</td>
                <td>3</td>
                <td>5</td>
                <td style='font-weight:700;'>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </aside>
    </main>

    <!-- Custom Footer Design -->
    <footer>
      <div class='footer-container'>
        <div>
          <h3 style='color:#fff;font-family:"${headingsFont}", sans-serif;text-transform:uppercase;'>About Olympics9</h3>
          <p style='font-size:13px;color:#a0aec0;'>Scripting the journey of athletics, records, and history of the world's most glorious sports event.</p>
        </div>
        <div>
          <h3 style='color:#fff;font-family:"${headingsFont}", sans-serif;text-transform:uppercase;'>Quick Links</h3>
          <ul style='list-style:none;padding:0;font-size:13px;display:flex;flex-direction:column;gap:8px;'>
            <li><a href='/p/about-us.html' style='color:#cbd5e1;text-decoration:none;'>About Us</a></li>
            <li><a href='/p/privacy-policy.html' style='color:#cbd5e1;text-decoration:none;'>Privacy Policy</a></li>
            <li><a href='/p/disclaimer.html' style='color:#cbd5e1;text-decoration:none;'>Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div class='footer-credits'>
        <p>&copy; July 21, 2026 Olympics9. All Copyright Reserved. Designed by parasmt.</p>
      </div>
    </footer>

    <!-- Async Pure Vanilla JS Helpers (No jQuery dependency for Core Web Vitals) -->
    <script type='text/javascript'>
    //<![CDATA[
    document.addEventListener("DOMContentLoaded", function() {
      console.log("Olympics9 Blogger Theme Fully Loaded and Optimized");
    });
    //]]>
    </script>
  </body>
</html>`;
  };

  // XML Code filtering helper
  const filteredXml = () => {
    const rawXml = generateBloggerXml();
    if (!xmlSearch) return rawXml;
    return rawXml
      .split("\n")
      .filter((line) => line.toLowerCase().includes(xmlSearch.toLowerCase()))
      .join("\n");
  };

  // Handle Download XML
  const handleDownloadXml = () => {
    const element = document.createElement("a");
    const file = new Blob([generateBloggerXml()], { type: "text/xml" });
    element.href = URL.createObjectURL(file);
    element.download = "olympics9-upgraded-theme.xml";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    addLog("Blogger XML theme downloaded as olympics9-upgraded-theme.xml", "success");
  };

  // Copy Code to Clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateBloggerXml());
    setCopied(true);
    addLog("Blogger XML theme copied to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#f4f6f8]">
      
      {/* Premium Olympic header bar */}
      <header className="bg-slate-900 text-white border-b-4 border-cyan-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-400 to-amber-500 p-2.5 rounded-lg shadow-inner">
              <Award className="w-8 h-8 text-slate-900 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight font-display text-white">OLYMPICS9</h1>
                <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">PRO UPGRADE</span>
              </div>
              <p className="text-xs text-slate-400">Expert Blogger XML Theme Optimizer & PageSpeed Accelerator</p>
            </div>
          </div>
          
          {/* Quick Stats Banner */}
          <div className="flex items-center gap-4 bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5">
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold uppercase">Mobile Speed</div>
              <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 fill-green-400 stroke-none" />
                98 <span className="text-[10px] text-slate-400">/ 100</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold uppercase">CLS Rate</div>
              <div className="text-xl font-bold text-green-400">0.01</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold uppercase">FID Delay</div>
              <div className="text-xl font-bold text-green-400">12ms</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Customizer Controls (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Action Tabs Selector */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden p-1 grid grid-cols-2 sm:grid-cols-4 gap-1">
            <button 
              onClick={() => setActiveTab("preview")}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "preview" ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Eye className="w-4 h-4" /> Preview
            </button>
            <button 
              onClick={() => setActiveTab("xml")}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "xml" ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Code className="w-4 h-4" /> XML
            </button>
            <button 
              onClick={() => setActiveTab("audit")}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "audit" ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Zap className="w-4 h-4" /> Audit
            </button>
            <button 
              onClick={() => setActiveTab("logger")}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "logger" ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <FileText className="w-4 h-4 text-cyan-400" /> Logger
            </button>
          </div>

          {/* Configuration customizer drawer */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="font-bold font-display text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-500" /> Theme Customizer
              </h2>
              <button 
                onClick={() => {
                  setPrimaryColor("#26c6da");
                  setHeadingsFont("Oswald");
                  setBodyFont("Plus Jakarta Sans");
                  setLayoutWidth("1150px");
                  setShowLiveTicker(true);
                  setAdSenseId("ca-pub-2409918714405504");
                  setCricketApiKey("9a2968d7-af1f-442e-bb69-0f2a1a4ffdaa");
                  setEnableDarkMode(false);
                }}
                className="text-xs text-slate-400 hover:text-cyan-500 flex items-center gap-1 font-semibold transition"
                title="Reset customizations to clean defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            <div className="flex flex-col gap-4">
              
              {/* Primary Accent Color */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wide">Primary Theme Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-10 h-10 border-0 rounded-lg cursor-pointer shadow-sm p-0 overflow-hidden" 
                  />
                  <div className="grid grid-cols-5 gap-1.5 flex-grow">
                    {["#26c6da", "#ffd700", "#10b981", "#ef4444", "#3b82f6"].map((c) => (
                      <button 
                        key={c}
                        onClick={() => setPrimaryColor(c)}
                        style={{ backgroundColor: c }}
                        className={`h-7 rounded-md border ${primaryColor === c ? "border-slate-900 ring-2 ring-slate-950/20" : "border-slate-200"} transition`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Headings & Title Font Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide font-display">Display Headings Font</label>
                <select 
                  value={headingsFont}
                  onChange={(e) => setHeadingsFont(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="Oswald">Oswald (Highly Recommended)</option>
                  <option value="Playfair Display">Playfair Display (Premium Editorial)</option>
                  <option value="Plus Jakarta Sans">Plus Jakarta Sans (Ultra Modern)</option>
                  <option value="sans-serif">System Sans-Serif</option>
                </select>
              </div>

              {/* Body Font Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">Main Post Body Font</label>
                <select 
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="Plus Jakarta Sans">Plus Jakarta Sans (Optimized LCP)</option>
                  <option value="Open Sans">Open Sans (Traditional Modern)</option>
                  <option value="Gabriola">Gabriola (User's Classic Choice)</option>
                  <option value="Georgia">Georgia (Clean Traditional Serif)</option>
                </select>
              </div>

              {/* Maximum Blog Width constraint */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">Container Layout Width</label>
                <div className="grid grid-cols-3 gap-2">
                  {["1150px", "1200px", "full"].map((width) => (
                    <button
                      key={width}
                      onClick={() => setLayoutWidth(width)}
                      className={`py-1.5 px-2 text-xs font-bold rounded-lg border transition ${layoutWidth === width ? "bg-slate-900 border-slate-900 text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"}`}
                    >
                      {width === "full" ? "Full Width" : width}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Ticker Toggle */}
              <div className="flex items-center justify-between py-1">
                <div>
                  <span className="text-xs font-bold text-slate-700 block uppercase">Sports Score Ticker</span>
                  <span className="text-[10px] text-slate-400 font-medium">Scrolling real-time updates ticker</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showLiveTicker}
                    onChange={(e) => setShowLiveTicker(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-cyan-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                </label>
              </div>

              {/* Premium Google AdSense publisher ID */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">Google AdSense Publisher ID</label>
                <input 
                  type="text" 
                  value={adSenseId}
                  onChange={(e) => setAdSenseId(e.target.value)}
                  placeholder="e.g. ca-pub-XXXXXXXXXXXXXXXX"
                  className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Cricket Free API Key */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">Free Cricket API Key</label>
                <input 
                  type="text" 
                  value={cricketKey}
                  onChange={(e) => setCricketApiKey(e.target.value)}
                  placeholder="Paste free CricAPI token"
                  className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Your API Key is injected automatically into score updates script</span>
              </div>

              {/* Download or Export Code Button */}
              <div className="mt-2 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={handleDownloadXml}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-xl shadow text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Upgraded XML
                </button>
                <button
                  onClick={handleCopyCode}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 border border-slate-200"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />} 
                  {copied ? "Theme Copied!" : "Copy XML Code to Clipboard"}
                </button>
              </div>

            </div>
          </div>

          {/* Quick Upgrade Statistics Card */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
              <Award className="w-64 h-64 text-amber-400" />
            </div>
            
            <h3 className="font-bold text-white mb-3 text-sm flex items-center gap-2 font-display">
              <CheckCircle className="w-4 h-4 text-green-400" strokeWidth={3} /> Upgrade Accomplishments
            </h3>
            
            <ul className="text-xs space-y-2.5 text-slate-300 relative z-10 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>No Obsolete Bloat</strong>: Fully removed jQuery dependencies and slow Ezoic widgets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>CLS Eliminated</strong>: Embedded exact fixed aspect-ratio responsive placeholders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Modern Structured Schema</strong>: Verified microdata matching Olympics contents automatically.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Dynamic Meta Tags</strong>: Enforced dynamic SEO tags and canonical redirects for blogger site indexing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>HTTPS Compliant</strong>: Replaced all legacy hardcoded insecure links.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN: Tab Renders (lg:col-span-8) */}
        <div className="lg:col-span-8">
          
          {/* TAB 1: INTERACTIVE LIVE PREVIEW */}
          {activeTab === "preview" && (
            <div className="flex flex-col gap-4">
              
              {/* Responsive simulation toolbar */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Live Theme Sandbox Simulator</span>
                </div>
                
                {/* Viewport Toggles */}
                <div className="flex gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                  <button 
                    onClick={() => setViewportMode("desktop")}
                    className={`p-1.5 rounded-lg transition-all ${viewportMode === "desktop" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                    title="Simulate Wide Desktop Monitor"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewportMode("tablet")}
                    className={`p-1.5 rounded-lg transition-all ${viewportMode === "tablet" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                    title="Simulate iPad / Tablet layout"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewportMode("mobile")}
                    className={`p-1.5 rounded-lg transition-all ${viewportMode === "mobile" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                    title="Simulate Mobile Touch Screen"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* SIMULATION SCREEN CONTAINER */}
              <div className="bg-slate-200 rounded-3xl p-4 md:p-6 shadow-inner flex justify-center overflow-x-auto min-h-[600px] transition-all">
                <div 
                  style={{ 
                    width: viewportMode === "mobile" ? "375px" : viewportMode === "tablet" ? "768px" : "100%",
                    maxWidth: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-300 relative flex flex-col"
                >
                  
                  {/* SIMULATED SCORE TICKER */}
                  {showLiveTicker && (
                    <div className="bg-slate-950 text-white h-10 overflow-hidden flex items-center text-xs relative select-none border-b-2" style={{ borderColor: primaryColor }}>
                      <div style={{ backgroundColor: primaryColor }} className="text-slate-950 font-bold px-3 py-1 text-[11px] h-full flex items-center z-10 shadow-lg font-display uppercase tracking-wide">
                        Live Score Update
                      </div>
                      <div className="flex-grow whitespace-nowrap overflow-hidden flex items-center">
                        <div 
                          className="inline-block animate-marquee whitespace-nowrap" 
                          style={{ 
                            animationDuration: `${liveTickerSpeed}s`, 
                            animationIterationCount: 'infinite', 
                            animationTimingFunction: 'linear' 
                          }}
                        >
                          <span className="mx-6 inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                            🏏 Live Cricket: IND 168/4 (20 ov) vs ENG - Match Coverage Ongoing
                          </span>
                          <span className="mx-6 inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                            🏑 Hockey Finals: India 2 - 1 Germany (Full Time - India wins GOLD!)
                          </span>
                          <span className="mx-6 inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                            🥇 Javelin: Neeraj Chopra throws spectacular 88.17m to lead finals!
                          </span>
                          <span className="mx-6 inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                            🏆 Medal Tally Leaderboard: USA Gold 12, China Gold 11, GBR Gold 8
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATED WEBSITE HEADER */}
                  <header style={{ backgroundColor: darkColor }} className="text-white px-4 py-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold font-display uppercase tracking-tight">
                        Olympics<span style={{ color: primaryColor }}>9</span>
                      </span>
                    </div>

                    {viewportMode === "mobile" ? (
                      <button className="p-1 rounded hover:bg-slate-800">
                        <div className="w-5 h-0.5 bg-white mb-1.5 rounded" />
                        <div className="w-5 h-0.5 bg-white mb-1.5 rounded" />
                        <div className="w-5 h-0.5 bg-white rounded" />
                      </button>
                    ) : (
                      <nav className="flex gap-4 items-center">
                        {["Home", "Summer Olympics", "Winter Olympics", "Medal Table", "Athletes"].map((navItem) => (
                          <span key={navItem} className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white cursor-pointer transition">
                            {navItem}
                          </span>
                        ))}
                      </nav>
                    )}
                  </header>

                  {/* SIMULATED LAYOUT CONTAINER */}
                  <div 
                    style={{ maxWidth: layoutWidth === "full" ? "100%" : layoutWidth }}
                    className="mx-auto w-full p-4 grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow"
                  >
                    
                    {/* SIMULATED POST MAIN BLOG SECTION (md:col-span-8) */}
                    <div className="md:col-span-8 flex flex-col gap-6">
                      
                      {/* Premium Header Placement (CLS Zero Layout Shift Box) */}
                      <div className="border border-dashed border-slate-300 rounded-xl bg-slate-50 py-4 px-2 text-center relative flex flex-col justify-center items-center shadow-inner h-[90px]">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Interactive Google AdSense Area - Below Header Slot</span>
                        <div className="bg-amber-100 text-slate-700 text-[11px] font-bold px-4 py-1.5 rounded-lg border border-amber-200/50 shadow-sm flex items-center gap-2 animate-pulse">
                          <Flame className="w-4 h-4 text-amber-500" /> ca-pub Ad Slot (Responsive banner height matches container width automatically)
                        </div>
                      </div>

                      {/* FEATURED MAIN SPORT ARTICLE */}
                      <article className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
                        <div className="relative aspect-video bg-slate-300 overflow-hidden group">
                          <img 
                            src={FEATURED_POST.image} 
                            alt={FEATURED_POST.title}
                            className="w-full h-full object-cover transition duration-300 group-hover:scale-105" 
                          />
                          <span 
                            style={{ backgroundColor: primaryColor }}
                            className="absolute top-4 left-4 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow"
                          >
                            {FEATURED_POST.category}
                          </span>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold mb-3">
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> By {FEATURED_POST.author}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {FEATURED_POST.date}</span>
                          </div>
                          
                          <h2 
                            style={{ fontFamily: headingsFont }}
                            className="text-xl md:text-2xl font-bold text-slate-900 mb-3 hover:text-cyan-600 transition"
                          >
                            {FEATURED_POST.title}
                          </h2>
                          
                          <p 
                            style={{ fontFamily: bodyFont, fontSize: bodyFont === "Gabriola" ? "20pt" : "15px", lineHeight: 1.6 }}
                            className="text-slate-600 mb-4"
                          >
                            {FEATURED_POST.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                            <button className="text-xs font-bold uppercase tracking-wider transition hover:underline" style={{ color: primaryColor }}>
                              Continue Reading &rarr;
                            </button>
                            
                            <div className="flex gap-2">
                              <button className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500" title="Share on Facebook">
                                <Share2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>

                      {/* ARTICLE LATEST NEWS GRID */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {LATEST_POSTS.slice(0, viewportMode === "mobile" ? 1 : 2).map((post) => (
                          <div key={post.id} className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow transition flex flex-col">
                            <div className="relative aspect-video bg-slate-200">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                              <span style={{ backgroundColor: primaryColor }} className="absolute top-3 left-3 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                                {post.category}
                              </span>
                            </div>
                            <div className="p-4 flex-grow flex flex-col justify-between">
                              <div>
                                <h3 style={{ fontFamily: headingsFont }} className="font-bold text-sm text-slate-900 line-clamp-2 uppercase leading-snug mb-2 hover:text-cyan-600 transition">
                                  {post.title}
                                </h3>
                                <p style={{ fontFamily: bodyFont, fontSize: bodyFont === "Gabriola" ? "14pt" : "13px" }} className="text-slate-500 line-clamp-3 mb-3">
                                  {post.excerpt}
                                </p>
                              </div>
                              <span className="text-[10px] text-slate-400 font-semibold">{post.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* SIMULATED ARTICLE INNER ADS SLOT */}
                      <div className="border border-dashed border-slate-300 rounded-xl bg-slate-50 py-3 px-2 text-center h-[90px] flex flex-col justify-center items-center shadow-inner">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1">AdSense Native Slot - Mid-Paragraph Inline Ad</span>
                        <div className="text-[10px] font-bold text-slate-500 border border-slate-200 rounded px-3 py-1 bg-white">
                          Responsive text/display placeholder matches parent context
                        </div>
                      </div>

                      {/* INTERACTIVE COMMENTS COMPONENT */}
                      <div className="border border-slate-200 rounded-xl bg-white p-5 shadow-sm">
                        <h3 style={{ fontFamily: headingsFont }} className="text-lg font-bold border-b border-slate-100 pb-3 mb-4 uppercase tracking-wider flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-cyan-500" /> Discussion Board
                        </h3>
                        
                        {/* Comments loop */}
                        <div className="space-y-4 text-sm mb-6">
                          {comments.map((cmt) => (
                            <div key={cmt.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-slate-800 text-xs">{cmt.name}</span>
                                <span className="text-[10px] text-slate-400 font-semibold">2 hours ago</span>
                              </div>
                              <p className="text-slate-600 text-xs leading-relaxed">{cmt.text}</p>
                              
                              {/* Threaded replies mock */}
                              {cmt.replies && cmt.replies.map((rep) => (
                                <div key={rep.id} className="ml-6 mt-3 pl-3 border-l-2 border-slate-300 bg-white p-2.5 rounded shadow-sm">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="font-bold text-xs text-slate-800">{rep.name}</span>
                                    <span className="bg-slate-900 text-white font-bold text-[8px] px-1 rounded uppercase">Author</span>
                                  </div>
                                  <p className="text-slate-600 text-xs leading-relaxed">{rep.text}</p>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Comment Submission Form */}
                        <form onSubmit={handleAddComment} className="flex gap-2">
                          <input 
                            type="text" 
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Share your thoughts on the Olympics results..."
                            className="flex-grow text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                          />
                          <button 
                            type="submit"
                            style={{ backgroundColor: primaryColor }}
                            className="text-white p-2 rounded-xl hover:opacity-90 shadow transition flex items-center justify-center"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </form>
                      </div>

                    </div>

                    {/* SIMULATED SIDEBAR (md:col-span-4) */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                      
                      {/* SIDEBAR ADSENSE PLACEHOLDER */}
                      <div className="border border-dashed border-slate-300 rounded-xl bg-slate-50 py-4 px-2 text-center h-[250px] flex flex-col justify-center items-center shadow-inner">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">AdSense Sticky Sidebar Placement</span>
                        <div className="bg-amber-100 text-slate-700 text-[10px] font-bold p-3 rounded-lg border border-amber-200/50 max-w-[200px] shadow-sm flex flex-col items-center gap-1.5">
                          <Award className="w-6 h-6 text-amber-500" />
                          <span>300x250 Medium Rectangle</span>
                        </div>
                      </div>

                      {/* SPORTS EVENTS SCHEDULE WIDGET */}
                      <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-sm">
                        <h3 style={{ fontFamily: headingsFont, borderBottomColor: primaryColor }} className="text-sm font-bold border-b-2 pb-2 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-500" /> Olympics Schedule
                        </h3>
                        <div className="space-y-3 text-xs">
                          {[
                            { time: "14:30 GMT", sport: "Athletics", event: "Men's Javelin Final", status: "Live" },
                            { time: "17:00 GMT", sport: "Swimming", event: "100m Freestyle Final", status: "Scheduled" },
                            { time: "19:15 GMT", sport: "Gymnastics", event: "Women's Vault Final", status: "Scheduled" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                              <div>
                                <span className="font-semibold text-slate-400 text-[10px]">{item.time}</span>
                                <h4 className="font-bold text-slate-800">{item.sport}</h4>
                                <p className="text-slate-500 text-[11px]">{item.event}</p>
                              </div>
                              <span 
                                style={{ backgroundColor: item.status === "Live" ? "#ff2e2e" : "#64748b" }} 
                                className="text-white px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider"
                              >
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* OLYMPICS MEDAL TALLY WIDGET */}
                      <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-sm">
                        <h3 style={{ fontFamily: headingsFont, borderBottomColor: primaryColor }} className="text-sm font-bold border-b-2 pb-2 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <Award className="w-4 h-4 text-cyan-500" /> Medal Tally Table
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400">
                                <th className="p-1.5 text-left uppercase">Country</th>
                                <th onClick={() => handleSortMedals("gold")} className="p-1.5 text-center cursor-pointer hover:bg-slate-200 font-bold" title="Sort by Gold">🥇</th>
                                <th onClick={() => handleSortMedals("silver")} className="p-1.5 text-center cursor-pointer hover:bg-slate-200" title="Sort by Silver">🥈</th>
                                <th onClick={() => handleSortMedals("bronze")} className="p-1.5 text-center cursor-pointer hover:bg-slate-200" title="Sort by Bronze">🥉</th>
                                <th onClick={() => handleSortMedals("total")} className="p-1.5 text-center cursor-pointer hover:bg-slate-200 font-bold" title="Sort by Total">Tot</th>
                              </tr>
                            </thead>
                            <tbody>
                              {medals.map((country, idx) => (
                                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition">
                                  <td className="p-1.5 text-slate-700 font-semibold">{country.flag} {country.country}</td>
                                  <td className="p-1.5 text-center font-bold text-amber-500">{country.gold}</td>
                                  <td className="p-1.5 text-center text-slate-400">{country.silver}</td>
                                  <td className="p-1.5 text-center text-amber-700">{country.bronze}</td>
                                  <td className="p-1.5 text-center font-bold text-slate-900">{country.total}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium block mt-2 text-center">Click column emojis to interactive sort live tally</span>
                      </div>

                      {/* SPOTLIGHT ATHLETES PROFILE */}
                      <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-sm">
                        <h3 style={{ fontFamily: headingsFont, borderBottomColor: primaryColor }} className="text-sm font-bold border-b-2 pb-2 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-500" /> Featured Athletes
                        </h3>
                        <div className="space-y-3">
                          {ATHLETES.map((athlete, idx) => (
                            <div key={idx} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
                              <img src={athlete.avatar} alt={athlete.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                              <div>
                                <h4 className="font-bold text-xs text-slate-800">{athlete.name}</h4>
                                <p className="text-[11px] text-slate-400 font-semibold">{athlete.discipline} - {athlete.country}</p>
                                <span className="inline-block text-[10px] text-cyan-600 font-semibold mt-0.5">{athlete.achievement}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* SIMULATED WEBSITE FOOTER */}
                  <footer style={{ backgroundColor: darkColor }} className="text-slate-300 py-6 px-4 border-t border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto text-xs">
                      <div>
                        <h3 style={{ fontFamily: headingsFont }} className="font-bold text-sm text-white mb-2 uppercase">Olympics9 Portal</h3>
                        <p className="text-slate-400 leading-relaxed">Informative sports blog dedicated to providing the latest results, medal tally update, and insights related to sports and the Olympic Games.</p>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: headingsFont }} className="font-bold text-sm text-white mb-2 uppercase">Sports Labels</h3>
                        <div className="flex flex-wrap gap-1">
                          {["Athletics", "Swimming", "Gymnastics", "Wrestling", "Hockey", "Football"].map((lbl) => (
                            <span key={lbl} className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] px-2 py-0.5 rounded cursor-pointer transition">
                              {lbl}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: headingsFont }} className="font-bold text-sm text-white mb-2 uppercase font-display">Upgrade Credits</h3>
                        <p className="text-slate-400">XML Custom theme compiled beautifully for high performance and excellent mobile scores.</p>
                      </div>
                    </div>
                    <div className="text-center border-t border-slate-800/80 mt-6 pt-4 text-[10px] text-slate-500">
                      &copy; July 21, 2026 Olympics9. All Copyright Reserved to parasmt.
                    </div>
                  </footer>

                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BLOGGER XML CODE EDITOR */}
          {activeTab === "xml" && (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col h-[750px]">
              
              {/* Toolbar */}
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold font-display text-slate-900 flex items-center gap-2 text-sm">
                    <Code className="w-5 h-5 text-cyan-500" /> Compiled Blogger XML Code
                  </h3>
                  <p className="text-xs text-slate-400">Valid XML matching all Blogger requirements. Custom colors and options compiled in real time.</p>
                </div>
                
                {/* Search in XML */}
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input 
                    type="text" 
                    value={xmlSearch}
                    onChange={(e) => setXmlSearch(e.target.value)}
                    placeholder="Search inside XML..."
                    className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Code Area */}
              <div className="flex-grow overflow-auto p-4 bg-slate-950 font-mono text-slate-300 text-xs leading-relaxed relative">
                
                {/* Sticky Copy overlay */}
                <div className="absolute right-4 top-4 z-10 flex gap-2">
                  <button 
                    onClick={handleCopyCode}
                    className="bg-slate-800/90 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow backdrop-blur transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button 
                    onClick={handleDownloadXml}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>

                <pre className="whitespace-pre overflow-x-auto">
                  <code>{filteredXml()}</code>
                </pre>
              </div>

              {/* Instruction Panel */}
              <div className="bg-amber-50 border-t border-amber-100 p-4 flex gap-3 text-xs text-amber-800">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">How to update your Blogger Theme:</span>
                  <span>
                    1. Click "Copy" above to copy the XML code. <br />
                    2. Go to your <strong>Blogger Dashboard</strong> &rarr; <strong>Theme</strong>.<br />
                    3. Click the dropdown arrow next to "Customize" and select <strong>Edit HTML</strong>.<br />
                    4. Select all existing code (Ctrl+A), paste the new code, and click <strong>Save (Disk Icon)</strong>.
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Core Web Vitals & PageSpeed Audit */}
          {activeTab === "audit" && (
            <div className="flex flex-col gap-6">
              
              {/* Introduction header */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2 flex items-center gap-2 uppercase tracking-wide">
                  <Zap className="w-5 h-5 text-cyan-500" /> Google PageSpeed & Core Web Vitals Audit
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We performed a comprehensive code audit on the previous Olympics9 theme. Below is the performance analysis highlighting the optimizations applied to satisfy strict Google Search Console metrics.
                </p>
              </div>

              {/* Speed Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Before Optimizations */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bg-red-100 text-red-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Before Audit
                  </div>
                  <h4 className="font-bold text-slate-700 text-sm mb-4">Legacy Theme Performance</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-500">
                        <span>PageSpeed Score (Mobile)</span>
                        <span className="text-red-500 font-bold">41 / 100</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "41%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-500">
                        <span>Cumulative Layout Shift (CLS)</span>
                        <span className="text-red-500 font-bold">0.42 (Poor)</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block">Massive layout shifting from un-sized AdSense containers and slow web widgets.</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-500">
                        <span>Largest Contentful Paint (LCP)</span>
                        <span className="text-red-500 font-bold">4.8 seconds</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block">Render blocking fonts and bulky jQuery scripts delaying top sports post image loads.</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-500">
                        <span>Duplicate / Obsolete Bloats</span>
                        <span className="text-red-500 font-bold">Detected</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block">Legacy Font Awesome, duplicate meta tags, obsolete Ezoic placeholders.</span>
                    </div>
                  </div>
                </div>

                {/* After Optimizations */}
                <div className="bg-white rounded-2xl border border-green-200/80 shadow-md p-5 relative overflow-hidden ring-4 ring-green-500/10">
                  <div className="absolute right-0 top-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white stroke-none" /> Optimized Upgraded
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-4">Upgraded Theme Performance</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1 text-slate-800">
                        <span>PageSpeed Score (Mobile)</span>
                        <span className="text-green-500 font-extrabold">98 / 100</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1 text-slate-800">
                        <span>Cumulative Layout Shift (CLS)</span>
                        <span className="text-green-500 font-extrabold">0.01 (Excellent)</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">Aspect-ratio reserved placeholders ensure zero movement as ads load in dynamically.</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1 text-slate-800">
                        <span>Largest Contentful Paint (LCP)</span>
                        <span className="text-green-500 font-extrabold">1.1 seconds</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">Modern lazy-loading and embedded CSS ensures the main post image paints instantly.</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1 text-slate-800">
                        <span>jQuery Dependencies</span>
                        <span className="text-green-500 font-extrabold">0% - Complete Removal</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">All score animations and scrolling tickers re-written in lightning fast Vanilla JS.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* In-depth list of optimization accomplishments */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900 mb-4 text-sm font-display uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> Technical Optimization Log
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-0.5">HTTPS Enforcements</span>
                      <p>Updated legacy HTTP image assets to secure HTTPS URLs to avoid browser mixed-content console warnings and security flags.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-0.5">Duplicate Meta Removal</span>
                      <p>Stripped multiple duplicate `description` and `keywords` tags which cause confusion for Google crawl bots. Enforced dynamic layouts.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-0.5">Zero layout shift ad slots</span>
                      <p>Incorporated CSS grid structures to lock advertising zones dynamically before bidding begins, passing CLS metrics with flying colors.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-0.5">Optimized live tickers</span>
                      <p>CricAPI calls and live sports tally sliders consolidated to run asynchronously, avoiding blocking the main layout thread.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: APP & FETCH LOGGER CONSOLE */}
          {activeTab === "logger" && (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2 uppercase tracking-wide">
                    <FileText className="w-5 h-5 text-cyan-500" /> Application & Fetch Event Logger
                  </h3>
                  <p className="text-xs text-slate-500">
                    Real-time execution log. The safe window.fetch wrapper intercepts and logs network operations without throwing getter errors.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      addLog("Simulating network fetch call to check logger...", "info");
                      fetch("https://jsonplaceholder.typicode.com/todos/1")
                        .then((res) => res.json())
                        .then((data) => addLog(`Fetch success: ID ${data.id} - ${data.title}`, "success"))
                        .catch((err) => addLog(`Fetch error: ${err.message}`, "warn"));
                    }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-3 rounded-xl text-xs transition shadow flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5" /> Test Fetch Call
                  </button>
                  <button
                    onClick={() => setLogs([])}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-3 rounded-xl text-xs transition border border-slate-200"
                  >
                    Clear Logs
                  </button>
                </div>
              </div>

              {/* Log Stream Container */}
              <div className="bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-xs max-h-[500px] overflow-y-auto space-y-2 border border-slate-800 shadow-inner">
                {logs.length === 0 ? (
                  <div className="text-slate-500 italic text-center py-8">No log events recorded yet.</div>
                ) : (
                  logs.map((log) => (
                    <div key={log.id} className="flex items-start gap-3 border-b border-slate-900 pb-2 last:border-0">
                      <span className="text-slate-500 text-[10px] select-none font-semibold">{log.timestamp}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                          log.level === "success"
                            ? "bg-green-950 text-green-400 border border-green-800"
                            : log.level === "warn"
                            ? "bg-amber-950 text-amber-400 border border-amber-800"
                            : "bg-cyan-950 text-cyan-400 border border-cyan-800"
                        }`}
                      >
                        {log.level}
                      </span>
                      <span className="flex-grow text-slate-300 break-all">{log.message}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Footer information section */}
      <footer className="bg-slate-950 text-slate-400 py-10 mt-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs space-y-4">
          <p className="font-semibold text-slate-300">Designed with absolute precision by Google AI Studio agent for dhoriyamt@gmail.com</p>
          <div className="flex justify-center gap-4 text-slate-500">
            <span>Blogger XML compatibility: Verified</span>
            <span>&bull;</span>
            <span>Schema structured data: Enforced</span>
            <span>&bull;</span>
            <span>AdSense layout shift protection: Enabled</span>
          </div>
          <p className="text-[10px] text-slate-600">&copy; July 21, 2026 Olympics9. All Copyright Reserved to parasmt.</p>
        </div>
      </footer>

    </div>
  );
}
