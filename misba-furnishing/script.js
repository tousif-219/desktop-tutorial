/* ============================================================
   Misba Furnishing — site script (shared by every page)
   EDIT HERE: business details, form endpoint, and images.
   ============================================================ */
const CONFIG = {
  phone: '919901351500',
  // Paste a form backend URL (e.g. Formspree "https://formspree.io/f/xxxx" or a
  // Google Apps Script web-app URL) to receive home-visit requests by email/sheet.
  // While empty, the request is also handed off to WhatsApp so nothing is lost.
  formEndpoint: '',
  // "Watch Our Work" video reels from Instagram — paste each reel/post link (e.g. 'https://www.instagram.com/reel/ABC123/').
  // They play directly on the website. The reviews section stays hidden while this list is empty.
  reviewReels: [
    'https://www.instagram.com/misba_furnishing/reel/DerfCMeTliC/',
    'https://www.instagram.com/misba_furnishing/reel/DewlSPqT3BA/',
    'https://www.instagram.com/misba_furnishing/reel/DejoYjbTkSl/',
    'https://www.instagram.com/misba_furnishing/reel/Deeiq8pTxi_/',
    'https://www.instagram.com/misba_furnishing/reel/DeKH9XZTDkR/',
    'https://www.instagram.com/misba_furnishing/reel/DcWAXYTTjfw/',
    'https://www.instagram.com/misba_furnishing/reel/DVePt1pEps9/',
    'https://www.instagram.com/misba_furnishing/reel/DU6RERCDVtz/'
  ],
  defaultWaMsg: "Hi Misba Furnishing, I found your website and would like to know more about your home furnishing solutions."
};

const MAPS_DIR = 'https://www.google.com/maps/dir/?api=1&destination=Misba+Furnishing%2C+N+Tower%2C+M+G%2C+Shankar+Mutt+Rd%2C+Opp.+Apollo+Tyres%2C+Tank+Mohalla%2C+Shivamogga%2C+Karnataka+577201';
const IG = 'https://www.instagram.com/misba_furnishing/';

// Misba Furnishing's own showroom photos (images/ folder). Add new photos there and list them here.
const u = id => `images/${id}.jpg`;
const IMG = {
  // curtains
  curSarom: 'curtains-ddecor-sarom', curSarom2: 'curtains-ddecor-sarom-2', curSarom3: 'curtains-ddecor-sarom-3',
  curCreation: 'curtains-creation-abn', curCreation2: 'curtains-creation-abn-2',
  curOmbre: 'curtains-ombre', curOmbre2: 'curtains-ombre-2', curOmbre3: 'curtains-ombre-3', curWindow: 'curtains-ombre-window',
  curCorner: 'curtains-corner', curCorner2: 'curtains-corner-2', rods: 'curtain-rods-hardware',
  // blinds
  blinds: 'blinds-display', venetian: 'venetian-blind-sample',
  // mattresses
  repose: 'repose-showroom-front', repose2: 'repose-showroom-side', reposeBia: 'repose-bia-bed', reposeDrBond: 'repose-dr-bond',
  reposeWide: 'repose-showroom-wide', reposeDisplay: 'repose-showroom-display', reposeOld: 'repose-gallery',
  // added Oct 2026
  swatches: 'curtain-swatches', curSamples: 'curtain-samples', curBlindsCorner: 'curtains-blinds-corner',
  vertical: 'vertical-blinds', vertical2: 'vertical-blinds-2', sheerVertical: 'sheer-vertical-blinds',
  wallDoorway: 'wallpaper-doorway', sofaSectional: 'sofa-sectional', panels: 'upholstered-wall-panels',
  linenWall: 'showroom-linen-wall', curLounge: 'showroom-curtain-lounge', brandFront: 'misba-brand-wall-front',
  // from Instagram @misba_furnishing
  igLiving: 'ig-living-room-drapes', igLace: 'ig-lace-sheer-curtains', igPrinted: 'ig-printed-curtains',
  // client installations (Insta folder)
  clSheerSofa: 'client-sheer-sofa-living', clZebra: 'client-zebra-blinds', clBedroom: 'client-bedroom-drapes', clWoodCorner: 'client-wooden-blinds-corner',
  clUSofa: 'client-u-sectional-sofa', clOffice: 'client-office-blinds', clTealSofa: 'client-teal-sectional-sofa', clBedroomSheer: 'client-bedroom-sheer-curtains',
  // mini theater
  theaterScreen: 'theater-screen', theaterSeats: 'theater-seating',
  // showroom
  brandWall: 'showroom-brand-wall', showroom: 'showroom-wide', desk: 'consultation-desk', library: 'fabric-library', shelves: 'fabric-shelves'
};

