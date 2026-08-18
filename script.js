/* UnitConverter.com – v1
   Created by Yusuf Jamshed
   All conversions are client-side using precise factors relative to SI base units.
*/

const CATEGORIES = {
  length: {
    name: "Length",
    icon: "📏",
    base: "m",
    units: {
      mm: { name: "Millimeter (mm)", toBase: 0.001 },
      cm: { name: "Centimeter (cm)", toBase: 0.01 },
      m: { name: "Meter (m)", toBase: 1 },
      km: { name: "Kilometer (km)", toBase: 1000 },
      in: { name: "Inch (in)", toBase: 0.0254 },
      ft: { name: "Foot (ft)", toBase: 0.3048 },
      yd: { name: "Yard (yd)", toBase: 0.9144 },
      mi: { name: "Mile (mi)", toBase: 1609.344 }
    },
    examples: [
      { from: 1, fromU: "m", toU: "ft" },
      { from: 1, fromU: "in", toU: "cm" },
      { from: 5, fromU: "km", toU: "mi" },
      { from: 100, fromU: "cm", toU: "m" }
    ]
  },
  weight: {
    name: "Weight / Mass",
    icon: "⚖️",
    base: "kg",
    units: {
      mg: { name: "Milligram (mg)", toBase: 0.000001 },
      g: { name: "Gram (g)", toBase: 0.001 },
      kg: { name: "Kilogram (kg)", toBase: 1 },
      t: { name: "Tonne (t)", toBase: 1000 },
      oz: { name: "Ounce (oz)", toBase: 0.028349523125 },
      lb: { name: "Pound (lb)", toBase: 0.45359237 },
      st: { name: "Stone (st)", toBase: 6.35029318 }
    },
    examples: [
      { from: 1, fromU: "kg", toU: "lb" },
      { from: 100, fromU: "g", toU: "oz" },
      { from: 1, fromU: "lb", toU: "kg" },
      { from: 10, fromU: "st", toU: "kg" }
    ]
  },
  temperature: {
    name: "Temperature",
    icon: "🌡️",
    special: true,
    units: {
      C: { name: "Celsius (°C)" },
      F: { name: "Fahrenheit (°F)" },
      K: { name: "Kelvin (K)" }
    },
    examples: [
      { from: 0, fromU: "C", toU: "F" },
      { from: 100, fromU: "C", toU: "F" },
      { from: 32, fromU: "F", toU: "C" },
      { from: 273.15, fromU: "K", toU: "C" }
    ]
  },
  area: {
    name: "Area",
    icon: "📐",
    base: "m2",
    units: {
      m2: { name: "Square Meter (m²)", toBase: 1 },
      km2: { name: "Square Kilometer (km²)", toBase: 1e6 },
      ft2: { name: "Square Foot (ft²)", toBase: 0.09290304 },
      yd2: { name: "Square Yard (yd²)", toBase: 0.83612736 },
      acre: { name: "Acre", toBase: 4046.8564224 },
      ha: { name: "Hectare (ha)", toBase: 10000 }
    },
    examples: [
      { from: 1, fromU: "acre", toU: "m2" },
      { from: 1, fromU: "ha", toU: "acre" },
      { from: 100, fromU: "m2", toU: "ft2" },
      { from: 1, fromU: "km2", toU: "ha" }
    ]
  },
  volume: {
    name: "Volume",
    icon: "🧪",
    base: "L",
    units: {
      mL: { name: "Milliliter (mL)", toBase: 0.001 },
      L: { name: "Liter (L)", toBase: 1 },
      gal: { name: "US Gallon (gal)", toBase: 3.785411784 },
      qt: { name: "US Quart (qt)", toBase: 0.946352946 },
      pt: { name: "US Pint (pt)", toBase: 0.473176473 },
      cup: { name: "US Cup", toBase: 0.2365882365 },
      m3: { name: "Cubic Meter (m³)", toBase: 1000 },
      ft3: { name: "Cubic Foot (ft³)", toBase: 28.316846592 }
    },
    examples: [
      { from: 1, fromU: "L", toU: "gal" },
      { from: 1, fromU: "gal", toU: "L" },
      { from: 250, fromU: "mL", toU: "cup" },
      { from: 1, fromU: "m3", toU: "ft3" }
    ]
  },
  time: {
    name: "Time",
    icon: "⏱️",
    base: "s",
    units: {
      ms: { name: "Millisecond (ms)", toBase: 0.001 },
      s: { name: "Second (s)", toBase: 1 },
      min: { name: "Minute (min)", toBase: 60 },
      h: { name: "Hour (h)", toBase: 3600 },
      d: { name: "Day (d)", toBase: 86400 },
      wk: { name: "Week (wk)", toBase: 604800 },
      mo: { name: "Month (avg)", toBase: 2629746 },
      yr: { name: "Year (avg)", toBase: 31556952 }
    },
    examples: [
      { from: 1, fromU: "h", toU: "min" },
      { from: 1, fromU: "d", toU: "h" },
      { from: 1, fromU: "wk", toU: "d" },
      { from: 1, fromU: "yr", toU: "d" }
    ]
  },
  speed: {
    name: "Speed",
    icon: "🚀",
    base: "m_s",
    units: {
      m_s: { name: "Meter/second (m/s)", toBase: 1 },
      km_h: { name: "Kilometer/hour (km/h)", toBase: 1 / 3.6 },
      mph: { name: "Mile/hour (mph)", toBase: 0.44704 },
      kn: { name: "Knot (kn)", toBase: 0.514444 }
    },
    examples: [
      { from: 100, fromU: "km_h", toU: "mph" },
      { from: 60, fromU: "mph", toU: "km_h" },
      { from: 1, fromU: "m_s", toU: "km_h" },
      { from: 20, fromU: "kn", toU: "km_h" }
    ]
  },
  data: {
    name: "Data",
    icon: "💾",
    base: "B",
    units: {
      bit: { name: "Bit (b)", toBase: 0.125 },
      B: { name: "Byte (B)", toBase: 1 },
      KB: { name: "Kilobyte (KB)", toBase: 1024 },
      MB: { name: "Megabyte (MB)", toBase: 1048576 },
      GB: { name: "Gigabyte (GB)", toBase: 1073741824 },
      TB: { name: "Terabyte (TB)", toBase: 1099511627776 },
      PB: { name: "Petabyte (PB)", toBase: 1125899906842624 }
    },
    examples: [
      { from: 1, fromU: "GB", toU: "MB" },
      { from: 1, fromU: "MB", toU: "KB" },
      { from: 8, fromU: "bit", toU: "B" },
      { from: 1, fromU: "TB", toU: "GB" }
    ]
  },
  energy: {
    name: "Energy",
    icon: "⚡",
    base: "J",
    units: {
      J: { name: "Joule (J)", toBase: 1 },
      kJ: { name: "Kilojoule (kJ)", toBase: 1000 },
      cal: { name: "Calorie (cal)", toBase: 4.184 },
      kcal: { name: "Kilocalorie (kcal)", toBase: 4184 },
      Wh: { name: "Watt-hour (Wh)", toBase: 3600 },
      kWh: { name: "Kilowatt-hour (kWh)", toBase: 3600000 }
    },
    examples: [
      { from: 1, fromU: "kcal", toU: "kJ" },
      { from: 1, fromU: "kWh", toU: "J" },
      { from: 100, fromU: "cal", toU: "J" },
      { from: 1, fromU: "Wh", toU: "kJ" }
    ]
  },
  pressure: {
    name: "Pressure",
    icon: "🎈",
    base: "Pa",
    units: {
      Pa: { name: "Pascal (Pa)", toBase: 1 },
      kPa: { name: "Kilopascal (kPa)", toBase: 1000 },
      bar: { name: "Bar", toBase: 100000 },
      psi: { name: "PSI", toBase: 6894.757293168 },
      atm: { name: "Atmosphere (atm)", toBase: 101325 },
      mmHg: { name: "mmHg (Torr)", toBase: 133.322387415 }
    },
    examples: [
      { from: 1, fromU: "atm", toU: "psi" },
      { from: 1, fromU: "bar", toU: "kPa" },
      { from: 14.7, fromU: "psi", toU: "atm" },
      { from: 760, fromU: "mmHg", toU: "atm" }
    ]
  }
};

