/* ═══════════════════════════════════════
   ÆRPG — Life OS  |  Game Engine v3.0
═══════════════════════════════════════ */

// ── BOSS TEMPLATES ───────────────────────────────────────────────────

const BOSS_TEMPLATES = [
  {
    id: 'procrastination', name: 'Procrastination', avatar: '😴',
    weakness: 'Discipline', color: '#7c3aed',
    taunts: {
      high:  ["You'll never start…", "Tomorrow is always better.", "Why bother today?", "Just five more minutes…"],
      mid:   ["Getting tired already?", "You can't keep this up.", "I'll outlast you.", "Feel yourself slowing?"],
      low:   ["No… this can't be…", "How are you still going?!", "You're… different.", "Maybe tomorrow you'll fail."],
      dying: ["I… was wrong about you.", "Don't stop now…", "This isn't over!", "Impossible…"],
    },
    defeatMsg: "I'll be back… when you're tired.",
  },
  {
    id: 'burnout', name: 'Burnout', avatar: '🔥',
    weakness: 'Body', color: '#dc2626',
    taunts: {
      high:  ["You're already exhausted.", "Rest? What's that?", "You'll break soon.", "I feed on your fatigue."],
      mid:   ["Feel that? That's me winning.", "Slow down, you're fading.", "Your stamina is crumbling.", "Almost there…"],
      low:   ["You should've rested when you could.", "I misjudged your stamina.", "Still going?!", "How?!"],
      dying: ["Balance… I hate balance…", "How do you have energy left?!", "No fair!", "The body adapts…"],
    },
    defeatMsg: "Recovery is your weapon. Wise.",
  },
  {
    id: 'distraction', name: 'Distraction', avatar: '📱',
    weakness: 'Mind', color: '#d97706',
    taunts: {
      high:  ["Ooh, what's that over there?", "Just check your phone real quick.", "One more scroll…", "Did someone message you?"],
      mid:   ["You're losing focus.", "Did you see that notification?", "Almost forgot your task?", "Shiny things…"],
      low:   ["Stay focused! I mean—don't!", "How are you ignoring me?!", "Put the phone DOWN!", "No…"],
      dying: ["Deep work… my nemesis…", "You win this round, focused one.", "Noooo!", "..."],
    },
    defeatMsg: "Focus is a superpower. Wear it well.",
  },
  {
    id: 'self_doubt', name: 'Self-Doubt', avatar: '😰',
    weakness: 'Social', color: '#0891b2',
    taunts: {
      high:  ["You're not good enough.", "Why would you succeed?", "Everyone doubts you.", "Give up gracefully."],
      mid:   ["Impressive… but is it enough?", "One win doesn't make you capable.", "Luck.", "Don't get comfortable."],
      low:   ["Wait… maybe you are capable?", "I'm losing ground…", "Stop believing in yourself!", "This… hurts."],
      dying: ["Confidence is… terrifying.", "You proved me wrong.", "Until next time…", "Fine. You win."],
    },
    defeatMsg: "You were never the problem.",
  },
  {
    id: 'chaos', name: 'Chaos', avatar: '🌀',
    weakness: 'Discipline', color: '#059669',
    taunts: {
      high:  ["Order is an illusion!", "Systems fail. I don't.", "Embrace the entropy!", "Structure is a cage."],
      mid:   ["Still clinging to routines?", "One bad day and you crumble.", "Tick tock…", "Chaos is natural."],
      low:   ["Your discipline is… real?!", "I can't destabilize you!", "IMPOSSIBLE!", "Structure wins?!"],
      dying: ["Systems beat entropy…", "How can routines beat chaos?!", "Ugh.", "Well played, structured one."],
    },
    defeatMsg: "Discipline defeats entropy. Always.",
  },
];

// ── ITEMS ─────────────────────────────────────────────────────────────

const ITEM_DEFS = {
  focus_boost:  { name: 'Focus Boost',  icon: '☕', desc: '+50% XP on next quest',       rarity: 'common'   },
  damage_boost: { name: 'Damage Boost', icon: '⚔️',  desc: '2× damage on next attack',    rarity: 'uncommon' },
  combo_shield: { name: 'Combo Shield', icon: '🛡️',  desc: 'Protects your streak once',   rarity: 'uncommon' },
  xp_surge:     { name: 'XP Surge',    icon: '⚡', desc: '+100% XP for next 3 quests',   rarity: 'rare'     },
  crit_stone:   { name: 'Crit Stone',  icon: '💎', desc: 'Guarantee next critical hit',   rarity: 'rare'     },
};

const ITEM_POOL = [
  'focus_boost','focus_boost','focus_boost',
  'damage_boost','damage_boost',
  'combo_shield','combo_shield',
  'xp_surge',
  'crit_stone',
];

// ── ACHIEVEMENTS ──────────────────────────────────────────────────────

const ACH_DEFS = [
  { id: 'first_blood',  name: 'First Blood',   icon: '⚔️',  desc: 'Complete your first quest',          check: G => G.totalQuests >= 1           },
  { id: 'boss_slayer',  name: 'Boss Slayer',    icon: '💀',  desc: 'Defeat your first boss',             check: G => G.bossesDefeated >= 1        },
  { id: 'veteran',      name: 'Veteran',        icon: '🏆',  desc: 'Defeat 5 bosses',                    check: G => G.bossesDefeated >= 5        },
  { id: 'on_fire',      name: 'On Fire',        icon: '🔥',  desc: '3-day streak',                       check: G => G.streak >= 3                },
  { id: 'legendary',    name: 'Legendary',      icon: '👑',  desc: '7-day streak',                       check: G => G.streak >= 7                },
  { id: 'centurion',    name: 'Centurion',      icon: '🛡️',  desc: 'Complete 100 quests',               check: G => G.totalQuests >= 100         },
  { id: 'speedster',    name: 'Speedster',      icon: '💨',  desc: 'Complete 5 quests in one session',   check: G => G.sessionQuests >= 5         },
  { id: 'mind_master',  name: 'Mind Master',    icon: '🧠',  desc: 'Reach Mind Level 10',                check: G => G.stats.mind.level >= 10     },
  { id: 'iron_will',    name: 'Iron Will',      icon: '💪',  desc: 'Reach Discipline Level 10',          check: G => G.stats.discipline.level >= 10},
  { id: 'collector',    name: 'Collector',      icon: '🎒',  desc: 'Hold 5 items at once',               check: G => G.inventory.length >= 5      },
];

