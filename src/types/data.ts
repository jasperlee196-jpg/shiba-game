export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ItemType = 'scooper' | 'shoes' | 'bag' | 'hat' | 'charm' | 'outfit';

export interface UpgradeCost {
  coins: number;
  materials: Record<string, number>;
}

export interface ItemDef {
  id: string;
  type: ItemType;
  nameJP: string;
  nameEN: string;
  rarity: Rarity;
  stats: Record<string, any>;
  perk?: string | null;
  set?: string | null;
  upgradeCosts: UpgradeCost[];
}

export interface PowerUpDef {
  id: string;
  nameJP: string;
  nameEN: string;
  icon: string;
  durationSec: number;
  cooldownSec: number;
  effects: Record<string, any>;
}

export interface Vec2 { x: number; y: number; }

export interface LevelDef {
  id: string;
  chapter: number;
  nameJP: string;
  nameEN: string;
  timeLimitSec: number;
  quota: number;
  grid: string[];
  tileLegend: Record<string, string>;
  playerSpawn: Vec2;
  shibaSpawn: Vec2;
  bins: Vec2[];
  hotspots: Vec2[];
  poopRules: Record<string, any>;
  shibaRules: Record<string, any>;
  powerUps: string[];
  notes?: string | null;
}

export interface GameData {
  items: ItemDef[];
  powerUps: PowerUpDef[];
  levels: LevelDef[];
  stringsEN: Record<string,string>;
  stringsJA: Record<string,string>;
}
