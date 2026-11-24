// =========================================================
// FasalSathi — Complete Frontend (Full Multilingual UI + Voice + Daily/Weekend)
// =========================================================

let farmerProfile = {
  name: "Soubhagya",
  district: "Bhubaneswar",
  state: "Odisha",
  acres: 2,
  crop: "Paddy"
};

let currentLanguage = "hi";
let autoVoiceEnabled = true;
let activeZone = "Zone A";
let activeGrowthStage = "Vegetative";
let sessionId = "farmer_" + Math.random().toString(36).substring(2, 9);

const LOCALE_STRINGS = {
  en: {
    brandSub: "Smart Farming, Better Future",
    loginHeading: "Welcome back to FasalSathi 🌱",
    loginSub: "Login to continue to your smart farming dashboard across India.",
    labelFarmerName: "Farmer Name",
    labelDistrict: "District / City",
    labelAcres: "Land (Acres)",
    labelMainCrop: "Main Crop",
    loginContinueBtn: "Login & Continue →",
    noAccountText: "Don't have an account?",
    openLandingBtn: "Open Landing Page",
    howItWorks: "How It Works",
    smartTools: "Smart Tools",
    login: "Login",
    getStarted: "Get Started",
    heroEyebrow: "• AI-POWERED CROP INTELLIGENCE",
    heroTitle: "Your Farm. Your Camera. Smarter Decisions.",
    heroSubtitle:
      "FasalSathi uses computer vision, real-time agro-weather, live APMC mandi data, and multilingual voice AI to track crop growth, detect issues early, and maximize profit across India.",
    openDashboard: "Open Farm Dashboard →",
    scanCrop: "🌱 Scan Crop & Growth",
    trustedFarmers: "Trusted by farmers across India",
    yourFarmLocation: "📍 YOUR FARM LOCATION",
    search: "Search",
    useMyLocation: "◎ Use My Location",
    suniyeBtn: "🔊 Listen",
    suniye: "Listen",
    rokiye: "Stop",
    humidityLabel: "Humidity",
    rainLabel: "Rain",
    windLabel: "Wind",
    waterStress: "Water Stress",
    lowLabel: "Low",
    cropHealthGrowth: "Crop Health & Growth",
    diseaseRisk: "Disease Risk",
    normalLabel: "Normal",
    weatherAdvisory: "Favorable weather for daily growth monitoring and recovery care.",
    howItWorksUpper: "HOW IT WORKS",
    howItWorksHeading: "From field data to smarter decisions.",
    step1Title: "Capture",
    step1Desc: "Upload leaf photo, choose district, or speak with mic in your language.",
    step2Title: "Analyze",
    step2Desc: "AI checks crop issue/recovery alongside daily growth and weather.",
    step3Title: "Understand",
    step3Desc: "View day-by-day progress, weekend result, and live mandi vs MSP.",
    step4Title: "Act",
    step4Desc: "Follow clear recovery/growth steps with voice readout.",
    smartToolsUpper: "SMART FARMING TOOLS",
    smartToolsHeading: "Explore your farm with confidence.",
    tool1Title: "Explore Crops & ROI",
    tool1Desc: "Crop profiles, soil suitability, and profit estimates.",
    tool2Title: "Crop Doctor & Growth",
    tool2Desc: "Shows issue, recovery steps, and growth timeline together.",
    tool3Title: "Daily Growth & Weekend Result",
    tool3Desc: "Day-by-day weather-linked growth/issue log + weekend summary.",
    navDashboard: "🏠 Dashboard & Weekly",
    navZones: "🗺️ Farm Zones & Growth",
    navScan: "🩺 Crop Doctor + Growth",
    navExplore: "🌱 Explore Crops & ROI",
    navMandi: "📊 Mandi vs MSP",
    navChat: "🤖 Krushi Voice AI",
    homePageBtn: "← Home Page",
    switchFarmerBtn: "👤 Switch Farmer",
    askVoiceAiBtn: "🎤 Ask Voice AI",
    kpiHealth: "OVERALL FARM HEALTH",
    kpiWeather: "TODAY'S WEATHER",
    kpiStage: "CROP GROWTH STAGE",
    growthTimelineTitle: "🌱 Crop Growth Stage Timeline",
    dailyLogEyebrow: "DAILY WEATHER-LINKED GROWTH & ISSUE LOG",
    dailyLogHeading: "📅 Day-by-Day Progress, Issue Recovery & Weekend Result",
    weekendSpeakBtn: "🔊 Listen to Weekend Result",
    addNextDayBtn: "+ Add Next Day",
    scanCardTitle: "🩺 AI Crop Doctor & Growth Scanner",
    analyzeBtn: "Analyze Issue & Growth",
    reportCardTitle: "📈 Issue + Crop Growth Report",
    exploreCardTitle: "🌱 Explore Crops & Soil Suitability",
    roiCardTitle: "💰 Smart Crop & ROI Advisor",
    mandiCardTitle: "📊 Live APMC Mandi vs MSP",
    chatCardTitle: "🤖 Krushi Sahayak Voice AI",
    chatSub: "Speak with mic or type — get answers on screen and voice.",
    chatWelcome: "🤖 Namaste! Ask about crop disease, growth, fertilizers, mandi rates, or schemes.",
    sendBtn: "Send",
    phDailyNote: "Enter today's issue/note or press mic...",
    phChatInput: "Type your question or press mic...",
    phDistrictInput: "Enter city or village (e.g. Bhubaneswar, Puri, Pune)...",
    phLoginName: "Enter farmer name",
    phLoginDistrict: "Enter district (e.g. Bhubaneswar, Puri)",
    phLoginCrop: "e.g. Paddy, Wheat",
    statusRecovering: "Recovering",
    statusHealthy: "Healthy Growth",
    statusIssue: "Issue Spotted",
    lblStatus: "Status",
    lblIssueUpdate: "Issue / Update",
    lblImproving: "How it's improving",
    weekendResultTitle: "Weekend Result",
    growthGainLabel: "Growth Gain",
    nowLabel: "Now",
    positiveWeekend: "Positive Weekend Result — The crop issue is under control and growth has improved well.",
    moderateWeekend: "Moderate Weekend Result — Growth and recovery are ongoing; keep monitoring weather and moisture next week.",
    dayPrefix: "Day",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `With weather (${weatherNow}), growth reached ${nextGrowth}% and recovery continues.`,
    defaultIssueResolved: "Issue resolved",
    defaultMildRecovery: "Mild recovery ongoing",
    weatherTempSpeech: (loc, temp, cond) =>
      `Temperature in ${loc} is ${temp} and weather is ${cond}.`,
    loginWelcomeSpeech: (name, district) =>
      `Welcome ${name}. Your ${district} dashboard and daily growth tracker are ready.`,
    speakNowPlaceholder: "🎤 Listening...",
    speakAgainPlaceholder: "Please speak again...",
    voiceNotSupported: "Please use Chrome or Edge browser for microphone speech input.",
    selectImageAlert: "Please select a leaf or crop photo first.",
    analyzingText: "🔬 AI is analyzing both crop issue and growth...",
    scanEmptyText: "Upload a photo and click Analyze Issue & Growth.",
    issueDetectedLabel: "Issue Detected",
    careTreatmentLabel: "Care / Treatment",
    dosageNoteLabel: "Dosage Note",
    cropGrowthStatusLabel: "Crop Growth Status",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} analysis complete. Issue: ${disease}. Treatment: ${treatment}. Crop growth stage is ${stageLabel}, ${days}. ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `Best Crop (${season} • ${soil}): ${baseCrop} • Yield (${acres} ac): ${yieldQ} Quintals • Est. Net Profit: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `In ${acres} acres, ${baseCrop} is estimated to yield about ${yieldQ} quintals and a profit of ${netProfit} rupees.`,
    chatThinking: "🤖 Preparing answer...",
    chatFallback: (district, crop, message) =>
      `Received your question ("${message}") for ${district} and ${crop}. Full AI response will appear once backend Ollama is connected.`,
    mandiHeading: (district) => `Mandi Comparison: ${district}`,
    aboveMsp: "▲ Above MSP",
    belowMsp: "▼ Below MSP",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • Health: ${health} • Growth: ${growth} (${stage}) — ${note}`
  },
  hi: {
    brandSub: "स्मार्ट खेती, बेहतर भविष्य",
    loginHeading: "फसलसाथी में आपका स्वागत है 🌱",
    loginSub: "अपने स्मार्ट फार्मिंग डैशबोर्ड पर जाने के लिए लॉगिन करें।",
    labelFarmerName: "किसान का नाम",
    labelDistrict: "ज़िला / शहर",
    labelAcres: "ज़मीन (एकड़)",
    labelMainCrop: "मुख्य फसल",
    loginContinueBtn: "लॉगिन करें और आगे बढ़ें →",
    noAccountText: "खाता नहीं है?",
    openLandingBtn: "होम पेज खोलें",
    howItWorks: "यह कैसे काम करता है",
    smartTools: "स्मार्ट टूल्स",
    login: "लॉगिन",
    getStarted: "शुरू करें",
    heroEyebrow: "• AI-आधारित फसल इंटेलिजेंस",
    heroTitle: "आपका खेत। आपका कैमरा। बेहतर फैसले।",
    heroSubtitle:
      "फसलसाथी कंप्यूटर विज़न, लाइव मौसम, मंडी भाव और बहुभाषी वॉयस AI से फसल की बढ़त ट्रैक करता है, समस्या जल्दी पहचानता है और मुनाफा बढ़ाता है।",
    openDashboard: "फार्म डैशबोर्ड खोलें →",
    scanCrop: "🌱 फसल और ग्रोथ स्कैन करें",
    trustedFarmers: "पूरे भारत के किसानों का भरोसा",
    yourFarmLocation: "📍 आपके खेत की लोकेशन",
    search: "खोजें",
    useMyLocation: "◎ मेरी लोकेशन लें",
    suniyeBtn: "🔊 सुनिए",
    suniye: "सुनिए",
    rokiye: "रोकें",
    humidityLabel: "नमी",
    rainLabel: "बारिश",
    windLabel: "हवा",
    waterStress: "पानी की कमी",
    lowLabel: "कम",
    cropHealthGrowth: "फसल स्वास्थ्य और बढ़त",
    diseaseRisk: "रोग का जोखिम",
    normalLabel: "सामान्य",
    weatherAdvisory: "दैनिक फसल बढ़त और देखभाल के लिए मौसम अनुकूल है।",
    howItWorksUpper: "यह कैसे काम करता है",
    howItWorksHeading: "खेत के डेटा से बेहतर फैसलों तक।",
    step1Title: "फोटो या आवाज़ दें",
    step1Desc: "पत्ते की फोटो अपलोड करें, ज़िला चुनें या अपनी भाषा में माइक से बोलें।",
    step2Title: "AI विश्लेषण",
    step2Desc: "AI मौसम और बढ़त के साथ फसल की समस्या और सुधार की जांच करता है।",
    step3Title: "समझें",
    step3Desc: "रोज़ की प्रगति, साप्ताहिक रिपोर्ट और मंडी बनाम MSP भाव देखें।",
    step4Title: "कदम उठाएं",
    step4Desc: "आवाज़ में सुने गए आसान उपायों से फसल की देखभाल करें।",
    smartToolsUpper: "स्मार्ट खेती टूल्स",
    smartToolsHeading: "भरोसे के साथ अपने खेत को जानें।",
    tool1Title: "फसल और मुनाफा (ROI)",
    tool1Desc: "फसल की जानकारी, मिट्टी की उपयुक्तता और मुनाफे का अनुमान।",
    tool2Title: "क्रॉप डॉक्टर और ग्रोथ",
    tool2Desc: "रोग, उपचार और फसल की अवस्था एक साथ दिखाता है।",
    tool3Title: "दैनिक ग्रोथ और साप्ताहिक रिपोर्ट",
    tool3Desc: "मौसम से जुड़ा रोज़ का रिकॉर्ड और वीकेंड सारांश।",
    navDashboard: "🏠 डैशबोर्ड और साप्ताहिक",
    navZones: "🗺️ खेत के ज़ोन और ग्रोथ",
    navScan: "🩺 क्रॉप डॉक्टर + ग्रोथ",
    navExplore: "🌱 फसल और ROI",
    navMandi: "📊 मंडी बनाम MSP",
    navChat: "🤖 कृषि वॉयस AI",
    homePageBtn: "← होम पेज",
    switchFarmerBtn: "👤 किसान बदलें",
    askVoiceAiBtn: "🎤 वॉयस AI से पूछें",
    kpiHealth: "कुल खेत स्वास्थ्य",
    kpiWeather: "आज का मौसम",
    kpiStage: "फसल की अवस्था",
    growthTimelineTitle: "🌱 फसल की बढ़त के चरण",
    dailyLogEyebrow: "दैनिक मौसम-आधारित ग्रोथ और समस्या लॉग",
    dailyLogHeading: "📅 रोज़ की प्रगति, सुधार और साप्ताहिक परिणाम",
    weekendSpeakBtn: "🔊 वीकेंड रिपोर्ट सुनें",
    addNextDayBtn: "+ अगला दिन जोड़ें",
    scanCardTitle: "🩺 AI क्रॉप डॉक्टर और ग्रोथ स्कैनर",
    analyzeBtn: "समस्या और ग्रोथ जांचें",
    reportCardTitle: "📈 समस्या + फसल ग्रोथ रिपोर्ट",
    exploreCardTitle: "🌱 फसल और मिट्टी की उपयुक्तता",
    roiCardTitle: "💰 स्मार्ट फसल और मुनाफा सलाहकार",
    mandiCardTitle: "📊 लाइव APMC मंडी बनाम MSP",
    chatCardTitle: "🤖 कृषि सहायक वॉयस AI",
    chatSub: "माइक से बोलें या लिखें — जवाब स्क्रीन और आवाज़ दोनों में मिलेगा।",
    chatWelcome: "🤖 नमस्ते! फसल की बीमारी, बढ़त, खाद, मंडी भाव या योजना के बारे में पूछें।",
    sendBtn: "भेजें",
    phDailyNote: "आज की समस्या या नोट लिखें या माइक दबाएं...",
    phChatInput: "अपना सवाल लिखें या माइक दबाएं...",
    phDistrictInput: "शहर या गाँव लिखें (जैसे भुवनेश्वर, पुरी, पुणे)...",
    phLoginName: "किसान का नाम लिखें",
    phLoginDistrict: "ज़िला लिखें (जैसे भुवनेश्वर, पुरी)",
    phLoginCrop: "जैसे धान, गेहूँ",
    statusRecovering: "सुधार जारी",
    statusHealthy: "स्वस्थ बढ़त",
    statusIssue: "समस्या मिली",
    lblStatus: "स्थिति",
    lblIssueUpdate: "समस्या / अपडेट",
    lblImproving: "सुधार कैसे हो रहा है",
    weekendResultTitle: "वीकेंड परिणाम",
    growthGainLabel: "बढ़त में सुधार",
    nowLabel: "अभी",
    positiveWeekend: "सकारात्मक वीकेंड परिणाम — फसल की समस्या नियंत्रण में है और बढ़त में अच्छा सुधार हुआ है।",
    moderateWeekend: "सामान्य वीकेंड परिणाम — बढ़त और सुधार जारी है; अगले हफ्ते भी मौसम और नमी पर ध्यान रखें।",
    dayPrefix: "दिन",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `मौसम (${weatherNow}) के अनुसार बढ़त ${nextGrowth}% तक पहुँची और सुधार जारी है।`,
    defaultIssueResolved: "समस्या ठीक हो गई",
    defaultMildRecovery: "हल्का सुधार जारी",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} का तापमान ${temp} और मौसम ${cond} है।`,
    loginWelcomeSpeech: (name, district) =>
      `स्वागत है ${name} जी। आपका ${district} डैशबोर्ड और दैनिक ग्रोथ ट्रैकर तैयार है।`,
    speakNowPlaceholder: "🎤 बोलिए...",
    speakAgainPlaceholder: "कृपया दोबारा बोलें...",
    voiceNotSupported: "माइक से बोलने के लिए Chrome या Edge ब्राउज़र का उपयोग करें।",
    selectImageAlert: "कृपया पहले पत्ते या फसल की फोटो चुनें।",
    analyzingText: "🔬 AI फसल की समस्या और बढ़त दोनों का विश्लेषण कर रहा है...",
    scanEmptyText: "फोटो अपलोड करके 'समस्या और ग्रोथ जांचें' दबाएं।",
    issueDetectedLabel: "पहचानी गई समस्या",
    careTreatmentLabel: "देखभाल / उपचार",
    dosageNoteLabel: "मात्रा की जानकारी",
    cropGrowthStatusLabel: "फसल की बढ़त स्थिति",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} की जांच पूरी हुई। समस्या: ${disease}। उपचार: ${treatment}। फसल की अवस्था ${stageLabel}, ${days} है। ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `उत्तम फसल (${season} • ${soil}): ${baseCrop} • उपज (${acres} एकड़): ${yieldQ} क्विंटल • अनुमानित शुद्ध लाभ: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} एकड़ में ${baseCrop} से लगभग ${yieldQ} क्विंटल उपज और ${netProfit} रुपये का लाभ अनुमानित है।`,
    chatThinking: "🤖 जवाब तैयार हो रहा है...",
    chatFallback: (district, crop, message) =>
      `${district} और ${crop} के लिए आपका सवाल ("${message}") मिल गया है। बैकएंड जुड़ते ही पूरा AI उत्तर यहाँ दिखेगा।`,
    mandiHeading: (district) => `मंडी तुलना: ${district}`,
    aboveMsp: "▲ MSP से अधिक",
    belowMsp: "▼ MSP से कम",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • स्वास्थ्य: ${health} • बढ़त: ${growth} (${stage}) — ${note}`
  },
  or: {
    brandSub: "ସ୍ମାର୍ଟ ଚାଷ, ଉତ୍ତମ ଭବିଷ୍ୟତ",
    loginHeading: "ଫସଲସାଥୀକୁ ସ୍ୱାଗତ 🌱",
    loginSub: "ଆପଣଙ୍କ ସ୍ମାର୍ଟ ଫାର୍ମିଂ ଡ୍ୟାଶବୋର୍ଡକୁ ଯିବା ପାଇଁ ଲଗଇନ୍ କରନ୍ତୁ।",
    labelFarmerName: "ଚାଷୀଙ୍କ ନାମ",
    labelDistrict: "ଜିଲ୍ଲା / ସହର",
    labelAcres: "ଜମି (ଏକର)",
    labelMainCrop: "ମୁଖ୍ୟ ଫସଲ",
    loginContinueBtn: "ଲଗଇନ୍ କରନ୍ତୁ ଓ ଆଗକୁ ବଢ଼ନ୍ତୁ →",
    noAccountText: "ଆକାଉଣ୍ଟ ନାହିଁ କି?",
    openLandingBtn: "ହୋମ୍ ପେଜ୍ ଖୋଲନ୍ତୁ",
    howItWorks: "ଏହା କିପରି କାମ କରେ",
    smartTools: "ସ୍ମାର୍ଟ ଟୁଲ୍ସ",
    login: "ଲଗଇନ୍",
    getStarted: "ଆରମ୍ଭ କରନ୍ତୁ",
    heroEyebrow: "• AI-ଆଧାରିତ ଫସଲ ସୂଚନା",
    heroTitle: "ଆପଣଙ୍କ ଚାଷ ଜମି। ଆପଣଙ୍କ କ୍ୟାମେରା। ଉତ୍ତମ ନିଷ୍ପତ୍ତି।",
    heroSubtitle:
      "ଫସଲସାଥୀ କମ୍ପ୍ୟୁଟର ଭିଜନ୍, ପାଣିପାଗ ସୂଚନା, ମଣ୍ଡି ଦର ଏବଂ ବହୁଭାଷୀ ଭଏସ୍ AI ସାହାଯ୍ୟରେ ଫସଲ ବୃଦ୍ଧି ଦେଖେ, ସମସ୍ୟା ଚିହ୍ନଟ କରେ ଏବଂ ଲାଭ ବଢ଼ାଏ।",
    openDashboard: "ଫାର୍ମ ଡ୍ୟାଶବୋର୍ଡ ଖୋଲନ୍ତୁ →",
    scanCrop: "🌱 ଫସଲ ଓ ବୃଦ୍ଧି ସ୍କାନ୍ କରନ୍ତୁ",
    trustedFarmers: "ସାରା ଭାରତର ଚାଷୀଙ୍କ ବିଶ୍ୱାସ",
    yourFarmLocation: "📍 ଆପଣଙ୍କ ଚାଷ ଜମିର ସ୍ଥାନ",
    search: "ଖୋଜନ୍ତୁ",
    useMyLocation: "◎ ମୋ ସ୍ଥାନ ନିଅନ୍ତୁ",
    suniyeBtn: "🔊 ଶୁଣନ୍ତୁ",
    suniye: "ଶୁଣନ୍ତୁ",
    rokiye: "ବନ୍ଦ କରନ୍ତୁ",
    humidityLabel: "ଆର୍ଦ୍ରତା",
    rainLabel: "ବର୍ଷା",
    windLabel: "ପବନ",
    waterStress: "ଜଳ ଅଭାବ",
    lowLabel: "କମ୍",
    cropHealthGrowth: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ଓ ବୃଦ୍ଧି",
    diseaseRisk: "ରୋଗର ଆଶଙ୍କା",
    normalLabel: "ସାଧାରଣ",
    weatherAdvisory: "ଦୈନିକ ଫସଲ ବୃଦ୍ଧି ଓ ଯତ୍ନ ପାଇଁ ପାଣିପାଗ ଅନୁକୂଳ ଅଛି।",
    howItWorksUpper: "ଏହା କିପରି କାମ କରେ",
    howItWorksHeading: "ଜମିର ତଥ୍ୟରୁ ଉତ୍ତମ ନିଷ୍ପତ୍ତି ପର୍ଯ୍ୟନ୍ତ।",
    step1Title: "ଫଟୋ ବା କଥା ଦିଅନ୍ତୁ",
    step1Desc: "ପତ୍ରର ଫଟୋ ଦିଅନ୍ତୁ, ଜିଲ୍ଲା ବାଛନ୍ତୁ କିମ୍ବା ନିଜ ଭାଷାରେ ମାଇକ୍‌ରେ କୁହନ୍ତୁ।",
    step2Title: "AI ବିଶ୍ଳେଷଣ",
    step2Desc: "AI ପାଣିପାଗ ଓ ବୃଦ୍ଧି ସହିତ ଫସଲର ସମସ୍ୟା ଓ ସୁଧାର ଯାଞ୍ଚ କରେ।",
    step3Title: "ବୁଝନ୍ତୁ",
    step3Desc: "ଦୈନିକ ଅଗ୍ରଗତି, ସାପ୍ତାହିକ ଫଳାଫଳ ଏବଂ ମଣ୍ଡି ବନାମ MSP ଦର ଦେଖନ୍ତୁ।",
    step4Title: "ପଦକ୍ଷେପ ନିଅନ୍ତୁ",
    step4Desc: "ଭଏସ୍ ମାଧ୍ୟମରେ ଦିଆଯାଇଥିବା ଉପାୟ ଅନୁସରଣ କରନ୍ତୁ।",
    smartToolsUpper: "ସ୍ମାର୍ଟ ଚାଷ ଉପକରଣ",
    smartToolsHeading: "ବିଶ୍ୱାସର ସହ ଆପଣଙ୍କ ଜମିକୁ ଜାଣନ୍ତୁ।",
    tool1Title: "ଫସଲ ଓ ଲାଭ (ROI)",
    tool1Desc: "ଫସଲ ବିବରଣୀ, ମାଟିର ଉପଯୁକ୍ତତା ଏବଂ ଲାଭର ଆକଳନ।",
    tool2Title: "କ୍ରପ୍ ଡକ୍ଟର ଓ ବୃଦ୍ଧି",
    tool2Desc: "ରୋଗ, ପ୍ରତିକାର ଏବଂ ଫସଲର ଅବସ୍ଥା ଏକାସାଙ୍ଗରେ ଦେଖାଏ।",
    tool3Title: "ଦୈନିକ ବୃଦ୍ଧି ଓ ସାପ୍ତାହିକ ଫଳାଫଳ",
    tool3Desc: "ପାଣିପାଗ ସହ ଜଡ଼ିତ ଦୈନିକ ତଥ୍ୟ ଏବଂ ସାପ୍ତାହିକ ସାରାଂଶ।",
    navDashboard: "🏠 ଡ୍ୟାଶବୋର୍ଡ ଓ ସାପ୍ତାହିକ",
    navZones: "🗺️ ଜମି ଜୋନ୍ ଓ ବୃଦ୍ଧି",
    navScan: "🩺 କ୍ରପ୍ ଡକ୍ଟର + ବୃଦ୍ଧି",
    navExplore: "🌱 ଫସଲ ଓ ROI",
    navMandi: "📊 ମଣ୍ଡି ବନାମ MSP",
    navChat: "🤖 କୃଷି ଭଏସ୍ AI",
    homePageBtn: "← ହୋମ୍ ପେଜ୍",
    switchFarmerBtn: "👤 ଚାଷୀ ବଦଳାନ୍ତୁ",
    askVoiceAiBtn: "🎤 ଭଏସ୍ AI କୁ ପଚାରନ୍ତୁ",
    kpiHealth: "ମୋଟ ଜମି ସ୍ୱାସ୍ଥ୍ୟ",
    kpiWeather: "ଆଜିର ପାଣିପାଗ",
    kpiStage: "ଫସଲର ଅବସ୍ଥା",
    growthTimelineTitle: "🌱 ଫସଲ ବୃଦ୍ଧିର ପର୍ଯ୍ୟାୟ",
    dailyLogEyebrow: "ଦୈନିକ ପାଣିପାଗ-ଆଧାରିତ ବୃଦ୍ଧି ଓ ସମସ୍ୟା ତାଲିକା",
    dailyLogHeading: "📅 ଦୈନିକ ଅଗ୍ରଗତି, ସୁଧାର ଓ ସାପ୍ତାହିକ ଫଳାଫଳ",
    weekendSpeakBtn: "🔊 ସାପ୍ତାହିକ ଫଳାଫଳ ଶୁଣନ୍ତୁ",
    addNextDayBtn: "+ ପରଦିନ ଯୋଡ଼ନ୍ତୁ",
    scanCardTitle: "🩺 AI କ୍ରପ୍ ଡକ୍ଟର ଓ ବୃଦ୍ଧି ସ୍କାନର୍",
    analyzeBtn: "ସମସ୍ୟା ଓ ବୃଦ୍ଧି ଯାଞ୍ଚ କରନ୍ତୁ",
    reportCardTitle: "📈 ସମସ୍ୟା + ଫସଲ ବୃଦ୍ଧି ରିପୋର୍ଟ",
    exploreCardTitle: "🌱 ଫସଲ ଓ ମାଟିର ଉପଯୁକ୍ତତା",
    roiCardTitle: "💰 ସ୍ମାର୍ଟ ଫସଲ ଓ ଲାଭ ପରାମର୍ଶଦାତା",
    mandiCardTitle: "📊 ଲାଇଭ୍ APMC ମଣ୍ଡି ବନାମ MSP",
    chatCardTitle: "🤖 କୃଷି ସହାୟକ ଭଏସ୍ AI",
    chatSub: "ମାଇକ୍‌ରେ କୁହନ୍ତୁ କିମ୍ବା ଲେଖନ୍ତୁ — ଉତ୍ତର ସ୍କ୍ରିନ୍ ଓ ଭଏସ୍‌ରେ ମିଳିବ।",
    chatWelcome: "🤖 ନମସ୍କାର! ଫସଲ ରୋଗ, ବୃଦ୍ଧି, ସାର, ମଣ୍ଡି ଦର କିମ୍ବା ଯୋଜନା ବିଷୟରେ ପଚାରନ୍ତୁ।",
    sendBtn: "ପଠାନ୍ତୁ",
    phDailyNote: "ଆଜିର ସମସ୍ୟା ବା ନୋଟ୍ ଲେଖନ୍ତୁ କିମ୍ବା ମାଇକ୍ ଦବାନ୍ତୁ...",
    phChatInput: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ କିମ୍ବା ମାଇକ୍ ଦବାନ୍ତୁ...",
    phDistrictInput: "ସହର ବା ଗାଁ ଲେଖନ୍ତୁ (ଯେପରି ଭୁବନେଶ୍ୱର, ପୁରୀ)...",
    phLoginName: "ଚାଷୀଙ୍କ ନାମ ଲେଖନ୍ତୁ",
    phLoginDistrict: "ଜିଲ୍ଲା ଲେଖନ୍ତୁ (ଯେପରି ଭୁବନେଶ୍ୱର, ପୁରୀ)",
    phLoginCrop: "ଯେପରି ଧାନ, ଗହମ",
    statusRecovering: "ସୁଧାର ଚାଲିଛି",
    statusHealthy: "ସୁସ୍ଥ ବୃଦ୍ଧି",
    statusIssue: "ସମସ୍ୟା ଚିହ୍ନଟ",
    lblStatus: "ଅବସ୍ଥା",
    lblIssueUpdate: "ସମସ୍ୟା / ଅପଡେଟ୍",
    lblImproving: "କିପରି ସୁଧୁରୁଛି",
    weekendResultTitle: "ସାପ୍ତାହିକ ଫଳାଫଳ",
    growthGainLabel: "ବୃଦ୍ଧି ଲାଭ",
    nowLabel: "ବର୍ତ୍ତମାନ",
    positiveWeekend: "ସକାରାତ୍ମକ ସାପ୍ତାହିକ ଫଳାଫଳ — ଫସଲ ସମସ୍ୟା ନିୟନ୍ତ୍ରଣରେ ଅଛି ଓ ବୃଦ୍ଧିରେ ଭଲ ସୁଧାର ହୋଇଛି।",
    moderateWeekend: "ମଧ୍ୟମ ସାପ୍ତାହିକ ଫଳାଫଳ — ବୃଦ୍ଧି ଓ ସୁଧାର ଚାଲିଛି; ଆସନ୍ତା ସପ୍ତାହରେ ମଧ୍ୟ ପାଣିପାଗ ଓ ଆର୍ଦ୍ରତା ଉପରେ ନଜର ରଖନ୍ତୁ।",
    dayPrefix: "ଦିନ",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `ପାଣିପାଗ (${weatherNow}) ଅନୁଯାୟୀ ବୃଦ୍ଧି ${nextGrowth}% ରେ ପହଞ୍ଚିଛି ଓ ସୁଧାର ଜାରି ରହିଛି।`,
    defaultIssueResolved: "ସମସ୍ୟା ସମାଧାନ ହୋଇଛି",
    defaultMildRecovery: "ସାମାନ୍ୟ ସୁଧାର ଚାଲିଛି",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} ର ତାପମାତ୍ରା ${temp} ଏବଂ ପାଣିପାଗ ${cond} ଅଛି।`,
    loginWelcomeSpeech: (name, district) =>
      `ସ୍ୱାଗତ ${name} ଜୀ। ଆପଣଙ୍କ ${district} ଡ୍ୟାଶବୋର୍ଡ ଓ ଦୈନିକ ବୃଦ୍ଧି ଟ୍ରାକର ପ୍ରସ୍ତୁତ ଅଛି।`,
    speakNowPlaceholder: "🎤 କୁହନ୍ତୁ...",
    speakAgainPlaceholder: "ଦୟାକରି ପୁଣି କୁହନ୍ତୁ...",
    voiceNotSupported: "ମାଇକ୍ ବ୍ୟବହାର ପାଇଁ Chrome କିମ୍ବା Edge ବ୍ରାଉଜର ଖୋଲନ୍ତୁ।",
    selectImageAlert: "ଦୟାକରି ପ୍ରଥମେ ପତ୍ର ବା ଫସଲର ଫଟୋ ବାଛନ୍ତୁ।",
    analyzingText: "🔬 AI ଫସଲ ସମସ୍ୟା ଓ ବୃଦ୍ଧି ଉଭୟର ବିଶ୍ଳେଷଣ କରୁଛି...",
    scanEmptyText: "ଫଟୋ ଅପଲୋଡ୍ କରି 'ସମସ୍ୟା ଓ ବୃଦ୍ଧି ଯାଞ୍ଚ କରନ୍ତୁ' ଦବାନ୍ତୁ।",
    issueDetectedLabel: "ଚିହ୍ନଟ ସମସ୍ୟା",
    careTreatmentLabel: "ଯତ୍ନ / ପ୍ରତିକାର",
    dosageNoteLabel: "ମାତ୍ରା ସୂଚନା",
    cropGrowthStatusLabel: "ଫସଲ ବୃଦ୍ଧି ସ୍ଥିତି",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} ପରୀକ୍ଷା ସରିଲା। ସମସ୍ୟା: ${disease}। ପ୍ରତିକାର: ${treatment}। ଫସଲ ବୃଦ୍ଧି ପର୍ଯ୍ୟାୟ ${stageLabel}, ${days}। ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `ଉତ୍ତମ ଫସଲ (${season} • ${soil}): ${baseCrop} • ଅମଳ (${acres} ଏକର): ${yieldQ} କ୍ୱିଣ୍ଟାଲ୍ • ଆନୁମାନିକ ଲାଭ: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} ଏକରରେ ${baseCrop} ରୁ ପ୍ରାୟ ${yieldQ} କ୍ୱିଣ୍ଟାଲ୍ ଅମଳ ଓ ${netProfit} ଟଙ୍କା ଲାଭ ଆକଳନ କରାଯାଇଛି।`,
    chatThinking: "🤖 ଉତ୍ତର ପ୍ରସ୍ତୁତ ହେଉଛି...",
    chatFallback: (district, crop, message) =>
      `${district} ଏବଂ ${crop} ପାଇଁ ଆପଣଙ୍କ ପ୍ରଶ୍ନ ("${message}") ମିଳିଛି। ବ୍ୟାକଏଣ୍ଡ ଯୋଡ଼ିହେଲେ ସମ୍ପୂର୍ଣ୍ଣ AI ଉତ୍ତର ଏଠାରେ ଦେଖାଯିବ।`,
    mandiHeading: (district) => `ମଣ୍ଡି ତୁଳନା: ${district}`,
    aboveMsp: "▲ MSP ଠାରୁ ଅଧିକ",
    belowMsp: "▼ MSP ଠାରୁ କମ୍",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • ସ୍ୱାସ୍ଥ୍ୟ: ${health} • ବୃଦ୍ଧି: ${growth} (${stage}) — ${note}`
  },
  mr: {
    brandSub: "स्मार्ट शेती, उत्तम भविष्य",
    loginHeading: "फसलसाथी मध्ये आपले स्वागत आहे 🌱",
    loginSub: "स्मार्ट फार्मिंग डॅशबोर्डवर जाण्यासाठी लॉगिन करा.",
    labelFarmerName: "शेतकऱ्याचे नाव",
    labelDistrict: "जिल्हा / शहर",
    labelAcres: "जमीन (एकर)",
    labelMainCrop: "मुख्य पीक",
    loginContinueBtn: "लॉगिन करा आणि पुढे जा →",
    noAccountText: "खाते नाही?",
    openLandingBtn: "होम पेज उघडा",
    howItWorks: "हे कसे चालते",
    smartTools: "स्मार्ट टूल्स",
    login: "लॉगिन",
    getStarted: "सुरू करा",
    heroEyebrow: "• AI-आधारित पीक माहिती",
    heroTitle: "तुमचे शेत. तुमचा कॅमेरा. हुशार निर्णय.",
    heroSubtitle:
      "फसलसाथी कॉम्प्युटर व्हिजन, थेट हवामान, बाजारभाव आणि बहुभाषिक व्हॉइस AI द्वारे पिकाची वाढ तपासते आणि नफा वाढवते.",
    openDashboard: "फार्म डॅशबोर्ड उघडा →",
    scanCrop: "🌱 पीक आणि वाढ तपासा",
    trustedFarmers: "संपूर्ण भारतातील शेतकऱ्यांचा विश्वास",
    yourFarmLocation: "📍 तुमच्या शेताचे ठिकाण",
    search: "शोधा",
    useMyLocation: "◎ माझे स्थान घ्या",
    suniyeBtn: "🔊 ऐका",
    suniye: "ऐका",
    rokiye: "थांबवा",
    humidityLabel: "आर्द्रता",
    rainLabel: "पाऊस",
    windLabel: "वारा",
    waterStress: "पाण्याची कमतरता",
    lowLabel: "कमी",
    cropHealthGrowth: "पीक आरोग्य आणि वाढ",
    diseaseRisk: "रोगाचा धोका",
    normalLabel: "सामान्य",
    weatherAdvisory: "दैनंदिन वाढ तपासणी आणि काळजीसाठी हवामान अनुकूल आहे.",
    howItWorksUpper: "हे कसे चालते",
    howItWorksHeading: "शेतातील माहितीपासून हुशार निर्णयांपर्यंत.",
    step1Title: "फोटो किंवा आवाज द्या",
    step1Desc: "पानाचा फोटो अपलोड करा, जिल्हा निवडा किंवा माइकवरून बोला.",
    step2Title: "AI विश्लेषण",
    step2Desc: "AI हवामान आणि वाढीसह पिकातील समस्या व सुधार तपासते.",
    step3Title: "समजून घ्या",
    step3Desc: "दररोजची प्रगती, वीकेंड अहवाल आणि बाजारभाव विरुद्ध MSP पहा.",
    step4Title: "कृती करा",
    step4Desc: "आवाजातील मार्गदर्शनानुसार योग्य उपाय करा.",
    smartToolsUpper: "स्मार्ट शेती साधने",
    smartToolsHeading: "आत्मविश्वासाने आपले शेत तपासा.",
    tool1Title: "पिके आणि नफा (ROI)",
    tool1Desc: "पीक माहिती, मातीची सुसंगतता आणि नफ्याचा अंदाज.",
    tool2Title: "क्रॉप डॉक्टर आणि वाढ",
    tool2Desc: "समस्या, उपचार आणि पिकाचा टप्पा एकत्र दाखवते.",
    tool3Title: "दैनंदिन वाढ आणि वीकेंड निकाल",
    tool3Desc: "हवामानाशी जोडलेली दैनंदिन नोंद आणि वीकेंड सारांश.",
    navDashboard: "🏠 डॅशबोर्ड आणि साप्ताहिक",
    navZones: "🗺️ शेत झोन आणि वाढ",
    navScan: "🩺 क्रॉप डॉक्टर + वाढ",
    navExplore: "🌱 पिके आणि ROI",
    navMandi: "📊 बाजारभाव विरुद्ध MSP",
    navChat: "🤖 कृषी व्हॉइस AI",
    homePageBtn: "← होम पेज",
    switchFarmerBtn: "👤 शेतकरी बदला",
    askVoiceAiBtn: "🎤 व्हॉइस AI ला विचारा",
    kpiHealth: "एकूण शेत आरोग्य",
    kpiWeather: "आजचे हवामान",
    kpiStage: "पिकाची अवस्था",
    growthTimelineTitle: "🌱 पीक वाढीचे टप्पे",
    dailyLogEyebrow: "दैनंदिन हवामान-आधारित वाढ आणि समस्या नोंद",
    dailyLogHeading: "📅 दररोजची प्रगती, सुधार आणि वीकेंड निकाल",
    weekendSpeakBtn: "🔊 वीकेंड अहवाल ऐका",
    addNextDayBtn: "+ पुढील दिवस जोडा",
    scanCardTitle: "🩺 AI क्रॉप डॉक्टर आणि वाढ स्कॅनर",
    analyzeBtn: "समस्या आणि वाढ तपासा",
    reportCardTitle: "📈 समस्या + पीक वाढ अहवाल",
    exploreCardTitle: "🌱 पिके आणि मातीची सुसंगतता",
    roiCardTitle: "💰 स्मार्ट पीक आणि नफा सल्लागार",
    mandiCardTitle: "📊 थेट APMC बाजारभाव विरुद्ध MSP",
    chatCardTitle: "🤖 कृषी सहाय्यक व्हॉइस AI",
    chatSub: "माइकवरून बोला किंवा टाइप करा — उत्तर स्क्रीन आणि आवाजात मिळेल.",
    chatWelcome: "🤖 नमस्कार! पीक रोग, वाढ, खते, बाजारभाव किंवा योजनांबद्दल विचारा.",
    sendBtn: "पाठवा",
    phDailyNote: "आजची नोंद किंवा समस्या लिहा किंवा माइक दाबा...",
    phChatInput: "तुमचा प्रश्न लिहा किंवा माइक दाबा...",
    phDistrictInput: "शहर किंवा गाव लिहा (उदा. पुणे, नाशिक)...",
    phLoginName: "शेतकऱ्याचे नाव लिहा",
    phLoginDistrict: "जिल्हा लिहा",
    phLoginCrop: "उदा. भात, गहू",
    statusRecovering: "सुधारणा सुरू",
    statusHealthy: "निरोगी वाढ",
    statusIssue: "समस्या आढळली",
    lblStatus: "स्थिती",
    lblIssueUpdate: "समस्या / अपडेट",
    lblImproving: "सुधारणा कशी होत आहे",
    weekendResultTitle: "वीकेंड निकाल",
    growthGainLabel: "वाढीत सुधार",
    nowLabel: "सध्या",
    positiveWeekend: "सकारात्मक वीकेंड निकाल — पिकातील समस्या नियंत्रणात आहे आणि वाढीत चांगली सुधारणा झाली आहे.",
    moderateWeekend: "मध्यम वीकेंड निकाल — वाढ आणि सुधारणा सुरू आहे; पुढील आठवड्यातही हवामानाकडे लक्ष द्या.",
    dayPrefix: "दिवस",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `हवामानानुसार (${weatherNow}) वाढ ${nextGrowth}% पर्यंत पोहोचली आणि सुधारणा सुरू आहे.`,
    defaultIssueResolved: "समस्या दूर झाली",
    defaultMildRecovery: "सौम्य सुधारणा सुरू",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} येथील तापमान ${temp} आणि हवामान ${cond} आहे.`,
    loginWelcomeSpeech: (name, district) =>
      `स्वागत आहे ${name} जी. तुमचा ${district} डॅशबोर्ड आणि दैनंदिन वाढ ट्रॅकर तयार आहे.`,
    speakNowPlaceholder: "🎤 बोला...",
    speakAgainPlaceholder: "कृपया पुन्हा बोला...",
    voiceNotSupported: "माइक वापरण्यासाठी Chrome किंवा Edge ब्राउझर वापरा.",
    selectImageAlert: "कृपया आधी पानाचा किंवा पिकाचा फोटो निवडा.",
    analyzingText: "🔬 AI पिकातील समस्या आणि वाढ दोन्हीचे विश्लेषण करत आहे...",
    scanEmptyText: "फोटो अपलोड करून 'समस्या आणि वाढ तपासा' दाबा.",
    issueDetectedLabel: "आढळलेली समस्या",
    careTreatmentLabel: "काळजी / उपचार",
    dosageNoteLabel: "मात्रा सूचना",
    cropGrowthStatusLabel: "पीक वाढ स्थिती",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} तपासणी पूर्ण झाली. समस्या: ${disease}. उपचार: ${treatment}. वाढीचा टप्पा ${stageLabel}, ${days} आहे. ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `उत्तम पीक (${season} • ${soil}): ${baseCrop} • उत्पादन (${acres} एकर): ${yieldQ} क्विंटल • अंदाजित निव्वळ नफा: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} एकरात ${baseCrop} पासून अंदाजे ${yieldQ} क्विंटल उत्पादन आणि ${netProfit} रुपये नफा अपेक्षित आहे.`,
    chatThinking: "🤖 उत्तर तयार होत आहे...",
    chatFallback: (district, crop, message) =>
      `${district} आणि ${crop} साठी तुमचा प्रश्न ("${message}") मिळाला आहे. बॅकएंड जोडल्यावर संपूर्ण AI उत्तर येथे दिसेल.`,
    mandiHeading: (district) => `बाजारभाव तुलना: ${district}`,
    aboveMsp: "▲ MSP पेक्षा जास्त",
    belowMsp: "▼ MSP पेक्षा कमी",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • आरोग्य: ${health} • वाढ: ${growth} (${stage}) — ${note}`
  },
  bn: {
    brandSub: "স্মার্ট কৃষি, উন্নত ভবিষ্যৎ",
    loginHeading: "ফসলসাথীতে আপনাকে স্বাগত 🌱",
    loginSub: "স্মার্ট ফার্মিং ড্যাশবোর্ডে যেতে লগইন করুন।",
    labelFarmerName: "কৃষকের নাম",
    labelDistrict: "জেলা / শহর",
    labelAcres: "জমি (একর)",
    labelMainCrop: "প্রধান ফসল",
    loginContinueBtn: "লগইন করুন ও এগিয়ে যান →",
    noAccountText: "অ্যাকাউন্ট নেই?",
    openLandingBtn: "হোম পেজ খুলুন",
    howItWorks: "এটি কীভাবে কাজ করে",
    smartTools: "স্মার্ট টুলস",
    login: "লগইন",
    getStarted: "শুরু করুন",
    heroEyebrow: "• AI-ভিত্তিক ফসল ইন্টেলিজেন্স",
    heroTitle: "আপনার জমি। আপনার ক্যামেরা। আরও ভালো সিদ্ধান্ত।",
    heroSubtitle:
      "ফসলসাথী কম্পিউটার ভিশন, আবহাওয়া, মান্ডি দর এবং বহুভাষিক ভয়েস AI দিয়ে ফসলের বৃদ্ধি পর্যবেক্ষণ করে ও লাভ বাড়ায়।",
    openDashboard: "ফার্ম ড্যাশবোর্ড খুলুন →",
    scanCrop: "🌱 ফসল ও বৃদ্ধি স্ক্যান করুন",
    trustedFarmers: "সারা ভারতের কৃষকদের আস্থা",
    yourFarmLocation: "📍 আপনার জমির অবস্থান",
    search: "খুঁজুন",
    useMyLocation: "◎ আমার অবস্থান নিন",
    suniyeBtn: "🔊 শুনুন",
    suniye: "শুনুন",
    rokiye: "থামান",
    humidityLabel: "আর্দ্রতা",
    rainLabel: "বৃষ্টি",
    windLabel: "বাতাস",
    waterStress: "জলের ঘাটতি",
    lowLabel: "কম",
    cropHealthGrowth: "ফসলের স্বাস্থ্য ও বৃদ্ধি",
    diseaseRisk: "রোগের ঝুঁকি",
    normalLabel: "স্বাভাবিক",
    weatherAdvisory: "দৈনিক বৃদ্ধি পর্যবেক্ষণ ও যত্নের জন্য আবহাওয়া অনুকূল।",
    howItWorksUpper: "এটি কীভাবে কাজ করে",
    howItWorksHeading: "মাঠের তথ্য থেকে সঠিক সিদ্ধান্তে।",
    step1Title: "ছবি বা ভয়েস দিন",
    step1Desc: "পাতার ছবি আপলোড করুন, জেলা বেছে নিন বা মাইকে বলুন।",
    step2Title: "AI বিশ্লেষণ",
    step2Desc: "AI আবহাওয়া ও বৃদ্ধির সাথে ফসলের সমস্যা ও উন্নতি যাচাই করে।",
    step3Title: "বুঝুন",
    step3Desc: "প্রতিদিনের অগ্রগতি, উইকএন্ড ফলাফল এবং মান্ডি বনাম MSP দেখুন।",
    step4Title: "পদক্ষেপ নিন",
    step4Desc: "ভয়েস নির্দেশনা অনুযায়ী সঠিক ব্যবস্থা নিন।",
    smartToolsUpper: "স্মার্ট কৃষি টুলস",
    smartToolsHeading: "আত্মবিশ্বাসের সাথে নিজের খামার জানুন।",
    tool1Title: "ফসল ও লাভ (ROI)",
    tool1Desc: "ফসলের তথ্য, মাটির উপযোগিতা এবং লাভের হিসাব।",
    tool2Title: "ক্রপ ডক্টর ও বৃদ্ধি",
    tool2Desc: "সমস্যা, প্রতিকার ও বৃদ্ধির ধাপ একসাথে দেখায়।",
    tool3Title: "দৈনিক বৃদ্ধি ও উইকএন্ড ফলাফল",
    tool3Desc: "আবহাওয়াভিত্তিক দৈনিক লগ এবং সাপ্তাহিক সারসংক্ষেপ।",
    navDashboard: "🏠 ড্যাশবোর্ড ও সাপ্তাহিক",
    navZones: "🗺️ খামার জোন ও বৃদ্ধি",
    navScan: "🩺 ক্রপ ডক্টর + বৃদ্ধি",
    navExplore: "🌱 ফসল ও ROI",
    navMandi: "📊 মান্ডি বনাম MSP",
    navChat: "🤖 কৃষি ভয়েস AI",
    homePageBtn: "← হোম পেজ",
    switchFarmerBtn: "👤 কৃষক বদলান",
    askVoiceAiBtn: "🎤 ভয়েস AI-কে জিজ্ঞাসা করুন",
    kpiHealth: "সামগ্রিক খামার স্বাস্থ্য",
    kpiWeather: "আজকের আবহাওয়া",
    kpiStage: "ফসলের বৃদ্ধির ধাপ",
    growthTimelineTitle: "🌱 ফসল বৃদ্ধির ধাপসমূহ",
    dailyLogEyebrow: "দৈনিক আবহাওয়াভিত্তিক বৃদ্ধি ও সমস্যা লগ",
    dailyLogHeading: "📅 প্রতিদিনের অগ্রগতি, উন্নতি ও উইকএন্ড ফলাফল",
    weekendSpeakBtn: "🔊 উইকএন্ড ফলাফল শুনুন",
    addNextDayBtn: "+ পরের দিন যোগ করুন",
    scanCardTitle: "🩺 AI ক্রপ ডক্টর ও বৃদ্ধি স্ক্যানার",
    analyzeBtn: "সমস্যা ও বৃদ্ধি যাচাই করুন",
    reportCardTitle: "📈 সমস্যা + ফসল বৃদ্ধি রিপোর্ট",
    exploreCardTitle: "🌱 ফসল ও মাটির উপযোগিতা",
    roiCardTitle: "💰 স্মার্ট ফসল ও লাভ পরামর্শদাতা",
    mandiCardTitle: "📊 লাইভ APMC মান্ডি বনাম MSP",
    chatCardTitle: "🤖 কৃষি সহায়ক ভয়েস AI",
    chatSub: "মাইকে বলুন বা লিখুন — উত্তর স্ক্রিন ও ভয়েসে পাবেন।",
    chatWelcome: "🤖 নমস্কার! ফসলের রোগ, বৃদ্ধি, সার, মান্ডি দর বা যোজনা সম্পর্কে জিজ্ঞাসা করুন।",
    sendBtn: "পাঠান",
    phDailyNote: "আজকের নোট বা সমস্যা লিখুন বা মাইক চাপুন...",
    phChatInput: "আপনার প্রশ্ন লিখুন বা মাইক চাপুন...",
    phDistrictInput: "শহর বা গ্রাম লিখুন...",
    phLoginName: "কৃষকের নাম লিখুন",
    phLoginDistrict: "জেলা লিখুন",
    phLoginCrop: "যেমন ধান, গম",
    statusRecovering: "উন্নতি হচ্ছে",
    statusHealthy: "সুস্থ বৃদ্ধি",
    statusIssue: "সমস্যা দেখা গেছে",
    lblStatus: "অবস্থা",
    lblIssueUpdate: "সমস্যা / আপডেট",
    lblImproving: "কীভাবে উন্নতি হচ্ছে",
    weekendResultTitle: "উইকএন্ড ফলাফল",
    growthGainLabel: "বৃদ্ধি অর্জন",
    nowLabel: "বর্তমান",
    positiveWeekend: "ইতিবাচক উইকএন্ড ফলাফল — ফসলের সমস্যা নিয়ন্ত্রণে আছে এবং বৃদ্ধিতে ভালো উন্নতি হয়েছে।",
    moderateWeekend: "মাঝারি উইকএন্ড ফলাফল — বৃদ্ধি ও উন্নতি চলছে; সামনের সপ্তাহেও আবহাওয়া ও আর্দ্রতা খেয়াল রাখুন।",
    dayPrefix: "দিন",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `আবহাওয়া (${weatherNow}) অনুযায়ী বৃদ্ধি ${nextGrowth}%-এ পৌঁছেছে এবং উন্নতি চলছে।`,
    defaultIssueResolved: "সমস্যার সমাধান হয়েছে",
    defaultMildRecovery: "সামান্য উন্নতি চলছে",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc}-এর তাপমাত্রা ${temp} এবং আবহাওয়া ${cond}।`,
    loginWelcomeSpeech: (name, district) =>
      `স্বাগতম ${name}। আপনার ${district} ড্যাশবোর্ড ও দৈনিক বৃদ্ধি ট্র্যাকার প্রস্তুত।`,
    speakNowPlaceholder: "🎤 বলুন...",
    speakAgainPlaceholder: "দয়া করে আবার বলুন...",
    voiceNotSupported: "মাইকে বলতে Chrome বা Edge ব্রাউজার ব্যবহার করুন।",
    selectImageAlert: "দয়া করে আগে পাতা বা ফসলের ছবি নির্বাচন করুন।",
    analyzingText: "🔬 AI ফসলের সমস্যা ও বৃদ্ধি উভয়ই বিশ্লেষণ করছে...",
    scanEmptyText: "ছবি আপলোড করে 'সমস্যা ও বৃদ্ধি যাচাই করুন' চাপুন।",
    issueDetectedLabel: "শনাক্ত সমস্যা",
    careTreatmentLabel: "যত্ন / প্রতিকার",
    dosageNoteLabel: "মাত্রা নির্দেশিকা",
    cropGrowthStatusLabel: "ফসলের বৃদ্ধির অবস্থা",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} পরীক্ষা সম্পন্ন হয়েছে। সমস্যা: ${disease}। প্রতিকার: ${treatment}। বৃদ্ধির ধাপ ${stageLabel}, ${days}। ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `সেরা ফসল (${season} • ${soil}): ${baseCrop} • ফলন (${acres} একর): ${yieldQ} কুইন্টাল • আনুমানিক নিট লাভ: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} একরে ${baseCrop} থেকে আনুমানিক ${yieldQ} কুইন্টাল ফলন এবং ${netProfit} টাকা লাভ হতে পারে।`,
    chatThinking: "🤖 উত্তর তৈরি হচ্ছে...",
    chatFallback: (district, crop, message) =>
      `${district} এবং ${crop}-এর জন্য আপনার প্রশ্ন ("${message}") পাওয়া গেছে। ব্যাকএন্ড যুক্ত হলে সম্পূর্ণ AI উত্তর এখানে দেখা যাবে।`,
    mandiHeading: (district) => `মান্ডি তুলনা: ${district}`,
    aboveMsp: "▲ MSP-এর বেশি",
    belowMsp: "▼ MSP-এর কম",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • স্বাস্থ্য: ${health} • বৃদ্ধি: ${growth} (${stage}) — ${note}`
  },
  te: {
    brandSub: "స్మార్ట్ వ్యవసాయం, మెరుగైన భవిష్యత్తు",
    loginHeading: "ఫసల్‌సాథీకి స్వాగతం 🌱",
    loginSub: "స్మార్ట్ ఫార్మింగ్ డాష్‌బోర్డ్‌లోకి వెళ్లడానికి లాగిన్ చేయండి.",
    labelFarmerName: "రైతు పేరు",
    labelDistrict: "జిల్లా / నగరం",
    labelAcres: "భూమి (ఎకరాలు)",
    labelMainCrop: "ప్రధాన పంట",
    loginContinueBtn: "లాగిన్ చేసి కొనసాగండి →",
    noAccountText: "ఖాతా లేదా?",
    openLandingBtn: "హోమ్ పేజీ తెరవండి",
    howItWorks: "ఇది ఎలా పనిచేస్తుంది",
    smartTools: "స్మార్ట్ టూల్స్",
    login: "లాగిన్",
    getStarted: "ప్రారంభించండి",
    heroEyebrow: "• AI-ఆధారిత పంట సమాచారం",
    heroTitle: "మీ పొలం. మీ కెమెరా. తెలివైన నిర్ణయాలు.",
    heroSubtitle:
      "ఫసల్‌సాథీ కంప్యూటర్ విజన్, వాతావరణం, మార్కెట్ ధరలు మరియు బహుభాషా వాయిస్ AI ద్వారా పంట ఎదుగుదలను పర్యవేక్షిస్తుంది.",
    openDashboard: "ఫార్మ్ డాష్‌బోర్డ్ తెరవండి →",
    scanCrop: "🌱 పంట & ఎదుగుదల స్కాన్ చేయండి",
    trustedFarmers: "భారత్ వ్యాప్తంగా రైతుల నమ్మకం",
    yourFarmLocation: "📍 మీ పొలం స్థానం",
    search: "వెతకండి",
    useMyLocation: "◎ నా స్థానం తీసుకోండి",
    suniyeBtn: "🔊 వినండి",
    suniye: "వినండి",
    rokiye: "ఆపండి",
    humidityLabel: "తేమ",
    rainLabel: "వర్షం",
    windLabel: "గాలి",
    waterStress: "నీటి కొరత",
    lowLabel: "తక్కువ",
    cropHealthGrowth: "పంట ఆరోగ్యం & ఎదుగుదల",
    diseaseRisk: "వ్యాధి ముప్పు",
    normalLabel: "సాధారణం",
    weatherAdvisory: "రోజువారీ ఎదుగుదల పర్యవేక్షణకు వాతావరణం అనుకూలంగా ఉంది.",
    howItWorksUpper: "ఇది ఎలా పనిచేస్తుంది",
    howItWorksHeading: "పొలంలోని డేటా నుండి తెలివైన నిర్ణయాల వరకు.",
    step1Title: "ఫోటో లేదా వాయిస్ ఇవ్వండి",
    step1Desc: "ఆకు ఫోటో అప్‌లోడ్ చేయండి, జిల్లా ఎంచుకోండి లేదా మైక్‌లో మాట్లాడండి.",
    step2Title: "AI విశ్లేషణ",
    step2Desc: "వాతావరణం మరియు ఎదుగుదలతో పాటు పంట సమస్యలను AI పరిశీలిస్తుంది.",
    step3Title: "తెలుసుకోండి",
    step3Desc: "రోజువారీ పురోగతి, వీకెండ్ ఫలితం మరియు మార్కెట్ ధర vs MSP చూడండి.",
    step4Title: "చర్య తీసుకోండి",
    step4Desc: "వాయిస్ సూచనల ప్రకారం సరైన పరిష్కారాలు పాటించండి.",
    smartToolsUpper: "స్మార్ట్ వ్యవసాయ సాధనాలు",
    smartToolsHeading: "నమ్మకంతో మీ పొలాన్ని అన్వేషించండి.",
    tool1Title: "పంటలు & లాభం (ROI)",
    tool1Desc: "పంట వివరాలు, నేల అనుకూలత మరియు లాభ అంచనాలు.",
    tool2Title: "క్రాప్ డాక్టర్ & ఎదుగుదల",
    tool2Desc: "సమస్య, నివారణ మరియు ఎదుగుదల దశను కలిపి చూపుతుంది.",
    tool3Title: "రోజువారీ ఎదుగుదల & వీకెండ్ ఫలితం",
    tool3Desc: "వాతావరణ ఆధారిత రోజువారీ లాగ్ మరియు వీకెండ్ సారాంశం.",
    navDashboard: "🏠 డాష్‌బోర్డ్ & వారపు",
    navZones: "🗺️ పొలం జోన్‌లు & ఎదుగుదల",
    navScan: "🩺 క్రాప్ డాక్టర్ + ఎదుగుదల",
    navExplore: "🌱 పంటలు & ROI",
    navMandi: "📊 మార్కెట్ ధర vs MSP",
    navChat: "🤖 కృషి వాయిస్ AI",
    homePageBtn: "← హోమ్ పేజీ",
    switchFarmerBtn: "👤 రైతును మార్చండి",
    askVoiceAiBtn: "🎤 వాయిస్ AI ని అడగండి",
    kpiHealth: "మొత్తం పొలం ఆరోగ్యం",
    kpiWeather: "నేటి వాతావరణం",
    kpiStage: "పంట ఎదుగుదల దశ",
    growthTimelineTitle: "🌱 పంట ఎదుగుదల దశలు",
    dailyLogEyebrow: "రోజువారీ వాతావరణ ఆధారిత ఎదుగుదల & సమస్య లాగ్",
    dailyLogHeading: "📅 రోజువారీ పురోగతి, కోలుకోవడం & వీకెండ్ ఫలితం",
    weekendSpeakBtn: "🔊 వీకెండ్ ఫలితం వినండి",
    addNextDayBtn: "+ తదుపరి రోజు చేర్చండి",
    scanCardTitle: "🩺 AI క్రాప్ డాక్టర్ & ఎదుగుదల స్కానర్",
    analyzeBtn: "సమస్య & ఎదుగుదల పరిశీలించండి",
    reportCardTitle: "📈 సమస్య + పంట ఎదుగుదల నివేదిక",
    exploreCardTitle: "🌱 పంటలు & నేల అనుకూలత",
    roiCardTitle: "💰 స్మార్ట్ పంట & లాభ సలహాదారు",
    mandiCardTitle: "📊 లైవ్ APMC మార్కెట్ ధర vs MSP",
    chatCardTitle: "🤖 కృషి సహాయక్ వాయిస్ AI",
    chatSub: "మైక్‌లో మాట్లాడండి లేదా టైప్ చేయండి — సమాధానం స్క్రీన్ మరియు వాయిస్‌లో వస్తుంది.",
    chatWelcome: "🤖 నమస్కారం! పంట వ్యాధి, ఎదుగుదల, ఎరువులు, మార్కెట్ ధరలు లేదా పథకాల గురించి అడగండి.",
    sendBtn: "పంపండి",
    phDailyNote: "నేటి సమస్య/నోట్ రాయండి లేదా మైక్ నొక్కండి...",
    phChatInput: "మీ ప్రశ్న రాయండి లేదా మైక్ నొక్కండి...",
    phDistrictInput: "నగరం లేదా గ్రామం రాయండి...",
    phLoginName: "రైతు పేరు రాయండి",
    phLoginDistrict: "జిల్లా రాయండి",
    phLoginCrop: "ఉదా. వరి, గోధుమ",
    statusRecovering: "కోలుకుంటోంది",
    statusHealthy: "ఆరోగ్యకరమైన ఎదుగుదల",
    statusIssue: "సమస్య గుర్తించబడింది",
    lblStatus: "స్థితి",
    lblIssueUpdate: "సమస్య / అప్‌డేట్",
    lblImproving: "ఎలా మెరుగుపడుతోంది",
    weekendResultTitle: "వీకెండ్ ఫలితం",
    growthGainLabel: "ఎదుగుదల పెరుగుదల",
    nowLabel: "ఇప్పుడు",
    positiveWeekend: "సానుకూల వీకెండ్ ఫలితం — పంట సమస్య అదుపులో ఉంది మరియు ఎదుగుదలలో మంచి మెరుగుదల కనిపించింది.",
    moderateWeekend: "సాధారణ వీకెండ్ ఫలితం — ఎదుగుదల మరియు కోలుకోవడం కొనసాగుతోంది; వచ్చే వారం కూడా వాతావరణం గమనించండి.",
    dayPrefix: "రోజు",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `వాతావరణం (${weatherNow}) ప్రకారం ఎదుగుదల ${nextGrowth}% కి చేరుకుంది మరియు కోలుకోవడం కొనసాగుతోంది.`,
    defaultIssueResolved: "సమస్య పరిష్కారమైంది",
    defaultMildRecovery: "స్వల్ప మెరుగుదల కొనసాగుతోంది",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} లో ఉష్ణోగ్రత ${temp} మరియు వాతావరణం ${cond} గా ఉంది.`,
    loginWelcomeSpeech: (name, district) =>
      `స్వాగతం ${name} గారు. మీ ${district} డాష్‌బోర్డ్ మరియు రోజువారీ ఎదుగుదల ట్రాకర్ సిద్ధంగా ఉన్నాయి.`,
    speakNowPlaceholder: "🎤 మాట్లాడండి...",
    speakAgainPlaceholder: "దయచేసి మళ్లీ మాట్లాడండి...",
    voiceNotSupported: "మైక్ వాయిస్ కోసం Chrome లేదా Edge బ్రౌజర్ ఉపయోగించండి.",
    selectImageAlert: "దయచేసి ముందుగా ఆకు లేదా పంట ఫోటో ఎంచుకోండి.",
    analyzingText: "🔬 AI పంట సమస్య మరియు ఎదుగుదల రెండింటినీ విశ్లేషిస్తోంది...",
    scanEmptyText: "ఫోటో అప్‌లోడ్ చేసి 'సమస్య & ఎదుగుదల పరిశీలించండి' నొక్కండి.",
    issueDetectedLabel: "గుర్తించిన సమస్య",
    careTreatmentLabel: "సంరక్షణ / నివారణ",
    dosageNoteLabel: "మోతాదు సూచన",
    cropGrowthStatusLabel: "పంట ఎదుగుదల స్థితి",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} పరిశీలన పూర్తయింది. సమస్య: ${disease}. నివారణ: ${treatment}. ఎదుగుదల దశ ${stageLabel}, ${days}. ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `ఉత్తమ పంట (${season} • ${soil}): ${baseCrop} • దిగుబడి (${acres} ఎకరాలు): ${yieldQ} క్వింటాళ్లు • అంచనా నికర లాభం: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} ఎకరాలలో ${baseCrop} ద్వారా సుమారు ${yieldQ} క్వింటాళ్ల దిగుబడి మరియు ${netProfit} రూపాయల లాభం అంచనా.`,
    chatThinking: "🤖 సమాధానం సిద్ధమవుతోంది...",
    chatFallback: (district, crop, message) =>
      `${district} మరియు ${crop} కోసం మీ ప్రశ్న ("${message}") అందింది. బ్యాకెండ్ కనెక్ట్ అయ్యాక పూర్తి AI సమాధానం ఇక్కడ కనిపిస్తుంది.`,
    mandiHeading: (district) => `మార్కెట్ ధర పోలిక: ${district}`,
    aboveMsp: "▲ MSP కంటే ఎక్కువ",
    belowMsp: "▼ MSP కంటే తక్కువ",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • ఆరోగ్యం: ${health} • ఎదుగుదల: ${growth} (${stage}) — ${note}`
  },
  ta: {
    brandSub: "ஸ்மார்ட் விவசாயம், சிறந்த எதிர்காலம்",
    loginHeading: "ஃபசல்சாத்திக்கு வரவேற்கிறோம் 🌱",
    loginSub: "ஸ்மார்ட் ஃபார்மிங் டாஷ்போர்டுக்கு செல்ல உள்நுழையவும்.",
    labelFarmerName: "விவசாயி பெயர்",
    labelDistrict: "மாவட்டம் / நகரம்",
    labelAcres: "நிலம் (ஏக்கர்)",
    labelMainCrop: "முக்கிய பயிர்",
    loginContinueBtn: "உள்நுழைந்து தொடரவும் →",
    noAccountText: "கணக்கு இல்லையா?",
    openLandingBtn: "முகப்புப் பக்கத்தைத் திறக்கவும்",
    howItWorks: "இது எப்படி செயல்படுகிறது",
    smartTools: "ஸ்மார்ட் கருவிகள்",
    login: "உள்நுழைவு",
    getStarted: "தொடங்குங்கள்",
    heroEyebrow: "• AI-சார்ந்த பயிர் நுண்ணறிவு",
    heroTitle: "உங்கள் நிலம். உங்கள் கேமரா. சிறந்த முடிவுகள்.",
    heroSubtitle:
      "ஃபசல்சாத்தி கம்ப்யூட்டர் விஷன், வானிலை, சந்தை விலை மற்றும் பலமொழி குரல் AI மூலம் பயிர் வளர்ச்சியை கண்காணித்து லாபத்தை உயர்த்துகிறது.",
    openDashboard: "ஃபார்ம் டாஷ்போர்டை திறக்கவும் →",
    scanCrop: "🌱 பயிர் & வளர்ச்சியை ஸ்கேன் செய்யவும்",
    trustedFarmers: "இந்தியா முழுவதும் விவசாயிகளின் நம்பிக்கை",
    yourFarmLocation: "📍 உங்கள் பண்ணை இருப்பிடம்",
    search: "தேடுங்கள்",
    useMyLocation: "◎ எனது இருப்பிடத்தைப் பெறுக",
    suniyeBtn: "🔊 கேளுங்கள்",
    suniye: "கேளுங்கள்",
    rokiye: "நிறுத்துங்கள்",
    humidityLabel: "ஈரப்பதம்",
    rainLabel: "மழை",
    windLabel: "காற்று",
    waterStress: "நீர் பற்றாக்குறை",
    lowLabel: "குறைவு",
    cropHealthGrowth: "பயிர் ஆரோக்கியம் & வளர்ச்சி",
    diseaseRisk: "நோய் அபாயம்",
    normalLabel: "சாதாரணமானது",
    weatherAdvisory: "தினசரி வளர்ச்சி கண்காணிப்புக்கு வானிலை சாதகமாக உள்ளது.",
    howItWorksUpper: "இது எப்படி செயல்படுகிறது",
    howItWorksHeading: "நிலத் தரவிலிருந்து சிறந்த முடிவுகளுக்கு.",
    step1Title: "புகைப்படம் அல்லது குரல்",
    step1Desc: "இலை புகைப்படத்தை பதிவேற்றவும், மாவட்டத்தைத் தேர்ந்தெடுக்கவும் அல்லது மைக்கில் பேசவும்.",
    step2Title: "AI பகுப்பாய்வு",
    step2Desc: "வானிலை மற்றும் வளர்ச்சியுடன் பயிர் பிரச்சனைகளை AI ஆராய்கிறது.",
    step3Title: "புரிந்து கொள்ளுங்கள்",
    step3Desc: "தினசரி முன்னேற்றம், வார இறுதி முடிவு மற்றும் சந்தை விலை vs MSP பார்க்கவும்.",
    step4Title: "செயல்படுங்கள்",
    step4Desc: "குரல் வழிகாட்டுதலுடன் சரியான நடவடிக்கை எடுங்கள்.",
    smartToolsUpper: "ஸ்மார்ட் விவசாயக் கருவிகள்",
    smartToolsHeading: "நம்பிக்கையுடன் உங்கள் பண்ணையை ஆராயுங்கள்.",
    tool1Title: "பயிர்கள் & லாபம் (ROI)",
    tool1Desc: "பயிர் விவரங்கள், மண் பொருத்தம் மற்றும் லாப மதிப்பீடு.",
    tool2Title: "க்ராப் டாக்டர் & வளர்ச்சி",
    tool2Desc: "பிரச்சனை, தீர்வு மற்றும் வளர்ச்சி நிலையை ஒன்றாக காட்டுகிறது.",
    tool3Title: "தினசரி வளர்ச்சி & வார இறுதி முடிவு",
    tool3Desc: "வானிலை சார்ந்த தினசரி பதிவு மற்றும் வார இறுதி சுருக்கம்.",
    navDashboard: "🏠 டாஷ்போர்டு & வாராந்திரம்",
    navZones: "🗺️ பண்ணை மண்டலங்கள் & வளர்ச்சி",
    navScan: "🩺 க்ராப் டாக்டர் + வளர்ச்சி",
    navExplore: "🌱 பயிர்கள் & ROI",
    navMandi: "📊 சந்தை விலை vs MSP",
    navChat: "🤖 க்ருஷி குரல் AI",
    homePageBtn: "← முகப்புப் பக்கம்",
    switchFarmerBtn: "👤 விவசாயியை மாற்றுங்கள்",
    askVoiceAiBtn: "🎤 குரல் AI-யிடம் கேளுங்கள்",
    kpiHealth: "மொத்த பண்ணை ஆரோக்கியம்",
    kpiWeather: "இன்றைய வானிலை",
    kpiStage: "பயிர் வளர்ச்சி நிலை",
    growthTimelineTitle: "🌱 பயிர் வளர்ச்சி நிலைகள்",
    dailyLogEyebrow: "தினசரி வானிலை சார்ந்த வளர்ச்சி & பிரச்சனை பதிவு",
    dailyLogHeading: "📅 தினசரி முன்னேற்றம், மீட்சி & வார இறுதி முடிவு",
    weekendSpeakBtn: "🔊 வார இறுதி முடிவைக் கேளுங்கள்",
    addNextDayBtn: "+ அடுத்த நாளைச் சேர்க்கவும்",
    scanCardTitle: "🩺 AI க்ராப் டாக்டர் & வளர்ச்சி ஸ்கேனர்",
    analyzeBtn: "பிரச்சனை & வளர்ச்சியை ஆராய்க",
    reportCardTitle: "📈 பிரச்சனை + பயிர் வளர்ச்சி அறிக்கை",
    exploreCardTitle: "🌱 பயிர்கள் & மண் பொருத்தம்",
    roiCardTitle: "💰 ஸ்மார்ட் பயிர் & லாப ஆலோசகர்",
    mandiCardTitle: "📊 நேரடி APMC சந்தை விலை vs MSP",
    chatCardTitle: "🤖 க்ருஷி சஹாயக் குரல் AI",
    chatSub: "மைக்கில் பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள் — பதில் திரை மற்றும் குரலில் கிடைக்கும்.",
    chatWelcome: "🤖 வணக்கம்! பயிர் நோய், வளர்ச்சி, உரம், சந்தை விலை அல்லது திட்டங்கள் குறித்து கேளுங்கள்.",
    sendBtn: "அனுப்பு",
    phDailyNote: "இன்றைய குறிப்பு அல்லது பிரச்சனையை எழுதுங்கள் அல்லது மைக்கை அழுத்தவும்...",
    phChatInput: "உங்கள் கேள்வியை எழுதுங்கள் அல்லது மைக்கை அழுத்தவும்...",
    phDistrictInput: "நகரம் அல்லது கிராமத்தை உள்ளிடவும்...",
    phLoginName: "விவசாயி பெயரை உள்ளிடவும்",
    phLoginDistrict: "மாவட்டத்தை உள்ளிடவும்",
    phLoginCrop: "உதா. நெல், கோதுமை",
    statusRecovering: "மீண்டு வருகிறது",
    statusHealthy: "ஆரோக்கியமான வளர்ச்சி",
    statusIssue: "பிரச்சனை கண்டறியப்பட்டது",
    lblStatus: "நிலை",
    lblIssueUpdate: "பிரச்சனை / புதுப்பிப்பு",
    lblImproving: "எவ்வாறு மேம்படுகிறது",
    weekendResultTitle: "வார இறுதி முடிவு",
    growthGainLabel: "வளர்ச்சி முன்னேற்றம்",
    nowLabel: "இப்போது",
    positiveWeekend: "நேர்மறையான வார இறுதி முடிவு — பயிர் பிரச்சனை கட்டுக்குள் உள்ளது மற்றும் வளர்ச்சியில் நல்ல முன்னேற்றம் காணப்படுகிறது.",
    moderateWeekend: "மிதமான வார இறுதி முடிவு — வளர்ச்சி மற்றும் மீட்சி தொடர்கிறது; அடுத்த வாரமும் வானிலையைக் கவனியுங்கள்.",
    dayPrefix: "நாள்",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `வானிலை (${weatherNow}) படி வளர்ச்சி ${nextGrowth}% அடைந்துள்ளது மற்றும் மீட்சி தொடர்கிறது.`,
    defaultIssueResolved: "பிரச்சனை தீர்க்கப்பட்டது",
    defaultMildRecovery: "லேசான மீட்சி தொடர்கிறது",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} வெப்பநிலை ${temp} மற்றும் வானிலை ${cond} ஆக உள்ளது.`,
    loginWelcomeSpeech: (name, district) =>
      `வணக்கம் ${name}. உங்கள் ${district} டாஷ்போர்டு மற்றும் தினசரி வளர்ச்சி பதிவேடு தயாராக உள்ளது.`,
    speakNowPlaceholder: "🎤 பேசுங்கள்...",
    speakAgainPlaceholder: "தயவுசெய்து மீண்டும் பேசுங்கள்...",
    voiceNotSupported: "மைக் குரலுக்கு Chrome அல்லது Edge உலாவியைப் பயன்படுத்தவும்.",
    selectImageAlert: "தயவுசெய்து முதலில் இலை அல்லது பயிர் புகைப்படத்தைத் தேர்ந்தெடுக்கவும்.",
    analyzingText: "🔬 AI பயிர் பிரச்சனை மற்றும் வளர்ச்சி இரண்டையும் ஆய்வு செய்கிறது...",
    scanEmptyText: "புகைப்படத்தை பதிவேற்றி 'பிரச்சனை & வளர்ச்சியை ஆராய்க' என்பதை அழுத்தவும்.",
    issueDetectedLabel: "கண்டறியப்பட்ட பிரச்சனை",
    careTreatmentLabel: "பராமரிப்பு / தீர்வு",
    dosageNoteLabel: "அளவு குறிப்பு",
    cropGrowthStatusLabel: "பயிர் வளர்ச்சி நிலை",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} ஆய்வு முடிந்தது. பிரச்சனை: ${disease}. தீர்வு: ${treatment}. வளர்ச்சி நிலை ${stageLabel}, ${days}. ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `சிறந்த பயிர் (${season} • ${soil}): ${baseCrop} • மகசூல் (${acres} ஏக்கர்): ${yieldQ} குவிண்டால் • மதிப்பிடப்பட்ட நிகர லாபம்: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} ஏக்கரில் ${baseCrop} மூலம் சுமார் ${yieldQ} குவிண்டால் மகசூல் மற்றும் ${netProfit} ரூபாய் லாபம் எதிர்பார்க்கப்படுகிறது.`,
    chatThinking: "🤖 பதில் தயாராகிறது...",
    chatFallback: (district, crop, message) =>
      `${district} மற்றும் ${crop}-க்கான உங்கள் கேள்வி ("${message}") கிடைத்துள்ளது. பின்தளம் இணைக்கப்பட்டதும் முழு AI பதில் இங்கு தோன்றும்.`,
    mandiHeading: (district) => `சந்தை விலை ஒப்பீடு: ${district}`,
    aboveMsp: "▲ MSP-க்கு மேல்",
    belowMsp: "▼ MSP-க்கு கீழ்",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • ஆரோக்கியம்: ${health} • வளர்ச்சி: ${growth} (${stage}) — ${note}`
  },
  pa: {
    brandSub: "ਸਮਾਰਟ ਖੇਤੀ, ਬਿਹਤਰ ਭਵਿੱਖ",
    loginHeading: "ਫ਼ਸਲਸਾਥੀ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ 🌱",
    loginSub: "ਸਮਾਰਟ ਫਾਰਮਿੰਗ ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਜਾਣ ਲਈ ਲੌਗਇਨ ਕਰੋ।",
    labelFarmerName: "ਕਿਸਾਨ ਦਾ ਨਾਮ",
    labelDistrict: "ਜ਼ਿਲ੍ਹਾ / ਸ਼ਹਿਰ",
    labelAcres: "ਜ਼ਮੀਨ (ਏਕੜ)",
    labelMainCrop: "ਮੁੱਖ ਫ਼ਸਲ",
    loginContinueBtn: "ਲੌਗਇਨ ਕਰੋ ਅਤੇ ਅੱਗੇ ਵਧੋ →",
    noAccountText: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    openLandingBtn: "ਹੋਮ ਪੇਜ ਖੋਲ੍ਹੋ",
    howItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    smartTools: "ਸਮਾਰਟ ਟੂਲਜ਼",
    login: "ਲੌਗਇਨ",
    getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
    heroEyebrow: "• AI-ਅਧਾਰਤ ਫ਼ਸਲ ਜਾਣਕਾਰੀ",
    heroTitle: "ਤੁਹਾਡਾ ਖੇਤ। ਤੁਹਾਡਾ ਕੈਮਰਾ। ਸਿਆਣੇ ਫ਼ੈਸਲੇ।",
    heroSubtitle:
      "ਫ਼ਸਲਸਾਥੀ ਕੰਪਿਊਟਰ ਵਿਜ਼ਨ, ਮੌਸਮ, ਮੰਡੀ ਭਾਅ ਅਤੇ ਬਹੁ-ਭਾਸ਼ਾਈ ਵੌਇਸ AI ਨਾਲ ਫ਼ਸਲ ਦੇ ਵਾਧੇ ਨੂੰ ਟਰੈਕ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਨਾਫ਼ਾ ਵਧਾਉਂਦਾ ਹੈ।",
    openDashboard: "ਫਾਰਮ ਡੈਸ਼ਬੋਰਡ ਖੋਲ੍ਹੋ →",
    scanCrop: "🌱 ਫ਼ਸਲ ਅਤੇ ਵਾਧਾ ਸਕੈਨ ਕਰੋ",
    trustedFarmers: "ਪੂਰੇ ਭਾਰਤ ਦੇ ਕਿਸਾਨਾਂ ਦਾ ਭਰੋਸਾ",
    yourFarmLocation: "📍 ਤੁਹਾਡੇ ਖੇਤ ਦੀ ਲੋਕੇਸ਼ਨ",
    search: "ਖੋਜੋ",
    useMyLocation: "◎ ਮੇਰੀ ਲੋਕੇਸ਼ਨ ਲਵੋ",
    suniyeBtn: "🔊 ਸੁਣੋ",
    suniye: "ਸੁਣੋ",
    rokiye: "ਰੋਕੋ",
    humidityLabel: "ਨਮੀ",
    rainLabel: "ਮੀਂਹ",
    windLabel: "ਹਵਾ",
    waterStress: "ਪਾਣੀ ਦੀ ਘਾਟ",
    lowLabel: "ਘੱਟ",
    cropHealthGrowth: "ਫ਼ਸਲ ਸਿਹਤ ਅਤੇ ਵਾਧਾ",
    diseaseRisk: "ਬਿਮਾਰੀ ਦਾ ਖ਼ਤਰਾ",
    normalLabel: "ਆਮ",
    weatherAdvisory: "ਰੋਜ਼ਾਨਾ ਵਾਧੇ ਦੀ ਜਾਂਚ ਅਤੇ ਸੰਭਾਲ ਲਈ ਮੌਸਮ ਅਨੁਕੂਲ ਹੈ।",
    howItWorksUpper: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    howItWorksHeading: "ਖੇਤ ਦੇ ਡਾਟੇ ਤੋਂ ਸਿਆਣੇ ਫ਼ੈਸਲਿਆਂ ਤੱਕ।",
    step1Title: "ਫ਼ੋਟੋ ਜਾਂ ਆਵਾਜ਼ ਦਿਓ",
    step1Desc: "ਪੱਤੇ ਦੀ ਫ਼ੋਟੋ ਅੱਪਲੋਡ ਕਰੋ, ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ ਜਾਂ ਮਾਈਕ 'ਤੇ ਬੋਲੋ।",
    step2Title: "AI ਵਿਸ਼ਲੇਸ਼ਣ",
    step2Desc: "AI ਮੌਸਮ ਅਤੇ ਵਾਧੇ ਦੇ ਨਾਲ ਫ਼ਸਲ ਦੀ ਸਮੱਸਿਆ ਅਤੇ ਸੁਧਾਰ ਜਾਂਚਦਾ ਹੈ।",
    step3Title: "ਸਮਝੋ",
    step3Desc: "ਰੋਜ਼ਾਨਾ ਤਰੱਕੀ, ਵੀਕੈਂਡ ਨਤੀਜਾ ਅਤੇ ਮੰਡੀ ਭਾਅ ਬਨਾਮ MSP ਦੇਖੋ।",
    step4Title: "ਕਦਮ ਚੁੱਕੋ",
    step4Desc: "ਆਵਾਜ਼ ਵਿੱਚ ਦਿੱਤੀਆਂ ਹਦਾਇਤਾਂ ਅਨੁਸਾਰ ਸਹੀ ਉਪਾਅ ਕਰੋ।",
    smartToolsUpper: "ਸਮਾਰਟ ਖੇਤੀ ਟੂਲਜ਼",
    smartToolsHeading: "ਭਰੋਸੇ ਨਾਲ ਆਪਣਾ ਖੇਤ ਵੇਖੋ।",
    tool1Title: "ਫ਼ਸਲਾਂ ਅਤੇ ਮੁਨਾਫ਼ਾ (ROI)",
    tool1Desc: "ਫ਼ਸਲ ਦੀ ਜਾਣਕਾਰੀ, ਮਿੱਟੀ ਦੀ ਅਨੁਕੂਲਤਾ ਅਤੇ ਮੁਨਾਫ਼ੇ ਦਾ ਅੰਦਾਜ਼ਾ।",
    tool2Title: "ਕਰੌਪ ਡਾਕਟਰ ਅਤੇ ਵਾਧਾ",
    tool2Desc: "ਸਮੱਸਿਆ, ਇਲਾਜ ਅਤੇ ਵਾਧੇ ਦਾ ਪੜਾਅ ਇਕੱਠੇ ਦਿਖਾਉਂਦਾ ਹੈ।",
    tool3Title: "ਰੋਜ਼ਾਨਾ ਵਾਧਾ ਅਤੇ ਵੀਕੈਂਡ ਨਤੀਜਾ",
    tool3Desc: "ਮੌਸਮ ਨਾਲ ਜੁੜਿਆ ਰੋਜ਼ਾਨਾ ਲੌਗ ਅਤੇ ਹਫ਼ਤਾਵਾਰੀ ਸਾਰ।",
    navDashboard: "🏠 ਡੈਸ਼ਬੋਰਡ ਅਤੇ ਹਫ਼ਤਾਵਾਰੀ",
    navZones: "🗺️ ਖੇਤ ਜ਼ੋਨ ਅਤੇ ਵਾਧਾ",
    navScan: "🩺 ਕਰੌਪ ਡਾਕਟਰ + ਵਾਧਾ",
    navExplore: "🌱 ਫ਼ਸਲਾਂ ਅਤੇ ROI",
    navMandi: "📊 ਮੰਡੀ ਭਾਅ ਬਨਾਮ MSP",
    navChat: "🤖 ਕ੍ਰਿਸ਼ੀ ਵੌਇਸ AI",
    homePageBtn: "← ਹੋਮ ਪੇਜ",
    switchFarmerBtn: "👤 ਕਿਸਾਨ ਬਦਲੋ",
    askVoiceAiBtn: "🎤 ਵੌਇਸ AI ਨੂੰ ਪੁੱਛੋ",
    kpiHealth: "ਕੁੱਲ ਖੇਤ ਸਿਹਤ",
    kpiWeather: "ਅੱਜ ਦਾ ਮੌਸਮ",
    kpiStage: "ਫ਼ਸਲ ਦੇ ਵਾਧੇ ਦਾ ਪੜਾਅ",
    growthTimelineTitle: "🌱 ਫ਼ਸਲ ਵਾਧੇ ਦੇ ਪੜਾਅ",
    dailyLogEyebrow: "ਰੋਜ਼ਾਨਾ ਮੌਸਮ-ਅਧਾਰਤ ਵਾਧਾ ਅਤੇ ਸਮੱਸਿਆ ਲੌਗ",
    dailyLogHeading: "📅 ਰੋਜ਼ਾਨਾ ਤਰੱਕੀ, ਸੁਧਾਰ ਅਤੇ ਵੀਕੈਂਡ ਨਤੀਜਾ",
    weekendSpeakBtn: "🔊 ਵੀਕੈਂਡ ਨਤੀਜਾ ਸੁਣੋ",
    addNextDayBtn: "+ ਅਗਲਾ ਦਿਨ ਜੋੜੋ",
    scanCardTitle: "🩺 AI ਕਰੌਪ ਡਾਕਟਰ ਅਤੇ ਵਾਧਾ ਸਕੈਨਰ",
    analyzeBtn: "ਸਮੱਸਿਆ ਅਤੇ ਵਾਧਾ ਜਾਂਚੋ",
    reportCardTitle: "📈 ਸਮੱਸਿਆ + ਫ਼ਸਲ ਵਾਧਾ ਰਿਪੋਰਟ",
    exploreCardTitle: "🌱 ਫ਼ਸਲਾਂ ਅਤੇ ਮਿੱਟੀ ਦੀ ਅਨੁਕੂਲਤਾ",
    roiCardTitle: "💰 ਸਮਾਰਟ ਫ਼ਸਲ ਅਤੇ ਮੁਨਾਫ਼ਾ ਸਲਾਹਕਾਰ",
    mandiCardTitle: "📊 ਲਾਈਵ APMC ਮੰਡੀ ਭਾਅ ਬਨਾਮ MSP",
    chatCardTitle: "🤖 ਕ੍ਰਿਸ਼ੀ ਸਹਾਇਕ ਵੌਇਸ AI",
    chatSub: "ਮਾਈਕ 'ਤੇ ਬੋਲੋ ਜਾਂ ਟਾਈਪ ਕਰੋ — ਜਵਾਬ ਸਕਰੀਨ ਅਤੇ ਆਵਾਜ਼ ਦੋਵਾਂ ਵਿੱਚ ਮਿਲੇਗਾ।",
    chatWelcome: "🤖 ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਫ਼ਸਲ ਦੀ ਬਿਮਾਰੀ, ਵਾਧਾ, ਖਾਦ, ਮੰਡੀ ਭਾਅ ਜਾਂ ਸਕੀਮਾਂ ਬਾਰੇ ਪੁੱਛੋ।",
    sendBtn: "ਭੇਜੋ",
    phDailyNote: "ਅੱਜ ਦਾ ਨੋਟ ਜਾਂ ਸਮੱਸਿਆ ਲਿਖੋ ਜਾਂ ਮਾਈਕ ਦਬਾਓ...",
    phChatInput: "ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ ਜਾਂ ਮਾਈਕ ਦਬਾਓ...",
    phDistrictInput: "ਸ਼ਹਿਰ ਜਾਂ ਪਿੰਡ ਲਿਖੋ...",
    phLoginName: "ਕਿਸਾਨ ਦਾ ਨਾਮ ਲਿਖੋ",
    phLoginDistrict: "ਜ਼ਿਲ੍ਹਾ ਲਿਖੋ",
    phLoginCrop: "ਜਿਵੇਂ ਝੋਨਾ, ਕਣਕ",
    statusRecovering: "ਸੁਧਾਰ ਜਾਰੀ",
    statusHealthy: "ਸਿਹਤਮੰਦ ਵਾਧਾ",
    statusIssue: "ਸਮੱਸਿਆ ਮਿਲੀ",
    lblStatus: "ਸਥਿਤੀ",
    lblIssueUpdate: "ਸਮੱਸਿਆ / ਅੱਪਡੇਟ",
    lblImproving: "ਕਿਵੇਂ ਸੁਧਾਰ ਹੋ ਰਿਹਾ ਹੈ",
    weekendResultTitle: "ਵੀਕੈਂਡ ਨਤੀਜਾ",
    growthGainLabel: "ਵਾਧੇ ਵਿੱਚ ਸੁਧਾਰ",
    nowLabel: "ਹੁਣ",
    positiveWeekend: "ਸਕਾਰਾਤਮਕ ਵੀਕੈਂਡ ਨਤੀਜਾ — ਫ਼ਸਲ ਦੀ ਸਮੱਸਿਆ ਕਾਬੂ ਵਿੱਚ ਹੈ ਅਤੇ ਵਾਧੇ ਵਿੱਚ ਚੰਗਾ ਸੁਧਾਰ ਹੋਇਆ ਹੈ।",
    moderateWeekend: "ਮੱਧਮ ਵੀਕੈਂਡ ਨਤੀਜਾ — ਵਾਧਾ ਅਤੇ ਸੁਧਾਰ ਜਾਰੀ ਹੈ; ਅਗਲੇ ਹਫ਼ਤੇ ਵੀ ਮੌਸਮ ਅਤੇ ਨਮੀ 'ਤੇ ਨਜ਼ਰ ਰੱਖੋ।",
    dayPrefix: "ਦਿਨ",
    nextDayRecovery: (weatherNow, nextGrowth) =>
      `ਮੌਸਮ (${weatherNow}) ਅਨੁਸਾਰ ਵਾਧਾ ${nextGrowth}% ਤੱਕ ਪਹੁੰਚਿਆ ਅਤੇ ਸੁਧਾਰ ਜਾਰੀ ਹੈ।`,
    defaultIssueResolved: "ਸਮੱਸਿਆ ਹੱਲ ਹੋ ਗਈ",
    defaultMildRecovery: "ਹਲਕਾ ਸੁਧਾਰ ਜਾਰੀ",
    weatherTempSpeech: (loc, temp, cond) =>
      `${loc} ਦਾ ਤਾਪਮਾਨ ${temp} ਅਤੇ ਮੌਸਮ ${cond} ਹੈ।`,
    loginWelcomeSpeech: (name, district) =>
      `ਜੀ ਆਇਆਂ ਨੂੰ ${name} ਜੀ। ਤੁਹਾਡਾ ${district} ਡੈਸ਼ਬੋਰਡ ਅਤੇ ਰੋਜ਼ਾਨਾ ਵਾਧਾ ਟਰੈਕਰ ਤਿਆਰ ਹੈ।`,
    speakNowPlaceholder: "🎤 ਬੋਲੋ...",
    speakAgainPlaceholder: "ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਬੋਲੋ...",
    voiceNotSupported: "ਮਾਈਕ ਰਾਹੀਂ ਬੋਲਣ ਲਈ Chrome ਜਾਂ Edge ਬ੍ਰਾਊਜ਼ਰ ਵਰਤੋ।",
    selectImageAlert: "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਪੱਤੇ ਜਾਂ ਫ਼ਸਲ ਦੀ ਫ਼ੋਟੋ ਚੁਣੋ।",
    analyzingText: "🔬 AI ਫ਼ਸਲ ਦੀ ਸਮੱਸਿਆ ਅਤੇ ਵਾਧਾ ਦੋਵਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...",
    scanEmptyText: "ਫ਼ੋਟੋ ਅੱਪਲੋਡ ਕਰਕੇ 'ਸਮੱਸਿਆ ਅਤੇ ਵਾਧਾ ਜਾਂਚੋ' ਦਬਾਓ।",
    issueDetectedLabel: "ਪਛਾਣੀ ਗਈ ਸਮੱਸਿਆ",
    careTreatmentLabel: "ਸੰਭਾਲ / ਇਲਾਜ",
    dosageNoteLabel: "ਮਾਤਰਾ ਨੋਟ",
    cropGrowthStatusLabel: "ਫ਼ਸਲ ਵਾਧੇ ਦੀ ਸਥਿਤੀ",
    scanVoiceSummary: (cropName, disease, treatment, stageLabel, days, tip) =>
      `${cropName} ਦੀ ਜਾਂਚ ਪੂਰੀ ਹੋਈ। ਸਮੱਸਿਆ: ${disease}। ਇਲਾਜ: ${treatment}। ਵਾਧੇ ਦਾ ਪੜਾਅ ${stageLabel}, ${days} ਹੈ। ${tip}`,
    roiResultText: (season, soil, baseCrop, acres, yieldQ, netProfit) =>
      `ਵਧੀਆ ਫ਼ਸਲ (${season} • ${soil}): ${baseCrop} • ਝਾੜ (${acres} ਏਕੜ): ${yieldQ} ਕੁਇੰਟਲ • ਅਨੁਮਾਨਿਤ ਸ਼ੁੱਧ ਮੁਨਾਫ਼ਾ: ₹${netProfit.toLocaleString("en-IN")}`,
    roiVoiceSummary: (acres, baseCrop, yieldQ, netProfit) =>
      `${acres} ਏਕੜ ਵਿੱਚ ${baseCrop} ਤੋਂ ਲਗਭਗ ${yieldQ} ਕੁਇੰਟਲ ਝਾੜ ਅਤੇ ${netProfit} ਰੁਪਏ ਮੁਨਾਫ਼ਾ ਅਨੁਮਾਨਿਤ ਹੈ।`,
    chatThinking: "🤖 ਜਵਾਬ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...",
    chatFallback: (district, crop, message) =>
      `${district} ਅਤੇ ${crop} ਲਈ ਤੁਹਾਡਾ ਸਵਾਲ ("${message}") ਮਿਲ ਗਿਆ ਹੈ। ਬੈਕਐਂਡ ਜੁੜਦੇ ਹੀ ਪੂਰਾ AI ਜਵਾਬ ਇੱਥੇ ਦਿਖੇਗਾ।`,
    mandiHeading: (district) => `ਮੰਡੀ ਤੁਲਨਾ: ${district}`,
    aboveMsp: "▲ MSP ਤੋਂ ਵੱਧ",
    belowMsp: "▼ MSP ਤੋਂ ਘੱਟ",
    zoneNote: (zoneName, health, growth, stage, note) =>
      `${zoneName} • ਸਿਹਤ: ${health} • ਵਾਧਾ: ${growth} (${stage}) — ${note}`
  }
};

