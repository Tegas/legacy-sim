
export const regrowth = {
  name: 'Regrowth',
  description: 'Heals a friendly target instantly and over 21 sec.',
  direct: true,
  hot: true,
  // Coefficients https://github.com/elysium-project/server/pull/860
  coefficient: 0.3,
  hotCoefficient: 0.5,
  ranks: [
    { 'rank': 1, 'mana': 120, 'level': 12, 'castTime': 2, 'min': 84, 'max': 99, 'hotTick': 98/7, 'duration': 21 },
    { 'rank': 2, 'mana': 205, 'level': 18, 'castTime': 2, 'min': 164, 'max': 189, 'hotTick': 175/7, 'duration': 21 },
    { 'rank': 3, 'mana': 280, 'level': 24, 'castTime': 2, 'min': 240, 'max': 275, 'hotTick': 259/7, 'duration': 21 },
    { 'rank': 4, 'mana': 350, 'level': 30, 'castTime': 2, 'min': 318, 'max': 361, 'hotTick': 343/7, 'duration': 21 },
    { 'rank': 5, 'mana': 420, 'level': 36, 'castTime': 2, 'min': 405, 'max': 458, 'hotTick': 427/7, 'duration': 21 },
    { 'rank': 6, 'mana': 510, 'level': 42, 'castTime': 2, 'min': 511, 'max': 576, 'hotTick': 546/7, 'duration': 21 },
    { 'rank': 7, 'mana': 615, 'level': 48, 'castTime': 2, 'min': 646, 'max': 725, 'hotTick': 686/7, 'duration': 21 },
    { 'rank': 8, 'mana': 740, 'level': 54, 'castTime': 2, 'min': 809, 'max': 906, 'hotTick': 861/7, 'duration': 21 },
    { 'rank': 9, 'mana': 880, 'level': 60, 'castTime': 2, 'min': 1003, 'max': 1120, 'hotTick': 1064/7, 'duration': 21 },
  ],
};

export const healingTouch = {
  name: 'Healing Touch',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
    { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 37, 'max': 51, 'hotTick': 0 },
    { 'rank': 2, 'mana': 55, 'level': 8, 'castTime': 2, 'min': 88, 'max': 112, 'hotTick': 0 },
    { 'rank': 3, 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 195, 'max': 243, 'hotTick': 0 },
    { 'rank': 4, 'mana': 185, 'level': 20, 'castTime': 3, 'min': 363, 'max': 445, 'hotTick': 0 },
    { 'rank': 5, 'mana': 270, 'level': 26, 'castTime': 3.5, 'min': 572, 'max': 694, 'hotTick': 0 },
    { 'rank': 6, 'mana': 335, 'level': 32, 'castTime': 3.5, 'min': 742, 'max': 894, 'hotTick': 0 },
    { 'rank': 7, 'mana': 405, 'level': 38, 'castTime': 3.5, 'min': 936, 'max': 1120, 'hotTick': 0 },
    { 'rank': 8, 'mana': 495, 'level': 44, 'castTime': 3.5, 'min': 1199, 'max': 1427, 'hotTick': 0 },
    { 'rank': 9, 'mana': 600, 'level': 50, 'castTime': 3.5, 'min': 1516, 'max': 1796, 'hotTick': 0 },
    { 'rank': 10, 'mana': 720, 'level': 56, 'castTime': 3.5, 'min': 1890, 'max': 2230, 'hotTick': 0 },
    { 'rank': 11, 'mana': 800, 'level': 56, 'castTime': 3.5, 'min': 2267, 'max': 2678, 'hotTick': 0 },
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
    { 'rank': 1, 'mana': 125, 'level': 20, 'castTime': 1.5, 'min': 193, 'max': 238, 'hotTick': 0 },
    { 'rank': 2, 'mana': 155, 'level': 26, 'castTime': 1.5, 'min': 258, 'max': 315, 'hotTick': 0 },
    { 'rank': 3, 'mana': 185, 'level': 32, 'castTime': 1.5, 'min': 327, 'max': 394, 'hotTick': 0 },
    { 'rank': 4, 'mana': 215, 'level': 38, 'castTime': 1.5, 'min': 400, 'max': 479, 'hotTick': 0 },
    { 'rank': 5, 'mana': 265, 'level': 44, 'castTime': 1.5, 'min': 518, 'max': 617, 'hotTick': 0 },
    { 'rank': 6, 'mana': 315, 'level': 50, 'castTime': 1.5, 'min': 644, 'max': 765, 'hotTick': 0 },
    { 'rank': 7, 'mana': 380, 'level': 56, 'castTime': 1.5, 'min': 812, 'max': 959, 'hotTick': 0 },
  ],
};