// ── RANDOM EVENTS ─────────────────────────────────────────────────────

const RANDOM_EVENTS = [
  { id: 'lucky_day',    name: 'Lucky Day!',       icon: '🍀', desc: 'Double XP for your next 3 quests!',            eff: { type: 'xp_double',   rem: 3 } },
  { id: 'boss_rage',    name: 'Boss Rage!',        icon: '😡', desc: 'The boss resists — 50% damage for 2 quests.', eff: { type: 'boss_rage',   rem: 2 } },
  { id: 'crit_window',  name: 'Critical Window',   icon: '🎯', desc: 'Triple crit chance for your next 5 quests!',  eff: { type: 'triple_crit', rem: 5 } },
  { id: 'xp_fountain',  name: 'XP Fountain',       icon: '✨', desc: '+150 XP bonus spread across all stats!',       eff: { type: 'bonus_xp',    amt: 150 } },
  { id: 'momentum_wave',name: 'Momentum Wave!',    icon: '🌊', desc: 'Full momentum! Instant ×5 bonus activated.',   eff: { type: 'full_momentum' } },
];

// ── RANDOM QUESTS ─────────────────────────────────────────────────────

const RANDOM_QUESTS = [
  { name: 'Drink 2L of water',         stat: 'body',       energy: 'low',    xp: 25,  type: 'micro'  },
  { name: 'Do 20 push-ups',            stat: 'body',       energy: 'medium', xp: 40,  type: 'micro'  },
  { name: 'Read for 20 mins',          stat: 'mind',       energy: 'low',    xp: 35,  type: 'skill'  },
  { name: 'Write 200 words',           stat: 'mind',       energy: 'medium', xp: 50,  type: 'skill'  },
  { name: 'Text an old friend',        stat: 'social',     energy: 'low',    xp: 30,  type: 'social' },
  { name: 'Meditate 10 mins',          stat: 'discipline', energy: 'low',    xp: 35,  type: 'micro'  },
  { name: 'Clean your desk',           stat: 'discipline', energy: 'low',    xp: 20,  type: 'micro'  },
  { name: 'No phone for 1 hour',       stat: 'discipline', energy: 'medium', xp: 60,  type: 'skill'  },
  { name: 'Cook a real meal',          stat: 'body',       energy: 'medium', xp: 45,  type: 'micro'  },
  { name: '30 min walk outside',       stat: 'body',       energy: 'medium', xp: 50,  type: 'micro'  },
  { name: 'Call someone you care about',stat:'social',     energy: 'low',    xp: 40,  type: 'social' },
  { name: 'Plan tomorrow',             stat: 'discipline', energy: 'low',    xp: 25,  type: 'micro'  },
  { name: 'Learn something new',       stat: 'mind',       energy: 'low',    xp: 30,  type: 'skill'  },
  { name: 'Compliment someone',        stat: 'social',     energy: 'low',    xp: 20,  type: 'social' },
  { name: 'Cold shower',               stat: 'discipline', energy: 'high',   xp: 70,  type: 'skill'  },
  { name: '10 min journaling',         stat: 'mind',       energy: 'low',    xp: 30,  type: 'skill'  },
  { name: 'Stretch for 10 mins',       stat: 'body',       energy: 'low',    xp: 20,  type: 'micro'  },
  { name: 'Study for 45 mins',         stat: 'mind',       energy: 'high',   xp: 80,  type: 'skill'  },
  { name: 'Attend a social event',     stat: 'social',     energy: 'high',   xp: 90,  type: 'social' },
  { name: 'Morning routine, no skips', stat: 'discipline', energy: 'medium', xp: 55,  type: 'skill'  },
];

// ── RANKS ──────────────────────────────────────────────────────────────

const RANKS = [
  { min: 1,  title: 'Novice',      avatar: '🌱' },
  { min: 5,  title: 'Apprentice',  avatar: '⚔️' },
  { min: 10, title: 'Journeyman',  avatar: '🛡️' },
  { min: 15, title: 'Adept',       avatar: '🔮' },
  { min: 20, title: 'Expert',      avatar: '🏆' },
  { min: 30, title: 'Master',      avatar: '👑' },
  { min: 40, title: 'Grandmaster', avatar: '🌟' },
  { min: 50, title: 'Architect',   avatar: '✨' },
];

const FLAVOR_TEXTS = [
  "Every habit is a strike against the boss.",
  "Consistency defeats any enemy.",
  "Small wins compound into victories.",
  "The boss fears your discipline.",
  "Show up. The rest follows.",
  "Champions are built in the mundane.",
  "Progress over perfection, always.",
  "Today's effort is tomorrow's power.",
];

const STAT_CFG = [
  { key: 'mind',       label: 'Mind',       icon: '◈', color: 'var(--mind)'   },
  { key: 'body',       label: 'Body',       icon: '◉', color: 'var(--bodyc)'  },
  { key: 'social',     label: 'Social',     icon: '◎', color: 'var(--social)' },
  { key: 'discipline', label: 'Discipline', icon: '◆', color: 'var(--disc)'   },
];

const STAT_ICONS = { mind: '◈', body: '◉', social: '◎', discipline: '◆' };
const ENERGY_ICONS = { high: '⚡', medium: '◑', low: '◌' };
const TYPE_ICONS   = { micro: '🔹', skill: '⭐', social: '💬' };