const POPULAR = [
  { label: "cm → inch", cat: "length", from: "cm", to: "in", val: 1 },
  { label: "inch → cm", cat: "length", from: "in", to: "cm", val: 1 },
  { label: "kg → lbs", cat: "weight", from: "kg", to: "lb", val: 1 },
  { label: "lbs → kg", cat: "weight", from: "lb", to: "kg", val: 1 },
  { label: "°C → °F", cat: "temperature", from: "C", to: "F", val: 0 },
  { label: "°F → °C", cat: "temperature", from: "F", to: "C", val: 32 },
  { label: "km → miles", cat: "length", from: "km", to: "mi", val: 1 },
  { label: "miles → km", cat: "length", from: "mi", to: "km", val: 1 },
  { label: "m → feet", cat: "length", from: "m", to: "ft", val: 1 },
  { label: "feet → m", cat: "length", from: "ft", to: "m", val: 1 },
  { label: "L → gallon", cat: "volume", from: "L", to: "gal", val: 1 },
  { label: "mph → km/h", cat: "speed", from: "mph", to: "km_h", val: 60 }
];

let currentCategory = "length";

function convertTemp(value, from, to) {
  let celsius;
  if (from === "C") celsius = value;
  else if (from === "F") celsius = (value - 32) * 5 / 9;
  else if (from === "K") celsius = value - 273.15;

  if (to === "C") return celsius;
  if (to === "F") return celsius * 9 / 5 + 32;
  if (to === "K") return celsius + 273.15;
  return value;
}