function getStrings(lang = currentLanguage) {
  return LOCALE_STRINGS[lang] || LOCALE_STRINGS.en;
}

const MANDI_DATASET = [
  { commodity: "Paddy (Dhan)", modal: 2360, msp: 2300 },
  { commodity: "Wheat (Gehun)", modal: 2425, msp: 2275 },
  { commodity: "Maize (Makka)", modal: 2240, msp: 2225 },
  { commodity: "Cotton (Kapas)", modal: 7210, msp: 7121 },
  { commodity: "Soybean", modal: 4950, msp: 4892 },
  { commodity: "Mustard (Sarson)", modal: 5820, msp: 5650 }
];

const GROWTH_STAGES = [
  { key: "Sowing", label: "Sowing", days: "Day 1–10", tip: "Beej buwai aur halka moisture banayein." },
  { key: "Seedling", label: "Seedling", days: "Day 11–20", tip: "Ankur suraksha aur weed check karein." },
  { key: "Vegetative", label: "Vegetative", days: "Day 21–40", tip: "Patte aur tanon ki growth—balanced poshan dein." },
  { key: "Flowering", label: "Flowering", days: "Day 41–65", tip: "Phool/bali aate samay pani ki kami na hone dein." },
  { key: "Harvest Ready", label: "Harvest Ready", days: "Day 75+", tip: "Pakne par samay se katai aur safe storage karein." }
];