const COLLECTIONS = [
  { slug: 'curtains', name: 'Curtains', short: 'Elegant fabrics. Perfect finishing. Made for your space.', img: IMG.clBedroom,
    title: 'Curtains That <em>Complete</em> Your Space', sub: 'Sheer, blackout, designer and remote-controlled motorized drapes — stitched to your windows and installed by our team.',
    tags: ['Remote-Controlled', 'Living Room', 'Bedroom', 'Sheer', 'Blackout', 'Designer', 'Eyelet', 'Pleated', 'Custom Drapes'],
    gallery: [[IMG.clBedroom, 'Bedroom Drapes — Client Home'], [IMG.clSheerSofa, 'Sheer Curtains — Client Home'], [IMG.igLiving, 'Living Room Drapes — Client Home'], [IMG.curSarom, "D'Décor & Sarom Collection"], [IMG.igLace, 'Lace Sheer Curtains'], [IMG.igPrinted, 'Printed Floral Curtains'], [IMG.curWindow, 'Ombré Drapes with Sheers'], [IMG.curCreation, 'Creation & ABN Collection'], [IMG.curCorner, 'Corner Window Drapes'], [IMG.curSarom2, 'Designer Pleated Curtains'], [IMG.curOmbre, 'Layered Ombré Curtains'], [IMG.curCreation2, 'Sheer with Tie-backs'], [IMG.curCorner2, 'Printed & Plain Pairing'], [IMG.curSarom3, 'Textured Collection'], [IMG.curOmbre3, 'Blackout & Sheer Combo'], [IMG.curBlindsCorner, 'Curtains & Blinds Together'], [IMG.curSamples, 'Curtain Sample Panels'], [IMG.swatches, 'Fabric Swatch Library'], [IMG.rods, 'Rods & Accessories']],
    cta: 'Ask About Curtains', wa: 'curtains' },
  { slug: 'blinds', name: 'Roller Blinds', short: 'Clean, modern and functional window solutions.', img: IMG.clZebra,
    title: 'Beautiful Windows. <em>Better Living.</em>', sub: 'Roller, zebra, roman, vertical, venetian and blackout blinds — manual or remote-controlled.', badge: 'Customized to Your Windows',
    tags: ['Remote-Controlled', 'Roller', 'Zebra', 'Roman', 'Vertical', 'Venetian', 'Blackout', 'Other Styles'],
    gallery: [[IMG.clZebra, 'Zebra Blinds — Client Home'], [IMG.clOffice, 'Wooden Blinds — Office'], [IMG.clWoodCorner, 'Wooden Venetian Blinds'], [IMG.blinds, 'Wooden & Aluminium Blinds'], [IMG.vertical, 'Vertical Blinds'], [IMG.sheerVertical, 'Sheer Vertical Blinds'], [IMG.vertical2, 'Vertical Blinds in Neutral Tones'], [IMG.curBlindsCorner, 'Blinds with Ombré Sheers'], [IMG.venetian, 'Venetian Blind Samples']],
    cta: 'Request a Measurement Visit', wa: 'roller and window blinds' },
  { slug: 'wallpapers', name: 'Wallpapers', short: 'Transform an ordinary wall into a statement.', img: IMG.brandFront,
    title: 'Turn Walls Into <em>Statements.</em>', sub: 'We have a large catalogue of wallpaper designs at our Shivamogga showroom. Visit to browse and choose — we measure and install it for you.',
    tags: ['Modern', 'Luxury', 'Floral', 'Textured', 'Geometric', 'Kids', 'Nature', '3D', 'Designer', 'Customized'],
    gallery: [[IMG.brandFront, 'Botanical Feature Wall'],[IMG.desk, 'Geometric & Textured Walls'], [IMG.brandWall, 'Floral Feature Wall']],
    cta: 'Book a Wallpaper Consultation', wa: 'wallpapers' },
  { slug: 'mattresses', name: 'Repose Mattresses', short: 'Comfort and sleep solutions for every preference.', img: IMG.repose, fullBleed: true,
    title: 'Better Sleep Starts With <em>the Right Mattress.</em>', sub: 'Explore REPOSE sleep solutions — and get a mattress made to your exact bed size. Ask about our current offers.',
    tags: ['Custom Sizes', 'Health Series', 'Luxury Series', 'Foam Series', 'Pillows', 'Accessories'],
    cards: [
      ['Memory Foam', 'Contours to your body and eases pressure points.'],
      ['Latex', 'Responsive, breathable bounce with natural resilience — cooling comfort.'],
      ['Orthopedic', 'Firmer, even support for back and posture.'],
      ['Pocketed Spring', 'Individually moving coils — less partner disturbance.'],
      ['Bonnell Spring', 'Classic interconnected coils with a familiar feel.'],
      ['Coir', 'Firm, natural-fibre support that stays cool.'],
      ['PU Foam', 'Light, comfortable and great value for everyday sleep.'],
      ['Pillows & Accessories', 'Memory foam pillows, protectors and more to complete your bed.'],
      ['Made to Your Size', 'Odd-sized cot or custom bed? We make the mattress to your exact measurements.']
    ],
    cardNote: 'Availability of specific REPOSE models varies — visit our REPOSE gallery in Shivamogga to try them.',
    gallery: [[IMG.repose, 'REPOSE Experience Gallery'], [IMG.reposeBia, 'BIA Luxury Bed Display'], [IMG.reposeDrBond, 'Dr. Bond Memory Foam Mattress'],
      [IMG.repose2, 'Try Before You Buy'], [IMG.reposeDisplay, 'Latest Mattress Range'], [IMG.reposeWide, 'Mattresses & Bed Linen']],
    cta: 'Request a Mattress Consultation', wa: 'REPOSE mattresses' },
  { slug: 'sofas', name: 'Sofas', short: 'Customized comfort designed around your space.', img: IMG.clTealSofa,
    title: 'Comfort, <em>Designed Around You.</em>', sub: 'Customized according to your space, style and requirements.',
    tags: ['Living Room', 'Sectional', 'Customized', 'Modern', 'Luxury', 'Fabrics', 'Colours'],
    gallery: [[IMG.clTealSofa, 'Teal L-Shaped Sofa — Client Home'], [IMG.clUSofa, 'U-Shaped Sectional — Client Home'], [IMG.clSheerSofa, 'Custom Sofa — Client Home'], [IMG.sofaSectional, 'L-Shaped Sectional Sofa'], [IMG.showroom, 'Sofas in Our Showroom'], [IMG.brandWall, 'Chesterfield Lounge']],
    cta: 'Discuss Your Sofa Requirement', wa: 'sofas' },
  { slug: 'theater', name: 'Mini Theater', short: 'Bring the cinematic experience home.', img: IMG.theaterScreen, dark: true,
    title: 'Bring the <em>Cinema</em> Home.', sub: 'Movie nights, match days and laughter with the people you love — your own private mini theater.',
    tags: ['Theater Rooms', 'Projectors', 'Screens', 'Recliner Seating', 'Acoustic Panels', 'Blackout Curtains', 'Installations'],
    gallery: [[IMG.theaterScreen, 'Projector Screen & Acoustic Walls'], [IMG.theaterSeats, 'Recliner Seating & Blackout Drapes']],
    cta: 'Plan Your Mini Theater', wa: 'mini theater solutions' },
  { slug: 'more', name: 'More Interior Solutions', short: 'Mosquito mesh, flooring, custom headboards and more — tell us what you need.', img: IMG.panels,
    title: 'More <em>Interior</em> Solutions', sub: "Mosquito mesh, wooden and mat flooring, custom headboards, upholstered wall panels, curtain rods and more. Tell us what you need — we'll measure, make and install it.",
    tags: ['Mosquito Mesh', 'Wooden Flooring', 'Mat & Vinyl Flooring', 'Custom Headboards', 'Upholstered Wall Panels', 'Curtain Rods & Tracks', 'Bed Linen'],
    gallery: [[IMG.panels, 'Custom Headboards & Wall Panels'], [IMG.rods, 'Rods & Hardware Wall'], [IMG.linenWall, 'Bed Linen & Sample Books'], [IMG.library, 'Fabric Library']],
    cta: 'Tell Us What You Need', wa: 'mosquito mesh, flooring and interior solutions' }
];