const DEFAULT_REWARDS = [
  { id: 'r1', name: 'Coffee Break',    icon: '☕', cost: 50  },
  { id: 'r2', name: 'Netflix Hour',    icon: '🎬', cost: 150 },
  { id: 'r3', name: 'Gaming Session',  icon: '🎮', cost: 300 },
  { id: 'r4', name: 'Favourite Snack', icon: '🍕', cost: 100 },
];

// ── DEFAULT STATE ─────────────────────────────────────────────────────

const DS = {
  soundOn: false,
  lowEnergy: false,
  energyFilter: 'all',
  typeFilter: 'all',
  mainQuests: [],
  sideQuests: [],
  rewards: DEFAULT_REWARDS,
  stats: {
    mind:       { xp: 0, level: 1 },
    body:       { xp: 0, level: 1 },
    social:     { xp: 0, level: 1 },
    discipline: { xp: 0, level: 1 },
  },
  streak: 0,
  lastActiveDate: '',
  totalXP: 0,
  multiplier: 1.0,
  boss: null,
  bossesDefeated: 0,
  totalQuests: 0,
  sessionQuests: 0,
  sessionDmg: 0,
  sessionXP: 0,
  inventory: [],
  achievements: [],
  activeEffects: [],
  momentum: 0,
  lastQuestTime: 0,
};

// ── STATE ─────────────────────────────────────────────────────────────

let G = { ...DS };
let _editingRewardId = null;
let _questKind = 'main';
let _activeItemId = null;
let _momentumTimer = null;

function save() { try { localStorage.setItem('aerPG_v3', JSON.stringify(G)); } catch(e) {} }

function load() {
  try {
    const raw = localStorage.getItem('aerPG_v3');
    if (raw) G = { ...DS, ...JSON.parse(raw) };
    G.stats = { ...DS.stats, ...G.stats };
    G.rewards = G.rewards?.length ? G.rewards : DEFAULT_REWARDS;
    G.inventory = G.inventory || [];
    G.achievements = G.achievements || [];
    G.activeEffects = G.activeEffects || [];
  } catch(e) {}
}

// ── DAILY RESET ───────────────────────────────────────────────────────

