
export const regrowth = {
  name: 'Regrowth',
  description: 'Heals a friendly target instantly and over 21 sec.',
  direct: true,
  hot: true,
  // Coefficients https://github.com/elysium-project/server/pull/860
  coefficient: 0.3,
  hotCoefficient: 0.5,
  ranks: [
    { 'rank': 1, 'mana': 120, 'level': 12, 'castTime': 2, 'min': 92, 'max': 107, 'hotTick': 98/7, 'duration': 21 },
    { 'rank': 2, 'mana': 205, 'level': 18, 'castTime': 2, 'min': 176, 'max': 201, 'hotTick': 175/7, 'duration': 21 },
    { 'rank': 3, 'mana': 280, 'level': 24, 'castTime': 2, 'min': 255, 'max': 290, 'hotTick': 259/7, 'duration': 21 },
    { 'rank': 4, 'mana': 350, 'level': 30, 'castTime': 2, 'min': 335, 'max': 378, 'hotTick': 343/7, 'duration': 21 },
    { 'rank': 5, 'mana': 420, 'level': 36, 'castTime': 2, 'min': 425, 'max': 478, 'hotTick': 427/7, 'duration': 21 },
    { 'rank': 6, 'mana': 510, 'level': 42, 'castTime': 2, 'min': 534, 'max': 599, 'hotTick': 546/7, 'duration': 21 },
    { 'rank': 7, 'mana': 615, 'level': 48, 'castTime': 2, 'min': 672, 'max': 751, 'hotTick': 686/7, 'duration': 21 },
    { 'rank': 8, 'mana': 740, 'level': 54, 'castTime': 2, 'min': 838, 'max': 935, 'hotTick': 861/7, 'duration': 21 },
    { 'rank': 9, 'mana': 880, 'level': 60, 'castTime': 2, 'min': 1003, 'max': 1120, 'hotTick': 1064/7, 'duration': 21 },
  ],
};

export const healingTouch = {
  name: 'Healing Touch',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
    { 'rank': '1', 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 40, 'max': 55, 'hotTick': 0 },
    { 'rank': '2', 'mana': 55, 'level': 8, 'castTime': 2, 'min': 94, 'max': 119, 'hotTick': 0 },
    { 'rank': '3', 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 204, 'max': 253, 'hotTick': 0 },
    { 'rank': '4', 'mana': 185, 'level': 20, 'castTime': 3, 'min': 376, 'max': 459, 'hotTick': 0 },
    { 'rank': '5', 'mana': 270, 'level': 26, 'castTime': 3.5, 'min': 589, 'max': 712, 'hotTick': 0 },
    { 'rank': '6', 'mana': 335, 'level': 32, 'castTime': 3.5, 'min': 761, 'max': 914, 'hotTick': 0 },
    { 'rank': '7', 'mana': 405, 'level': 38, 'castTime': 3.5, 'min': 958, 'max': 1143, 'hotTick': 0 },
    { 'rank': '8', 'mana': 495, 'level': 44, 'castTime': 3.5, 'min': 1224, 'max': 1453, 'hotTick': 0 },
    { 'rank': '9', 'mana': 600, 'level': 50, 'castTime': 3.5, 'min': 1545, 'max': 1826, 'hotTick': 0 },
    { 'rank': '10', 'mana': 720, 'level': 56, 'castTime': 3.5, 'min': 1916, 'max': 2257, 'hotTick': 0 },
    { 'rank': '11', 'mana': 800, 'level': 56, 'castTime': 3.5, 'min': 2266, 'max': 2677, 'hotTick': 0 },
  ],
};

export const rejuvenation = {
  name: 'Rejuvenation',
  description: 'Heals the target over 12 sec.',
  direct: false,
  hot: true,
  ranks: [
    { 'rank': 1, 'mana': 25, 'level': 4, 'castTime': 1.5, 'hotTick': 32/4, 'duration': 12 },
    { 'rank': 2, 'mana': 40, 'level': 10, 'castTime': 1.5, 'hotTick': 56/4, 'duration': 12 },
    { 'rank': 3, 'mana': 75, 'level': 16, 'castTime': 1.5, 'hotTick': 116/4, 'duration': 12 },
    { 'rank': 4, 'mana': 105, 'level': 22, 'castTime': 1.5, 'hotTick': 180/4, 'duration': 12 },
    { 'rank': 5, 'mana': 135, 'level': 28, 'castTime': 1.5, 'hotTick': 244/4, 'duration': 12 },
    { 'rank': 6, 'mana': 160, 'level': 34, 'castTime': 1.5, 'hotTick': 304/4, 'duration': 12 },
    { 'rank': 7, 'mana': 195, 'level': 40, 'castTime': 1.5, 'hotTick': 388/4, 'duration': 12 },
    { 'rank': 8, 'mana': 235, 'level': 46, 'castTime': 1.5, 'hotTick': 488/4, 'duration': 12 },
    { 'rank': 9, 'mana': 280, 'level': 52, 'castTime': 1.5, 'hotTick': 608/4, 'duration': 12 },
    { 'rank': 10, 'mana': 335, 'level': 58, 'castTime': 1.5, 'hotTick': 756/4, 'duration': 12 },
    { 'rank': 11, 'mana': 360, 'level': 60, 'castTime': 1.5, 'hotTick': 888/4, 'duration': 12 },
  ],
};