function convert(value, fromUnit, toUnit, category) {
  if (isNaN(value)) return "";
  const cat = CATEGORIES[category];
  if (cat.special) {
    return convertTemp(value, fromUnit, toUnit);
  }
  const fromFactor = cat.units[fromUnit].toBase;
  const toFactor = cat.units[toUnit].toBase;
  return (value * fromFactor) / toFactor;
}

function formatNumber(n) {
  if (n === "" || isNaN(n)) return "";
  if (Math.abs(n) >= 1e9 || (Math.abs(n) < 1e-6 && n !== 0)) {
    return n.toExponential(6);
  }
  const abs = Math.abs(n);
  let decimals = 6;
  if (abs >= 100) decimals = 4;
  if (abs >= 1000) decimals = 2;
  if (Number.isInteger(n)) return n.toString();
  return parseFloat(n.toFixed(decimals)).toString();
}

function getFormula(fromUnit, toUnit, category) {
  const cat = CATEGORIES[category];
  if (cat.special) {
    if (fromUnit === "C" && toUnit === "F") return "°F = (°C × 9/5) + 32";
    if (fromUnit === "F" && toUnit === "C") return "°C = (°F − 32) × 5/9";
    if (fromUnit === "C" && toUnit === "K") return "K = °C + 273.15";
    if (fromUnit === "K" && toUnit === "C") return "°C = K − 273.15";
    if (fromUnit === "F" && toUnit === "K") return "K = (°F − 32) × 5/9 + 273.15";
    if (fromUnit === "K" && toUnit === "F") return "°F = (K − 273.15) × 9/5 + 32";
    return "Temperature conversion uses standard linear formulas.";
  }
  const factor = cat.units[fromUnit].toBase / cat.units[toUnit].toBase;
  return `1 ${fromUnit} = ${formatNumber(factor)} ${toUnit}  →  multiply by ${formatNumber(factor)}`;
}