function checkDailyReset() {
  const today = new Date().toDateString();
  if (G.lastActiveDate === today) return;

  if (G.lastActiveDate) {
    const last = new Date(G.lastActiveDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (last.toDateString() === yesterday.toDateString()) {
      G.streak++;
      G.multiplier = Math.min(3.0, 1.0 + G.streak * 0.1);
    } else {
      // check combo shield
      const shield = G.inventory.findIndex(i => i.type === 'combo_shield');
      if (shield !== -1) {
        G.inventory.splice(shield, 1);
        toast('🛡️ Combo Shield activated — streak protected!');
      } else {
        G.multiplier = 1.0;
        toast('Multiplier reset. Keep showing up!');
      }
    }

    G.mainQuests.forEach(q => q.done = false);
    G.sideQuests.forEach(q => q.done = false);
    G.sessionQuests = 0;
    G.sessionDmg = 0;
    G.sessionXP = 0;
  }

  if (!G.boss) G.boss = spawnBoss(G.bossesDefeated);

  G.lastActiveDate = today;
  save();
}

// ── BOSS SYSTEM ───────────────────────────────────────────────────────

function spawnBoss(defeated) {
  const tmpl = BOSS_TEMPLATES[defeated % BOSS_TEMPLATES.length];
  const hp = 300 + defeated * 200;
  return {
    ...tmpl,
    level: defeated + 1,
    maxHP: hp,
    hp: hp,
    enraged: false,
    tauntPhase: 'high',
  };
}

function getBossHPPercent() {
  if (!G.boss) return 100;
  return Math.max(0, (G.boss.hp / G.boss.maxHP) * 100);
}

function updateBossTauntPhase() {
  const pct = getBossHPPercent();
  let phase = 'high';
  if (pct <= 10) phase = 'dying';
  else if (pct <= 25) phase = 'low';
  else if (pct <= 60) phase = 'mid';
  if (phase !== G.boss.tauntPhase) {
    G.boss.tauntPhase = phase;
    if (pct <= 25 && !G.boss.enraged) {
      G.boss.enraged = true;
      document.getElementById('boss-arena').classList.add('enraged');
      document.getElementById('boss-status').textContent = 'ENRAGED!';
      toast(`⚠️ ${G.boss.name} is enraged!`);
    }
  }
  const taunts = G.boss.taunts[phase];
  document.getElementById('boss-taunt').textContent = taunts[Math.floor(Math.random() * taunts.length)];
}

function applyDamage(damage, isCrit) {
  if (!G.boss) return;

  // Check boss rage effect
  const rageEff = G.activeEffects.find(e => e.type === 'boss_rage');
  if (rageEff) {
    damage = Math.floor(damage * 0.5);
    rageEff.rem--;
    if (rageEff.rem <= 0) removeEffect('boss_rage');
  }

  G.boss.hp = Math.max(0, G.boss.hp - damage);
  G.sessionDmg += damage;

  showDamageFloat(damage, isCrit);

  // HP bar
  const pct = getBossHPPercent();
  document.getElementById('boss-hp-fill').style.width = pct + '%';
  document.getElementById('boss-hp-nums').textContent =
    `${Math.round(G.boss.hp).toLocaleString()} / ${G.boss.maxHP.toLocaleString()}`;

  // Arena hit effect
  const arena = document.getElementById('boss-arena');
  arena.classList.remove('hit');
  void arena.offsetWidth;
  arena.classList.add('hit');
  setTimeout(() => arena.classList.remove('hit'), 360);

  updateBossTauntPhase();

  if (G.boss.hp <= 0) {
    setTimeout(triggerBossDefeat, 600);
  }

  save();
}

function triggerBossDefeat() {
  const boss = G.boss;
  const bonusXP = boss.level * 200;

  // Bonus XP on defeat
  Object.keys(G.stats).forEach(s => addXP(s, Math.floor(bonusXP / 4)));

  G.bossesDefeated++;

  // Show overlay
  document.getElementById('defeat-icon').textContent = '💀';
  document.getElementById('defeat-boss-name').textContent = boss.name;
  document.getElementById('defeat-quote').textContent = `"${boss.defeatMsg}"`;
  document.getElementById('defeat-reward').textContent = `+${bonusXP} XP Bonus!`;
  document.getElementById('defeat-overlay').classList.add('show');

  playSound('boss_defeat');

  // Drop guaranteed item on boss kill
  giveItem(ITEM_POOL[Math.floor(Math.random() * ITEM_POOL.length)]);

  setTimeout(() => {
    document.getElementById('defeat-overlay').classList.remove('show');
    G.boss = spawnBoss(G.bossesDefeated);
    document.getElementById('boss-arena').classList.remove('enraged');
    renderBoss();
    checkAchievements();
    save();
    render();
    toast(`⚔️ New boss appeared: ${G.boss.name} (Lv.${G.boss.level})!`);
  }, 4000);
}

// ── XP & LEVELS ───────────────────────────────────────────────────────

function xpForLevel(lv) { return lv * 100; }

function addXP(stat, amount) {
  let earned = Math.round(amount * G.multiplier);

  // XP double event
  const dbl = G.activeEffects.find(e => e.type === 'xp_double');
  if (dbl) { earned *= 2; dbl.rem--; if (dbl.rem <= 0) removeEffect('xp_double'); }

  // XP surge item
  const surge = G.activeEffects.find(e => e.type === 'xp_surge');
  if (surge) { earned *= 2; surge.rem--; if (surge.rem <= 0) removeEffect('xp_surge'); }

  G.stats[stat].xp += earned;
  G.totalXP += earned;
  G.sessionXP += earned;

  while (G.stats[stat].xp >= xpForLevel(G.stats[stat].level)) {
    G.stats[stat].xp -= xpForLevel(G.stats[stat].level);
    G.stats[stat].level++;
    showLevelUp(stat, G.stats[stat].level);
  }

  return earned;
}

// ── MOMENTUM ──────────────────────────────────────────────────────────

function updateMomentum() {
  const now = Date.now();
  const elapsed = now - G.lastQuestTime;

  if (elapsed < 300000) { // within 5 minutes
    G.momentum = Math.min(5, G.momentum + 1);
  } else {
    G.momentum = 1;
  }

  G.lastQuestTime = now;

  // decay timer
  if (_momentumTimer) clearTimeout(_momentumTimer);
  _momentumTimer = setTimeout(() => {
    G.momentum = Math.max(0, G.momentum - 1);
    renderMomentum();
    save();
  }, 300000);

  renderMomentum();
}

// ── ACTIVE EFFECTS ────────────────────────────────────────────────────

function hasEffect(type) { return G.activeEffects.some(e => e.type === type); }

function removeEffect(type) {
  G.activeEffects = G.activeEffects.filter(e => e.type !== type);
  renderEffects();
}

function addEffect(eff) {
  const existing = G.activeEffects.find(e => e.type === eff.type);
  if (existing) {
    if (eff.rem !== undefined) existing.rem = eff.rem;
  } else {
    G.activeEffects.push({ ...eff });
  }
  renderEffects();
}

// ── DAMAGE CALCULATION ────────────────────────────────────────────────

function calcDamage(baseXP) {
  let damage = baseXP;

  // Momentum bonus (+10% per stack)
  damage = Math.round(damage * (1 + G.momentum * 0.1));

  // Damage boost item
  if (hasEffect('dmg_2x')) { damage *= 2; removeEffect('dmg_2x'); }

  // Critical hit
  let critChance = 0.15;
  if (hasEffect('triple_crit')) {
    critChance = 0.45;
    const eff = G.activeEffects.find(e => e.type === 'triple_crit');
    eff.rem--; if (eff.rem <= 0) removeEffect('triple_crit');
  }
  const isCrit = hasEffect('next_crit') || Math.random() < critChance;
  if (isCrit) { damage *= 2; removeEffect('next_crit'); }

  return { damage: Math.round(damage), isCrit };
}

// ── ITEMS ─────────────────────────────────────────────────────────────

function giveItem(type) {
  if (G.inventory.length >= 6) return;
  if (!ITEM_DEFS[type]) return;
  G.inventory.push({ id: 'i' + Date.now(), type });
  toast(`🎁 Item dropped: ${ITEM_DEFS[type].name}!`);
  renderInventory();
  checkAchievements();
}

function tryItemDrop() {
  if (Math.random() > 0.12 || G.inventory.length >= 6) return;
  const type = ITEM_POOL[Math.floor(Math.random() * ITEM_POOL.length)];
  giveItem(type);
}

function activateItem(invId) {
  const idx = G.inventory.findIndex(i => i.id === invId);
  if (idx === -1) return;
  const item = G.inventory[idx];
  const def = ITEM_DEFS[item.type];

  switch (item.type) {
    case 'focus_boost':  addEffect({ type: 'xp_boost_50', rem: 1 }); break;
    case 'damage_boost': addEffect({ type: 'dmg_2x', rem: 1 }); break;
    case 'combo_shield': addEffect({ type: 'combo_shield', rem: 1 }); break;
    case 'xp_surge':     addEffect({ type: 'xp_surge', rem: 3 }); break;
    case 'crit_stone':   addEffect({ type: 'next_crit', rem: 1 }); break;
  }

  G.inventory.splice(idx, 1);
  closeModal('item-modal');
  toast(`✅ ${def.name} activated!`);
  playSound('item');
  save();
  renderInventory();
  renderEffects();
}

// ── RANDOM EVENTS ─────────────────────────────────────────────────────

function tryRandomEvent() {
  if (Math.random() > 0.10) return;
  const ev = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];

  document.getElementById('event-icon').textContent = ev.icon;
  document.getElementById('event-name').textContent = ev.name;
  document.getElementById('event-desc').textContent = ev.desc;

  _pendingEvent = ev;
  openModal('event-modal');
}