export const flashHeal = {
  name: 'Flash Heal',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
    { 'rank': 1, 'mana': 125, 'level': 20, 'castTime': 1.5, 'min': 202, 'max': 247, 'hotTick': 0 },
    { 'rank': 2, 'mana': 155, 'level': 26, 'castTime': 1.5, 'min': 268, 'max': 325, 'hotTick': 0 },
    { 'rank': 3, 'mana': 185, 'level': 32, 'castTime': 1.5, 'min': 339, 'max': 406, 'hotTick': 0 },
    { 'rank': 4, 'mana': 215, 'level': 38, 'castTime': 1.5, 'min': 413, 'max': 492, 'hotTick': 0 },
    { 'rank': 5, 'mana': 265, 'level': 44, 'castTime': 1.5, 'min': 534, 'max': 633, 'hotTick': 0 },
    { 'rank': 6, 'mana': 315, 'level': 50, 'castTime': 1.5, 'min': 662, 'max': 783, 'hotTick': 0 },
    { 'rank': 7, 'mana': 380, 'level': 56, 'castTime': 1.5, 'min': 828, 'max': 975, 'hotTick': 0 },
  ],
};

export const flashOfLight = {
  name: 'Flash Of Light',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 35, 'level': 20, 'castTime': 1.5, 'min': 66, 'max': 77, 'hotTick': 0 },
  { 'rank': 2, 'mana': 50, 'level': 26, 'castTime': 1.5, 'min': 102, 'max': 117, 'hotTick': 0 },
  { 'rank': 3, 'mana': 70, 'level': 34, 'castTime': 1.5, 'min': 152, 'max': 171, 'hotTick': 0 },
  { 'rank': 4, 'mana': 90, 'level': 42, 'castTime': 1.5, 'min': 206, 'max': 231, 'hotTick': 0 },
  { 'rank': 5, 'mana': 115, 'level': 50, 'castTime': 1.5, 'min': 277, 'max': 310, 'hotTick': 0 },
  { 'rank': 6, 'mana': 140, 'level': 58, 'castTime': 1.5, 'min': 348, 'max': 389, 'hotTick': 0 },
  ],
};

export const holyLight = {
  name: 'Holy Light',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 35, 'level': 1, 'castTime': 2.5, 'min': 42, 'max': 51, 'hotTick': 0 },
  { 'rank': 2, 'mana': 60, 'level': 6, 'castTime': 2.5, 'min': 81, 'max': 96, 'hotTick': 0 },
  { 'rank': 3, 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 167, 'max': 196, 'hotTick': 0 },
  { 'rank': 4, 'mana': 190, 'level': 22, 'castTime': 2.5, 'min': 321, 'max': 368, 'hotTick': 0 },
  { 'rank': 5, 'mana': 275, 'level': 30, 'castTime': 2.5, 'min': 506, 'max': 569, 'hotTick': 0 },
  { 'rank': 6, 'mana': 365, 'level': 38, 'castTime': 2.5, 'min': 716, 'max': 799, 'hotTick': 0 },
  { 'rank': 7, 'mana': 465, 'level': 46, 'castTime': 2.5, 'min': 967, 'max': 1076, 'hotTick': 0 },
  { 'rank': 8, 'mana': 580, 'level': 54, 'castTime': 2.5, 'min': 1271, 'max': 1414, 'hotTick': 0 },
  { 'rank': 9, 'mana': 660, 'level': 60, 'castTime': 2.5, 'min': 1589, 'max': 1770, 'hotTick': 0 },
  ],
};

