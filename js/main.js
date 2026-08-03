document.addEventListener('DOMContentLoaded', () => {
  const detail = location.pathname.replaceAll('\\','/').includes('/services/');
  const base = detail ? '../' : '';
  const header = document.querySelector('header');

  // One source of truth for navigation: detail pages are upgraded to the same floating header at runtime.
  if (header) {
    header.className = 'fixed top-0 left-0 right-0 z-50 px-3 md:px-6';
    header.innerHTML = `<div class="nav-shell max-w-7xl mx-auto mt-3 rounded-2xl bg-navy shadow-xl px-4 md:px-7 py-3"><nav class="flex items-center justify-between gap-4" aria-label="Main navigation"><div class="hidden lg:flex flex-1 items-center gap-5"><a class="text-white/80 text-sm line-link" href="${base}index.html">Home</a><a class="text-white/80 text-sm line-link" href="${base}services.html">Services</a><a class="text-white/80 text-sm line-link" href="${base}car-care.html">Car Care</a></div><a href="${base}index.html" class="shrink-0" aria-label="US Autos and Tires home"><img class="logo-img" src="${base}assets/images/logo.png" alt="US Auto Repair logo"></a><div class="hidden lg:flex flex-1 items-center justify-end gap-5"><a class="text-white/80 text-sm line-link" href="${base}about.html">About Us</a><a class="text-white/80 text-sm line-link" href="${base}gallery.html">Gallery</a><a class="text-white/80 text-sm line-link" href="${base}coupons.html">Finance</a><a class="bg-red hover:bg-red2 text-white text-xs font-semibold rounded-full px-4 py-3 transition" href="tel:17542235452">Call (754) 223-5452</a></div><button data-menu aria-expanded="false" class="lg:hidden text-white text-2xl p-2" aria-label="Open menu"><span>☰</span></button></nav><div data-panel class="hidden lg:hidden border-t border-white/10 mt-3 pt-3 pb-2"><div class="grid gap-1"><a class="text-white py-3" href="${base}index.html">Home</a><a class="text-white py-3" href="${base}services.html">Services</a><a class="text-white py-3" href="${base}car-care.html">Car Care</a><a class="text-white py-3" href="${base}about.html">About Us</a><a class="text-white py-3" href="${base}gallery.html">Gallery</a><a class="text-white py-3" href="${base}coupons.html">Finance</a><a class="bg-red text-white text-center rounded-full px-4 py-3 mt-2" href="tel:17542235452">Call (754) 223-5452</a></div></div></div>`;
  }
  const desktopNav = header?.querySelector('nav > div:nth-of-type(2)');
  if (desktopNav && !desktopNav.querySelector('[data-book-link]')) { const book = document.createElement('a'); book.href = '#appointment'; book.dataset.bookLink = ''; book.className = 'bg-white text-navy text-xs font-semibold rounded-full px-4 py-3 transition'; book.textContent = 'Book Appointment'; desktopNav.insertBefore(book, desktopNav.querySelector('a[href^="tel:"]')); }
  const mobileNav = header?.querySelector('[data-panel] > div');
  if (mobileNav && !mobileNav.querySelector('[data-book-link]')) { const book = document.createElement('a'); book.href = '#appointment'; book.dataset.bookLink = ''; book.className = 'bg-white text-navy text-center rounded-full px-4 py-3 mt-2'; book.textContent = 'Book Appointment'; mobileNav.insertBefore(book, mobileNav.querySelector('a[href^="tel:"]')); }
  const footer = document.querySelector('footer');
  if (footer) {
    footer.className = 'site-footer bg-navy text-white py-16 pb-24 md:pb-16';
    footer.innerHTML = `<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"><div><img class="logo-img" src="${base}assets/images/logo.png" alt="US Auto Repair logo"><p class="text-white/60 leading-7 mt-5">professional repair care for popular vehicle makes, at independent-shop pricing.</p></div><div><h2 class="font-poppins text-lg">Quick links</h2><div class="grid grid-cols-2 gap-3 mt-5 text-white/60 text-sm"><a class="line-link" href="${base}index.html">Home</a><a class="line-link" href="${base}services.html">Services</a><a class="line-link" href="${base}car-care.html">Car Care</a><a class="line-link" href="${base}about.html">About Us</a><a class="line-link" href="${base}gallery.html">Gallery</a><a class="line-link" href="${base}coupons.html">Finance</a></div></div><div><h2 class="font-poppins text-lg">Service point</h2><p class="text-white/60 leading-7 mt-5"><a class="address-link" href="https://www.google.com/maps/search/?api=1&query=770+N+State+Rd+7%2C+Plantation%2C+FL+33317" target="_blank" rel="noopener noreferrer" aria-label="Open US Autos and Tires in Google Maps">770 N State Rd 7, Plantation, FL 33317</a><br><a class="text-white line-link" href="tel:17542235452">(754) 223-5452</a></p><p class="font-mono text-xs text-white/40 mt-4">Monday through Friday, 8 AM to 6 PM · Saturday, 9 AM to 4 PM · Sunday closed</p></div></div><div class="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-white/40 text-xs">© 2026 US Autos &amp; Tires. All rights reserved.</div>`;
  }
  const footerQuickLinks = footer?.querySelector('.grid.grid-cols-2'); if (footerQuickLinks && !footerQuickLinks.querySelector('[href*="privacy-policy"]')) footerQuickLinks.insertAdjacentHTML('beforeend', `<a class="line-link" href="#appointment">Book Appointment</a><a class="line-link" href="https://americanfirstfinance.com/app/selectApp" target="_blank" rel="noopener">Financing ↗</a><a class="line-link" href="${base}privacy-policy.html">Privacy Policy</a><a class="line-link" href="${base}terms-conditions.html">Terms &amp; Conditions</a>`);
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="site-container footer-grid"><div class="footer-brand"><img class="logo-img" src="${base}assets/images/logo.png" alt="US Auto Repair logo"><p>professional repair care for popular vehicle makes, with the clarity of an independent shop.</p><a class="footer-book" href="#appointment">Book Appointment ↗</a></div><div><h2>Navigation</h2><nav aria-label="Footer navigation"><a href="${base}index.html">Home</a><a href="${base}services.html">Services</a><a href="${base}car-care.html">Car Care</a><a href="${base}about.html">About</a><a href="${base}gallery.html">Gallery</a><a href="${base}coupons.html">Finance</a></nav></div><div><h2>Core services</h2><nav aria-label="Service links"><a href="${base}services/oil-and-filter-changes.html">Oil &amp; Filter Changes</a><a href="${base}services/brake-inspections.html">Brake Inspections</a><a href="${base}services/engine-diagnostics.html">Engine Diagnostics</a><a href="${base}services/transmission-repairs.html">Transmission Repairs</a><a href="${base}services.html">All Services ↗</a></nav></div><div><h2>Contact &amp; hours</h2><p><a class="address-link" href="https://www.google.com/maps/search/?api=1&query=770+N+State+Rd+7%2C+Plantation%2C+FL+33317" target="_blank" rel="noopener noreferrer" aria-label="Open US Autos and Tires in Google Maps">770 N State Rd 7, Plantation, FL 33317</a></p><a class="footer-phone" href="tel:17542235452">(754) 223-5452</a><p>Monday through Friday, 8 AM to 6 PM<br>Saturday, 9 AM to 4 PM · Sunday closed</p><a href="https://americanfirstfinance.com/app/selectApp" target="_blank" rel="noopener">Financing information ↗</a></div></div><div class="site-container footer-legal"><span>© 2026 US Autos &amp; Tires. All rights reserved.</span><div><a href="${base}privacy-policy.html">Privacy Policy</a><a href="${base}terms-conditions.html">Terms &amp; Conditions</a></div></div>`;
  }

  const skip = document.createElement('a'); skip.className = 'skip-link'; skip.href = '#main-content'; skip.textContent = 'Skip to content'; document.body.prepend(skip);

  const workOrder = document.querySelector('.work-order');
  if (workOrder) {
    const orders = [
      {vehicle:'Toyota Camry', service:'Brake inspection', tech:'ASE certified', time:'45 to 60 minutes', status:'AWAITING CONFIRMATION'},
      {vehicle:'Honda Accord', service:'Engine diagnostics', tech:'ASE certified', time:'30 to 45 minutes', status:'AWAITING CONFIRMATION'},
      {vehicle:'Nissan Rogue', service:'Wheel alignment', tech:'ASE certified', time:'60 to 90 minutes', status:'AWAITING CONFIRMATION'},
      {vehicle:'Mazda CX-5', service:'Fluid service', tech:'ASE certified', time:'45 to 75 minutes', status:'AWAITING CONFIRMATION'},
      {vehicle:'Subaru Outback', service:'Battery testing', tech:'ASE certified', time:'20 to 30 minutes', status:'AWAITING CONFIRMATION'},
      {vehicle:'Toyota Corolla', service:'Oil & filter change', tech:'ASE certified', time:'30 to 45 minutes', status:'AWAITING CONFIRMATION'}
    ];
    const order = orders[Math.floor(Math.random() * orders.length)];
    const orderNumber = String(480 + Math.floor(Math.random() * 40)).padStart(5, '0');
    const leaf = [...workOrder.querySelectorAll('*')].filter(el => el.children.length === 0);
    const orderTitle = leaf.find(el => /Work order/i.test(el.textContent));
    if (orderTitle) orderTitle.textContent = `Work order #${orderNumber}`;
    const field = label => { const node = [...workOrder.querySelectorAll('dl div')].find(el => el.querySelector('dt')?.textContent.toLowerCase().includes(label)); return node?.querySelector('dd'); };
    if (field('vehicle')) field('vehicle').textContent = order.vehicle;
    if (field('service')) field('service').textContent = order.service;
    if (field('technician')) field('technician').textContent = order.tech;
    if (field('est. time')) field('est. time').textContent = order.time;
    const status = workOrder.querySelector('.pulse-dot');
    if (status) status.innerHTML = `<i class="w-2 h-2 bg-ok rounded-full"></i> ${order.status}`;
    workOrder.classList.add('work-order-swap');
  }

  if (header) {
    header.className = 'site-header fixed top-0 left-0 right-0 z-50';
    header.innerHTML = `<div class="header-utility"><div class="site-container"><span><a class="address-link" href="https://www.google.com/maps/search/?api=1&query=770+N+State+Rd+7%2C+Plantation%2C+FL+33317" target="_blank" rel="noopener noreferrer" aria-label="Open US Autos and Tires in Google Maps">770 N State Rd 7, Plantation, FL 33317</a></span><span>Monday through Friday, 8 AM to 6 PM · Saturday, 9 AM to 4 PM · Sunday closed</span><a href="tel:17542235452">(754) 223-5452</a></div></div><div class="nav-shell"><nav class="site-container" aria-label="Main navigation"><a href="${base}index.html" class="brand-link" aria-label="US Autos and Tires home"><img class="logo-img" src="${base}assets/images/logo.png" alt="US Auto Repair logo"></a><div class="desktop-nav"><a href="${base}index.html">Home</a><div class="services-menu"><button class="services-trigger" aria-expanded="false" aria-haspopup="true">Services <span class="services-chevron" aria-hidden="true"></span></button><div class="services-dropdown"><div class="services-dropdown-heading">SERVICE DIRECTORY</div><div class="services-dropdown-grid"><a href="${base}services/oil-and-filter-changes.html">Oil &amp; Filter Changes</a><a href="${base}services/tire-rotations.html">Tire Rotations</a><a href="${base}services/wheel-alignments.html">Wheel Alignments</a><a href="${base}services/brake-inspections.html">Brake Inspections</a><a href="${base}services/battery-testing.html">Battery Testing</a><a href="${base}services/fluid-services.html">Fluid Services</a><a href="${base}services/engine-diagnostics.html">Engine Diagnostics</a><a href="${base}services/transmission-repairs.html">Transmission Repairs</a><a href="${base}services/suspension-and-exhaust.html">Suspension &amp; Exhaust</a></div><div class="services-dropdown-footer"><a href="${base}services.html">View All Services ↗</a><a href="#appointment" data-diagnostic-book>Not sure? Request diagnostics ↗</a></div></div></div><a href="${base}car-care.html">Car Care</a><a href="${base}about.html">About</a><a href="${base}gallery.html">Gallery</a><a href="${base}coupons.html">Finance</a></div><div class="header-actions"><a class="header-phone" href="tel:17542235452">Call (754) 223-5452</a><a class="header-book" data-book-link href="#appointment">Book Appointment</a></div><a class="mobile-header-call" href="tel:17542235452">Call</a><button data-menu aria-expanded="false" class="menu-trigger" aria-label="Open navigation menu"><span>☰</span></button></nav><div data-panel class="mobile-drawer" hidden><div class="mobile-drawer-inner"><div class="mobile-primary-actions"><a class="header-book" data-book-link href="#appointment">Book Appointment</a><a class="mobile-call-action" href="tel:17542235452">Call Now · (754) 223-5452</a></div><a href="${base}index.html">Home</a><details><summary>Services</summary><div class="mobile-service-links"><a href="${base}services/oil-and-filter-changes.html">Oil &amp; Filter Changes</a><a href="${base}services/tire-rotations.html">Tire Rotations</a><a href="${base}services/wheel-alignments.html">Wheel Alignments</a><a href="${base}services/brake-inspections.html">Brake Inspections</a><a href="${base}services/battery-testing.html">Battery Testing</a><a href="${base}services/fluid-services.html">Fluid Services</a><a href="${base}services/engine-diagnostics.html">Engine Diagnostics</a><a href="${base}services/transmission-repairs.html">Transmission Repairs</a><a href="${base}services/suspension-and-exhaust.html">Suspension &amp; Exhaust</a><a href="${base}services.html">View All Services</a></div></details><a href="${base}car-care.html">Car Care</a><a href="${base}about.html">About</a><a href="${base}gallery.html">Gallery</a><a href="${base}coupons.html">Finance</a><div class="mobile-business-meta"><strong>US Autos &amp; Tires</strong><span><a class="address-link" href="https://www.google.com/maps/search/?api=1&query=770+N+State+Rd+7%2C+Plantation%2C+FL+33317" target="_blank" rel="noopener noreferrer" aria-label="Open US Autos and Tires in Google Maps">770 N State Rd 7, Plantation, FL 33317</a></span><span>Monday through Friday, 8 AM to 6 PM · Saturday, 9 AM to 4 PM · Sunday closed</span></div></div></div></div>`;
    const utility = header.querySelector('.header-utility .site-container');
    if (utility) utility.innerHTML = `<a class="utility-banner" href="tel:17542235452"><span class="banner-desktop">NOW SERVING PLANTATION, FL &nbsp;·&nbsp; DIAGNOSIS IS ALWAYS FREE &nbsp;·&nbsp; CALL (754) 223-5452</span><span class="banner-mobile">CALL (754) 223-5452</span></a>`;
    const desktopNav = header.querySelector('.desktop-nav');
    const brand = header.querySelector('.brand-link');
    const primaryNav = header.querySelector('.nav-shell nav');
    if (desktopNav && brand && primaryNav) {
      desktopNav.classList.add('desktop-nav-left');
      const rightNav = document.createElement('div');
      rightNav.className = 'desktop-nav desktop-nav-right';
      [...desktopNav.querySelectorAll(':scope > a')].filter(link => /^(About|Gallery|Finance)$/.test(link.textContent.trim())).forEach(link => rightNav.append(link));
      primaryNav.insertBefore(desktopNav, brand);
      brand.after(rightNav);
    }
    header.querySelector('.header-phone')?.remove();
  }
  const shell = document.querySelector('.nav-shell');
  const menu = document.querySelector('[data-menu]');
  const panel = document.querySelector('[data-panel]');
  if (menu && panel) {
    let previousFocus = null;
    const setMenu = open => { panel.hidden = !open; panel.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); menu.querySelector('span').textContent = open ? '×' : '☰'; document.body.classList.toggle('menu-open', open); if (open) { previousFocus = document.activeElement; panel.querySelector('a,button,summary')?.focus(); } else if (previousFocus) previousFocus.focus(); };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false); if (event.key === 'Tab' && menu.getAttribute('aria-expanded') === 'true') { const items = [...panel.querySelectorAll('a,button,summary')].filter(el => !el.closest('[hidden]')); const first = items[0], last = items[items.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } });
    panel.querySelectorAll('a[href]').forEach(link => link.addEventListener('click', () => setMenu(false)));
  }
  const servicesTrigger = document.querySelector('.services-trigger'); const servicesMenu = document.querySelector('.services-menu'); if (servicesTrigger && servicesMenu) { const setServices = open => { servicesMenu.classList.toggle('open', open); servicesTrigger.setAttribute('aria-expanded', String(open)); }; servicesTrigger.addEventListener('click', () => setServices(servicesTrigger.getAttribute('aria-expanded') !== 'true')); servicesMenu.addEventListener('keydown', event => { if (event.key === 'Escape') { setServices(false); servicesTrigger.focus(); } }); document.addEventListener('click', event => { if (!servicesMenu.contains(event.target)) setServices(false); }); }

  const onScroll = () => { shell?.classList.toggle('scrolled', scrollY > 16); document.querySelector('[data-top]')?.classList.toggle('hidden', scrollY < 600); document.querySelector('.mobile-call')?.classList.toggle('translate-y-full', scrollY < 280); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const el = document.querySelector(a.getAttribute('href')); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); } }));

  const pageName = location.pathname.replaceAll('\\','/').split('/').pop().replace('.html','') || 'index';
  if (pageName === 'finance' && !document.querySelector('#appointment')) { const appointment = document.createElement('section'); appointment.id = 'appointment'; appointment.className = 'appointment-section'; document.querySelector('main')?.append(appointment); }
  if (pageName === 'about') {
    document.querySelectorAll('main section').forEach(section => {
      if (/team bio placeholder|the people behind the work/i.test(section.textContent)) section.remove();
    });
  }
  const addSection = html => { const node = document.createElement('div'); node.innerHTML = html.trim(); const section = node.firstElementChild; document.querySelector('main')?.appendChild(section); return section; };
  const addAfterHero = html => { const node = document.createElement('div'); node.innerHTML = html.trim(); const section = node.firstElementChild; const mainNode = document.querySelector('main'); const hero = mainNode?.querySelector('section'); if (section && hero) hero.after(section); else if (section) mainNode?.appendChild(section); return section; };
  if (pageName === 'index') addAfterHero(`<section class="clarity-intro py-20 md:py-28 bg-paper"><div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center"><div class="reveal"><div class="eyebrow">WHO WE ARE / WHAT TO EXPECT</div><h2 class="font-poppins text-4xl md:text-5xl leading-tight mt-5">Automotive care built around clarity.</h2><p class="text-steel text-lg leading-8 mt-6">US Autos &amp; Tires is an independent automotive repair shop in Plantation, Florida, providing professional attention without dealership pressure. Our team combines modern diagnostic equipment, ASE certified expertise, clear work orders, and straightforward communication so you understand what your vehicle needs before work begins.</p><p class="text-steel leading-7 mt-5">We specialize in popular vehicle makes listed on this site. Diagnosis is always free, you approve the work before repairs begin, and qualifying major repairs may include free towing. Financing is available through American First Finance, subject to its application process.</p><div class="flex flex-wrap gap-3 mt-8"><a href="#appointment" class="bg-red hover:bg-red2 text-white font-semibold rounded-full px-6 py-4 transition">Book an Appointment ↗</a><a href="about.html" class="border border-navy/20 hover:border-navy text-navy font-semibold rounded-full px-6 py-4 transition">Why choose us ↗</a></div></div><div class="clarity-panel bg-navy text-white rounded-2xl p-6 md:p-8 reveal delay-2"><div class="flex items-center justify-between border-b border-white/10 pb-5"><div class="font-mono text-red text-xs">FIELD GUIDE / 04 POINTS</div><span class="font-mono text-[10px] text-white/50">USAT / PLT</span></div><div class="grid sm:grid-cols-2 gap-x-6 gap-y-7 pt-7"><div class="clarity-feature"><span class="font-mono text-red text-xs">01</span><h3 class="font-poppins text-lg mt-2">ASE certified expertise</h3><p class="text-white/60 text-sm leading-6 mt-2">Technical attention for the vehicles we service.</p></div><div class="clarity-feature"><span class="font-mono text-red text-xs">02</span><h3 class="font-poppins text-lg mt-2">Modern diagnostics</h3><p class="text-white/60 text-sm leading-6 mt-2">A measured starting point for warning lights and drivability concerns.</p></div><div class="clarity-feature"><span class="font-mono text-red text-xs">03</span><h3 class="font-poppins text-lg mt-2">Clear work orders</h3><p class="text-white/60 text-sm leading-6 mt-2">plain language findings, next steps, and pricing before work moves forward.</p></div><div class="clarity-feature"><span class="font-mono text-red text-xs">04</span><h3 class="font-poppins text-lg mt-2">Approval before repairs</h3><p class="text-white/60 text-sm leading-6 mt-2">You stay in control of the repair plan from diagnosis through completion.</p></div></div><div class="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] text-white/50 uppercase"><span>Plantation, FL</span><span>Diagnosis always free</span><span>Approval first</span></div></div></div></section>`);
  if (pageName === 'index') {
    document.body.classList.add('homepage');
    const clarityParagraphs = document.querySelectorAll('.clarity-intro>div>div:first-child>p');
    if (clarityParagraphs[0]) clarityParagraphs[0].textContent = 'US Autos & Tires is an independent Plantation repair shop combining modern diagnostics, ASE certified expertise, clear work orders, and straightforward communication.';
    if (clarityParagraphs[1]) clarityParagraphs[1].textContent = 'We service the approved vehicle makes listed on this site. Diagnosis is always free, and you approve the work before repairs begin. Diagnosis is always free, and you approve the work before repairs begin.';
    const gallery = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('THE WORK IS THE STORY')); if (gallery) { gallery.classList.add('home-gallery'); const grid = gallery.querySelector('.grid'); if (grid) { grid.classList.add('home-gallery-grid'); [...grid.children].forEach((card, i) => { card.classList.add('home-gallery-card'); card.setAttribute('role','button'); card.setAttribute('tabindex','0'); card.dataset.galleryIndex = i; const labels = ['Engine Diagnostics','Wheel & Tire Service','popular Vehicle Care','Service Bay']; const label = card.querySelector('span'); if (label) label.textContent = labels[i]; if (i === 0) card.classList.add('home-gallery-featured'); }); } const heading = gallery.querySelector('h2'); if (heading && !gallery.querySelector('.home-gallery-intro')) heading.insertAdjacentHTML('afterend','<p class="home-gallery-intro text-steel mt-4 max-w-2xl">A look at the systems, service bays, and vehicle care conversations behind the work.</p>'); const actions = gallery.querySelector('.flex.items-end'); if (actions && !gallery.querySelector('.home-gallery-actions')) actions.insertAdjacentHTML('beforeend','<div class="home-gallery-actions flex flex-wrap gap-4"><a href="gallery.html" class="text-red font-semibold line-link">View Full Gallery ↗</a><a href="#appointment" class="text-red font-semibold line-link">Need work like this? Book an appointment ↗</a></div>'); }
    const servicesSection = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('THE SERVICE LINE')); if (servicesSection) { servicesSection.classList.add('home-services'); servicesSection.querySelectorAll('.service-card').forEach(card => { if (!card.querySelector('.service-card-action')) card.insertAdjacentHTML('beforeend','<span class="service-card-action">View Service ↗</span>'); }); servicesSection.querySelector('.max-w-7xl')?.insertAdjacentHTML('beforeend','<div class="services-context-cta"><div><h3>Not sure which service you need?</h3><p>Start with the warning sign or concern. The shop can help identify the appropriate first inspection.</p></div><div><a href="#appointment" data-diagnostic-book>Request Diagnostics</a><a href="tel:17542235452">Call the Shop</a></div></div>'); }
    const process = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('HOW IT WORKS')); if (process) { process.classList.add('home-process'); const titles = ['Request','Diagnose','Approve','Drive Away']; process.querySelectorAll('h3').forEach((heading,i) => heading.textContent = titles[i]); const paragraphs = process.querySelectorAll('h3 + p'); if (paragraphs[0]) paragraphs[0].textContent = 'Submit an appointment request online or call. The shop confirms availability before your visit.'; if (paragraphs[1]) paragraphs[1].textContent = 'The team inspects the concern with modern equipment. Diagnosis is always free.'; if (paragraphs[2]) paragraphs[2].textContent = 'You review the work order and approve the repair plan before service begins.'; if (paragraphs[3]) paragraphs[3].textContent = 'The work is completed and explained clearly before you return to the road.'; process.querySelector('.max-w-7xl')?.insertAdjacentHTML('beforeend','<a class="process-cta" href="#appointment">Start Your Appointment Request ↗</a>'); }
    const proofStrip = [...document.querySelectorAll('main section')].find(section => /ASE CERTIFIED/i.test(section.textContent) && /DEALERSHIP-STYLE PRECISION/i.test(section.textContent)); if (proofStrip) proofStrip.classList.add('home-proof-strip');
    if (proofStrip) { const proofGrid = proofStrip.querySelector('.max-w-7xl'); if (proofGrid) proofGrid.innerHTML = '<div><strong>ASE Certified</strong><span>Trained technicians and measured vehicle care</span></div><div><strong>Free Towing on Major Repairs</strong><span>Available for qualifying major repairs</span></div><div><strong>Financing Available</strong><span>Subject to provider approval and terms</span></div><div><strong>Dealership-Style Precision</strong><span>Clear findings and approval before work begins</span></div>'; }
    const stats = [...document.querySelectorAll('main section')].find(section => section.querySelector('[data-count]')); if (stats) { stats.classList.add('trust-statements'); stats.querySelector('.max-w-7xl').innerHTML = '<div><strong>Independent Shop</strong><span>Clear service without dealership pressure</span></div><div><strong>9 Core Services</strong><span>Maintenance, diagnostics, and repair</span></div><div><strong>Free Diagnosis</strong><span>Findings explained before work begins</span></div><div><strong>Financing Available</strong><span>Subject to provider approval and terms</span></div>'; }
    const difference = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('THE US AUTOS')); if (difference) { difference.classList.add('work-order-explainer'); const panel = difference.querySelector('.bg-navy'); if (panel) panel.innerHTML = '<div class="eyebrow">WORK ORDER / CLEAR AT EVERY STEP</div><h3>Your work order stays clear.</h3><dl><div><dt>Finding</dt><dd>What the inspection shows</dd></div><div><dt>Recommended service</dt><dd>The useful next step</dd></div><div><dt>Customer approval</dt><dd>Required before repairs begin</dd></div><div><dt>Work status</dt><dd>Explained through completion</dd></div></dl>'; }
    const faq = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('COMMON QUESTIONS')); if (faq) { faq.classList.add('home-faq'); faq.innerHTML = '<div class="site-container faq-layout"><div class="faq-intro"><div class="eyebrow">COMMON QUESTIONS</div><h2>Before you pull in.</h2><p>Clear answers help you decide what to do next. An online request is never an instant confirmation.</p><div class="faq-actions"><a href="#appointment">Book Appointment</a><a href="tel:17542235452">Call the Shop</a></div></div><div class="faq-list"><div class="faq-item"><button class="faq-question" aria-expanded="false">Do I need an appointment?<span class="faq-chevron">+</span></button><p class="faq-answer">Calling or submitting a request helps the shop plan for your vehicle. The team will confirm availability.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Is an online request immediately confirmed?<span class="faq-chevron">+</span></button><p class="faq-answer">No. It is an appointment request. A team member must contact you to confirm the date and time.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Do you service the makes listed on this site?<span class="faq-chevron">+</span></button><p class="faq-answer">Yes. popular vehicle makes are a stated specialty of US Autos &amp; Tires.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Do you service the makes listed on this site?<span class="faq-chevron">+</span></button><p class="faq-answer">Yes. We also service the approved vehicle makes listed on this site.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Is diagnosis free?<span class="faq-chevron">+</span></button><p class="faq-answer">Yes. Diagnosis is always free, and the work is explained before you approve it.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Is financing available?<span class="faq-chevron">+</span></button><p class="faq-answer">Financing is available through American First Finance, subject to its application, approval, and terms.</p></div><div class="faq-item"><button class="faq-question" aria-expanded="false">Do you offer towing?<span class="faq-chevron">+</span></button><p class="faq-answer">Free towing is listed for qualifying major repairs. Call the shop to confirm eligibility and availability before dispatch.</p></div></div></div>'; }
  }

  if (pageName === 'index') {
    const faq = document.querySelector('.home-faq');
    if (faq) {
      faq.classList.add('site-faq-editorial');
      faq.innerHTML = `<div class="site-container site-faq-grid"><div class="site-faq-intro"><div class="eyebrow">COMMON QUESTIONS</div><h2>Answers before you pull in.</h2><p>Clear information helps you choose the right next step. An online appointment request is never an instant confirmation.</p><div class="site-faq-actions"><a href="#appointment">Book Appointment</a><a href="tel:17542235452">Call the Shop</a></div></div><div class="site-faq-list"><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Do I need an appointment?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Calling or submitting a request helps the shop plan for your vehicle. The team will contact you to confirm availability.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Is an online request immediately confirmed?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>No. It is an appointment request. A team member must contact you to confirm the date and time.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Do you service the makes listed on this site?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Yes. popular vehicle makes are a stated specialty of US Autos &amp; Tires.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Do you service the makes listed on this site?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Yes. We also service the approved vehicle makes listed on this site.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Is diagnosis free?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Yes. Diagnosis is always free, and the work is explained before you approve it.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Is financing available?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Financing is available through American First Finance, subject to its application, approval, and terms.</p></div></article><article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false"><span>Do you offer towing?</span><i class="site-faq-icon" aria-hidden="true"></i></button></h3><div class="faq-answer site-faq-answer"><p>Free towing is listed for qualifying major repairs. Call the shop to confirm eligibility and availability before dispatch.</p></div></article></div></div>`;
    }
  }

  if (pageName === 'index') { const cards = [...document.querySelectorAll('.home-gallery-card')]; const modal = document.createElement('div'); modal.className = 'home-gallery-lightbox'; modal.hidden = true; modal.innerHTML = `<div class="home-gallery-dialog" role="dialog" aria-modal="true" aria-label="Shop image viewer"><button class="home-gallery-close" aria-label="Close image viewer">×</button><button class="home-gallery-prev" aria-label="Previous image">←</button><div class="home-gallery-image" role="img"></div><div class="home-gallery-caption"></div><button class="home-gallery-next" aria-label="Next image">→</button></div>`; document.body.appendChild(modal); let galleryIndex = 0; const renderGallery = () => { const card = cards[galleryIndex]; const bg = getComputedStyle(card).backgroundImage; modal.querySelector('.home-gallery-image').style.backgroundImage = bg; modal.querySelector('.home-gallery-image').setAttribute('aria-label', card.textContent.trim()); modal.querySelector('.home-gallery-caption').textContent = card.textContent.trim(); }; const openGallery = i => { galleryIndex = i; renderGallery(); modal.hidden = false; modal.querySelector('.home-gallery-close').focus(); document.body.classList.add('lightbox-open'); }; const closeGallery = () => { modal.hidden = true; document.body.classList.remove('lightbox-open'); }; cards.forEach((card, i) => { card.addEventListener('click', () => openGallery(i)); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGallery(i); } }); }); modal.querySelector('.home-gallery-close').addEventListener('click', closeGallery); modal.querySelector('.home-gallery-prev').addEventListener('click', () => { galleryIndex = (galleryIndex + cards.length - 1) % cards.length; renderGallery(); }); modal.querySelector('.home-gallery-next').addEventListener('click', () => { galleryIndex = (galleryIndex + 1) % cards.length; renderGallery(); }); modal.addEventListener('click', e => { if (e.target === modal) closeGallery(); }); addEventListener('keydown', e => { if (modal.hidden) return; if (e.key === 'Escape') closeGallery(); if (e.key === 'ArrowLeft') modal.querySelector('.home-gallery-prev').click(); if (e.key === 'ArrowRight') modal.querySelector('.home-gallery-next').click(); }); }

  // Three purpose-built interactions per main page, kept lightweight and native to the shop.
  const mainPageTools = {
    index: `<section class="page-tools action-paths"><div class="site-container"><div class="eyebrow">YOUR NEXT STEP</div><h2>Choose the clearest way forward.</h2><div class="action-card-grid"><a class="action-card" href="services.html"><span class="action-icon">01</span><h3>Explore Services</h3><p>Browse all nine service categories and learn what each visit can include.</p><b>View Services ↗</b></a><a class="action-card" href="tel:17542235452"><span class="action-icon">02</span><h3>Call the Shop</h3><p>Speak directly with the team about your vehicle and the next available step.</p><b>Call (754) 223-5452 ↗</b></a><a class="action-card" href="#appointment" data-warning-book><span class="action-icon">03</span><h3>Describe a Warning Sign</h3><p>Tell us what changed. We will use it as context for an appointment request, not an online diagnosis.</p><b>Start Your Request ↗</b></a></div></div></section>`,
    services: `<section class="page-tools py-20 md:py-28 bg-paper-2"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">SERVICE DESK / SORT THE SIGNAL</div><h2 class="font-poppins text-4xl mt-5">Find the right lane faster.</h2><div class="flex flex-wrap gap-2 mt-8"><button class="tool-tab active" data-service-filter="all">All services</button><button class="tool-tab" data-service-filter="maintenance">Maintenance</button><button class="tool-tab" data-service-filter="repair">Repair</button><button class="tool-tab" data-service-filter="diagnostics">Diagnostics</button></div><div class="grid md:grid-cols-3 gap-5 mt-8" data-service-filter-grid><article class="tool-card" data-service-category="maintenance"><span class="font-mono text-red text-xs">MAINTENANCE</span><h3 class="font-poppins text-xl mt-3">Oil, tires, fluids</h3><p class="text-steel mt-2">Keep the everyday systems predictable.</p></article><article class="tool-card" data-service-category="repair"><span class="font-mono text-red text-xs">REPAIR</span><h3 class="font-poppins text-xl mt-3">Brakes, transmission, suspension</h3><p class="text-steel mt-2">Restore control, comfort and drivability.</p></article><article class="tool-card" data-service-category="diagnostics"><span class="font-mono text-red text-xs">DIAGNOSTICS</span><h3 class="font-poppins text-xl mt-3">Engine and battery testing</h3><p class="text-steel mt-2">Turn symptoms into useful information.</p></article></div><div class="quiz-box mt-8"><span class="font-mono text-red text-xs">Hyundai QUIZ</span><p class="font-poppins text-xl mt-3" data-quiz-question>Is the vehicle warning you, wearing unevenly, or struggling to move?</p><div class="flex flex-wrap gap-2 mt-4"><button class="tool-tab" data-quiz="warning">Warning light</button><button class="tool-tab" data-quiz="wear">Wear or handling</button><button class="tool-tab" data-quiz="move">Starting or shifting</button></div><p class="tool-result mt-4" data-quiz-result>Choose the closest description.</p></div></div></section>`,
    'car-care': `<section class="page-tools py-20 md:py-28"><div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8"><div class="tool-card"><div class="eyebrow">MAINTENANCE CLOCK</div><h2 class="font-poppins text-3xl mt-4">Tell us the mileage.</h2><input class="tool-input mt-5" type="number" min="0" placeholder="Current mileage" data-mileage><p class="tool-result mt-4" data-mileage-result>We’ll highlight a useful starting point.</p><div class="mileage-track mt-5"><span data-mileage-marker></span></div></div><div class="tool-card"><div class="eyebrow">DASHBOARD TRANSLATOR</div><h2 class="font-poppins text-3xl mt-4">Tap a warning-light family.</h2><div class="warning-grid mt-5"><button data-warning="engine">◉<span>Engine</span></button><button data-warning="brake">◌<span>Brake</span></button><button data-warning="battery">▣<span>Battery</span></button><button data-warning="tire">◍<span>Tire</span></button></div><p class="tool-result mt-5" data-warning-result>Select a light to get a plain language cue.</p></div></div></section>`,
    about: `<section class="page-tools py-20 md:py-28 bg-paper-2"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">SHOP STANDARD / WHY IT MATTERS</div><h2 class="font-poppins text-4xl mt-5">The details behind the promise.</h2><div class="grid md:grid-cols-3 gap-5 mt-10"><article class="cert-card tool-card"><div class="cert-seal">ASE</div><h3 class="font-poppins text-xl mt-5">ASE certified</h3><p class="cert-more text-steel mt-3">ASE certification is a recognized testing and credential standard for automotive technicians. It signals training and a commitment to measured work.</p></article><article class="facility-card tool-card"><div class="font-mono text-red text-xs">FACILITY / 01</div><h3 class="font-poppins text-xl mt-5">Modern diagnostic equipment</h3><p class="text-steel mt-3">Information first means the repair conversation starts with evidence.</p></article><article class="facility-card tool-card"><div class="font-mono text-red text-xs">FACILITY / 02</div><h3 class="font-poppins text-xl mt-5">plain language work orders</h3><p class="text-steel mt-3">You see the cost and next step before work starts.</p></article></div></div></section>`,
    gallery: `<section class="page-tools py-20 md:py-28 bg-paper-2"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">SHOP VIEW / COMPARE THE DETAIL</div><h2 class="font-poppins text-4xl mt-5">Before and after, side by side.</h2><div class="compare-box mt-10"><img src="assets/images/live-service.jpg" alt="Service bay detail from the reference shop gallery"><div class="compare-after"><img src="assets/images/live-brakes.jpg" alt="Brake detail from the reference shop gallery"></div><input type="range" min="10" max="90" value="52" data-compare aria-label="Before and after comparison"></div><p class="font-mono text-xs text-steel mt-4">DRAG THE DIVIDER · REFERENCE-SITE PHOTOGRAPHY</p></div></section>`,
    coupons: `<section class="page-tools py-20 md:py-28"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">OFFERS / READY WHEN VERIFIED</div><h2 class="font-poppins text-4xl mt-5">Keep the offer system useful.</h2><div class="flex flex-wrap gap-2 mt-8"><button class="tool-tab active" data-coupon-filter="all">All</button><button class="tool-tab" data-coupon-filter="maintenance">Maintenance</button><button class="tool-tab" data-coupon-filter="repair">Repair</button><button class="tool-tab" data-coupon-filter="seasonal">Seasonal</button></div><div class="grid md:grid-cols-3 gap-5 mt-8"><article class="tool-card coupon-tool" data-coupon-category="maintenance"><span class="font-mono text-red text-xs">MAINTENANCE</span><h3 class="font-poppins text-xl mt-3">Offer slot ready</h3><p class="text-steel mt-2">No current public offer was found on the reference site.</p><button class="tool-button mt-5" data-copy="CONFIRM-MAINTENANCE">Copy call note</button></article><article class="tool-card coupon-tool" data-coupon-category="repair"><span class="font-mono text-red text-xs">REPAIR</span><h3 class="font-poppins text-xl mt-3">Offer slot ready</h3><p class="text-steel mt-2">Call the shop to confirm any current repair promotion.</p><button class="tool-button mt-5" data-copy="CONFIRM-REPAIR">Copy call note</button></article><article class="tool-card coupon-tool" data-coupon-category="seasonal"><span class="font-mono text-red text-xs">SEASONAL</span><h3 class="font-poppins text-xl mt-3">Offer slot ready</h3><p class="text-steel mt-2">This card stays ready for a verified offer.</p><button class="tool-button mt-5" data-copy="CONFIRM-SEASONAL">Copy call note</button></article></div><p class="font-mono text-xs text-steel mt-6">CURRENT STATUS: NO LIVE OFFERS PUBLISHED ON THE REFERENCE SITE AT RESEARCH TIME.</p></div></section>`
  };
  if (mainPageTools[pageName]) addSection(mainPageTools[pageName]);
  if (pageName === 'services') addSection(`<section class="py-16"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">MAKE-SPECIFIC LOOKUP</div><div class="tool-card mt-6 flex flex-col md:flex-row md:items-center justify-between gap-5"><div><h2 class="font-poppins text-2xl">What do you drive?</h2><p class="text-steel mt-2">Choose a make to see useful service notes.</p></div><select class="tool-select md:max-w-xs" data-make-lookup><option value="">Choose a make</option><option value="euro">Toyota / Honda / Nissan</option><option value="specialty">Mazda / Subaru / Mitsubishi</option><option value="all">Toyota, Honda, or Ford</option></select><p class="tool-result md:max-w-xs" data-make-result>Make specific notes appear here.</p></div></div></section>`);
  if (pageName === 'car-care') addSection(`<section class="py-16 bg-paper-2"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">SOUTH FLORIDA CHECK</div><div class="tool-card mt-6 flex flex-col md:flex-row md:items-center justify-between gap-5"><div><h2 class="font-poppins text-2xl">Heat, rain or storm prep?</h2><p class="text-steel mt-2">Choose a season concern for a short checklist.</p></div><div class="flex flex-wrap gap-2"><button class="tool-tab" data-season="heat">Heat</button><button class="tool-tab" data-season="storm">Storm season</button><button class="tool-tab" data-season="rain">Heavy rain</button></div><p class="tool-result md:max-w-sm" data-season-result>Checklist appears here.</p></div></div></section>`);
  if (pageName === 'coupons') { const couponHero = [...document.querySelectorAll('main section')].find(section => section.textContent.includes('intentionally marked')); if (couponHero) { const heroCopy = couponHero.querySelector('p'); if (heroCopy) heroCopy.textContent = 'Current offers pulled from the live shop reference page. Confirm eligibility and terms before relying on any offer.'; } document.querySelectorAll('main section').forEach(section => { if (section.textContent.includes('No current public offer')) section.classList.add('hidden'); }); document.querySelectorAll('article').forEach(card => { if (card.textContent.includes('SAMPLE OFFER')) card.classList.add('hidden'); }); addSection(`<section class="py-20 md:py-28"><div class="max-w-7xl mx-auto px-6"><div class="eyebrow">REFERENCE SITE / CURRENT OFFERS</div><h2 class="font-poppins text-4xl mt-5">Offers currently listed by the shop.</h2><p class="text-steel mt-4 max-w-2xl">These offers were pulled from the live reference Finance page. Confirm eligibility, terms and availability with the shop before relying on them.</p><div class="grid md:grid-cols-3 gap-5 mt-10"><article class="tool-card coupon-tool" data-coupon-category="maintenance"><span class="font-mono text-red text-xs">MAINTENANCE / LIVE LISTING</span><h3 class="font-poppins text-2xl mt-4">Up to $29.99</h3><p class="text-steel mt-2">Standard oil change.</p><p class="font-mono text-[10px] text-steel mt-6">COUPON REQUIRED · CONFIRM TERMS</p><button class="tool-button mt-5" data-copy="STANDARD-OIL-CHANGE">Copy call note</button></article><article class="tool-card coupon-tool" data-coupon-category="maintenance"><span class="font-mono text-red text-xs">MAINTENANCE / LIVE LISTING</span><h3 class="font-poppins text-2xl mt-4">Up to $15 off</h3><p class="text-steel mt-2">Full synthetic and semi-synthetic oil change.</p><p class="font-mono text-[10px] text-steel mt-6">COUPON REQUIRED · CONFIRM TERMS</p><button class="tool-button mt-5" data-copy="FULL-SYNTHETIC-OIL-CHANGE">Copy call note</button></article><article class="tool-card coupon-tool" data-coupon-category="repair"><span class="font-mono text-red text-xs">MAJOR REPAIR / LIVE LISTING</span><h3 class="font-poppins text-2xl mt-4">$0 towing</h3><p class="text-steel mt-2">Towing on all major repairs, as listed by the shop.</p><p class="font-mono text-[10px] text-steel mt-6">CONFIRM ELIGIBILITY BEFORE DISPATCH</p><button class="tool-button mt-5" data-copy="FREE-TOWING-MAJOR-REPAIR">Copy call note</button></article></div></div></section>`); }
  const localPhotos = ['live-service.jpg','live-brakes.jpg','live-engine.jpeg','live-oil.jpg','live-blue-car.jpg','live-parts.jpg','live-care.jpg','live-tow-truck.jpeg'];
  document.querySelectorAll('[data-gallery]').forEach((card, i) => { const labels = ['Service Bay','Brake Service','Engine Diagnostics','popular Vehicle Care','Wheel & Tire Service','Parts & Inspection','Vehicle Care','Towing Support']; const photo = `${base}assets/images/${localPhotos[i % localPhotos.length]}`; card.setAttribute('src', photo); card.setAttribute('alt', `${labels[i % labels.length]} at US Autos & Tires`); card.textContent = labels[i % labels.length]; card.style.backgroundImage = `linear-gradient(0deg,#0f1b33d9,transparent 65%),url("${photo}")`; card.style.backgroundSize = 'cover'; card.style.backgroundPosition = 'center'; card.classList.add('photo-card'); });
  if (pageName === 'index') { const photoMap = [['Engine Diagnostics','live-engine.jpeg'],['Wheel & Tire Service','live-blue-car.jpg'],['popular Vehicle Care','live-service.jpg'],['Service Bay','live-tow-truck.jpeg']]; document.querySelectorAll('main section').forEach(section => photoMap.forEach(([label, photo]) => { const node = [...section.querySelectorAll('span')].find(s => s.textContent.includes(label)); if (node) { node.parentElement.style.backgroundImage = `linear-gradient(0deg,#0f1b33d9,transparent 65%),url("${base}assets/images/${photo}")`; node.parentElement.style.backgroundSize = 'cover'; node.parentElement.style.backgroundPosition = 'center'; } })); const heroBook = [...document.querySelectorAll('main a')].find(a => a.textContent.includes('Book Service')); if (heroBook) { heroBook.href = '#appointment'; heroBook.textContent = 'Book Appointment ↗'; } document.querySelectorAll('main section').forEach(section => { if (/placeholder for the people|Real customer feedback/i.test(section.textContent)) section.remove(); }); }
  if (pageName === 'index') {
    const gallerySection = [...document.querySelectorAll('main section')].find(section => /The work is the story/i.test(section.querySelector('h2')?.textContent || ''));
    const galleryGrid = gallerySection?.querySelector('.grid');
    const cards = galleryGrid ? [...galleryGrid.children].filter(card => card.querySelector('span')) : [];
    const photos = [
      ['Engine Diagnostics','live-engine.jpeg'],
      ['Wheel & Tire Service','live-blue-car.jpg'],
      ['popular Vehicle Care','live-service.jpg'],
      ['Towing Support','live-tow-truck.jpeg']
    ];
    if (cards.length) {
      galleryGrid.classList.add('home-gallery-grid');
      cards.forEach((card, index) => {
        const [label, file] = photos[index % photos.length];
        card.classList.add('home-gallery-card');
        if (index === 0) card.classList.add('home-gallery-featured');
        if (index === 3) card.classList.add('home-gallery-wide');
        card.style.backgroundImage = `linear-gradient(0deg,#071022d9,transparent 68%),url("${base}assets/images/${file}")`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        const caption = card.querySelector('span');
        caption.textContent = label;
      });
    }
  }
  if (pageName === 'index') {
    const imagePath = file => `${base}assets/images/homepage/${file}`;
    const createImage = ({ file, alt, width, height, className = '' }) => {
      const image = document.createElement('img');
      image.src = imagePath(file);
      image.alt = alt;
      image.width = width;
      image.height = height;
      image.loading = 'lazy';
      image.decoding = 'async';
      if (className) image.className = className;
      return image;
    };
    const createFigure = (className, imageOptions) => {
      const figure = document.createElement('figure');
      figure.className = `home-media ${className}`;
      figure.appendChild(createImage(imageOptions));
      return figure;
    };

    const clarityCopy = document.querySelector('.clarity-intro > div > div:first-child');
    if (clarityCopy && !clarityCopy.querySelector('.home-clarity-media')) {
      clarityCopy.appendChild(createFigure('home-clarity-media', {
        file: 'clarity-inspection.webp',
        alt: 'Technician reviewing vehicle inspection results with a customer',
        width: 1200,
        height: 800
      }));
    }

    const serviceImages = [
      ['service-oil-change.webp', 'Technician performing an oil and filter change'],
      ['service-tire-rotation.webp', 'Technician rotating tires in a service bay'],
      ['service-wheel-alignment.webp', 'Passenger car positioned for a wheel alignment'],
      ['service-brake-inspection.webp', 'Technician inspecting a brake rotor and caliper'],
      ['service-battery-test.webp', 'Technician testing a vehicle battery'],
      ['service-fluid-check.webp', 'Technician checking vehicle fluids under the hood'],
      ['service-engine-diagnostics.webp', 'Technician diagnosing an engine with a scan tool'],
      ['service-transmission-inspection.webp', 'Technician inspecting a transmission from below'],
      ['service-suspension-inspection.webp', 'Technician inspecting front suspension components']
    ];
    document.querySelectorAll('.home-services .service-card').forEach((card, index) => {
      const imageData = serviceImages[index];
      if (!imageData || card.querySelector('.service-card-image')) return;
      card.prepend(createImage({
        file: imageData[0],
        alt: imageData[1],
        width: 640,
        height: 400,
        className: 'service-card-image'
      }));
    });

    const process = document.querySelector('.home-process');
    const processCta = process?.querySelector('.process-cta');
    if (process && processCta && !process.querySelector('.home-process-media')) {
      processCta.before(createFigure('home-process-media', {
        file: 'repair-journey.webp',
        alt: 'Customer, service advisor, and technician coordinating a vehicle repair visit',
        width: 1440,
        height: 720
      }));
    }

    const explainerCopy = document.querySelector('.work-order-explainer .grid > div:first-child');
    if (explainerCopy && !explainerCopy.querySelector('.home-precision-media')) {
      explainerCopy.appendChild(createFigure('home-precision-media', {
        file: 'precision-workshop.webp',
        alt: 'Technician completing precise engine bay work',
        width: 1200,
        height: 800
      }));
    }

    const galleryImages = [
      ['gallery-diagnostics.webp', 'Technician using diagnostic equipment beside an open engine bay'],
      ['gallery-brake-service.webp', 'Technician measuring a brake rotor during wheel service'],
      ['gallery-engine-inspection.webp', 'Technician inspecting an engine bay with a work light'],
      ['gallery-underbody.webp', 'Technician inspecting the underside of a vehicle']
    ];
    const galleryCards = [...document.querySelectorAll('.home-gallery-card')];
    galleryCards.forEach((card, index) => {
      const imageData = galleryImages[index];
      if (!imageData || card.querySelector('.home-gallery-image-asset')) return;
      const image = createImage({
        file: imageData[0],
        alt: imageData[1],
        width: 1200,
        height: 900,
        className: 'home-gallery-image-asset'
      });
      card.prepend(image);
      card.style.backgroundImage = 'none';
      card.setAttribute('aria-label', image.alt);
    });
    const prepareGalleryLightbox = () => {
      galleryCards.forEach(card => {
        const image = card.querySelector('.home-gallery-image-asset');
        if (image) card.style.backgroundImage = `url("${image.currentSrc || image.src}")`;
      });
    };
    galleryCards.forEach(card => {
      card.addEventListener('click', prepareGalleryLightbox, true);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') prepareGalleryLightbox();
      }, true);
    });
    if (galleryCards.length && !galleryCards[0].hasAttribute('role') && document.querySelector('.home-gallery-lightbox')) {
      const staleModal = document.querySelector('.home-gallery-lightbox');
      const modal = staleModal?.cloneNode(true);
      if (staleModal && modal) staleModal.replaceWith(modal);
      let activeIndex = 0;
      const renderGalleryImage = () => {
        const card = galleryCards[activeIndex];
        const image = card.querySelector('.home-gallery-image-asset');
        const caption = card.querySelector('span')?.textContent.trim() || image.alt;
        modal.querySelector('.home-gallery-image').style.backgroundImage = `url("${image.currentSrc || image.src}")`;
        modal.querySelector('.home-gallery-image').setAttribute('aria-label', image.alt);
        modal.querySelector('.home-gallery-caption').textContent = caption;
      };
      const openGallery = index => {
        activeIndex = index;
        renderGalleryImage();
        modal.hidden = false;
        document.body.classList.add('lightbox-open');
        modal.querySelector('.home-gallery-close').focus();
      };
      const closeGallery = () => {
        modal.hidden = true;
        document.body.classList.remove('lightbox-open');
      };
      galleryCards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', () => openGallery(index));
        card.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openGallery(index);
          }
        });
      });
      modal.querySelector('.home-gallery-close').addEventListener('click', closeGallery);
      modal.querySelector('.home-gallery-prev').addEventListener('click', () => {
        activeIndex = (activeIndex + galleryCards.length - 1) % galleryCards.length;
        renderGalleryImage();
      });
      modal.querySelector('.home-gallery-next').addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % galleryCards.length;
        renderGalleryImage();
      });
      modal.addEventListener('click', event => {
        if (event.target === modal) closeGallery();
      });
      addEventListener('keydown', event => {
        if (modal.hidden) return;
        if (event.key === 'Escape') closeGallery();
        if (event.key === 'ArrowLeft') modal.querySelector('.home-gallery-prev').click();
        if (event.key === 'ArrowRight') modal.querySelector('.home-gallery-next').click();
      });
    }

    const financing = [...document.querySelectorAll('main section')].find(section =>
      /A CLEARER WAY TO PAY/i.test(section.textContent)
    );
    if (financing && !financing.querySelector('.home-financing-image')) {
      financing.classList.add('home-financing-media');
      const image = createImage({
        file: 'financing-consultation.webp',
        alt: '',
        width: 1200,
        height: 800,
        className: 'home-financing-image'
      });
      image.setAttribute('aria-hidden', 'true');
      financing.prepend(image);
    }
  }
  if (pageName === 'about') { document.querySelectorAll('main section').forEach(section => { if (/Team bio placeholder/i.test(section.textContent)) section.remove(); }); }

  const serviceDetails = {
    'oil-and-filter-changes': {code:'SVC-01',name:'Oil & Filter Changes',intro:'An oil service is more than draining a pan and twisting on a filter. The right oil grade, filter specification and service interval help an engine manage heat, friction and deposits through daily driving. We review the vehicle, its maintenance context and any visible concerns before recommending the next step.',includes:['Review the vehicle and current service history','Check oil level, condition and visible leaks','Confirm the correct oil and filter specification','Inspect the filter seal and drain area after service','Reset service information when appropriate','Record observations in a plain language work order'],signs:['Oil warning light or low oil level','A new oil smell or visible spot under the vehicle','Mileage or time interval is due','No clear record of the last oil service'],euro:'popular vehicle makes can use specific oil approvals, filter designs and electronic service intervals. Following the vehicle’s specification matters; a familiar-looking bottle or generic interval is not automatically the right answer.',process:['Listen to the concern and confirm the vehicle details','Inspect and explain what the current oil tells us','Present the service recommendation and cost','Complete the work, recheck and explain what changed'],faqs:[['How often should I change the oil?','Use the vehicle manufacturer’s guidance as a starting point, then account for heat, traffic and driving conditions. We can help interpret the interval for your vehicle.'],['Do you use the same oil for every car?','No. Oil grade and approval depend on the engine and vehicle requirements.'],['Is a warning light the same as an oil change reminder?','Not always. An oil-pressure warning needs attention and diagnosis rather than simply resetting a reminder.']]},
    'tire-rotations': {code:'SVC-02',name:'Tire Rotations',intro:'Tire rotation is a small service with a useful inspection built into it. Moving tires through the correct pattern can help even out wear, while the technician gets a close look at tread depth, pressure, sidewalls and the story the tires are telling about alignment or suspension.',includes:['Measure tread depth and compare positions','Inspect tread blocks for cupping or feathering','Check pressure and visible sidewall condition','Rotate according to the vehicle’s tire setup','Note directional, staggered or specialty-fit limitations','Explain whether alignment or tire replacement deserves a closer look'],signs:['Uneven wear across the axle or tread','Steering vibration or new road noise','Rotation interval is due','A vehicle pulls or feels less settled'],euro:'popular vehicle makes often use staggered fitments, directional tires or performance compounds. The correct rotation pattern may be limited, so the inspection matters as much as the tire movement.',process:['Confirm tire size, fitment and the driver’s concern','Inspect wear, pressure and wheel condition','Choose the correct rotation or explain why it is limited','Road-check the result when appropriate and document the next look'],faqs:[['Can every tire be rotated?','No. Directional, staggered and some specialty tire setups have specific limitations.'],['Will rotation fix a vibration?','It may change a tire-related symptom, but vibration can also come from balance, alignment, suspension or wheel damage.'],['How do I know if wear is abnormal?','Compare the inner, center and outer tread, not just the visible outside shoulder.']]},
    'wheel-alignments': {code:'SVC-03',name:'Wheel Alignments',intro:'An alignment sets the relationship between the wheels, steering and road. It is not just about making a steering wheel look straight; it is about helping the vehicle track predictably and letting the tires meet the road as intended. We start with symptoms and tire wear, then measure before suggesting correction.',includes:['Review pulling, steering and road-feel symptoms','Inspect tire wear, pressure and visible suspension concerns','Measure alignment angles with appropriate equipment','Check steering-wheel center and tracking','Look for signs that a worn part may prevent a lasting correction','Explain the measured result and recommended next step'],signs:['Vehicle pulls left or right','Steering wheel sits off center','Inner or outer tire edges wear quickly','The vehicle feels unsettled after a pothole or curb impact'],euro:'popular vehicle makes can have tighter handling expectations and more complex suspension geometry. Correct angles matter for tire life, ride quality and the way advanced systems interpret steering input.',process:['Drive or discuss the symptom and conditions','Inspect tires, wheels and suspension interfaces','Measure the vehicle before adjusting anything','Correct what is serviceable and explain anything that needs repair first'],faqs:[['Do I need an alignment after new tires?','Not automatically, but checking wear and tracking can protect the investment in the tires.'],['Can an alignment fix a worn suspension part?','No. A worn component may need attention before an alignment can hold.'],['What if the car only pulls on crowned roads?','Road slope can affect feel; we compare the symptom across conditions rather than guessing.']]},
    'brake-inspections': {code:'SVC-04',name:'Brake Inspections',intro:'A brake inspection looks at more than pad thickness. Stopping feel, rotor condition, fluid, caliper movement, hardware and the vehicle’s use all contribute to a useful recommendation. We measure what we can see, listen to the concern and separate routine wear from a repair that actually needs attention.',includes:['Review pedal feel, noise, vibration and stopping behavior','Inspect pad thickness and wear balance','Check rotor surfaces and visible heat patterns','Review brake fluid condition and level','Inspect calipers, hoses and hardware where visible','Road-test when appropriate and explain urgency clearly'],signs:['Squealing, grinding or clicking while braking','A soft, low or changing pedal','Vibration through the pedal or steering wheel','The vehicle pulls or takes longer to settle'],euro:'popular vehicle makes may use performance-oriented brake hardware, electronic parking brakes and specific service procedures. Correct parts and reset procedures matter to feel and function.',process:['Document what the driver notices and when it happens','Inspect the complete visible stopping system','Test or measure the relevant components','Present options by priority, not pressure'],faqs:[['How much pad thickness is safe?','Thickness is only one part of the decision; wear balance, rotor condition and usage matter too.'],['Do brake noises always mean the brakes are bad?','No. Noise can come from dust, material, hardware or wear, so it should be inspected.'],['Can I drive with a brake warning light?','A warning light deserves prompt attention. Call before continuing if braking feels different.']]},
    'battery-testing': {code:'SVC-05',name:'Battery Testing',intro:'A slow start or no start can come from the battery, connections, starter, charging system or a draw while the vehicle is parked. Testing gives the conversation a starting point instead of turning the first guess into a parts list. We look at the starting system as a system.',includes:['Review the starting symptom and when it occurs','Inspect accessible battery case and terminals','Test battery condition and starting performance','Check charging system behavior where appropriate','Look for obvious connection or corrosion concerns','Explain whether replacement, charging or more testing makes sense'],signs:['Slow cranking or repeated jump starts','Battery warning light','Electrical accessories behaving inconsistently','The vehicle sat unused or experienced severe heat'],euro:'popular vehicle makes may package batteries in unusual locations and rely on battery-management systems. Replacement can require the correct battery type and registration procedure.',process:['Capture the exact no start or slow-start pattern','Test before recommending a replacement','Check related starting and charging clues','Explain the next step and what the test does not prove'],faqs:[['Does a battery test check the alternator?','It can point toward charging concerns, but the charging system needs its own checks.'],['Why did the new battery go flat?','A weak battery, charging issue or parked electrical draw can each play a role.'],['Does heat affect batteries?','Heat can shorten battery life and make a marginal battery less predictable.']]},
    'fluid-services': {code:'SVC-06',name:'Fluid Services',intro:'Fluids carry heat, lubricate moving parts, transfer hydraulic force and protect systems from wear. A fluid service should match the vehicle, its specification and its condition, not simply a universal flush schedule. We inspect first and explain what the fluid is doing in the system.',includes:['Check fluid levels and visible condition','Look for leaks around accessible reservoirs and lines','Confirm vehicle-specific fluid requirements','Review service history and maintenance intervals','Inspect related filters or service points when applicable','Document what was checked and what should happen next'],signs:['Low fluid level or visible leak','Dark, contaminated or unusual-smelling fluid','Hard shifting or changing brake feel','A service interval is due without a clear record'],euro:'popular vehicles often call for exact fluid specifications and procedures. Using the correct fluid protects seals, valves, clutches and electronic systems that may be less forgiving of substitutions.',process:['Identify the system and vehicle specification','Inspect condition and surrounding components','Explain whether a check, top up or service is appropriate','Recheck levels and document the recommendation'],faqs:[['Should every fluid be flushed on a fixed schedule?','Not necessarily. The vehicle, fluid type, condition and use all matter.'],['Can low fluid cause a warning light?','It can, but a warning may also signal a leak, sensor or system fault.'],['Do you check for leaks during fluid service?','Visible leak checks are part of the inspection, with further testing if needed.']]},
    'engine-diagnostics': {code:'SVC-07',name:'Engine Diagnostics',intro:'A diagnostic scan is a starting point, not a verdict. Modern vehicles store clues across engine, emissions, fuel, ignition and networked systems. We pair the code or warning light with symptoms, inspection and testing so the recommendation speaks to the cause rather than simply naming a part.',includes:['Record warning lights and driving conditions','Scan relevant vehicle systems','Review stored, pending and history information','Inspect related wiring, connections and visible components','Test the system where the code points','Explain findings, limits and repair priorities'],signs:['Check-engine or emissions warning','Rough idle, hesitation or loss of power','Poor starting, stalling or unusual smell','A warning that returns after being cleared'],euro:'popular vehicle makes can have more sensors, modules and manufacturer specific procedures. Correct scan coverage and a disciplined test plan help avoid replacing expensive parts based on a single code.',process:['Listen to the symptom before scanning','Interpret data in the vehicle’s context','Test the most likely causes and verify the result','Present a work order in plain language'],faqs:[['Can you diagnose a warning light for free?','The shop’s promise is diagnosis is always free; the exact testing path is explained before work.'],['Does clearing the code fix the issue?','No. Clearing a code removes information without correcting the cause.'],['Why can two codes point to one problem?','Systems share information, so one fault can create several related messages.']]},
    'transmission-repairs': {code:'SVC-08',name:'Transmission Repairs',intro:'Transmission concerns often show up as a shift, hesitation, flare, noise, leak or change in engagement. Because several systems influence drivability, a useful repair process starts with the symptom and condition before anyone jumps to a rebuild or replacement. The aim is a measured path to the right decision.',includes:['Review shift timing, temperature and driving conditions','Inspect accessible fluid condition and leak areas','Scan transmission and related control systems','Check mounts, linkage and visible driveline concerns','Road-test when appropriate and safe','Explain repair, service or further-test options'],signs:['Delayed engagement or harsh shifts','Slipping, flaring or shuddering','Fluid leak or burning smell','A warning light connected to shifting or drivability'],euro:'popular and popular transmissions may use specific fluids, adaptations, mechatronics and software procedures. Correct diagnosis helps protect a complex and expensive system from guesswork.',process:['Document exactly when the shift concern happens','Inspect, scan and road-test where appropriate','Separate fluid, control, mechanical and related causes','Give the work order in priority order with clear choices'],faqs:[['Does dark fluid always mean the transmission is finished?','Fluid condition is a clue, not a complete diagnosis.'],['Can a transmission problem be electrical?','Yes. Controls, sensors, wiring and software can affect shifting.'],['Should I keep driving if it is slipping?','Call for guidance; continued use can change the condition and repair options.']]},
    'suspension-and-exhaust': {code:'SVC-09',name:'Suspension & Exhaust Repairs',intro:'Ride, handling, noise and exhaust concerns can overlap. A clunk may come from a mount, link, bushing or heat shield; a harsh ride may involve a spring, damper, tire or alignment. We trace the symptom to its source and explain how it affects safety, comfort, control and emissions.',includes:['Review noise, ride and handling conditions','Inspect accessible springs, dampers, links and bushings','Check exhaust pipes, shields, hangers and visible leaks','Look for tire or alignment clues that mimic suspension wear','Road-test when appropriate','Explain which concern is urgent, useful or monitorable'],signs:['Clunks over bumps or when turning','Vehicle bounces, leans or feels loose','Uneven tire wear or steering changes','Rattling, exhaust noise or fumes'],euro:'popular vehicle makes often tune suspension for precise handling and may use complex links, electronic dampers or air systems. Correct parts and procedures protect the balance the vehicle was designed to have.',process:['Recreate the symptom and its conditions','Inspect the related suspension or exhaust area','Test and isolate the source rather than replacing by sound','Explain the repair path and any alignment follow up'],faqs:[['Can a bad alignment cause suspension symptoms?','It can change tire wear and feel, but it does not explain every noise or loose component.'],['Is an exhaust rattle always a major repair?','Not always. A shield, hanger or mount can create noise, but it should be located.'],['Why does the car feel different after a pothole?','A tire, wheel, alignment or suspension component may have changed.']]}
  };
  if (detail && serviceDetails[pageName]) {
    const s = serviceDetails[pageName];
    addSection(`<section class="service-expansion py-20 md:py-28"><div class="max-w-5xl mx-auto px-6"><div class="eyebrow">${s.code} / FIELD GUIDE</div><h2 class="font-poppins text-4xl mt-5">A more useful look at ${s.name.toLowerCase()}.</h2><p class="text-steel leading-8 mt-6 max-w-3xl">${s.intro}</p><div class="grid lg:grid-cols-2 gap-12 mt-14"><div><div class="eyebrow">WHAT’S INCLUDED</div><ul class="detail-list mt-6">${s.includes.map(x=>`<li>✓ ${x}</li>`).join('')}</ul></div><div><div class="eyebrow">SIGNS TO PAY ATTENTION TO</div><ul class="detail-list mt-6">${s.signs.map(x=>`<li>→ ${x}</li>`).join('')}</ul></div></div><div class="grid lg:grid-cols-2 gap-12 mt-16"><div class="detail-panel"><div class="eyebrow">popular &amp; popular NOTE</div><p class="text-steel leading-8 mt-5">${s.euro}</p></div><div><div class="eyebrow">OUR PROCESS</div><ol class="process-list mt-5">${s.process.map((x,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${x}</p></li>`).join('')}</ol></div></div><div class="mt-16"><div class="eyebrow">SERVICE FAQ</div><div class="service-faq mt-6">${s.faqs.map((x,i)=>`<div class="faq-item"><button class="faq-question" aria-expanded="false">${x[0]}<span class="faq-chevron" aria-hidden="true"></span></button><p class="faq-answer">${x[1]}</p></div>`).join('')}</div></div></div></section>`);
  }

  // Purposeful automotive interaction: a small diagnostic console on every page.
  const main = document.querySelector('main'); if (main) main.id = 'main-content';
  const serviceLabel = {'oil-and-filter-changes':'Oil & Filter Changes','tire-rotations':'Tire Rotations','wheel-alignments':'Wheel Alignments','brake-inspections':'Brake Inspections','battery-testing':'Battery Testing','fluid-services':'Fluid Services','engine-diagnostics':'Engine Diagnostics','transmission-repairs':'Transmission Repairs','suspension-and-exhaust':'Suspension & Exhaust Repairs'};
  if (main && !['privacy-policy','terms-conditions'].includes(pageName)) {
    const defaultService = detail ? (serviceLabel[pageName] || '') : '';
    const formNode = document.createElement('section');
    formNode.className = 'appointment-section py-20 md:py-28 bg-paper-2';
    formNode.id = 'appointment';
    formNode.innerHTML = `<div class="max-w-6xl mx-auto px-6"><div class="grid lg:grid-cols-[.72fr_1.28fr] gap-10 items-start"><div><div class="eyebrow">REQUEST / APPOINTMENT</div><h2 class="font-poppins text-4xl mt-5">Request an appointment.</h2><p class="text-steel leading-7 mt-5">Tell us about your vehicle and the service you need. This is an appointment request, not an instant confirmation. A member of the US Autos &amp; Tires team will contact you to confirm availability.</p><div class="appointment-note mt-7"><span class="font-mono text-red text-xs">SERVICE POINT</span><p class="font-poppins text-lg mt-3">770 N State Rd 7</p><p class="text-steel">Plantation, FL 33317 · <a class="text-red font-semibold" href="tel:17542235452">(754) 223-5452</a></p><p class="font-mono text-xs text-steel mt-4">Monday through Friday, 8 AM to 6 PM · Saturday, 9 AM to 4 PM · Sunday closed</p></div></div><form class="appointment-form tool-card" data-appointment-form novalidate><div class="form-grid"><div class="form-field full"><label for="full-name">Full name <b>*</b></label><input id="full-name" name="fullName" autocomplete="name" required placeholder="Your name"><span class="field-error" data-error-for="full-name"></span></div><div class="form-field"><label for="phone">Phone number <b>*</b></label><input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="(754) 223-5452"><span class="field-error" data-error-for="phone"></span></div><div class="form-field"><label for="email">Email address <b>*</b></label><input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"><span class="field-error" data-error-for="email"></span></div><div class="form-field"><label for="contact-method">Preferred contact method <b>*</b></label><select id="contact-method" name="contactMethod" required><option value="">Choose one</option><option>Phone call</option><option>Text message</option><option>Email</option></select></div><div class="form-field"><label for="vehicle-year">Vehicle year <b>*</b></label><input id="vehicle-year" name="vehicleYear" type="number" min="1900" max="2035" required placeholder="2020"></div><div class="form-field"><label for="vehicle-make">Vehicle make <b>*</b></label><input id="vehicle-make" name="vehicleMake" required placeholder="Toyota, Honda, Ford…"></div><div class="form-field"><label for="vehicle-model">Vehicle model <b>*</b></label><input id="vehicle-model" name="vehicleModel" required placeholder="Camry, Civic…"></div><div class="form-field"><label for="requested-service">Requested service <b>*</b></label><select id="requested-service" name="requestedService" required><option value="">Choose a service</option>${Object.values(serviceLabel).map(label=>`<option${label===defaultService?' selected':''}>${label}</option>`).join('')}</select></div><div class="form-field"><label for="preferred-date">Preferred date <b>*</b></label><input id="preferred-date" name="preferredDate" type="date" required></div><div class="form-field"><label for="time-window">Preferred time window <b>*</b></label><select id="time-window" name="timeWindow" required><option value="">Choose a window</option><option>Morning</option><option>Midday</option><option>Afternoon</option><option>First available</option></select></div><div class="form-field full"><label for="symptoms">Symptoms or service needs</label><textarea id="symptoms" name="symptoms" rows="4" placeholder="What are you noticing? Include warning lights, sounds, mileage, or anything else useful."></textarea></div></div><label class="consent-line"><input type="checkbox" name="consent" required> <span>I understand this is a request and that the shop must confirm the date and time.</span></label><input class="honeypot" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="tool-button form-submit" type="submit">Send appointment request ↗</button><p class="form-status" data-form-status aria-live="polite"></p><p class="form-privacy">We only use these details to respond to your appointment request. No payment or sensitive vehicle documents are requested.</p></form></div></div>`;
    const relatedSection = [...main.querySelectorAll('section')].find(section => section.textContent.includes('RELATED SERVICES'));
    const lastSection = main.querySelector('section:last-of-type');
    if (detail && relatedSection) relatedSection.before(formNode); else if (lastSection) lastSection.before(formNode); else main.appendChild(formNode);
    {
      const form = formNode.querySelector('[data-appointment-form]'); form.classList.add('appointment-wizard'); form.innerHTML = `<div class="wizard-progress" aria-label="Appointment request progress"><div class="wizard-progress-bar" data-wizard-progress></div><div class="wizard-steps"><span class="wizard-step active" data-step-label="1">01 <b>Service</b></span><span class="wizard-step" data-step-label="2">02 <b>Vehicle &amp; time</b></span><span class="wizard-step" data-step-label="3">03 <b>Contact</b></span></div><p class="wizard-mobile-step" data-wizard-mobile>Step 1 of 3 · Service</p></div><div class="wizard-panel active" data-wizard-panel="1" tabindex="-1"><h3 class="font-poppins text-2xl" tabindex="-1">What does your vehicle need?</h3><div class="form-field mt-6"><label for="wizard-service">Requested service <b>*</b></label><select id="wizard-service" name="requestedService" required><option value="">Choose a service</option><option${!defaultService?' selected':''}>Not sure / Diagnosis</option>${Object.values(serviceLabel).map(label=>`<option${label===defaultService?' selected':''}>${label}</option>`).join('')}</select></div><div class="form-field full mt-4"><label for="wizard-symptoms">Symptoms or requested work</label><textarea id="wizard-symptoms" name="symptoms" rows="4" placeholder="Warning lights, sounds, mileage, or what you would like checked."></textarea></div><fieldset class="form-field mt-4"><legend>Is the vehicle currently drivable? <b>*</b></legend><div class="wizard-options"><label><input type="radio" name="drivable" value="Yes" required> Yes</label><label><input type="radio" name="drivable" value="No"> No</label><label><input type="radio" name="drivable" value="Not sure"> Not sure</label></div></fieldset></div><div class="wizard-panel" data-wizard-panel="2" tabindex="-1" hidden><h3 class="font-poppins text-2xl" tabindex="-1">Tell us about the vehicle.</h3><div class="form-grid mt-6"><div class="form-field"><label for="wizard-year">Vehicle year <b>*</b></label><input id="wizard-year" name="vehicleYear" type="number" min="1900" max="2035" required placeholder="2020"></div><div class="form-field"><label for="wizard-make">Vehicle make <b>*</b></label><input id="wizard-make" name="vehicleMake" required placeholder="Toyota, Honda, Ford…"></div><div class="form-field"><label for="wizard-model">Vehicle model <b>*</b></label><input id="wizard-model" name="vehicleModel" required placeholder="Camry, Civic…"></div><div class="form-field"><label for="wizard-mileage">Mileage <span class="optional-label">optional</span></label><input id="wizard-mileage" name="mileage" type="number" min="0" placeholder="Approximate mileage"></div><div class="form-field"><label for="wizard-date">Preferred date <b>*</b></label><input id="wizard-date" name="preferredDate" type="date" required></div><div class="form-field"><label for="wizard-time">Preferred time window <b>*</b></label><select id="wizard-time" name="timeWindow" required><option value="">Choose a window</option><option>Morning</option><option>Midday</option><option>Afternoon</option><option>First available</option></select></div><div class="form-field full"><label for="wizard-dropoff">Drop-off preference <span class="optional-label">optional</span></label><select id="wizard-dropoff" name="dropoffPreference"><option value="">Choose one</option><option>Drop off</option><option>Wait at shop</option><option>Not sure</option></select></div></div></div><div class="wizard-panel" data-wizard-panel="3" tabindex="-1" hidden><h3 class="font-poppins text-2xl" tabindex="-1">How should we reach you?</h3><div class="form-grid mt-6"><div class="form-field full"><label for="wizard-name">Full name <b>*</b></label><input id="wizard-name" name="fullName" autocomplete="name" required placeholder="Your name"></div><div class="form-field"><label for="wizard-phone">Phone number <b>*</b></label><input id="wizard-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="(754) 223-5452"></div><div class="form-field"><label for="wizard-email">Email address <b>*</b></label><input id="wizard-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"></div><div class="form-field"><label for="wizard-contact">Preferred contact method <b>*</b></label><select id="wizard-contact" name="contactMethod" required><option value="">Choose one</option><option>Phone call</option><option>Text message</option><option>Email</option></select></div></div><label class="consent-line"><input type="checkbox" name="consent" required> <span>This is an appointment request. The shop will contact me to confirm availability. See our <a href="${base}privacy-policy.html">Privacy Policy</a>.</span></label><input class="honeypot" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"></div><div class="wizard-controls"><button type="button" class="wizard-back" data-wizard-back hidden>Back</button><button type="button" class="tool-button wizard-next" data-wizard-next>Continue ↗</button><button type="submit" class="tool-button form-submit wizard-submit" hidden>Request Appointment ↗</button></div><p class="form-status" data-form-status aria-live="polite"></p><p class="form-privacy">Your request is not an instant confirmation. We only use these details to respond and confirm availability.</p>`;
      const stepPanels = [...form.querySelectorAll('[data-wizard-panel]')]; const stepLabels = [...form.querySelectorAll('.wizard-step')]; const next = form.querySelector('[data-wizard-next]'); const back = form.querySelector('[data-wizard-back]'); const submit = form.querySelector('.wizard-submit'); const progress = form.querySelector('[data-wizard-progress]'); const mobileStep = form.querySelector('[data-wizard-mobile]'); const announcement = document.createElement('p'); announcement.className = 'sr-only'; announcement.setAttribute('aria-live','polite'); form.prepend(announcement); let step = 1;
      const showStep = n => { const names = ['Service','Vehicle & time','Contact']; step = n; stepPanels.forEach(panel => { const active = +panel.dataset.wizardPanel === n; panel.hidden = !active; panel.classList.toggle('active', active); }); stepLabels.forEach((label, i) => label.classList.toggle('active', i < n)); progress.style.width = `${n / 3 * 100}%`; mobileStep.textContent = `Step ${n} of 3 · ${names[n - 1]}`; back.hidden = n === 1; next.hidden = n === 3; submit.hidden = n !== 3; const heading = stepPanels[n - 1].querySelector('h3'); announcement.textContent = `Step ${n} of 3: ${heading.textContent}`; heading?.focus({preventScroll:true}); };
      const validateStep = () => { let valid = true, firstInvalid = null; stepPanels[step - 1].querySelectorAll('[required]').forEach(field => { field.classList.remove('input-error'); if (!field.checkValidity()) { field.classList.add('input-error'); firstInvalid ||= field; valid = false; } }); const phone = form.querySelector('[name="phone"]'); if (step === 3 && phone && !/^[+\d\s().-]{7,}$/.test(phone.value)) { phone.classList.add('input-error'); firstInvalid ||= phone; valid = false; } if (!valid) { announcement.textContent = 'Please complete the required fields in this step.'; firstInvalid?.focus(); } return valid; };
      next.addEventListener('click', () => { if (validateStep()) showStep(Math.min(3, step + 1)); }); back.addEventListener('click', () => showStep(Math.max(1, step - 1))); form.querySelectorAll('input,select,textarea').forEach(field => { const key = `usautos-${field.name}`; try { const saved = sessionStorage.getItem(key); if (saved && field.type !== 'radio' && field.type !== 'checkbox') field.value = saved; } catch {} field.addEventListener('input', () => { field.classList.remove('input-error'); try { if (field.type !== 'radio' && field.type !== 'checkbox') sessionStorage.setItem(key, field.value); } catch {} }); field.addEventListener('change', () => { field.classList.remove('input-error'); try { sessionStorage.setItem(key, field.value); } catch {} }); }); showStep(1);
    }
    if (pageName === 'index') {
      const appointmentCopy = formNode.querySelector('.appointment-note')?.parentElement;
      if (appointmentCopy && !appointmentCopy.querySelector('.home-appointment-media')) {
        const figure = document.createElement('figure');
        figure.className = 'home-media home-appointment-media';
        figure.innerHTML = '<img src="assets/images/homepage/appointment-arrival.webp" alt="Service advisor welcoming a customer at the repair shop" width="1200" height="800" loading="lazy" decoding="async">';
        appointmentCopy.appendChild(figure);
      }
    }
  }
  if (main && !detail && !main.querySelector('[data-car-console]')) {
    const title = detail ? 'Before the work order' : 'Your vehicle is giving you data';
    const consoleBlock = document.createElement('section');
    consoleBlock.className = 'site-enhancements py-20 md:py-28 bg-paper-2';
    consoleBlock.setAttribute('data-car-console', '');
    consoleBlock.innerHTML = `<div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center"><div class="reveal"><div class="eyebrow">INTERACTIVE SERVICE CHECK</div><h2 class="font-poppins text-4xl md:text-5xl mt-5">${title}.</h2><p class="text-steel leading-7 mt-5">Choose the symptom that sounds familiar. We’ll show the kind of first look a technician may take. No scare tactics, just a clearer next step.</p><div class="flex flex-wrap gap-2 mt-7"><button class="console-choice active" data-symptom="light">Warning light</button><button class="console-choice" data-symptom="wear">Tire wear</button><button class="console-choice" data-symptom="noise">Strange noise</button></div><div class="console-output mt-6" aria-live="polite"><span class="font-mono text-red text-xs">READOUT / 01</span><p class="font-poppins text-xl mt-3">Start with the dashboard light and the conditions around it.</p><p class="text-steel text-sm mt-2">Diagnosis is always free. You approve the work before repairs begin.</p></div></div><div class="console-visual reveal delay-2"><div class="vehicle-orbit"><div class="scanline"></div><div class="orbit-car"><div class="car-roof"></div><div class="car-body"><span class="car-window"></span><span class="car-window second"></span></div><i class="wheel one"></i><i class="wheel two"></i></div><div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div></div><div class="font-mono text-xs text-steel text-center mt-4">LIVE BAY STATUS · READY FOR A CLEAR READ</div></div></div>`;
    main.appendChild(consoleBlock);
    const readouts = { light: ['READOUT / 01', 'Start with the dashboard light and the conditions around it.', 'A code is a clue. Testing and context help separate the signal from the source.'], wear: ['READOUT / 02', 'Check the tire pattern, pressure and alignment story.', 'Uneven wear can be useful information before a tire or suspension decision.'], noise: ['READOUT / 03', 'Locate when the sound happens: braking, turning, starting or cruising.', 'The timing and conditions help narrow the first inspection.'] };
    consoleBlock.querySelectorAll('[data-symptom]').forEach(button => button.addEventListener('click', () => { consoleBlock.querySelectorAll('.console-choice').forEach(b => b.classList.remove('active')); button.classList.add('active'); const r = readouts[button.dataset.symptom]; consoleBlock.querySelector('.console-output').innerHTML = `<span class="font-mono text-red text-xs">${r[0]}</span><p class="font-poppins text-xl mt-3">${r[1]}</p><p class="text-steel text-sm mt-2">${r[2]} Diagnosis is always free.</p>`; consoleBlock.querySelector('.vehicle-orbit').classList.remove('scan-active'); void consoleBlock.querySelector('.vehicle-orbit').offsetWidth; consoleBlock.querySelector('.vehicle-orbit').classList.add('scan-active'); }));
  }

  if (detail && window.renderServiceEditorial && serviceDetails[pageName]) window.renderServiceEditorial({main, pageName, base, service:serviceDetails[pageName]});

  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  document.querySelectorAll('[data-count]').forEach(el => { const end = +el.dataset.count; const suffix = el.dataset.suffix || ''; el.textContent = end + suffix; if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const obs = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { let n = 0; const step = Math.max(1, Math.ceil(end / 35)); const timer = setInterval(() => { n = Math.min(end, n + step); el.textContent = n + suffix; if (n >= end) clearInterval(timer); }, 35); obs.unobserve(entry.target); } })); obs.observe(el); });
  document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => { const item = button.closest('.faq-item'); item.classList.toggle('open'); const open = item.classList.contains('open'); button.setAttribute('aria-expanded', String(open)); const icon = button.querySelector('.faq-chevron'); if (icon && ['+','−'].includes(icon.textContent.trim())) icon.textContent = open ? '−' : '+'; }));

  const lightbox = document.querySelector('[data-lightbox]'); let gallery = [], index = 0, lightboxReturnFocus = null, lightboxTouchX = 0;
  document.querySelectorAll('[data-gallery]').forEach((image, i) => { gallery.push(image); image.addEventListener('click', () => { index = i; lightboxReturnFocus = image; show(); }); });
  function show() { if (!lightbox || !gallery.length) return; const source = gallery[index].getAttribute('src'); const caption = gallery[index].getAttribute('alt') || gallery[index].textContent.trim(); lightbox.classList.remove('hidden'); lightbox.setAttribute('role','dialog'); lightbox.setAttribute('aria-modal','true'); lightbox.setAttribute('aria-label', caption); lightbox.querySelector('img').src = source; lightbox.querySelector('img').alt = caption; lightbox.querySelector('[data-close]')?.focus(); document.body.classList.add('lightbox-open'); }
  const close = () => { if (!lightbox || lightbox.classList.contains('hidden')) return; lightbox.classList.add('hidden'); document.body.classList.remove('lightbox-open'); lightboxReturnFocus?.focus(); };
  document.querySelector('[data-close]')?.addEventListener('click', close); document.querySelector('[data-prev]')?.addEventListener('click', () => { index = (index + gallery.length - 1) % gallery.length; show(); }); document.querySelector('[data-next]')?.addEventListener('click', () => { index = (index + 1) % gallery.length; show(); });
  lightbox?.addEventListener('touchstart', event => { lightboxTouchX = event.changedTouches[0].clientX; }, {passive:true});
  lightbox?.addEventListener('touchend', event => { const delta = event.changedTouches[0].clientX - lightboxTouchX; if (Math.abs(delta) < 45) return; index = delta < 0 ? (index + 1) % gallery.length : (index + gallery.length - 1) % gallery.length; show(); }, {passive:true});
  addEventListener('keydown', e => { if (!lightbox || lightbox.classList.contains('hidden')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight' && gallery.length) { index = (index + 1) % gallery.length; show(); } if (e.key === 'ArrowLeft' && gallery.length) { index = (index + gallery.length - 1) % gallery.length; show(); } if (e.key === 'Tab') { const focusable = [...lightbox.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled); const first = focusable[0], last = focusable[focusable.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } } });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('filter-active')); button.classList.add('filter-active'); const filter = button.dataset.filter; document.querySelectorAll('[data-gallery]').forEach(image => image.closest('[data-gallery-card]').classList.toggle('hidden', filter !== 'all' && image.dataset.category !== filter)); }));
  document.querySelector('[data-top]')?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelector('[data-match]')?.addEventListener('change', e => { const result = document.querySelector('[data-match-result]'); if (!e.target.value) return; result.innerHTML = `<a class="text-red font-semibold line-link" href="services/${e.target.value}">Open the recommended service page ↗</a>`; });
  const cost = { maintenance: '$89 to $249', brakes: '$149 to $699', diagnostics: '$0 diagnosis · repair scope follows testing' };
  const updateCost = () => { const service = document.querySelector('[data-cost-service]')?.value, vehicle = document.querySelector('[data-cost-vehicle]')?.value, result = document.querySelector('[data-cost-result]'); if (result && service && vehicle) result.textContent = `${cost[service]}${vehicle === 'popular' ? ' · popular/popular parts and procedures can vary' : ''}`; };
  document.querySelectorAll('[data-cost-service],[data-cost-vehicle]').forEach(el => el.addEventListener('change', updateCost));
  document.querySelector('[data-make-lookup]')?.addEventListener('change', e => { const copy = { euro:'Start with the vehicle’s service schedule, correct fluid specifications and electronic diagnostic coverage.', specialty:'Specialty makes may have tighter procedures and model specific parts; bring the symptom and service history.', all:'We service the approved vehicle makes listed on this site too, with the same clear diagnosis and approval process.' }; document.querySelector('[data-make-result]').textContent = copy[e.target.value] || 'Make specific notes appear here.'; });
  const seasonCopy = { heat:'Check battery condition, cooling-system behavior and air-conditioning performance before the heat exposes a weak point.', storm:'Check tires, wipers, lights, brakes and emergency supplies before storm conditions arrive.', rain:'Check tread depth, tire pressure, wipers and visibility. A small handling change is worth investigating.' };
  document.querySelectorAll('[data-season]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-season]').forEach(b => b.classList.remove('active')); button.classList.add('active'); document.querySelector('[data-season-result]').textContent = seasonCopy[button.dataset.season]; }));
  document.querySelector('[data-directions]')?.addEventListener('click', () => { const from = encodeURIComponent(document.querySelector('[data-address]').value || 'my location'); open(`https://www.google.com/maps/dir/${from}/770+N+State+Rd+7,+Plantation,+FL+33317`, '_blank', 'noopener'); });
  document.querySelectorAll('[data-service-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-service-filter]').forEach(b => b.classList.remove('active')); button.classList.add('active'); const filter = button.dataset.serviceFilter; document.querySelectorAll('[data-service-filter-grid] [data-service-category]').forEach(card => { card.classList.toggle('hidden', filter !== 'all' && card.dataset.serviceCategory !== filter); card.classList.toggle('reflow-in', filter === 'all' || card.dataset.serviceCategory === filter); }); }));
  const quizText = { warning:'Start with Engine Diagnostics or Battery Testing, depending on the light and starting behavior.', wear:'Start with Tire Rotations or Wheel Alignments and let the wear pattern guide the next look.', move:'Start with Battery Testing for starting trouble or Transmission Repairs for shifting concerns.' };
  document.querySelectorAll('[data-quiz]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-quiz]').forEach(b => b.classList.remove('active')); button.classList.add('active'); const result = document.querySelector('[data-quiz-result]'); if (result) result.textContent = quizText[button.dataset.quiz]; }));
  document.querySelector('[data-mileage]')?.addEventListener('input', e => { const n = +e.target.value, result = document.querySelector('[data-mileage-result]'), marker = document.querySelector('[data-mileage-marker]'); const message = n >= 100000 ? 'At 100k+, ask for a full maintenance-history review and inspect age-related rubber, fluids and battery condition.' : n >= 60000 ? 'Around 60k, a broader fluid, brake, tire and suspension review is a useful conversation.' : n >= 30000 ? 'Around 30k, check the maintenance schedule, tire wear, brake condition and fluid intervals.' : 'Start with the owner’s schedule and keep oil, tire and brake observations current.'; if (result) result.textContent = message; if (marker) marker.style.left = `${Math.min(96, Math.max(4, n / 120000 * 100))}%`; });
  const warningCopy = { engine:'A check-engine light is a request for information. Note when it appears and avoid clearing it before diagnosis.', brake:'A brake warning or changed pedal feel deserves prompt attention. Call before continuing if stopping feels different.', battery:'A battery icon can point to charging system behavior, not just battery age. Testing separates the possibilities.', tire:'A tire-pressure warning may be simple pressure loss or a puncture. Check pressure safely and inspect the tread.' };
  document.querySelectorAll('[data-warning]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-warning]').forEach(b => b.classList.remove('active')); button.classList.add('active'); const result = document.querySelector('[data-warning-result]'); if (result) result.textContent = warningCopy[button.dataset.warning]; }));
  document.querySelectorAll('.cert-card').forEach(card => card.addEventListener('mouseenter', () => card.classList.add('cert-open')));
  const compare = document.querySelector('[data-compare]'); if (compare) compare.addEventListener('input', e => e.target.closest('.compare-box').querySelector('.compare-after').style.width = `${e.target.value}%`);
  document.querySelectorAll('[data-coupon-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-coupon-filter]').forEach(b => b.classList.remove('active')); button.classList.add('active'); const filter = button.dataset.couponFilter; document.querySelectorAll('.coupon-tool').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.couponCategory !== filter)); }));
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(button.dataset.copy); } catch {} button.textContent = 'Copied · call to confirm'; button.classList.add('copied'); setTimeout(() => { button.textContent = 'Copy call note'; button.classList.remove('copied'); }, 2200); }));
  const openAppointmentWith = ({service, symptoms} = {}) => { const section = document.querySelector('#appointment'); const form = section?.querySelector('[data-appointment-form]'); if (service && form?.querySelector('[name="requestedService"]')) form.querySelector('[name="requestedService"]').value = service; if (symptoms && form?.querySelector('[name="symptoms"]')) form.querySelector('[name="symptoms"]').value = symptoms; section?.scrollIntoView({behavior:'smooth'}); };
  document.querySelectorAll('[data-diagnostic-book]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); openAppointmentWith({service:'Engine Diagnostics',symptoms:'I would like help understanding a warning sign or change in vehicle behavior.'}); }));
  document.querySelectorAll('[data-warning-book]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); openAppointmentWith({service:'Not sure / Diagnosis',symptoms:'I noticed a warning sign or change in how the vehicle feels.'}); }));
  if (pageName === 'coupons') document.querySelectorAll('.coupon-tool').forEach(card => { const offer = card.querySelector('h3')?.textContent.trim(); const service = card.dataset.couponCategory === 'maintenance' ? 'Oil & Filter Changes' : 'Not sure / Diagnosis'; const button = document.createElement('button'); button.className = 'tool-button coupon-book'; button.textContent = 'Request Appointment ↗'; button.addEventListener('click', () => openAppointmentWith({service,symptoms:`I would like to ask about the ${offer} offer shown on the Finance page.`})); card.appendChild(button); });
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1); const minDate = tomorrow.toISOString().split('T')[0]; document.querySelectorAll('input[type="date"]').forEach(input => input.min = minDate);
  document.querySelectorAll('[data-appointment-form]').forEach(form => form.addEventListener('submit', async event => { event.preventDefault(); const status = form.querySelector('[data-form-status]'); const submit = form.querySelector('.form-submit'); const phone = form.querySelector('[name="phone"]'); const email = form.querySelector('[name="email"]'); let valid = true; form.querySelectorAll('[required]').forEach(field => { field.classList.remove('input-error'); if (!field.checkValidity()) { field.classList.add('input-error'); valid = false; } }); if (phone && !/^[+\d\s().-]{7,}$/.test(phone.value)) { phone.classList.add('input-error'); valid = false; } if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('input-error'); valid = false; } if (!valid) { status.textContent = 'Please check the highlighted fields and try again.'; status.className = 'form-status error'; return; } if (form.querySelector('[name="website"]').value) return; submit.disabled = true; submit.textContent = 'Preparing request…'; status.textContent = ''; const endpoint = window.US_AUTOS_FORM_ENDPOINT; if (!endpoint) { await new Promise(resolve => setTimeout(resolve, 500)); submit.disabled = false; submit.textContent = 'Send appointment request ↗'; status.textContent = 'Online submission is not connected yet. Please call (754) 223-5452 so the team can confirm your request.'; status.className = 'form-status error'; return; } try { const response = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(Object.fromEntries(new FormData(form))) }); if (!response.ok) throw new Error('Request failed'); form.reset(); status.textContent = 'Thank you. Your appointment request has been received. A member of the US Autos & Tires team will contact you to confirm the date and time.'; status.className = 'form-status success'; } catch { status.textContent = 'We could not send the request online. Please call (754) 223-5452 so the team can help directly.'; status.className = 'form-status error'; } finally { submit.disabled = false; submit.textContent = 'Send appointment request ↗'; } }));
  document.querySelectorAll('[data-appointment-form] input,[data-appointment-form] select,[data-appointment-form] textarea').forEach(field => field.addEventListener('input', () => field.classList.remove('input-error')));
  document.querySelectorAll('[data-appointment-form]').forEach(form => form.addEventListener('submit', () => setTimeout(() => { const status = form.querySelector('[data-form-status]'); if (status?.classList.contains('success')) { const service = form.querySelector('[name="requestedService"]')?.value || 'Requested service'; const vehicle = [form.querySelector('[name="vehicleYear"]')?.value,form.querySelector('[name="vehicleMake"]')?.value,form.querySelector('[name="vehicleModel"]')?.value].filter(Boolean).join(' '); const date = form.querySelector('[name="preferredDate"]')?.value || 'Preferred date'; const time = form.querySelector('[name="timeWindow"]')?.value || 'Preferred time'; const contact = form.querySelector('[name="contactMethod"]')?.value || 'Preferred contact method'; form.innerHTML = `<div class="form-success-summary" role="status"><span class="success-mark">✓</span><h3>Your request is on its way.</h3><p>We received your appointment request. A member of the US Autos &amp; Tires team will contact you to confirm availability.</p><dl><div><dt>Service</dt><dd>${service}</dd></div><div><dt>Vehicle</dt><dd>${vehicle}</dd></div><div><dt>Preferred date</dt><dd>${date}</dd></div><div><dt>Time window</dt><dd>${time}</dd></div><div><dt>Contact by</dt><dd>${contact}</dd></div></dl><div class="success-actions"><a href="tel:17542235452">Call the Shop</a><a href="${base}services.html">Return to Services</a></div></div>`; try { Object.keys(sessionStorage).filter(key => key.startsWith('usautos-')).forEach(key => sessionStorage.removeItem(key)); } catch {} } }, 700)));
});