let _pendingEvent = null;

function applyEventEffect(ev) {
  const eff = ev.eff;
  if (eff.type === 'bonus_xp') {
    STAT_CFG.forEach(s => addXP(s.key, Math.floor(eff.amt / 4)));
    showXPFloat(`+${eff.amt} XP!`);
    render();
  } else if (eff.type === 'full_momentum') {
    G.momentum = 5;
    renderMomentum();
  } else {
    addEffect({ type: eff.type, rem: eff.rem });
  }
  save();
}

// ── ACHIEVEMENTS ──────────────────────────────────────────────────────

function checkAchievements() {
  ACH_DEFS.forEach(def => {
    if (!G.achievements.includes(def.id) && def.check(G)) {
      G.achievements.push(def.id);
      toast(`🏅 Achievement unlocked: ${def.name}!`);
      playSound('achievement');
    }
  });
  renderAchievements();
}

// ── QUEST ACTIONS ─────────────────────────────────────────────────────

function completeQuest(id, kind) {
  const list = kind === 'main' ? G.mainQuests : G.sideQuests;
  const q = list.find(q => q.id === id);
  if (!q || q.done) return;

  q.done = true;
  G.totalQuests++;
  G.sessionQuests++;

  const { damage, isCrit } = calcDamage(q.xp);

  // XP
  const gained = addXP(q.stat, q.xp);
  showXPFloat(`+${gained} XP`);

  // Damage boss
  if (G.boss) applyDamage(damage, isCrit);

  if (isCrit) {
    const flash = document.createElement('div');
    flash.className = 'crit-flash-overlay';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
    toast(`⚡ CRITICAL HIT! ${damage} damage!`);
  }

  // Momentum
  updateMomentum();

  // Item drop
  tryItemDrop();

  // Random event (not on crit to avoid popup spam)
  if (!isCrit) tryRandomEvent();

  // Reward popup
  if (q.reward) setTimeout(() => showRewardPopup(q.reward, '🎁'), 900);

  playSound('complete');
  checkAchievements();
  save();
  render();
}

function deleteQuest(id, kind) {
  if (kind === 'main') G.mainQuests = G.mainQuests.filter(q => q.id !== id);
  else G.sideQuests = G.sideQuests.filter(q => q.id !== id);
  save();
  renderQuests(kind);
}

function addQuest(kind) {
  const name   = document.getElementById('q-name').value.trim();
  const desc   = document.getElementById('q-desc').value.trim();
  const stat   = document.getElementById('q-stat').value;
  const energy = document.getElementById('q-energy').value;
  const xp     = parseInt(document.getElementById('q-xp').value);
  const type   = document.getElementById('q-type').value;
  const reward = document.getElementById('q-reward').value.trim();

  if (!name) { document.getElementById('q-name').focus(); return; }

  const q = {
    id: Date.now().toString(),
    name, desc, stat, energy, xp, type, reward,
    done: false, kind,
  };

  if (kind === 'main') G.mainQuests.push(q);
  else G.sideQuests.push(q);

  closeModal('quest-modal');
  save();
  renderQuests(kind);
  toast(`Quest added: ${name}`);
}

function generateSideQuest() {
  const q = RANDOM_QUESTS[Math.floor(Math.random() * RANDOM_QUESTS.length)];
  if (G.sideQuests.find(sq => sq.name === q.name && !sq.done)) {
    toast('Already in your list! Try again.'); return;
  }
  G.sideQuests.push({
    id: Date.now().toString(),
    name: q.name, desc: '', stat: q.stat,
    energy: q.energy, xp: q.xp, type: q.type,
    reward: '', done: false, kind: 'side',
  });
  save();
  renderQuests('side');
  toast(`⚄ Generated: ${q.name}`);
  playSound('generate');
}

// ── REWARDS ───────────────────────────────────────────────────────────

function openRewardModal(id = null) {
  _editingRewardId = id;
  if (id) {
    const r = G.rewards.find(r => r.id === id);
    if (!r) return;
    document.getElementById('r-name').value = r.name;
    document.getElementById('r-icon').value = r.icon;
    document.getElementById('r-cost').value = r.cost;
    document.getElementById('reward-modal-title').textContent = 'Edit Reward';
    document.getElementById('reward-delete').style.display = 'block';
    document.getElementById('reward-confirm').textContent = 'Save';
  } else {
    document.getElementById('r-name').value = '';
    document.getElementById('r-icon').value = '';
    document.getElementById('r-cost').value = '';
    document.getElementById('reward-modal-title').textContent = 'New Reward';
    document.getElementById('reward-delete').style.display = 'none';
    document.getElementById('reward-confirm').textContent = 'Add';
  }
  openModal('reward-modal');
}

function saveReward() {
  const name = document.getElementById('r-name').value.trim();
  const icon = document.getElementById('r-icon').value.trim() || '🎁';
  const cost = parseInt(document.getElementById('r-cost').value) || 100;
  if (!name) { document.getElementById('r-name').focus(); return; }

  if (_editingRewardId) {
    const r = G.rewards.find(r => r.id === _editingRewardId);
    if (r) { r.name = name; r.icon = icon; r.cost = cost; }
  } else {
    G.rewards.push({ id: 'r' + Date.now(), name, icon, cost });
  }

  closeModal('reward-modal');
  save();
  renderRewards();
}

function deleteReward() {
  if (!_editingRewardId) return;
  G.rewards = G.rewards.filter(r => r.id !== _editingRewardId);
  closeModal('reward-modal');
  save();
  renderRewards();
}

function triggerReward(id) {
  const r = G.rewards.find(r => r.id === id);
  if (!r || G.totalXP < r.cost) return;
  showRewardPopup(r.name, r.icon);
}

function showRewardPopup(name, icon) {
  toast(`🎁 Reward unlocked: ${name}!`);
  playSound('reward');
}