export const renew = {
  name: 'Renew',
  description: 'Heals the target of damage over 15 sec.',
  direct: false,
  hot: true,
  ranks: [
  { 'rank': 1, 'mana': 30, 'level': 8, 'castTime': 1.5, 'hotTick': 45/5, 'duration': 15 },
  { 'rank': 2, 'mana': 65, 'level': 14, 'castTime': 1.5, 'hotTick': 100/5, 'duration': 15 },
  { 'rank': 3, 'mana': 105, 'level': 20, 'castTime': 1.5, 'hotTick': 175/5, 'duration': 15 },
  { 'rank': 4, 'mana': 140, 'level': 26, 'castTime': 1.5, 'hotTick': 245/5, 'duration': 15 },
  { 'rank': 5, 'mana': 170, 'level': 32, 'castTime': 1.5, 'hotTick': 315/5, 'duration': 15 },
  { 'rank': 6, 'mana': 205, 'level': 38, 'castTime': 1.5, 'hotTick': 400/5, 'duration': 15 },
  { 'rank': 7, 'mana': 250, 'level': 44, 'castTime': 1.5, 'hotTick': 510/5, 'duration': 15 },
  { 'rank': 8, 'mana': 305, 'level': 50, 'castTime': 1.5, 'hotTick': 650/5, 'duration': 15 },
  { 'rank': 9, 'mana': 365, 'level': 56, 'castTime': 1.5, 'hotTick': 810/5, 'duration': 15 },
  { 'rank': 10, 'mana': 410, 'level': 60, 'castTime': 1.5, 'hotTick': 970/5, 'duration': 15 },
  ],
};

export const greaterHeal = {
  name: 'Greater Heal',
  description: 'A slow casting spell that heals a single target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 370, 'level': 40, 'castTime': 3, 'min': 924, 'max': 1039, 'hotTick': 0 },
  { 'rank': 2, 'mana': 455, 'level': 46, 'castTime': 3, 'min': 1177, 'max': 1318, 'hotTick': 0 },
  { 'rank': 3, 'mana': 545, 'level': 52, 'castTime': 3, 'min': 1469, 'max': 1642, 'hotTick': 0 },
  { 'rank': 4, 'mana': 655, 'level': 58, 'castTime': 3, 'min': 1812, 'max': 2021, 'hotTick': 0 },
  { 'rank': 5, 'mana': 710, 'level': 60, 'castTime': 3, 'min': 1965, 'max': 2194, 'hotTick': 0 },
  ],
};

export const heal = {
  name: 'Heal',
  description: 'Heal your target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 155, 'level': 16, 'castTime': 3, 'min': 306, 'max': 353, 'hotTick': 0 },
  { 'rank': 2, 'mana': 205, 'level': 22, 'castTime': 3, 'min': 444, 'max': 507, 'hotTick': 0 },
  { 'rank': 3, 'mana': 255, 'level': 28, 'castTime': 3, 'min': 585, 'max': 662, 'hotTick': 0 },
  { 'rank': 4, 'mana': 305, 'level': 34, 'castTime': 3, 'min': 734, 'max': 827, 'hotTick': 0 },
  ],
};

export const holyNova = {
  name: 'Holy Nova',
  description: 'Causes an explosion of holy light around the caster, causing Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards. These effects cause no threat.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 185, 'level': 20, 'castTime': 1.5, 'min': 54, 'max': 63, 'hotTick': 0 },
  { 'rank': 2, 'mana': 290, 'level': 28, 'castTime': 1.5, 'min': 88, 'max': 101, 'hotTick': 0 },
  { 'rank': 3, 'mana': 400, 'level': 36, 'castTime': 1.5, 'min': 124, 'max': 143, 'hotTick': 0 },
  { 'rank': 4, 'mana': 520, 'level': 44, 'castTime': 1.5, 'min': 165, 'max': 192, 'hotTick': 0 },
  { 'rank': 5, 'mana': 635, 'level': 52, 'castTime': 1.5, 'min': 239, 'max': 276, 'hotTick': 0 },
  { 'rank': 6, 'mana': 750, 'level': 60, 'castTime': 1.5, 'min': 301, 'max': 350, 'hotTick': 0 },
  ],
};

export const prayerOfHealing = {
  name: 'Prayer of Healing',
  description: 'A powerful prayer heals party members within 30 yards.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 410, 'level': 30, 'castTime': 3, 'min': 312, 'max': 333, 'hotTick': 0 },
  { 'rank': 2, 'mana': 560, 'level': 40, 'castTime': 3, 'min': 458, 'max': 487, 'hotTick': 0 },
  { 'rank': 3, 'mana': 770, 'level': 50, 'castTime': 3, 'min': 674, 'max': 713, 'hotTick': 0 },
  { 'rank': 4, 'mana': 1030, 'level': 60, 'castTime': 3, 'min': 938, 'max': 991, 'hotTick': 0 },
  { 'rank': 5, 'mana': 1070, 'level': 60, 'castTime': 3, 'min': 1040, 'max': 1099, 'hotTick': 0 },
  ],
};

