import { GPOItem, Feedback } from './types';
import soul from './assets/soul.jpg'
import budda from './assets/buddha.jpg'
import mochi from './assets/mochi.jpg';
import ope from './assets/ope.jpg'
import venom from './assets/venom.jpg'
import ptero from './assets/ptero.jpg'
import pika from './assets/pika.jpg'
import magu from './assets/magu.jpg'
import mera from './assets/mera.jpg'
import goro from './assets/goro.jpg'
import hie from './assets/hie.jpg'
import zushi from './assets/zushi.jpg'
import gura from './assets/gura.jpg'
import ito from './assets/ito.jpg'
import paw from './assets/paw.jpg'
import yuki from './assets/yuki.jpg'
import yami from './assets/yami.jpg'
import suna from './assets/suna.jpg'
import yoru from './assets/yoru.jpg'
import kage from './assets/kage.jpg'
import dragon from './assets/dragon.jpg'
import tori from './assets/tori.jpg'
import ase from './assets/ase.jpg'
import bigfitm from './assets/bigfitm.jpg'
import bigfitf from './assets/bigfitf.jpg'
import bighat from './assets/bighat.jpg'
import sukecap from './assets/capsuk.jpg'
import fishbait from './assets/fishbait.jpg'
import icebornd from './assets/iceborn daggers.jpg'
import icebordb from './assets/icebornblade.jpg'
import icebordr from './assets/icebornrapier.jpg'
import jfoice from './assets/jfoice.jpg'
import katakurifit from './assets/katakurifit.jpg'
import kikoku from './assets/kikoku.jpg'
import legchest from './assets/legchest.jpg'
import mcchest from './assets/mcchest.jpg'
import mihalkhat from './assets/mihalk hat.jpg'
import mihalkfit from './assets/mihalkfit.jpg'
import rogerfit from './assets/roger fit.jpg'
import rogerhar from './assets/roger hat.jpg'
import sukenarm from './assets/sukenArm.jpg'
import katakuriscraf from './assets/katakuriscraf.jpg'
import rogerace from './assets/roger ace.jpg'
import icekatana from './assets/icebornkatana.jpg'
/**
 * GUIA DE EDIÇÃO PARA O USUÁRIO:
 * 
 * 1. PROMOÇÕES: Para colocar um item em promoção, adicione o campo 'originalPrice' 
 *    com um valor MAIOR que o 'price'. O site calculará a % de desconto automaticamente.
 *    Para remover a promoção, apague a linha do 'originalPrice'.
 * 
 * 2. ESTOQUE: Altere o valor de 'stock'. Se for 0, o botão de compra será desativado.
 * 
 * 3. IMAGENS: Você pode trocar os links de 'imageUrl' por novos links da Wiki ou Discord.
 */