// ── VISUAL FEEDBACK ───────────────────────────────────────────────────

function showXPFloat(text) {
  const el = document.getElementById('xp-float');
  el.textContent = text;
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
  setTimeout(() => el.classList.remove('pop'), 1500);
}

function showDamageFloat(damage, isCrit) {
  const track = document.getElementById('boss-hp-track');
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'damage-float' + (isCrit ? ' is-crit' : '');
  el.textContent = (isCrit ? '⚡ ' : '-') + damage.toLocaleString();
  const x = rect.left + rect.width * (0.25 + Math.random() * 0.5);
  const y = rect.top - 5;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function showLevelUp(stat, level) {
  const splash = document.getElementById('levelup-splash');
  document.getElementById('levelup-stat').textContent = cap(stat);
  document.getElementById('levelup-lv').textContent = `Level ${level}`;
  splash.classList.add('show');
  playSound('levelup');
  setTimeout(() => splash.classList.remove('show'), 2500);
}

function toast(msg, duration = 2800) {
  const rack = document.getElementById('toast-rack');
  const div = document.createElement('div');
  div.className = 'toast';
  div.textContent = msg;
  rack.appendChild(div);
  requestAnimationFrame(() => requestAnimationFrame(() => div.classList.add('show')));
  setTimeout(() => { div.classList.remove('show'); setTimeout(() => div.remove(), 300); }, duration);
}

// ── SOUND ─────────────────────────────────────────────────────────────

let _audioCtx = null;

function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}

function beep(freq, dur, type = 'sine', gain = 0.12) {
  if (!G.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gn  = ctx.createGain();
    osc.connect(gn); gn.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gn.gain.setValueAtTime(gain, ctx.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(); osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}

function playSound(kind) {
  if (!G.soundOn) return;
  if (kind === 'complete')      { beep(440, 0.09); setTimeout(() => beep(660, 0.14), 90); }
  if (kind === 'levelup')       { [523,659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.18, 'triangle', 0.1), i*90)); }
  if (kind === 'boss_defeat')   { [784,1047,1319,1568].forEach((f,i) => setTimeout(() => beep(f, 0.22, 'triangle', 0.1), i*100)); }
  if (kind === 'generate')      { beep(330, 0.07, 'square', 0.07); }
  if (kind === 'reward')        { beep(880, 0.1); setTimeout(() => beep(1100, 0.16), 110); }
  if (kind === 'item')          { beep(600, 0.1); setTimeout(() => beep(900, 0.12), 100); }
  if (kind === 'achievement')   { [659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.15, 'triangle', 0.1), i*80)); }
}

// ── MODALS ────────────────────────────────────────────────────────────

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function openQuestModal(kind) {
  _questKind = kind;
  document.getElementById('quest-modal-title').textContent = kind === 'main' ? 'New Main Quest' : 'New Side Quest';
  document.getElementById('q-name').value   = '';
  document.getElementById('q-desc').value   = '';
  document.getElementById('q-reward').value = '';
  openModal('quest-modal');
}

// ── MOBILE SIDEBAR ────────────────────────────────────────────────────

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ── RENDER ────────────────────────────────────────────────────────────

function render() {
  renderCharacter();
  renderStats();
  renderMomentum();
  renderMultiplier();
  renderBoss();
  renderQuests('main');
  renderQuests('side');
  renderRewards();
  renderInventory();
  renderAchievements();
  renderEffects();
  renderSession();
  renderMobileHeader();
}

function renderMobileHeader() {
  const mhStreak = document.getElementById('mh-streak');
  const mhXp = document.getElementById('mh-xp');
  if (mhStreak) mhStreak.textContent = G.streak;
  if (mhXp) mhXp.textContent = G.totalXP.toLocaleString();
}

function renderCharacter() {
  const totalLv = Object.values(G.stats).reduce((s, st) => s + st.level, 0);
  let rank = RANKS[0];
  for (const r of RANKS) { if (totalLv >= r.min) rank = r; }

  document.getElementById('char-avatar').textContent = rank.avatar;
  document.getElementById('char-title').textContent = rank.title;
  document.getElementById('streak-count').textContent = G.streak;
  document.getElementById('total-xp').textContent = G.totalXP.toLocaleString();
}

function renderStats() {
  document.getElementById('stats-block').innerHTML = STAT_CFG.map(sc => {
    const st = G.stats[sc.key];
    const max = xpForLevel(st.level);
    const pct = Math.round((st.xp / max) * 100);
    return `
      <div class="stat-row">
        <div class="stat-head">
          <span class="stat-ico" style="color:${sc.color}">${sc.icon}</span>
          <span class="stat-lbl">${sc.label}</span>
          <span class="stat-lv">Lv.${st.level}</span>
        </div>
        <div class="stat-track">
          <div class="stat-fill" style="width:${pct}%;background:${sc.color}"></div>
        </div>
        <div class="stat-xp-txt">${st.xp} / ${max}</div>
      </div>`;
  }).join('');
}

function renderMomentum() {
  const pct = (G.momentum / 5) * 100;
  document.getElementById('momentum-fill').style.width = pct + '%';
  document.getElementById('momentum-count').textContent = `×${G.momentum}`;
  const bonus = G.momentum * 10;
  document.getElementById('momentum-hint').textContent =
    G.momentum > 0 ? `+${bonus}% XP & damage bonus active!` : 'Complete quests quickly to build momentum!';
}

function renderMultiplier() {
  document.getElementById('mult-val').textContent = G.multiplier.toFixed(1) + '×';
}

