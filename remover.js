setInterval(() => {
  const selectors = [
    '[data-before-content="advertisement"]',
    '[class*="promoted"]',
    'shreddit-ad-post'
  ];

  const ads = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));

  ads.forEach(ad => ad.remove());
}, 2000);