// Final sitewide content and route normalization. This runs after the shared
// header/footer and editorial service sections have been rendered.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const path = location.pathname.replaceAll('\\','/');
  const detail = path.includes('/services/');
  const base = detail ? '../' : '';
  const page = path.split('/').pop().replace('.html','') || 'index';
  const financeHref = `${base}finance.html`;
  document.querySelectorAll('a[href$="coupons.html"]').forEach(link => { link.href = financeHref; link.textContent = link.textContent.replace(/Finance/gi, 'Finance'); });
  document.querySelectorAll('.header-phone').forEach(link => link.remove());
  document.querySelectorAll('a').forEach(link => { if (/Finance/i.test(link.textContent)) link.textContent = link.textContent.replace(/Finance/gi, 'Finance'); });

  const replacements = [
    [/professional repair care for popular vehicle makes/gi, 'careful service for everyday cars, SUVs, and light trucks'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/popular &amp; popular specialists/gi, 'COMMON VEHICLE SERVICE'],
    [/popular & popular specialists/gi, 'COMMON VEHICLE SERVICE'],
    [/popular &amp; popular note/gi, 'COMMON VEHICLE NOTE'],
    [/popular & popular note/gi, 'COMMON VEHICLE NOTE'],
    [/popular vehicles/gi, 'common vehicles'],
    [/Everyday vehicle care/gi, 'Everyday vehicle care'],
    [/popular\/popular/gi, 'popular vehicle makes'],
    [/popular\/popular parts and procedures can vary/gi, 'Parts and procedures can vary by vehicle'],
    [/popular vehicles/gi, 'everyday vehicles'],
    [/popular/gi, 'everyday'],
    [/Toyota Camry/gi, 'Toyota Camry'],
    [/Honda Accord/gi, 'Honda Accord'],
    [/Nissan Rogue/gi, 'Ford Escape'],
    [/Mazda CX-5/gi, 'Chevrolet Equinox'],
    [/Subaru Outback/gi, 'Nissan Rogue'],
    [/\bToyota\b/gi, 'Toyota'],
    [/Honda/gi, 'Honda'],
    [/\bNissan\b/gi, 'Nissan'],
    [/\bMazda\b/gi, 'Mazda'],
    [/Subaru/gi, 'Subaru'],
    [/\bMitsubishi\b/gi, 'Mitsubishi'],
    [/\bHyundai\b/gi, 'Hyundai'],
    [/Toyota \/ Honda \/ Nissan/gi, 'Toyota / Honda / Ford'],
    [/Mazda \/ Subaru \/ Mitsubishi/gi, 'Chevrolet / Nissan / Subaru'],
    [/Toyota, Honda, Ford…/gi, 'Toyota, Honda, Ford…'],
    [/Camry, Civic…/gi, 'Camry, Civic…']
  ];
  replacements.push(
    [/\u00e2\u20ac\u2122/g, "'"],
    [/\u00e2\u20ac\u0153/g, '"'],
    [/\u00e2\u20ac\u009d/g, '"'],
    [/\u00e2\u20ac\u0093/g, ' '],
    [/\u00e2\u20ac\u0094/g, ' '],
    [/\u00c2\u00b7/g, ' · '],
    [/\u00e2\u009c\u0093/g, '✓'],
    [/\u00e2\u0086\u0097/g, '↗'],
    [/\u00e2\u0086\u0090/g, '←'],
    [/\u00e2\u0086\u0092/g, '→'],
    [/\u00e2\u0086\u0091/g, '↑'],
    [/\u00e2\u0098\u00b0/g, '☰'],
    [/professional/gi, 'professional'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/popular vehicles/gi, 'popular vehicles'],
    [/popular vehicles/gi, 'popular vehicles'],
    [/popular/gi, 'popular'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/popular vehicle makes/gi, 'popular vehicle makes'],
    [/Toyota Corolla/gi, 'Toyota Corolla'],
    [/popular \/ popular/gi, 'Toyota Corolla'],
    [/plain language/gi, 'plain language'],
    [/ASE certified/gi, 'ASE certified'],
    [/off center/gi, 'off center'],
    [/follow up/gi, 'follow up'],
    [/no start/gi, 'no start'],
    [/charging system/gi, 'charging system'],
    [/top up/gi, 'top up'],
    [/manufacturer specific/gi, 'manufacturer specific'],
    [/model specific/gi, 'model specific'],
    [/service conversations owners commonly start with/gi, 'service options drivers ask about'],
    [/choose deliberately/gi, 'make an informed choice'],
    [/Let's get a clear read on it\./gi, 'Let’s get a clear answer.']
  );
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) { const parent = walker.currentNode.parentElement; if (parent && !/^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.tagName)) nodes.push(walker.currentNode); }
  nodes.forEach(node => { let value = node.nodeValue; replacements.forEach(([from,to]) => { value = value.replace(from,to); }); if (value !== node.nodeValue) node.nodeValue = value; });
  document.querySelectorAll('[alt],[title]').forEach(el => replacements.forEach(([from,to]) => { if (el.alt) el.alt = el.alt.replace(from,to); if (el.title) el.title = el.title.replace(from,to); }));
  document.querySelectorAll('[placeholder]').forEach(el => replacements.forEach(([from,to]) => { el.placeholder = el.placeholder.replace(from,to); }));
  document.querySelectorAll('meta[content]').forEach(meta => replacements.forEach(([from,to]) => { meta.content = meta.content.replace(from,to); }));
  replacements.forEach(([from,to]) => { document.title = document.title.replace(from,to); });
  const clarity = document.querySelector('.clarity-intro');
  if (clarity) {
    const paragraphs = clarity.querySelectorAll('p');
    if (paragraphs[0]) paragraphs[0].textContent = 'US Autos & Tires is an independent auto repair shop in Plantation, Florida. Our ASE certified technicians use modern diagnostic equipment and explain what your vehicle needs before any work begins.';
    if (paragraphs[1]) paragraphs[1].textContent = 'We service cars, SUVs, and light trucks from popular makes including Toyota, Honda, Nissan, Mazda, Subaru, Mitsubishi, Hyundai, Kia, Volkswagen, Ford, Chevrolet, Dodge, Chrysler, Jeep, and Ram. Diagnosis is always free, and repairs begin only after you approve the work.';
  }
  const addressHref = 'https://www.google.com/maps/search/?api=1&query=770+N+State+Rd+7%2C+Plantation%2C+FL+33317';
  const addressHtml = `<a class="address-link" href="${addressHref}" target="_blank" rel="noopener noreferrer" aria-label="Open US Autos and Tires in Google Maps">770 N State Rd 7, Plantation, FL 33317</a>`;
  document.querySelectorAll('body p, body h1, body h2, body h3, body span').forEach(element => {
    if (element.querySelector('a') || !/770 N State Rd 7[\s,·]*Plantation,?\s*FL\s*33317/i.test(element.textContent)) return;
    element.innerHTML = addressHtml;
  });
  document.querySelectorAll('.appointment-note').forEach(note => {
    const address = [...note.querySelectorAll('p')].find(item => /770 N State Rd 7|Plantation,?\s*FL\s*33317/i.test(item.textContent));
    if (address) address.innerHTML = addressHtml;
  });
  document.querySelectorAll('body a').forEach(link => {
    if (/Finance/i.test(link.textContent)) { link.textContent = link.textContent.replace(/Finance/gi, 'Finance'); link.href = financeHref; }
  });
  const allowedMakes = ['Toyota','Honda','Nissan','Mazda','Subaru','Mitsubishi','Hyundai','Kia','Volkswagen (VW)','Ford','Chevrolet','Dodge','Chrysler','Jeep','Ram'];
  const serviceDefaults = {'oil-and-filter-changes':'Oil & Filter Changes','tire-rotations':'Tire Rotations','wheel-alignments':'Wheel Alignments','brake-inspections':'Brake Inspections','battery-testing':'Battery Testing','fluid-services':'Fluid Services','engine-diagnostics':'Engine Diagnostics','transmission-repairs':'Transmission Repairs','suspension-and-exhaust':'Suspension & Exhaust Repairs'};
  document.querySelectorAll('select[name="requestedService"]').forEach(select => {
    const desired = detail ? (serviceDefaults[page] || '') : '';
    select.querySelectorAll('option').forEach(option => option.removeAttribute('selected'));
    if (desired) [...select.options].find(option => option.textContent.trim() === desired)?.setAttribute('selected', 'selected');
    select.value = desired;
  });
  const makesSection = [...document.querySelectorAll('main section')].find(section => /MAKES WE SERVICE/i.test(section.textContent));
  if (makesSection) { const chips = makesSection.querySelector('.flex'); if (chips) chips.innerHTML = allowedMakes.map(make => `<span class="bg-paper-2 rounded-full px-5 py-3 font-poppins">${make}</span>`).join('') + '<span class="make-more-note border border-navy/15 rounded-full px-5 py-3 font-mono text-sm">More makes welcome</span>'; }
  const makeLookup = document.querySelector('[data-make-lookup]');
  if (makeLookup) makeLookup.innerHTML = `<option value="">Choose a make</option>${allowedMakes.map(make => `<option value="${make.toLowerCase().replace(/[^a-z]+/g,'-')}">${make}</option>`).join('')}`;
  if (makeLookup) { const note = makeLookup.parentElement && makeLookup.parentElement.querySelector('.make-more-note'); if (!note) makeLookup.insertAdjacentHTML('afterend', '<p class="make-more-note text-steel text-sm mt-3">More makes welcome.</p>'); }

  const faviconPath = /\/services\//i.test(window.location.pathname) ? '../assets/images/logo.png' : 'assets/images/logo.png';
  if (!document.querySelector('link[rel="icon"]')) { const icon = document.createElement('link'); icon.rel = 'icon'; icon.type = 'image/png'; icon.href = faviconPath; document.head.appendChild(icon); }
  if (!document.querySelector('link[rel="apple-touch-icon"]')) { const appleIcon = document.createElement('link'); appleIcon.rel = 'apple-touch-icon'; appleIcon.href = faviconPath; document.head.appendChild(appleIcon); }

  if (page === 'finance') {
    document.title = 'Auto Repair Financing in Plantation, FL | US Autos & Tires';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about flexible auto repair financing options and request service from US Autos & Tires in Plantation, Florida.');
    const financeSection = [...document.querySelectorAll('main section')].find(section => /American First Finance/i.test(section.textContent));
    if (financeSection) {
      financeSection.id = 'finance-providers';
      financeSection.innerHTML = `<div class="max-w-7xl mx-auto px-6"><div class="eyebrow">FINANCING OPTIONS</div><h2 class="font-poppins text-4xl md:text-5xl mt-5">Choose the option that fits your repair plan.</h2><p class="text-steel text-lg leading-8 mt-6 max-w-3xl">The reference financing options include Koalafi, American First Finance, and Snap Finance. Each provider makes its own application, approval, payment, and agreement decisions.</p><div class="grid md:grid-cols-3 gap-5 mt-10"><article class="tool-card finance-provider-card"><div class="font-mono text-red text-xs">OPTION 01 / PAY OVER TIME</div><h3 class="font-poppins text-2xl mt-4">Koalafi</h3><p class="text-steel leading-7 mt-3">Flexible payment plans for large or unexpected vehicle expenses, subject to the provider’s application and terms.</p><a class="inline-flex bg-red text-white rounded-full px-5 py-3 font-semibold mt-6" href="https://koalafi.com/" target="_blank" rel="noopener">Learn about Koalafi ↗</a></article><article class="tool-card finance-provider-card"><div class="font-mono text-red text-xs">OPTION 02 / PAYMENT PLANS</div><h3 class="font-poppins text-2xl mt-4">American First Finance</h3><p class="text-steel leading-7 mt-3">Application-based payment options that may help manage a large or sudden repair expense.</p><a class="inline-flex bg-red text-white rounded-full px-5 py-3 font-semibold mt-6" href="https://americanfirstfinance.com/app/selectApp" target="_blank" rel="noopener">Apply or learn more ↗</a></article><article class="tool-card finance-provider-card"><div class="font-mono text-red text-xs">OPTION 03 / FLEXIBLE PAYMENTS</div><h3 class="font-poppins text-2xl mt-4">Snap Finance</h3><p class="text-steel leading-7 mt-3">Flexible payment options for qualifying applicants who need help covering a sudden repair expense.</p><a class="inline-flex bg-red text-white rounded-full px-5 py-3 font-semibold mt-6" href="https://snapfinance.com/" target="_blank" rel="noopener">Learn about Snap Finance ↗</a></article></div><div class="bg-paper-2 rounded-2xl p-7 mt-10"><div class="font-mono text-red text-xs">READ BEFORE APPLYING</div><p class="text-steel leading-7 mt-4">Approval is not guaranteed. Down payment, rates, fees, payment amounts, credit checks, and agreement terms vary by provider and applicant. Review the complete agreement before accepting. Financing does not confirm an appointment; the shop must separately confirm your requested service time.</p></div></div>`;
    }
    const financeCta = [...document.querySelectorAll('main a')].find(link => /Explore financing/i.test(link.textContent));
    if (financeCta) { financeCta.href = '#finance-providers'; financeCta.textContent = 'View financing options ↓'; }
  }
  const serviceImages = {
    'wheel-alignments':'wheel-alignment-hero.png',
    'tire-rotations':'tire-rotation-hero.png',
    'battery-testing':'battery-testing-hero.png',
    'fluid-services':'fluid-services-hero.png',
    'suspension-and-exhaust':'suspension-exhaust-hero.png'
  };
  const serviceKey = page;
  if (detail && serviceImages[serviceKey]) {
    document.querySelectorAll('.service-hero-media img').forEach(img => { img.src = `${base}assets/images/${serviceImages[serviceKey]}`; });
  }
  root.classList.add('site-content-normalized');
  document.querySelector('main')?.classList.toggle('finance-page', page === 'finance');
  const mobileContainment = document.createElement('style');
  mobileContainment.textContent = '@media (max-width:767px){main section .max-w-7xl{width:calc(100vw - 48px)!important;max-width:calc(100vw - 48px)!important}.hero-grid h1{display:block!important;width:100%!important;max-width:100%!important;font-size:clamp(2.25rem,11.8vw,3rem)!important;line-height:.98!important;white-space:normal!important;overflow-wrap:anywhere!important}.finance-page .hero-grid h1{font-size:2rem!important;letter-spacing:-.04em!important}.hero-grid h1~p{font-size:1rem!important;line-height:1.65!important;max-width:100%!important;overflow-wrap:anywhere!important}.hero-grid .work-order{width:100%!important;max-width:100%!important;margin-left:0!important;margin-right:0!important;overflow:hidden!important}.hero-grid>div{min-width:0!important;width:100%!important}}';
  document.head.append(mobileContainment);
});

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionTargets = new Set();
  const variants = ['motion-rise', 'motion-slide-left', 'motion-slide-right', 'motion-scale', 'motion-soft-focus'];

  const registerMotion = (element, variant = 'motion-rise', delay = 0) => {
    if (!element || element.classList.contains('reveal') || element.classList.contains('motion-item')) return;
    element.classList.add('motion-item', variant);
    element.style.setProperty('--motion-delay', `${Math.min(delay, 360)}ms`);
    motionTargets.add(element);
  };

  document.querySelectorAll('.site-header .header-utility, .site-header .nav-shell').forEach((element, index) => {
    element.classList.add('motion-header-part');
    element.style.setProperty('--motion-delay', `${index * 90}ms`);
  });

  const hero = document.querySelector('main > section:first-child');
  if (hero) {
    const heroCopy = hero.querySelector(':scope > div > div:first-child');
    [...(heroCopy?.children || [])].forEach((element, index) => registerMotion(element, 'motion-rise', index * 75));
    registerMotion(hero.querySelector('.work-order, .service-hero-media, .finance-hero-card'), 'motion-slide-right', 170);
  }

  document.querySelectorAll('main > section').forEach((section, sectionIndex) => {
    if (section === hero) return;
    const variant = variants[sectionIndex % variants.length];
    const eyebrow = section.querySelector('.eyebrow');
    const heading = section.querySelector('h2');
    const intro = heading?.nextElementSibling?.matches('p') ? heading.nextElementSibling : null;
    registerMotion(eyebrow, variant, 0);
    registerMotion(heading, variant, 70);
    registerMotion(intro, 'motion-rise', 130);
  });

  const staggerGroups = [
    '.home-services .service-card',
    '.action-card-grid .action-card',
    '.finance-provider-card',
    '.home-process .grid > div',
    '.trust-statements .max-w-7xl > div',
    '.detail-list li',
    '.process-list li',
    '.service-faq .faq-item',
    '.site-faq-list .faq-item',
    '[data-gallery-card]',
    '.footer-grid > *'
  ];
  staggerGroups.forEach((selector, groupIndex) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const variant = groupIndex % 3 === 0 ? 'motion-rise' : groupIndex % 3 === 1 ? 'motion-scale' : 'motion-slide-left';
      registerMotion(element, variant, (index % 6) * 65);
    });
  });

  document.querySelectorAll('main img:not(.logo-img)').forEach((image, index) => {
    registerMotion(image, 'motion-image-wipe', (index % 3) * 70);
  });
  document.querySelectorAll('.clarity-panel, .work-order-explainer .bg-navy, .appointment-form, .console-visual').forEach((panel, index) => {
    registerMotion(panel, index % 2 ? 'motion-slide-right' : 'motion-scale', 100);
  });

  document.documentElement.classList.add('motion-enabled');
  requestAnimationFrame(() => document.documentElement.classList.add('motion-page-ready'));

  if (reducedMotion || !('IntersectionObserver' in window)) {
    motionTargets.forEach(element => element.classList.add('motion-visible'));
    return;
  }

  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-visible');
      motionObserver.unobserve(entry.target);
    });
  }, {
    threshold: .1,
    rootMargin: '0px 0px -7% 0px'
  });

  motionTargets.forEach(element => motionObserver.observe(element));
});