function renderBoss() {
  if (!G.boss) return;
  const b = G.boss;
  const pct = getBossHPPercent();

  document.getElementById('boss-portrait').textContent = b.avatar;
  document.getElementById('boss-name').textContent = b.name;
  document.getElementById('boss-lv').textContent = `LV ${b.level}`;
  document.getElementById('boss-hp-fill').style.width = pct + '%';
  document.getElementById('boss-hp-nums').textContent =
    `${Math.round(b.hp).toLocaleString()} / ${b.maxHP.toLocaleString()}`;
  document.getElementById('boss-weakness').textContent = b.weakness;
  document.getElementById('boss-status').textContent = b.enraged ? 'ENRAGED!' : 'Normal';

  document.getElementById('boss-glow').style.background =
    `radial-gradient(circle, ${b.color}22 0%, transparent 70%)`;
  const ring = document.getElementById('boss-ring');
  if (ring) { ring.style.borderColor = b.color; ring.style.boxShadow = `0 0 20px ${b.color}44`; }

  // Taunt
  const taunts = b.taunts[b.tauntPhase || 'high'];
  document.getElementById('boss-taunt').textContent = taunts[Math.floor(Math.random() * taunts.length)];

  if (b.enraged) document.getElementById('boss-arena').classList.add('enraged');
}

function renderQuests(kind) {
  const quests = kind === 'main' ? G.mainQuests : G.sideQuests;
  const listEl = document.getElementById(`${kind}-quest-list`);
  const ef = G.energyFilter;
  const tf = G.typeFilter;

  if (!quests.length) {
    listEl.innerHTML = `<div class="empty-state">No ${kind} quests yet. Add one to begin!</div>`;
    if (kind === 'main') document.getElementById('mq-count').textContent = '0 / 3';
    return;
  }

  let done = 0;
  listEl.innerHTML = quests.map(q => {
    if (q.done) done++;
    const hidden =
      (ef !== 'all' && q.energy !== ef) ||
      (kind === 'side' && tf !== 'all' && q.type !== tf) ||
      (G.lowEnergy && q.energy !== 'low');
    const statTag = `tag-${q.stat === 'body' ? 'body' : q.stat}`;
    const ico = TYPE_ICONS[q.type] || STAT_ICONS[q.stat];
    return `
      <div class="quest-card ${q.done ? 'done' : ''} ${hidden ? 'filtered' : ''}" data-energy="${q.energy}">
        <div class="quest-ico-wrap">${ico}</div>
        <div class="quest-body">
          <div class="quest-name">${q.name}</div>
          ${q.desc ? `<div class="quest-desc">${q.desc}</div>` : ''}
          <div class="quest-tags">
            <span class="q-tag tag-xp">+${q.xp} XP</span>
            <span class="q-tag ${statTag}">${STAT_ICONS[q.stat]} ${cap(q.stat)}</span>
            <span class="q-tag tag-${q.energy}">${ENERGY_ICONS[q.energy]} ${cap(q.energy)}</span>
            ${q.reward ? `<span class="q-tag tag-reward">🎁 ${q.reward}</span>` : ''}
          </div>
        </div>
        <div class="quest-actions">
          <button class="complete-btn" data-id="${q.id}" data-kind="${kind}" ${q.done ? 'disabled' : ''}>
            ${q.done ? '✓ Done' : 'Attack →'}
          </button>
          <button class="delete-btn" data-id="${q.id}" data-kind="${kind}">✕</button>
        </div>
      </div>`;
  }).join('');

  if (kind === 'main') {
    document.getElementById('mq-count').textContent = quests.length ? `${done} done` : '';
  }

  listEl.querySelectorAll('.complete-btn').forEach(btn => {
    btn.addEventListener('click', () => completeQuest(btn.dataset.id, btn.dataset.kind));
  });
  listEl.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteQuest(btn.dataset.id, btn.dataset.kind));
  });
}

function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  const slots = [];

  for (let i = 0; i < 6; i++) {
    const item = G.inventory[i];
    if (item) {
      const def = ITEM_DEFS[item.type];
      slots.push(`
        <div class="inv-slot filled" data-id="${item.id}" title="${def.name}: ${def.desc}">
          <span class="inv-slot-icon">${def.icon}</span>
          <span class="inv-slot-name">${def.name}</span>
          <span class="inv-slot-rare rare-${def.rarity}"></span>
        </div>`);
    } else {
      slots.push(`<div class="inv-slot">empty</div>`);
    }
  }

  grid.innerHTML = slots.join('');
  document.getElementById('inv-count').textContent = `${G.inventory.length}/6`;

  grid.querySelectorAll('.inv-slot.filled').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      const item = G.inventory.find(i => i.id === id);
      if (!item) return;
      const def = ITEM_DEFS[item.type];
      _activeItemId = id;
      document.getElementById('item-popup-icon').textContent = def.icon;
      document.getElementById('item-popup-name').textContent = def.name;
      document.getElementById('item-popup-desc').textContent = def.desc;
      openModal('item-modal');
    });
  });
}

function renderAchievements() {
  const grid = document.getElementById('ach-grid');
  grid.innerHTML = ACH_DEFS.map(def => {
    const earned = G.achievements.includes(def.id);
    return `
      <div class="ach-badge ${earned ? 'earned' : 'locked'}" title="${def.name}">
        ${def.icon}
        <div class="ach-tip">${def.name}: ${def.desc}</div>
      </div>`;
  }).join('');
  document.getElementById('ach-count').textContent = `${G.achievements.length}/10`;
}

function renderEffects() {
  const row = document.getElementById('effects-row');
  if (!G.activeEffects.length) { row.innerHTML = ''; return; }
  row.innerHTML = G.activeEffects.map(e => {
    const labels = {
      xp_double: `2× XP (${e.rem} left)`,
      boss_rage: `Boss Rage (${e.rem} left)`,
      triple_crit: `3× Crit (${e.rem} left)`,
      xp_surge: `XP Surge (${e.rem} left)`,
      dmg_2x: '2× Dmg ready',
      next_crit: 'Crit ready',
      combo_shield: 'Streak shield',
      xp_boost_50: '+50% XP ready',
    };
    return `<span class="effect-chip">${labels[e.type] || e.type}</span>`;
  }).join('');
}

