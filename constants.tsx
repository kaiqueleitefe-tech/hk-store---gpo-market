import { GPOItem, Feedback } from './types';
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
    id: 'ptero',
    name: 'Ryu Ryu no Mi (Pteranodon)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Transforme-se em um Pteranodon gigante. Mobilidade aérea e dano massivo.',
    price: 25.00,
    originalPrice: 280.00, // <--- PROMOÇÃO
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
    originalPrice: 150.00, // <--- REMOVA ESTA LINHA PARA TIRAR DA PROMOÇÃO
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
    price: 170.00,
    originalPrice: 195.00, // <--- EM PROMOÇÃO
    stock: 0,
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/c/c4/Uo_Uo_no_Mi_Model_Seiryu_Infobox.png",
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
    price: 230.00,
    stock: 1,
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/0/0b/Tori_Tori_no_Mi_Model_Phoenix_Infobox.png",
    stats: ['Blue Flames', 'Healing Pulse', 'Phoenix Form']
  },
  {
    id: 'Budhha',
    name: 'Uo Uo no Mi (Budhha)',
    rarity: 'Mythical',
    category: 'Fruits',
    description: 'Mythical Zoan.',
    price: 15.00,
    originalPrice: 195.00, // <--- EM PROMOÇÃO
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
    originalPrice: 45.00, // PROMOÇÃO
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
    originalPrice: 35.00, // PROMOÇÃO
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
    id: 'dark-blade',
    name: 'Dark Blade (Yoru)',
    rarity: 'Mythical',
    category: 'Weapons',
    description: 'A espada negra lendária do Mihawk. O auge do poder.',
    price: 299.00,
    originalPrice: 350.00, // <--- EM PROMOÇÃO
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
    price: 250.00,
    stock: 1,
    imageUrl: "https://i.pinimg.com/originals/11/48/4d/11484d33a1f1076b668f185c63016462.png",
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
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/d/de/Demon_Jester%27s_Scythe.png",
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
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/6/6f/Iceborn_Katana.png",
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
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/b/bd/Iceborn_Blade.png",
    stats: ['Ice Spikes', 'Glacial Slam']
  },
  {
    id: 'ice-rapier',
    name: 'Iceborn Rapier',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 85.00,
    stock: 5,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/b/b8/Iceborn_Rapier.png",
    stats: ['Piercing Cold', 'Flash Freeze']
  },
  {
    id: 'ice-daggers',
    name: 'Iceborn Daggers',
    rarity: 'Legendary',
    category: 'Weapons',
    price: 75.00,
    stock: 6,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/4/4b/Iceborn_Daggers.png",
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
    price: 150.00,
    stock: 3,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/2/29/Roger%27s_Outfit.png",
    stats: ['+350 HP', '+50 Stamina', '+5 Stamina Regen']
  },
  {
    id: 'big-mama-outfit-m',
    name: "Big Mama's Outfit (Male)",
    rarity: 'Legendary',
    category: 'Armor',
    price: 135.00,
    stock: 2,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/b/be/Big_Mama%27s_Outfit_Male.png",
    stats: ['+350 HP', '+3.5 HP Regen']
  },
  {
    id: 'big-mama-outfit-f',
    name: "Big Mama's Outfit (Female)",
    rarity: 'Legendary',
    category: 'Armor',
    price: 125.00,
    stock: 2,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/5/52/Big_Mama%27s_Outfit_Female.png",
    stats: ['+275 HP', '+4.5 Stamina Regen']
  },
  {
    id: 'mochi-emperor-outfit',
    name: "Mochi Emperor's Outfit",
    rarity: 'Legendary',
    category: 'Armor',
    price: 140.00,
    stock: 3,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/8/87/Mochi_Emperor_Outfit.png",
    stats: ['+225 HP', '+5% Sword DMG']
  },
  {
    id: 'hawk-eye-outfit',
    name: "Hawk Eye's Outfit",
    rarity: 'Legendary',
    category: 'Armor',
    price: 130.00,
    stock: 2,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/b/b2/Hawk_Eye_Outfit.png",
    stats: ['+150 HP', '+5% Sword DMG']
  },
  {
    id: 'sunken-armor',
    name: "Sunken Armor",
    rarity: 'Legendary',
    category: 'Armor',
    price: 110.00,
    stock: 1,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/0/07/Sunken_Armor.png",
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
    price: 95.00,
    stock: 5,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/8/87/Hawk_Eye_Hat.png",
    stats: ['+10% Sword DMG Multiplier']
  },
  {
    id: 'mochi-emperor-scarf',
    name: "Mochi Emperor's Scarf",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 110.00,
    stock: 4,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/3/3b/Mochi_Emperor_Scarf.png",
    stats: ['+70 HP', '+3% Sword DMG']
  },
  {
    id: 'rogers-hat',
    name: "Roger's Hat",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 75.00,
    stock: 6,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/5/5c/Roger%27s_Hat.png",
    stats: ['+90 HP', '+3 HP Regen']
  },
  {
    id: 'sunken-helmet',
    name: "Sunken Helmet",
    rarity: 'Legendary',
    category: 'Accessories',
    price: 85.00,
    stock: 3,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/a/a2/Sunken_Helmet.png",
    stats: ['+4 Stamina Regen']
  },
  {
    id: 'big-mama-hat',
    name: "Big Mama's Hat",
    rarity: 'Epic',
    category: 'Accessories',
    price: 40.00,
    stock: 10,
    imageUrl: "https://static.wikia.nocookie.net/grand-piece-online/images/8/8e/Big_Mama%27s_Hat.png",
    stats: ['+85 HP', '+2.5 HP Regen']
  },

  /* 
    ============================================================================
    SESSÃO: ITENS ESPECIAIS (MISC)
    ============================================================================
  */
  { 
    id: 'ase', 
    name: 'All Seeing Eye', 
    rarity: 'Mythical', 
    category: 'Items', 
    price: 390.00,
    originalPrice: 450.00, // <--- EM PROMOÇÃO
    description: '2x Logia Rate e localização exata de frutas no mapa.',
    stock: 2,
    imageUrl: "https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf873270034a0a09d663b6526-olho-iluminado-egipcio.png",
    stats: ['2x Fruit Rate', 'ESP Fruits']
  }
];

export const FEEDBACK_DATA: Feedback[] = [
  { id: 'f1', user: 'zKuroo_', rating: 5, comment: 'Ope Ope no Mi entregue em 5 minutos! Rápido no Discord.', date: '12/05/2024', verified: true, purchasedItem: 'Ope Ope no Mi' },
  { id: 'f2', user: 'LuffyBR_99', rating: 5, comment: 'Vendi meu All Seeing Eye. Pix caiu na hora!', date: '10/05/2024', verified: true, purchasedItem: 'All Seeing Eye' },
];