const WORK = [
  ['Curtains', IMG.clBedroomSheer, 'Pleated drapes with printed sheers — client bedroom'],
  ['Curtains', IMG.clBedroom, 'Bedroom drapes with sheers — client home'],['Sofas', IMG.clTealSofa, 'Teal L-shaped sofa — client home'], ['Blinds', IMG.clZebra, 'Zebra blinds — client home'],
  ['Sofas', IMG.clUSofa, 'U-shaped sectional sofa — client home'], ['Blinds', IMG.clOffice, 'Wooden blinds for an office'], ['Curtains', IMG.clSheerSofa, 'Sheer curtains & custom sofa — client home'],
  ['Blinds', IMG.clWoodCorner, 'Wooden venetian blinds, corner window'],
  ['Curtains', IMG.igLiving, 'Living room drapes — client home'], ['Curtains', IMG.igLace, 'Lace sheer curtains with tie-back'],
  ['Curtains', IMG.igPrinted, 'Printed floral curtains'],
  ['Blinds', IMG.vertical, 'Vertical blinds'], ['Sofas', IMG.sofaSectional, 'L-shaped sectional sofa'], ['Curtains', IMG.curBlindsCorner, 'Curtains & blinds together'],
  ['Showroom', IMG.brandFront, 'Misba brand wall'], ['Blinds', IMG.sheerVertical, 'Sheer vertical blinds'],
  ['Curtains', IMG.swatches, 'Fabric swatch library'], ['Showroom', IMG.panels, 'Upholstered wall panels'], ['Curtains', IMG.curSamples, 'Curtain sample panels'],
  ['Showroom', IMG.curLounge, 'Curtain lounge'], ['Blinds', IMG.vertical2, 'Vertical blinds, neutral tones'], ['Showroom', IMG.linenWall, 'Bed linen & sample books'],
  ['Curtains', IMG.curSarom, "D'Décor & Sarom display"], ['Showroom', IMG.brandWall, 'Our Shivamogga showroom'], ['Curtains', IMG.curWindow, 'Ombré drapes with sheers'],
  ['Blinds', IMG.blinds, 'Wooden & aluminium blinds'], ['Mattresses', IMG.repose, 'REPOSE experience gallery'], ['Curtains', IMG.curCreation, 'Creation & ABN display'],
  ['Mini Theater', IMG.theaterScreen, 'Mini theater with projector screen'], ['Mini Theater', IMG.theaterSeats, 'Recliner seating & blackout drapes'], ['Showroom', IMG.desk, 'Consultation desk'], ['Curtains', IMG.curCorner, 'Corner window drapes'], ['Showroom', IMG.library, 'Fabric library'],
  ['Mattresses', IMG.repose2, 'Try before you buy'], ['Mattresses', IMG.reposeBia, 'BIA luxury bed display'], ['Mattresses', IMG.reposeDrBond, 'Dr. Bond memory foam mattress'], ['Curtains', IMG.curSarom2, 'Designer pleated curtains'], ['Blinds', IMG.venetian, 'Venetian blind samples'],
  ['Showroom', IMG.showroom, 'Showroom lounge'], ['Curtains', IMG.curCorner2, 'Printed & plain pairing'], ['Showroom', IMG.rods, 'Rods & hardware wall'],
  ['Curtains', IMG.curOmbre, 'Layered ombré curtains'],['Curtains', IMG.curCreation2, 'Sheer with tie-backs']
];