const CROP_GUIDES = {
  Paddy: "Paddy (Dhan) ko warm humid climate, fertile alluvial/clayey soil, aur regular water management pasand hai.",
  Wheat: "Wheat (Gehun) Rabi season ki mukhya fasal hai jise cool weather aur timely irrigation chahiye.",
  Cotton: "Cotton (Kapas) black cotton soil mein achha badhta hai aur pest/bollworm monitoring zaroori hoti hai.",
  Tomato: "Tomato (Tamatar) well-drained loamy soil mein achhi upaj deta hai aur fungal/blight care zaroori hai."
};

let dailyGrowthLogs = [
  { day: "Day 1 (Mon)", growthPct: 42, statusKey: "statusIssue", issue: "Mild leaf spot", recovery: "Affected leaves noted; organic spray planned.", weather: "29°C • 68% Hum" },
  { day: "Day 2 (Tue)", growthPct: 44, statusKey: "statusRecovering", issue: "Spot spread slowing", recovery: "Neem oil applied; weather cool enough for recovery.", weather: "28°C • 66% Hum" },
  { day: "Day 3 (Wed)", growthPct: 47, statusKey: "statusRecovering", issue: "Minor leaf stress", recovery: "Balanced moisture maintained; new shoots healthy.", weather: "30°C • 64% Hum" },
  { day: "Day 4 (Thu)", growthPct: 50, statusKey: "statusHealthy", issue: "Spots drying out", recovery: "Recovery steady; green color improving.", weather: "29°C • 62% Hum" },
  { day: "Day 5 (Fri)", growthPct: 53, statusKey: "statusHealthy", issue: "No new spots", recovery: "Active vegetative growth under normal weather.", weather: "28°C • 65% Hum" },
  { day: "Day 6 (Sat)", growthPct: 56, statusKey: "statusHealthy", issue: "Recovered", recovery: "Issue resolved; crop growth on track.", weather: "29°C • 67% Hum" }
];

