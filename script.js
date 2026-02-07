// --- CONFIGURATION ---
const dailyStaples = [];

// Mess-specific calorie databases
const messCals = {
    "A": {
        "Aloo Pyaaz Paratha": 300, "Medu Vada": 180, "Onion Poha": 250,
        "Misal Pav": 400, "Veg Upma": 220, "Masala Dosa": 350,
        "Tadka Idli": 200, "Curd": 50, "Sambhar+Chutney": 100, "Lemon+Sev+Curd": 120,
        "Farsaan": 150, "Omelette": 150, "Boiled Egg (Whole)": 155, "Boiled Egg (White)": 50,
        "Bread (1pc)": 75, "Butter (1pc)": 100, "Jam (1pc)": 50, "Bournvita": 60,
        "Hot & Cold Milk": 100, "Tea & Coffee": 80, "Cornflakes": 100,
        "Kadi Pakoda": 220, "Beans Fry": 150, "Dal Tadka": 180, "Plain Rice": 200, "Chapati (1pc)": 100,
        "Rasam": 50, "Fryums": 80, "Chana Onion Tomato Salad": 80, "Plain Curd": 50, "Malai Sandwich": 200,
        "Spicy Matar Masala": 200, "Soya Masala Dry": 150, "Dal Makhni": 250, "Jeera Rice": 220,
        "Dhokla": 120, "Punjabi Lassi": 150, "Gulab Jamun": 200,
        "Bread Pakoda": 180, "Moong Usal": 180, "Dum Bhindi": 120, "Dal Kolhapuri": 200,
        "Sweet Corn Pulao": 250, "Sprout Moong Salad": 100, "Rasmalai": 200,
        "Dahi Kachori": 200, "Chhole Amritsari": 220, "Aloo Chikli": 150, "Puri + Chapati (1pc)": 200,
        "Sambar": 80, "Roasted Papad": 50, "Toss Salad": 60, "Fresh Lime Water": 20, "Shrikhand": 150,
        "Dabeli": 200, "Paneer Biryani": 300, "Aloo Capsicum": 120, "Dal Lasooni": 200, "Biryani Rice": 250,
        "Mix Salad": 60, "Veg Raita": 80, "Chicken Biryani": 350,
        "Punjabi Rajma": 240, "Gobhi Dry": 100, "Masoor Dal": 180, "Fried Papad": 80, "Pirni": 150,
        "Plain Maggie": 300, "Pav Bhaji": 400, "Mixed Veg Dry": 150, "Onion Chopped + Lemon": 40,
        "Tomato Soup + Croutons": 120, "Fruit": 80,
        "Mutter Paneer": 280, "Jeera Rice": 220, "Dal Fry": 150, "Sambhar": 80, "Onion Salad": 40,
        "Boondi Raita": 100, "Egg Kolhapuri": 200,
        "Paneer Lazeez/Paneer Bhurji": 280, "Pumpkin Dry": 100, "Chapati + Paratha (1pc)": 150,
        "Chicken Patabi/Egg Bhurji": 200,
        "Malai Kofta": 300, "Black Chana Masala": 200, "Mutter Rice": 250, "Carrot- Beetroot Salad": 80,
        "Buttermilk": 80, "Vada pav": 250,
        "Gobhi Manchurian Gravy": 200, "Baingan Bharta": 120, "Scheewan Rice/ Noodles": 280,
        "Soya Sauce+Spicy Chutney": 100, "Manchow Soup": 120, "Tamaatar Lehsun Chutney": 80,
        "Soya Biryani/Plain Rice": 250, "Kokum Rasam": 60, "Dahi Bhalle": 150, "French Fries": 250,
        "Methi Thepla/Pyaaz Paratha": 280, "Khichdi/Plain Rice": 250, "Kokam Rasam": 60, "Choco Bite": 150,
        "Pindi Chole": 200, "Kulche/Bhature": 300, "Pani Puri": 150, "Aloo Tikki chaat": 200,
        "Veg Hyderabadi Curry": 200, "Aloo Tikki chaat": 200, "Lemon Coriander Soup": 80, "Chutney": 40
    },
    "C": {
        // C Mess will have different calories (to be added later)
        // For now, using same as A Mess
    },
    "D": {
        // D Mess will have different calories (to be added later)
        // For now, using same as A Mess
    }
};