// Home hero slideshow: [image id, label, collection slug]. Use photos of the same shape (918×1024 / 1100×1226) so none are cropped.
const HERO_SLIDES = [
  [IMG.curSarom, 'Curtains', 'curtains'], [IMG.vertical, 'Vertical Blinds', 'blinds'], [IMG.theaterSeats, 'Mini Theater', 'theater'],
  [IMG.curWindow, 'Ombré Drapes', 'curtains'], [IMG.repose, 'REPOSE Mattresses', 'mattresses'], [IMG.sofaSectional, 'Sofas', 'sofas']
];

// Brands we deal in. To show a real logo, save it as brands/<file> (PNG/SVG/WebP, transparent background);
// until the file exists the brand name is shown as a styled wordmark. dark: true = logo is light, shown on a dark card.
const BRANDS = [
  { name: 'Excel', type: 'Home Décor', file: 'excel.webp', dark: true },
  { name: "D'Décor", type: 'Fabrics', file: 'ddecor.svg' },
  { name: 'Creation', type: 'Furnishings', file: 'creation.svg', dark: true },
  { name: 'REPOSE', type: 'Mattress', file: 'repose.svg' },
  { name: 'ABN', type: 'Textiles', file: 'abn.png' },
  { name: 'Sarom', type: 'Fabrics', file: 'sarom.png' },
  { name: 'ADF', type: 'Collection', file: 'adf.png' },
  { name: 'Jenifer', type: 'Décor', file: 'jenifer.svg' },
  { name: 'Fabio', type: 'Furnishings', file: 'fabio.png' }
];

const $ = s => document.querySelector(s);
const PAGE = document.body.dataset.page || 'home';
const collUrl = slug => `collection.html?c=${slug}`;

/* ---------- Shared layout: header, footer, overlays ---------- */
const svg = id => `<svg viewBox="0 0 24 24"><use href="#i-${id}"/></svg>`;
const NAV = [['home', 'index.html', 'Home'], ['collections', 'collections.html', 'Collections'], ['gallery', 'gallery.html', 'Our Work'], ['about', 'about.html', 'About'], ['contact', 'contact.html', 'Contact']];
const activeNav = PAGE === 'collection' ? 'collections' : PAGE;

document.body.insertAdjacentHTML('afterbegin', `
<a class="skip" href="#main">Skip to content</a>
<header class="header" id="header">
  <div class="header-in">
    <a href="index.html" class="logo-img" aria-label="Misba Furnishing home"><img src="logo-black.png" alt="Misba Furnishing" width="699" height="264"></a>
    <nav class="nav" id="nav" aria-label="Main">
      ${NAV.map(([k, href, label]) => `<a href="${href}"${k === activeNav ? ' class="active" aria-current="page"' : ''}>${label}</a>`).join('')}
    </nav>
    <div class="header-actions">
      <a href="contact.html#visit" class="btn btn-sm btn-gold hide-mobile">Book a Home Visit</a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
    </div>
  </div>
</header>`);