// =========================================================
// 1. VOICE ASSISTANCE (TTS & STT) & FULL UI TRANSLATION
// =========================================================
function getSpeechLang(langCode = currentLanguage) {
  const map = {
    hi: "hi-IN",
    en: "en-IN",
    or: "or-IN",
    mr: "mr-IN",
    bn: "bn-IN",
    te: "te-IN",
    ta: "ta-IN",
    pa: "pa-IN"
  };
  return map[langCode] || "en-IN";
}

function applyPlaceholdersAndOptions(s) {
  const placeholderMap = {
    "daily-issue-input": s.phDailyNote,
    "chat-input": s.phChatInput,
    "district-input": s.phDistrictInput,
    "login-name": s.phLoginName,
    "login-district": s.phLoginDistrict,
    "login-crop": s.phLoginCrop
  };

  Object.entries(placeholderMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el && text) el.placeholder = text;
  });

  const statusSelect = document.getElementById("daily-status-select");
  if (statusSelect) {
    const optMap = {
      Recovering: s.statusRecovering,
      "Healthy Growth": s.statusHealthy,
      "Issue Spotted": s.statusIssue
    };
    Array.from(statusSelect.options).forEach((opt) => {
      if (optMap[opt.value]) opt.text = optMap[opt.value];
    });
  }
}

