const coupons = [
  { name: '30 Cat Food', price: 'Rp5.000', tag: '' },
  { name: '100 Cat Food', price: 'Rp15.000', tag: 'Promo' },
  { name: '300 Cat Food', price: 'Rp40.000', tag: 'Best Deal' },
  { name: 'Special Pack', price: 'Rp75.000', tag: '' }
];

const list = document.querySelector('.coupon-list');

coupons.forEach(coupon => {
  const div = document.createElement('div');
  div.className = 'coupon';

  let badgeHTML = '';
  if (coupon.tag) {
    badgeHTML = `<span class="badge">${coupon.tag}</span>`;
  }

  div.innerHTML = `
    ${badgeHTML}
    <h3>${coupon.name}</h3>
    <p>Harga: ${coupon.price}</p>
    <button class="toggle-btn">Lihat Detail</button>
    <p class="extra-info" style="display:none; font-size: 0.9rem; margin-top: 0.5rem;">Kode kupon dikirim via WhatsApp dalam 1–5 menit.</p>
  `;

  list.appendChild(div);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('toggle-btn')) {
    const info = e.target.nextElementSibling;
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
  }
});