document.body.insertAdjacentHTML('beforeend', `
<footer class="footer">
  <div class="wrap foot-grid">
    <div>
      <img class="foot-logo" src="logo-transparent.png" alt="Misba Furnishing" width="699" height="264" loading="lazy">
      <p class="muted-l">Customized Home Furnishing &amp; Interior Solutions</p>
      <div class="foot-social">
        <a href="${IG}" target="_blank" rel="noopener" aria-label="Instagram">${svg('ig')}</a>
        <a href="#" data-wa aria-label="WhatsApp">${svg('wa')}</a>
        <a href="tel:+919901351500" aria-label="Call">${svg('phone')}</a>
      </div>
    </div>
    <div><h3>Quick Links</h3>${NAV.map(([, href, label]) => `<a href="${href}">${label}</a>`).join('')}</div>
    <div><h3>Products</h3>${COLLECTIONS.filter(c => c.slug !== 'more').map(c => `<a href="${collUrl(c.slug)}">${c.slug === 'mattresses' ? 'REPOSE Mattresses' : c.name}</a>`).join('')}</div>
    <div><h3>Contact</h3>
      <ul class="f-contact">
        <li><a href="tel:+919901351500"><i>${svg('phone')}</i><span><small>Call / WhatsApp</small>+91 99013 51500</span></a></li>
        <li><a href="${IG}" target="_blank" rel="noopener"><i>${svg('ig')}</i><span><small>Instagram</small>@misba_furnishing</span></a></li>
        <li><a href="${MAPS_DIR}" target="_blank" rel="noopener"><i>${svg('pin')}</i><span><small>Showroom</small>MGN Towers, Shankar Mutt Rd, Opp. Apollo Tyres, Tank Mohalla, Shivamogga, Karnataka 577201</span></a></li>
      </ul>
    </div>
  </div>
  <p class="copy">© ${new Date().getFullYear()} Misba Furnishing. All Rights Reserved.</p>
</footer>
<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
  <button class="lb-close" aria-label="Close">×</button>
  <button class="lb-nav prev" aria-label="Previous image">‹</button>
  <figure><img id="lbImg" alt=""><figcaption><span id="lbCat"></span><strong id="lbCap"></strong><a id="lbWa" class="btn btn-sm btn-wa" href="#">${svg('wa')}Ask about this</a></figcaption></figure>
  <button class="lb-nav next" aria-label="Next image">›</button>
</div>
<a class="wa-float" data-wa href="#" aria-label="Chat on WhatsApp">${svg('wa')}</a>
<nav class="mbar" aria-label="Quick contact">
  <a href="tel:+919901351500">${svg('phone')}Call</a>
  <a href="#" data-wa class="mbar-wa">${svg('wa')}WhatsApp</a>
  <a href="contact.html#visit" class="mbar-visit">${svg('home')}Home Visit</a>
</nav>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zM20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.4z"/></symbol>
  <symbol id="i-ig" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/></g></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></g></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></symbol>
</svg>`);

/* ---------- WhatsApp ---------- */
const waUrl = (msg = CONFIG.defaultWaMsg) => `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(msg)}`;
const productMsg = p => `Hi Misba Furnishing, I'm interested in your ${p} and would like to know more.`;
function setWa(msg) {
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = waUrl(msg); a.target = '_blank'; a.rel = 'noopener'; });
}

/* ---------- Brand marquee ---------- */
const brandsEl = $('#brands');
if (brandsEl) {
  const item = b => `<li class="brand${b.dark ? ' dark' : ''}"><img src="brands/${b.file}" alt="${b.name} ${b.type}" onload="this.parentElement.classList.add('has-logo')" onerror="this.remove()"><span class="wm"><b>${b.name}</b><small>${b.type}</small></span></li>`;
  const row = BRANDS.map(item).join('');
  brandsEl.innerHTML = `
    <div class="wrap brands-head"><p class="eyebrow dark">Brands we deal in</p><h2>Trusted names, <em>customized for you.</em></h2></div>
    <div class="marquee" aria-label="Brands we deal in"><ul class="marquee-track">${row}${row}${row}${row}</ul></div>`;
  brandsEl.querySelectorAll('.marquee-track li').forEach((li, i) => i >= BRANDS.length && li.setAttribute('aria-hidden', 'true'));}

/* ---------- Customer review reels (Instagram official embeds, play inline) ---------- */
const reviewsEl = $('#reviews');
if (reviewsEl) {
  // Normalise to Instagram's canonical embed URL (https://www.instagram.com/reel/ID/), drop duplicates, apply page limit.
  const ids = [...new Set(CONFIG.reviewReels.map(u => (u.match(/\/(reel|p)\/([\w-]+)/) || [])[2]).filter(Boolean))];
  const reels = ids.slice(0, +reviewsEl.dataset.limit || ids.length).map(id => `https://www.instagram.com/reel/${id}/`);
  if (!reels.length) reviewsEl.remove();
  else {
    reviewsEl.innerHTML = `
      <div class="wrap">
        <div class="sec-head center"><p class="eyebrow dark reveal">Our Work in Motion</p><h2 class="reveal">Watch Our <em>Work</em></h2>
          <p class="muted reveal">Installations, showroom walkthroughs and happy homes — straight from our Instagram.</p></div>
        <div class="reel-grid">${reels.map(url => `<div class="reel reveal"><blockquote class="instagram-media" data-instgrm-permalink="${url.split('?')[0]}" data-instgrm-version="14"><a href="${url}" target="_blank" rel="noopener">Watch on Instagram</a></blockquote></div>`).join('')}</div>
        <div class="btn-row center">${reviewsEl.dataset.limit ? `<a class="btn btn-gold" href="gallery.html#reviews">Watch all videos</a>` : ''}<a class="btn btn-dark" href="${IG}" target="_blank" rel="noopener">${svg('ig')}More on Instagram</a></div>
      </div>`;
    const s = document.createElement('script'); s.async = true; s.src = 'https://www.instagram.com/embed.js'; document.body.appendChild(s);
  }
}