export const healingWave = {
  name: 'Healing Wave',
  description: 'Heals a friendly target.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 36, 'max': 47, 'hotTick': 0 },
  { 'rank': 2, 'mana': 45, 'level': 6, 'castTime': 2, 'min': 68, 'max': 83, 'hotTick': 0 },
  { 'rank': 3, 'mana': 80, 'level': 12, 'castTime': 2.5, 'min': 136, 'max': 163, 'hotTick': 0 },
  { 'rank': 4, 'mana': 155, 'level': 18, 'castTime': 3, 'min': 279, 'max': 328, 'hotTick': 0 },
  { 'rank': 5, 'mana': 200, 'level': 24, 'castTime': 3, 'min': 389, 'max': 454, 'hotTick': 0 },
  { 'rank': 6, 'mana': 265, 'level': 32, 'castTime': 3, 'min': 552, 'max': 639, 'hotTick': 0 },
  { 'rank': 7, 'mana': 340, 'level': 40, 'castTime': 3, 'min': 759, 'max': 874, 'hotTick': 0 },
  { 'rank': 8, 'mana': 440, 'level': 48, 'castTime': 3, 'min': 1040, 'max': 1191, 'hotTick': 0 },
  { 'rank': 9, 'mana': 560, 'level': 56, 'castTime': 3, 'min': 1388, 'max': 1583, 'hotTick': 0 },
  { 'rank': 10, 'mana': 620, 'level': 60, 'castTime': 3, 'min': 1619, 'max': 1850, 'hotTick': 0 },
  ],
};

export const lesserHealingWave = {
  name: 'Lesser Healing Wave',
  description: 'Heals a friendly target.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 105, 'level': 20, 'castTime': 1.5, 'min': 170, 'max': 195, 'hotTick': 0 },
  { 'rank': 2, 'mana': 145, 'level': 28, 'castTime': 1.5, 'min': 257, 'max': 292, 'hotTick': 0 },
  { 'rank': 3, 'mana': 185, 'level': 36, 'castTime': 1.5, 'min': 349, 'max': 394, 'hotTick': 0 },
  { 'rank': 4, 'mana': 235, 'level': 44, 'castTime': 1.5, 'min': 472, 'max': 529, 'hotTick': 0 },
  { 'rank': 5, 'mana': 305, 'level': 52, 'castTime': 1.5, 'min': 648, 'max': 723, 'hotTick': 0 },
  { 'rank': 6, 'mana': 380, 'level': 60, 'castTime': 1.5, 'min': 831, 'max': 928, 'hotTick': 0 },
  ],
};

export const chainHeal = {
  name: 'Chain Heal',
  description: 'Heals the friendly target, then jumps to heal additional nearby targets. If cast on a party member, the heal will only jump to other party members. Each jump is 50% as effective as the previous target. Heals 3 total targets.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 260, 'level': 40, 'castTime': 2.5, 'min': 332, 'max': 381, 'hotTick': 0 },
  { 'rank': 2, 'mana': 315, 'level': 46, 'castTime': 2.5, 'min': 418, 'max': 479, 'hotTick': 0 },
  { 'rank': 3, 'mana': 405, 'level': 54, 'castTime': 2.5, 'min': 567, 'max': 646, 'hotTick': 0 },
  ],
};

export const shadowBolt = {
  name: 'Shadow Bolt',
  description: 'Sends a shadowy bolt at the enemy, causing Shadow damage.',
  direct: true,
  dot: false,
  ranks: [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.7, 'min': 13, 'max': 18, 'dot': 0 },
  { 'rank': 2, 'mana': 40, 'level': 6, 'castTime': 2.2, 'min': 25, 'max': 32, 'dot': 0 },
  { 'rank': 3, 'mana': 70, 'level': 12, 'castTime': 2.8, 'min': 52, 'max': 61, 'dot': 0 },
  { 'rank': 4, 'mana': 110, 'level': 20, 'castTime': 3, 'min': 91, 'max': 104, 'dot': 0 },
  { 'rank': 5, 'mana': 160, 'level': 28, 'castTime': 3, 'min': 149, 'max': 170, 'dot': 0 },
  { 'rank': 6, 'mana': 210, 'level': 36, 'castTime': 3, 'min': 213, 'max': 240, 'dot': 0 },
  { 'rank': 7, 'mana': 265, 'level': 44, 'castTime': 3, 'min': 292, 'max': 327, 'dot': 0 },
  { 'rank': 8, 'mana': 315, 'level': 52, 'castTime': 3, 'min': 372, 'max': 415, 'dot': 0 },
  { 'rank': 9, 'mana': 370, 'level': 60, 'castTime': 3, 'min': 454, 'max': 507, 'dot': 0 },
  { 'rank': 10, 'mana': 380, 'level': 60, 'castTime': 3, 'min': 481, 'max': 538, 'dot': 0 },
  ],
};