export const flashOfLight = {
  name: 'Flash Of Light',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 35, 'level': 20, 'castTime': 1.5, 'min': 62, 'max': 73, 'hotTick': 0 },
  { 'rank': 2, 'mana': 50, 'level': 26, 'castTime': 1.5, 'min': 96, 'max': 111, 'hotTick': 0 },
  { 'rank': 3, 'mana': 70, 'level': 34, 'castTime': 1.5, 'min': 145, 'max': 164, 'hotTick': 0 },
  { 'rank': 4, 'mana': 90, 'level': 42, 'castTime': 1.5, 'min': 197, 'max': 222, 'hotTick': 0 },
  { 'rank': 5, 'mana': 115, 'level': 50, 'castTime': 1.5, 'min': 267, 'max': 300, 'hotTick': 0 },
  { 'rank': 6, 'mana': 140, 'level': 58, 'castTime': 1.5, 'min': 343, 'max': 384, 'hotTick': 0 },
  ],
};

export const holyLight = {
  name: 'Holy Light',
  description: 'Heals a friendly target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 35, 'level': 1, 'castTime': 2.5, 'min': 39, 'max': 48, 'hotTick': 0 },
  { 'rank': 2, 'mana': 60, 'level': 6, 'castTime': 2.5, 'min': 76, 'max': 91, 'hotTick': 0 },
  { 'rank': 3, 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 159, 'max': 188, 'hotTick': 0 },
  { 'rank': 4, 'mana': 190, 'level': 22, 'castTime': 2.5, 'min': 310, 'max': 357, 'hotTick': 0 },
  { 'rank': 5, 'mana': 275, 'level': 30, 'castTime': 2.5, 'min': 491, 'max': 554, 'hotTick': 0 },
  { 'rank': 6, 'mana': 365, 'level': 38, 'castTime': 2.5, 'min': 698, 'max': 781, 'hotTick': 0 },
  { 'rank': 7, 'mana': 465, 'level': 46, 'castTime': 2.5, 'min': 945, 'max': 1054, 'hotTick': 0 },
  { 'rank': 8, 'mana': 580, 'level': 54, 'castTime': 2.5, 'min': 1246, 'max': 1389, 'hotTick': 0 },
  { 'rank': 9, 'mana': 660, 'level': 60, 'castTime': 2.5, 'min': 1590, 'max': 1771, 'hotTick': 0 },
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
  { 'rank': 1, 'mana': 370, 'level': 40, 'castTime': 3, 'min': 899, 'max': 1014, 'hotTick': 0 },
  { 'rank': 2, 'mana': 455, 'level': 46, 'castTime': 3, 'min': 1149, 'max': 1290, 'hotTick': 0 },
  { 'rank': 3, 'mana': 545, 'level': 52, 'castTime': 3, 'min': 1437, 'max': 1610, 'hotTick': 0 },
  { 'rank': 4, 'mana': 655, 'level': 58, 'castTime': 3, 'min': 1798, 'max': 2007, 'hotTick': 0 },
  { 'rank': 5, 'mana': 710, 'level': 60, 'castTime': 3, 'min': 1966, 'max': 2195, 'hotTick': 0 },
  ],
};

export const heal = {
  name: 'Heal',
  description: 'Heal your target',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 155, 'level': 16, 'castTime': 3, 'min': 295, 'max': 342, 'hotTick': 0 },
  { 'rank': 2, 'mana': 205, 'level': 22, 'castTime': 3, 'min': 429, 'max': 492, 'hotTick': 0 },
  { 'rank': 3, 'mana': 255, 'level': 28, 'castTime': 3, 'min': 566, 'max': 643, 'hotTick': 0 },
  { 'rank': 4, 'mana': 305, 'level': 34, 'castTime': 3, 'min': 712, 'max': 805, 'hotTick': 0 },
  ],
};

export const holyNova = {
  name: 'Holy Nova',
  description: 'Causes an explosion of holy light around the caster, causing Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards. These effects cause no threat.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 185, 'level': 20, 'castTime': 1.5, 'min': 52, 'max': 61, 'hotTick': 0 },
  { 'rank': 2, 'mana': 290, 'level': 28, 'castTime': 1.5, 'min': 86, 'max': 99, 'hotTick': 0 },
  { 'rank': 3, 'mana': 400, 'level': 36, 'castTime': 1.5, 'min': 121, 'max': 140, 'hotTick': 0 },
  { 'rank': 4, 'mana': 520, 'level': 44, 'castTime': 1.5, 'min': 161, 'max': 188, 'hotTick': 0 },
  { 'rank': 5, 'mana': 635, 'level': 52, 'castTime': 1.5, 'min': 235, 'max': 272, 'hotTick': 0 },
  { 'rank': 6, 'mana': 750, 'level': 60, 'castTime': 1.5, 'min': 302, 'max': 351, 'hotTick': 0 },
  ],
};

export const prayerOfHealing = {
  name: 'Prayer of Healing',
  description: 'A powerful prayer heals party members within 30 yards.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 410, 'level': 30, 'castTime': 3, 'min': 301, 'max': 322, 'hotTick': 0 },
  { 'rank': 2, 'mana': 560, 'level': 40, 'castTime': 3, 'min': 444, 'max': 473, 'hotTick': 0 },
  { 'rank': 3, 'mana': 770, 'level': 50, 'castTime': 3, 'min': 657, 'max': 696, 'hotTick': 0 },
  { 'rank': 4, 'mana': 1030, 'level': 60, 'castTime': 3, 'min': 939, 'max': 992, 'hotTick': 0 },
  { 'rank': 5, 'mana': 1070, 'level': 60, 'castTime': 3, 'min': 1041, 'max': 1100, 'hotTick': 0 },
  ],
};

