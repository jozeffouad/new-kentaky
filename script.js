const menu = [
 {category:'شاورما الوزن',items:[
  ['كيلو شاورما فراخ','500','🍗','شاورما فراخ طازجة'],['نصف كيلو شاورما فراخ','260','🍗',''],['ربع كيلو شاورما فراخ','160','🍗',''],
  ['كيلو كرسبي','500','🍗','بطاطس + ثومية + عيش سوري + مخلل'],['نصف كيلو كرسبي','260','🍗','بطاطس + ثومية + عيش سوري + مخلل']
 ]},
 {category:'سندوتشات الشاورما',items:[['شاورما سوري فراخ كبير','60','🌯',''],['شاورما سوري فراخ صاروخ','70','🌯','']]},
 {category:'وجبات الشاورما',items:[['وجبة شاورما عربي','80','🥙',''],['وجبة شاورما عربي إكسترا','90','🥙',''],['فطيرة شاورما','110','🥙','8 قطع ميكس + موزاريلا + بطاطس + ثومية + مخلل'],['وجبة شاورما عربي دبل','130','🥙','2 ساندوتش + بطاطس + ثومية + مخلل'],['فتة شاورما فراخ صغير','80','🍲',''],['فتة شاورما فراخ كبير','115','🍲','']]},
 {category:'وجبات الاستربس',items:[['وجبة 2 استربس','75','🍗','2 قطعة دجاج استربس + بطاطس + ثومية + عيش + كاتشب'],['وجبة 3 استربس','105','🍗','3 قطع دجاج استربس + بطاطس + ثومية + عيش + كاتشب'],['وجبة 5 استربس','160','🍗','5 قطع دجاج استربس + بطاطس + ثومية + عيش + كاتشب'],['وجبة 7 استربس','225','🍗','7 قطع دجاج استربس + بطاطس + ثومية + عيش + كاتشب']]},
 {category:'وجبات البروستد',items:[['وجبتَي','60','🍗','قطعتين دجاج + بطاطس + 2 عيش + 2 كاتشب'],['نيو وجبتي','75','🍗','قطعة فخذ + قطعة صدر + بطاطس + 3 عيش + 3 كاتشب'],['نيو بوكس','95','🍗','2 قطعة دجاج + جناح + بطاطس + 3 عيش + كاتشب'],['سنجل بوكس','110','🍗','3 قطع دجاج + بطاطس + عيش + كاتشب'],['دبل بوكس','140','🍗','4 قطع دجاج + بطاطس + عيش + كاتشب'],['سوبر سنجل','200','🍗','وجبة بروستد كبيرة'],['الأكيل','240','🍗','وجبة بروستد مميزة'],['نيو الأكيل','310','🍗','وجبة بروستد كبيرة'],['سوبر بوكس','370','🍗','وجبة مشاركة'],['فاميلي ميل','520','🍗','وجبة عائلية'],['سوبر فاميلي','790','🍗','وجبة عائلية كبيرة'],['وجبة العائلة','790','🍗','وجبة عائلية'] ]},
 {category:'الركن الكوري',items:[['ساندوتش كرسبي فراخ','75','🥪',''],['وجبة كرسبي فراخ','140','🍗',''],['ساندوتش اسكالوب بانيه فراخ','75','🥪',''],['وجبة اسكالوب بانيه فراخ','140','🍗',''],['ساندوتش فاهيتا فراخ','70','🥪',''],['وجبة فاهيتا فراخ','135','🍗',''],['ساندوتش مكسيكانو','75','🥪',''],['وجبة مكسيكانو','140','🍗','']]},
 {category:'المشويات',items:[['فرخة شيش','365','🍗',''],['نصف فرخة شيش','195','🍗',''],['ربع فرخة شيش','110','🍗','']]},
 {category:'القطع المختارة',items:[['قطعة دجاج صدر','65','🍗',''],['قطعة دجاج فخذ','60','🍗',''],['قطعة دجاج دبوس','45','🍗',''],['قطعة دجاج جناح','45','🍗',''],['قطعة دجاج (كما ورد بالمنيو)','45','🍗',''],['طبق رز عادي أو حار','75','🍚',''],['ساندوتش بطاطس','30','🍟','']]},
 {category:'الإضافات',items:[['أرز بسمتي صغير','30','🍚',''],['أرز بسمتي كبير','40','🍚',''],['أرز مبهر كبير','30','🍚',''],['باكيت بطاطس صغير','15','🍟',''],['باكيت بطاطس كبير','20','🍟',''],['ثومية عادي أو سبايسي','10','🥣',''],['طبق ثومية عادي أو سبايسي','15','🥣',''],['كولسلو','15','🥗',''],['مخلل','7','🥒',''],['صوص باربكيو','7','🥣',''],['موتزاريلا','10','🧀',''],['طبق مخلل','10','🥒','']]},
 {category:'المشروبات',items:[['بيبسي لتر','40','🥤',''],['كانز بيبسي / شويبس','20','🥤',''],['مياه معدنية صغيرة','10','💧',''],['مياه معدنية كبيرة','15','💧','']]}
];