function refreshDynamicViews() {
  renderDailyAndWeekendTracker();
  renderZoneGrid();
  selectZone(activeZone);
  renderGrowthTimeline(activeGrowthStage);
  fetchMandiRates(farmerProfile.district);

  const scanOut = document.getElementById("disease-output");
  if (scanOut && !scanOut.dataset.hasReport) {
    scanOut.innerText = getStrings().scanEmptyText;
  }
}

function applyTranslations(lang = currentLanguage) {
  const s = getStrings(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (typeof s[key] === "string") {
      el.innerText = s[key];
    }
  });
  applyPlaceholdersAndOptions(s);
  refreshDynamicViews();
}

function speakText(text, langCode = currentLanguage) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/[#*_`•→🔊⏹️🎤]/g, "").trim();
  const utt = new SpeechSynthesisUtterance(clean);
  utt.lang = getSpeechLang(langCode);
  utt.rate = 0.95;
  window.speechSynthesis.speak(utt);
}

function stopVoice() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function attachVoiceControls(container, textToRead, autoSpeak = autoVoiceEnabled) {
  if (!container || !textToRead) return;
  const old = container.querySelector(".voice-bar");
  if (old) old.remove();

  const s = getStrings();

  const bar = document.createElement("div");
  bar.className = "voice-bar";
  bar.style.cssText = "margin-top:10px; display:flex; gap:8px; align-items:center; flex-wrap:wrap;";

  const listen = document.createElement("button");
  listen.type = "button";
  listen.className = "btn-green";
  listen.style.cssText = "padding:5px 12px; border-radius:16px; font-size:0.78rem;";
  listen.innerText = `🔊 ${s.suniye}`;
  listen.onclick = () => speakText(textToRead);

  const stop = document.createElement("button");
  stop.type = "button";
  stop.className = "btn-white";
  stop.style.cssText = "padding:5px 10px; border-radius:16px; font-size:0.78rem;";
  stop.innerText = `⏹️ ${s.rokiye}`;
  stop.onclick = stopVoice;

  bar.appendChild(listen);
  bar.appendChild(stop);
  container.appendChild(bar);

  if (autoSpeak) speakText(textToRead);
}