// Fill C and D mess with A mess values as default
Object.keys(messCals["A"]).forEach(item => {
    messCals["C"][item] = messCals["A"][item];
    messCals["D"][item] = messCals["A"][item];
});

const weeklyMenu = {
    "Monday": {
        breakfast: ["Aloo Pyaaz Paratha", "Curd", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Kadi Pakoda", "Beans Fry", "Dal Tadka", "Plain Rice", "Chapati (1pc)", "Rasam", "Fryums", "Chana Onion Tomato Salad", "Plain Curd", "Malai Sandwich"],
        snacks: ["Sabudana Vada", "Tea & Coffee"],
        dinner: ["Mutter Paneer", "Jeera Rice", "Dal Fry", "Plain Rice", "Chapati (1pc)", "Sambhar", "Onion Salad", "Boondi Raita", "Egg Kolhapuri", "Fruit"]
    },
    "Tuesday": {
        breakfast: ["Medu Vada", "Sambhar+Chutney", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Spicy Matar Masala", "Soya Masala Dry", "Dal Makhni", "Jeera Rice", "Chapati (1pc)", "Rasam", "Fryums", "Dhokla", "Plain Curd", "Punjabi Lassi", "Gulab Jamun"],
        snacks: ["Bread Pakoda", "Tea & Coffee"],
        dinner: ["Pav Bhaji", "Mixed Veg Dry", "Dal Fry", "Plain Rice", "Chapati (1pc)", "Rasam", "Onion Chopped + Lemon", "Tomato Soup + Croutons"]
    },
    "Wednesday": {
        breakfast: ["Onion Poha", "Lemon+Sev+Curd", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Moong Usal", "Dum Bhindi", "Dal Kolhapuri", "Sweet Corn Pulao", "Chapati (1pc)", "Rasam", "Fryums", "Sprout Moong Salad", "Plain Curd", "Rasmalai"],
        snacks: ["Dahi Kachori", "Tea & Coffee"],
        dinner: ["Paneer Biryani", "Aloo Capsicum", "Dal Lasooni", "Biryani Rice", "Chapati (1pc)", "Plain Curd", "Mix Salad", "Veg Raita", "Chicken Biryani", "Fruit"]
    },
    "Thursday": {
        breakfast: ["Tadka Idli", "Sambhar+Chutney", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Chhole Amritsari", "Aloo Chikli", "Dal Tadka", "Plain Rice", "Puri + Chapati (1pc)", "Sambar", "Roasted Papad", "Toss Salad", "Plain Curd", "Fresh Lime Water", "Shrikhand"],
        snacks: ["Dabeli", "Tea & Coffee"],
        dinner: ["Veg Hyderabadi Curry", "Aloo Tikki chaat", "Dal Kolhapuri", "Plain Rice", "Chapati (1pc)", "Sambar", "Sirka Onion", "Lemon Coriander Soup", "Plain Rice", "Fruit"]
    },
    "Friday": {
        breakfast: ["Misal Pav", "Farsaan", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Punjabi Rajma", "Gobhi Dry", "Masoor Dal", "Jeera Rice", "Chapati (1pc)", "Sambar", "Fried Papad", "Toss Salad", "Plain Curd", "Pirni"],
        snacks: ["Plain Maggie", "Tea & Coffee"],
        dinner: ["Paneer Lazeez/Paneer Bhurji", "Pumpkin Dry", "Dal Tadka", "Chapati + Paratha (1pc)", "Sambar", "Boondi Raita", "Chicken Patabi/Egg Bhurji", "Fruit"]
    },
    "Saturday": {
        breakfast: ["Veg Upma", "Chutney", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Malai Kofta", "Black Chana Masala", "Dal Lasooni", "Mutter Rice", "Chapati (1pc)", "Sambar", "Roasted Papad", "Carrot- Beetroot Salad", "Buttermilk"],
        snacks: ["Vada pav", "Tea & Coffee"],
        dinner: ["Gobhi Manchurian Gravy", "Baingan Bharta", "Dal Fry", "Scheewan Rice/ Noodles", "Chapati (1pc)", "Soya Sauce+Spicy Chutney", "Manchow Soup", "Plain Rice"]
    },
    "Sunday": {
        breakfast: ["Masala Dosa", "Sambhar+Chutney", "Omelette", "Boiled Egg (Whole)", "Boiled Egg (White)", "Bread (1pc)", "Butter (1pc)", "Jam (1pc)", "Bournvita", "Hot & Cold Milk", "Tea & Coffee", "Cornflakes"],
        lunch: ["Methi Thepla/Pyaaz Paratha", "Tamaatar Lehsun Chutney", "Dal Fry", "Soya Biryani/Plain Rice", "Chapati (1pc)", "Kokum Rasam", "Fried Papad", "Dahi Bhalle"],
        snacks: ["French Fries", "Tea & Coffee"],
        dinner: ["Pindi Chole", "Kulche/Bhature", "Pani Puri", "Khichdi/Plain Rice", "Chapati (1pc)", "Kokam Rasam", "Onion Salad", "Choco Bite"]
    }
};

const DEFAULT_CAL = 150;

// Return user-friendly unit for certain items (e.g., chutney uses tablespoon)
function getUnitForItem(name) {
    if (!name) return '';
    const n = name.toLowerCase();
    if (n.includes('chutney')) return 'tbsp';
    return '';
}

// --- ROTATING HEALTH QUOTES ---
const quotes = [
    "Drink at least 4 liters of water every day to stay hydrated.",
    "Include a bowl of salad daily for fibre and vitamins.",
    "Aim for 7-8 hours of sleep to support recovery and metabolism.",
    "Choose whole grains over refined grains for sustained energy.",
    "Prefer half-plate vegetables with each meal for better nutrition.",
    "Limit sugary snacks; choose fresh fruit as dessert sometimes.",
    "Include a source of protein in every meal to help satiety.",
    "Take short walks after meals to aid digestion and blood sugar.",
    "Practice portion control: one plate of rice ≈ 150g cooked.",
    "Reduce deep-fried foods and opt for grilled or steamed options.",
    "Half-bowl servings are great for snacks or lighter meals.",
    "Stay mindful while eating — slow down and chew properly.",
    "Add a bowl of soup or salad at lunch to increase fullness.",
    "Snack on nuts in small portions for healthy fats and proteins."
];

const QUOTE_INTERVAL_MS = 20 * 60 * 1000; // 20 minutes


// --- STATE MANAGEMENT ---
let viewMode = 1; // 0 = Yesterday, 1 = Today, 2 = Tomorrow
let currentMess = "A"; // Current user's mess
let userEmail = ""; // Current user's email
let plans = {
    yesterday: {},
    today: {},
    tomorrow: {}
};;

// --- WEEKLY CALORIE TRACKING ---
function getWeeklyCalories() {
    const weeklyData = {};
    let totalWeekly = 0;
    
    // Calculate calories for each day of the week
    for (let offset = -6; offset <= 6; offset++) {
        const dayName = getDayName(offset);
        const menuData = getMenuForDay(dayName);
        const currentPlan = plans[String(offset)];
        
        let dayTotal = 0;
        Object.values(menuData).forEach(arr => arr.forEach(i => {
            let name = typeof i === 'string' ? i : i.name;
            let cal = typeof i === 'object' ? i.cal : (messCals[currentMess][name] || DEFAULT_CAL);
            let id = name.replace(/[^a-zA-Z0-9]/g, '');
            
            if (currentPlan[id]) {
                dayTotal += currentPlan[id] * cal;
            }
        }));
        
        weeklyData[offset] = dayTotal;
        totalWeekly += dayTotal;
    }
    
    return { days: weeklyData, total: totalWeekly, average: Math.round(totalWeekly / 13) };
}

function updateWeeklySummary() {
    const weeklyData = getWeeklyCalories();
    
    // Update each day card
    for (let offset = -6; offset <= 6; offset++) {
        let cardId = `day-card-${offset}`;
        if (offset > 0) cardId = `day-card-${offset}-future`;
        
        const card = document.getElementById(cardId);
        if (card) {
            const calDisplay = card.querySelector('.day-cal');
            if (calDisplay) {
                calDisplay.innerText = weeklyData.days[offset];
            }
            
            // Update active state
            card.classList.toggle('active', offset === viewMode);
        }
    }
    
    // Update weekly totals
    document.getElementById('weekly-total').innerText = weeklyData.total;
    document.getElementById('weekly-avg').innerText = weeklyData.average;
}


function init() {
    // Check if user is already logged in
    const savedMess = localStorage.getItem('userMess');
    const savedEmail = localStorage.getItem('userEmail');
    const lastLoginDate = localStorage.getItem('lastLoginDate');
    
    // Check if it's the 1st of the month - force re-login
    const today = new Date();
    const currentDate = today.getDate();
    
    if (currentDate === 1 && lastLoginDate) {
        // First of the month - require re-login
        localStorage.removeItem('userMess');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('lastLoginDate');
        showLogin();
        return;
    }
    
    if (savedMess && savedEmail) {
        // Auto-login
        currentMess = savedMess;
        userEmail = savedEmail;
        showApp();
    } else {
        // Show login page
        showLogin();
    }

    // Theme initialization: default to light if not set
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

// --- THEME FUNCTIONS ---
const THEME_TRANSITION_MS = 360;
function applyTheme(name) {
    const body = document.body;
    if (!body) return;
    
    if (name === 'dark') {
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        const tbtn = document.getElementById('theme-toggle');
        if (tbtn) tbtn.innerText = '☀️';
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        const tbtn = document.getElementById('theme-toggle');
        if (tbtn) tbtn.innerText = '🌙';
    }
    // Also update settings button if modal is open
    const settingsThemeBtn = document.getElementById('settings-theme-toggle');
    if (settingsThemeBtn) {
        settingsThemeBtn.innerText = name === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', name);
}

function toggleTheme() {
    const current = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
}

// --- LOGIN FUNCTIONS ---
function showLogin() {
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('app-container').classList.add('hidden');
}

function showApp() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('mess-badge').innerText = currentMess + ' Mess';
    
    // Load saved plans for this user
    loadPlans();
    
    renderMenu();
    checkTime();
    setInterval(checkTime, 60000);
    // Start rotating health quotes
    startQuoteRotation();
}

function handleLogin(event) {
    event.preventDefault();
    console.log('handleLogin called');
    
    const emailInput = document.getElementById('email');
    const messSelect = document.getElementById('mess-select');
    
    const email = emailInput.value.trim().toLowerCase();
    const mess = messSelect.value;
    
    console.log('Email entered:', email);
    console.log('Mess selected:', mess);
    
    // Step 1: Check if email is not empty
    if (!email || email.length === 0) {
        alert('❌ Please enter your email address');
        emailInput.focus();
        return;
    }
    
    // Step 2: Check if email has @
    if (!email.includes('@')) {
        alert('❌ Email must contain @ symbol\nExample: john.doe@goa.bits-pilani.ac.in');
        emailInput.focus();
        return;
    }
    
    // Step 3: Check for BITS Goa domain
    const isValidDomain = email.includes('@goa.bits-pilani.ac.in');
    if (!isValidDomain) {
        const domain = email.split('@')[1] || 'unknown';
        alert('❌ Invalid email domain!\n\n✓ Your email: ' + email + '\n✗ Domain: @' + domain + '\n\n✓ Required domain: @goa.bits-pilani.ac.in\n\nExample: john.doe@goa.bits-pilani.ac.in');
        emailInput.focus();
        return;
    }
    
    // Step 4: Check mess selection
    if (!mess || mess.length === 0) {
        alert('❌ Please select your mess (A, C, or D)');
        messSelect.focus();
        return;
    }
    
    console.log('✓ All validations passed. Logging in...');
    
    // All checks passed - save and login
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userMess', mess);
    localStorage.setItem('lastLoginDate', new Date().toDateString());
    
    userEmail = email;
    currentMess = mess;
    
    console.log('✓ Login successful! Email:', userEmail, 'Mess:', currentMess);
    
    showApp();
}

function handleLogout() {
    // Save plans before logout (optional - user choice)
    savePlans();
    
    // Clear only session info, NOT the saved meal data
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userMess');
    localStorage.removeItem('lastLoginDate');
    
    // Clear state
    userEmail = '';
    currentMess = 'A';
    plans = { yesterday: {}, today: {}, tomorrow: {} };
    
    // Clear form
    document.getElementById('email').value = '';
    document.getElementById('mess-select').value = '';
    
    // Show login
    showLogin();
}

// --- CHANGE MESS FUNCTIONS ---
function openChangeMessModal() {
    document.getElementById('change-mess-modal').classList.remove('hidden');
    document.getElementById('new-mess-select').value = currentMess;
}

function closeChangeMessModal() {
    document.getElementById('change-mess-modal').classList.add('hidden');
}

function openQuantityInfoModal() {
    document.getElementById('quantity-info-modal').classList.remove('hidden');
}

function closeQuantityInfoModal() {
    document.getElementById('quantity-info-modal').classList.add('hidden');
}

// --- SETTINGS MODAL FUNCTIONS ---
function openSettingsModal() {
    document.getElementById('settings-modal').classList.remove('hidden');
    // Populate info
    document.getElementById('settings-email').innerText = userEmail || 'Not logged in';
    document.getElementById('settings-mess').innerText = currentMess + ' Mess';
    document.getElementById('settings-mess-select').value = currentMess;
    
    // Update theme toggle icon
    const themeBtn = document.getElementById('settings-theme-toggle');
    if (themeBtn) {
        themeBtn.innerText = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
    }
}

function closeSettingsModal() {
    document.getElementById('settings-modal').classList.add('hidden');
}

function confirmChangeMessFromSettings() {
    const newMess = document.getElementById('settings-mess-select').value;
    
    if (!newMess) {
        alert('Please select a mess');
        return;
    }
    
    if (newMess === currentMess) {
        alert('You are already in ' + currentMess + ' Mess');
        return;
    }
    
    // Save current mess plans before switching
    savePlans();
    
    // Update mess
    currentMess = newMess;
    localStorage.setItem('userMess', newMess);
    document.getElementById('mess-badge').innerText = currentMess + ' Mess';
    
    // Load plans for the new mess (or start fresh if none exist)
    loadPlans();
    
    // Re-render menu
    renderMenu();
    
    // Update settings info
    document.getElementById('settings-mess').innerText = currentMess + ' Mess';
    
    alert('Mess changed to ' + currentMess + ' Mess!');
}

// --- QUOTE ROTATION FUNCTIONS ---
function updateQuoteDisplay() {
    const banner = document.getElementById('quote-banner');
    const textEl = document.getElementById('quote-text');
    if (!banner || !textEl) return;

    let index = parseInt(localStorage.getItem('quoteIndex') || '0', 10);
    const lastTime = parseInt(localStorage.getItem('lastQuoteTime') || '0', 10);
    const now = Date.now();

    // If more than interval passed, advance index
    if (!lastTime || now - lastTime >= QUOTE_INTERVAL_MS) {
        index = (index + 1) % quotes.length;
        localStorage.setItem('quoteIndex', index);
        localStorage.setItem('lastQuoteTime', now);
        // reset dismissed so new quote appears
    }

    textEl.innerText = quotes[index] || '';

    // Always show the banner (dismiss button removed)
    banner.classList.remove('hidden');
}

function startQuoteRotation() {
    // initialize index/time if missing
    if (!localStorage.getItem('quoteIndex')) localStorage.setItem('quoteIndex', '0');
    if (!localStorage.getItem('lastQuoteTime')) localStorage.setItem('lastQuoteTime', Date.now());
    updateQuoteDisplay();
    if (window.__quoteInterval) clearInterval(window.__quoteInterval);
    window.__quoteInterval = setInterval(() => {
        // advance and show new quote
        let i = parseInt(localStorage.getItem('quoteIndex') || '0', 10);
        i = (i + 1) % quotes.length;
        localStorage.setItem('quoteIndex', i);
        localStorage.setItem('lastQuoteTime', Date.now());
        localStorage.removeItem('quoteDismissed');
        updateQuoteDisplay();
    }, QUOTE_INTERVAL_MS);
}

function dismissQuote() {
    // removed
}

function confirmChangeMess() {
    const newMess = document.getElementById('new-mess-select').value;
    
    if (!newMess) {
        alert('Please select a mess');
        return;
    }
    
    if (newMess === currentMess) {
        alert('You are already in ' + currentMess + ' Mess');
        closeChangeMessModal();
        return;
    }
    
    // Save current mess plans before switching
    savePlans();
    
    // Update mess
    currentMess = newMess;
    localStorage.setItem('userMess', newMess);
    document.getElementById('mess-badge').innerText = currentMess + ' Mess';
    
    // Load plans for the new mess (or start fresh if none exist)
    loadPlans();
    
    // Re-render menu
    renderMenu();
    closeChangeMessModal();
    
    alert('Mess changed to ' + currentMess + ' Mess!');
}

// --- SAVE/LOAD PLANS ---
function savePlans() {
    // Save plans with user-specific key (email + mess)
    const planKey = `plans_${userEmail}_${currentMess}`;
    localStorage.setItem(planKey, JSON.stringify(plans));
}

function loadPlans() {
    // Load plans with user-specific key (email + mess)
    const planKey = `plans_${userEmail}_${currentMess}`;
    const savedPlans = localStorage.getItem(planKey);
    
    if (savedPlans) {
        try {
            plans = JSON.parse(savedPlans);
        } catch (e) {
            // If parsing fails, use empty plans
            plans = { yesterday: {}, today: {}, tomorrow: {} };
        }
    } else {
        // No saved plans, start fresh
        plans = { yesterday: {}, today: {}, tomorrow: {} };
    }
}

function switchDay(mode) {
    viewMode = mode;
    
    // Toggle Button Styles
    document.getElementById('btn-yesterday').classList.toggle('active', mode === 0);
    document.getElementById('btn-today').classList.toggle('active', mode === 1);
    document.getElementById('btn-tmrw').classList.toggle('active', mode === 2);
    
    renderMenu();
}

function getDayName(offset) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return days[d.getDay()];
}

function getMenuForDay(dayName) {
    const specials = weeklyMenu[dayName] || weeklyMenu["Monday"];
    return {
        "Breakfast": specials.breakfast,
        "Lunch": specials.lunch,
        "Snacks": specials.snacks,
        "Dinner": specials.dinner
    };
}

function renderMenu() {
    const dayName = getDayName(viewMode - 1);
    let dateLabel = '';
    if (viewMode === 0) dateLabel = `Yesterday (${dayName})`;
    else if (viewMode === 1) dateLabel = `Today (${dayName})`;
    else dateLabel = `Tomorrow (${dayName})`;
    document.getElementById('menu-date-title').innerText = dateLabel;

    const menuData = getMenuForDay(dayName);
    const container = document.getElementById('menu-container');
    container.innerHTML = "";

    let currentPlan;
    if (viewMode === 0) currentPlan = plans.yesterday;
    else if (viewMode === 1) currentPlan = plans.today;
    else currentPlan = plans.tomorrow;
    
    for (const [section, items] of Object.entries(menuData)) {
        // Section Header
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerText = section;
        container.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        items.forEach(item => {
            const name = typeof item === 'string' ? item : item.name;
            const cal = typeof item === 'object' ? item.cal : (messCals[currentMess][name] || DEFAULT_CAL);
            const id = name.replace(/[^a-zA-Z0-9]/g, '');
            const qty = currentPlan[id] || 0;
            const unit = getUnitForItem(name); // e.g. 'tbsp' for chutney

            const card = document.createElement('div');
            card.className = 'food-card';
            card.innerHTML = `
                <div>
                    <div class="food-name">${name}</div>
                    <div class="food-cal">${cal} kcal${unit ? ' / ' + unit : ''}</div>
                </div>
                <div class="controls">
                    <button class="btn-qty minus" onclick="updateQty('${id}', -0.5, ${cal})">−</button>
                    <span class="quantity" id="qty-${id}" data-unit="${unit || ''}">${formatQty(qty)}${unit ? ' ' + unit : ''}</span>
                    <button class="btn-qty plus" onclick="updateQty('${id}', 0.5, ${cal})">+</button>
                </div>
            `;
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }
    updateTotalDisplay();
}

function updateQty(id, change, cal) {
    let currentPlan;
    if (viewMode === 0) currentPlan = plans.yesterday;
    else if (viewMode === 1) currentPlan = plans.today;
    else currentPlan = plans.tomorrow;
    
    if (typeof currentPlan[id] === 'undefined') currentPlan[id] = 0;
    change = parseFloat(change);
    const newQty = +(currentPlan[id] + change);
    if (newQty < 0) return;

    // Round to 1 decimal to avoid floating point artifacts
    currentPlan[id] = Math.round(newQty * 10) / 10;

    // Update DOM directly
    const qtySpan = document.getElementById(`qty-${id}`);
    if (qtySpan) {
        const unit = qtySpan.dataset.unit || '';
        qtySpan.innerText = formatQty(currentPlan[id]) + (unit ? ' ' + unit : '');
    }
    
    updateTotalDisplay();
    
    // Save plans to localStorage
    savePlans();
    
    // If we are editing 'Today', update the live banner immediately
    if (viewMode === 1) checkTime();
}

function updateTotalDisplay() {
    let currentPlan;
    if (viewMode === 0) currentPlan = plans.yesterday;
    else if (viewMode === 1) currentPlan = plans.today;
    else currentPlan = plans.tomorrow;
    let total = 0;
    
    const dayName = getDayName(viewMode - 1);
    const menuData = getMenuForDay(dayName);
    
    // Flatten menu to find calorie values
    let flatMenu = {};
    Object.values(menuData).forEach(arr => arr.forEach(i => {
        let name = typeof i === 'string' ? i : i.name;
        let cal = typeof i === 'object' ? i.cal : (messCals[currentMess][name] || DEFAULT_CAL);
        let id = name.replace(/[^a-zA-Z0-9]/g, '');
        flatMenu[id] = cal;
    }));

    Object.keys(currentPlan).forEach(id => {
        if(flatMenu[id]) total += (currentPlan[id] * flatMenu[id]);
    });

    document.getElementById('grand-total').innerText = total;
}

function formatQty(n) {
    if (Number.isInteger(n)) return n.toString();
    // show one decimal place for halves
    return n.toFixed(1).replace(/\.0$/, '');
}

// --- TIME AWARENESS ---
function checkTime() {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();

    // Time Slots (in minutes)
    // Bkfast: 7:30 (450) - 9:30 (570)
    // Lunch: 12:00 (720) - 14:15 (855)
    // Snacks: 17:00 (1020) - 18:00 (1080)
    // Dinner: 19:30 (1170) - 21:30 (1290)

    let activeMeal = null;

    if (minutes >= 450 && minutes <= 570) activeMeal = "Breakfast";
    else if (minutes >= 720 && minutes <= 855) activeMeal = "Lunch";
    else if (minutes >= 1020 && minutes <= 1080) activeMeal = "Snacks";
    else if (minutes >= 1170 && minutes <= 1290) activeMeal = "Dinner";

    const banner = document.getElementById('live-banner');
    
    if (activeMeal) {
        banner.classList.remove('hidden');
        document.getElementById('live-meal-name').innerText = `NOW SERVING: ${activeMeal}`;
        
        // Calculate calories planned for this SPECIFIC meal
        const mealTotal = calculateMealTotal(activeMeal);
        document.getElementById('live-calories').innerText = `Planned: ${mealTotal} kcal`;
    } else {
        banner.classList.add('hidden');
    }
}

function calculateMealTotal(mealName) {
    // Only calculates for TODAY
    const dayName = getDayName(0); 
    const menu = getMenuForDay(dayName)[mealName];
    let total = 0;
    
    menu.forEach(item => {
        let name = typeof item === 'string' ? item : item.name;
        let cal = typeof item === 'object' ? item.cal : (messCals[currentMess][name] || DEFAULT_CAL);
        let id = name.replace(/[^a-zA-Z0-9]/g, '');
        
        if (plans.today[id]) {
            total += plans.today[id] * cal;
        }
    });
    return total;
}

init();