function renderRewards() {
  const grid = document.getElementById('reward-grid');
  if (!G.rewards.length) {
    grid.innerHTML = '<div class="empty-state">No rewards defined yet.</div>'; return;
  }
  grid.innerHTML = G.rewards.map(r => {
    const locked = G.totalXP < r.cost;
    return `
      <div class="reward-card ${locked ? 'locked' : 'unlocked'}" data-id="${r.id}">
        <button class="reward-edit-btn" data-id="${r.id}">✏</button>
        <div class="reward-icon">${r.icon}</div>
        <div class="reward-name">${r.name}</div>
        <div class="reward-cost">${r.cost.toLocaleString()} XP</div>
        <div class="reward-lock">${locked ? '🔒 Locked' : '✓ Claim'}</div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.reward-edit-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openRewardModal(btn.dataset.id); });
  });
  grid.querySelectorAll('.reward-card.unlocked').forEach(card => {
    card.addEventListener('click', () => triggerReward(card.dataset.id));
  });
}

function renderSession() {
  document.getElementById('ses-quests').textContent = G.sessionQuests;
  document.getElementById('ses-dmg').textContent = G.sessionDmg.toLocaleString();
  document.getElementById('ses-xp').textContent = G.sessionXP.toLocaleString();
}

// ── UTILS ─────────────────────────────────────────────────────────────

function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

// ── INIT ──────────────────────────────────────────────────────────────

function init() {
  load();
  checkDailyReset();
  if (!G.boss) G.boss = spawnBoss(G.bossesDefeated);

  // Quest buttons
  document.getElementById('add-main-btn').addEventListener('click', () => openQuestModal('main'));
  document.getElementById('add-side-btn').addEventListener('click', () => openQuestModal('side'));
  document.getElementById('quest-confirm').addEventListener('click', () => addQuest(_questKind));
  document.getElementById('quest-cancel').addEventListener('click', () => closeModal('quest-modal'));
  document.getElementById('quest-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('quest-modal'); });
  document.getElementById('q-name').addEventListener('keydown', e => { if (e.key === 'Enter') addQuest(_questKind); });

  // Generate
  document.getElementById('gen-btn').addEventListener('click', generateSideQuest);

  // Reward buttons
  document.getElementById('add-reward-btn').addEventListener('click', () => openRewardModal());
  document.getElementById('reward-confirm').addEventListener('click', saveReward);
  document.getElementById('reward-cancel').addEventListener('click', () => closeModal('reward-modal'));
  document.getElementById('reward-delete').addEventListener('click', deleteReward);
  document.getElementById('reward-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('reward-modal'); });

  // Item modal
  document.getElementById('item-use').addEventListener('click', () => activateItem(_activeItemId));
  document.getElementById('item-cancel').addEventListener('click', () => closeModal('item-modal'));

  // Random event
  document.getElementById('event-ok').addEventListener('click', () => {
    if (_pendingEvent) applyEventEffect(_pendingEvent);
    _pendingEvent = null;
    closeModal('event-modal');
  });

  // Level up dismiss
  document.getElementById('levelup-splash').addEventListener('click', () => {
    document.getElementById('levelup-splash').classList.remove('show');
  });

  // Energy filter
  document.querySelectorAll('.ep-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      G.energyFilter = btn.dataset.energy;
      document.querySelectorAll('.ep-btn').forEach(b => b.classList.toggle('active', b.dataset.energy === G.energyFilter));
      renderQuests('main'); renderQuests('side');
    });
    btn.classList.toggle('active', btn.dataset.energy === G.energyFilter);
  });

  // Type filter
  document.querySelectorAll('.tf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      G.typeFilter = btn.dataset.type;
      document.querySelectorAll('.tf-btn').forEach(b => b.classList.toggle('active', b.dataset.type === G.typeFilter));
      renderQuests('side');
    });
    btn.classList.toggle('active', btn.dataset.type === G.typeFilter);
  });

  // Sound toggle
  const sndBtn = document.getElementById('sound-toggle');
  sndBtn.classList.toggle('active', G.soundOn);
  document.getElementById('sound-icon').textContent = G.soundOn ? '♪' : '○';
  sndBtn.addEventListener('click', () => {
    G.soundOn = !G.soundOn;
    sndBtn.classList.toggle('active', G.soundOn);
    document.getElementById('sound-icon').textContent = G.soundOn ? '♪' : '○';
    save();
  });

  // Low energy toggle
  const leBtn = document.getElementById('low-energy-btn');
  leBtn.classList.toggle('active', G.lowEnergy);
  document.getElementById('low-energy-banner').style.display = G.lowEnergy ? 'block' : 'none';
  leBtn.addEventListener('click', () => {
    G.lowEnergy = !G.lowEnergy;
    leBtn.classList.toggle('active', G.lowEnergy);
    document.getElementById('low-energy-banner').style.display = G.lowEnergy ? 'block' : 'none';
    renderQuests('main'); renderQuests('side');
    save();
  });

  // Flavor text rotation
  const flavor = () => {
    const f = FLAVOR_TEXTS;
    document.getElementById('flavor-text').textContent = f[Math.floor(Math.random() * f.length)];
  };
  flavor();
  setInterval(flavor, 30000);

  // Boss taunt rotation
  setInterval(() => { if (G.boss) updateBossTauntPhase(); }, 8000);

  // ── MOBILE SIDEBAR TOGGLE ──
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose  = document.getElementById('sidebar-close');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
  if (sidebarClose)  sidebarClose.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // Close sidebar on escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSidebar();
      ['quest-modal','reward-modal','item-modal','event-modal'].forEach(closeModal);
    }
  });

  // Close sidebar when a quest action is taken on mobile (auto-close on small screens)
  document.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      const isCompleteBtn = e.target.closest('.complete-btn');
      const isGenBtn = e.target.closest('#gen-btn');
      if (isCompleteBtn || isGenBtn) {
        // Don't close — user is interacting with main content
      }
    }
  });

  render();
}

window.addEventListener('DOMContentLoaded', init);