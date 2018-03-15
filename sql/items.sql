SELECT 
entry,
patch,
case
 when class = 2 and subclass = 0 then 'axe'
 when class = 2 and subclass = 1 then 'axe2'
 when class = 2 and subclass = 2 then 'bow'
 when class = 2 and subclass = 3 then 'gun'
 when class = 2 and subclass = 4 then 'mace'
 when class = 2 and subclass = 5 then 'mace2'
 when class = 2 and subclass = 6 then 'polearm'
 when class = 2 and subclass = 7 then 'sword'
 when class = 2 and subclass = 8 then 'sword2'
 when class = 2 and subclass = 10 then 'staff'
 when class = 2 and subclass = 11 then 'exotic'
 when class = 2 and subclass = 12 then 'exotic2'
 when class = 2 and subclass = 13 then 'fist'
 when class = 2 and subclass = 14 then 'misc'
 when class = 2 and subclass = 15 then 'dagger'
 when class = 2 and subclass = 16 then 'thrown'
 when class = 2 and subclass = 17 then 'spear'
 when class = 2 and subclass = 18 then 'crossbow'
 when class = 2 and subclass = 19 then 'wand'
 when class = 2 and subclass = 20 then 'fishing'
 when class = 4 and subclass = 0 then 'misc'
 when class = 4 and subclass = 1 then 'cloth'
 when class = 4 and subclass = 2 then 'leather'
 when class = 4 and subclass = 3 then 'mail'
 when class = 4 and subclass = 4 then 'plate'
 when class = 4 and subclass = 5 then 'buckler'
 when class = 4 and subclass = 6 then 'shield'
 when class = 4 and subclass = 7 then 'libram'
 when class = 4 and subclass = 8 then 'idol'
 when class = 4 and subclass = 9 then 'totem'
end 'type',
name,
displayid,
quality,
case
 when InventoryType = 0 then 'non_equip'
 when InventoryType = 1 then 'head'
 when InventoryType = 2 then 'neck'
 when InventoryType = 3 then 'shoulders'
 when InventoryType = 4 then 'body'
 when InventoryType = 5 then 'chest'
 when InventoryType = 6 then 'waist'
 when InventoryType = 7 then 'legs'
 when InventoryType = 8 then 'feet'
 when InventoryType = 9 then 'wrist'
 when InventoryType = 10 then 'hands'
 when InventoryType = 11 then 'finger'
 when InventoryType = 12 then 'trinket'
 when InventoryType = 13 then 'weapon'
 when InventoryType = 14 then 'shield'
 when InventoryType = 15 then 'ranged'
 when InventoryType = 16 then 'cloak'
 when InventoryType = 17 then 'weapon2'
 when InventoryType = 18 then 'bag'
 when InventoryType = 19 then 'tabard'
 when InventoryType = 20 then 'robe'
 when InventoryType = 21 then 'mainhand'
 when InventoryType = 22 then 'offhand'
 when InventoryType = 23 then 'holdable'
 when InventoryType = 24 then 'ammo'
 when InventoryType = 25 then 'thrown'
 when InventoryType = 26 then 'rangedright'
 when InventoryType = 27 then 'quiver'
 when InventoryType = 28 then 'relic'
end as slot,
case 
 when spell1.EffectApplyAuraName1 = 135 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 135 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 135 then spell3.EffectBasePoints1 + 1
end healing,
case 
 when spell1.EffectApplyAuraName1 = 85 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 85 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 85 then spell3.EffectBasePoints1 + 1
end mp5,
case 
 when spell1.EffectApplyAuraName1 = 71 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 71 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 71 then spell3.EffectBasePoints1 + 1
end spellCrit,
case
 when spell1.EffectApplyAuraName1 = 13 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 13 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 13 then spell3.EffectBasePoints1 + 1
end spellDamage,
case
 when spell1.EffectApplyAuraName1 = 55 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 55 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 55 then spell3.EffectBasePoints1 + 1
end spellHit,
case
 when spell1.EffectApplyAuraName1 = 99 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 99 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 99 then spell3.EffectBasePoints1 + 1
end attackPower,
case
 when spell1.EffectApplyAuraName1 = 52 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 52 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 52 then spell3.EffectBasePoints1 + 1
end meleeCrit,
case
 when spell1.EffectApplyAuraName1 = 54 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 54 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 54 then spell3.EffectBasePoints1 + 1
end meleeHit,
case
 when spell1.EffectApplyAuraName1 = 124 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 124 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 124 then spell3.EffectBasePoints1 + 1
end rangedAttackPower,
case
 when spell1.EffectApplyAuraName1 = 47 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 47 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 47 then spell3.EffectBasePoints1 + 1
end parry,
case
 when spell1.EffectApplyAuraName1 = 49 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 49 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 49 then spell3.EffectBasePoints1 + 1
end dodge,
case
 when spell1.EffectApplyAuraName1 = 30 and spell1.EffectMiscValue1 = 95 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 30 and spell2.EffectMiscValue1 = 95 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 30 and spell3.EffectMiscValue1 = 95 then spell3.EffectBasePoints1 + 1
end defense,
case
 when spell1.EffectApplyAuraName1 = 158 then spell1.EffectBasePoints1 + 1 + `block`
 when spell2.EffectApplyAuraName1 = 158 then spell2.EffectBasePoints1 + 1 + `block`
 when spell3.EffectApplyAuraName1 = 158 then spell3.EffectBasePoints1 + 1 + `block`
 else `block`
end `block`,
case
 when spell1.EffectApplyAuraName1 = 51 then spell1.EffectBasePoints1 + 1
 when spell2.EffectApplyAuraName1 = 51 then spell2.EffectBasePoints1 + 1
 when spell3.EffectApplyAuraName1 = 51 then spell3.EffectBasePoints1 + 1