// صور الأطعمة المحلية داخل مجلد المشروع assets/food
const localFoodImages = {
  shawarmaPlate: 'assets/food/shawarma-plate.jpg',
  shawarmaWrap: 'assets/food/shawarma-wrap.jpg',
  shawarmaArabi: 'assets/food/shawarma-arabi.jpg',
  shawarmaPie: 'assets/food/shawarma-pie.jpg',
  shawarmaFattah: 'assets/food/shawarma-fattah.jpg',
  chickenStrips: 'assets/food/chicken-strips.jpg',
  broastedMeal: 'assets/food/broasted-meal.jpg',
  broastedFamily: 'assets/food/broasted-family.jpg',
  crispySandwich: 'assets/food/crispy-sandwich.jpg',
  crispyMeal: 'assets/food/crispy-meal.jpg',
  fajitaSandwich: 'assets/food/fajita-sandwich.jpg',
  grilledChicken: 'assets/food/grilled-chicken.jpg',
  friesSandwich: 'assets/food/fries-sandwich.jpg',
  basmatiRice: 'assets/food/basmati-rice.jpg',
  frenchFries: 'assets/food/french-fries.jpg',
  toumiah: 'assets/food/toumiah.jpg',
  coleslaw: 'assets/food/coleslaw.jpg',
  pickles: 'assets/food/pickles.jpg',
  bbqSauce: 'assets/food/bbq-sauce.jpg',
  pepsiDrink: 'assets/food/pepsi-drink.jpg',
  waterBottle: 'assets/food/water-bottle.jpg'
};

// مطابقة كل صنف بالصورة التي تعبر بدقة عن شكله
function getItemPhoto(item, category) {
  const name = item[0];
  if (name.includes('فتة')) return localFoodImages.shawarmaFattah;
  if (name.includes('فطيرة')) return localFoodImages.shawarmaPie;
  if (name.includes('عربي')) return localFoodImages.shawarmaArabi;
  if (name.includes('سوري فراخ') || name.includes('صاروخ')) return localFoodImages.shawarmaWrap;
  if (category === 'سندوتشات الشاورما') return localFoodImages.shawarmaWrap;
  if (name.includes('شاورما فراخ')) return localFoodImages.shawarmaPlate;

  if (category === 'وجبات الاستربس') return localFoodImages.chickenStrips;
  if (category === 'شاورما الوزن' && name.includes('كرسبي')) return localFoodImages.chickenStrips;

  if (name.includes('فاميلي') || name.includes('العائلة') || name.includes('سوبر بوكس')) return localFoodImages.broastedFamily;
  if (category === 'وجبات البروستد') return localFoodImages.broastedMeal;

  if (name.includes('فاهيتا')) return localFoodImages.fajitaSandwich;
  if (name.includes('مكسيكانو')) return localFoodImages.fajitaSandwich;
  if (name.includes('ساندوتش كرسبي') || name.includes('ساندوتش اسكالوب')) return localFoodImages.crispySandwich;
  if (name.includes('وجبة كرسبي') || name.includes('وجبة اسكالوب')) return localFoodImages.crispyMeal;
  if (category === 'المشويات') return localFoodImages.grilledChicken;

  if (name.includes('ساندوتش بطاطس')) return localFoodImages.friesSandwich;
  if (name.includes('دجاج') || name.includes('صدر') || name.includes('فخذ') || name.includes('دبوس') || name.includes('جناح')) return localFoodImages.broastedMeal;

  if (name.includes('أرز') || name.includes('رز')) return localFoodImages.basmatiRice;
  if (name.includes('بطاطس')) return localFoodImages.frenchFries;
  if (name.includes('ثومية')) return localFoodImages.toumiah;
  if (name.includes('كولسلو')) return localFoodImages.coleslaw;
  if (name.includes('مخلل')) return localFoodImages.pickles;
  if (name.includes('باربكيو')) return localFoodImages.bbqSauce;
  if (name.includes('موتزاريلا')) return localFoodImages.shawarmaPie;

  if (name.includes('مياه')) return localFoodImages.waterBottle;
  if (name.includes('بيبسي') || name.includes('كانز') || name.includes('شويبس')) return localFoodImages.pepsiDrink;

  return localFoodImages.broastedMeal;
}

let active = 'الكل';
const filters = document.getElementById('filters');
const sections = document.getElementById('menuSections');
const search = document.getElementById('searchInput');

const categories = ['الكل', ...menu.map(x => x.category)];
filters.innerHTML = categories.map(c => `<button class="filter-btn ${c === 'الكل' ? 'active' : ''}" data-category="${c}">${c}</button>`).join('');

function render() {
  const q = search.value.trim().toLowerCase();
  const visible = menu.map(group => ({
    ...group,
    items: group.items.filter(item => 
      (active === 'الكل' || active === group.category) && 
      (`${item[0]} ${item[3]}`.toLowerCase().includes(q))
    )
  })).filter(g => g.items.length);

  sections.innerHTML = visible.length ? visible.map(group => `
    <section class="menu-section">
      <div class="section-title">
        <span class="title-mark"></span>
        <h3>${group.category}</h3>
        <small>${group.items.length} أصناف</small>
      </div>
      <div class="items-grid">
        ${group.items.map(item => {
          const img = getItemPhoto(item, group.category);
          return `
            <article class="menu-item">
              <div class="item-thumb">
                ${img ? `<img src="${img}" alt="صورة ${item[0]}" loading="lazy" onerror="this.onerror=null;this.src='${localFoodImages.broastedMeal}'">` : `<span class="item-emoji">${item[2]}</span>`}
              </div>
              <div class="item-info">
                <h4>${item[0]}</h4>
                ${item[3] ? `<p>${item[3]}</p>` : ''}
              </div>
              <div class="price">${item[1]} <small>جنيه</small></div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `).join('') : '<div class="empty-state">مفيش أصناف مطابقة للبحث ده… جرّب كلمة تانية ❤️</div>';
}

filters.addEventListener('click', e => {
  const b = e.target.closest('button[data-category]');
  if (!b) return;
  active = b.dataset.category;
  filters.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
  b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  render();
});

search.addEventListener('input', render);
render();