/* ---------- Instagram feed (official public profile embed: live posts & reels) ---------- */
const insta = $('#instaFeed');
if (insta) {
  insta.innerHTML = `
  <div class="wrap insta-wrap">
    <div class="insta-text">
      <p class="eyebrow dark reveal">@misba_furnishing</p>
      <h2 class="reveal">Follow Our <em>Work</em></h2>
      <p class="reveal insta-lead">Every window tells a story. Every room gets a makeover. Catch it all first on Instagram.</p>
      <p class="muted reveal">From fresh fabric arrivals and before-and-after transformations to behind-the-scenes installations across Karnataka — your next big home idea is just a scroll away.</p>
      <ul class="insta-points reveal">
        <li>${svg('ig')}New collections &amp; fabric arrivals</li>
        <li><span class="play">▶</span>Before &amp; after home makeovers</li>
        <li><span class="play">✦</span>Styling tips &amp; design inspiration</li>
      </ul>
      <div class="btn-row reveal">
        <a class="btn btn-dark" href="${IG}" target="_blank" rel="noopener">${svg('ig')}Follow Us on Instagram</a>
        <a class="btn btn-outline" href="${IG}reels/" target="_blank" rel="noopener">Watch Reels</a>
      </div>
    </div>
    <div class="insta-frame reveal">
      <iframe src="${IG}embed" title="Latest Instagram posts and reels from @misba_furnishing" loading="lazy" scrolling="no"></iframe>
    </div>
  </div>`;
}

/* ---------- Collection cards ---------- */
const collCard = (c, i, big) => `
  <a class="coll reveal${c.img ? '' : ' coll-noimg'}" href="${collUrl(c.slug)}">
    ${c.img ? `<img loading="lazy" src="${u(c.img)}" alt="${c.name} by Misba Furnishing">` : '<span class="cinema-glow" aria-hidden="true"></span>'}
    <div class="coll-txt"><small>${String(i + 1).padStart(2, '0')}</small><h3>${c.name}</h3><p>${c.short}</p><span class="go">Explore →</span></div>
  </a>`;
const collGrid = $('#collGrid');
if (collGrid) {
  const limit = +collGrid.dataset.limit || COLLECTIONS.length;
  collGrid.innerHTML = COLLECTIONS.slice(0, limit).map((c, i) => collCard(c, i, i < 4)).join('');
}

/* ---------- Lightbox ---------- */
const lb = $('#lb'); let lbList = [], lbIdx = 0, lbReturn = null;
const mItem = (img, cat, cap, label = cat) =>
  `<button class="m-item" data-img="${img}" data-cat="${cat}" data-cap="${cap}"><img loading="lazy" src="${u(img, 800)}" alt="${cap} — ${cat}"><span>${label}</span></button>`;
function bindLightbox(root) {
  root.querySelectorAll('.m-item').forEach((el, i, all) => el.onclick = () => {
    lbList = [...all].map(x => x.dataset); lbReturn = el; openLb(i);
  });
}
function openLb(i) {
  lbIdx = (i + lbList.length) % lbList.length;
  const d = lbList[lbIdx];
  $('#lbImg').src = u(d.img, 1800); $('#lbImg').alt = `${d.cap} — ${d.cat}`;
  $('#lbCat').textContent = d.cat; $('#lbCap').textContent = d.cap;
  $('#lbWa').href = waUrl(`Hi Misba Furnishing, I saw "${d.cap}" (${d.cat}) on your website and would like to know more.`);
  $('#lbWa').target = '_blank';
  lb.hidden = false; document.body.classList.add('locked'); lb.querySelector('.lb-close').focus();
}
function closeLb() { lb.hidden = true; document.body.classList.remove('locked'); lbReturn && lbReturn.focus(); }
lb.querySelector('.lb-close').onclick = closeLb;
lb.querySelector('.prev').onclick = () => openLb(lbIdx - 1);
lb.querySelector('.next').onclick = () => openLb(lbIdx + 1);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
let tx = 0;
lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) openLb(lbIdx + (dx < 0 ? 1 : -1)); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') openLb(lbIdx + 1); if (e.key === 'ArrowLeft') openLb(lbIdx - 1);
});

/* ---------- Work gallery (gallery page: filters; home: featured strip) ---------- */
const masonry = $('#masonry');
if (masonry) {
  const limit = +masonry.dataset.limit || WORK.length;
  const renderWork = (f = 'All') => {
    masonry.innerHTML = WORK.filter(w => f === 'All' || w[0] === f).slice(0, limit).map(([cat, img, cap]) => mItem(img, cat, cap)).join('');
    bindLightbox(masonry);
  };
  const filters = $('#filters');
  if (filters) {
    const FILTERS = ['All', 'Curtains', 'Blinds', 'Sofas', 'Mattresses', 'Mini Theater', 'Showroom'];
    filters.innerHTML = FILTERS.map((f, i) => `<button role="tab" aria-selected="${i === 0}">${f}</button>`).join('');
    filters.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-selected', x === b));
      renderWork(b.textContent);
    });
  }
  renderWork();
}