end blockChance,
spell1.EffectApplyAuraName1,
# spell.SpellName,
# spell.EffectBasePoints1 + 1 as effectBonus,
#case
# when spell.EffectApplyAuraName1 = 135 then 'healing'
# when spell.EffectApplyAuraName1 = 71 then 'spell crit'
# when spell.EffectApplyAuraName1 = 85 then 'mp5'
# when spell.EffectApplyAuraName1 = 52 then 'melee crit'
# when spell.EffectApplyAuraName1 = 49 then 'dodge'
# when spell.EffectApplyAuraName1 = 99 then 'attack power'
# when spell.EffectApplyAuraName1 = 124 then 'ranged attack power'
# when spell.EffectApplyAuraName1 = 13 then 'spell damage'
# when spell.EffectApplyAuraName1 = 54 then 'melee hit'
# when spell.EffectApplyAuraName1 = 55 then 'spell hit'
# when spell.EffectApplyAuraName1 = 87 then 'spell vulnerability'
# when spell.EffectApplyAuraName1 = 158 then 'block value'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 95 then 'skill defense'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 43 then 'skill sword1'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 55 then 'skill sword2'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 173 then 'skill dagger'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 54 then 'skill mace1'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 45 then 'skill bow'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 44 then 'skill axe1'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 226 then 'skill crossbow'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 393 then 'skill skinning'
# when spell.EffectApplyAuraName1 = 30 and EffectMiscValue1 = 46 then 'gun'
#end as effect1,
#spelltrigger_1,
#spell.EffectMiscValue1,
#spell.EffectApplyAuraName1,
#spell.EffectApplyAuraName1,
#spell.EffectApplyAuraName1,
AllowableClass & 1 = 1 as warrior,
AllowableClass & 2 = 2 as paladin,
AllowableClass & 4 = 4 as hunter,
AllowableClass & 8 = 8 as rogue,
AllowableClass & 16 = 16 as priest,
AllowableClass & 64 = 64 as shaman,
AllowableClass & 128 = 128 as mage,
AllowableClass & 256 = 256 as warlock,
AllowableClass & 1024 = 1024 as druid,
itemLevel,
armor,
case when stat_type1 = 0 then stat_value1 when stat_type2 = 0 then stat_value2 when stat_type3 = 0 then stat_value3 when stat_type4 = 0 then stat_value4 when stat_type5 = 0 then stat_value5 end as mana,
case when stat_type1 = 1 then stat_value1 when stat_type2 = 1 then stat_value2 when stat_type3 = 1 then stat_value3 when stat_type4 = 1 then stat_value4 when stat_type5 = 1 then stat_value5 end as health,
case when stat_type1 = 3 then stat_value1 when stat_type2 = 3 then stat_value2 when stat_type3 = 3 then stat_value3 when stat_type4 = 3 then stat_value4 when stat_type5 = 3 then stat_value5 end as agility,
case when stat_type1 = 4 then stat_value1 when stat_type2 = 4 then stat_value2 when stat_type3 = 4 then stat_value3 when stat_type4 = 4 then stat_value4 when stat_type5 = 4 then stat_value5 end as strength,
case when stat_type1 = 5 then stat_value1 when stat_type2 = 5 then stat_value2 when stat_type3 = 5 then stat_value3 when stat_type4 = 5 then stat_value4 when stat_type5 = 5 then stat_value5 end as intellect,
case when stat_type1 = 6 then stat_value1 when stat_type2 = 6 then stat_value2 when stat_type3 = 6 then stat_value3 when stat_type4 = 6 then stat_value4 when stat_type5 = 6 then stat_value5 end as spirit,
case when stat_type1 = 7 then stat_value1 when stat_type2 = 7 then stat_value2 when stat_type3 = 7 then stat_value3 when stat_type4 = 7 then stat_value4 when stat_type5 = 7 then stat_value5 end as stamina,
dmg_min1, dmg_max1,
case
 when dmg_type1 = 1 then 'holy'
 when dmg_type1 = 2 then 'fire'
 when dmg_type1 = 3 then 'nature'
 when dmg_type1 = 4 then 'frost'
 when dmg_type1 = 5 then 'shadow'
 when dmg_type1 = 6 then 'arcane'
end as dmg_type1,
dmg_min2, dmg_max2,
case
 when dmg_type2 = 1 then 'holy'
 when dmg_type2 = 2 then 'fire'
 when dmg_type2 = 3 then 'nature'
 when dmg_type2 = 4 then 'frost'
 when dmg_type2 = 5 then 'shadow'
 when dmg_type2 = 6 then 'arcane'
end as dmg_type2,
delay / 1000 as speed,
holy_res, fire_res, nature_res, frost_res, shadow_res, arcane_res,
itemset
FROM wow.item_template 
	left outer join wow.spell_template spell1 on wow.item_template.spellid_1 = spell1.id
    left outer join wow.spell_template spell2 on wow.item_template.spellid_2 = spell2.id
    left outer join wow.spell_template spell3 on wow.item_template.spellid_3 = spell3.id
where 1=1
and (class = 4 #armor
or class = 2) # weapon
and quality >= 3
and ItemLevel > 40
and name like "%shield%"
#and (spell1.EffectApplyAuraName1 = 135 or spell1.EffectApplyAuraName2 = 135 or spell1.EffectApplyAuraName3 = 135
#  or spell2.EffectApplyAuraName1 = 135 or spell2.EffectApplyAuraName2 = 135 or spell2.EffectApplyAuraName3 = 135
#  or spell3.EffectApplyAuraName1 = 135 or spell3.EffectApplyAuraName2 = 135 or spell3.EffectApplyAuraName3 = 135)
order by patch asc