const fromValue = document.getElementById("fromValue");
const toValue = document.getElementById("toValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const formulaText = document.getElementById("formulaText");
const examplesList = document.getElementById("examplesList");
const categoryTabs = document.getElementById("categoryTabs");
const categoriesGrid = document.getElementById("categoriesGrid");
const popularGrid = document.getElementById("popularGrid");
const toast = document.getElementById("toast");

function populateUnits(category) {
  const cat = CATEGORIES[category];
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  const keys = Object.keys(cat.units);
  keys.forEach((key) => {
    const opt1 = document.createElement("option");
    opt1.value = key;
    opt1.textContent = cat.units[key].name;
    fromUnit.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = key;
    opt2.textContent = cat.units[key].name;
    toUnit.appendChild(opt2);
  });
  fromUnit.selectedIndex = 0;
  toUnit.selectedIndex = Math.min(1, keys.length - 1);
  if (category === "temperature") {
    fromUnit.value = "C";
    toUnit.value = "F";
  } else if (category === "length") {
    fromUnit.value = "m";
    toUnit.value = "ft";
  } else if (category === "weight") {
    fromUnit.value = "kg";
    toUnit.value = "lb";
  }
}

function updateResult() {
  const val = parseFloat(fromValue.value);
  const result = convert(val, fromUnit.value, toUnit.value, currentCategory);
  toValue.value = formatNumber(result);
  formulaText.textContent = getFormula(fromUnit.value, toUnit.value, currentCategory);
}

function renderExamples() {
  const cat = CATEGORIES[currentCategory];
  examplesList.innerHTML = "";
  cat.examples.forEach(ex => {
    const res = convert(ex.from, ex.fromU, ex.toU, currentCategory);
    const chip = document.createElement("button");
    chip.className = "example-chip";
    chip.textContent = `${ex.from} ${ex.fromU} = ${formatNumber(res)} ${ex.toU}`;
    chip.addEventListener("click", () => {
      fromUnit.value = ex.fromU;
      toUnit.value = ex.toU;
      fromValue.value = ex.from;
      updateResult();
    });
    examplesList.appendChild(chip);
  });
}

function setCategory(catKey) {
  currentCategory = catKey;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === catKey);
  });
  populateUnits(catKey);
  updateResult();
  renderExamples();
  document.getElementById("converter").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initTabs() {
  categoryTabs.innerHTML = "";
  Object.keys(CATEGORIES).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (key === currentCategory ? " active" : "");
    btn.dataset.cat = key;
    btn.textContent = CATEGORIES[key].icon + " " + CATEGORIES[key].name;
    btn.addEventListener("click", () => setCategory(key));
    categoryTabs.appendChild(btn);
  });
}

function initCategoriesGrid() {
  categoriesGrid.innerHTML = "";
  Object.keys(CATEGORIES).forEach(key => {
    const cat = CATEGORIES[key];
    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${Object.keys(cat.units).length} units</p>
    `;
    card.addEventListener("click", () => setCategory(key));
    categoriesGrid.appendChild(card);
  });
}

function initPopular() {
  popularGrid.innerHTML = "";
  POPULAR.forEach(p => {
    const card = document.createElement("a");
    card.className = "pop-card";
    card.href = "#converter";
    card.innerHTML = `
      <span>${p.label}</span>
      <span class="arrow">→</span>
    `;
    card.addEventListener("click", (e) => {
      e.preventDefault();
      setCategory(p.cat);
      fromUnit.value = p.from;
      toUnit.value = p.to;
      fromValue.value = p.val;
      updateResult();
    });
    popularGrid.appendChild(card);
  });
}

fromValue.addEventListener("input", updateResult);
fromUnit.addEventListener("change", updateResult);
toUnit.addEventListener("change", updateResult);

document.getElementById("swapBtn").addEventListener("click", () => {
  const tempUnit = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = tempUnit;
  const currentResult = parseFloat(toValue.value);
  if (!isNaN(currentResult)) {
    fromValue.value = currentResult;
  }
  updateResult();
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = `${fromValue.value} ${fromUnit.value} = ${toValue.value} ${toUnit.value}`;
  navigator.clipboard.writeText(text).then(() => {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  });
});

document.getElementById("clearBtn").addEventListener("click", () => {
  fromValue.value = "";
  toValue.value = "";
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  if (current === "light") {
    html.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    html.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
  }
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("globalSearch").addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const q = document.getElementById("globalSearch").value.toLowerCase().trim();
  if (!q) return;

  for (const p of POPULAR) {
    if (p.label.toLowerCase().includes(q) || q.includes(p.from) || q.includes(p.to)) {
      setCategory(p.cat);
      fromUnit.value = p.from;
      toUnit.value = p.to;
      fromValue.value = p.val;
      updateResult();
      return;
    }
  }

  for (const key of Object.keys(CATEGORIES)) {
    if (CATEGORIES[key].name.toLowerCase().includes(q) || key.includes(q)) {
      setCategory(key);
      return;
    }
  }

  setCategory("length");
}

initTabs();
initCategoriesGrid();
initPopular();
populateUnits(currentCategory);
updateResult();
renderExamples();