/* ---------- Collection detail page (collection.html?c=slug) ---------- */
let waDefault = CONFIG.defaultWaMsg;
const detail = $('#collectionDetail');
if (detail) {
  const slug = new URLSearchParams(location.search).get('c');
  const c = COLLECTIONS.find(x => x.slug === slug) || COLLECTIONS[0];
  document.title = `${c.name} in Shivamogga | Misba Furnishing`;
  waDefault = productMsg(c.wa);
  const visitBtn = `<a href="contact.html#visit" class="btn btn-gold">Book a Home Visit</a>`;
  const heroText = `<p class="eyebrow"><a href="collections.html">Collections</a> · ${c.name}</p><h1>${c.title}</h1><p>${c.sub}</p>
      ${c.badge ? `<span class="p-badge">${c.badge}</span>` : ''}
      <div class="btn-row">${visitBtn}<a href="#" data-wa class="btn btn-ghost">${c.cta}</a></div>`;
  if (c.dark) document.body.classList.add('dark-page');
  detail.innerHTML = `
    ${c.fullBleed ? `<header class="p-hero"><img src="${u(c.img)}" alt="${c.name}">
      <div class="p-hero-in">${heroText}</div>
    </header>` : `<header class="p-hero p-split"><div class="banner-ghost" style="background-image:url('${u(c.img)}')" aria-hidden="true"></div>
      <div class="wrap p-hero-in"><div>${heroText}</div><figure class="banner-photo"><img src="${u(c.img)}" alt="${c.name} by Misba Furnishing"></figure></div>
    </header>`}
    ${c.cards ? `<section class="p-sec"><div class="wrap"><p class="eyebrow dark">REPOSE Range</p><h2 style="margin-bottom:34px">Find Your <em>Comfort</em></h2>
      <div class="p-cards">${c.cards.map(([t, d]) => `<div class="p-card reveal"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
      <p class="p-note">${c.cardNote}</p></div></section>` : ''}
    <section class="p-sec"><div class="wrap">
      ${c.tags.length ? `<div class="p-tags">${c.tags.map(t => `<span>${t}</span>`).join('')}</div>` : ''}
      ${c.gallery.length ? `<div class="p-gallery g${Math.min(c.gallery.length, 4)}">${c.gallery.map(([img, cap]) => mItem(img, c.name, cap, cap)).join('')}</div>`
        : `<p class="p-note">Visit our Shivamogga showroom or book a home visit to see options and plan your setup.</p>`}
    </div></section>
    <section class="p-cta"><h2>Want This in <em>Your Home?</em></h2><p>We visit, measure, customize and install.</p>
      <div class="btn-row center">${visitBtn}<a href="#" data-wa class="btn btn-wa">${svg('wa')}${c.cta}</a></div></section>
    <section class="p-sec"><div class="wrap"><p class="eyebrow dark">Keep exploring</p><h2 style="margin-bottom:30px">Other <em>Collections</em></h2>
      <div class="coll-grid mini">${COLLECTIONS.filter(x => x !== c).slice(0, 3).map((x, i) => collCard(x, COLLECTIONS.indexOf(x), false)).join('')}</div></div></section>`;
  bindLightbox(detail);
}
setWa(waDefault);

/* ---------- Home hero: curtain intro + scrolling photo wall ---------- */
const hero = $('#hero');
if (hero) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Slideshow: complete photos in a frame, with a soft "shadow image" of the same photo behind the hero.
  // Home hero: crossfading photos with a slow zoom
  const photos = [...hero.querySelectorAll('#heroPhotos .hs')], hdots = $('#heroBar');
  if (photos.length > 1 && hdots) {
    hdots.innerHTML = photos.map((_, i) => `<button type="button" class="${i ? '' : 'on'}" aria-label="Show photo ${i + 1}"><i></i></button>`).join('');
    const btns = [...hdots.children];
    let at = 0, tm = null;
    const show = n => {
      photos[at].classList.replace('on', 'out'); btns[at].classList.remove('on');
      const prev = photos[at]; setTimeout(() => prev.classList.remove('out'), 1500);
      at = (n + photos.length) % photos.length;
      photos[at].classList.add('on'); void btns[at].offsetWidth; btns[at].classList.add('on');
      next();
    };
    const next = () => { clearTimeout(tm); if (reduce) { hdots.classList.add('static'); return; } tm = setTimeout(() => show(at + 1), 5500); };
    btns.forEach((b, i) => b.onclick = () => show(i));
    document.addEventListener('visibilitychange', () => document.hidden ? clearTimeout(tm) : next());
    next();
  }
  const slidesEl = $('#showSlides'), dotsEl = $('#showDots'), ghostsEl = $('#heroGhosts');
  if (slidesEl) {
    slidesEl.innerHTML = HERO_SLIDES.map(([id, label, slug], i) =>
      `<a class="show-slide${i ? '' : ' on'}" href="${collUrl(slug)}" aria-label="${label}"${i ? ' aria-hidden="true" tabindex="-1"' : ''}><img src="${u(id)}" alt="${label} by Misba Furnishing" width="918" height="1024"${i ? ' loading="lazy"' : ' fetchpriority="high"'}><span>${label}</span></a>`).join('');
    ghostsEl.innerHTML = HERO_SLIDES.map(([id], i) => `<div class="ghost${i ? '' : ' on'}" style="background-image:url('${u(id)}')"></div>`).join('');
    dotsEl.innerHTML = HERO_SLIDES.map(([, label], i) => `<button class="sd${i ? '' : ' on'}" aria-label="Show ${label}"><i></i></button>`).join('');
    const slides = slidesEl.children, ghosts = ghostsEl.children, dots = dotsEl.children;
    let cur = 0, timer = null;
    const go = n => {
      [slides, ghosts, dots].forEach(set => set[cur].classList.remove('on'));
      slides[cur].setAttribute('aria-hidden', 'true'); slides[cur].tabIndex = -1;
      cur = (n + slides.length) % slides.length;
      [slides, ghosts, dots].forEach(set => set[cur].classList.add('on'));
      slides[cur].removeAttribute('aria-hidden'); slides[cur].removeAttribute('tabindex');
      play();
    };
    const play = () => { clearTimeout(timer); if (!reduce) timer = setTimeout(() => go(cur + 1), 5000); };
    [...dots].forEach((d, i) => d.onclick = () => go(i));
    hero.querySelector('.show-nav.prev').onclick = () => go(cur - 1);
    hero.querySelector('.show-nav.next').onclick = () => go(cur + 1);
    const frame = hero.querySelector('.show-frame');
    frame.addEventListener('mouseenter', () => clearTimeout(timer));
    frame.addEventListener('mouseleave', play);
    let sx = 0;
    frame.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    frame.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); });
    play();
  }

  const intro = $('#curtainIntro');
  const startHero = () => hero.classList.add('ready');
  let seen = false; try { seen = sessionStorage.getItem('mfIntro') === '1'; } catch {}
  if (!intro || reduce || seen) { intro && intro.remove(); startHero(); }
  else {
    document.body.classList.add('locked');
    const open = () => {
      if (intro.classList.contains('open')) return;
      intro.classList.add('open');
      setTimeout(startHero, 500);
      setTimeout(() => { intro.remove(); document.body.classList.remove('locked'); }, 1700);
      try { sessionStorage.setItem('mfIntro', '1'); } catch {}
    };
    intro.addEventListener('click', open);
    setTimeout(open, 1500);
  }
}

/* ---------- Header / menu / reveal ---------- */
const header = $('#header');
const solidAlways = document.body.classList.contains('no-hero');
const onScroll = () => header.classList.toggle('solid', solidAlways || scrollY > 60);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const burger = $('#burger'), nav = $('#nav');
function toggleMenu(open) {
  nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu', open); document.body.classList.toggle('locked', open);
}
burger.onclick = () => toggleMenu(!nav.classList.contains('open'));
nav.addEventListener('click', e => e.target.tagName === 'A' && toggleMenu(false));

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Home visit form (contact page) ---------- */
const form = $('#visitForm');
if (form) {
  const msg = $('#formMsg');
  form.date.min = new Date().toISOString().split('T')[0];
  const pre = new URLSearchParams(location.search).get('product');
  if (pre) [...form.product.options].forEach(o => { if (o.text === pre) o.selected = true; });
  const setErr = (input, text) => {
    const f = input.closest('.field'); f.classList.toggle('invalid', !!text);
    f.querySelector('.err').textContent = text || '';
    input.setAttribute('aria-invalid', !!text);
  };
  const normPhone = v => {
    let d = v.replace(/\D/g, '');
    if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
    if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
    return d;
  };
  const validate = () => {
    let first = null; const flag = (el, t) => { setErr(el, t); if (t && !first) first = el; };
    flag(form.name, form.name.value.trim().length < 2 ? 'Please enter your full name.' : '');
    const raw = form.whatsapp.value.trim();
    flag(form.whatsapp, !raw ? 'Please enter your WhatsApp number.' : !/^[6-9]\d{9}$/.test(normPhone(raw)) ? 'Please enter a valid 10-digit Indian mobile number.' : '');
    flag(form.address, form.address.value.trim().length < 5 ? 'Please enter your address.' : '');
    flag(form.area, !form.area.value.trim() ? 'Please enter your area / location.' : '');
    flag(form.product, !form.product.value ? 'Please select a product.' : '');
    flag(form.email, form.email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value) ? 'Please enter a valid email.' : '');
    if (first) first.focus();
    return !first;
  };
  form.addEventListener('input', e => e.target.closest('.field.invalid') && setErr(e.target, ''));
  form.addEventListener('submit', async e => {
    e.preventDefault(); msg.className = 'form-msg'; msg.textContent = '';
    if (form._honey.value) return;
    if (!validate()) return;
    const data = Object.fromEntries(new FormData(form));
    delete data._honey; data.whatsapp = '+91' + normPhone(data.whatsapp);
    const btn = form.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Sending…';
    let sent = false;
    if (CONFIG.formEndpoint) {
      try {
        const r = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ _subject: 'New Home Visit Request', ...data }) });
        sent = r.ok;
      } catch { sent = false; }
    }
    if (!sent) {
      // Fallback / no backend configured: hand the request to WhatsApp so the team receives it.
      const lines = ['Hi Misba Furnishing, I would like to book a home visit.', `Name: ${data.name}`, `WhatsApp: ${data.whatsapp}`, `Address: ${data.address}`, `Area: ${data.area}`, `Product: ${data.product}`,
        data.email && `Email: ${data.email}`, data.date && `Preferred date: ${data.date}`, data.time && `Preferred time: ${data.time}`, data.notes && `Notes: ${data.notes}`].filter(Boolean);
      window.open(waUrl(lines.join('\n')), '_blank', 'noopener');
    }
    btn.disabled = false; btn.textContent = 'Request a Call Back';
    form.reset();
    msg.className = 'form-msg ok';
    msg.textContent = 'Thank you! Your home visit request has been received. Our Misba Furnishing team will contact you shortly on WhatsApp or phone.';
  });
}