export const healingWave = {
  name: 'Healing Wave',
  description: 'Heals a friendly target.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 34, 'max': 45, 'hotTick': 0 },
  { 'rank': 2, 'mana': 45, 'level': 6, 'castTime': 2, 'min': 64, 'max': 79, 'hotTick': 0 },
  { 'rank': 3, 'mana': 80, 'level': 12, 'castTime': 2.5, 'min': 129, 'max': 156, 'hotTick': 0 },
  { 'rank': 4, 'mana': 155, 'level': 18, 'castTime': 3, 'min': 268, 'max': 317, 'hotTick': 0 },
  { 'rank': 5, 'mana': 200, 'level': 24, 'castTime': 3, 'min': 376, 'max': 441, 'hotTick': 0 },
  { 'rank': 6, 'mana': 265, 'level': 32, 'castTime': 3, 'min': 536, 'max': 623, 'hotTick': 0 },
  { 'rank': 7, 'mana': 340, 'level': 40, 'castTime': 3, 'min': 740, 'max': 855, 'hotTick': 0 },
  { 'rank': 8, 'mana': 440, 'level': 48, 'castTime': 3, 'min': 1017, 'max': 1168, 'hotTick': 0 },
  { 'rank': 9, 'mana': 560, 'level': 56, 'castTime': 3, 'min': 1367, 'max': 1562, 'hotTick': 0 },
  { 'rank': 10, 'mana': 620, 'level': 60, 'castTime': 3, 'min': 1620, 'max': 1851, 'hotTick': 0 },
  ],
};

export const lesserHealingWave = {
  name: 'Lesser Healing Wave',
  description: 'Heals a friendly target.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 105, 'level': 20, 'castTime': 1.5, 'min': 162, 'max': 187, 'hotTick': 0 },
  { 'rank': 2, 'mana': 145, 'level': 28, 'castTime': 1.5, 'min': 247, 'max': 282, 'hotTick': 0 },
  { 'rank': 3, 'mana': 185, 'level': 36, 'castTime': 1.5, 'min': 337, 'max': 382, 'hotTick': 0 },
  { 'rank': 4, 'mana': 235, 'level': 44, 'castTime': 1.5, 'min': 458, 'max': 515, 'hotTick': 0 },
  { 'rank': 5, 'mana': 305, 'level': 52, 'castTime': 1.5, 'min': 631, 'max': 706, 'hotTick': 0 },
  { 'rank': 6, 'mana': 380, 'level': 60, 'castTime': 1.5, 'min': 832, 'max': 929, 'hotTick': 0 },
  ],
};

export const chainHeal = {
  name: 'Chain Heal',
  description: 'Heals the friendly target, then jumps to heal additional nearby targets. If cast on a party member, the heal will only jump to other party members. Each jump is 50% as effective as the previous target. Heals 3 total targets.',
  direct: true,
  hot: false,
  ranks: [
  { 'rank': 1, 'mana': 260, 'level': 40, 'castTime': 2.5, 'min': 320, 'max': 369, 'hotTick': 0 },
  { 'rank': 2, 'mana': 315, 'level': 46, 'castTime': 2.5, 'min': 405, 'max': 466, 'hotTick': 0 },
  { 'rank': 3, 'mana': 405, 'level': 54, 'castTime': 2.5, 'min': 551, 'max': 630, 'hotTick': 0 },
  ],
};

export const shadowBolt = {
  name: 'Shadow Bolt',
  description: 'Sends a shadowy bolt at the enemy, causing Shadow damage.',
  direct: true,
  dot: false,
  ranks: [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.7, 'min': 12, 'max': 17, 'dot': 0 },
  { 'rank': 2, 'mana': 40, 'level': 6, 'castTime': 2.2, 'min': 23, 'max': 30, 'dot': 0 },
  { 'rank': 3, 'mana': 70, 'level': 12, 'castTime': 2.8, 'min': 48, 'max': 57, 'dot': 0 },
  { 'rank': 4, 'mana': 110, 'level': 20, 'castTime': 3, 'min': 86, 'max': 99, 'dot': 0 },
  { 'rank': 5, 'mana': 160, 'level': 28, 'castTime': 3, 'min': 142, 'max': 163, 'dot': 0 },
  { 'rank': 6, 'mana': 210, 'level': 36, 'castTime': 3, 'min': 204, 'max': 231, 'dot': 0 },
  { 'rank': 7, 'mana': 265, 'level': 44, 'castTime': 3, 'min': 281, 'max': 316, 'dot': 0 },
  { 'rank': 8, 'mana': 315, 'level': 52, 'castTime': 3, 'min': 360, 'max': 403, 'dot': 0 },
  { 'rank': 9, 'mana': 370, 'level': 60, 'castTime': 3, 'min': 455, 'max': 508, 'dot': 0 },
  { 'rank': 10, 'mana': 380, 'level': 60, 'castTime': 3, 'min': 482, 'max': 539, 'dot': 0 },
  ],
};
