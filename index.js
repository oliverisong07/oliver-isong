/* ── CAR DATA ── */
  const cars = [
    {
      id: 1,
      make: 'BMW',
      model: 'M4 Competition',
      year: 2025,
      price: 88500,
      badge: 'new',
      img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=75',
      km: '0',
      transmission: 'Automatic',
      fuel: 'Petrol',
      power: '510 HP',
      engine: '3.0L Twin-Turbo',
      color: 'Sao Paulo Yellow',
      desc: 'The BMW M4 Competition is the pinnacle of sports-car performance blended with everyday usability. Featuring a hand-built S58 twin-turbocharged inline-six, rear-wheel drive, and a razor-sharp M DCT gearbox, it delivers 510 horsepower and an intoxicating driving experience.'
    },
    {
      id: 2,
      make: 'Mercedes-Benz',
      model: 'GLC 63 AMG',
      year: 2026,
      price: 112000,
      badge: 'new',
      img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=75',
      km: '0',
      transmission: 'Automatic',
      fuel: 'Hybrid',
      power: '671 HP',
      engine: '2.0L PHEV',
      color: 'Obsidian Black',
      desc: 'The GLC 63 S E Performance redefines performance SUV. An electrified AMG 2.0-litre with a rear axle electric motor pushes out a staggering 671 hp. Sprint from 0–100 km/h in 3.5 seconds while maintaining the refinement Mercedes-Benz is legendary for.'
    },
    {
      id: 3,
      make: 'Porsche',
      model: '911 Carrera S',
      year: 2025,
      price: 145000,
      badge: 'new',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=75',
      km: '0',
      transmission: 'PDK',
      fuel: 'Petrol',
      power: '450 HP',
      engine: '3.0L Flat-Six',
      color: 'Guards Red',
      desc: 'The 911 Carrera S is the archetype. Sixty years of continuous refinement have produced a sports car that is as quick as it is timeless. The rear-mounted 3.0L flat-six produces 450 hp and connects to Porsche\'s legendary PDK dual-clutch transmission.'
    },
    {
      id: 4,
      make: 'Audi',
      model: 'RS Q8 Performance',
      year: 2024,
      price: 136000,
      badge: 'certified',
      img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=75',
      km: '14,200',
      transmission: 'Tiptronic',
      fuel: 'Petrol',
      power: '640 HP',
      engine: '4.0L V8 Biturbo',
      color: 'Nardo Grey',
      desc: 'The RS Q8 Performance is the fastest Audi SUV ever built. Its twin-turbocharged 4.0L V8 produces 640 hp and 850 Nm of torque. Low mileage certified pre-owned, full service history, and still under factory warranty.'
    },
    {
      id: 5,
      make: 'Tesla',
      model: 'Model S Plaid',
      year: 2024,
      price: 98000,
      badge: 'used',
      img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=75',
      km: '28,600',
      transmission: 'Single-speed',
      fuel: 'Electric',
      power: '1,020 HP',
      engine: '100 kWh Tri-Motor',
      color: 'Midnight Silver',
      desc: 'The quickest production car ever made. 0–100 km/h in 2.1 seconds, 1,020 horsepower, and a range of over 600 km. Full self-driving capability hardware, 17" cinematic display, and premium interior. One meticulous owner, full charge history available.'
    },
    {
      id: 6,
      make: 'Ford',
      model: 'Mustang Dark Horse',
      year: 2026,
      price: 62000,
      badge: 'new',
      img: 'https://images.unsplash.com/photo-1547744152-14d985cb937f?w=600&q=75',
      km: '0',
      transmission: 'Manual',
      fuel: 'Petrol',
      power: '500 HP',
      engine: '5.0L V8 Coyote',
      color: 'Dark Matter Grey',
      desc: 'The all-new Mustang Dark Horse is the most track-capable production Mustang. A 5.0L V8 breathing through a unique intake produces 500 hp. Paired to a rev-matching 6-speed manual, it\'s everything a muscle car should be — amplified.'
    },
  ];

  const badgeLabel = { new: 'New', used: 'Used', certified: 'Certified CPO' };
  const badgeClass = { new: 'badge-new', used: 'badge-used', certified: 'badge-certified' };

  function formatPrice(p) {
    return '$' + p.toLocaleString('en-US');
  }

  function renderCards() {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = cars.map(c => `
      <div class="car-card" onclick="openModal(${c.id})">
        <div class="car-img-wrap">
          <img class="car-img" src="${c.img}" alt="${c.year} ${c.make} ${c.model}" loading="lazy" />
          <span class="car-badge ${badgeClass[c.badge]}">${badgeLabel[c.badge]}</span>
        </div>
        <div class="car-body">
          <div class="car-make">${c.make} · ${c.year}</div>
          <div class="car-name">${c.model}</div>
          <div class="car-specs">
            <div class="car-spec">
              <svg viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
              ${c.km === '0' ? 'Brand New' : c.km + ' km'}
            </div>
            <div class="car-spec">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
              ${c.transmission}
            </div>
            <div class="car-spec">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
              ${c.fuel}
            </div>
          </div>
          <div class="car-footer">
            <div>
              <div class="car-price">${formatPrice(c.price)}</div>
              <div class="car-price-sub">or from $${Math.round(c.price/60).toLocaleString()}/mo</div>
            </div>
            <button class="car-action" onclick="openModal(${c.id}); event.stopPropagation()">View Car</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function openModal(id) {
    const c = cars.find(x => x.id === id);
    if (!c) return;
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-car-title">${c.year} ${c.make} ${c.model}</div>
      <div class="modal-car-price">${formatPrice(c.price)}</div>
      <img class="modal-img" src="${c.img}" alt="${c.make} ${c.model}" />
      <div class="modal-specs-grid">
        <div class="modal-spec"><div class="modal-spec-val">${c.power}</div><div class="modal-spec-key">Power</div></div>
        <div class="modal-spec"><div class="modal-spec-val">${c.engine}</div><div class="modal-spec-key">Engine</div></div>
        <div class="modal-spec"><div class="modal-spec-val">${c.transmission}</div><div class="modal-spec-key">Gearbox</div></div>
        <div class="modal-spec"><div class="modal-spec-val">${c.fuel}</div><div class="modal-spec-key">Fuel Type</div></div>
        <div class="modal-spec"><div class="modal-spec-val">${c.km === '0' ? 'New' : c.km}</div><div class="modal-spec-key">Mileage</div></div>
        <div class="modal-spec"><div class="modal-spec-val">${c.color}</div><div class="modal-spec-key">Colour</div></div>
      </div>
      <p class="modal-desc">${c.desc}</p>
      <div class="modal-actions">
        <a href="#contact" class="btn-primary" onclick="closeModal(null,true)">Book Test Drive</a>
        <a href="#finance" class="btn-outline" onclick="closeModal(null,true)">Get Finance Quote</a>
      </div>
    `;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e, force) {
    if (force || (e && e.target === document.getElementById('modalOverlay'))) {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(null, true); });

  renderCards();

  /* Sticky nav shrink on scroll */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.padding = window.scrollY > 60 ? '0.7rem 4rem' : '1.2rem 4rem';
  });