function startVoiceInput(inputId, cb = null) {
  const s = getStrings();
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert(s.voiceNotSupported);
    return;
  }
  const rec = new SR();
  rec.lang = getSpeechLang(currentLanguage);
  rec.interimResults = false;

  const el = document.getElementById(inputId);
  const prevPh = el ? el.placeholder : "";
  if (el) el.placeholder = s.speakNowPlaceholder;

  rec.onresult = (e) => {
    const text = e.results[0][0].transcript.replace(/\.$/, "");
    if (el) {
      el.value = text;
      el.placeholder = prevPh;
    }
    if (typeof cb === "function") cb(text);
  };
  rec.onerror = () => {
    if (el) el.placeholder = prevPh || s.speakAgainPlaceholder;
  };
  rec.start();
}

// =========================================================
// 2. SCREEN NAVIGATION (LOGIN -> LANDING -> WORKSPACE)
// =========================================================
function hideAllScreens() {
  ["login-screen", "landing-view", "app-workspace"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function showLoginScreen() {
  stopVoice();
  hideAllScreens();
  document.getElementById("login-screen").style.display = "flex";
}

function continueGuestToLanding() {
  hideAllScreens();
  document.getElementById("landing-view").style.display = "block";
  fetchWeather(farmerProfile.district);
  fetchMandiRates(farmerProfile.district);
}

function loginFarmer() {
  const s = getStrings();
  const name = document.getElementById("login-name")?.value.trim() || "Farmer";
  const district = document.getElementById("login-district")?.value.trim() || "Bhubaneswar";
  const acres = parseFloat(document.getElementById("login-acres")?.value || "2") || 2;
  const crop = document.getElementById("login-crop")?.value.trim() || "Paddy";

  farmerProfile = { name, district, state: "India", acres, crop };
  localStorage.setItem("fasalsathi_farmer", JSON.stringify(farmerProfile));
  syncProfileUI();
  openWorkspace("page-dashboard");
  if (autoVoiceEnabled) {
    speakText(s.loginWelcomeSpeech(name, district));
  }
}

function showLandingView() {
  hideAllScreens();
  document.getElementById("landing-view").style.display = "block";
  fetchWeather(farmerProfile.district);
}

function openWorkspace(pageId = "page-dashboard") {
  hideAllScreens();
  document.getElementById("app-workspace").style.display = "block";
  syncProfileUI();
  renderZoneGrid();
  selectZone(activeZone);
  renderGrowthTimeline(activeGrowthStage);
  renderDailyAndWeekendTracker();
  renderCropProfile();
  fetchWeather(farmerProfile.district);
  fetchMandiRates(farmerProfile.district);
  switchWorkspacePage(pageId);
}

function switchWorkspacePage(pageId, btnEl = null) {
  document.querySelectorAll(".ws-page").forEach((p) => (p.style.display = "none"));
  const target = document.getElementById(pageId);
  if (target) target.style.display = "block";

  document.querySelectorAll(".side-link").forEach((b) => {
    b.classList.toggle("active", b.dataset.page === pageId);
  });
  if (btnEl) {
    document.querySelectorAll(".side-link").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }

  const s = getStrings();
  const titles = {
    "page-dashboard": s.heroTitle,
    "page-zones": s.navZones,
    "page-scan": s.scanCardTitle,
    "page-explore": s.exploreCardTitle,
    "page-mandi": s.mandiCardTitle,
    "page-chat": s.chatCardTitle
  };
  const titleEl = document.getElementById("workspace-page-title");
  if (titleEl && titles[pageId]) titleEl.innerText = titles[pageId];
}

function syncProfileUI() {
  const meta = document.getElementById("workspace-farmer-meta");
  if (meta) {
    meta.innerText = `${farmerProfile.name} • ${farmerProfile.district} • ${farmerProfile.acres} • ${farmerProfile.crop}`;
  }
  const roiAcres = document.getElementById("roi-acres");
  if (roiAcres) roiAcres.value = farmerProfile.acres;
  const scanCrop = document.getElementById("scan-crop-name");
  if (scanCrop && farmerProfile.crop) scanCrop.value = farmerProfile.crop;
}

function setLanguage(lang) {
  currentLanguage = lang;
  ["login-lang-select", "landing-lang-select", "app-lang-select"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = lang;
  });
  applyTranslations(lang);
}

function toggleAutoVoice() {
  autoVoiceEnabled = !autoVoiceEnabled;
  const label = autoVoiceEnabled ? "🔊 Auto-Voice: ON" : "🔇 Auto-Voice: OFF";
  ["auto-voice-btn-landing", "auto-voice-btn-app"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerText = label;
  });
  if (!autoVoiceEnabled) stopVoice();
}