export const GPO_DATA: GPOItem[] = [
  /* 
    ============================================================================
    SESSÃO: FRUTAS MÍTICAS (MYTHICAL FRUITS)
    ============================================================================
  */
 {
    id: 'soul',
    name: 'Soru Soru no Mi (Soul)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'A lendária fruta da Big Mom. Manipule almas, crie Homies poderosos e roube a expectativa de vida dos seus inimigos.',
    price: 75.00,
    originalPrice: 110.00, // <--- PROMOÇÃO
    stock: 2,
    imageUrl: soul,
    stats: ['Zeus', 'Prometheus']
  },
   {
    id: 'ptero',
    name: 'Ryu Ryu no Mi (Pteranodon)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Transforme-se em um Pteranodon gigante. Mobilidade aérea e dano massivo.',
    price: 25.00,
    originalPrice: 40.00, // <--- PROMOÇÃO
    stock: 2,
    imageUrl: ptero,
    stats: ['Flight Boost', 'Beak Dive', 'Ancient Roar']
  },
  {
    id: 'ope',
    name: 'Ope Ope no Mi',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Special Paramecia. Permite o controle absoluto dentro do ROOM.',
    price: 20.00,
    originalPrice: 38.00, // <--- REMOVA ESTA LINHA PARA TIRAR DA PROMOÇÃO
    stock: 5,               // <--- ALTERE O ESTOQUE AQUI
    imageUrl: ope,
    stats: ['Tactical ROOM', 'Gamma Knife', 'Counter Shock', 'Amputate']
  },
  {
    id: 'mochi',
    name: 'Mochi Mochi no Mi',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Special Paramecia. Transforme-se em mochi e use Future Sight.',
    price: 45.00,
    stock: 2,
    imageUrl: mochi,
    stats: ['Unstoppable Mochi', 'Mochi Buzzsaw', 'Power Mochi', 'Future Sight']
  },
  {
    id: 'dragon',
    name: 'Uo Uo no Mi (Dragon)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Mythical Zoan. Torne-se o Dragão Azure e controle os elementos.',
    price: 150.00,
    originalPrice: 200.00, // <--- EM PROMOÇÃO
    stock: 0,
    imageUrl: dragon,
    stats: ['Full Dragon Morph', 'Bolo Breath', 'Dragon Twister']
  },
  {
    id: 'venom',
    name: 'Doku Doku no Mi (Venom)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Paramecia. Ataques que drenam a vida e criam hidras gigantes.',
    price: 35.00,
    stock: 1,
    imageUrl: venom,
    stats: ['Hydra', 'Venom Demon', 'Venom Aura']
  },
  {
    id: 'phoenix',
    name: 'Tori Tori no Mi (Phoenix)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Mythical Zoan. Regeneração passiva extrema e chamas azuis.',
    price: 30.00,
    stock: 1,
    imageUrl: tori,
    stats: ['Blue Flames', 'Healing Pulse', 'Phoenix Form']
  },
  {
    id: 'Budhha',
    name: 'Hito Hito no Mi (Budhha)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Mythical Zoan.',
    price: 20.00,
    originalPrice: 30.00, // <--- EM PROMOÇÃO
    stock: 3,
    imageUrl: budda,
    stats: ['Palm Strike', 'Judgement Impact', 'Buddha Transformation']
  },
 /* 
    ============================================================================
    SESSÃO: FRUTAS LENDÁRIAS (LEGENDARY FRUITS)
    ============================================================================
  */
  {
    id: 'pika',
    name: 'Pika Pika no Mi (Light)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia. A fruta da luz. Velocidade extrema e ataques de laser massivos.',
    price: 20.00,
    originalPrice: 60.00, // PROMOÇÃO
    stock: 10,
    imageUrl: pika,
    stats: ['Light Kick', 'Jewels of Light', 'Mirror Kick', 'Light Flight']
  },
  {
    id: 'magu',
    name: 'Magu Magu no Mi (Magma)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia. O maior poder ofensivo. Derreta seus inimigos com lava.',
    price: 12.00,
    originalPrice: 25.00, // PROMOÇÃO
    stock: 8,
    imageUrl: magu,
    stats: ['Magma Fist', 'Magma Rain', 'Volcano Blast', 'Magma Walk']
  },
  {
    id: 'mera',
    name: 'Mera Mera no Mi (Flame)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia. Controle as chamas e incendeie o campo de batalha.',
    price: 8.00,
    originalPrice: 15.00, // PROMOÇÃO
    stock: 12,
    imageUrl: mera,
    stats: ['Hiken (Fire Fist)', 'Fire Pillar', 'Fire Fly', 'Enkai']
  },
  {
    id: 'goro',
    name: 'Goro Goro no Mi (Thunder)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia. Torne-se o próprio trovão. Mobilidade e dano elétrico.',
    price: 5.00,
    stock: 7,
    imageUrl: goro,
    stats: ['El Thor', 'Raigo', 'Volt Discharge', 'Lightning Flash']
  },
  {
    id: 'hie',
    name: 'Hie Hie no Mi (Ice)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia. Congele o mar e seus oponentes com facilidade.',
    price: 5.00,
    stock: 15,
    imageUrl: hie,
    stats: ['Ice Age', 'Ice Partisan', 'Ice Bike', 'Pheasant Peck']
  },
  {
    id: 'zushi',
    name: 'Zushi Zushi no Mi (Gravity)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Paramecia. Controle a gravidade e invoque meteoros do céu.',
    price: 5.00,
    stock: 20,
    imageUrl: zushi,
    stats: ['Gravity Push', 'Meteor Strike', 'Gravity Blade']
  },
  {
    id: 'gura',
    name: 'Gura Gura no Mi (Tremor)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Paramecia. A fruta que pode destruir o mundo. Ondas de choque brutais.',
    price: 5.00,
    stock: 5,
    imageUrl: gura,
    stats: ['Seaquake', 'Island Shake', 'Shock Punch']
  },
  {
    id: 'ito',
    name: 'Ito Ito no Mi (String)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Paramecia. Manipule fios afiados e controle seus inimigos como marionetes.',
    price: 5.00,
    originalPrice: 10.00, // PROMOÇÃO
    stock: 9,
    imageUrl: ito,
    stats: ['Birdcage', 'Overheat', 'Parasite Strings']
  },
  {
    id: 'paw',
    name: 'Nikyu Nikyu no Mi (Paw)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Repila qualquer coisa. Teletransporte e canhões de ar.',
    price: 5.00,
    stock: 8,
    imageUrl: paw,
    stats: ['Ursus Shock', 'Pad Ho', 'Repel Travel']
  },
  {
    id: 'yuki',
    name: 'Yuki Yuki no Mi (Snow)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia de Neve. Crie tempestades de gelo e devore inimigos.',
    price: 5.00,
    stock: 10,
    imageUrl: yuki,
    stats: ['Snow Storm', 'White Out', 'Snow Rabbit']
  },
  {
    id: 'yami',
    name: 'Yami Yami no Mi (Darkness)',
    rarity: 'Legendary',
    category: 'Fruits',
    description: 'Logia da Escuridão. Anule os poderes de outras frutas.',
    price: 5.00,
    stock: 6,
    imageUrl: yami,
    stats: ['Black Hole', 'Liberation', 'Dark Vortex']
  },
    {
    id: 'suna',
    name: 'Suna Suna no Mi (Sand)',
    rarity: 'Legendary',
    category: 'Fruits',
    price: 5.00,
    stock: 18,
    imageUrl: suna,
    stats: ['Desert Spada', 'Sand Tornado']
  },
  {
    id: 'kage',
    name: 'Kage Kage no Mi (Shadow)',
    rarity: 'Legendary',
    category: 'Fruits',
    price: 5.00,
    stock: 10,
    imageUrl: kage,
    stats: ['Shadow Bat', 'Brick Bat']
  },
  /* 
    ============================================================================
    SESSÃO: ARMAS DE ELITE (WEAPONS)
    ============================================================================
  */
  {
    id: 'rogerace',
    name: 'Roger ace (Ace)',
    rarity: 'Mythical',
    category: 'Weapons',
    description: 'A espada negra lendária do Mihawk. O auge do poder.',
    price: 40.00,
    originalPrice: 60.00, // <--- EM PROMOÇÃO
    stock: 1,
    imageUrl: rogerace,
    stats: ['Final Retort', 'Laughing Counter', 'Overflow', 'Divine Departure']
  },
  {
    id: 'dark-blade',
    name: 'Dark Blade (Yoru)',
    rarity: 'Mythical',
    category: 'Weapons',
    description: 'A espada negra lendária do Mihawk. O auge do poder.',
    price: 50.00,
    originalPrice: 90.00, // <--- EM PROMOÇÃO
    stock: 1,
    imageUrl: yoru,
    stats: ['World\'s Strongest Slash', 'Night Sky', 'Grand Slasher']
  },
  {
    id: 'kikoku',
    name: 'Kikoku',
    rarity: 'Mythical',
    category: 'Weapons',
    description: 'A espada amaldiçoada de Trafalgar Law.',
    price: 0,
    stock: 0,
    imageUrl: kikoku,
    stats: ['Room Compatibility', 'High Range Slash', 'Gamma Slash']
  },
  {
    id: 'jester-scythe',
    name: 'Demon Jester\'s Scythe',
    rarity: 'Legendary',
    category: 'Weapons',
    description: 'A foice aterrorizante do Jester. Dano massivo em área.',
    price: 120.00,
    stock: 2,
    imageUrl: jfoice,
    stats: ['Soul Harvest', 'Jester\'s Nightmare', 'Death Spin']
  },

  /* 
    ============================================================================
    SESSÃO: CONJUNTO ICEBORN (ICE WEAPONS)
    ============================================================================
  */
  {
    id: 'ice-katana',
    name: 'Iceborn Katana',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 75.00,
    originalPrice: 95.00, // <--- EM PROMOÇÃO
    stock: 3,
    imageUrl: icekatana,
    stats: ['Frost Slash', 'Winter\'s Dance']
  },
  {
    id: 'ice-gunblade',
    name: 'Iceborn Gunblade',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 110.00,
    stock: 4,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/0/05/Iceborn_Gunblade.png",
    stats: ['Freeze Shot', 'Bayonet Charge']
  },
  {
    id: 'ice-blade',
    name: 'Iceborn Blade',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 85.00,
    stock: 2,
    imageUrl: icebordb,
    stats: ['Ice Spikes', 'Glacial Slam']
  },
  {
    id: 'ice-rapier',
    name: 'Iceborn Rapier',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 85.00,
    stock: 5,
    imageUrl: icebordr,
    stats: ['Piercing Cold', 'Flash Freeze']
  },
  {
    id: 'ice-daggers',
    name: 'Iceborn Daggers',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 75.00,
    stock: 6,
    imageUrl: icebornd,
    stats: ['Cold Slice', 'Dual Frost']
  },

  /* 
    ============================================================================
    SESSÃO: ARMADURAS E TRAJES (ARMOR)
    ============================================================================
  */
  {
    id: 'rogers-outfit',
    name: "Roger's Outfit",
    rarity: 'Legendary',
    category: 'Armor',
    price: 20.00,
    stock: 3,
    imageUrl: rogerfit,
    stats: ['+350 HP', '+50 Stamina', '+5 Stamina Regen']
  },
  {
    id: 'big-mama-outfit-m',
    name: "Big Mama's Outfit (Male)",
    rarity: 'Legendary',
    category: 'Armor',
    price: 30.00,
    stock: 2,
    imageUrl: bigfitm,
    stats: ['+350 HP', '+3.5 HP Regen']
  },
  {
    id: 'big-mama-outfit-f',
    name: "Big Mama's Outfit (Female)",
    rarity: 'Legendary',
    category: 'Armor',
    price: 30.00,
    stock: 2,
    imageUrl: bigfitf,
    stats: ['+275 HP', '+4.5 Stamina Regen']
  },
  {
    id: 'mochi-emperor-outfit',
    name: "Mochi Emperor's Outfit",
    rarity: 'Legendary',
    category: 'Armor',
    price: 20.00,
    stock: 1,
    imageUrl: katakurifit,
    stats: ['+225 HP', '+5% Sword DMG']
  },
  {
    id: 'hawk-eye-outfit',
    name: "Hawk Eye's Outfit",
    rarity: 'Legendary',
    category: 'Armor',
    price: 15.00,
    stock: 2,
    imageUrl: mihalkfit,
    stats: ['+150 HP', '+5% Sword DMG']
  },
  {
    id: 'sunken-armor',
    name: "Sunken Armor",
    rarity: 'Legendary',
    category: 'Armor',
    price: 15.00,
    stock: 1,
    imageUrl: sukenarm,
    stats: ['+90 HP', '+2 HP Regen']
  },

  /* 
    ============================================================================
    SESSÃO: ACESSÓRIOS (ACCESSORIES)
    ============================================================================
  */
  {
    id: 'hawk-eye-hat',
    name: "Hawk Eye's Hat",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 15.00,
    stock: 5,
    imageUrl: mihalkhat,
    stats: ['+10% Sword DMG Multiplier']
  },
  {
    id: 'mochi-emperor-scarf',
    name: "Mochi Emperor's Scarf",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 20.00,
    stock: 4,
    imageUrl: katakuriscraf,
    stats: ['+70 HP', '+3% Sword DMG']
  },
  {
    id: 'rogers-hat',
    name: "Roger's Hat",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 15.00,
    stock: 6,
    imageUrl: rogerhar,
    stats: ['+90 HP', '+3 HP Regen']
  },
  {
    id: 'sunken-helmet',
    name: "Sunken Helmet",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 15.00,
    stock: 3,
    imageUrl: sukecap,
    stats: ['+4 Stamina Regen']
  },
  {
    id: 'big-mama-hat',
    name: "Big Mama's Hat",
    rarity: 'Epic',
    category: 'Accessories',
    price: 10.00,
    stock: 10,
    imageUrl: bighat,
    stats: ['+85 HP', '+2.5 HP Regen']
  },

  /* 
    ============================================================================
    SESSÃO: ITENS ESPECIAIS (MISC)
    ============================================================================
  */
  { 
    id: 'mcchest', 
    name: 'Mithical Chest', 
    rarity: 'Mythical', 
    category: 'Items', 
    price: 60.00,
    originalPrice: 70.00, // <--- EM PROMOÇÃO
    description: 'Bau De Fruta aleatoria Mitica',
    stock: 2,
    imageUrl: mcchest,
    stats: ['1 Fruta Mitica Garantida']
  },
   { 
    id: 'LegChets', 
    name: 'Legendary Chest', 
    rarity: 'Legendary', 
    category: 'Items', 
    price: 10.00,
    originalPrice: 18.00, // <--- EM PROMOÇÃO
    description: 'Bau De Fruta aleatoria Lendaria',
    stock: 2,
    imageUrl: legchest,
    stats: ['1 Fruta Lendaria Garantida']
  },
  { 
    id: 'ase ', 
    name: 'All Seeing Eye', 
    rarity: 'Mythical', 
    category: 'Items', 
    price: 390.00,
    originalPrice: 450.00, // <--- EM PROMOÇÃO
    description: '2x Logia Rate e localização exata de frutas no mapa.',
    stock: 0,
    imageUrl: ase,
    stats: ['2x Fruit Rate', 'ESP Fruits']
  },
  /* 
    ============================================================================
    SESSÃO: ISCAS (BAITS)
    ============================================================================
  */
  {
    id: 'legendary-bait',
    name: 'Isca de Peixe Lendária',
    rarity: 'Legendary',
    category: 'Baits',
    description: 'Aumenta drasticamente as chances de pescar frutas Lendárias e Míticas Com a DF ROD.',
    price: 3.90,
    originalPrice: 5.00,
    stock: 50,
    imageUrl: fishbait,
    stats: ['+50% Legendary Chance', 'High Tier Loot']
  }
  
];

export const FEEDBACK_DATA: Feedback[] = [
  { id: 'f1', user: 'zKuroo_', rating: 5, comment: 'Ope Ope no Mi entregue em 5 minutos! Rápido no Discord.', date: '12/05/2024', verified: true, purchasedItem: 'Ope Ope no Mi' },
  { id: 'f2', user: 'LuffyBR_99', rating: 5, comment: 'Vendi meu All Seeing Eye. Pix caiu na hora!', date: '10/05/2024', verified: true, purchasedItem: 'All Seeing Eye' },
];