// =========================================================
// 3. WEATHER & MANDI
// =========================================================
async function fetchWeather(district = farmerProfile.district) {
  const q = (district || "Bhubaneswar").trim();
  farmerProfile.district = q;

  const titleEl = document.getElementById("weather-location-title");
  const dashLocEl = document.getElementById("dash-weather-loc");
  if (titleEl) titleEl.innerText = q;
  if (dashLocEl) dashLocEl.innerText = q;

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`
    );
    const geoData = await geoRes.json();
    if (!geoData.results || !geoData.results.length) return;

    const place = geoData.results[0];
    const displayLoc = place.admin1 ? `${place.name}, ${place.admin1}` : place.name;
    if (titleEl) titleEl.innerText = displayLoc;
    if (dashLocEl) dashLocEl.innerText = displayLoc;

    const wRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto`
    );
    const wData = await wRes.json();
    const cur = wData.current;

    const temp = `${Math.round(cur.temperature_2m)}°C`;
    const hum = `${cur.relative_humidity_2m ?? 68}%`;
    const rain = `${cur.precipitation_probability ?? 10}%`;
    const wind = `${Math.round(cur.wind_speed_10m ?? 12)} km/h`;
    const cond = (cur.precipitation_probability ?? 0) >= 55 ? "Rainy / Showers" : "Partly Cloudy";

    if (document.getElementById("weather-temp")) document.getElementById("weather-temp").innerText = temp;
    if (document.getElementById("dash-weather-temp")) document.getElementById("dash-weather-temp").innerText = temp;
    if (document.getElementById("weather-condition")) document.getElementById("weather-condition").innerText = cond;
    if (document.getElementById("weather-humidity")) document.getElementById("weather-humidity").innerText = hum;
    if (document.getElementById("weather-rain")) document.getElementById("weather-rain").innerText = rain;
    if (document.getElementById("weather-wind")) document.getElementById("weather-wind").innerText = wind;
  } catch (e) {
    console.warn("Weather fetch issue:", e);
  }
}

function searchDistrictWeather() {
  const val = document.getElementById("district-input")?.value.trim();
  if (val) {
    fetchWeather(val);
    fetchMandiRates(val);
  }
}

function useMyLocation() {
  if (!navigator.geolocation) return alert(getStrings().voiceNotSupported);
  navigator.geolocation.getCurrentPosition(async (pos) => {
    try {
      const { latitude, longitude } = pos.coords;
      const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const d = await r.json();
      const city = d.address.city || d.address.state_district || d.address.town || "Bhubaneswar";
      fetchWeather(city);
      fetchMandiRates(city);
    } catch {
      fetchWeather("Bhubaneswar");
    }
  });
}

function speakWeatherNow() {
  const s = getStrings();
  const loc = document.getElementById("weather-location-title")?.innerText || farmerProfile.district;
  const temp = document.getElementById("weather-temp")?.innerText || "";
  const cond = document.getElementById("weather-condition")?.innerText || "";
  speakText(s.weatherTempSpeech(loc, temp, cond));
}

async function fetchMandiRates(district = farmerProfile.district) {
  const box = document.getElementById("mandi-output");
  if (!box) return;
  const s = getStrings();

  const seed = district.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const delta = ((seed % 7) - 3) * 15;

  const rows = MANDI_DATASET.map((item) => {
    const modal = item.modal + delta;
    const above = modal >= item.msp;
    return `
      <tr>
        <td style="padding:7px 6px; border-bottom:1px solid #efece2;">${item.commodity}</td>
        <td style="padding:7px 6px; border-bottom:1px solid #efece2;">₹${modal}/q</td>
        <td style="padding:7px 6px; border-bottom:1px solid #efece2;">₹${item.msp}/q</td>
        <td style="padding:7px 6px; border-bottom:1px solid #efece2; font-weight:700; color:${above ? "#1c3b2a" : "#b91c1c"};">
          ${above ? s.aboveMsp : s.belowMsp}
        </td>
      </tr>`;
  }).join("");

  box.innerHTML = `
    <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:8px;">📍 <strong>${s.mandiHeading(district)}</strong></div>
    <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.88rem;">
      <thead><tr><th>${s.labelMainCrop}</th><th>Mandi</th><th>MSP</th><th>${s.lblStatus}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// =========================================================
// 4. ZONES + GROWTH TIMELINE + DAILY LOG & WEEKEND RESULT
// =========================================================
function renderZoneGrid() {
  const grid = document.getElementById("farm-zone-grid");
  if (!grid) return;
  grid.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const zoneName = i <= 4 ? "Zone A" : i <= 8 ? "Zone B" : "Zone C";
    const isStress = i === 6 || i === 10;
    const cell = document.createElement("div");
    cell.className = `zone-cell ${isStress ? "stress" : ""} ${activeZone === zoneName ? "selected" : ""}`;
    cell.innerText = `Z${i}`;
    cell.onclick = () => selectZone(zoneName);
    grid.appendChild(cell);
  }
}

function selectZone(zoneName) {
  activeZone = zoneName;
  renderZoneGrid();
  const box = document.getElementById("zone-detail-box");
  if (!box) return;
  const s = getStrings();

  const info = {
    "Zone A": { health: "91%", stage: "Vegetative", growth: "62%", note: s.weatherAdvisory },
    "Zone B": { health: "76%", stage: "Vegetative", growth: "54%", note: s.moderateWeekend },
    "Zone C": { health: "84%", stage: "Seedling / Vegetative", growth: "48%", note: s.positiveWeekend }
  }[zoneName];

  box.innerHTML = `<strong>${s.zoneNote(zoneName, info.health, info.growth, info.stage, info.note)}</strong>`;
}

function renderGrowthTimeline(selectedStage = activeGrowthStage) {
  activeGrowthStage = selectedStage;
  const dashStageEl = document.getElementById("dash-growth-stage");
  const currentObj = GROWTH_STAGES.find((g) => g.key === selectedStage) || GROWTH_STAGES[2];
  if (dashStageEl) dashStageEl.innerText = `${currentObj.label} (${currentObj.days})`;

  const html = GROWTH_STAGES.map(
    (g) => `
      <div class="growth-stage-box ${g.key === selectedStage ? "active" : ""}" onclick="renderGrowthTimeline('${g.key}')">
        <div><strong>${g.label}</strong></div>
        <div style="font-size:0.72rem; color:var(--text-muted);">${g.days}</div>
        <div style="font-size:0.74rem; margin-top:4px;">${g.tip}</div>
      </div>`
  ).join("");

  if (document.getElementById("dash-growth-timeline"))
    document.getElementById("dash-growth-timeline").innerHTML = html;
  if (document.getElementById("scan-growth-timeline"))
    document.getElementById("scan-growth-timeline").innerHTML = html;
}

function getLiveWeatherShort() {
  const t = document.getElementById("weather-temp")?.innerText || "29°C";
  const h = document.getElementById("weather-humidity")?.innerText || "68%";
  return `${t} • ${h}`;
}

function logNextDayProgress() {
  const s = getStrings();
  const nextNum = dailyGrowthLogs.length + 1;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayLabel = `${s.dayPrefix} ${nextNum} (${days[(nextNum - 1) % 7]})`;
  const last = dailyGrowthLogs[dailyGrowthLogs.length - 1];
  const nextGrowth = Math.min(100, (last ? last.growthPct : 40) + 3);

  const noteInput = document.getElementById("daily-issue-input");
  const statusSelect = document.getElementById("daily-status-select");
  const customNote = noteInput?.value.trim();
  const chosenStatus = statusSelect?.value || (nextGrowth >= 52 ? "Healthy Growth" : "Recovering");
  const statusKeyMap = {
    Recovering: "statusRecovering",
    "Healthy Growth": "statusHealthy",
    "Issue Spotted": "statusIssue"
  };
  const weatherNow = getLiveWeatherShort();

  dailyGrowthLogs.push({
    day: dayLabel,
    growthPct: nextGrowth,
    statusKey: statusKeyMap[chosenStatus] || "statusRecovering",
    issue: customNote ? customNote : nextGrowth >= 55 ? s.defaultIssueResolved : s.defaultMildRecovery,
    recovery: s.nextDayRecovery(weatherNow, nextGrowth),
    weather: weatherNow
  });

  if (noteInput) noteInput.value = "";
  renderDailyAndWeekendTracker();
}

function renderDailyAndWeekendTracker() {
  const listEl = document.getElementById("daily-log-list");
  const weekendEl = document.getElementById("weekend-result-box");
  if (!listEl || !weekendEl) return;
  const s = getStrings();

  listEl.innerHTML = dailyGrowthLogs
    .map(
      (item) => `
      <div class="daily-card">
        <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--forest-dark);">
          <span>${item.day}</span>
          <span>${item.growthPct}%</span>
        </div>
        <div style="font-size:0.74rem; color:var(--text-muted); margin:2px 0;">🌦️ ${item.weather}</div>
        <div style="margin-top:4px;"><b>${s.lblStatus}:</b> ${s[item.statusKey] || s.statusRecovering}</div>
        <div><b>${s.lblIssueUpdate}:</b> ${item.issue}</div>
        <div style="margin-top:4px; color:var(--text-muted);"><b>${s.lblImproving}:</b> ${item.recovery}</div>
      </div>`
    )
    .join("");

  const first = dailyGrowthLogs[0];
  const latest = dailyGrowthLogs[dailyGrowthLogs.length - 1];
  const netGain = latest.growthPct - first.growthPct;
  const verdict = netGain >= 10 ? s.positiveWeekend : s.moderateWeekend;

  weekendEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <strong style="color:var(--forest-dark); font-size:0.95rem;">📊 ${s.weekendResultTitle} (${first.day} → ${latest.day})</strong>
      <span class="pill">${s.growthGainLabel}: +${netGain}% (${s.nowLabel} ${latest.growthPct}%)</span>
    </div>
    <p style="margin:6px 0 0; font-size:0.86rem;">${verdict}</p>
  `;
}

function speakWeekendSummary() {
  const text = document.getElementById("weekend-result-box")?.innerText || "";
  speakText(text);
}

// =========================================================
// 5. CROP DOCTOR (ISSUE + GROWTH) + ROI + VOICE CHAT
// =========================================================
async function diagnoseLeafAndGrowth() {
  const s = getStrings();
  const fileInput = document.getElementById("leaf-image-input");
  const outBox = document.getElementById("disease-output");
  const cropName = document.getElementById("scan-crop-name")?.value || farmerProfile.crop;
  const stage = document.getElementById("scan-growth-select")?.value || "Vegetative";

  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    alert(s.selectImageAlert);
    return;
  }

  renderGrowthTimeline(stage);
  outBox.dataset.hasReport = "1";
  outBox.innerHTML = s.analyzingText;

  const reader = new FileReader();
  reader.onload = async () => {
    const base64Img = reader.result.split(",")[1];
    let resultData = {
      disease_name: "Early Leaf Spot / Mild Stress",
      confidence: 88,
      organic_treatment: "Neem oil spray aur infected leaves ki chhantai karein.",
      chemical_dosage: "Recommended fungicide/nutrient spray krushi salah ke anusaar."
    };

    try {
      const res = await fetch("/api/diagnose-disease", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_base64: base64Img, crop: cropName, stage, language: currentLanguage })
      });
      if (res.ok) resultData = await res.json();
    } catch {}

    const growthObj = GROWTH_STAGES.find((g) => g.key === stage) || GROWTH_STAGES[2];
    outBox.innerHTML = `
      <div style="padding:10px; background:var(--gold-soft); border-radius:8px; margin-bottom:8px;">
        <strong>🩺 ${s.issueDetectedLabel}:</strong> ${resultData.disease_name} (${resultData.confidence}%)<br/>
        <strong>🌿 ${s.careTreatmentLabel}:</strong> ${resultData.organic_treatment}<br/>
        <strong>🧪 ${s.dosageNoteLabel}:</strong> ${resultData.chemical_dosage}
      </div>
      <div style="padding:10px; background:var(--sage-soft); border-radius:8px;">
        <strong>📈 ${s.cropGrowthStatusLabel}:</strong> ${cropName} — <b>${growthObj.label}</b> (${growthObj.days})<br/>
        <span>${growthObj.tip}</span>
      </div>
    `;

    const voiceSummary = s.scanVoiceSummary(
      cropName,
      resultData.disease_name,
      resultData.organic_treatment,
      growthObj.label,
      growthObj.days,
      growthObj.tip
    );
    attachVoiceControls(outBox, voiceSummary, true);
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function renderCropProfile() {
  const crop = document.getElementById("explore-crop-select")?.value || "Paddy";
  const box = document.getElementById("crop-profile-box");
  if (box) {
    box.innerHTML = `<p style="margin:0;"><strong>${crop}:</strong> ${CROP_GUIDES[crop] || ""}</p>`;
  }
}

function speakCropProfile() {
  const crop = document.getElementById("explore-crop-select")?.value || "Paddy";
  speakText(CROP_GUIDES[crop] || "");
}

async function calculateROI() {
  const s = getStrings();
  const season = document.getElementById("roi-season")?.value || "Kharif";
  const soil = document.getElementById("roi-soil")?.value || "Alluvial";
  const irrigation = document.getElementById("roi-irrigation")?.value || "Irrigated";
  const acres = parseFloat(document.getElementById("roi-acres")?.value || "2") || 2;
  const outBox = document.getElementById("roi-output");

  const baseCrop = season === "Rabi" ? "Wheat" : season === "Zaid" ? "Moong / Maize" : "Paddy";
  const yieldQ = Math.round(acres * (irrigation === "Irrigated" ? 18 : 12));
  const netProfit = Math.round(yieldQ * 1150);

  outBox.innerHTML = `
    <div style="padding:9px; background:#faf8f2; border:1px solid var(--border-soft); border-radius:8px; font-size:0.86rem;">
      <strong>🌾 ${s.roiResultText(season, soil, baseCrop, acres, yieldQ, netProfit)}</strong>
    </div>
  `;
  attachVoiceControls(outBox, s.roiVoiceSummary(acres, baseCrop, yieldQ, netProfit), true);
}

async function sendChatMessage(customMsg = null) {
  const s = getStrings();
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-messages");
  const message = customMsg || (input ? input.value.trim() : "");
  if (!message) return;
  if (input) input.value = "";

  const uDiv = document.createElement("div");
  uDiv.style.cssText = "background:var(--sage-soft); padding:7px 10px; border-radius:9px; margin:6px 0; text-align:right; font-size:0.86rem;";
  uDiv.innerText = `👨‍🌾 ${message}`;
  chatBox.appendChild(uDiv);

  const bDiv = document.createElement("div");
  bDiv.style.cssText = "background:#fff; padding:8px 11px; border-radius:9px; margin:6px 0; border:1px solid var(--border-soft); font-size:0.86rem;";
  bDiv.innerText = s.chatThinking;
  chatBox.appendChild(bDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId,
        message,
        district: farmerProfile.district,
        language: currentLanguage
      })
    });
    if (!res.ok) throw new Error("No backend");
    const data = await res.json();
    bDiv.innerHTML = `<p style="margin:0;">🤖 ${data.reply}</p>`;
    attachVoiceControls(bDiv, data.reply, true);
  } catch {
    const fallback = s.chatFallback(farmerProfile.district, farmerProfile.crop, message);
    bDiv.innerHTML = `<p style="margin:0;">🤖 ${fallback}</p>`;
    attachVoiceControls(bDiv, fallback, true);
  }
  chatBox.scrollTop = chatBox.scrollHeight;
}

// =========================================================
// 6. INITIAL LOAD
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("fasalsathi_farmer");
  if (saved) {
    try {
      const p = JSON.parse(saved);
      farmerProfile = { ...farmerProfile, ...p };
      if (document.getElementById("login-name") && p.name) document.getElementById("login-name").value = p.name;
      if (document.getElementById("login-district") && p.district) document.getElementById("login-district").value = p.district;
      if (document.getElementById("login-acres") && p.acres) document.getElementById("login-acres").value = p.acres;
      if (document.getElementById("login-crop") && p.crop) document.getElementById("login-crop").value = p.crop;
    } catch {}
  }

  const chatInput = document.getElementById("chat-input");
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendChatMessage();
    });
  }

  setLanguage(currentLanguage);
});