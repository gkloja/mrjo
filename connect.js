const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, DisconnectReason } = require('@whiskeysockets/baileys');
const { payment } = require("./mercado-pago-API/index.js")
const sharp = require('sharp');
const ffmpeg = require("fluent-ffmpeg");
const fetch = require('node-fetch');
const { fs, Boom, axios, crypto, util, P, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, banner2, banner3, colors, getGroupAdmins } = require('./exports.js')
const { isFiltered8, addFilter8 } = require('./spam/spam8.js')  
const cors = require("cors");
const { Jimp } = require('jimp');
const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache, insert, response } = require('./exports.js');
// Garantir que a pasta de uploads seja servida estaticamente

const { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");
var { fundo1, fundo2 } = require("./settings/links_img.json");
const pino = require('pino');
const path = require('path');


// =========================================================
// CONFIGURAÇÃO DO MULTER PARA UPLOADS (ÚNICA E CORRETA)
// =========================================================
const FormData = require('form-data');
const multer = require('multer');
// Garantir que a pasta de uploads exista
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('📁 Pasta de uploads criada:', uploadDir);
}

const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')



   
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')

const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
const { cekDuluHasilArmasNya, 
                     addInventoriArmas, 
                     addAWM,
                     addAK47, 
                     addADÁGA,
                     addPISTOLA,					 
                     kurangAWM,
                     kurangAK47, 
                     kurangADÁGA, 
					 kurangPISTOLA,
                     getAWM,
                     getAK47,
                     getPISTOLA,					 
                     getADÁGA  
					 } = require('./storage/user/armas.js')  

function Goldrgs(index){
fs.writeFileSync("./armor/funcoes/golds.json", JSON.stringify(index, null, 2) + '\n')
}


const express = require('express');
const app = express();
const router = express.Router();
const CFonts= require('cfonts');
const chalk = require('chalk');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//const path = require('path');
//const expressLayout = require('express-ejs-layouts');
const rateLimit = require("express-rate-limit");
const passport = require('passport');
const flash = require('connect-flash');
const MemoryStore = require('memorystore')(session);
const compression = require('compression');

const apiRouters = require('./routes/api');
const userRouters = require('./routes/users');

//const { isAuthenticated } = require('./lib/auth');
const { connectMongoDb } = require('./database/connect');
const { getApikey } = require('./database/db');
const { addGolds, subtractGolds, getGolds, checkUsername } = require("./database/db");
const { port } = require('./settings');
const site_nome = `Fabi Bot`
const PORT = process.env.PORT || port;

// Caminhos

const MARKET_DIR = path.join(__dirname, 'public', 'pokemon', 'market');
const LISTINGS_DIR = path.join(MARKET_DIR, 'listings');
const TRANSACTIONS_DIR = path.join(MARKET_DIR, 'transactions');
const HISTORY_DIR = path.join(MARKET_DIR, 'history');

// Garantir diretórios
function ensureMarketDirs() {
  [MARKET_DIR, LISTINGS_DIR, TRANSACTIONS_DIR, HISTORY_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Gerar ID único
function generateMarketId(prefix = 'LIST') {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = prefix + '_';
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Encontrar arquivo do usuário - VERSÃO CORRIGIDA
function findUserFile(userId) {
  const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
  
  if (!fs.existsSync(POKEMON_USERS_DIR)) {
    console.log(`[USER] Diretório não existe: ${POKEMON_USERS_DIR}`);
    return null;
  }
  
  console.log(`[USER] Buscando arquivo para: ${userId}`);
  
  // Normalizar o userId para diferentes formatos
  const normalizeId = (id) => {
    // Remover prefixo/sufixo comum
    let normalized = id;
    
    // Se for número puro, adicionar sufixo padrão
    if (/^\d+$/.test(id)) {
      normalized = `${id}_s_whatsapp_net`;
    }
    
    // Garantir que tem o formato correto
    if (!normalized.includes('_s_whatsapp_net') && !normalized.includes('_lid')) {
      // Adicionar sufixo baseado no formato
      if (id.includes('@s.whatsapp.net')) {
        normalized = id.replace('@s.whatsapp.net', '_s_whatsapp_net');
      } else if (id.includes('@c.us')) {
        normalized = id.replace('@c.us', '_c_us');
      } else if (/^\d+$/.test(id)) {
        normalized = `${id}_s_whatsapp_net`;
      }
    }
    
    return normalized.replace(/[^a-zA-Z0-9_]/g, '_');
  };
  
  // Tentar múltiplos formatos
  const possibleIds = [
    // Formato: 16627052205_s_whatsapp_net.json
    normalizeId(userId),
    
    // Formato numérico puro
    userId.replace(/\D/g, ''),
    
    // Formato WhatsApp padrão
    userId.replace('@s.whatsapp.net', '').replace(/\D/g, ''),
    
    // Formato alternativo
    `${userId.replace(/\D/g, '')}_s_whatsapp_net`,
    `${userId.replace(/\D/g, '')}_c_us`,
    `${userId.replace(/\D/g, '')}_lid`,
    
    // IDs originais
    userId,
    userId.replace('@', '_').replace('.', '_'),
    userId.replace(/[@\.]/g, '_')
  ];
  
  // Remover duplicados
  const uniqueIds = [...new Set(possibleIds.filter(id => id && id.length > 0))];
  
  console.log(`[USER] IDs para tentar:`, uniqueIds);
  
  // Tentar cada formato
  for (const tryId of uniqueIds) {
    const filePath = path.join(POKEMON_USERS_DIR, `${tryId}.json`);
    console.log(`[USER] Tentando: ${tryId} -> ${filePath}`);
    
    if (fs.existsSync(filePath)) {
      console.log(`[USER] Encontrado: ${filePath}`);
      return filePath;
    }
  }
  
  // Se não encontrou pelo nome do arquivo, verificar conteúdo
  console.log(`[USER] Buscando por conteúdo nos arquivos...`);
  const files = fs.readdirSync(POKEMON_USERS_DIR);
  
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    
    const filePath = path.join(POKEMON_USERS_DIR, file);
    try {
      const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Verificar se o arquivo pertence a este usuário
      if (userData.userId === userId) {
        console.log(`[USER] Encontrado por userId: ${filePath}`);
        return filePath;
      }
      
      // Verificar por correspondência parcial
      const cleanUserId = userId.replace(/\D/g, '');
      const cleanFileId = file.replace('.json', '').replace(/\D/g, '');
      const cleanDataId = userData.userId?.replace(/\D/g, '') || '';
      
      if (cleanFileId.includes(cleanUserId) || cleanUserId.includes(cleanFileId)) {
        console.log(`[USER] Encontrado por correspondência numérica: ${filePath}`);
        return filePath;
      }
      
      if (cleanDataId.includes(cleanUserId) || cleanUserId.includes(cleanDataId)) {
        console.log(`[USER] Encontrado por userId numérico: ${filePath}`);
        return filePath;
      }
      
      // Verificar se o arquivo corresponde ao padrão de nome
      if (file.includes(userId.replace(/\D/g, ''))) {
        console.log(`[USER] Encontrado por padrão de nome: ${filePath}`);
        return filePath;
      }
      
    } catch (error) {
      console.log(`[USER] Erro ao ler ${file}: ${error.message}`);
      continue;
    }
  }
  
  console.log(`[USER] Nenhum arquivo encontrado para: ${userId}`);
  return null;
}

// Garantir que usuário tem arquivo
function ensureUserFile(userId) {
    const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
    
    // Criar diretório se não existir
    if (!fs.existsSync(POKEMON_USERS_DIR)) {
        fs.mkdirSync(POKEMON_USERS_DIR, { recursive: true });
    }
    
    // Extrair apenas números do userId
    const numbers = userId.replace(/\D/g, '');
    
    // Tentar encontrar arquivo existente
    const possibleFiles = [
        `${numbers}_s_whatsapp_net.json`,
        `${numbers}_lid.json`,
        `${numbers}_c_us.json`,
        `${numbers}.json`,
        `user_${numbers}.json`
    ];
    
    for (const fileName of possibleFiles) {
        const filePath = path.join(POKEMON_USERS_DIR, fileName);
        if (fs.existsSync(filePath)) {
            return filePath; // Arquivo já existe
        }
    }
    
    // Se não encontrou, criar novo arquivo
    const fileName = `${numbers}_s_whatsapp_net.json`; // Formato mais comum
    const newUserFile = path.join(POKEMON_USERS_DIR, fileName);
    
    const userData = {
        userId: userId,
        userName: userId.split('@')[0] || userId,
        pokemons: [],
        golds: 1000,
        level: 1,
        experience: 0,
        created_at: new Date().toISOString(),
        last_active: new Date().toISOString()
    };
    
    fs.writeFileSync(newUserFile, JSON.stringify(userData, null, 2));
    return newUserFile;
}

// Obter dados do usuário
async function getUserData(userId) {
  const filePath = findUserFile(userId);
  if (!filePath) return null;
  
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

// Criar listagem
async function createMarketListing(sellerId, pokemon, price) {
  ensureMarketDirs();
  
  const listingId = generateMarketId();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const listing = {
    id: listingId,
    seller_id: sellerId,
    pokemon_id: pokemon.uniqueId || pokemon.id,
    pokemon_data: pokemon,
    price: parseInt(price),
    listed_at: now.toISOString(),
    expires_at: expiresAt.toISOString(),
    status: 'active',
    views: 0,
    favorites: 0,
    offers: []
  };
  
  const filePath = path.join(LISTINGS_DIR, `${listingId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(listing, null, 2));
  
  return listing;
}

// Obter listagens ativas
async function getActiveListings(filters = {}) {
  ensureMarketDirs();
  
  if (!fs.existsSync(LISTINGS_DIR)) return [];
  
  const files = fs.readdirSync(LISTINGS_DIR);
  const listings = [];
  
  for (const file of files) {
    if (file.endsWith('.json')) {
      try {
        const filePath = path.join(LISTINGS_DIR, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        if (data.status !== 'active') continue;
        
        // Aplicar filtros
        let include = true;
        
        if (filters.rarity && data.pokemon_data.rarity !== filters.rarity) {
          include = false;
        }
        
        if (filters.minPrice && data.price < parseInt(filters.minPrice)) {
          include = false;
        }
        
        if (filters.maxPrice && data.price > parseInt(filters.maxPrice)) {
          include = false;
        }
        
        if (filters.search) {
          const searchTerm = filters.search.toLowerCase();
          include = data.pokemon_data.name.toLowerCase().includes(searchTerm);
        }
        
        if (include) {
          // Adicionar nome do vendedor
          const sellerFile = findUserFile(data.seller_id);
          if (sellerFile) {
            try {
              const sellerData = JSON.parse(fs.readFileSync(sellerFile, 'utf8'));
              data.seller_name = sellerData.userName || data.seller_id;
            } catch (e) {
              data.seller_name = data.seller_id;
            }
          }
          
          listings.push(data);
        }
      } catch (e) {
        console.error('Erro ao ler listagem:', e);
      }
    }
  }
  
  // Ordenar
  if (filters.sort === 'price_asc') {
    listings.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'price_desc') {
    listings.sort((a, b) => b.price - a.price);
  } else if (filters.sort === 'newest') {
    listings.sort((a, b) => new Date(b.listed_at) - new Date(a.listed_at));
  } else if (filters.sort === 'force_desc') {
    listings.sort((a, b) => 
      (b.pokemon_data.currentForce || b.pokemon_data.cp || 0) - 
      (a.pokemon_data.currentForce || a.pokemon_data.cp || 0)
    );
  }
  
  return listings;
}

// Obter listagem específica
async function getListing(listingId) {
  const filePath = path.join(LISTINGS_DIR, `${listingId}.json`);
  
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Incrementar visualizações
    data.views = (data.views || 0) + 1;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    // Adicionar nome do vendedor
    const sellerFile = findUserFile(data.seller_id);
    if (sellerFile) {
      try {
        const sellerData = JSON.parse(fs.readFileSync(sellerFile, 'utf8'));
        data.seller_name = sellerData.userName || data.seller_id;
      } catch (e) {
        data.seller_name = data.seller_id;
      }
    }
    
    return data;
  }
  
  return null;
}

// Atualizar listagem
async function updateListing(listingId, updates) {
  const listing = await getListing(listingId);
  if (!listing) return false;
  
  Object.assign(listing, updates);
  
  const filePath = path.join(LISTINGS_DIR, `${listingId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(listing, null, 2));
  
  return true;
}

// Processar venda - VERSÃO CORRIGIDA
async function processSale(listingId, buyerId) {
  console.log(`[MARKET] Processando venda: ${listingId} para ${buyerId}`);
  
  const listing = await getListing(listingId);
  if (!listing) {
    throw new Error('Anúncio não encontrado');
  }
  
  if (listing.status !== 'active') {
    throw new Error(`Anúncio ${listing.status === 'sold' ? 'já vendido' : 'indisponível'}`);
  }
  
  if (listing.seller_id === buyerId) {
    throw new Error('Você não pode comprar seu próprio Pokémon');
  }
  
  // Verificar se o Pokémon ainda existe na listagem
  if (!listing.pokemon_data) {
    throw new Error('Dados do Pokémon não encontrados no anúncio');
  }
  
  console.log(`[MARKET] Pokémon encontrado na listagem: ${listing.pokemon_data.name}`);
  
  // Verificar vendedor
  const sellerFile = findUserFile(listing.seller_id);
  if (!sellerFile) {
    await updateListing(listingId, { 
      status: 'cancelled',
      cancelled_at: new Date().toISOString(),
      reason: 'seller_not_found'
    });
    throw new Error('Vendedor não encontrado');
  }
  
  // Verificar comprador
  const buyerFile = findUserFile(buyerId);
  if (!buyerFile) {
    throw new Error('Comprador não encontrado');
  }
  
  console.log(`[MARKET] Vendedor e comprador encontrados`);
  
  // IMPORTANTE: O Pokémon já está "guardado" na listagem
  // Não precisa procurar no inventário do vendedor
  
  // Criar Pokémon para o comprador a partir dos dados da listagem
  const pokemonData = listing.pokemon_data;
  const now = new Date();
  
  const pokemonForBuyer = {
    ...pokemonData,
    // Garantir ID único
    uniqueId: pokemonData.uniqueId || generateMarketId('POKE'),
    // Adicionar histórico
    marketHistory: pokemonData.marketHistory || [],
    // Informações de compra
    purchaseInfo: {
      type: 'market_purchase',
      listing_id: listingId,
      seller_id: listing.seller_id,
      buyer_id: buyerId,
      purchase_date: now.toISOString(),
      purchase_price: listing.price,
      transaction_id: generateMarketId('TX')
    },
    // Atualizar datas
    obtainedAt: now.toISOString(),
    lastUpdated: now.toISOString()
  };
  
  // Adicionar ao histórico do Pokémon
  pokemonForBuyer.marketHistory.push({
    action: 'purchased',
    buyer_id: buyerId,
    price: listing.price,
    date: now.toISOString(),
    listing_id: listingId
  });
  
  // Remover qualquer referência de mercado anterior
  delete pokemonForBuyer.market_listing;
  delete pokemonForBuyer.listed_at;
  delete pokemonForBuyer.expires_at;
  
  console.log(`[MARKET] Pokémon preparado para transferência`);
  
  // Adicionar Pokémon ao comprador
  const buyerData = JSON.parse(fs.readFileSync(buyerFile, 'utf8'));
  if (!buyerData.pokemons) buyerData.pokemons = [];
  
  buyerData.pokemons.push(pokemonForBuyer);
  
  // Calcular taxas
  const marketFee = Math.floor(listing.price * 0.05);
  const sellerReceives = listing.price - marketFee;
  
  console.log(`[MARKET] Taxa: ${marketFee}, Vendedor recebe: ${sellerReceives}`);
  
  // Criar transação
  const transactionId = generateMarketId('TX');
  const transaction = {
    id: transactionId,
    listing_id: listingId,
    seller_id: listing.seller_id,
    buyer_id: buyerId,
    pokemon_id: pokemonForBuyer.uniqueId,
    pokemon_name: pokemonForBuyer.name,
    price: listing.price,
    market_fee: marketFee,
    seller_receives: sellerReceives,
    transaction_date: now.toISOString(),
    status: 'completed'
  };
  
  // Salvar transação
  const txPath = path.join(TRANSACTIONS_DIR, `${transactionId}.json`);
  fs.writeFileSync(txPath, JSON.stringify(transaction, null, 2));
  
  // Atualizar histórico
  await updateUserHistory(listing.seller_id, 'sold', transaction);
  await updateUserHistory(buyerId, 'bought', transaction);
  
  // Atualizar listagem como vendida
  await updateListing(listingId, {
    status: 'sold',
    buyer_id: buyerId,
    sold_at: now.toISOString(),
    transaction_id: transactionId
  });
  
  console.log(`[MARKET] Transação ${transactionId} concluída com sucesso`);
  
  return {
    success: true,
    transactionId,
    pokemon: pokemonForBuyer,
    price: listing.price,
    sellerReceives,
    marketFee
  };
}

// Função auxiliar atualizada
async function updateUserHistory(userId, type, transaction) {
  const historyDir = path.join(__dirname, 'public', 'pokemon', 'market', 'history');
  if (!fs.existsSync(historyDir)) {
    fs.mkdirSync(historyDir, { recursive: true });
  }
  
  const historyFile = path.join(historyDir, `${userId}.json`);
  let history = { transactions: [] };
  
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
  }
  
  const historyEntry = {
    type: type,
    transaction_id: transaction.id,
    other_party: type === 'sold' ? transaction.buyer_id : transaction.seller_id,
    pokemon_name: transaction.pokemon_name,
    price: transaction.price,
    date: transaction.transaction_date,
    fee: transaction.market_fee,
    net_amount: type === 'sold' ? transaction.seller_receives : transaction.price
  };
  
  history.transactions.push(historyEntry);
  
  // Manter apenas as últimas 50 transações
  if (history.transactions.length > 50) {
    history.transactions = history.transactions.slice(-50);
  }
  
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
}


// Obter estatísticas
async function getMarketStats() {
  const listings = await getActiveListings();
  
  const totalListings = listings.length;
  const totalPrice = listings.reduce((sum, l) => sum + l.price, 0);
  const avgPrice = totalListings > 0 ? Math.floor(totalPrice / totalListings) : 0;
  
  const sellers = [...new Set(listings.map(l => l.seller_id))];
  
  return {
    totalListings,
    averagePrice: avgPrice,
    activeSellers: sellers.length,
    totalPrice
  };
}

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"]
}));
const FileStore = require('session-file-store')(session);

app.use(session({
  store: new FileStore({
    path: './sessions', // pasta onde os arquivos de sessão serão salvos
    retries: 0
  }),
  secret: 'Kbral&Kalena',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000 // 7 dias
  }
}));

/*
//connectMongoDb();
const bodyParser = require("body-parser");
app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression())

const limiter = rateLimit({
windowMs: 1 * 60 * 1000, 
max: 2000, 
message: 'Muitos Requisitos.'
});
app.use(limiter);*/


// Adicione no HEAD do backend original
/*app.use((req, res, next) => {
  // Adicionar canonical tag para evitar conteúdo duplicado
  if (req.headers.host === 'br2.bronxyshost.com:4009') {
    res.locals.canonicalUrl = 'https://fabibot.vercel.app' + req.path;
  }
  next();
});*/
// 1. O CORS DEVE VIR PRIMEIRO DE TUDO! (Libera os portões)
// 2. O LEITOR DE PACOTES (Com limite de 20mb e a MÁGICA do type: '*/*')
// Esse type: '*/*' é o que impede o arquivo de salvar [{}, {}, {}] vazios!


// API Key protegida no servidor
const API_KEY = 'kbral';
const BASE_URL = 'http://node.tconect.xyz:1116/api/consulta/';

// Middleware para verificar origem (opcional)
app.use((req, res, next) => {
    const allowedOrigins = ['https://marujodigital.onrender.com', 'https://fabibot.vercel.app', 'http://br2.bronxyshost.com:4009', 'https://marujodigital.onrender.com/marujoconsultas', 'https://marujoflix.shop/marujoconsultas'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    next();
});



const bodyParser = require("body-parser");
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
// 3. COOKIES E VIEWS
app.use(cookieParser());
app.set('view engine', 'ejs');
//app.use(expressLayout);

// 4. PASTAS ESTÁTICAS
app.use(express.static('public'));
app.use('/audios', express.static('audios'));
app.use('/audiosgerados', express.static('audiosgerados'));
// Servir arquivos estáticos (adicione esta linha)

/*app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 86400000, secure: false },  // Garantindo que o cookie seja não seguro para HTTP
    store: new MemoryStore({
        checkPeriod: 86400000
    }),
}));

app.use(express.json());
app.use(cookieParser());*/

app.use(passport.initialize());
app.use(passport.session());
require('./lib/config')(passport);

app.use(flash());

app.use(function(req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
})


// Middleware para contar acessos totais

// Evento de conexão





// Rota principal


const GOLD_PATH = path.join(__dirname, "armor", "funcoes", "golds.json");
function allglob(grupo, usu) {
    let allGolds = [];

    const goldsData = JSON.parse(fs.readFileSync(GOLD_PATH, 'utf-8'));

    goldsData.forEach(grupo => {
        grupo.usus.forEach(usuario => {
            allGolds.push({
                id: usuario.id,
                Golds: usuario.Golds
            });
        });
    });

    allGolds.sort((a, b) => b.Golds - a.Golds);

    const index = allGolds.findIndex(user => user.id === usu);
    return index >= 0 ? index + 1 : null;
}
// Iniciar o servidor



function grupoConfigPath(grupoID) {
    if (!grupoID) {
        console.error('❌ grupoID indefinido');
        return null;
    }

    // Garante que é string
    let sanitizedID = String(grupoID).trim();

    // Caso venha algo estranho (ex: [object Object])
    if (!sanitizedID.includes('@')) {
        console.warn('⚠️ ID sem sufixo, adicionando @g.us automaticamente');
        sanitizedID += '@g.us';
    }

    // Corrige casos de @lid → @s.whatsapp.net (contatos)
    if (sanitizedID.endsWith('@lid')) {
        sanitizedID = sanitizedID.replace('@lid', '@s.whatsapp.net');
    }

    // Remove caracteres inválidos
    sanitizedID = sanitizedID.replace(/[^a-zA-Z0-9@.\-]/g, '');

    const dirPath = path.join(__dirname, 'public', 'grupos');
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    const exactFilePath = path.join(dirPath, `${sanitizedID}.json`);

    // 🔍 Debug opcional:
    // console.log('🔎 Procurando arquivo:', exactFilePath);

    if (fs.existsSync(exactFilePath)) {
        return exactFilePath;
    }

    // 🧠 Caso o arquivo não exista com o nome exato, tenta localizar um que contenha o mesmo prefixo
    const baseName = sanitizedID.split('@')[0];
    const arquivos = fs.readdirSync(dirPath);
    const encontrado = arquivos.find(f => f.startsWith(baseName));

    if (encontrado) {
        // console.log('✅ Arquivo alternativo encontrado:', encontrado);
        return path.join(dirPath, encontrado);
    }

    // ⚠️ Nenhum arquivo correspondente encontrado
    console.error('❌ Nenhum arquivo de configuração encontrado para:', grupoID);
    return null;
}

function obterGoldsAtualizados(grupoID, usuarioID) {
    const goldsData = JSON.parse(fs.readFileSync(GOLD_PATH, 'utf-8'));

    let grupoData = goldsData.find(g => g.grupo === grupoID);
    if (!grupoData) {
        grupoData = { grupo: grupoID, usus: [] };
        goldsData.push(grupoData);
    }

    let usuarioData = grupoData.usus.find(u => u.id === usuarioID);
    if (!usuarioData) {
        usuarioData = { id: usuarioID, Golds: 600, data: getHoje() };
        grupoData.usus.push(usuarioData);
        fs.writeFileSync(GOLD_PATH, JSON.stringify(goldsData, null, 2)); // Salva no arquivo
        return 600;
    }

    return usuarioData.Golds;
}







app.get('/cristoflix', (req, res) => {
res.render('cristoflix', {
nome_site: site_nome
});
});
// Middleware para capturar erros de rota não encontrada




app.get('/price', (req, res) => {
res.render('buyFull', {
nome_site: site_nome
})
})

app.get('/premium', (req, res) => {
res.render('buyFull', {
nome_site: site_nome
})
})



// Processo de login

// Caminho correto para o arquivo de registro




const MENSAGENS_FILE = path.join(__dirname, 'public', 'mensagens.json');

// Middleware para carregar as mensagens do arquivo JSON
function carregarMensagens() {
    try {
        const data = fs.readFileSync(MENSAGENS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}
// Middleware para garantir que o usuário está logado
function verificarLogin(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login'); // Redireciona se não estiver logado
    }
    next();
}



// ==================== CHAT MARINHA COM IA ====================

// Carregar PDF da Marinha
//let marinhaPDFContent = '';


// Variável global para o conteúdo do PDF
let marinhaPDFContent = '';

// Sistema de histórico por usuário
const historicoMarinha = new Map();

// Função para carregar o PDF
function carregarPDFMarinha() {
    return new Promise((resolve) => {
        const pdfParser = new PDFParser();

        pdfParser.on("pdfParser_dataReady", () => {
            marinhaPDFContent = pdfParser.getRawTextContent();
            console.log('✅ PDF da Marinha carregado com sucesso!');
            resolve();
        });

        pdfParser.on("pdfParser_dataError", (err) => {
            console.error('❌ Erro ao carregar PDF da Marinha:', err);

            marinhaPDFContent = `CERIMONIAL DA MARINHA - APOSTILA 2022
Capítulo 1: Bandeira Nacional
Capítulo 2: Bandeiras-Insígnias e Distintivos
Capítulo 3: Procedimentos do Cerimonial à Bandeira
Capítulo 4: Cerimonial da Marinha
Capítulo 5: Código Internacional de Sinais`;
            
            console.log('⚠️ Usando conteúdo fallback do PDF');
            resolve();
        });

        try {
            const pdfPath = path.join(__dirname, 'public', 'apostila-cerimonial-da-marinha.pdf');
            console.log('📂 Tentando carregar PDF de:', pdfPath);
            pdfParser.loadPDF(pdfPath);
        } catch (error) {
            console.error('❌ Erro ao carregar arquivo PDF:', error.message);
            resolve();
        }
    });
}

// Função para buscar no PDF
function buscarNoPDFMarinha(pergunta) {
    if (!marinhaPDFContent || marinhaPDFContent.length < 100) {
        return null;
    }
    
    const perguntaLower = pergunta.toLowerCase();
    const linhas = marinhaPDFContent.split('\n').filter(l => l.trim().length > 20);
    const resultados = [];
    
    // Palavras-chave importantes
    const keywords = [
        'bandeira nacional', 'hasteamento', 'arriamento', 'cerimonial',
        'salva', 'honras', 'portaló', 'insígnia', 'pavilhão',
        'código internacional', 'cis', 'atp', 'sinais',
        'meia adriça', 'mastro', 'embandeiramento'
    ];
    
    for (const linha of linhas) {
        const linhaLower = linha.toLowerCase();
        let pontuacao = 0;
        
        // Verificar palavras da pergunta
        const palavrasPergunta = perguntaLower.split(/\s+/).filter(p => p.length > 3);
        for (const palavra of palavrasPergunta) {
            if (linhaLower.includes(palavra)) {
                pontuacao += 3;
            }
        }
        
        // Verificar keywords
        for (const keyword of keywords) {
            if (linhaLower.includes(keyword)) {
                pontuacao += 2;
            }
        }
        
        if (pontuacao > 2) {
            resultados.push({
                texto: linha.trim(),
                pontuacao: pontuacao,
                comprimento: linha.length
            });
        }
    }
    
    // Ordenar e limitar resultados
    resultados.sort((a, b) => b.pontuacao - a.pontuacao || b.comprimento - a.comprimento);
    
    const topResultados = resultados.slice(0, 5).map(r => r.texto);
    
    if (topResultados.length === 0) {
        return null;
    }
    
    return topResultados.join('\n');
}

// Função IA melhorada com fallbacks
// Função IA com TODAS as APIs que você listou
// ===== BACK-END: CHAT COM IA E SISTEMA DE LOGS =====

// Caminho do arquivo de logs
const LOG_PATH = path.join(__dirname, 'logs', 'chat_logs.json');

// Garantir que a pasta logs existe
if (!fs.existsSync(path.join(__dirname, 'logs'))) {
    fs.mkdirSync(path.join(__dirname, 'logs'));
}

// ===== FUNÇÃO PARA SALVAR LOGS =====
function salvarLogChat(logData) {
    try {
        let logs = [];
        
        // Ler logs existentes
        if (fs.existsSync(LOG_PATH)) {
            const fileContent = fs.readFileSync(LOG_PATH, 'utf8');
            if (fileContent.trim()) {
                logs = JSON.parse(fileContent);
            }
        }
        
        // Adicionar novo log
        logs.push(logData);
        
        // Manter apenas últimos 1000 logs (evitar arquivo muito grande)
        if (logs.length > 1000) {
            logs = logs.slice(-1000);
        }
        
        // Salvar logs
        fs.writeFileSync(LOG_PATH, JSON.stringify(logs, null, 2));
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao salvar log:', error);
        
        // Tentar salvar em arquivo de emergência
        try {
            const emergencyLog = path.join(__dirname, 'logs', 'emergency_log.txt');
            fs.appendFileSync(emergencyLog, JSON.stringify(logData) + '\n');
        } catch (e) {
            console.error('❌ Erro crítico ao salvar log:', e);
        }
        
        return false;
    }
}

// ===== FUNÇÃO PARA OBTER IP DO USUÁRIO =====
function obterIPCliente(req) {
    return req.headers['x-forwarded-for']?.split(',')[0] || 
           req.headers['x-real-ip'] || 
           req.headers['cf-connecting-ip'] || // Cloudflare
           req.connection?.remoteAddress || 
           req.socket?.remoteAddress ||
           req.ip || 
           'IP_DESCONHECIDO';
}

// ===== FUNÇÃO PARA OBTER USER-AGENT =====
function obterUserAgent(req) {
    return req.headers['user-agent'] || 'DESCONHECIDO';
}

// ===== FUNÇÃO PARA OBTER HORÁRIO BR =====
function obterHorarioBR() {
    const agora = new Date();
    return {
        completo: agora.toLocaleString("pt-BR", { 
            timeZone: "America/Sao_Paulo",
            dateStyle: 'full',
            timeStyle: 'medium'
        }),
        data: agora.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        hora: agora.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        timestamp: agora.getTime(),
        timezone: "America/Sao_Paulo"
    };
}

// ===== SUA FUNÇÃO obterRespostaIA (adaptada) =====

async function obterRespostaIA(prompt) {
    console.log(`🤖 Tentando obter resposta da IA com TODAS as APIs...${prompt}`);
    
    const prompt2 = `Você é o Marinheiro Tulho, inteligencia artificial dos sites: https://marujodigital.onrender.com/ https://marujodigital.onrender.com/#fonoclama/  https://marujodigital.onrender.com/#sinais/  https://marujodigital.onrender.com/turma-papa-2023  
    principalmente esse site AQUI
    https://marujodigital.onrender.com/#fonoclama/
    que fala as coisas que devem falar no fonoclama,
     seja direto nas respostas, ou seja, sempre resume e nunca termina fazendo uma pergunta, pode usar gírias militar, e verifica se no site tem resposta e usa a resposta exata do site, se tiver fale o que os sites dizem. Agora responda: ${prompt}`
    
    // Lista COMPLETA de todas as APIs que você quer tentar
const urls = [
        {
            nome: "SystemZone Copilot",
            url: `https://systemzone.store/api/copilot?text=${encodeURIComponent(prompt2)}`,
            extrair: res => res.result && !res.result.includes("Erro") && res.result
        },
        {
            nome: "SystemZone Gemini Lite",
            url: `https://systemzone.store/api/ai/gemini-lite?prompt=${encodeURIComponent(prompt2)}`,
            extrair: res => res.result && !res.result.includes("Erro") && res.result
        },
        {
            nome: "NexyFuture",
            url: `https://api.nexfuture.com.br/api/inteligencias/gemini?query=${encodeURIComponent(prompt2)}`,
            extrair: res => res.resposta && !res.resposta.includes("Erro") && res.resposta
        },
        {
            nome: "NexyFuture Pro",
            url: `https://api.nexfuture.com.br/api/inteligencias/gemini/pro?query=${encodeURIComponent(prompt2)}`,
            extrair: res => res.resposta && !res.resposta.includes("Erro") && res.resposta
        },
        {
            nome: "ZenzxZ DeepSeek-v3",
            url: `https://api.zenzxz.my.id/api/ai/chatai?query=${encodeURIComponent(prompt2)}&model=deepseek-v3`,
            extrair: res => res.data?.answer && res.success && res.data.answer
        }
    ];

    for (const api of urls) {
        try {
            const res = await fetchJson(api.url);
            const resposta = api.extrair(res);

            if (resposta) {
                const textoFinal = typeof resposta === 'string' ? resposta : (
                    res.result?.response || res.answer || res.result?.data || res.resposta || res.msg || res.result
                );

                console.log(`✅ SITE Resposta da API ${api.nome}:`, textoFinal);
                return textoFinal
            }
        } catch (err) {
            console.error(`❌ Erro na API ${api.nome}:`, err.message);
        }
    }

    return null; // Nenhuma API funcionou
}
// ===== ROTA PRINCIPAL DO CHAT =====
app.get('/api/chat', async (req, res) => {
    // Habilitar CORS
    res.header('Access-Control-Allow-Origin', '*');
    
    // Pegar parâmetros da query
    const { 
        pergunta, 
        userId = "site",
        user = "Visitante" 
    } = req.query;
    
    // 🔒 VALIDAÇÕES (igual seu estilo)
    if (!userId || (userId !== "https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x" && userId !== "site")) {
        return res.status(400).json({ 
            error: 'ID_USUARIO_INVALIDO', 
            message: '⚠️ ID do usuário inválido. Use: https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x' 
        });
    }
    
    if (!pergunta || pergunta.trim().length < 2) {
        return res.status(400).json({ 
            error: 'PERGUNTA_INVALIDA', 
            message: '⚠️ Digite uma pergunta (mínimo 2 caracteres)' 
        });
    }
    
    if (!user || user.length < 3) {
        return res.status(400).json({ 
            error: 'USUARIO_INVALIDO', 
            message: 'Usuário inválido. Entre em contato: +55 21 98904-7220' 
        });
    }

    // 📍 Obter informações da requisição
    const userIP = obterIPCliente(req);
    const userAgent = obterUserAgent(req);
    const horario = obterHorarioBR();
    
    // 🕒 Marcar tempo de início
    const inicio = Date.now();
    
    try {
        // Chamar IA
        const resultado = await obterRespostaIA(pergunta);
        
        // Calcular tempo de resposta
        const tempoResposta = Date.now() - inicio;
        
        // 📊 LOG COMPLETO
        const logEntry = {
            id: `chat_${horario.timestamp}_${Math.random().toString(36).substr(2, 6)}`,
            
            // Dados da pergunta
            pergunta: pergunta.trim().substring(0, 300),
            userId: userId.substring(0, 100),
            user: user.substring(0, 50),
            
            // Dados da resposta
            sucesso: resultado.sucesso,
            resposta: resultado.sucesso ? resultado.resposta.substring(0, 500) : null,
            api_utilizada: resultado.api,
            tempo_resposta_ms: tempoResposta,
            
            // Informações técnicas
            ip: userIP,
            user_agent: userAgent.substring(0, 200),
            
            // Horários
            horario_completo: horario.completo,
            data: horario.data,
            hora: horario.hora,
            timestamp: horario.timestamp,
            timezone: horario.timezone,
            
            // Metadados
            versao: "1.0.0",
            origem: userId === "site" ? "site" : "whatsapp"
        };
        
        // Salvar log
        salvarLogChat(logEntry);
        
        // Log no console
        console.log(`\n📝 CHAT LOG:`);
        console.log(`   👤 Usuário: ${user}`);
        console.log(`   ❓ Pergunta: ${pergunta.substring(0, 50)}...`);
        console.log(`   🤖 Status: ${resultado.sucesso ? '✅ Sucesso' : '❌ Falha'}`);
        console.log(`   ⚡ Tempo: ${tempoResposta}ms`);
        console.log(`   📍 IP: ${userIP}`);
        console.log(`   🕒 ${horario.completo}\n`);
        
        if (resultado.sucesso) {
            // Sucesso
            res.json({
                sucesso: true,
                resposta: resultado.resposta,
                api_usada: resultado.api,
                tempo_resposta: tempoResposta,
                horario: horario.completo,
                log_id: logEntry.id
            });
        } else {
            // APIs offline
            res.status(503).json({
                sucesso: false,
                erro: 'APIs offline',
                mensagem: 'Todas as APIs estão indisponíveis no momento',
                horario: horario.completo
            });
        }
        
    } catch (error) {
        // Erro interno
        console.error('💥 Erro no servidor:', error);
        
        // Log do erro
        const erroLog = {
            id: `erro_${horario.timestamp}`,
            pergunta: pergunta.substring(0, 200),
            userId,
            user,
            erro: error.message,
            ip: userIP,
            horario: horario.completo,
            timestamp: horario.timestamp
        };
        
        salvarLogChat(erroLog);
        
        res.status(500).json({
            sucesso: false,
            erro: 'Erro interno',
            mensagem: error.message
        });
    }
});

app.get('/teste-ia', async (req, res) => {
    try {
        const { 
            pergunta = "", 
            userId = "site",
            user = "Visitante" 
        } = req.query;

        if (!pergunta.trim()) {
            return res.json({
                sucesso: false,
                resposta: "Pergunta vazia"
            });
        }

        const userIP = obterIPCliente(req);
        const userAgent = obterUserAgent(req);
        const horario = obterHorarioBR();
        const inicio = Date.now();

        const respostaIA = await obterRespostaIA(pergunta.trim());
        const tempoResposta = Date.now() - inicio;

        const sucesso = !!respostaIA;
        const textoResposta = typeof respostaIA === "string"
            ? respostaIA
            : respostaIA?.resposta || null;

        const logEntry = {
            id: `chat_${horario.timestamp}_${Math.random().toString(36).substr(2, 6)}`,

            pergunta: pergunta.trim().substring(0, 300),
            userId: userId.substring(0, 100),
            user: user.substring(0, 50),

            sucesso: sucesso,
            resposta: textoResposta ? textoResposta.substring(0, 500) : null,
            api_utilizada: "IA",
            tempo_resposta_ms: tempoResposta,

            ip: userIP,
            user_agent: userAgent.substring(0, 200),

            horario_completo: horario.completo,
            data: horario.data,
            hora: horario.hora,
            timestamp: horario.timestamp,
            timezone: horario.timezone,

            versao: "1.0.0",
            origem: userId === "site" ? "site" : "whatsapp"
        };

        salvarLogChat(logEntry);

        console.log(`\n📝 CHAT LOG:`);
        console.log(`   👤 Usuário: ${user}`);
        console.log(`   ❓ Pergunta: ${pergunta.substring(0, 50)}...`);
        console.log(`   🤖 Status: ${sucesso ? '✅ Sucesso' : '❌ Falha'}`);
        console.log(`   ⚡ Tempo: ${tempoResposta}ms`);
        console.log(`   📍 IP: ${userIP}`);
        console.log(`   🕒 ${horario.completo}\n`);

        res.json({
            sucesso: sucesso,
            resposta: textoResposta || "IA não respondeu",
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error("Erro /teste-ia:", error);
        res.json({
            sucesso: false,
            erro: error.message
        });
    }
});

// ===== ENDPOINT 1: INICIAR GERAÇÃO =====
app.get('/iniciar-video-sora', async (req, res) => {
    try {
        const { prompt = "", aspect = "landscape" } = req.query;
        
        if (!prompt.trim()) {
            return res.json({ sucesso: false, erro: "Prompt vazio" });
        }

        // Criar ID único para esta tarefa
        const taskId = Date.now() + '_' + Math.random().toString(36).substring(2);
        
        // Iniciar processo em background (não espera)
        (async () => {
            try {
                console.log(`🎥 Iniciando tarefa ${taskId}: ${prompt}`);
                
                // TODO: Colocar AQUI todo o código do Sora
                // (igual ao bot, mas sem enviar resposta)
                const videoUrl = await gerarVideoSora(prompt, aspect);
                
                // Salvar resultado em memória/banco
                tarefas[taskId] = {
                    status: 'concluido',
                    video: videoUrl,
                    prompt: prompt
                };
                
                console.log(`✅ Tarefa ${taskId} concluída: ${videoUrl}`);
                
            } catch (error) {
                console.error(`❌ Tarefa ${taskId} erro:`, error);
                tarefas[taskId] = {
                    status: 'erro',
                    erro: error.message
                };
            }
        })();

        // Resposta imediata com o taskId
        res.json({
            sucesso: true,
            taskId: taskId,
            mensagem: "Geração iniciada! Use o taskId para verificar o status."
        });

    } catch (error) {
        res.json({ sucesso: false, erro: error.message });
    }
});

// ===== ENDPOINT 2: VERIFICAR STATUS =====
app.get('/verificar-video/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        
        const tarefa = tarefas[taskId];
        
        if (!tarefa) {
            return res.json({ 
                sucesso: false, 
                status: 'nao_encontrado',
                mensagem: 'Tarefa não encontrada' 
            });
        }

        if (tarefa.status === 'concluido') {
            res.json({
                sucesso: true,
                pronto: true,
                video: tarefa.video,
                prompt: tarefa.prompt
            });
            // Opcional: limpar tarefa após enviar
            // delete tarefas[taskId];
            
        } else if (tarefa.status === 'erro') {
            res.json({
                sucesso: false,
                pronto: false,
                status: 'erro',
                erro: tarefa.erro
            });
        } else {
            res.json({
                sucesso: true,
                pronto: false,
                status: 'processando',
                mensagem: 'Vídeo ainda sendo gerado...'
            });
        }

    } catch (error) {
        res.json({ sucesso: false, erro: error.message });
    }
});

// ===== ENDPOINT 3: VERSÃO SIMPLIFICADA (se preferir) =====
app.get('/gerar-video-sora', async (req, res) => {
    try {
        const { prompt = "", aspect = "landscape" } = req.query;
        
        if (!prompt.trim()) {
            return res.json({ sucesso: false, erro: "Prompt vazio" });
        }

        // Criar ID único
        const taskId = Date.now() + '_' + Math.random().toString(36).substring(2);
        
        // Já salva como processando
        tarefas[taskId] = { status: 'processando', prompt };
        
        // Inicia background
        (async () => {
            try {
                const videoUrl = await gerarVideoSora(prompt, aspect);
                tarefas[taskId] = { status: 'concluido', video: videoUrl, prompt };
            } catch (error) {
                tarefas[taskId] = { status: 'erro', erro: error.message };
            }
        })();

        // Retorna taskId imediatamente
        res.json({
            sucesso: true,
            taskId: taskId,
            mensagem: "Geração iniciada! Use /verificar-video/" + taskId + " para pegar o vídeo"
        });

    } catch (error) {
        res.json({ sucesso: false, erro: error.message });
    }
});

// Armazenamento temporário (em produção use Redis/banco)
const tarefas = {};

const dirPublic = path.join(__dirname, 'public');

const ARQUIVO_COMENTARIOS = path.join(dirPublic, 'comentarios.json');
const ARQUIVO_CHAT = path.join(dirPublic, 'chat_global.json');
const ARQUIVO_SAVES = path.join(dirPublic, 'saves_usuarios.json');
const ARQUIVO_AMIZADES = path.join(dirPublic, 'amizades.json');
const ARQUIVO_DMS = path.join(dirPublic, 'mensagens_privadas.json');

// Caminhos dos arquivos de chat e comunidade

// Atualize a função prepararArmazem para incluir os novos arquivos
function prepararArmazem() {
    if (!fs.existsSync(dirPublic)) fs.mkdirSync(dirPublic, { recursive: true });
    
    // Seus arquivos existentes
    if (!fs.existsSync(ARQUIVO_COMENTARIOS)) fs.writeFileSync(ARQUIVO_COMENTARIOS, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_CHAT)) fs.writeFileSync(ARQUIVO_CHAT, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_SAVES)) fs.writeFileSync(ARQUIVO_SAVES, JSON.stringify({}));
    if (!fs.existsSync(ARQUIVO_AMIZADES)) fs.writeFileSync(ARQUIVO_AMIZADES, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_DMS)) fs.writeFileSync(ARQUIVO_DMS, JSON.stringify([]));
    
    // Novos arquivos para o chat ao vivo
    if (!fs.existsSync(ARQUIVO_MENSAGENS_LIVE)) fs.writeFileSync(ARQUIVO_MENSAGENS_LIVE, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_USUARIOS_ATIVOS)) fs.writeFileSync(ARQUIVO_USUARIOS_ATIVOS, JSON.stringify({}));
    if (!fs.existsSync(ARQUIVO_PERFIS_USUARIOS)) fs.writeFileSync(ARQUIVO_PERFIS_USUARIOS, JSON.stringify({}));
    if (!fs.existsSync(ARQUIVO_REACOES_LIVE)) fs.writeFileSync(ARQUIVO_REACOES_LIVE, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_BANIMENTOS)) fs.writeFileSync(ARQUIVO_BANIMENTOS, JSON.stringify([]));
    if (!fs.existsSync(ARQUIVO_EMOTES_GLOBAIS)) {
        const emotesIniciais = [
            { nome: "marujo", url: "https://i.imgur.com/1a2b3c4.png" },
            { nome: "like", url: "https://i.imgur.com/5d6e7f8.png" },
            { nome: "risada", url: "https://i.imgur.com/9g0h1i2.png" }
        ];
        fs.writeFileSync(ARQUIVO_EMOTES_GLOBAIS, JSON.stringify(emotesIniciais));
    }
}


// Atualizar função garantirArquivosChat
async function garantirArquivosChat() {
    const arquivos = [
        { path: ARQUIVO_CHAT_GLOBAL, padrao: [] }, // Todas as mensagens globais
        { path: ARQUIVO_USUARIOS_CHAT, padrao: {} }, // Perfis dos usuários
        { path: ARQUIVO_MENSAGENS_SALVAS, padrao: [] }, // Backup de mensagens antigas
        { path: ARQUIVO_NOTIFICACOES, padrao: [] }, // Notificações push
        { path: ARQUIVO_MODERADORES, padrao: ['admin'] }, // IDs dos moderadores
        { path: ARQUIVO_EMOTES_GLOBAIS, padrao: [
            { id: 1, nome: "marujo", url: "https://i.imgur.com/emote1.png", atalho: ":marujo:" },
            { id: 2, nome: "like", url: "https://i.imgur.com/emote2.png", atalho: ":like:" },
            { id: 3, nome: "risada", url: "https://i.imgur.com/emote3.png", atalho: ":risada:" },
            { id: 4, nome: "choro", url: "https://i.imgur.com/emote4.png", atalho: ":choro:" },
            { id: 5, nome: "surpreso", url: "https://i.imgur.com/emote5.png", atalho: ":surpreso:" },
            { id: 6, nome: "fogo", url: "https://i.imgur.com/emote6.png", atalho: ":fogo:" },
            { id: 7, nome: "popcorn", url: "https://i.imgur.com/emote7.png", atalho: ":pipoca:" }
        ]}
    ];
    
    for (const arquivo of arquivos) {
        if (!fsSync.existsSync(arquivo.path)) {
            await fs.writeFile(arquivo.path, JSON.stringify(arquivo.padrao, null, 2));
            console.log(`📁 Arquivo ${path.basename(arquivo.path)} criado!`);
        }
    }
}


function lerJSON(arquivo) { try { return JSON.parse(fs.readFileSync(arquivo, 'utf8')); } catch(e) { return Array.isArray(JSON.parse('[]')) ? [] : {}; } }
function salvarJSON(arquivo, dados) { fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2)); }

// --- ROTAS BÁSICAS ---
app.post('/salvar_comentario', (req, res) => { const l = lerJSON(ARQUIVO_COMENTARIOS); l.push(req.body); salvarJSON(ARQUIVO_COMENTARIOS, l); res.send({ sucesso: true }); });
app.get('/ler_comentarios', (req, res) => res.json(lerJSON(ARQUIVO_COMENTARIOS)));
app.post('/salvar_chat', (req, res) => { let l = lerJSON(ARQUIVO_CHAT); l.push(req.body); if(l.length > 100) l = l.slice(-100); salvarJSON(ARQUIVO_CHAT, l); res.send({ sucesso: true }); });
app.get('/ler_chat', (req, res) => res.json(lerJSON(ARQUIVO_CHAT)));

// --- PROGRESSO E COMUNIDADE (ATUALIZADO) ---
app.post('/salvar_progresso', (req, res) => { 
    let s = lerJSON(ARQUIVO_SAVES); 
    // Atualiza salvando também o Nome e Foto para a página de comunidade
    s[req.body.userId] = { ...s[req.body.userId], ...req.body, ultimaAtualizacao: new Date().toISOString() }; 
    salvarJSON(ARQUIVO_SAVES, s); 
    res.send({ sucesso: true }); 
});
app.get('/ler_progresso/:userId', (req, res) => { const s = lerJSON(ARQUIVO_SAVES); res.json(s[req.params.userId] || {}); });

// NOVA ROTA: Lista todos os usuários do site
app.get('/comunidade', (req, res) => {
    const saves = lerJSON(ARQUIVO_SAVES);
    const usuarios = Object.keys(saves).map(id => ({
        id: id,
        nome: saves[id].nome || 'Marujo',
        foto: saves[id].foto || 'https://via.placeholder.com/150',
        nivel: saves[id].level || 1,
        patente: saves[id].rank || 'Visitante'
    }));
    res.json(usuarios);
});

// --- AMIZADES ---
app.post('/amizade/solicitar', (req, res) => {
    const dados = req.body; 
    let amizades = lerJSON(ARQUIVO_AMIZADES);
    const existe = amizades.find(a => (a.deId === dados.deId && a.paraId === dados.paraId) || (a.deId === dados.paraId && a.paraId === dados.deId));
    if (existe) return res.send({ sucesso: false, mensagem: "Já existe uma conexão entre vocês." });

    dados.status = 'pendente'; dados.idUnico = Date.now().toString();
    amizades.push(dados); salvarJSON(ARQUIVO_AMIZADES, amizades);
    res.send({ sucesso: true, mensagem: "Solicitação enviada com sucesso!" });
});

app.post('/amizade/responder', (req, res) => {
    const { idUnico, acao } = req.body; 
    let amizades = lerJSON(ARQUIVO_AMIZADES);
    if (acao === 'recusar') amizades = amizades.filter(a => a.idUnico !== idUnico);
    else if (acao === 'aceitar') { let amizade = amizades.find(a => a.idUnico === idUnico); if (amizade) amizade.status = 'aceito'; }
    salvarJSON(ARQUIVO_AMIZADES, amizades); res.send({ sucesso: true });
});

app.get('/amizades/:uid', (req, res) => {
    const uid = req.params.uid; const todas = lerJSON(ARQUIVO_AMIZADES);
    res.json(todas.filter(a => a.deId === uid || a.paraId === uid));
});

// --- DMs ---
app.post('/dm/enviar', (req, res) => { let dms = lerJSON(ARQUIVO_DMS); dms.push(req.body); salvarJSON(ARQUIVO_DMS, dms); res.send({ sucesso: true }); });
app.get('/dm/ler/:uid1/:uid2', (req, res) => {
    const { uid1, uid2 } = req.params; const todas = lerJSON(ARQUIVO_DMS);
    res.json(todas.filter(m => (m.deId === uid1 && m.paraId === uid2) || (m.deId === uid2 && m.paraId === uid1)));
});

// --- 2. NOVO SISTEMA COMPLETO DE AMIZADES ---
app.post('/amizade/solicitar', (req, res) => {
    const dados = req.body; // { deId, deDados, paraId, paraDados }
    let amizades = lerJSON(ARQUIVO_AMIZADES);
    
    // Checa se já existe alguma relação
    const existe = amizades.find(a => (a.deId === dados.deId && a.paraId === dados.paraId) || (a.deId === dados.paraId && a.paraId === dados.deId));
    if (existe) return res.send({ sucesso: false, mensagem: "Já existe uma conexão entre vocês." });

    dados.status = 'pendente'; // Registra como pendente
    dados.idUnico = Date.now().toString();
    amizades.push(dados);
    salvarJSON(ARQUIVO_AMIZADES, amizades);
    res.send({ sucesso: true, mensagem: "Solicitação enviada com sucesso!" });
});

app.post('/amizade/responder', (req, res) => {
    const { idUnico, acao } = req.body; // acao = 'aceitar' ou 'recusar'
    let amizades = lerJSON(ARQUIVO_AMIZADES);
    
    if (acao === 'recusar') {
        amizades = amizades.filter(a => a.idUnico !== idUnico);
    } else if (acao === 'aceitar') {
        let amizade = amizades.find(a => a.idUnico === idUnico);
        if (amizade) amizade.status = 'aceito';
    }
    
    salvarJSON(ARQUIVO_AMIZADES, amizades);
    res.send({ sucesso: true });
});

app.get('/amizades/:uid', (req, res) => {
    const uid = req.params.uid;
    const todas = lerJSON(ARQUIVO_AMIZADES);
    // Retorna tudo que envolve este usuário (enviadas, recebidas, aceitas, pendentes)
    const asMinhas = todas.filter(a => a.deId === uid || a.paraId === uid);
    res.json(asMinhas);
});

// --- 3. CORREIO PRIVADO (DMs) ---
app.post('/dm/enviar', (req, res) => {
    let dms = lerJSON(ARQUIVO_DMS);
    dms.push(req.body); // { deId, paraId, texto, timestamp }
    salvarJSON(ARQUIVO_DMS, dms);
    res.send({ sucesso: true });
});

app.get('/dm/ler/:uid1/:uid2', (req, res) => {
    const { uid1, uid2 } = req.params;
    const todas = lerJSON(ARQUIVO_DMS);
    // Filtra só as mensagens trocadas entre esses dois
    const conversa = todas.filter(m => (m.deId === uid1 && m.paraId === uid2) || (m.deId === uid2 && m.paraId === uid1));
    res.json(conversa);
});





// Executa a verificação ao ligar a API

// ==========================================
// ROTA DE RECRUTAR MARUJOS (AMIGOS)
// ==========================================
// ==========================================
// ROTAS DE SALVAMENTO DE PROGRESSO (NUVEM PRÓPRIA)
// ==========================================

// Gravar na nuvem
app.post('/salvar_progresso', (req, res) => {
    const dados = req.body;
    if (!dados || !dados.userId) return res.status(400).send({ erro: "Sem ID" });

    fs.readFile(ARQUIVO_SAVES, 'utf8', (err, data) => {
        let saves = {};
        if (!err && data) { try { saves = JSON.parse(data); } catch (e) {} }
        
        // Salva ou atualiza a gaveta ESPECÍFICA deste usuário usando o ID dele como chave!
        saves[dados.userId] = {
            xp: dados.xp,
            level: dados.level,
            favorites: dados.favorites || [],
            history: dados.history || [],
            ultimaAtualizacao: new Date().toISOString()
        };
        
        fs.writeFile(ARQUIVO_SAVES, JSON.stringify(saves, null, 2), () => res.send({ sucesso: true }));
    });
});

// Ler da nuvem
app.get('/ler_progresso/:userId', (req, res) => {
    const userId = req.params.userId;
    
    fs.readFile(ARQUIVO_SAVES, 'utf8', (err, data) => {
        let saves = {};
        if (!err && data) { try { saves = JSON.parse(data); } catch (e) {} }
        
        // Procura se tem um save com o ID dele. Se não tiver, devolve vazio.
        const saveDoUsuario = saves[userId] || {};
        res.json(saveDoUsuario);
    });
});

app.post('/adicionar_amigo', (req, res) => {
    const dados = req.body;
    
    // Verifica se os dados chegaram certinho
    if (!dados || !dados.usuarioId || !dados.amigoId) {
        return res.status(400).send({ sucesso: false, mensagem: "Pacote quebrado." });
    }

    fs.readFile(ARQUIVO_AMIZADES, 'utf8', (err, data) => {
        let lista = [];
        if (!err && data) { try { lista = JSON.parse(data); } catch (e) {} }
        
        // Verifica se a pessoa já está na lista de amigos desse usuário
        const jaExiste = lista.find(a => a.usuarioId === dados.usuarioId && a.amigoId === dados.amigoId);
        
        if (jaExiste) {
            return res.send({ sucesso: false, mensagem: "Este marujo já está na sua tripulação!" });
        }

        // Se não for amigo, salva na lista!
        lista.push(dados);
        
        fs.writeFile(ARQUIVO_AMIZADES, JSON.stringify(lista, null, 2), (err) => {
            if (err) return res.status(500).send({ sucesso: false, mensagem: "Erro no servidor." });
            res.send({ sucesso: true, mensagem: "Marujo recrutado com sucesso!" });
        });
    });
});

// ROTA 1: Salvar um novo comentário (Upload)
app.post('/salvar_comentario', (req, res) => {
    const novoComentario = req.body; 

    fs.readFile(ARQUIVO_COMENTARIOS, 'utf8', (err, data) => {
        let comentarios = [];
        // Se houver dados no arquivo, converte para array
        if (!err && data) {
            try { comentarios = JSON.parse(data); } catch (e) { comentarios = []; }
        }
        
        comentarios.push(novoComentario);

        fs.writeFile(ARQUIVO_COMENTARIOS, JSON.stringify(comentarios, null, 2), (err) => {
            if (err) return res.status(500).send("Erro ao salvar no navio.");
            res.send({ sucesso: true, mensagem: "Comentário salvo!" });
        });
    });
});

// ROTA 2: Ler os comentários (Download)
app.get('/ler_comentarios', (req, res) => {
    fs.readFile(ARQUIVO_COMENTARIOS, 'utf8', (err, data) => {
        if (err || !data) return res.json([]);
        try {
            res.json(JSON.parse(data));
        } catch (e) {
            res.json([]);
        }
    });
});


// Endpoint para verificar vídeos gerados (você pode adaptar)
app.get('/verificar-video', async (req, res) => {
    try {
        const { prompt = "" } = req.query;

        // Aqui você consulta seu banco de dados
        // const video = await buscarVideoPorPrompt(prompt);

        // Exemplo de resposta
        res.json({
            sucesso: true,
            pronto: false, // ou true se já tiver vídeo
            mensagem: "Vídeo ainda em processamento...",
            video_url: null // ou a URL do vídeo
        });

    } catch (error) {
        res.json({
            sucesso: false,
            erro: error.message
        });
    }
});

// Método para gerar vídeo (pode colocar dentro da classe ou como função separada)
async function gerarVideoSora(prompt, aspect_ratio = 'landscape') {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36',
        'Accept-Language': 'id-ID,id;q=0.9'
    };

    let cookieStore = {};

    function extract(res) {
        const setC = res.headers['set-cookie'];
        if (setC) {
            setC.forEach(c => {
                const parts = c.split(';')[0].split('=');
                if (parts.length > 1) {
                    cookieStore[parts[0]] = parts.slice(1).join('=');
                }
            });
        }
    }

    function getkukis() {
        return Object.entries(cookieStore).map(([k, v]) => `${k}=${v}`).join('; ');
    }

    async function cekmail(name) {
        const res = await axios.get(`https://akunlama.com/api/v1/mail/list?recipient=${name}`);
        if (Array.isArray(res.data) && res.data.length === 0) {
            return `${name}@akunlama.com`;
        }
    }

    async function getotp(name) {
        let messages = [];
        let tentativas = 0;
        while (messages.length === 0 && tentativas < 10) {
            await delay(3000);
            const res = await axios.get(`https://akunlama.com/api/v1/mail/list?recipient=${name}`);
            messages = res.data;
            tentativas++;
        }
        
        if (messages.length === 0) {
            throw new Error('Timeout OTP');
        }
        
        const mail = messages[0];
        const htmlRes = await axios.get(`https://akunlama.com/api/v1/mail/getHtml?region=${mail.storage.region}&key=${mail.storage.key}`);
        const $ = cheerio.load(htmlRes.data);
        $('script, style').remove();
        const text = $('body').text().replace(/\s+/g, ' ').trim();
        const match = text.match(/sign in:\s*(\d{6})/);
        return match ? match[1] : null;
    }

    async function sendcode(email) {
        const res = await axios.post('https://nanobanana.org/api/auth/send-code', { email }, { headers });
        extract(res);
        return res.data;
    }

    async function getCsrf() {
        const res = await axios.get('https://nanobanana.org/api/auth/csrf', {
            headers: { ...headers, Cookie: getkukis() }
        });
        extract(res);
        return res.data.csrfToken;
    }

    async function login(email, code, csrfToken) {
        const data = new URLSearchParams({ email, code, redirect: 'false', csrfToken, callbackUrl: 'https://nanobanana.org/sora2' });
        const res = await axios.post('https://nanobanana.org/api/auth/callback/email-code', data.toString(), {
            headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded', Cookie: getkukis() }
        });
        extract(res);
        return res.data;
    }

    async function getsesi() {
        const res = await axios.get('https://nanobanana.org/api/auth/session', {
            headers: { ...headers, Cookie: getkukis() }
        });
        extract(res);
        return res.data;
    }

    async function submitsora(prompt, aspectratio) {
        const payload = { 
            model: 'sora2', 
            type: 'text-to-video', 
            prompt, 
            aspect_ratio: aspectratio, 
            n_frames: '10', 
            remove_watermark: true 
        };
        const res = await axios.post('https://nanobanana.org/api/sora2/submit', payload, {
            headers: { ...headers, 'Content-Type': 'application/json', Cookie: getkukis() }
        });
        extract(res);
        return res.data.task_id;
    }

    async function checkStatus(taskId) {
        const res = await axios.get(`https://nanobanana.org/api/sora2/status/${taskId}`, {
            headers: { ...headers, Cookie: getkukis() }
        });
        extract(res);
        return res.data.task;
    }

    // Executar processo
    const randomName = Math.random().toString(36).substring(2, 12);
    const email = await cekmail(randomName);
    
    await sendcode(email);
    const code = await getotp(randomName);
    const csrfToken = await getCsrf();
    await login(email, code, csrfToken);
    await getsesi();
    
    const taskId = await submitsora(prompt, aspect_ratio);

    let result;
    const pendingStatus = ['processing', 'pending', 'queue', 'in_queue', 'starting'];
    let tentativas = 0;
    const maxTentativas = 30;
    
    do {
        await delay(10000);
        result = await checkStatus(taskId);
        tentativas++;
        
        if (tentativas >= maxTentativas) {
            throw new Error('Tempo limite excedido');
        }
    } while (pendingStatus.includes(result.status.toLowerCase()));

    if (result.status.toLowerCase() === 'failed' || result.status.toLowerCase() === 'error') {
        throw new Error(result.error_message || 'Erro na geração');
    }

    return result.video_url || result.result || null;
}

// ===== ROTA PARA VER LOGS (protegida) =====
app.get('/api/logs', (req, res) => {
    const { token, limite = 50, pagina = 1 } = req.query;
    
    // Token simples para proteger (você pode melhorar)
    if (token !== 'marujo_admin_2024') {
        return res.status(401).json({ erro: 'Não autorizado' });
    }
    
    try {
        if (!fs.existsSync(LOG_PATH)) {
            return res.json({ logs: [], total: 0 });
        }
        
        const logs = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
        
        // Paginação
        const start = (pagina - 1) * limite;
        const end = start + parseInt(limite);
        const logsPaginados = logs.reverse().slice(start, end);
        
        res.json({
            total: logs.length,
            pagina: parseInt(pagina),
            limite: parseInt(limite),
            logs: logsPaginados
        });
        
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// ===== ROTA PARA ESTATÍSTICAS =====
app.get('/api/stats', async (req, res) => {
    const { token } = req.query;
    
    if (token !== 'marujo_admin_2024') {
        return res.status(401).json({ erro: 'Não autorizado' });
    }
    
    try {
        if (!fs.existsSync(LOG_PATH)) {
            return res.json({ total: 0 });
        }
        
        const logs = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
        
        // Estatísticas
        const stats = {
            total: logs.length,
            sucessos: logs.filter(l => l.sucesso === true).length,
            falhas: logs.filter(l => l.sucesso === false).length,
            usuarios_unicos: [...new Set(logs.map(l => l.user))].length,
            apis_utilizadas: {},
            perguntas_por_dia: {},
            ultima_atualizacao: new Date().toISOString()
        };
        
        // Contagem por API
        logs.forEach(l => {
            if (l.api_utilizada) {
                stats.apis_utilizadas[l.api_utilizada] = (stats.apis_utilizadas[l.api_utilizada] || 0) + 1;
            }
        });
        
        // Perguntas por dia
        logs.forEach(l => {
            if (l.data) {
                stats.perguntas_por_dia[l.data] = (stats.perguntas_por_dia[l.data] || 0) + 1;
            }
        });
        
        res.json(stats);
        
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Iniciar servidor


// let respostaIA = await obterRespostaIAA
// Endpoint para chat da Marinha
app.post('/marinha-chat', async (req, res) => {
    const { mensagem, userId, nome } = req.body;
    
    if (!mensagem) {
        return res.json({
            sucesso: false,
            erro: 'Por favor, envie uma mensagem'
        });
    }
    
    // Gerar ID do usuário se não existir
    const userIdent = userId || `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const userName = nome || 'Marinheiro';
    
    console.log(`\n💬 Nova mensagem de ${userName} (${userIdent.substring(0, 8)}): "${mensagem.substring(0, 50)}${mensagem.length > 50 ? '...' : ''}"`);
    
    try {
        // 1. Buscar no PDF primeiro
        const infoPDF = buscarNoPDFMarinha(mensagem);
        
        // 2. Preparar histórico do usuário
        if (!historicoMarinha.has(userIdent)) {
            historicoMarinha.set(userIdent, []);
            console.log(`👤 Novo usuário registrado: ${userIdent.substring(0, 8)}`);
        }
        
        const historicoUsuario = historicoMarinha.get(userIdent);
        
        // 3. Limitar histórico
        if (historicoUsuario.length > 10) {
            historicoUsuario.splice(0, historicoUsuario.length - 10);
        }
        
        // 4. Adicionar mensagem atual ao histórico
        historicoUsuario.push({
            role: 'user',
            content: mensagem,
            timestamp: new Date().toISOString()
        });
        
        // 5. Criar prompt inteligente com contexto do PDF
        let contextoPDF = '';
        const historicoFormatado = historicoUsuario
            .slice(-3)
            .map(msg => `${msg.role === 'user' ? 'Usuário' : 'Assistente'}: ${msg.content}`)
            .join('\n');
        
        const prompt = `Você é um especialista em Cerimonial da Marinha do Brasil, com conhecimento profundo em procedimentos navais.

${contextoPDF}

ÚLTIMAS MENSAGENS:
${historicoFormatado}

PERGUNTA: "${mensagem}"

INSTRUÇÕES:
1. Seja preciso e técnico, mas use linguagem acessível
2. Baseie-se nas informações do PDF quando disponíveis
3. Use termos navais corretos
4. Formate a resposta de forma clara com parágrafos
5. Use emojis navais apropriados
6. SEMPRE responda em português brasileiro

RESPOSTA:`;
        
        console.log('📝 Prompt criado, tamanho:', prompt.length, 'caracteres');
        
        // 6. Obter resposta da IA
        let respostaIA = await obterRespostaIA(prompt);
        
        // 7. Se a IA falhar, usar fallback baseado no PDF
        if (!respostaIA || respostaIA.length < 20) {
            console.log('⚠️ IA falhou, usando fallback baseado no PDF');
            
            if (infoPDF) {
                respostaIA = `🚢 **Informações do Manual da Marinha:**

${infoPDF}

⚓ *Fonte: Apostila de Cerimonial da Marinha (2022)*

🎖️ *Para informações mais detalhadas, consulte o manual oficial.*`;
            }
        }
        
        // 8. Adicionar resposta ao histórico
        historicoUsuario.push({
            role: 'assistant',
            content: respostaIA,
            timestamp: new Date().toISOString()
        });
        
        // 9. Retornar resposta
        const resposta = {
            sucesso: true,
            mensagem: {
                texto: mensagem,
                usuario: userName,
                userId: userIdent,
                timestamp: new Date().toISOString()
            },
            resposta: {
                texto: respostaIA,
                assistente: 'Especialista Naval 🚢',
                timestamp: new Date().toISOString(),
                temInfoPDF: !!infoPDF
            },
            historico: historicoUsuario.length
        };
        
        console.log(`✅ Respondido para ${userName} (${respostaIA.length} caracteres)`);
        res.json(resposta);
        
    } catch (error) {
        console.error('❌ Erro no chat Marinha:', error);
        res.json({
            sucesso: false,
            erro: 'Erro ao processar sua pergunta',
            detalhes: error.message
        });
    }
});

// Endpoint para limpar histórico
app.post('/marinha-limpar-historico', (req, res) => {
    const { userId } = req.body;
    
    if (userId && historicoMarinha.has(userId)) {
        historicoMarinha.delete(userId);
        console.log(`🧹 Histórico limpo para usuário: ${userId.substring(0, 8)}`);
    }
    
    res.json({
        sucesso: true,
        mensagem: 'Histórico limpo'
    });
});

// Endpoint de status
app.get('/marinha-status', (req, res) => {
    res.json({
        status: 'online',
        pdfCarregado: marinhaPDFContent.length > 100,
        tamanhoPDF: marinhaPDFContent.length,
        usuariosAtivos: historicoMarinha.size,
        timestamp: new Date().toISOString(),
        endpoints: {
            chat: 'POST /marinha-chat',
            status: 'GET /marinha-status',
            limpar: 'POST /marinha-limpar-historico'
        }
    });
});

// Rota de teste


// Inicializar servidor

function limparTexto(texto) {
    return texto
        .replace(/\n{2,}/g, '\n')
        .replace(/^\n+|\n+$/g, '')
        .trim();
}
app.post('/enviar-mensagem', async (req, res) => {
    const { nome, texto, golds: goldsEnviados } = req.body; // Recebe golds do frontend
    const usuario = req.session.user;

    if (!usuario) return res.status(400).send('Usuário não encontrado na sessão.');
    if (!texto) return res.status(400).send('Texto da mensagem não enviado.');

    const globalRank = allglob(usuario.grupo, usuario.numero);
    if (globalRank === null) return res.status(404).send('Ranking global não encontrado.');

    // 🔧 BUSCA OS GOLDS ATUAIS DO USUÁRIO (se não vier do frontend)
    let goldsUsuario;
    if (goldsEnviados !== undefined) {
        // Usa os golds enviados pelo frontend
        goldsUsuario = goldsEnviados;
    } else {
        // Busca do banco de dados/sistema
        goldsUsuario = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 0;
    }

    const mensagemData = {
        nome,
        numero: usuario.numero,
        globalRank,
        golds: goldsUsuario, // 🔥 ADICIONA OS GOLDS AQUI!
        texto,
        data: new Date().toISOString(),
    };

    // Salva a mensagem do usuário
    let mensagens = carregarMensagens();
    mensagens.push(mensagemData);
    
    // Limita o histórico (opcional)
    if (mensagens.length > 1000) {
        mensagens = mensagens.slice(-800); // Mantém apenas as 800 mais recentes
    }
    
    fs.writeFileSync(MENSAGENS_FILE, JSON.stringify(mensagens, null, 2));

    // 🔮 RESPOSTA DA IA (com golds atualizados)
    const goldsParaIA = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 600;
    const prompt = `Você é a Fabi, uma IA que ajuda os usuários no sistema de Golds.

Informações do usuário:
- Nome: ${usuario.nome}
- Grupo: ${usuario.grupo}
- Quantidade atual de Golds: ${goldsParaIA}
- Ranking global: ${globalRank}

Regras para suas respostas:
- Seja bem resumista, de poucas palavras, e fale sempre o nome
- Pode ser brincalhona
- Informações sobre o sistema de Golds: Existe varias formas de ganhar golds, aqui pelo site tem o sistema do tigrinho e tambem o jogo da corrida no site: https://fabibot.vercel.app/corrida ouyros jogos estão disponíveis nos grupos de whatsapp. só usar o comando: &menugold
- Se o usuário zoar, responda na mesma vibe, mas sem ser ofensiva.
- Use emojis.
- Use linguagem simples e direta.
- Sempre que possível, incentive o uso do sistema para ganhar mais Golds.

Agora, responda à seguinte mensagem do usuário, utilizando essas informações.
"${texto}"`;

  /*  const iaResposta = await obterRespostaIA(prompt);
    if (iaResposta) {
        const respostaData = {
            nome: 'FABI IA 🤖',
            numero: 'ia@sistema',
            globalRank: 0,
            golds: 999999, // Golds da IA (pode ser um valor fixo alto)
            texto: iaResposta,
            data: new Date().toISOString(),
        };

        mensagens.push(respostaData);
        fs.writeFileSync(MENSAGENS_FILE, JSON.stringify(mensagens, null, 2));
    }*/

    // Se usar Socket.IO:
    // io.emit("nova-mensagem", mensagemData);
    // if (iaResposta) io.emit("nova-mensagem", respostaData);

    res.json({ 
        sucesso: true, 
        mensagem: mensagemData,
        golds: goldsUsuario // Retorna os golds para confirmação
    });
});

app.post('/api/fala-bot', async (req, res) => {
    try {
        const { texto, golds: goldsEnviados } = req.body; // Recebe texto e golds do frontend
        const usuario = req.session.user; // Pega usuário da sessão

        if (!usuario) {
            return res.status(400).json({ 
                success: false, 
                error: 'Usuário não encontrado na sessão' 
            });
        }
        
        if (!texto) {
            return res.status(400).json({ 
                success: false, 
                error: 'Texto da mensagem não enviado' 
            });
        }

        // Obter ranking global
        const globalRank = allglob(usuario.grupo, usuario.numero);
        if (globalRank === null) {
            return res.status(404).json({ 
                success: false,
                error: 'Ranking global não encontrado' 
            });
        }

        // 🔧 BUSCA OS GOLDS ATUAIS DO USUÁRIO
        let goldsUsuario;
        if (goldsEnviados !== undefined) {
            // Usa os golds enviados pelo frontend
            goldsUsuario = goldsEnviados;
        } else {
            // Busca do banco de dados/sistema
            goldsUsuario = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 0;
        }

        // Verificar cooldown
        if (checkCooldown(usuario.numero)) {
            const remaining = CONFIG.cooldownTime - (Date.now() - cooldownUsers[usuario.numero]);
            return res.status(429).json({ 
                success: false,
                cooldown: Math.ceil(remaining / 1000),
                message: 'Aguarde o cooldown'
            });
        }

        console.log(`📨 Mensagem de ${usuario.nome} (${usuario.numero}): "${texto}"`);
        console.log(`💰 Golds: ${goldsUsuario} | Ranking: ${globalRank}`);

        // 1. Verificar áudio fixo
        const fixedAudio = checkFixedAudios(texto);
        if (fixedAudio) {
            updateCooldown(usuario.numero);
            
            // Salvar mensagem no histórico
            salvarMensagemNoHistorico({
                nome: usuario.nome,
                numero: usuario.numero,
                globalRank,
                golds: goldsUsuario,
                texto: texto,
                tipo: 'audio_fixo',
                data: new Date().toISOString(),
            });

            return res.json({
                success: true,
                audioUrl: `/audios/${path.basename(fixedAudio)}`,
                metadata: {
                    tipoResposta: 'fixa',
                    mensagemOriginal: texto,
                    usuario: {
                        nome: usuario.nome,
                        golds: goldsUsuario,
                        ranking: globalRank
                    }
                }
            });
        }

        // 2. Verificar cache
        const cachedAudio = checkAudioCache(texto);
        if (cachedAudio) {
            updateCooldown(usuario.numero);
            
            // Salvar mensagem no histórico
            salvarMensagemNoHistorico({
                nome: usuario.nome,
                numero: usuario.numero,
                globalRank,
                golds: goldsUsuario,
                texto: texto,
                tipo: 'audio_cache',
                data: new Date().toISOString(),
            });

            return res.json({
                success: true,
                audioUrl: `/audiosgerados/${path.basename(cachedAudio)}`,
                metadata: {
                    tipoResposta: 'cache',
                    mensagemOriginal: texto,
                    usuario: {
                        nome: usuario.nome,
                        golds: goldsUsuario,
                        ranking: globalRank
                    }
                }
            });
        }

        // 3. Gerar novo áudio com IA (com informações do usuário)
        console.log('🤖 Gerando áudio com IA...');
        const generatedAudio = await generateAudioWithAI(texto, usuario, goldsUsuario, globalRank);
        
        if (generatedAudio) {
            addToCache(texto, generatedAudio);
            updateCooldown(usuario.numero);
            
            // Salvar mensagem no histórico
            salvarMensagemNoHistorico({
                nome: usuario.nome,
                numero: usuario.numero,
                globalRank,
                golds: goldsUsuario,
                texto: texto,
                tipo: 'audio_gerado',
                data: new Date().toISOString(),
            });

            return res.json({
                success: true,
                audioUrl: `/audiosgerados/${path.basename(generatedAudio)}`,
                metadata: {
                    tipoResposta: 'gerada',
                    mensagemOriginal: texto,
                    usuario: {
                        nome: usuario.nome,
                        golds: goldsUsuario,
                        ranking: globalRank
                    }
                }
            });
        }

        // 4. Nenhum áudio encontrado
        return res.status(404).json({
            success: false,
            message: 'Nenhum áudio correspondente encontrado'
        });
        
    } catch (error) {
        console.error('❌ Erro no processamento:', error);
        return res.status(500).json({
            success: false,
            error: 'Erro interno do servidor',
            details: error.message
        });
    }
});

// Função para gerar áudio com IA usando informações completas do usuário


// Função para salvar mensagem no histórico
function salvarMensagemNoHistorico(mensagemData) {
    try {
        const historicoFile = './historico_audios.json';
        let historico = [];
        
        if (fs.existsSync(historicoFile)) {
            historico = JSON.parse(fs.readFileSync(historicoFile, 'utf8'));
        }
        
        historico.push(mensagemData);
        
        // Limitar histórico (mantém últimos 1000)
        if (historico.length > 1000) {
            historico = historico.slice(-800);
        }
        
        fs.writeFileSync(historicoFile, JSON.stringify(historico, null, 2));
        
    } catch (error) {
        console.error('❌ Erro ao salvar histórico:', error);
    }
}


function carregarMensagens() {
  if (!fs.existsSync(MENSAGENS_FILE)) return [];
  return JSON.parse(fs.readFileSync(MENSAGENS_FILE));
}

app.get('/mensagens', (req, res) => {
  const mensagens = carregarMensagens();
  res.json(mensagens);
});
// Rota para pegar o histórico de mensagens
app.get('/historico-mensagens', (req, res) => {
    const mensagens = carregarMensagens();
    res.json({ mensagens });
});
// Função para carregar as mensagens do arquivo




// Inicia o servidor
// Guardar sessões ativas (em memória)


function contarUsuariosOnline() {
    const sessionPath = path.join(__dirname, 'sessions'); // mesma pasta do session-file-store
    let onlineUsers = new Set();

    try {
        const arquivos = fs.readdirSync(sessionPath);

        arquivos.forEach(file => {
            try {
                const sessionData = fs.readFileSync(path.join(sessionPath, file), 'utf8');
                const sessObj = JSON.parse(sessionData);

                if (sessObj && sessObj.user && sessObj.user.numero) {
                    onlineUsers.add(sessObj.user.numero);
                }
            } catch (err) {
                // Se der erro em algum arquivo, apenas ignora e segue
            }
        });
    } catch (err) {
        console.error('Erro ao ler sessões:', err);
    }

    return onlineUsers.size;
}
// Página de login
app.get('/login', (req, res) => {
    // Verifica se o usuário já está autenticado
    if (req.session.user) {
        return res.redirect('/');
    }

    res.render('login', {
        nome_site: site_nome
    });
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const filePathr = path.join(__dirname, 'registro.json');
        const filePathAcessos = path.join(__dirname, 'acessos2.json');

        if (!fs.existsSync(filePathr)) {
            console.log('Arquivo de registro não encontrado:', filePathr);
            req.flash('error_msg', 'Nenhum usuário registrado ainda!');
            return res.render('login', { username });
        }

        let registros = JSON.parse(fs.readFileSync(filePathr, 'utf8'));
        let usuario = registros.find(user => user.nome === username && user.id === password);

        if (!usuario) {
            console.log('Usuário ou senha inválidos');
            req.flash('error_msg', 'Nome de usuário ou senha (ID) inválidos!');
            return res.render('login', { username });
        }

        // ✅ Salva os dados do usuário na sessão
        req.session.user = {
            nome: usuario.nome,
            numero: usuario.numero,
            grupo: usuario.grupo,
            dinheiro: usuario.dinheiro,
            id: usuario.id
        };


        
        req.flash('success_msg', 'Login bem-sucedido!');

        // REGISTRA O ACESSO
        const horario = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        const data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

        const novoAcesso = {
            nome: usuario.nome,
            senha: usuario.id,
            data,
            horario
        };

        fs.readFile(filePathAcessos, 'utf8', (err, data) => {
            let acessos = [];

            if (!err && data.trim()) {
                try {
                    acessos = JSON.parse(data);
                    if (!Array.isArray(acessos)) acessos = [];
                } catch (parseErr) {
                    console.error('Erro ao analisar JSON de acessos:', parseErr);
                }
            }

            acessos.push(novoAcesso);

            fs.writeFile(filePathAcessos, JSON.stringify(acessos, null, 2), (err) => {
                if (err) {
                    console.error('Erro ao salvar acessos2.json:', err);
                    return res.status(500).send('Erro ao registrar o acesso.');
                }

                // ✅ Salva a sessão antes de redirecionar
                req.session.save(err => {
                    if (err) {
                        console.error('Erro ao salvar a sessão:', err);
                        return res.status(500).send('Erro ao salvar a sessão.');
                    }

                    console.log('Acesso registrado:', novoAcesso);
                    return res.redirect('/');
                });
            });
        });

    } catch (err) {
        console.error('Erro ao processar login:', err);
        req.flash('error_msg', 'Erro ao processar o login!');
        return res.render('login', { username });
    }
});
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            req.flash('error_msg', 'Erro ao sair da conta!');
            return res.redirect('/docs'); // Mantém o usuário na página caso ocorra um erro
        }
        res.redirect('/login'); // Redireciona para a página de login
    });
});
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            return res.status(500).json({ error: 'Erro ao sair' });
        }

        // Opcional: limpa o cookie de sessão do navegador
        res.clearCookie('connect.sid');

        // Retorna uma resposta de sucesso
        res.redirect('/login'); // em vez de json
    });
});

app.get('/', (req, res) => {
    const usuario = req.session.user || {};

// Detectar IP
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');
    console.log('🔍 IP do visitante:', ip);

    // Obter dados do navegador
    const userAgent = req.headers['user-agent'] || 'Desconhecido';

    // Hora exata em Brasília
    const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');

    // Acessos
    const acessosPath = path.join(__dirname, 'public', 'acessos.json');
    let stats = { totalAcessos: 0, ips: [] };

    try {
        if (fs.existsSync(acessosPath)) {
            const raw = fs.readFileSync(acessosPath, 'utf8');
            try {
                stats = JSON.parse(raw);
            } catch (e) {
                console.warn('⚠️ acessos.json corrompido. Recriando...');
                stats = { totalAcessos: 0, ips: [] };
            }
        }

        stats.totalAcessos++;

        const novoRegistro = {
            ip,
            navegador: userAgent,
            horario: dataHoraBrasil
        };

        stats.ips.push(novoRegistro);

        // Limite de registros
        if (stats.ips.length > 1000) stats.ips = stats.ips.slice(-1000);

        fs.writeFileSync(acessosPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Erro com acessos.json:', err.message);
        return res.status(500).send('Erro interno ao salvar estatísticas.');
    }
const registroPath = path.join(__dirname, 'public', 'registro.json');
let dadosRegistro = [];
    try {
        if (fs.existsSync(registroPath)) {
            dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
        }
    } catch (err) {
        console.error('Erro ao ler registro.json:', err);
    }

    const usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};

// IPTV
const m3uPath = path.join(__dirname, 'public', 'lista.m3u');
let canaisIPTV = [];

if (fs.existsSync(m3uPath)) {
    try {
        const conteudoM3U = fs.readFileSync(m3uPath, 'utf8');
        const linhas = conteudoM3U.split('\n');

        for (let i = 0; i < linhas.length; i++) {
            if (linhas[i].startsWith('#EXTINF')) {
                const nome = linhas[i].split(',')[1]?.trim() || 'Sem Nome';
                const link = linhas[i + 1]?.trim();
                if (link && link.startsWith('http')) {
                    canaisIPTV.push({ nome, link });
                }
            }
        }
    } catch (e) {
        console.error('Erro ao ler lista.m3u:', e);
    }
}
const futebolPath = path.join(__dirname, 'public', 'futebol.json');
  let canaisFutebol = [];
  try {
    if (fs.existsSync(futebolPath)) {
      canaisFutebol = JSON.parse(fs.readFileSync(futebolPath, 'utf-8'));
    }
  } catch (e) {
    console.error("Erro ao ler futebol.json:", e);
  }

    // Se não estiver logado
    if (!usuario.numero) {
        return res.render('index', {
            nome_site: site_nome,
            visitas: stats.totalAcessos,
            username: "",
            numero: "",
            grupo: "",
            id: "",
            canaisIPTV: canaisFutebol,
            foto: 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
            golds: 0,
            globalRank: "",
            isAdmin: false,
            registro: {},
            grupoConfig: {},
            peixe: 0, galinha: 0, coelho: 0, ovelha: 0, vaca: 0, elefante: 0,
            ouro: 0, diamante: 0, esmeralda: 0,
            pocao: 0, ak47: 0, awm: 0, pistola: 0, adaga: 0, estamina: 0,
            ativos: [], box: [], noticias: [],
            online: contarUsuariosOnline()
        });
    }

    const grupoConfigFilePath = grupoConfigPath(usuario.grupo);
    if (!fs.existsSync(grupoConfigFilePath)) {
        console.error('Config do grupo não encontrada.');
        return res.status(404).send('Config do grupo não encontrada.');
    }

    let grupoConfig = {};
    try {
        grupoConfig = JSON.parse(fs.readFileSync(grupoConfigFilePath, 'utf8')) || {};
    } catch (e) {
        console.error("Erro na config do grupo:", e);
        return res.status(500).send('Erro ao carregar configuração do grupo.');
    }

    grupoConfig.wellcome = Array.isArray(grupoConfig.wellcome) ? grupoConfig.wellcome : [];
    while (grupoConfig.wellcome.length < 2) {
        grupoConfig.wellcome.push({ legendabv: "Sem legenda", legendasaiu: "Sem legenda" });
    }

    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 600;
    const globalRank = allglob(usuario.grupo, usuario.numero);
    if (globalRank === null) return res.status(404).send('Não foi possível encontrar seu ranking global.');

    const inventario = {
        peixe: getIkan(usuario.numero),
        galinha: getAyam(usuario.numero),
        coelho: getKelinci(usuario.numero),
        ovelha: getDomba(usuario.numero),
        vaca: getSapi(usuario.numero),
        elefante: getGajah(usuario.numero),
        ouro: getBesi(usuario.numero),
        diamante: getEmas(usuario.numero),
        esmeralda: getEmerald(usuario.numero),
        pocao: getPotion(usuario.numero),
        ak47: getAK47(usuario.numero),
        awm: getAWM(usuario.numero),
        pistola: getPISTOLA(usuario.numero),
        adaga: getADÁGA(usuario.numero),
        estamina: getDarah(usuario.numero)
    };

    const ativosPath = path.join(__dirname, 'public', 'ativos.json');
    const palpitesPath = path.join(__dirname, 'public', 'palpites.json');
    const noticiasPath = path.join(__dirname, 'public', 'noticias.json');
    const gruposPath = path.join(__dirname, 'public', 'grupos.json');

    let ativos = [], box = [], palpitesData = { bolao: [] }, noticias = [], isAdmin = false;

    try {
        const ativosData = fs.existsSync(ativosPath) ? JSON.parse(fs.readFileSync(ativosPath)) : {};
        ativos = ativosData.ativo || [];
        box = ativosData.usuarios?.[usuario.numero] || [];

        if (fs.existsSync(palpitesPath)) palpitesData = JSON.parse(fs.readFileSync(palpitesPath));
        if (fs.existsSync(noticiasPath)) {
            const noticiasData = JSON.parse(fs.readFileSync(noticiasPath));
            noticias = noticiasData.noticias || [];
        }

        if (fs.existsSync(gruposPath)) {
            const grupos = JSON.parse(fs.readFileSync(gruposPath));
            const grupoAtual = grupos.find(g => g.grupoID === usuario.grupo);
            isAdmin = grupoAtual ? grupoAtual.administradores.includes(usuario.numero) : false;
        }
    } catch (e) {
        console.error("Erro ao carregar dados auxiliares:", e);
    }

    res.render('index', {
        nome_site: site_nome,
        visitas: stats.totalAcessos,
        username: usuario?.nome || '',
        numero: usuario?.numero || '',
        grupo: usuario?.grupo || '',
        foto: usuarioCompleto?.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
        id: usuario?.id || '',
        golds,
        globalRank,
        isAdmin,
        registro: dadosRegistro,
        grupoConfig,
        canaisIPTV: canaisFutebol,
        ativos,
        box,
        noticias,
        palpites: palpitesData?.bolao || [],
        user: req.session.user || {},
        ip,
        ...inventario,
        online: contarUsuariosOnline()
    });
});

// ROTA PRINCIPAL POKÉMON - Lista todos os usuários
app.get('/pokemon', (req, res) => {
    const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
    
    let allUsers = [];
    
    try {
        // Lê todos os arquivos de usuários
        if (fs.existsSync(POKEMON_USERS_DIR)) {
            const userFiles = fs.readdirSync(POKEMON_USERS_DIR)
                .filter(file => file.endsWith('.json'));
            
            userFiles.forEach(file => {
                try {
                    const filePath = path.join(POKEMON_USERS_DIR, file);
                    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    
                    // Extrai número do nome do arquivo
                    const fileName = path.basename(file, '.json');
                    
                    // Usa o userId do arquivo JSON em vez de tentar extrair do nome do arquivo
                    const userId = userData.userId || fileName.replace(/_/g, '');
                    
                    // Calcula a força total baseada nos Pokémon do usuário
                    let totalForce = 0;
                    let bestPokemonForce = 0;
                    
                    if (userData.pokemons && userData.pokemons.length > 0) {
                        // Calcula força total somando a força de todos os Pokémon
                        totalForce = userData.pokemons.reduce((sum, pokemon) => {
                            const pokemonForce = pokemon.cp || 
                                               (pokemon.stats ? pokemon.stats.total : 0) || 
                                               (pokemon.currentStats ? pokemon.currentStats.total : 0) || 0;
                            return sum + pokemonForce;
                        }, 0);
                        
                        // Encontra o Pokémon mais forte
                        const strongest = userData.pokemons.reduce((best, current) => {
                            const currentForce = current.cp || 
                                               (current.stats ? current.stats.total : 0) || 
                                               (current.currentStats ? current.currentStats.total : 0) || 0;
                            const bestForce = best.cp || 
                                            (best.stats ? best.stats.total : 0) || 
                                            (best.currentStats ? best.currentStats.total : 0) || 0;
                            return currentForce > bestForce ? current : best;
                        }, userData.pokemons[0]);
                        
                        bestPokemonForce = strongest.cp || 
                                         (strongest.stats ? strongest.stats.total : 0) || 
                                         (strongest.currentStats ? strongest.currentStats.total : 0) || 0;
                    }
                    
                    allUsers.push({
                        id: userId, // Mantém o ID original
                        fileName: fileName,
                        name: userData.userName || `Treinador_${userId}`,
                        totalPokemons: userData.totalPokemons || 0,
                        uniquePokemons: userData.uniquePokemons || 0,
                        boxesOpened: userData.boxesOpened || 0,
                        totalForce: totalForce,
                        bestPokemonForce: bestPokemonForce,
                        bestPokemon: userData.bestPokemon,
                        lastUpdated: userData.lastUpdated || new Date().toISOString()
                    });
                } catch (e) {
                    console.log(`Erro no arquivo ${file}:`, e.message);
                }
            });
            
            // Ordena por força total (ou Pokémon se não tiver força)
            allUsers.sort((a, b) => {
                // Primeiro tenta ordenar por força total
                if (a.totalForce !== b.totalForce) {
                    return b.totalForce - a.totalForce;
                }
                // Se força for igual, ordena por total de Pokémon
                return b.totalPokemons - a.totalPokemons;
            });
        }
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
    }
    
    res.render('pokemon-index', {
        nome_site: site_nome,
        usuarios: allUsers,
        totalUsuarios: allUsers.length
    });
});
 
    const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
// Função para obter caminho do usuário
function getUserPokemonPath(userId) {
    const safeUserId = userId.replace(/[^a-zA-Z0-9]/g, '_');
    return path.join(POKEMON_USERS_DIR, `${safeUserId}.json`);
}

function loadUserPokemonData(userId) {
    const userPath = getUserPokemonPath(userId);
    
    if (!fs.existsSync(userPath)) {
        return {
            userId: userId,
            userName: `Treinador_${userId}`,
            pokemons: [],
            totalPokemons: 0,
            uniquePokemons: 0,
            boxesOpened: 0,
            totalCP: 0,
            bestPokemon: null,
            lastUpdated: new Date().toISOString()
        };
    }
    
    try {
        const userData = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        
        // Garante que todos os campos existam
        return {
            userId: userData.userId || userId,
            userName: userData.userName || `Treinador_${userId}`,
            pokemons: userData.pokemons || [],
            totalPokemons: userData.totalPokemons || (userData.pokemons ? userData.pokemons.length : 0),
            uniquePokemons: userData.uniquePokemons || 0,
            boxesOpened: userData.boxesOpened || 0,
            totalCP: userData.totalCP || 0,
            bestPokemon: userData.bestPokemon || null,
            lastUpdated: userData.lastUpdated || new Date().toISOString()
        };
    } catch (error) {
        console.error(`Erro ao carregar dados do usuário ${userId}:`, error);
        return {
            userId: userId,
            userName: `Treinador_${userId}`,
            pokemons: [],
            totalPokemons: 0,
            uniquePokemons: 0,
            boxesOpened: 0,
            totalCP: 0,
            bestPokemon: null,
            lastUpdated: new Date().toISOString()
        };
    }
}


// ROTA PARA VER POKÉMON DE UM USUÁRIO ESPECÍFICO (CORRIGIDA - USANDO A MESMA LÓGICA DO DETALHE)

// ROTA PARA VER POKÉMON DE UM USUÁRIO ESPECÍFICO - VERSÃO CORRIGIDA
// ROTA PARA VER POKÉMON DE UM USUÁRIO ESPECÍFICO - VERSÃO FINAL CORRIGIDA
app.get('/pokemon/:id', (req, res) => {
    let userId = req.params.id;
    
    console.log('🔍 Buscando usuário com ID:', userId);
    
    const POKEMONS_DB_PATH = path.join(__dirname, 'public', 'pokemon', 'data', 'pokemons.json');
    const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
    
    // FUNÇÃO PARA ENCONTRAR ARQUIVO DO USUÁRIO
    function findUserFile(userId) {
        console.log('🔄 Processando ID:', userId);
        const numbersOnly = userId.replace(/\D/g, '');
        
        const safeId1 = userId.replace(/[^a-zA-Z0-9]/g, '_');
        const filePath1 = path.join(POKEMON_USERS_DIR, `${safeId1}.json`);
        
        if (fs.existsSync(filePath1)) {
            console.log('✅ Encontrado pelo ID completo!');
            return { path: filePath1, foundById: userId };
        }
        
        if (userId.includes('@s.whatsapp.net')) {
            const withoutDomain = userId.replace('@s.whatsapp.net', '');
            const safeId2 = withoutDomain.replace(/[^a-zA-Z0-9]/g, '_');
            const filePath2 = path.join(POKEMON_USERS_DIR, `${safeId2}.json`);
            
            if (fs.existsSync(filePath2)) {
                console.log('✅ Encontrado pelo ID sem domínio!');
                return { path: filePath2, foundById: userId };
            }
        }
        
        if (numbersOnly) {
            const safeId3 = numbersOnly.replace(/[^a-zA-Z0-9]/g, '_');
            const filePath3 = path.join(POKEMON_USERS_DIR, `${safeId3}.json`);
            
            if (fs.existsSync(filePath3)) {
                console.log('✅ Encontrado pelos números!');
                return { path: filePath3, foundById: userId };
            }
        }
        
        if (fs.existsSync(POKEMON_USERS_DIR)) {
            const files = fs.readdirSync(POKEMON_USERS_DIR);
            
            for (const file of files) {
                if (!file.endsWith('.json')) continue;
                
                const filePath = path.join(POKEMON_USERS_DIR, file);
                try {
                    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    const savedUserId = userData.userId;
                    
                    if (savedUserId === userId) {
                        console.log(`✅ Encontrado pelo userId exato: ${savedUserId}`);
                        return { path: filePath, foundById: savedUserId };
                    }
                    
                    if (numbersOnly && savedUserId && savedUserId.includes(numbersOnly)) {
                        console.log(`✅ Encontrado pelos números no userId: ${savedUserId}`);
                        return { path: filePath, foundById: savedUserId };
                    }
                    
                } catch (e) {
                    continue;
                }
            }
        }
        
        console.log('❌ Nenhum arquivo encontrado');
        return null;
    }
    
    const userFileResult = findUserFile(userId);
    
    if (!userFileResult) {
        return res.redirect('/pokemon');
    }
    
    try {
        // Carrega dados do usuário
        const userData = JSON.parse(fs.readFileSync(userFileResult.path, 'utf8'));
        const actualUserId = userData.userId || userFileResult.foundById || userId;
        
        console.log('✅ Carregando dados de:', actualUserId);
        
        // Carrega dados Pokémon mestres
        let pokemonData = {};
        if (fs.existsSync(POKEMONS_DB_PATH)) {
            pokemonData = JSON.parse(fs.readFileSync(POKEMONS_DB_PATH, 'utf8'));
        }
        
        // VARIÁVEIS PARA CÁLCULOS
        let totalForce = 0;
        let totalTrainings = 0;
        const processedPokemons = [];
        const rarityCounts = {
    // Sistema completo com todas as 10 raridades
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    mythical: 0,
    shiny: 0,
    ultra: 0,
    master: 0,
    divine: 0
};
        
        // PROCESSAR CADA POKÉMON - USANDO EXATAMENTE A MESMA LÓGICA DO DETALHE
        (userData.pokemons || []).forEach(userPokemon => {
            const masterData = pokemonData[userPokemon.id];
            
            // 1. FORÇA BASE (do banco de dados)
            let baseForce = 0;
            if (masterData && masterData.stats) {
                // EXATAMENTE IGUAL AO DETALHE: usa stats.total ou calcula soma
                baseForce = masterData.stats.total || 0;
                if (baseForce === 0 && masterData.stats) {
                    baseForce = 
                        (masterData.stats.hp || 0) +
                        (masterData.stats.attack || 0) +
                        (masterData.stats.defense || 0) +
                        (masterData.stats.specialAttack || 0) +
                        (masterData.stats.specialDefense || 0) +
                        (masterData.stats.speed || 0);
                }
            }
            
            // 2. FORÇA ATUAL - EXATAMENTE IGUAL AO DETALHE DO POKÉMON
            let currentForce = 0;
            
            // DEBUG
            console.log(`\n🔍 Pokémon: ${userPokemon.name || userPokemon.id}`);
            console.log('  Tem currentStats?', !!userPokemon.currentStats);
            console.log('  Tem baseStats?', !!userPokemon.baseStats);
            console.log('  Tem stats?', !!userPokemon.stats);
            console.log('  Tem cp?', userPokemon.cp);
            
            // CÁLCULO IDÊNTICO AO DETALHE DO POKÉMON:
            // PRIMEIRO: Se tem currentStats, calcula igual ao detalhe
            if (userPokemon.currentStats) {
                // EXATAMENTE IGUAL AO DETALHE: soma todos os stats
                currentForce = 
                    (userPokemon.currentStats.hp || 0) +
                    (userPokemon.currentStats.attack || 0) +
                    (userPokemon.currentStats.defense || 0) +
                    (userPokemon.currentStats.specialAttack || 0) +
                    (userPokemon.currentStats.specialDefense || 0) +
                    (userPokemon.currentStats.speed || 0);
                
                console.log('  Usando currentStats (soma):', currentForce);
            } 
            // SEGUNDO: Se tem stats (sistema antigo)
            else if (userPokemon.stats) {
                // Verifica se stats tem total
                if (userPokemon.stats.total) {
                    currentForce = userPokemon.stats.total;
                    console.log('  Usando stats.total:', currentForce);
                } else {
                    // Se não tem total, calcula igual ao detalhe
                    currentForce = 
                        (userPokemon.stats.hp || 0) +
                        (userPokemon.stats.attack || 0) +
                        (userPokemon.stats.defense || 0) +
                        (userPokemon.stats.specialAttack || 0) +
                        (userPokemon.stats.specialDefense || 0) +
                        (userPokemon.stats.speed || 0);
                    console.log('  Usando stats (soma):', currentForce);
                }
            }
            // TERCEIRO: Se tem cp (sistema mais antigo)
            else if (userPokemon.cp) {
                currentForce = userPokemon.cp;
                console.log('  Usando cp:', currentForce);
            }
            // QUARTO: Base do banco de dados (como fallback)
            else if (masterData && masterData.stats) {
                // Igual ao detalhe: usa total ou calcula
                currentForce = masterData.stats.total || 0;
                if (currentForce === 0) {
                    currentForce = 
                        (masterData.stats.hp || 0) +
                        (masterData.stats.attack || 0) +
                        (masterData.stats.defense || 0) +
                        (masterData.stats.specialAttack || 0) +
                        (masterData.stats.specialDefense || 0) +
                        (masterData.stats.speed || 0);
                }
                console.log('  Usando base do banco:', currentForce);
            }
            
            // 3. SE BASE FORCE NÃO FOI CALCULADA, USA CURRENT FORCE COMO BASE
            if (baseForce === 0) {
                baseForce = currentForce;
            }
            
            // 4. CALCULAR AUMENTO (igual ao detalhe)
            const forceIncrease = Math.max(0, currentForce - baseForce);
            
            // 5. SOMAR PARA FORÇA TOTAL
            totalForce += currentForce;
            
            // 6. CONTAR TREINOS
            const trainingCount = userPokemon.trainingHistory?.totalTrainings || 0;
            totalTrainings += trainingCount;
            
            // 7. CONTAR RARIDADE
            const rarity = userPokemon.rarity || (masterData ? masterData.rarity : 'common');
            if (rarityCounts[rarity] !== undefined) {
                rarityCounts[rarity]++;
            }
            
            // 8. OBTER IMAGEM (corrigir problema das imagens)
            let artwork = userPokemon.artwork;
            if (!artwork && masterData) {
                artwork = masterData.localArtwork || masterData.artwork || null;
            }
            
            // 9. GARANTIR QUE O POKÉMON TENHA TODOS OS DADOS ATUALIZADOS
            // Inicializa currentStats se não existir (igual ao detalhe)
            let currentStats = userPokemon.currentStats;
            if (!currentStats && userPokemon.baseStats) {
                currentStats = { ...userPokemon.baseStats };
            } else if (!currentStats && userPokemon.stats) {
                currentStats = { ...userPokemon.stats };
            } else if (!currentStats && masterData && masterData.stats) {
                currentStats = { ...masterData.stats };
            }
            
            // Inicializa baseStats se não existir
            let baseStats = userPokemon.baseStats;
            if (!baseStats && masterData && masterData.stats) {
                baseStats = { ...masterData.stats };
            } else if (!baseStats && userPokemon.stats) {
                baseStats = { ...userPokemon.stats };
            }
            
            // Adiciona total aos stats
            if (currentStats) {
                currentStats.total = currentForce;
            }
            if (baseStats) {
                baseStats.total = baseForce;
            }
            
            // 10. CRIAR OBJETO PROCESSADO
            const processedPokemon = {
                // Dados originais
                ...userPokemon,
                
                // Dados básicos
                id: userPokemon.id,
                name: masterData ? (masterData.name || userPokemon.name) : userPokemon.name,
                number: masterData ? (masterData.number || userPokemon.number) : userPokemon.number,
                types: masterData ? (masterData.types || userPokemon.types || []) : userPokemon.types || [],
                rarity: rarity,
                
                // Forças calculadas (IDÊNTICO AO DETALHE)
                currentForce: currentForce,
                baseForce: baseForce,
                forceIncrease: forceIncrease,
                
                // Stats atualizados (igual ao detalhe)
                currentStats: currentStats,
                baseStats: baseStats,
                
                // Dados de imagem (corrigido)
                artwork: artwork,
                
                // Garantir que tenha trainingHistory
                trainingHistory: userPokemon.trainingHistory || {
                    totalTrainings: 0,
                    trainingsToday: 0,
                    lastTrained: null,
                    perfectTrainings: 0
                },
                
                // Para compatibilidade com o template
                cp: currentForce,
                stats: currentStats || baseStats || {},
                
                // IDs
                uniqueId: userPokemon.uniqueId || `${userPokemon.id}_${Date.now()}`
            };
            
            console.log(`  Resultado: Base=${baseForce}, Atual=${currentForce}, Aumento=${forceIncrease}, Treinos=${trainingCount}`);
            
            processedPokemons.push(processedPokemon);
        });
        
        // ORDENAR POR FORÇA ATUAL
        processedPokemons.sort((a, b) => b.currentForce - a.currentForce);
        
        // TOP 5 POKÉMONS
        const topPokemons = processedPokemons.slice(0, 5);
        
        // ESTATÍSTICAS
        const stats = {
            total: processedPokemons.length,
            unique: new Set(processedPokemons.map(p => p.id)).size,
            boxesOpened: userData.boxesOpened || 0,
            completion: Math.min(100, Math.floor((new Set(processedPokemons.map(p => p.id)).size / 151) * 100))
        };
        
        // CALCULAR POKÉMON TREINADOS
        const trainedPokemonsCount = processedPokemons.filter(p => {
            // Considera treinado se:
            // 1. Tem forceIncrease > 0 (igual ao detalhe)
            // 2. OU tem trainingHistory.totalTrainings > 0
            // 3. OU tem evs.total > 0
            return p.forceIncrease > 0 || 
                   (p.trainingHistory?.totalTrainings || 0) > 0 ||
                   (p.evs?.total || 0) > 0;
        }).length;
        
        console.log('\n📊 RESUMO FINAL:');
        console.log('- Total Pokémon:', stats.total);
        console.log('- Força Total:', totalForce);
        console.log('- Pokémon considerados treinados:', trainedPokemonsCount);
        console.log('- Pokémon com forceIncrease > 0:', processedPokemons.filter(p => p.forceIncrease > 0).length);
        console.log('- Pokémon com trainingHistory > 0:', processedPokemons.filter(p => p.trainingHistory?.totalTrainings > 0).length);
        
        // DEBUG: Mostrar exemplo
        if (processedPokemons.length > 0) {
            const sample = processedPokemons[0];
            console.log('\n📈 Exemplo (mais forte):');
            console.log(`  ${sample.name}:`);
            console.log(`    CurrentForce: ${sample.currentForce}`);
            console.log(`    BaseForce: ${sample.baseForce}`);
            console.log(`    ForceIncrease: ${sample.forceIncrease}`);
            console.log(`    Trainings: ${sample.trainingHistory?.totalTrainings || 0}`);
            console.log(`    Tem artwork? ${!!sample.artwork}`);
            
            // Mostrar cálculo detalhado
            if (sample.currentStats) {
                console.log(`    Stats detalhados:`);
                console.log(`      HP: ${sample.currentStats.hp} (base: ${sample.baseStats?.hp || 0})`);
                console.log(`      Ataque: ${sample.currentStats.attack} (base: ${sample.baseStats?.attack || 0})`);
                console.log(`      Defesa: ${sample.currentStats.defense} (base: ${sample.baseStats?.defense || 0})`);
            }
        }
        
        // LINK COMPARTILHÁVEL
        const shareLink = `https://fabibot.vercel.app/pokemon/${encodeURIComponent(actualUserId)}`;
        
        // RENDERIZAR
        res.render('pokemon-public', {
            nome_site: site_nome,
            usuario: {
                id: actualUserId,
                name: userData.userName || `Treinador_${actualUserId}`
            },
            stats: stats,
            totalForce: totalForce,
            totalTrainings: totalTrainings,
            rarityCounts: rarityCounts,
            topPokemons: topPokemons,
            pokemonData: pokemonData,
            userPokemon: {
                ...userData,
                pokemons: processedPokemons
            },
            shareLink: shareLink,
            
            // Para debug no template
            debug: {
                trainedCount: trainedPokemonsCount,
                forceIncreaseCount: processedPokemons.filter(p => p.forceIncrease > 0).length,
                trainingHistoryCount: processedPokemons.filter(p => p.trainingHistory?.totalTrainings > 0).length,
                samplePokemon: processedPokemons.length > 0 ? {
                    name: processedPokemons[0].name,
                    currentForce: processedPokemons[0].currentForce,
                    baseForce: processedPokemons[0].baseForce,
                    forceIncrease: processedPokemons[0].forceIncrease,
                    trainings: processedPokemons[0].trainingHistory?.totalTrainings || 0,
                    hasArtwork: !!processedPokemons[0].artwork,
                    hasCurrentStats: !!processedPokemons[0].currentStats,
                    hasBaseStats: !!processedPokemons[0].baseStats
                } : null
            }
        });
        
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
        res.redirect('/pokemon');
    }
});

// Adicione estas rotas ao seu index.js (app.js)

// ============================================
// 📦 ROTAS DO MERCADO POKÉMON
// ============================================


// No seu index.js, nas rotas do mercado, adicione:

async function initializePokemonDatabase() {
    console.log('🔄 Inicializando banco de dados Pokémon...');
    
    try {
        // Verifica se já existe
        if (fs.existsSync(POKEMONS_DB_PATH)) {
            console.log('📁 Banco de dados Pokémon já existe');
            return JSON.parse(fs.readFileSync(POKEMONS_DB_PATH, 'utf8'));
        }
        
        console.log('🌐 Baixando dados da PokeAPI...');
        const pokemonData = {};
        
        // 1. Baixa lista de todos Pokémon de uma vez
        console.log('📥 Baixando lista de Pokémon...');
        const listResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500');
        const allPokemon = listResponse.data.results;
        
        console.log(`📊 Total de Pokémon: ${allPokemon.length}`);
        
        // 2. Processa em batches para melhor performance
        const BATCH_SIZE = 50;
        
        for (let i = 0; i < allPokemon.length; i += BATCH_SIZE) {
            const batch = allPokemon.slice(i, i + BATCH_SIZE);
            console.log(`⚡ Processando lote ${i / BATCH_SIZE + 1}/${Math.ceil(allPokemon.length / BATCH_SIZE)}...`);
            
            // Processa batch em paralelo
            await Promise.all(batch.map(async (poke, index) => {
                try {
                    const id = i + index + 1;
                    const pokemonUrl = poke.url;
                    
                    // Baixa dados básicos
                    const response = await axios.get(pokemonUrl);
                    const pokemon = response.data;
                    
                    // Baixa espécie em paralelo
                    const speciesResponse = await axios.get(pokemon.species.url);
                    const species = speciesResponse.data;
                    
                    // Processa dados
                    processPokemonData(id, pokemon, species, pokemonData);
                    
                } catch (error) {
                    console.log(`❌ Erro no Pokémon ${i + index + 1}:`, error.message);
                }
            }));
            
            // Delay entre batches
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // 3. Salva database
        fs.writeFileSync(POKEMONS_DB_PATH, JSON.stringify(pokemonData, null, 2));
        
        console.log(`🎉 Banco de dados criado com ${Object.keys(pokemonData).length} Pokémon!`);
        return pokemonData;
        
    } catch (error) {
        console.error('❌ Erro ao criar banco de dados:', error);
        return {};
    }
}

// Função para carregar dados Pokémon (igual ao seu sistema)
// Atualize as rotas para incluir o banco Pokémon
// Função para obter imagem do Pokémon
async function getPokemonImage(pokemonData) { 
    const sources = [
        pokemonData.artwork,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.number}.png`,
        `https://img.pokemondb.net/artwork/${pokemonData.name.toLowerCase()}.jpg`,
        `/api/pokemon/image/${pokemonData.id}`,
        '/pokemon/images/default.png'
    ];
    
    for (const source of sources) {
        if (source && source !== '/pokemon/images/default.png') {
            try {
                // Verificar se a imagem existe
                const response = await fetch(source, { method: 'HEAD' });
                if (response.ok) {
                    return source;
                }
            } catch (error) {
                continue;
            }
        }
    }
    
    return '/pokemon/images/default.png';
}

// Atualize a rota /market para usar essa função
app.get('/market', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 12;
        
        // Filtros
        const filters = {
            rarity: req.query.rarity,
            minPrice: req.query.minPrice,
            maxPrice: req.query.maxPrice,
            search: req.query.search,
            sort: req.query.sort || 'newest'
        };
        
        // Obter listagens
        const allListings = await getActiveListings(filters);
        const totalListings = allListings.length;
        const totalPages = Math.ceil(totalListings / limit);
        
        // Paginar
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedListings = allListings.slice(startIndex, endIndex);
        
        // Estatísticas
        const stats = await getMarketStats();
        
        // Carregar banco Pokémon
        const pokemonDatabase = await initializePokemonDatabase();
        
        // Processar imagens para cada listagem
        const listings = [];
        for (let listing of paginatedListings) {
            // Clonar o objeto para não modificar o original
            const processedListing = JSON.parse(JSON.stringify(listing));
            
            // Obter imagem do Pokémon
            processedListing.pokemon_data.artwork = await getPokemonImage(processedListing.pokemon_data);
            
            // Adicionar informações adicionais
            processedListing.daysLeft = Math.max(0, Math.ceil(
                (new Date(processedListing.expires_at) - new Date()) / (1000 * 60 * 60 * 24)
            ));
            
            // Calcular IV se necessário
            if (processedListing.pokemon_data.iv) {
                const iv = processedListing.pokemon_data.iv;
                processedListing.pokemon_data.ivPercent = iv.total || 0;
            } else {
                processedListing.pokemon_data.ivPercent = 0;
            }
            
            // Calcular força se necessário
            if (!processedListing.pokemon_data.currentForce && processedListing.pokemon_data.cp) {
                processedListing.pokemon_data.currentForce = processedListing.pokemon_data.cp;
            }
            
            listings.push(processedListing);
        }
        
        // Raridades disponíveis
        const availableRarities = [...new Set(allListings.map(l => l.pokemon_data.rarity))].sort();
        
        res.render('market', {
            title: 'Mercado Pokémon',
            nome_site: site_nome,
            listings,
            page,
            totalPages,
            totalListings,
            stats,
            filters,
            availableRarities,
            getRarityIcon: (rarity) => {
                const icons = {
                    'common': '🟢',
                    'uncommon': '🔵',
                    'rare': '🟣',
                    'epic': '🟠',
                    'legendary': '🔴',
                    'mythical': '🌟',
                    'shiny': '✨',
                    'ultra': '⚡',
                    'master': '👑',
                    'divine': '💎'
                };
                return icons[rarity] || '🎲';
            }
        });
        
    } catch (error) {
        console.error('Erro no mercado:', error);
        res.status(500).render('error', { 
            message: 'Erro ao carregar o mercado',
            nome_site: site_nome 
        });
    }
});

// Página de detalhes do anúncio
// Página de detalhes do anúncio
app.get('/market/pokemon/:id', async (req, res) => {
    try {
        const listing = await getListing(req.params.id);
        
        if (!listing) {
            return res.status(404).render('error', { 
                message: 'Anúncio não encontrado',
                nome_site: site_nome 
            });
        }
        
        // Carregar banco Pokémon
        const pokemonDatabase = await initializePokemonDatabase();
        
        // Processar imagem
        listing.pokemon_data.artwork = await getPokemonImage(listing.pokemon_data);
        
        // Calcular dias restantes
        const expiresAt = new Date(listing.expires_at);
        const now = new Date();
        const diffTime = expiresAt - now;
        const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
        
        // Pokémon relacionados
        const relatedListings = await getActiveListings({
            rarity: listing.pokemon_data.rarity,
            limit: 4
        });
        
        // Processar imagens dos relacionados
        for (let related of relatedListings) {
            related.pokemon_data.artwork = await getPokemonImage(related.pokemon_data);
            
            // Calcular dias restantes para cada relacionado
            const relatedExpires = new Date(related.expires_at);
            const relatedDiff = relatedExpires - now;
            related.daysLeft = Math.max(0, Math.ceil(relatedDiff / (1000 * 60 * 60 * 24)));
        }
        
        // Filtrar para não incluir o próprio listing
        const related = relatedListings
            .filter(l => l.id !== listing.id)
            .slice(0, 4);
        
        // Buscar estatísticas do vendedor
        const sellerStats = await getSellerStats(listing.seller_id);
        
        res.render('market-listing', {
            title: `${listing.pokemon_data.name} - Mercado Pokémon`,
            nome_site: site_nome,
            listing,
            daysLeft, // Passando a variável para o template
            relatedListings: related,
            sellerStats,
            getRarityIcon: (rarity) => {
                const icons = {
                    'common': '🟢',
                    'uncommon': '🔵',
                    'rare': '🟣',
                    'epic': '🟠',
                    'legendary': '🔴',
                    'mythical': '🌟',
                    'shiny': '✨',
                    'ultra': '⚡',
                    'master': '👑',
                    'divine': '💎'
                };
                return icons[rarity] || '🎲';
            }
        });
        
    } catch (error) {
        console.error('Erro ao carregar anúncio:', error);
        res.status(500).render('error', { 
            message: 'Erro ao carregar anúncio',
            nome_site: site_nome 
        });
    }
});

// Função auxiliar para obter estatísticas do vendedor
async function getSellerStats(sellerId) {
    try {
        // Implemente esta função baseada na sua estrutura de dados
        return {
            listings: 1, // Número de anúncios ativos
            rating: 5.0, // Avaliação média
            sales: 0, // Total de vendas
            memberSince: new Date().toISOString() // Data de cadastro
        };
    } catch (error) {
        console.error('Erro ao obter estatísticas do vendedor:', error);
        return {
            listings: 1,
            rating: 5.0,
            sales: 0,
            memberSince: new Date().toISOString()
        };
    }
}


// Página do vendedor
app.get('/market/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const listings = await getActiveListings();
        
        const userListings = listings.filter(l => l.seller_id === userId);
        const userFile = findUserFile(userId);
        
        let userData = { 
            id: userId,
            userName: `Treinador_${userId.substring(0, 8)}`,
            pokemonCount: 0
        };
        
        if (userFile) {
            try {
                const data = JSON.parse(fs.readFileSync(userFile, 'utf8'));
                userData.userName = data.userName || userData.userName;
                userData.pokemonCount = data.pokemons?.length || 0;
            } catch (e) {
                // Usar dados padrão
            }
        }
        
        res.render('market-user', {
            title: `Anúncios de ${userData.userName}`,
            nome_site: site_nome,
            user: userData,
            listings: userListings
        });
        
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
        res.status(500).render('error', { 
            message: 'Erro ao carregar perfil',
            nome_site: site_nome 
        });
    }
});

// API para estatísticas do mercado
app.get('/api/market/stats', async (req, res) => {
    try {
        const stats = await getMarketStats();
        res.json({ 
            success: true, 
            stats 
        });
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Erro ao obter estatísticas' 
        });
    }
});

// API para obter listagens (para AJAX)
app.get('/api/market/listings', async (req, res) => {
    try {
        const filters = {
            rarity: req.query.rarity,
            minPrice: req.query.minPrice,
            maxPrice: req.query.maxPrice,
            search: req.query.search,
            sort: req.query.sort || 'newest'
        };
        
        const listings = await getActiveListings(filters);
        res.json({ 
            success: true, 
            listings 
        });
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Erro ao obter listagens' 
        });
    }
});

// API para obter uma listagem específica
app.get('/api/market/listings/:id', async (req, res) => {
    try {
        const listing = await getListing(req.params.id);
        
        if (!listing) {
            return res.json({ 
                success: false, 
                message: 'Anúncio não encontrado' 
            });
        }
        
        res.json({ 
            success: true, 
            listing 
        });
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Erro ao obter anúncio' 
        });
    }
});

// API para criar listagem (vender Pokémon)
app.post('/api/market/listings', async (req, res) => {
    try {
        const { userId, pokemonId, price } = req.body;
        
        if (!userId || !pokemonId || !price) {
            return res.json({ 
                success: false, 
                message: 'Dados incompletos' 
            });
        }
        
        // Verificar se usuário existe
        const userData = await getUserData(userId);
        if (!userData) {
            return res.json({ 
                success: false, 
                message: 'Usuário não encontrado' 
            });
        }
        
        // Encontrar Pokémon
        const pokemon = userData.pokemons?.find(p => 
            p.uniqueId === pokemonId || p.id === pokemonId
        );
        
        if (!pokemon) {
            return res.json({ 
                success: false, 
                message: 'Pokémon não encontrado' 
            });
        }
        
        // Criar listagem
        const listing = await createMarketListing(userId, pokemon, price);
        
        // Remover Pokémon do usuário
        const pokemonIndex = userData.pokemons.findIndex(p => 
            p.uniqueId === pokemonId || p.id === pokemonId
        );
        
        if (pokemonIndex !== -1) {
            userData.pokemons.splice(pokemonIndex, 1);
            
            // Salvar alterações
            const userFile = findUserFile(userId);
            fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
        }
        
        res.json({ 
            success: true, 
            listing,
            message: 'Pokémon listado com sucesso!' 
        });
        
    } catch (error) {
        console.error('Erro ao criar listagem:', error);
        res.json({ 
            success: false, 
            message: 'Erro ao criar listagem' 
        });
    }
});

// API para comprar Pokémon
app.post('/api/market/listings/:id/buy', async (req, res) => {
    try {
        const { buyerId } = req.body;
        const listingId = req.params.id;
        
        if (!buyerId) {
            return res.json({ 
                success: false, 
                message: 'ID do comprador não informado' 
            });
        }
        
        // Processar venda
        const result = await processSale(listingId, buyerId);
        
        res.json({ 
            success: true, 
            transaction: result,
            message: 'Compra realizada com sucesso!' 
        });
        
    } catch (error) {
        console.error('Erro ao processar compra:', error);
        res.json({ 
            success: false, 
            message: error.message || 'Erro ao processar compra' 
        });
    }
});

// API para cancelar listagem
app.delete('/api/market/listings/:id', async (req, res) => {
    try {
        const { sellerId } = req.body;
        const listingId = req.params.id;
        
        if (!sellerId) {
            return res.json({ 
                success: false, 
                message: 'ID do vendedor não informado' 
            });
        }
        
        const listing = await getListing(listingId);
        
        if (!listing) {
            return res.json({ 
                success: false, 
                message: 'Anúncio não encontrado' 
            });
        }
        
        if (listing.seller_id !== sellerId) {
            return res.json({ 
                success: false, 
                message: 'Você não é o dono deste anúncio' 
            });
        }
        
        // Devolver Pokémon ao vendedor
        const userFile = findUserFile(sellerId);
        if (userFile) {
            const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
            
            // Remover informações de mercado
            const cleanPokemon = { ...listing.pokemon_data };
            delete cleanPokemon.market_listing;
            delete cleanPokemon.listed_for_sale;
            
            if (!userData.pokemons) userData.pokemons = [];
            userData.pokemons.push(cleanPokemon);
            
            fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
        }
        
        // Atualizar status
        await updateListing(listingId, {
            status: 'cancelled',
            cancelled_at: new Date().toISOString()
        });
        
        // Remover arquivo
        const listingFile = path.join(LISTINGS_DIR, `${listingId}.json`);
        if (fs.existsSync(listingFile)) {
            fs.unlinkSync(listingFile);
        }
        
        res.json({ 
            success: true, 
            message: 'Anúncio cancelado com sucesso!' 
        });
        
    } catch (error) {
        console.error('Erro ao cancelar listagem:', error);
        res.json({ 
            success: false, 
            message: 'Erro ao cancelar listagem' 
        });
    }
});

// API para histórico do usuário
app.get('/api/market/history/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const historyFile = path.join(HISTORY_DIR, `${userId}.json`);
        
        if (!fs.existsSync(historyFile)) {
            return res.json({ 
                success: true, 
                history: { user_id: userId, transactions: [] } 
            });
        }
        
        const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        res.json({ 
            success: true, 
            history 
        });
        
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Erro ao obter histórico' 
        });
    }
});

// ============================================
// 📱 ROTAS PARA INTEGRAÇÃO COM WHATSAPP
// ============================================

// Rota para verificar status do mercado
app.get('/market/status', (req, res) => {
    res.json({
        success: true,
        market: {
            name: 'Mercado Pokémon',
            version: '1.0.0',
            status: 'online',
            commands: [
                '!vender <id_pokemon> <preço>',
                '!mercado [página]',
                '!comprar <id_anuncio>',
                '!minhas_vendas',
                '!cancelar_venda <id_anuncio>',
                '!historico_vendas'
            ]
        }
    });
});

app.get('/about', (req, res) => {
    const aboutContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sobre o Fabi Bot - A Revolução nos Bots de WhatsApp</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.7; max-width: 900px; margin: 0 auto; padding: 25px; color: #333; }
            h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; text-align: center; }
            h2 { color: #2980b9; margin-top: 35px; padding-bottom: 8px; border-bottom: 1px solid #eee; }
            .mission-box { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; border-left: 5px solid #3498db; margin: 25px 0; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
            .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); text-align: center; }
            .stat-number { font-size: 2.5em; font-weight: bold; color: #2c3e50; display: block; }
            .stat-label { color: #7f8c8d; font-size: 0.9em; }
            .highlight { background-color: #fffde7; padding: 4px 8px; border-radius: 4px; font-weight: 500; }
            .team-section { background: #f8f9fa; padding: 25px; border-radius: 10px; margin-top: 30px; }
            .cta-box { background: #2c3e50; color: white; padding: 25px; border-radius: 10px; text-align: center; margin-top: 40px; }
            .cta-button { display: inline-block; background: #3498db; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-top: 15px; }
            .update-date { text-align: right; color: #7f8c8d; font-style: italic; font-size: 0.9em; }
        </style>
    </head>
    <body>
        <p class="update-date">Atualizado em: ${new Date().toLocaleDateString('pt-BR')}</p>
        
        <h1>Sobre o Fabi Bot: Mais que um Bot, uma Revolução</h1>
        
        <div class="mission-box">
            <h2>Nossa Missão</h2>
            <p>O <span class="highlight">Fabi Bot</span> nasceu da necessidade de transformar grupos de WhatsApp em <strong>comunidades verdadeiramente interativas e envolventes</strong>. Enquanto a maioria dos bots se limita a comandos básicos, nós desenvolvemos um ecossistema completo que combina moderação inteligente, entretenimento dinâmico e uma economia virtual única através do nosso sistema de <span class="highlight">Golds</span>.</p>
            <p>Nossa visão é redefinir o conceito de automação em mensageiros, criando experiências que mantêm os grupos ativos, organizados e, acima de tudo, divertidos.</p>
        </div>
        
        <h2>A Nossa História</h2>
        <p>Desenvolvido por especialistas em automação e experiência do usuário, o Fabi Bot começou como um projeto interno em 2023 para resolver problemas comuns em grupos grandes: desorganização, falta de engajamento e moderação ineficiente. Após meses de desenvolvimento e testes com comunidades reais, percebemos que tínhamos criado algo muito maior do que um simples bot de WhatsApp.</p>
        <p>O diferencial surgiu com a implementação do <span class="highlight">sistema de Golds</span>, uma moeda virtual que introduziu elementos de gamificação, transformando interações cotidianas em uma experiência progressiva e recompensadora. Hoje, somos referência em bots avançados para WhatsApp, com milhares de usuários satisfeitos.</p>
        
        <h2>Em Números: Nossa Comunidade</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">128</span>
                <span class="stat-label">Grupos Ativos</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">41.4K+</span>
                <span class="stat-label">Membros Totais</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">98%</span>
                <span class="stat-label">Satisfação</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Disponibilidade</span>
            </div>
        </div>
        
        <h2>Nossa Filosofia de Desenvolvimento</h2>
        <p>Acreditamos que a tecnologia deve ser <strong>acessível, intuitiva e transformadora</strong>. Cada funcionalidade do Fabi Bot é pensada para:</p>
        <ul>
            <li><strong>Simplificar</strong> a moderação de grupos sem complicações técnicas</li>
            <li><strong>Engajar</strong> membros através de jogos e atividades interativas</li>
            <li><strong>Recompensar</strong> a participação ativa com nosso sistema de Golds</li>
            <li><strong>Proteger</strong> a privacidade e segurança dos usuários</li>
        </ul>
        
        <div class="team-section">
            <h2>Por Trás do Código</h2>
            <p>Somos uma equipe apaixonada por tecnologia e comunicação. Combinamos expertise em desenvolvimento de bots, design de experiência do usuário e análise de comunidades online. Estamos constantemente iterando e melhorando o Fabi Bot com base no feedback real de nossos usuários.</p>
        </div>
        
        <div class="cta-box">
            <h2>Pronto para Transformar Seu Grupo?</h2>
            <p>Junte-se a milhares de administradores que já estão usando o Fabi Bot para criar comunidades mais vibrantes e organizadas.</p>
            <a href="/" class="cta-button">Experimente Grátis</a>
        </div>
    </body>
    </html>
    `;
    res.send(aboutContent);
});

app.get('/features', (req, res) => {
    const featuresContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Funcionalidades Completas do Fabi Bot | Tudo que Você Precisa</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.7; max-width: 1000px; margin: 0 auto; padding: 25px; color: #333; }
            h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; }
            h2 { color: #2980b9; margin-top: 40px; padding-bottom: 10px; }
            h3 { color: #16a085; margin-top: 25px; }
            .feature-category { background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #3498db; }
            .feature-item { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border: 1px solid #eee; }
            .feature-title { display: flex; align-items: center; font-weight: bold; color: #2c3e50; margin-bottom: 10px; }
            .feature-icon { font-size: 1.5em; margin-right: 10px; }
            .feature-desc { color: #555; margin-left: 35px; }
            .comparison-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
            .comparison-table th { background: #2c3e50; color: white; padding: 15px; text-align: left; }
            .comparison-table td { padding: 15px; border: 1px solid #ddd; }
            .comparison-table tr:nth-child(even) { background: #f9f9f9; }
            .check { color: #27ae60; font-weight: bold; }
            .cross { color: #e74c3c; }
            .golds-system { background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%); padding: 25px; border-radius: 10px; border: 2px solid #ffd54f; margin: 30px 0; }
            .golds-title { color: #f57c00; text-align: center; }
            .update-date { text-align: right; color: #7f8c8d; font-style: italic; font-size: 0.9em; }
        </style>
    </head>
    <body>
        <p class="update-date">Última atualização de funcionalidades: ${new Date().toLocaleDateString('pt-BR')}</p>
        
        <h1>Funcionalidades Completas do Fabi Bot</h1>
        <p>Descubra tudo que o Fabi Bot pode fazer para transformar seu grupo do WhatsApp. Organizamos nossas funcionalidades em categorias para facilitar sua compreensão.</p>
        
        <div class="feature-category">
            <h2>🎮 Sistema de Entretenimento e Gamificação</h2>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">💰</span> Sistema de Golds</div>
                <div class="feature-desc">
                    <p><strong>Moeda virtual exclusiva</strong> que revoluciona a interação nos grupos. Os Golds são ganhos através de:</p>
                    <ul>
                        <li>Participação ativa no grupo (mensagens, interações)</li>
                        <li>Vitórias em jogos internos como o Tigrinho</li>
                        <li>Conclusão de desafios diários e semanais</li>
                        <li>Contribuição para a comunidade</li>
                    </ul>
                    <p>Os Golds podem ser usados para desbloquear vantagens exclusivas, participar de rankings competitivos e acessar funcionalidades especiais.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🎰</span> Jogo Tigrinho</div>
                <div class="feature-desc">
                    <p>Jogo de entretenimento virtual com sistema de multiplicadores de até 59x. <strong>Atenção:</strong> Este jogo utiliza apenas Golds (moeda virtual interna) e não envolve apostas com dinheiro real. É puramente para diversão e competição amigável entre membros do grupo.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🏆</span> Rankings Competitivos</div>
                <div class="feature-desc">
                    <p>Sistema de classificação em múltiplas categorias: mais Golds acumulados, maior atividade, vitórias em jogos, etc. Rankings atualizados em tempo real com posições diárias, semanais e mensais. Os melhores colocados recebem reconhecimento especial no grupo.</p>
                </div>
            </div>
        </div>
        
        <div class="feature-category">
            <h2>🛡️ Moderação e Segurança Avançada</h2>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🚫</span> Sistema Anti-Spam Inteligente</div>
                <div class="feature-desc">
                    <p>Detecção automática de mensagens repetitivas, flood e conteúdo indesejado. O bot pode configurar limites personalizados de mensagens por minuto e aplicar penalidades automáticas.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🔗</span> Filtro de Links Controlável</div>
                <div class="feature-desc">
                    <p>Bloqueio automático de links maliciosos ou de domínios não autorizados. Os administradores podem configurar listas brancas e listas negras de URLs específicos.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">👮</span> Controle Total de Administradores</div>
                <div class="feature-desc">
                    <p>Interface completa para administradores gerenciarem permissões, visualizarem logs de moderação, aplicarem bans temporários ou permanentes, e configurarem níveis de acesso diferenciados.</p>
                </div>
            </div>
        </div>
        
        <div class="feature-category">
            <h2>🎨 Conteúdo e Mídia</h2>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🖼️</span> Criador de Figurinhas Avançado</div>
                <div class="feature-desc">
                    <p>Criação automática de figurinhas a partir de imagens, vídeos e GIFs. Funcionalidade exclusiva de remoção de fundo para figurinhas transparentes. Suporte a personalização com textos e efeitos.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">📥</span> Download de Mídia Multiplataforma</div>
                <div class="feature-desc">
                    <p>Download de vídeos, áudios e imagens do YouTube, TikTok, Instagram e outras plataformas em alta qualidade. Conversão automática para formatos otimizados para WhatsApp.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <div class="feature-title"><span class="feature-icon">🤖</span> Assistente de IA Integrado</div>
                <div class="feature-desc">
                    <p>Sistema de inteligência artificial para conversas naturais, respostas a perguntas frequentes e geração de conteúdo criativo. Pode ser personalizado para o contexto específico de cada grupo.</p>
                </div>
            </div>
        </div>
        
        <div class="golds-system">
            <h2 class="golds-title">💰 Mercado de Ativos com Golds</h2>
            <p>Sistema exclusivo que simula um mercado virtual onde membros podem "investir" seus Golds em ativos digitais com valores que flutuam em tempo real. Esta funcionalidade educativa introduz conceitos básicos de mercado de forma lúdica e segura, utilizando apenas a moeda virtual do bot.</p>
        </div>
        
        <h2>Comparativo: Fabi Bot vs. Bots Comuns</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Funcionalidade</th>
                    <th>Fabi Bot</th>
                    <th>Bots Comuns</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sistema de Economia Virtual (Golds)</td>
                    <td class="check">✅ COMPLETO</td>
                    <td class="cross">❌ Não possui</td>
                </tr>
                <tr>
                    <td>Jogos Integrados com Ranking</td>
                    <td class="check">✅ Múltiplos jogos</td>
                    <td class="cross">❌ Limitados ou inexistentes</td>
                </tr>
                <tr>
                    <td>Download Multiplataforma</td>
                    <td class="check">✅ YouTube, TikTok, Instagram</td>
                    <td class="cross">❌ Apenas básico</td>
                </tr>
                <tr>
                    <td>Figurinhas sem Fundo Automático</td>
                    <td class="check">✅ Tecnologia avançada</td>
                    <td class="cross">❌ Manual ou inexistente</td>
                </tr>
                <tr>
                    <td>IA para Conversas Naturais</td>
                    <td class="check">✅ Integração completa</td>
                    <td class="cross">❌ Respostas pré-definidas apenas</td>
                </tr>
            </tbody>
        </table>
        
        <p><strong>Nota:</strong> Todas as funcionalidades relacionadas a jogos e mercado utilizam exclusivamente o sistema de Golds, nossa moeda virtual interna sem valor monetário real, garantindo uma experiência de entretenimento segura e responsável.</p>
    </body>
    </html>
    `;
    res.send(featuresContent);
});

// Rotas para páginas legais
app.get('/terms', (req, res) => {
    const termsContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Termos de Uso - Fabi Bot</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
            h2 { color: #555; margin-top: 25px; }
            .date { color: #666; font-style: italic; }
            .section { margin-bottom: 20px; }
            .contact { background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 30px; }
        </style>
    </head>
    <body>
        <h1>Termos de Uso - Fabi Bot</h1>
        <p class="date">Última atualização: ${new Date().toLocaleDateString('pt-BR')}</p>
        
        <div class="section">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao utilizar o Fabi Bot, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.</p>
        </div>
        
        <div class="section">
            <h2>2. Descrição do Serviço</h2>
            <p>Fabi Bot é um sistema de automação para WhatsApp que fornece funcionalidades de moderação, entretenimento e gestão de grupos através de comandos.</p>
        </div>
        
        <div class="section">
            <h2>3. Responsabilidades do Usuário</h2>
            <p>Você é responsável por como utiliza o bot em seus grupos. Não use para atividades ilegais, spam ou assédio.</p>
        </div>
        
        <div class="section">
            <h2>4. Sistema de Golds</h2>
            <p>Os "Golds" são moeda virtual interna para uso exclusivo dentro dos recursos do bot, sem valor monetário real.</p>
        </div>
        
        <div class="section">
            <h2>5. Jogos e Entretenimento</h2>
            <p>Os jogos como "Tigrinho" são apenas para entretenimento virtual. Não envolvem apostas com dinheiro real.</p>
        </div>
        
        <div class="contact">
            <p><strong>Dúvidas sobre os termos?</strong></p>
            <p>Entre em contato: contato@fabibot.com</p>
        </div>
    </body>
    </html>
    `;
    res.send(termsContent);
});

app.get('/privacy', (req, res) => {
    const privacyContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Política de Privacidade - Fabi Bot</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
            h2 { color: #555; margin-top: 25px; }
            .section { margin-bottom: 20px; }
            .highlight { background: #f0f8ff; padding: 10px; border-left: 4px solid #3498db; }
        </style>
    </head>
    <body>
        <h1>Política de Privacidade</h1>
        
        <div class="section">
            <h2>1. Informações que Coletamos</h2>
            <p>Coletamos apenas informações necessárias para o funcionamento do bot:</p>
            <ul>
                <li>Número de telefone (após adicionar o bot ao grupo)</li>
                <li>Nome do grupo e participantes</li>
                <li>Estatísticas de uso (comandos mais utilizados)</li>
            </ul>
        </div>
        
        <div class="section">
            <h2>2. Como Usamos suas Informações</h2>
            <p>As informações são usadas para:</p>
            <ul>
                <li>Fornecer os serviços do bot (moderação, jogos, etc.)</li>
                <li>Melhorar a experiência do usuário</li>
                <li>Gerar estatísticas de grupos e rankings</li>
            </ul>
        </div>
        
        <div class="section highlight">
            <p><strong>NÃO</strong> vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros.</p>
        </div>
        
        <div class="section">
            <h2>3. Segurança dos Dados</h2>
            <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
        </div>
        
        <div class="section">
            <h2>4. Seus Direitos</h2>
            <p>Você pode solicitar a exclusão de seus dados a qualquer momento entrando em contato conosco.</p>
        </div>
    </body>
    </html>
    `;
    res.send(privacyContent);
});

app.get('/cookies', (req, res) => {
    const cookiesContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Política de Cookies - Fabi Bot</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
            .cookie-type { background: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 5px; }
            .type-title { font-weight: bold; color: #2c3e50; }
        </style>
    </head>
    <body>
        <h1>Política de Cookies</h1>
        
        <div class="cookie-type">
            <p class="type-title">O que são cookies?</p>
            <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.</p>
        </div>
        
        <div class="cookie-type">
            <p class="type-title">Cookies que Utilizamos:</p>
            <ul>
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
                <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes usam o site</li>
                <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências</li>
            </ul>
        </div>
        
        <div class="cookie-type">
            <p class="type-title">Como Controlar Cookies:</p>
            <p>Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p>
        </div>
        
        <div class="cookie-type">
            <p class="type-title">Cookies de Terceiros:</p>
            <p>Nosso site pode conter links para outros sites que possuem suas próprias políticas de cookies.</p>
        </div>
    </body>
    </html>
    `;
    res.send(cookiesContent);
});

app.get('/disclaimer', (req, res) => {
    const disclaimerContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Disclaimer - Fabi Bot</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
            .warning { background: #fff8e1; padding: 20px; border-left: 6px solid #ff9800; margin: 20px 0; }
            .warning-title { font-weight: bold; color: #e65100; font-size: 1.2em; }
            .section { margin-bottom: 20px; }
        </style>
    </head>
    <body>
        <h1>Disclaimer Legal</h1>
        
        <div class="warning">
            <p class="warning-title">AVISO IMPORTANTE</p>
            <p>O Fabi Bot é uma ferramenta de automação e entretenimento. Use com responsabilidade.</p>
        </div>
        
        <div class="section">
            <h2>1. Natureza do Serviço</h2>
            <p>Fabi Bot é um sistema de automação para WhatsApp que oferece funcionalidades de moderação, entretenimento e gestão de grupos.</p>
        </div>
        
        <div class="section">
            <h2>2. Isenção de Responsabilidade</h2>
            <p>Não nos responsabilizamos por:</p>
            <ul>
                <li>Como os usuários utilizam o bot em seus grupos</li>
                <li>Conteúdo gerado ou compartilhado por usuários</li>
                <li>Suspensões de contas pelo WhatsApp</li>
            </ul>
        </div>
        
        <div class="warning">
            <p class="warning-title">SOBRE OS JOGOS</p>
            <p><strong>Os jogos disponíveis, incluindo o "Tigrinho", são apenas para entretenimento virtual.</strong></p>
            <p>Não envolvem apostas com dinheiro real, não constituem jogo de azar online e não oferecem prêmios em dinheiro.</p>
            <p>O "sistema de Golds" é moeda virtual interna sem valor monetário real.</p>
        </div>
        
        <div class="section">
            <h2>3. Conformidade com o WhatsApp</h2>
            <p>O uso do bot deve estar em conformidade com os Termos de Serviço do WhatsApp. O usuário é responsável por seu uso adequado.</p>
        </div>
    </body>
    </html>
    `;
    res.send(disclaimerContent);
});

// Webhook para notificações do WhatsApp
app.post('/webhook/market', async (req, res) => {
    try {
        const { type, data } = req.body;
        
        console.log('Webhook recebido:', type, data);
        
        switch (type) {
            case 'pokemon_sold':
                // Notificar vendedor
                // Você implementaria a lógica de envio de mensagem aqui
                break;
                
            case 'new_listing':
                // Notificar novidades
                break;
                
            case 'offer_received':
                // Notificar oferta
                break;
        }
        
        res.json({ success: true, received: true });
        
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

// ============================================
// 🎯 ROTA DE REDIRECIONAMENTO (Página Inicial)
// ============================================

app.get('/', (req, res) => {
    res.redirect('/market');
});

// ============================================
// ⚙️ INICIALIZAÇÃO DO MERCADO
// ============================================

// Inicializar diretórios do mercado quando o servidor iniciar
ensureMarketDirs();
console.log('✅ Sistema de mercado Pokémon inicializado!');
// FUNÇÃO DE FALLBACK SE O TEMPLATE NÃO EXISTIR
function createPokemonPageFallback(data) {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.usuario.name} | ${data.nome_site}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(135deg, #1a1a2e 0%, #0F3460 100%);
                color: #fff;
                min-height: 100vh;
                padding: 20px;
            }
            .container { max-width: 1200px; margin: 0 auto; }
            .header {
                background: linear-gradient(90deg, #FF0000, #3B4CCA);
                padding: 30px;
                border-radius: 20px;
                margin-bottom: 30px;
                text-align: center;
            }
            .trainer-name {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            .trainer-id {
                background: #FFDE00;
                color: #000;
                padding: 5px 15px;
                border-radius: 20px;
                display: inline-block;
                margin-bottom: 20px;
            }
            .stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 20px 0;
            }
            .stat-card {
                background: rgba(255,255,255,0.9);
                padding: 20px;
                border-radius: 15px;
                text-align: center;
                color: #000;
            }
            .stat-value {
                font-size: 2.5rem;
                font-weight: bold;
                color: #FF0000;
            }
            .pokedex-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                gap: 20px;
                margin-top: 30px;
            }
            .pokemon-card {
                background: rgba(255,255,255,0.1);
                padding: 20px;
                border-radius: 15px;
                text-align: center;
                border: 2px solid transparent;
            }
            .pokemon-card:hover {
                border-color: #FFDE00;
                transform: translateY(-5px);
            }
            .back-btn {
                display: inline-block;
                background: #3B4CCA;
                color: white;
                padding: 12px 25px;
                border-radius: 10px;
                text-decoration: none;
                margin-top: 30px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 class="trainer-name">${data.usuario.name}</h1>
                <div class="trainer-id">ID: ${data.usuario.id}</div>
                
                <div class="stats">
                    <div class="stat-card">
                        <div class="stat-value">${data.stats.total}</div>
                        <div>Pokémon</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${data.stats.unique}/151</div>
                        <div>Espécies</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${data.stats.completion}%</div>
                        <div>Completo</div>
                    </div>
                </div>
            </div>
            
            <h2 style="margin-bottom: 20px;">Pokédex (${data.userPokemon.pokemons.length} Pokémon)</h2>
            
            ${data.userPokemon.pokemons.length > 0 ? `
                <div class="pokedex-grid">
                    ${data.userPokemon.pokemons.map(pokemon => `
                        <div class="pokemon-card">
                            <div style="font-size: 12px; color: #FFDE00; margin-bottom: 5px;">#${pokemon.number}</div>
                            <div style="font-weight: bold; font-size: 18px; margin-bottom: 10px;">${pokemon.name}</div>
                            <div style="color: #ccc; margin-bottom: 10px;">CP: ${pokemon.cp || 'N/A'}</div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div style="text-align: center; padding: 60px 20px; color: #888;">
                    <i class="fas fa-dragon" style="font-size: 4rem; margin-bottom: 20px;"></i>
                    <h3 style="color: #FFDE00;">Pokédex Vazia</h3>
                    <p>Este treinador ainda não capturou nenhum Pokémon.</p>
                </div>
            `}
            
            <div style="text-align: center; margin-top: 40px;">
                <a href="/pokemon" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Ver Todos Treinadores
                </a>
            </div>
        </div>
    </body>
    </html>
    `;
}

// ROTA PARA VER DETALHES DE UM POKÉMON ESPECÍFICO
// ROTA PARA VER DETALHES DE UM POKÉMON ESPECÍFICO (CORRIGIDA)
app.get('/pokemon/:userId/pokemon/:pokemonId', (req, res) => {
    const { userId, pokemonId } = req.params;
    
    const POKEMONS_DB_PATH = path.join(__dirname, 'public', 'pokemon', 'data', 'pokemons.json');
    const POKEMON_USERS_DIR = path.join(__dirname, 'public', 'pokemon', 'users');
    
    // DEFINA OS EMOJIS AQUI ou importe do seu arquivo principal
    const TYPE_EMOJIS = {
        normal: '⚪',
        fire: '🔥',
        water: '💧',
        electric: '⚡',
        grass: '🌿',
        ice: '❄️',
        fighting: '🥊',
        poison: '☠️',
        ground: '🌍',
        flying: '🕊️',
        psychic: '🔮',
        bug: '🐛',
        rock: '🪨',
        ghost: '👻',
        dark: '🌑',
        dragon: '🐉',
        steel: '⚙️',
        fairy: '🧚'
    };
    
const POKE_EMOJIS = {
    // Sistema completo com todas as 10 raridades
    'common': '🟢',      // Verde - Básico
    'uncommon': '🔵',    // Azul - Incomum
    'rare': '🟣',        // Roxo - Raro
    'epic': '🟠',        // Laranja - Épico
    'legendary': '🟡',   // Amarelo/Dourado - Lendário
    'mythical': '🔴',    // Vermelho - Mítico
    'shiny': '✨',       // Brilhante - Shiny
    'ultra': '🌟',       // Estrela brilhante - Ultra
    'master': '💎',      // Diamante - Master
    'divine': '👑'       // Coroa - Divino
};
    // Encontra arquivo do usuário
    function findUserFile(userId) {
        const safeId = userId.replace(/[^a-zA-Z0-9]/g, '_');
        const filePath = path.join(POKEMON_USERS_DIR, `${safeId}.json`);
        
        if (fs.existsSync(filePath)) return filePath;
        
        if (fs.existsSync(POKEMON_USERS_DIR)) {
            const files = fs.readdirSync(POKEMON_USERS_DIR);
            for (const file of files) {
                if (!file.endsWith('.json')) continue;
                const filePath = path.join(POKEMON_USERS_DIR, file);
                try {
                    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    if (userData.userId === userId) return filePath;
                } catch (e) {
                    continue;
                }
            }
        }
        return null;
    }
    
    const userFilePath = findUserFile(userId);
    
    if (!userFilePath) {
        return res.redirect(`/pokemon/${userId}`);
    }
    
    try {
        const userData = JSON.parse(fs.readFileSync(userFilePath, 'utf8'));
        const pokemonData = JSON.parse(fs.readFileSync(POKEMONS_DB_PATH, 'utf8'));
        
        // ENCONTRA O POKÉMON NA COLEÇÃO DO USUÁRIO
        // Primeiro tenta pelo uniqueId (novo sistema)
        let userPokemon = userData.pokemons?.find(p => p.uniqueId === pokemonId);
        
        // Se não encontrar pelo uniqueId, tenta pelo id da espécie (sistema antigo)
        if (!userPokemon) {
            userPokemon = userData.pokemons?.find(p => p.id == pokemonId);
        }
        
        // Se ainda não encontrou, redireciona
        if (!userPokemon) {
            return res.redirect(`/pokemon/${userId}`);
        }
        
        // Busca dados da espécie
        const masterPokemon = pokemonData[userPokemon.id];
        
        if (!masterPokemon) {
            return res.redirect(`/pokemon/${userId}`);
        }
        
        // GARANTE QUE O POKÉMON TENHA TODOS OS DADOS ATUALIZADOS
        // Inicializa currentStats se não existir
        if (!userPokemon.currentStats && userPokemon.baseStats) {
            userPokemon.currentStats = { ...userPokemon.baseStats };
        } else if (!userPokemon.currentStats && masterPokemon.stats) {
            userPokemon.currentStats = { ...masterPokemon.stats };
            userPokemon.baseStats = { ...masterPokemon.stats };
        }
        
        // Inicializa trainingHistory se não existir
        if (!userPokemon.trainingHistory) {
            userPokemon.trainingHistory = {
                totalTrainings: 0,
                trainingsToday: 0,
                lastTrained: null,
                perfectTrainings: 0
            };
        }
        
        // Inicializa evs se não existir
        if (!userPokemon.evs) {
            userPokemon.evs = {
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                specialDefense: 0,
                speed: 0,
                total: 0
            };
        }
        
        // Inicializa evAccumulator se não existir
        if (!userPokemon.evAccumulator) {
            userPokemon.evAccumulator = {
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                specialDefense: 0,
                speed: 0
            };
        }
        
        // CALCULA A FORÇA ATUAL (stats totais)
        // A força é a soma de todos os stats atuais
        if (userPokemon.currentStats) {
            userPokemon.stats = userPokemon.currentStats;
            userPokemon.stats.total = 
                (userPokemon.currentStats.hp || 0) +
                (userPokemon.currentStats.attack || 0) +
                (userPokemon.currentStats.defense || 0) +
                (userPokemon.currentStats.specialAttack || 0) +
                (userPokemon.currentStats.specialDefense || 0) +
                (userPokemon.currentStats.speed || 0);
        } else if (masterPokemon.stats) {
            // Se não tem currentStats, usa os stats base
            userPokemon.stats = masterPokemon.stats;
        }
        
        // Calcula o CP baseado na força
        if (!userPokemon.cp && userPokemon.stats) {
            userPokemon.cp = userPokemon.stats.total;
        }
        
        // Cores para tipos Pokémon
        const typeColors = {
            normal: '#A8A878',
            fire: '#F08030',
            water: '#6890F0',
            electric: '#F8D030',
            grass: '#78C850',
            ice: '#98D8D8',
            fighting: '#C03028',
            poison: '#A040A0',
            ground: '#E0C068',
            flying: '#A890F0',
            psychic: '#F85888',
            bug: '#A8B820',
            rock: '#B8A038',
            ghost: '#705898',
            dragon: '#7038F8',
            dark: '#705848',
            steel: '#B8B8D0',
            fairy: '#EE99AC'
        };
        
        // Rarity colors
const rarityColors = {
    // Cores para todas as 10 raridades (gradiente progressivo)
    common: '#4CAF50',      // Verde
    uncommon: '#2196F3',    // Azul
    rare: '#9C27B0',        // Roxo
    epic: '#FF5722',        // Laranja escuro (alterado para diferenciar)
    legendary: '#FF9800',   // Laranja original
    mythical: '#F44336',    // Vermelho
    shiny: '#FFD700',       // Dourado (moved mythical gold to shiny)
    ultra: '#FF4081',       // Rosa vibrante
    master: '#00BCD4',      // Ciano
    divine: '#FFEB3B'       // Amarelo brilhante
};

// Calcula percentual da força máxima
const maxStatsByRarity = {
    // Valores máximos atualizados para o sistema de 10 tiers
    common: 800,
    uncommon: 1000,
    rare: 1200,
    epic: 1400,
    legendary: 1600,
    mythical: 1800,
    shiny: 2000,
    ultra: 2200,
    master: 2400,
    divine: 3000  // Máximo absoluto
};
        const rarity = userPokemon.rarity || 'common';
        const currentForce = userPokemon.stats?.total || 0;
        const maxForce = maxStatsByRarity[rarity] || 800;
        const forcePercentage = maxForce > 0 ? Math.min((currentForce / maxForce) * 100, 100) : 0;
        
        // Determina tier da força
        let forceTier = 'Fraca';
        let forceTierClass = 'force-tier-weak';
        let forceTierEmoji = '🟡';
        
        if (forcePercentage >= 80) {
            forceTier = 'Lendária';
            forceTierClass = 'force-tier-legendary';
            forceTierEmoji = '🔴';
        } else if (forcePercentage >= 65) {
            forceTier = 'Épica';
            forceTierClass = 'force-tier-epic';
            forceTierEmoji = '🟣';
        } else if (forcePercentage >= 50) {
            forceTier = 'Forte';
            forceTierClass = 'force-tier-strong';
            forceTierEmoji = '🟢';
        } else if (forcePercentage >= 30) {
            forceTier = 'Média';
            forceTierClass = 'force-tier-average';
            forceTierEmoji = '🟠';
        }
        
        res.render('pokemon-detail-public', {
            nome_site: site_nome,
            usuario: {
                id: userId,
                name: userData.userName || `Treinador_${userId}`
            },
            pokemon: masterPokemon,
            userPokemon: userPokemon,
            shareLink: `https://fabibot.vercel.app/pokemon/${userId}/pokemon/${pokemonId}`,
            TYPE_EMOJIS: TYPE_EMOJIS,
            POKE_EMOJIS: POKE_EMOJIS,
            TYPE_COLORS: typeColors,
            RARITY_COLORS: rarityColors,
            
            // DADOS CALCULADOS PARA O TEMPLATE
            currentForce: currentForce,
            maxForce: maxForce,
            forcePercentage: Math.round(forcePercentage),
            forceTier: forceTier,
            forceTierClass: forceTierClass,
            forceTierEmoji: forceTierEmoji,
            
            // Informações de treino
            hasTrainingHistory: userPokemon.trainingHistory?.totalTrainings > 0,
            hasEVs: userPokemon.evs?.total > 0,
            hasEVAccumulator: userPokemon.evAccumulator && Object.values(userPokemon.evAccumulator).some(v => v > 0),
            
            // Diferencial entre stats base e atuais
            statsIncrease: userPokemon.currentStats && userPokemon.baseStats ? {
                hp: userPokemon.currentStats.hp - userPokemon.baseStats.hp,
                attack: userPokemon.currentStats.attack - userPokemon.baseStats.attack,
                defense: userPokemon.currentStats.defense - userPokemon.baseStats.defense,
                specialAttack: userPokemon.currentStats.specialAttack - userPokemon.baseStats.specialAttack,
                specialDefense: userPokemon.currentStats.specialDefense - userPokemon.baseStats.specialDefense,
                speed: userPokemon.currentStats.speed - userPokemon.baseStats.speed,
                total: (userPokemon.currentStats.total || 0) - (userPokemon.baseStats.total || 0)
            } : null
        });
        
    } catch (error) {
        console.error('Erro na rota de detalhes:', error);
        res.redirect(`/pokemon/${userId}`);
    }
});
// Importar o gerenciador de sessões WhatsApp


const carteiraPath = path.join(__dirname, 'carteira.json');


// Objeto global para controle de processamento
const processamentoControle = {
    ativos: new Map(),
    bloqueados: new Set(),
    ultimaVerificacao: Date.now()
};

// Função para buscar pagamento no Mercado Pago
async function buscarPagamentoMP2(paymentId) {
    try {
        const response = await axios.get(
            `https://api.mercadopago.com/v1/payments/${paymentId}`,
            {
                headers: {
                    Authorization: `Bearer APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349`,
                },
                timeout: 10000,
            }
        );

        return response.data;
    } catch (error) {
        console.error(`❌ Erro ao buscar pagamento ${paymentId}:`, error.message);
        return { status: 'error', error: error.message };
    }
}

// Função para verificar e processar transações pendentes
async function verificarTransacoesPendentes(numeroUsuario) {
    try {
        console.log(`🔍 [${numeroUsuario || 'ALL'}] Iniciando verificação de transações...`);
        
        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        const carteiraPath = path.join(__dirname, 'carteira.json');

        if (!fs.existsSync(transacoesPath)) {
            console.log('📁 Arquivo de transações não encontrado');
            return [];
        }

        // Ler transações
        const transacoesData = fs.readFileSync(transacoesPath, 'utf8');
        const todasTransacoes = JSON.parse(transacoesData || '[]');

        // Filtrar transações elegíveis para processamento
        const transacoesPendentes = todasTransacoes.filter(t => {
            // Condições para processar
            const condicoes = {
                naoProcessado: t.processado !== true,
                statusPendente: t.status === 'pending',
                naoBloqueado: !processamentoControle.bloqueados.has(t.paymentId),
                tempoValido: t.dataCriacao && (Date.now() - new Date(t.dataCriacao).getTime() < 48 * 60 * 60 * 1000), // 48h
                usuarioCorreto: !numeroUsuario || t.numero === numeroUsuario
            };

            return Object.values(condicoes).every(Boolean);
        });

        if (transacoesPendentes.length === 0) {
            console.log(`✅ [${numeroUsuario || 'ALL'}] Nenhuma transação pendente encontrada`);
            return [];
        }

        console.log(`📋 [${numeroUsuario || 'ALL'}] Encontradas ${transacoesPendentes.length} transações pendentes`);

        const resultados = [];
        const transacoesProcessadas = [];

        // Processar em série com controle rigoroso
        for (const transacao of transacoesPendentes) {
            let processadoComSucesso = false;
            
            try {
                // Verificação dupla de processamento
                if (processamentoControle.ativos.has(transacao.paymentId)) {
                    const infoProcesso = processamentoControle.ativos.get(transacao.paymentId);
                    if (Date.now() - infoProcesso.inicio < 30000) { // 30 segundos
                        console.log(`⏩ Transação ${transacao.paymentId} já está sendo processada`);
                        continue;
                    } else {
                        // Limpar processo antigo
                        processamentoControle.ativos.delete(transacao.paymentId);
                    }
                }

                // Marcar como em processamento
                processamentoControle.ativos.set(transacao.paymentId, {
                    inicio: Date.now(),
                    numero: transacao.numero,
                    tentativas: 0
                });

                console.log(`🔄 Verificando transação ${transacao.paymentId}...`);
                
                // Buscar status atual no Mercado Pago
                const check = await buscarPagamentoMP2(transacao.paymentId);
                
                if (check.status && check.status !== 'pending') {
                    console.log(`📊 Status MP para ${transacao.paymentId}: ${check.status}`);
                    
                    // Reler transações para garantir dados atualizados
                    const transacoesAtual = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
                    const transacaoIndex = transacoesAtual.findIndex(t => t.paymentId === transacao.paymentId);
                    
                    if (transacaoIndex === -1) {
                        console.log(`❓ Transação ${transacao.paymentId} não encontrada no arquivo`);
                        continue;
                    }

                    // Verificação final antes de processar
                    if (transacoesAtual[transacaoIndex].processado === true) {
                        console.log(`⚠️ Transação ${transacao.paymentId} já foi processada`);
                        continue;
                    }

                    if (check.status === 'approved') {
                        // ATUALIZAR TRANSAÇÃO
                        transacoesAtual[transacaoIndex].status = 'approved';
                        transacoesAtual[transacaoIndex].processado = true;
                        transacoesAtual[transacaoIndex].dataProcessamento = Date.now();
                        transacoesAtual[transacaoIndex].dataAprovacao = new Date().toISOString();
                        transacoesAtual[transacaoIndex].valorAprovado = check.transaction_amount;

                        // ATUALIZAR CARTEIRA (com controle de concorrência)
                        await atualizarCarteira(transacao, check.transaction_amount);
                        
                        // Salvar transações atualizadas
                        fs.writeFileSync(transacoesPath, JSON.stringify(transacoesAtual, null, 2));
                        
                        transacoesProcessadas.push(transacao.paymentId);
                        processadoComSucesso = true;
                        
                        resultados.push({
                            paymentId: transacao.paymentId,
                            status: 'approved',
                            mensagem: 'Pagamento aprovado e processado',
                            tipo: transacao.tipo,
                            valor: check.transaction_amount
                        });

                        console.log(`✅ Transação ${transacao.paymentId} APROVADA e processada`);

                    } else if (check.status === 'rejected' || check.status === 'cancelled') {
                        // Marcar como rejeitada
                        transacoesAtual[transacaoIndex].status = check.status;
                        transacoesAtual[transacaoIndex].processado = true;
                        transacoesAtual[transacaoIndex].dataProcessamento = Date.now();
                        
                        fs.writeFileSync(transacoesPath, JSON.stringify(transacoesAtual, null, 2));
                        
                        resultados.push({
                            paymentId: transacao.paymentId,
                            status: check.status,
                            mensagem: `Pagamento ${check.status === 'rejected' ? 'recusado' : 'cancelado'}`
                        });

                        console.log(`❌ Transação ${transacao.paymentId} ${check.status.toUpperCase()}`);
                    }
                } else {
                    // Ainda pendente
                    resultados.push({
                        paymentId: transacao.paymentId,
                        status: 'pending',
                        mensagem: 'Aguardando pagamento'
                    });
                    
                    console.log(`⏳ Transação ${transacao.paymentId} ainda pendente`);
                }

            } catch (errorTransacao) {
                console.error(`❌ Erro na transação ${transacao.paymentId}:`, errorTransacao.message);
                
                // Adicionar à lista de bloqueados temporariamente
                processamentoControle.bloqueados.add(transacao.paymentId);
                
                resultados.push({
                    paymentId: transacao.paymentId,
                    status: 'error',
                    mensagem: `Erro: ${errorTransacao.message}`
                });
            } finally {
                // Limpar processamento ativo se não foi processado com sucesso
                if (!processadoComSucesso) {
                    processamentoControle.ativos.delete(transacao.paymentId);
                } else {
                    // Manter no controle por mais 5 minutos para evitar reprocessamento
                    setTimeout(() => {
                        processamentoControle.ativos.delete(transacao.paymentId);
                    }, 5 * 60 * 1000);
                }
            }
        }

        if (transacoesProcessadas.length > 0) {
            console.log(`💰 Processadas ${transacoesProcessadas.length} transações: ${transacoesProcessadas.join(', ')}`);
        }

        // Limpar bloqueios antigos (mais de 1 hora)
        const agora = Date.now();
        const bloqueadosArray = Array.from(processamentoControle.bloqueados);
        for (const blocked of bloqueadosArray) {
            // Se foi adicionado há mais de 1 hora, remover
            // Nota: você pode querer adicionar timestamp ao Set
        }

        console.log(`✅ [${numeroUsuario || 'ALL'}] Verificação concluída. ${resultados.length} resultados.`);
        return resultados;

    } catch (error) {
        console.error('❌ Erro geral ao verificar transações pendentes:', error.message);
        return [];
    }
}

// Função para atualizar carteira com controle de concorrência
async function atualizarCarteira(transacao, valorAprovado) {
    const carteiraPath = path.join(__dirname, 'carteira.json');
    const lockFile = `${carteiraPath}.lock`;
    
    let tentativas = 0;
    const maxTentativas = 3;
    
    while (tentativas < maxTentativas) {
        try {
            // Verificar se há lock file
            if (fs.existsSync(lockFile)) {
                const lockTime = fs.statSync(lockFile).mtimeMs;
                if (Date.now() - lockTime < 10000) { // Lock de 10 segundos
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    tentativas++;
                    continue;
                } else {
                    // Lock antigo, remover
                    fs.unlinkSync(lockFile);
                }
            }
            
            // Criar lock file
            fs.writeFileSync(lockFile, JSON.stringify({
                paymentId: transacao.paymentId,
                timestamp: Date.now(),
                processo: 'atualizarCarteira'
            }));
            
            // Ler carteira atual
            let carteiras = [];
            if (fs.existsSync(carteiraPath)) {
                carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
            }
            
            // Verificar se este pagamento já foi processado
            const carteiraUsuario = carteiras.find(c => c.numero === transacao.numero);
            if (carteiraUsuario && carteiraUsuario.historico) {
                const jaProcessado = carteiraUsuario.historico.some(
                    h => h.paymentId === transacao.paymentId && h.tipo === transacao.tipo
                );
                
                if (jaProcessado) {
                    console.log(`⚠️ Pagamento ${transacao.paymentId} já foi processado na carteira anteriormente`);
                    fs.unlinkSync(lockFile);
                    return false;
                }
            }
            
            // Encontrar ou criar carteira
            let usuarioCarteira = carteiraUsuario;
            if (!usuarioCarteira) {
                usuarioCarteira = {
                    numero: transacao.numero,
                    saldo: 0,
                    plano: null,
                    dataExpiracao: null,
                    sessoesAtivas: 0,
                    dataCadastro: new Date().toISOString(),
                    ultimaAtualizacao: Date.now(),
                    historico: []
                };
                carteiras.push(usuarioCarteira);
            }
            
            // Adicionar saldo
            const valor = valorAprovado || transacao.valor;
            usuarioCarteira.saldo += valor;
            usuarioCarteira.ultimaAtualizacao = Date.now();
            
            // Adicionar ao histórico
            usuarioCarteira.historico.push({
                tipo: transacao.tipo,
                valor: valor,
                paymentId: transacao.paymentId,
                data: new Date().toISOString(),
                dataProcessamento: Date.now()
            });
            
            // Salvar carteira
            fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
            
            console.log(`💰 ${transacao.tipo === 'deposito' ? 'Depósito' : 'Plano'} de R$ ${valor} processado para ${transacao.numero}. Saldo atual: R$ ${usuarioCarteira.saldo}`);
            
            // Remover lock file
            fs.unlinkSync(lockFile);
            
            return true;
            
        } catch (error) {
            tentativas++;
            console.error(`❌ Tentativa ${tentativas}/${maxTentativas} erro ao atualizar carteira:`, error.message);
            
            if (tentativas >= maxTentativas) {
                throw error;
            }
            
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    
    return false;
}

// REMOVA A FUNÇÃO verificarUmaTransacao para evitar duplicidade
// Ou mantenha apenas como wrapper para verificarTransacoesPendentes
async function verificarUmaTransacao(paymentId) {
    // Esta função agora só verifica uma transação específica
    try {
        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        
        if (!fs.existsSync(transacoesPath)) {
            return { status: 'error', mensagem: 'Arquivo de transações não encontrado' };
        }
        
        const transacoesData = fs.readFileSync(transacoesPath, 'utf8');
        const todasTransacoes = JSON.parse(transacoesData || '[]');
        
        const transacao = todasTransacoes.find(t => t.paymentId === paymentId);
        if (!transacao) {
            return { status: 'error', mensagem: 'Transação não encontrada' };
        }
        
        // Usar a lógica principal com filtro por usuário específico
        const resultados = await verificarTransacoesPendentes(transacao.numero);
        
        const resultadoTransacao = resultados.find(r => r.paymentId === paymentId);
        return resultadoTransacao || { status: 'pending', mensagem: 'Transação ainda pendente' };
        
    } catch (error) {
        console.error(`❌ Erro ao verificar transação ${paymentId}:`, error.message);
        return { status: 'error', mensagem: error.message };
    }
}

// Configurar intervalo de verificação (exemplo: a cada 2 minutos)


// Função para processar depósito aprovado

// Função para processar plano aprovado
async function processarPlano(transacao) {
    try {
        const carteiraPath = path.join(__dirname, 'carteira.json');
        
        // Definir duração do plano
        const duracoes = {
            '2dias': 2,
            'semanal': 7,
            '14dias': 14,
            'mensal': 30,
            '3meses': 90,
            '5meses': 150,
            '1ano': 365
        };

        const dataExpiracao = new Date();
        dataExpiracao.setDate(dataExpiracao.getDate() + (duracoes[transacao.plano] || 30));

        // Definir número de sessões permitidas
        const sessoes = {
            '2dias': 1,
            'semanal': 1,
            '14dias': 2,
            'mensal': 3,
            '3meses': 5,
            '5meses': 8,
            '1ano': 999 // Ilimitado
        };

        // Carregar carteiras
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }
        
        // Encontrar ou criar carteira do usuário
        let carteiraUsuario = carteiras.find(c => c.numero === transacao.numero);
        if (!carteiraUsuario) {
            carteiraUsuario = {
                numero: transacao.numero,
                saldo: 0,
                plano: null,
                dataExpiracao: null,
                sessoesAtivas: 0,
                dataCadastro: new Date().toISOString()
            };
            carteiras.push(carteiraUsuario);
        }
        
        // Ativar plano
        carteiraUsuario.plano = transacao.plano;
        carteiraUsuario.dataExpiracao = dataExpiracao.toISOString();
        carteiraUsuario.sessoesAtivas = sessoes[transacao.plano] || 1;
        
        // Salvar carteiras atualizadas
        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
        
        console.log(`📅 Plano ${transacao.plano} ativado para ${transacao.numero}`);
        
    } catch (error) {
        console.error('❌ Erro ao processar plano:', error.message);
        throw error;
    }
}

// Estrutura do arquivo carteira.json


// Rota para verificar transações pendentes do usuário atual
// Rota para obter transações pendentes do usuário
app.get('/api/carteira/pendentes', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = [];
        
        if (fs.existsSync(transacoesPath)) {
            transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        }

        // Filtrar transações pendentes do usuário
        const transacoesPendentes = transacoes
            .filter(t => t.numero === user.numero && t.status === 'pending')
            .sort((a, b) => new Date(b.data) - new Date(a.data));

        res.json({
            success: true,
            transacoesPendentes: transacoesPendentes,
            totalPendentes: transacoesPendentes.length
        });
        
    } catch (error) {
        console.error('Erro ao obter transações pendentes:', error);
        res.status(500).json({ error: 'Erro interno' });
    }
});
app.get('/api/carteira/verificar-pendentes', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // 🔒 SISTEMA DE BLOQUEIO POR USUÁRIO
        const bloqueioChave = `verificacao_${user.numero}`;
        
        // Verificar se já está em processamento
        if (global.verificacaoEmAndamento && global.verificacaoEmAndamento[bloqueioChave]) {
            return res.status(429).json({ 
                success: false, 
                error: 'Verificação já em andamento para este usuário. Aguarde alguns segundos.' 
            });
        }

        // Inicializar objeto de bloqueio se não existir
        if (!global.verificacaoEmAndamento) {
            global.verificacaoEmAndamento = {};
        }

        try {
            // Marcar como em processamento
            global.verificacaoEmAndamento[bloqueioChave] = {
                inicio: Date.now(),
                usuario: user.numero
            };

            console.log(`🔍 API: Verificando transações pendentes para ${user.numero}...`);
            
            // Verificar transações pendentes
            const resultados = await verificarTransacoesPendentes(user.numero);
            
            // Contar transações aprovadas
            const aprovadas = resultados.filter(r => r?.status === 'approved');
            const pendentes = resultados.filter(r => r?.status === 'pending');
            
            console.log(`📊 API: Resultados para ${user.numero} - ${aprovadas.length} aprovadas, ${pendentes.length} pendentes`);
            
            res.json({
                success: true,
                transacoesVerificadas: resultados.length,
                aprovadas: aprovadas.length,
                pendentes: pendentes.length,
                resultados: resultados,
                mensagem: resultados.length > 0 
                    ? `Verificadas ${resultados.length} transações (${aprovadas.length} aprovadas)` 
                    : 'Nenhuma transação pendente encontrada'
            });
            
        } finally {
            // 🔓 SEMPRE remover o bloqueio, mesmo em caso de erro
            delete global.verificacaoEmAndamento[bloqueioChave];
            console.log(`🔓 API: Bloqueio removido para ${user.numero}`);
        }
        
    } catch (error) {
        console.error('❌ API: Erro ao verificar transações pendentes:', error);
        
        // Garantir que o bloqueio seja removido em caso de erro
        if (user && user.numero) {
            const bloqueioChave = `verificacao_${user.numero}`;
            if (global.verificacaoEmAndamento && global.verificacaoEmAndamento[bloqueioChave]) {
                delete global.verificacaoEmAndamento[bloqueioChave];
            }
        }
        
        res.status(500).json({ 
            success: false, 
            error: 'Erro interno ao verificar transações pendentes' 
        });
    }
});
// Rota para obter saldo do usuário
// Rota para obter saldo do usuário
app.get('/api/carteira/saldo', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        const carteiraUsuario = carteiras.find(c => c.numero === user.numero) || {
            numero: user.numero,
            saldo: 0,
            plano: null,
            dataExpiracao: null,
            sessoesAtivas: 0,
            sessoesRestantes: 0
        };

        // APLICAR LIMITE MÁXIMO DE 5 SESSÕES
        if (carteiraUsuario.sessoesRestantes > 5) {
            carteiraUsuario.sessoesRestantes = 5;
        }
        
        if (carteiraUsuario.sessoesAtivas > 5) {
            carteiraUsuario.sessoesAtivas = 5;
        }

        // Verificar se o plano expirou
        let tempoRestante = null;
        let planoAtivo = false;
        
        if (carteiraUsuario.plano && carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            const agora = new Date();
            
            if (dataExpiracao < agora) {
                // Plano expirado - APLICAR LIMITES
                carteiraUsuario.sessoesRestantes = 0;
                carteiraUsuario.sessoesAtivas = 0;
                // Não remover o plano para histórico
            } else {
                planoAtivo = true;
                // Calcular tempo restante
                const diferencaMs = dataExpiracao - agora;
                
                // Converter para dias, horas, minutos, segundos
                const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);
                
                // Formatar tempo restante
                if (dias > 0) {
                    tempoRestante = `${dias} dia${dias > 1 ? 's' : ''}`;
                    if (horas > 0) {
                        tempoRestante += `, ${horas} hora${horas > 1 ? 's' : ''}`;
                    }
                } else if (horas > 0) {
                    tempoRestante = `${horas} hora${horas > 1 ? 's' : ''}`;
                    if (minutos > 0) {
                        tempoRestante += `, ${minutos} minuto${minutos > 1 ? 's' : ''}`;
                    }
                } else if (minutos > 0) {
                    tempoRestante = `${minutos} minuto${minutos > 1 ? 's' : ''}`;
                } else {
                    tempoRestante = `${segundos} segundo${segundos > 1 ? 's' : ''}`;
                }
                
                // Adicionar formato ISO para fácil processamento no frontend
                const tempoRestanteISO = {
                    dias: dias,
                    horas: horas,
                    minutos: minutos,
                    segundos: segundos,
                    totalSegundos: Math.floor(diferencaMs / 1000),
                    expirado: false
                };
                
                // Salvar alterações após aplicar limites
                const index = carteiras.findIndex(c => c.numero === user.numero);
                if (index !== -1) {
                    carteiras[index] = carteiraUsuario;
                    fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
                }

                res.json({
                    success: true,
                    saldo: carteiraUsuario.saldo,
                    planoAtual: carteiraUsuario.plano,
                    sessoesAtivas: carteiraUsuario.sessoesAtivas,
                    sessoesRestantes: carteiraUsuario.sessoesRestantes,
                    dataExpiracao: carteiraUsuario.dataExpiracao,
                    tempoRestante: tempoRestante,
                    tempoRestanteDetalhado: tempoRestanteISO,
                    planoExpirado: false,
                    planoAtivo: true
                });
                return;
            }
        }

        // Se não há plano ativo ou está expirado
        // Salvar alterações após aplicar limites
        const index = carteiras.findIndex(c => c.numero === user.numero);
        if (index !== -1) {
            carteiras[index] = carteiraUsuario;
        } else {
            carteiras.push(carteiraUsuario);
        }
        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));

        res.json({
            success: true,
            saldo: carteiraUsuario.saldo,
            planoAtual: carteiraUsuario.plano,
            sessoesAtivas: carteiraUsuario.sessoesAtivas,
            sessoesRestantes: carteiraUsuario.sessoesRestantes,
            dataExpiracao: carteiraUsuario.dataExpiracao,
            tempoRestante: null,
            tempoRestanteDetalhado: null,
            planoExpirado: true,
            planoAtivo: false
        });
    } catch (error) {
        console.error('Erro ao obter saldo:', error);
        res.status(500).json({ error: 'Erro interno' });
    }
});

// Rota para obter transações
app.get('/api/carteira/transacoes', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = [];
        
        if (fs.existsSync(transacoesPath)) {
            transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        }

        // Filtrar transações do usuário (últimas 10)
        const transacoesUsuario = transacoes
            .filter(t => t.numero === user.numero)
            .sort((a, b) => new Date(b.data) - new Date(a.data))
            .slice(0, 10);

        res.json({
            success: true,
            transacoes: transacoesUsuario
        });
    } catch (error) {
        console.error('Erro ao obter transações:', error);
        res.status(500).json({ error: 'Erro interno' });
    }
});

// Rota para criar depósito
app.post('/api/carteira/deposito', async (req, res) => {
    try {
        const { valor } = req.body;
        const user = req.session.user;

        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        if (!valor || valor < 5) {
            return res.status(400).json({ error: 'Valor mínimo: R$ 5,00' });
        }

        // Usar o mesmo sistema PIX dos Golds
        const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
        const inf = await pagament.create_payment(valor);

        // Salvar transação pendente
        const transacao = {
            id: Date.now().toString(),
            numero: user.numero,
            valor: valor,
            tipo: 'deposito',
            descricao: `Depósito de R$ ${valor.toFixed(2)}`,
            status: 'pending',
            paymentId: inf.payment_id,
            data: new Date().toISOString()
        };

        // Salvar transação
        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = [];
        if (fs.existsSync(transacoesPath)) {
            transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        }
        transacoes.push(transacao);
        fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));

        res.json({
            success: true,
            qrCode: inf.qr_code,
            copyPaste: inf.copy_paste,
            transactionId: transacao.id
        });
    } catch (error) {
        console.error('Erro ao criar depósito:', error);
        res.status(500).json({ error: 'Erro ao criar depósito' });
    }
});

// Rota para verificar pagamento de depósito
app.get('/api/carteira/verificar-pagamento/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        const transacao = transacoes.find(t => t.id === transactionId);

        if (!transacao) {
            return res.status(404).json({ error: 'Transação não encontrada' });
        }

        // Verificar pagamento
        const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
        const check = await buscarPagamentoMP2(transacao.paymentId);

        if (check.status === 'approved' && transacao.status === 'pending') {
            // Atualizar status
            transacao.status = 'approved';
            transacao.dataAprovacao = new Date().toISOString();

            // Adicionar saldo à carteira
            let carteiras = [];
            if (fs.existsSync(carteiraPath)) {
                carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
            }

            let carteiraUsuario = carteiras.find(c => c.numero === transacao.numero);
            if (!carteiraUsuario) {
                carteiraUsuario = {
                    numero: transacao.numero,
                    saldo: 0,
                    plano: null,
                    dataExpiracao: null,
                    sessoesAtivas: 0
                };
                carteiras.push(carteiraUsuario);
            }

            carteiraUsuario.saldo += transacao.valor;
            fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
        }

        // Salvar transações atualizadas
        fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));

        res.json({
            success: true,
            status: transacao.status
        });
    } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
        res.status(500).json({ error: 'Erro ao verificar pagamento' });
    }
});

// Rota para comprar plano com saldo
app.post('/api/planos/comprar-com-saldo', async (req, res) => {
    try {
        const { tipo, valor } = req.body;
        const user = req.session.user;

        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Carregar carteira
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        let carteiraUsuario = carteiras.find(c => c.numero === user.numero);
        if (!carteiraUsuario) {
            return res.status(400).json({ error: 'Carteira não encontrada' });
        }

        // Verificar saldo
        if (carteiraUsuario.saldo < valor) {
            return res.status(400).json({ error: 'Saldo insuficiente' });
        }

        // Definir duração do plano em DIAS
        const duracoes = {
            '2dias': 2,
            'semanal': 7,
            '14dias': 14,
            'mensal': 30,
            '3meses': 90,
            '5meses': 150,
            '1ano': 365
        };

        // Definir número de sessões permitidas
        const sessoesPlano = {
            '2dias': 1,
            'semanal': 1,
            '14dias': 1,
            'mensal': 1,
            '3meses': 1,
            '5meses': 1,
            '1ano': 1 // Quase ilimitado
        };

        // Calcular nova data de expiração
        const duracaoDias = duracoes[tipo] || 30;
        const sessoesPermitidas = sessoesPlano[tipo] || 1;
        
        let dataExpiracao;
        
        // Se o usuário já tem um plano ativo, SOMAR o tempo
        if (carteiraUsuario.plano && carteiraUsuario.dataExpiracao) {
            const dataAtualExpiracao = new Date(carteiraUsuario.dataExpiracao);
            const agora = new Date();
            
            // Se o plano ainda não expirou, somar ao tempo existente
            if (dataAtualExpiracao > agora) {
                dataExpiracao = new Date(dataAtualExpiracao);
                dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
            } else {
                // Se expirou, começar do zero
                dataExpiracao = new Date();
                dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
            }
        } else {
            // Primeiro plano do usuário
            dataExpiracao = new Date();
            dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
        }

        // Atualizar sessões disponíveis
        // Para o plano de 1 ano, adiciona 99 sessões (quase ilimitado)
        // Para outros planos, soma as sessões do novo plano às existentes
        let novasSessoesDisponiveis;
        
    
            // Para outros planos, somar sessões
            // Se já tem sessões ativas, soma o novo valor
            // Se não tem ou expirou, começa com o valor do novo plano
            if (carteiraUsuario.sessoesRestantes && carteiraUsuario.sessoesRestantes > 0) {
                novasSessoesDisponiveis = carteiraUsuario.sessoesRestantes + sessoesPermitidas;
            } else {
                novasSessoesDisponiveis = sessoesPermitidas;
            }
            
            // Limitar a um máximo razoável
            if (novasSessoesDisponiveis > 3) {
                novasSessoesDisponiveis = 3
            }
        

        // Atualizar carteira
        carteiraUsuario.saldo -= valor;
        carteiraUsuario.plano = tipo;
        carteiraUsuario.dataExpiracao = dataExpiracao.toISOString();
        carteiraUsuario.sessoesRestantes = novasSessoesDisponiveis;
        
        // Se o usuário não tem sessões ativas, define como 0
        if (!carteiraUsuario.sessoesAtivas) {
            carteiraUsuario.sessoesAtivas = 0;
        }

        // Registrar transação
        const transacao = {
            id: Date.now().toString(),
            numero: user.numero,
            valor: valor,
            tipo: 'plano',
            descricao: `Plano ${tipo} - R$ ${valor.toFixed(2)}`,
            status: 'approved',
            data: new Date().toISOString(),
            duracaoDias: duracaoDias,
            sessoesAdicionadas: sessoesPermitidas,
            dataExpiracao: dataExpiracao.toISOString()
        };

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = [];
        if (fs.existsSync(transacoesPath)) {
            transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        }
        transacoes.push(transacao);

        // Salvar tudo
        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
        fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));

        res.json({
            success: true,
            message: 'Plano ativado com sucesso!',
            plano: tipo,
            dataExpiracao: carteiraUsuario.dataExpiracao,
            sessoesRestantes: carteiraUsuario.sessoesRestantes,
            sessoesAdicionadas: sessoesPermitidas,
            duracaoAdicionada: duracaoDias
        });
    } catch (error) {
        console.error('Erro ao comprar plano:', error);
        res.status(500).json({ error: 'Erro ao comprar plano' });
    }
});

// Rota para gerar PIX para plano
app.post('/api/planos/gerar-pix', async (req, res) => {
    try {
        const { tipo, valor } = req.body;
        const user = req.session.user;

        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Gerar PIX
        const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
        const inf = await pagament.create_payment(valor);

        // Salvar transação
        const transacao = {
            id: Date.now().toString(),
            numero: user.numero,
            valor: valor,
            tipo: 'plano',
            descricao: `Plano ${tipo} - R$ ${valor.toFixed(2)}`,
            status: 'pending',
            paymentId: inf.payment_id,
            plano: tipo,
            data: new Date().toISOString()
        };

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = [];
        if (fs.existsSync(transacoesPath)) {
            transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        }
        transacoes.push(transacao);
        fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));

        res.json({
            success: true,
            qrCode: inf.qr_code,
            copyPaste: inf.copy_paste,
            transactionId: transacao.id
        });
    } catch (error) {
        console.error('Erro ao gerar PIX:', error);
        res.status(500).json({ error: 'Erro ao gerar PIX' });
    }
});

// Rota para verificar pagamento de plano
// Rota para verificar pagamento de plano
app.get('/api/planos/verificar-pagamento/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;

        const transacoesPath = path.join(__dirname, 'transacoes-carteira.json');
        let transacoes = JSON.parse(fs.readFileSync(transacoesPath, 'utf8') || '[]');
        const transacao = transacoes.find(t => t.id === transactionId);

        if (!transacao) {
            return res.status(404).json({ error: 'Transação não encontrada' });
        }

        // Verificar pagamento
        const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
        const check = await buscarPagamentoMP2(transacao.paymentId);

        if (check.status === 'approved' && transacao.status === 'pending') {
            // Atualizar status
            transacao.status = 'approved';
            transacao.dataAprovacao = new Date().toISOString();

            // Definir duração do plano em DIAS
            const duracoes = {
                '2dias': 2,
                'semanal': 7,
                '14dias': 14,
                'mensal': 30,
                '3meses': 90,
                '5meses': 150,
                '1ano': 365
            };

            // Definir número de sessões permitidas
            const sessoesPlano = {
                '2dias': 1,
                'semanal': 1,
                '14dias': 1,
                'mensal': 1,
                '3meses': 1,
                '5meses': 1,
                '1ano': 1 // Quase ilimitado
            };

            const duracaoDias = duracoes[transacao.plano] || 30;
            const sessoesPermitidas = sessoesPlano[transacao.plano] || 1;

            // Atualizar carteira
            let carteiras = [];
            if (fs.existsSync(carteiraPath)) {
                carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
            }

            let carteiraUsuario = carteiras.find(c => c.numero === transacao.numero);
            
            // Se não existe carteira, criar
            if (!carteiraUsuario) {
                carteiraUsuario = {
                    numero: transacao.numero,
                    saldo: 0,
                    plano: null,
                    dataExpiracao: null,
                    sessoesAtivas: 0,
                    sessoesRestantes: 0
                };
                carteiras.push(carteiraUsuario);
            }

            // Calcular nova data de expiração - MESMA LÓGICA DA COMPRA COM SALDO
            let dataExpiracao;
            
            // Se o usuário já tem um plano ativo, SOMAR o tempo
            if (carteiraUsuario.plano && carteiraUsuario.dataExpiracao) {
                const dataAtualExpiracao = new Date(carteiraUsuario.dataExpiracao);
                const agora = new Date();
                
                // Se o plano ainda não expirou, somar ao tempo existente
                if (dataAtualExpiracao > agora) {
                    dataExpiracao = new Date(dataAtualExpiracao);
                    dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
                } else {
                    // Se expirou, começar do zero
                    dataExpiracao = new Date();
                    dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
                }
            } else {
                // Primeiro plano do usuário
                dataExpiracao = new Date();
                dataExpiracao.setDate(dataExpiracao.getDate() + duracaoDias);
            }

            // Atualizar sessões disponíveis - MESMA LÓGICA DA COMPRA COM SALDO
            let novasSessoesDisponiveis;
            
            // Para todos os planos, somar sessões
            // Se já tem sessões ativas, soma o novo valor
            // Se não tem ou expirou, começa com o valor do novo plano
            if (carteiraUsuario.sessoesRestantes && carteiraUsuario.sessoesRestantes > 0) {
                novasSessoesDisponiveis = carteiraUsuario.sessoesRestantes + sessoesPermitidas;
            } else {
                novasSessoesDisponiveis = sessoesPermitidas;
            }
            
            // Limitar a um máximo razoável (exceto para 1 ano)
            if (novasSessoesDisponiveis > 3) {
                novasSessoesDisponiveis = 3
            }
            
            // Para plano de 1 ano, definir como 99 (quase ilimitado)
          

            // Atualizar carteira
            carteiraUsuario.plano = transacao.plano;
            carteiraUsuario.dataExpiracao = dataExpiracao.toISOString();
            carteiraUsuario.sessoesRestantes = novasSessoesDisponiveis;
            
            // Se o usuário não tem sessões ativas, define como 0
            if (!carteiraUsuario.sessoesAtivas) {
                carteiraUsuario.sessoesAtivas = 0;
            }

            // Atualizar transação com informações detalhadas
            transacao.duracaoAdicionada = duracaoDias;
            transacao.sessoesAdicionadas = sessoesPermitidas;
            transacao.dataExpiracaoAtualizada = dataExpiracao.toISOString();
            transacao.sessoesRestantesAtualizadas = novasSessoesDisponiveis;

            // Salvar carteira atualizada
            fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
            
            console.log(`Plano ${transacao.plano} ativado via PIX para ${transacao.numero}`);
            console.log(`- Duração: ${duracaoDias} dias`);
            console.log(`- Sessões: +${sessoesPermitidas} (total: ${novasSessoesDisponiveis})`);
            console.log(`- Expira em: ${dataExpiracao.toLocaleDateString('pt-BR')}`);
        }

        // Salvar transações atualizadas
        fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));

        res.json({
            success: true,
            status: transacao.status,
            plano: transacao.plano,
            dataExpiracao: transacao.dataExpiracaoAtualizada || null,
            sessoesRestantes: transacao.sessoesRestantesAtualizadas || 0,
            duracaoAdicionada: transacao.duracaoAdicionada || 0,
            sessoesAdicionadas: transacao.sessoesAdicionadas || 0,
            message: transacao.status === 'approved' ? 'Plano ativado com sucesso!' : 'Aguardando pagamento'
        });
    } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
        res.status(500).json({ error: 'Erro ao verificar pagamento' });
    }
})




// Função para processar depósito aprovado


// Middleware para verificar se usuário tem plano ativo
async function verificarPlanoAtivo(req, res, next) {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Carregar carteira
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        const carteiraUsuario = carteiras.find(c => c.numero === user.numero);
        
        // Se não tem carteira ou plano, NÃO PERMITE ACESSO
        if (!carteiraUsuario || !carteiraUsuario.plano) {
            return res.status(403).json({ 
                error: 'Plano necessário',
                message: 'Você precisa adquirir um plano para acessar esta área.'
            });
        }

        // Verificar se o plano expirou
        if (carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            if (dataExpiracao < new Date()) {
                return res.status(403).json({ 
                    error: 'Plano expirado',
                    message: 'Seu plano expirou. Renove para continuar usando.',
                    plano: carteiraUsuario.plano,
                    expiradoEm: carteiraUsuario.dataExpiracao
                });
            }
        }

        // Mapear limites de sessões por plano (USANDO SUA ESTRUTURA)
        const limitesPorPlano = {
            '2dias': 1,
            'semanal': 1,
            '14dias': 1,
            'mensal': 1,
            '3meses': 1,
            '5meses': 2,
            '1ano': 3 // ou "ilimitado" dependendo da sua definição
        };

        // Obter limite do plano atual
        const limitePlano = limitesPorPlano[carteiraUsuario.plano] || 1;
        
        // Usar limite personalizado se existir, senão usar o do plano
        const limiteSessoes = carteiraUsuario.sessoesAtivas || limitePlano;

        // Verificar limite de sessões (EXCETO se for '1ano' e sessoesAtivas for 3 = ilimitado)
        
            try {
                // Obter sessões atuais
                const numeros = await pegarNumeros() || [];
                
                // Contar sessões deste usuário
                const sessoesUsuario = numeros.filter(n => {
                    // Normalizar números para comparação
                    const userNum = user.numero.replace(/\D/g, "");
                    const sessaoNum = n.replace(/\D/g, "");
                    
                    // Verificar se é a mesma sessão ou contém parte do número
                    return sessaoNum === userNum || 
                           sessaoNum.includes(userNum) || 
                           userNum.includes(sessaoNum);
                }).length;

                // Verificar se excedeu o limite
                if (carteiraUsuario.sessoesRestantes === 0) {
                    return res.status(403).json({ 
                        error: 'Limite de sessões atingido',
                        message: `Você atingiu o limite de ${limiteSessoes} sessão(ões) ativas permitidas pelo seu plano ${carteiraUsuario.plano}.`,
                        sessoesAtuais: sessoesUsuario,
                        limite: limiteSessoes,
                        plano: carteiraUsuario.plano,
                        precisaUpgrade: true
                    });
                }
                
            } catch (error) {
                console.error('Erro ao verificar sessões do usuário:', error);
                // Em caso de erro, continuar sem verificação
                console.warn('Continuando sem verificação de limite de sessões');
            }
        

        // Se chegou aqui, plano está válido e dentro dos limites
        req.carteiraUsuario = carteiraUsuario; // Disponibilizar para outras rotas
        next();
        
    } catch (error) {
        console.error('Erro ao verificar plano:', error);
        res.status(500).json({ 
            error: 'Erro interno',
            message: 'Não foi possível verificar o status do seu plano.'
        });
    }
}
// Proteger rota de criar sessão
app.post('/api/sessoes/nova', verificarPlanoAtivo, async (req, res) => {
    try {
        const { numero } = req.body;
        const user = req.session.user;

        if (!numero) {
            return res.status(400).json({
                success: false,
                message: 'Número é obrigatório'
            });
        }
                // Verificar se plano está expirado
        const verificacaoPlano = await verificarPlanoAntesCriarSessao(user.numero);
        if (verificacaoPlano.expirado) {
            return res.status(403).json({
                success: false,
                message: verificacaoPlano.mensagem,
                planoExpirado: true
            });
        }

        // 🔢 Normalizar número
        const numeroLimpo = numero.replace(/\D/g, '');
        if (numeroLimpo.length < 10) {
            return res.status(400).json({
                success: false,
                message: 'Número inválido'
            });
        }

        // 📁 Arquivos
        const carteiraPath = path.join(__dirname, 'carteira.json');

        // 🔍 Verificar sessões existentes
        const numerosExistentes = await pegarNumeros() || [];
        const jaExiste = numerosExistentes.some(n => {
            const nLimpo = n.replace(/\D/g, '');
            return nLimpo === numeroLimpo;
        });

        if (jaExiste) {
            return res.status(400).json({
                success: false,
                message: 'Você já possui uma sessão com esse número.'
            });
        }

        // 💼 Carregar carteira
        if (!fs.existsSync(carteiraPath)) {
            return res.status(400).json({
                success: false,
                message: 'Carteira não encontrada.'
            });
        }

        const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        const carteiraIndex = carteiras.findIndex(c => c.numero === user.numero);

        if (carteiraIndex === -1) {
            return res.status(400).json({
                success: false,
                message: 'Carteira não encontrada.'
            });
        }

        const carteiraUsuario = carteiras[carteiraIndex];

        // 📊 Limites por plano
        const limitesPorPlano = {
            '2dias': 1,
            'semanal': 1,
            '14dias': 1,
            'mensal': 1,
            '3meses': 1,
            '5meses': 2,
            '1ano': 3
        };

        const limitePlano = limitesPorPlano[carteiraUsuario.plano] || 1;

        // 🧮 Inicializar contador
        if (typeof carteiraUsuario.sessoesRestantes !== 'number') {
            carteiraUsuario.sessoesRestantes = 0;
        }

        // 🚫 Bloqueio por limite
        if (carteiraUsuario.sessoesRestantes === 0) {
            return res.status(403).json({
                success: false,
                message: `Limite de sessões atingido (${limitePlano}).`,
                sessoesUsadas: carteiraUsuario.sessoesUsadas,
                limite: limitePlano,
                precisaUpgrade: true
            });
        }

        // 🚀 Criar sessão
        const resultado = await criarNovaSessao(numeroLimpo);

        if (!resultado?.success) {
            return res.status(500).json({
                success: false,
                message: resultado?.message || 'Erro ao criar sessão'
            });
        }

        // ➖ Consumir sessão
        carteiraUsuario.sessoesUsadas += 1;
        carteiraUsuario.sessoesRestantes -= 1

        carteiras[carteiraIndex] = carteiraUsuario;
        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));

        // 🧾 Histórico
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        let historico = [];

        if (fs.existsSync(historicoPath)) {
            historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        }

        historico.push({
            usuario: user.numero,
            numeroSessao: numeroLimpo,
            tipo: 'criacao',
            data: new Date().toISOString(),
            plano: carteiraUsuario.plano,
            sessoesUsadas: carteiraUsuario.sessoesUsadas,
            limite: limitePlano
        });

        fs.writeFileSync(historicoPath, JSON.stringify(historico, null, 2));

        // ✅ Resposta final
        return res.json({
            success: true,
            message: resultado.message,
            session: resultado.session,
            redirect: `/conectar#${resultado.session}`,
            plano: {
                nome: carteiraUsuario.plano,
                sessoesUsadas: carteiraUsuario.sessoesUsadas,
                limite: limitePlano,
                sessoesRestantes: carteiraUsuario.sessoesRestantes
            }
        });

    } catch (error) {
        console.error('❌ Erro ao criar sessão:', error);
        return res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Adicione esta função para limpar sessões de planos expirados

// Adicione esta função para verificar plano expirado antes de criar nova sessão
async function verificarPlanoAntesCriarSessao(userNumero) {
    try {
        const carteiraPath = path.join(__dirname, 'carteira.json');
        
        if (!fs.existsSync(carteiraPath)) {
            return { expirado: true, mensagem: 'Carteira não encontrada' };
        }
        
        const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        const carteiraUsuario = carteiras.find(c => c.numero === userNumero);
        
        if (!carteiraUsuario) {
            return { expirado: true, mensagem: 'Carteira não encontrada' };
        }
        
        // Verificar se o plano expirou
        if (carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            const agora = new Date();
            
            if (dataExpiracao < agora) {
                return { 
                    expirado: true, 
                    mensagem: 'Plano expirado. Renove para criar novas sessões.',
                    dataExpiracao: carteiraUsuario.dataExpiracao
                };
            }
        }
        
        return { expirado: false };
        
    } catch (error) {
        console.error('Erro ao verificar plano:', error);
        return { expirado: true, mensagem: 'Erro ao verificar plano' };
    }
}

// ATUALIZE a função verificarPlanoAtivo para incluir verificação de expiração
async function verificarPlanoAtivo(req, res, next) {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Carregar carteira
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        const carteiraUsuario = carteiras.find(c => c.numero === user.numero);
        
        // Se não tem carteira ou plano, NÃO PERMITE ACESSO
        if (!carteiraUsuario || !carteiraUsuario.plano) {
            return res.status(403).json({ 
                error: 'Plano necessário',
                message: 'Você precisa adquirir um plano para acessar esta área.'
            });
        }

        // Verificar se o plano expirou
        if (carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            if (dataExpiracao < new Date()) {
                // CHAMAR LIMPEZA AUTOMÁTICA PARA ESTE USUÁRIO
                await limparSessoesUsuarioExpirado(user.numero, carteiraUsuario);
                
                return res.status(403).json({ 
                    error: 'Plano expirado',
                    message: 'Seu plano expirou. Todas as sessões foram removidas automaticamente. Renove para continuar usando.',
                    plano: carteiraUsuario.plano,
                    expiradoEm: carteiraUsuario.dataExpiracao,
                    sessoesDevolvidas: carteiraUsuario.sessoesRestantes || 0
                });
            }
        }

        // ... resto do código da função existente ...
        // (mantenha o código de verificação de limite de sessões)
        
        // Se chegou aqui, plano está válido e dentro dos limites
        req.carteiraUsuario = carteiraUsuario; // Disponibilizar para outras rotas
        next();
        
    } catch (error) {
        console.error('Erro ao verificar plano:', error);
        res.status(500).json({ 
            error: 'Erro interno',
            message: 'Não foi possível verificar o status do seu plano.'
        });
    }
}

// Função auxiliar para limpar sessões de um usuário específico
async function limparSessoesPlanosExpirados() {
    try {
        console.log('🔍 Iniciando limpeza automática de sessões de planos expirados...');
        
        const carteiraPath = path.join(__dirname, 'carteira.json');
        const sessoesPath = path.join(__dirname, 'public/database/qr-code');
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        
        // Carregar carteiras
        if (!fs.existsSync(carteiraPath)) {
            console.log('❌ Carteira não encontrada');
            return;
        }
        
        const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        const agora = new Date();
        let totalSessoesRemovidas = 0;
        let totalUsuariosAfetados = 0;
        
        // Carregar histórico
        let historico = [];
        if (fs.existsSync(historicoPath)) {
            historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        }
        
        // Para cada carteira com plano expirado
        for (const carteira of carteiras) {
            // Verificar se tem data de expiração e se expirou
            if (carteira.dataExpiracao) {
                const dataExpiracao = new Date(carteira.dataExpiracao);
                
                if (dataExpiracao < agora) {
                    console.log(`⚠️ Plano expirado para: ${carteira.numero} (${carteira.plano})`);
                    totalUsuariosAfetados++;
                    
                    // Limpar sessões deste usuário
                    const resultado = await limparSessoesUsuarioExpirado(carteira.numero, carteira);
                    
                    if (resultado.sessoesRemovidas > 0) {
                        totalSessoesRemovidas += resultado.sessoesRemovidas;
                        
                        // Registrar no histórico
                        historico.push({
                            usuario: carteira.numero,
                            sessoesRemovidas: resultado.sessoesRemovidas,
                            tipo: 'limpeza_automatica',
                            motivo: 'plano_expirado_cron',
                            data: new Date().toISOString(),
                            plano: carteira.plano,
                            dataExpiracao: carteira.dataExpiracao,
                            sessoesDevolvidas: resultado.sessoesDevolvidas
                        });
                    }
                }
            }
        }
        
        // Salvar histórico atualizado
        fs.writeFileSync(historicoPath, JSON.stringify(historico, null, 2));
        
        if (totalSessoesRemovidas > 0) {
            console.log(`✅ Limpeza concluída: ${totalSessoesRemovidas} sessões removidas de ${totalUsuariosAfetados} usuários`);
        } else {
            console.log('✅ Nenhum plano expirado encontrado');
        }
        
    } catch (error) {
        console.error('❌ Erro na limpeza automática de sessões:', error);
    }
}

async function limparSessoesUsuarioExpirado(userNumero, carteiraUsuario) {
    try {
        console.log(`🔍 Limpando sessões do usuário com plano expirado: ${userNumero}`);
        
        const sessoesPath = path.join(__dirname, 'public/database/qr-code');
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        const carteiraPath = path.join(__dirname, 'carteira.json');
        
        // 1. LISTAR TODAS AS SESSÕES QUE EXISTEM FISICAMENTE
        let sessoesExistentes = [];
        try {
            if (fs.existsSync(sessoesPath)) {
                sessoesExistentes = fs.readdirSync(sessoesPath).filter(item => {
                    const itemPath = path.join(sessoesPath, item);
                    return fs.statSync(itemPath).isDirectory();
                });
            }
        } catch (error) {
            console.error(`❌ Erro ao ler pasta de sessões:`, error);
        }
        
        console.log(`📁 Total de sessões físicas encontradas: ${sessoesExistentes.length}`);
        
        // 2. CARREGAR HISTÓRICO PARA IDENTIFICAR QUAIS SESSÕES SÃO DESTE USUÁRIO
        let historico = [];
        if (fs.existsSync(historicoPath)) {
            historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        }
        
        // Encontrar TODAS as sessões que este usuário já criou (independente se deletou ou não)
        const todasSessoesUsuario = [];
        const sessoesCriadasUsuario = historico.filter(item => 
            item.usuario === userNumero && 
            item.tipo === 'criacao' &&
            item.numeroSessao
        );
        
        for (const criacao of sessoesCriadasUsuario) {
            if (criacao.numeroSessao && !todasSessoesUsuario.includes(criacao.numeroSessao)) {
                todasSessoesUsuario.push(criacao.numeroSessao);
            }
        }
        
        console.log(`👤 Sessões associadas ao usuário ${userNumero}: ${todasSessoesUsuario.length}`);
        
        // 3. IDENTIFICAR QUAIS SESSÕES DO USUÁRIO AINDA EXISTEM FISICAMENTE
        const sessoesAtivas = [];
        for (const sessaoUsuario of todasSessoesUsuario) {
            // Verificar se esta sessão existe fisicamente
            if (sessoesExistentes.includes(sessaoUsuario)) {
                // Verificar se a pasta não está vazia (tem arquivos dentro)
                const sessionPath = path.join(sessoesPath, sessaoUsuario);
                try {
                    const conteudoPasta = fs.readdirSync(sessionPath);
                    if (conteudoPasta.length > 0) {
                        sessoesAtivas.push(sessaoUsuario);
                        console.log(`✅ Sessão ativa encontrada: ${sessaoUsuario}`);
                    } else {
                        console.log(`📦 Pasta vazia: ${sessaoUsuario}`);
                    }
                } catch (error) {
                    console.log(`⚠️ Erro ao verificar pasta ${sessaoUsuario}:`, error.message);
                }
            }
        }
        
        console.log(`📊 Sessões ativas para ${userNumero}: ${sessoesAtivas.length}`);
        
        if (sessoesAtivas.length === 0) {
            console.log(`ℹ️ Nenhuma sessão ativa para limpar de ${userNumero}`);
            return { sessoesRemovidas: 0, sessoesDevolvidas: 0 };
        }
        
        // 4. DEVOLVER SESSÕES PROPORCIONALMENTE AO PLANO
        const limitesPorPlano = {
            '2dias': 1,
            'semanal': 1,
            '14dias': 1,
            'mensal': 1,
            '3meses': 1,
            '5meses': 2,
            '1ano': 3
        };
        
        const limitePlano = limitesPorPlano[carteiraUsuario.plano] || 1;
        const sessoesParaDevolver = Math.min(sessoesAtivas.length, limitePlano);
        
        // 5. ATUALIZAR CARTEIRA
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }
        
        const carteiraIndex = carteiras.findIndex(c => c.numero === userNumero);
        
        if (carteiraIndex === -1) {
            console.log(`❌ Carteira não encontrada para ${userNumero}`);
            return { sessoesRemovidas: 0, sessoesDevolvidas: 0 };
        }
        
        // Inicializar contadores se não existirem
        if (typeof carteiras[carteiraIndex].sessoesRestantes !== 'number') {
            carteiras[carteiraIndex].sessoesRestantes = 0;
        }
        if (typeof carteiras[carteiraIndex].sessoesUsadas !== 'number') {
            carteiras[carteiraIndex].sessoesUsadas = 0;
        }
        
        // Ajustar sessoesUsadas subtraindo as que serão removidas
        carteiras[carteiraIndex].sessoesUsadas = Math.max(0, carteiras[carteiraIndex].sessoesUsadas - sessoesAtivas.length);
        
        // Devolver sessões ao contador
        const antes = carteiras[carteiraIndex].sessoesRestantes;
        carteiras[carteiraIndex].sessoesRestantes += sessoesParaDevolver;
        
        console.log(`🔄 Devolvendo ${sessoesParaDevolver} sessões para ${userNumero}: ${antes} → ${carteiras[carteiraIndex].sessoesRestantes}`);
        
        // 6. REMOVER SESSÕES ATIVAS
        const sessoesRemovidasComSucesso = [];
        
        for (const sessaoNome of sessoesAtivas) {
            try {
                const sessionPath = path.join(sessoesPath, sessaoNome);
                
                // Verificar novamente se a sessão ainda existe (pode ter sido removida por outro processo)
                if (!fs.existsSync(sessionPath)) {
                    console.log(`📭 Sessão ${sessaoNome} já foi removida`);
                    continue;
                }
                
                // A. Encerrar sessão ativa no gerenciador
                if (sessionManager.sessions.has(sessaoNome)) {
                    const sessao = sessionManager.sessions.get(sessaoNome);
                    try {
                        await sessao.socket?.end();
                        console.log(`🔌 Sessão ${sessaoNome} encerrada`);
                    } catch (error) {
                        console.log(`⚠️ Erro ao encerrar sessão ${sessaoNome}:`, error.message);
                    }
                    sessionManager.sessions.delete(sessaoNome);
                    sessionManager.retryCounts.delete(sessaoNome);
                }
                
                // B. Deletar pasta física
                fs.rmSync(sessionPath, { recursive: true, force: true });
                console.log(`🗑️ Pasta da sessão ${sessaoNome} removida`);
                
                sessoesRemovidasComSucesso.push(sessaoNome);
                
            } catch (error) {
                console.error(`❌ Erro ao remover sessão ${sessaoNome}:`, error);
            }
        }
        
        // 7. REGISTRAR NO HISTÓRICO
        historico.push({
            usuario: userNumero,
            sessoesRemovidas: sessoesRemovidasComSucesso,
            tipo: 'limpeza_automatica',
            motivo: 'plano_expirado',
            data: new Date().toISOString(),
            plano: carteiraUsuario.plano,
            dataExpiracao: carteiraUsuario.dataExpiracao,
            sessoesDevolvidas: sessoesParaDevolver,
            totalSessoesEncontradas: sessoesAtivas.length
        });
        
        // 8. ATUALIZAR STATUS DO PLANO
        carteiras[carteiraIndex].planoExpirado = true;
        carteiras[carteiraIndex].dataExpiracaoProcessada = new Date().toISOString();
        carteiras[carteiraIndex].ultimaLimpeza = new Date().toISOString();
        
        // 9. SALVAR ALTERAÇÕES
        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
        fs.writeFileSync(historicoPath, JSON.stringify(historico, null, 2));
        
        console.log(`✅ ${sessoesRemovidasComSucesso.length} sessões removidas de ${userNumero}`);
        
        return { 
            sessoesRemovidas: sessoesRemovidasComSucesso.length, 
            sessoesDevolvidas: sessoesParaDevolver,
            sessoesLista: sessoesRemovidasComSucesso
        };
        
    } catch (error) {
        console.error('❌ Erro ao limpar sessões do usuário:', error);
        return { error: error.message };
    }
}

// Função auxiliar para verificar se uma sessão existe fisicamente
function verificarSessaoExiste(sessaoNome) {
    try {
        const sessoesPath = path.join(__dirname, 'public/database/qr-code');
        const sessionPath = path.join(sessoesPath, sessaoNome);
        
        if (!fs.existsSync(sessionPath)) {
            return false;
        }
        
        // Verificar se tem conteúdo (não é pasta vazia)
        const conteudo = fs.readdirSync(sessionPath);
        return conteudo.length > 0;
        
    } catch (error) {
        console.error(`❌ Erro ao verificar sessão ${sessaoNome}:`, error);
        return false;
    }
}

// Função para listar todas as sessões de um usuário (incluindo status)
async function listarSessoesUsuarioComStatus(userNumero) {
    try {
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        const sessoesPath = path.join(__dirname, 'public/database/qr-code');
        
        let historico = [];
        if (fs.existsSync(historicoPath)) {
            historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        }
        
        // Sessões criadas pelo usuário
        const sessoesCriadas = historico.filter(item => 
            item.usuario === userNumero && 
            item.tipo === 'criacao' &&
            item.numeroSessao
        );
        
        const resultado = [];
        
        for (const criacao of sessoesCriadas) {
            const sessaoNome = criacao.numeroSessao;
            const existe = verificarSessaoExiste(sessaoNome);
            
            resultado.push({
                sessao: sessaoNome,
                dataCriacao: criacao.data,
                ativa: existe,
                status: existe ? 'ATIVA' : 'INATIVA',
                caminho: path.join(sessoesPath, sessaoNome)
            });
        }
        
        return resultado;
        
    } catch (error) {
        console.error('❌ Erro ao listar sessões do usuário:', error);
        return [];
    }
}

// Rota para verificar status das sessões (debug)
app.get('/api/debug/sessoes-usuario/:usuario', async (req, res) => {
    try {
        const userNumero = req.params.usuario;
        const sessoes = await listarSessoesUsuarioComStatus(userNumero);
        
        // Contar sessões ativas
        const sessoesAtivas = sessoes.filter(s => s.ativa).length;
        
        return res.json({
            success: true,
            usuario: userNumero,
            totalSessoes: sessoes.length,
            sessoesAtivas: sessoesAtivas,
            sessoesInativas: sessoes.length - sessoesAtivas,
            detalhes: sessoes
        });
        
    } catch (error) {
        console.error('❌ Erro no debug de sessões:', error);
        return res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// ATUALIZE a função verificarPlanoAtivo para usar a nova lógica
async function verificarPlanoAtivo(req, res, next) {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Carregar carteira
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        const carteiraUsuario = carteiras.find(c => c.numero === user.numero);
        
        // Se não tem carteira ou plano, NÃO PERMITE ACESSO
        if (!carteiraUsuario || !carteiraUsuario.plano) {
            return res.status(403).json({ 
                error: 'Plano necessário',
                message: 'Você precisa adquirir um plano para acessar esta área.'
            });
        }

        // Verificar se o plano expirou
        if (carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            const agora = new Date();
            
            if (dataExpiracao < agora) {
                // Verificar se já foi processado recentemente (últimas 24 horas)
                const umDiaAtras = new Date(agora.getTime() - (24 * 60 * 60 * 1000));
                const foiProcessado = carteiraUsuario.dataExpiracaoProcessada && 
                    new Date(carteiraUsuario.dataExpiracaoProcessada) > umDiaAtras;
                
                if (!foiProcessado) {
                    // Limpar sessões automaticamente
                    const resultado = await limparSessoesUsuarioExpirado(user.numero, carteiraUsuario);
                    
                    return res.status(403).json({ 
                        error: 'Plano expirado',
                        message: `Seu plano expirou. ${resultado.sessoesRemovidas} sessão(ões) foram removidas automaticamente e ${resultado.sessoesDevolvidas} sessão(ões) devolvida(s) à sua conta.`,
                        plano: carteiraUsuario.plano,
                        expiradoEm: carteiraUsuario.dataExpiracao,
                        sessoesRemovidas: resultado.sessoesRemovidas,
                        sessoesDevolvidas: resultado.sessoesDevolvidas,
                        sessoesLista: resultado.sessoesLista || []
                    });
                } else {
                    return res.status(403).json({ 
                        error: 'Plano expirado',
                        message: 'Seu plano expirou. Renove para continuar usando.',
                        plano: carteiraUsuario.plano,
                        expiradoEm: carteiraUsuario.dataExpiracao
                    });
                }
            }
        }

        // ... resto do código da função existente ...
        
        req.carteiraUsuario = carteiraUsuario;
        next();
        
    } catch (error) {
        console.error('Erro ao verificar plano:', error);
        res.status(500).json({ 
            error: 'Erro interno',
            message: 'Não foi possível verificar o status do seu plano.'
        });
    }
}
// Função auxiliar para obter sessões ativas de um usuário (pode ser usada em outras partes)
async function obterSessoesAtivasUsuario(userNumero) {
    try {
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        const sessoesPath = path.join(__dirname, 'public/database/qr-code');
        
        if (!fs.existsSync(historicoPath)) {
            return [];
        }
        
        const historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        
        // Filtrar sessões criadas pelo usuário
        const sessoesCriadas = historico.filter(item => 
            item.usuario === userNumero && 
            item.tipo === 'criacao' &&
            item.numeroSessao
        );
        
        // Filtrar sessões deletadas pelo usuário
        const sessoesDeletadas = historico.filter(item => 
            item.usuario === userNumero && 
            item.tipo === 'delecao' &&
            (item.sessao || item.numeroSessao)
        );
        
        // Determinar sessões ativas
        const sessoesAtivas = [];
        
        for (const criacao of sessoesCriadas) {
            const numeroSessao = criacao.numeroSessao;
            
            // Verificar se foi deletada
            const foiDeletada = sessoesDeletadas.some(delecao => {
                const sessaoDeletada = delecao.sessao || delecao.numeroSessao;
                return sessaoDeletada === numeroSessao;
            });
            
            // Verificar se pasta ainda existe
            const sessionPath = path.join(sessoesPath, numeroSessao);
            const pastaExiste = fs.existsSync(sessionPath);
            
            if (!foiDeletada && pastaExiste) {
                sessoesAtivas.push({
                    numero: numeroSessao,
                    dataCriacao: criacao.data,
                    tipo: criacao.tipo
                });
            }
        }
        
        return sessoesAtivas;
        
    } catch (error) {
        console.error('❌ Erro ao obter sessões ativas do usuário:', error);
        return [];
    }
}

// Rota para verificar sessões ativas do usuário (útil para debug)
app.get('/api/sessoes/usuario/:usuario/ativas', async (req, res) => {
    try {
        const userNumero = req.params.usuario;
        const sessoesAtivas = await obterSessoesAtivasUsuario(userNumero);
        
        return res.json({
            success: true,
            usuario: userNumero,
            sessoesAtivas: sessoesAtivas,
            total: sessoesAtivas.length
        });
        
    } catch (error) {
        console.error('❌ Erro ao listar sessões ativas:', error);
        return res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// Adicione esta verificação à função verificarPlanoAtivo
async function verificarPlanoAtivo(req, res, next) {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.status(401).json({ error: 'Não autenticado' });
        }

        // Carregar carteira
        let carteiras = [];
        if (fs.existsSync(carteiraPath)) {
            carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        }

        const carteiraUsuario = carteiras.find(c => c.numero === user.numero);
        
        // Se não tem carteira ou plano, NÃO PERMITE ACESSO
        if (!carteiraUsuario || !carteiraUsuario.plano) {
            return res.status(403).json({ 
                error: 'Plano necessário',
                message: 'Você precisa adquirir um plano para acessar esta área.'
            });
        }

        // Verificar se o plano expirou
        if (carteiraUsuario.dataExpiracao) {
            const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
            const agora = new Date();
            
            if (dataExpiracao < agora) {
                // Verificar se já foi processado recentemente (últimas 2 horas)
                const duasHorasAtras = new Date(agora.getTime() - (2 * 60 * 60 * 1000));
                const foiProcessado = carteiraUsuario.dataExpiracaoProcessada && 
                    new Date(carteiraUsuario.dataExpiracaoProcessada) > duasHorasAtras;
                
                if (!foiProcessado) {
                    // Limpar sessões automaticamente
                    const resultado = await limparSessoesUsuarioExpirado(user.numero, carteiraUsuario);
                    
                    return res.status(403).json({ 
                        error: 'Plano expirado',
                        message: `Seu plano expirou. ${resultado.sessoesRemovidas} sessões foram removidas automaticamente e ${resultado.sessoesDevolvidas} sessões devolvidas à sua conta.`,
                        plano: carteiraUsuario.plano,
                        expiradoEm: carteiraUsuario.dataExpiracao,
                        sessoesRemovidas: resultado.sessoesRemovidas,
                        sessoesDevolvidas: resultado.sessoesDevolvidas
                    });
                } else {
                    return res.status(403).json({ 
                        error: 'Plano expirado',
                        message: 'Seu plano expirou. Renove para continuar usando.',
                        plano: carteiraUsuario.plano,
                        expiradoEm: carteiraUsuario.dataExpiracao
                    });
                }
            }
        }

        // ... resto do código da função existente ...
        
        // Se chegou aqui, plano está válido e dentro dos limites
        req.carteiraUsuario = carteiraUsuario;
        next();
        
    } catch (error) {
        console.error('Erro ao verificar plano:', error);
        res.status(500).json({ 
            error: 'Erro interno',
            message: 'Não foi possível verificar o status do seu plano.'
        });
    }
}

// Função para forçar limpeza de um usuário específico (útil para admin)
app.post('/api/admin/limpar-sessoes-usuario/:usuario', async (req, res) => {
    try {
        // Verificar se é admin (adicione sua lógica de autenticação admin)
        const user = req.session.user;
        if (!user || user.nivel !== 'admin') {
            return res.status(403).json({ success: false, message: 'Acesso negado' });
        }
        
        const usuarioAlvo = req.params.usuario;
        const carteiraPath = path.join(__dirname, 'carteira.json');
        
        if (!fs.existsSync(carteiraPath)) {
            return res.status(404).json({ success: false, message: 'Carteira não encontrada' });
        }
        
        const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        const carteiraUsuario = carteiras.find(c => c.numero === usuarioAlvo);
        
        if (!carteiraUsuario) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }
        
        const resultado = await limparSessoesUsuarioExpirado(usuarioAlvo, carteiraUsuario);
        
        return res.json({
            success: true,
            message: `Limpeza realizada para ${usuarioAlvo}`,
            resultado: resultado
        });
        
    } catch (error) {
        console.error('❌ Erro na limpeza manual:', error);
        return res.status(500).json({ success: false, message: 'Erro interno' });
    }
});



// Adicione esta rota para histórico de limpezas automáticas
app.get('/api/historico/limpezas', async (req, res) => {
    try {
        const historicoPath = path.join(__dirname, 'historico-sessoes.json');
        
        if (!fs.existsSync(historicoPath)) {
            return res.json({ success: true, limpezas: [] });
        }
        
        const historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
        const limpezas = historico.filter(item => 
            item.tipo === 'remocao_automatica' || 
            item.tipo === 'limpeza_automatica'
        );
        
        return res.json({ success: true, limpezas: limpezas.reverse() });
        
    } catch (error) {
        console.error('❌ Erro ao carregar histórico de limpezas:', error);
        return res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// Adicione um cron job para limpeza automática diária
function iniciarCronJobLimpeza() {
    // Executar uma vez por dia à meia-noite
    // Executar também a cada 6 horas para garantir
    setInterval(async () => {
        console.log('⏰ Executando limpeza automática (6 horas)...');
        await limparSessoesPlanosExpirados();
    }, 6 * 60 * 60 * 1000); // 6 horas
    ///6 * 60 * 60 * 1000
    console.log('✅ Cron jobs de limpeza automática iniciados');
}



// ==================== ROTAS API PARA O FRONTEND ====================


// Rota para forçar verificação
app.post('/api/sessoes/:sessao/verificar', async (req, res) => {
    try {
        const sessaoNome = req.params.sessao;
        
        console.log(colors.cyan(`[API] Forçando verificação: ${sessaoNome}`));
        
        await sessionManager.forceCheckSession(sessaoNome);
        
        res.json({
            success: true,
            message: 'Verificação iniciada',
            session: sessaoNome
        });
    } catch (error) {
        console.error(colors.red('❌ Erro ao verificar sessão:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao verificar sessão: ' + error.message
        });
    }
});

// Rota para obter status de uma sessão
app.get('/api/sessoes/:sessao/status', async (req, res) => {
    try {
        const sessaoNome = req.params.sessao;
        const status = sessionManager.getSessionStatus(sessaoNome);

        if (!status) {
            return res.status(404).json({
                success: false,
                message: 'Sessão não encontrada'
            });
        }

        res.json({
            success: true,
            status: status.status,
            pairing: status.pairing,
            isActive: status.isActive,
            retryCount: status.retryCount || 0,
            lastUpdate: new Date().toISOString()
        });

    } catch (error) {
        console.error(colors.red('❌ Erro na API de status:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro interno: ' + error.message
        });
    }
});

// Rota para obter status de todas as sessões com prioridade para as do usuário
// Rota atualizada para /api/sessoes/status
app.get('/api/sessoes/status', async (req, res) => {
    try {
        const numeros = await pegarNumeros();
        const sessoes = numeros.map(numero => {
            const status = sessionManager.getSessionStatus(numero);
            return {
                session: numero,
                status: status.status,
                isActive: status.isActive,
                pairingCode: status.pairing.code,
                config: status.config,
                retryCount: status.retryCount || 0
            };
        });

        const stats = sessionManager.getStats();

        res.json({
            success: true,
            sessoes: sessoes,
            stats: stats,
            lastUpdate: new Date().toISOString()
        });

    } catch (error) {
        console.error(colors.red('❌ Erro na API de status global:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro interno'
        });
    }
});


// ============================================
// ENDPOINT ESPECÍFICO PARA O MARUJO RUNNER
// ============================================
app.post('/salvarPontuacaoMarujo', (req, res) => {
    const { nome, id, grupo, score, golds } = req.body;
    
    console.log('🎮 Marujo Runner - Recebendo pontuação:', { nome, id, score, golds });
    
    if (!nome || !id || !grupo || typeof score !== 'number') {
        console.log('❌ Dados incompletos:', req.body);
        return res.status(400).json({ 
            sucesso: false, 
            mensagem: 'Dados incompletos' 
        });
    }

    const filePath = path.join(__dirname, 'public', 'rankmarujo.json');
    let rankings = [];

    // Criar arquivo se não existir
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            rankings = JSON.parse(data || '[]');
        } else {
            // Criar diretório public se não existir
            const publicDir = path.join(__dirname, 'public');
            if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
            }
        }
    } catch (e) {
        console.error('❌ Erro lendo rankmarujo.json:', e);
    }

    // Garantir que rankings é um array
    if (!Array.isArray(rankings)) {
        rankings = [];
    }

    // Procura usuário no ranking
    let usuarioIndex = rankings.findIndex(u => u.id === id && u.grupo === grupo);
    let goldsGanho = 0;

    if (usuarioIndex === -1) {
        // Novo usuário
        rankings.push({ 
            nome, 
            id, 
            grupo, 
            score, 
            golds: golds || 0,
            data: new Date().toISOString()
        });
    } else {
        // Atualiza se a pontuação nova for maior
        if (score > rankings[usuarioIndex].score) {
            goldsGanho = Math.floor((score - rankings[usuarioIndex].score) / 50);
            rankings[usuarioIndex].score = score;
            rankings[usuarioIndex].golds = (rankings[usuarioIndex].golds || 0) + (golds || 0);
            rankings[usuarioIndex].data = new Date().toISOString();
        } else {
            // Só adiciona golds
            rankings[usuarioIndex].golds = (rankings[usuarioIndex].golds || 0) + (golds || 0);
        }
    }

    // Ordena pelo score decrescente
    rankings.sort((a, b) => (b.score || 0) - (a.score || 0));

    // Salvar no arquivo
    try {
        fs.writeFileSync(filePath, JSON.stringify(rankings, null, 2));
        console.log('✅ Ranking salvo com sucesso! Total de registros:', rankings.length);
    } catch (e) {
        console.error('❌ Erro escrevendo rankmarujo.json:', e);
        return res.status(500).json({ 
            sucesso: false, 
            mensagem: 'Erro interno ao salvar' 
        });
    }

    res.json({ 
        sucesso: true, 
        goldsGanho,
        mensagem: 'Pontuação salva com sucesso!'
    });
});

// Rota para deletar sessão
// Rota para deletar sessão
app.post('/api/sessoes/:sessao/confirmar-delecao', async (req, res) => {
    try {
        const sessaoNome = req.params.sessao;
        const { codigo } = req.body;
        const user = req.session.user;

        const sessionPath = path.join(__dirname, 'public/database/qr-code', sessaoNome);
        const confirmacoesPath = path.join(__dirname, 'confirmacoes.json');
        const carteiraPath = path.join(__dirname, 'carteira.json');
        const bloqueiosPath = path.join(__dirname, 'bloqueios-delecao.json');

        // 🔐 Validar código
        if (!fs.existsSync(confirmacoesPath)) {
            return res.status(400).json({ success: false, message: 'Código inválido ou expirado' });
        }

        const confirmacoes = JSON.parse(fs.readFileSync(confirmacoesPath, 'utf8') || '{}');
        const confirmacao = confirmacoes[sessaoNome];

        if (!confirmacao) {
            return res.status(400).json({ success: false, message: 'Código inválido ou expirado' });
        }

        if (Date.now() > confirmacao.expiraEm) {
            delete confirmacoes[sessaoNome];
            fs.writeFileSync(confirmacoesPath, JSON.stringify(confirmacoes, null, 2));
            return res.status(400).json({ success: false, message: 'Código expirado' });
        }

        if (confirmacao.codigo !== codigo) {
            return res.status(400).json({ success: false, message: 'Código incorreto' });
        }

        console.log(`🗑️ [${sessaoNome}] Código confirmado, deletando sessão...`);

        // 🔴 BLOQUEAR RECRIAÇÃO AUTOMÁTICA
        let bloqueios = {};
        if (fs.existsSync(bloqueiosPath)) {
            bloqueios = JSON.parse(fs.readFileSync(bloqueiosPath, 'utf8') || '{}');
        }
        
        // Marcar como deletada por 10 minutos
        bloqueios[sessaoNome] = {
            deletadoEm: Date.now(),
            deletadoPor: user.numero,
            expiraEm: Date.now() + (7000) // 10 minutos
        };
        
        fs.writeFileSync(bloqueiosPath, JSON.stringify(bloqueios, null, 2));
        console.log(`🔒 [${sessaoNome}] Bloqueado por 10 minutos para evitar recriação`);

        // 📦 Carregar carteiras
        if (!fs.existsSync(carteiraPath)) {
            return res.status(500).json({ success: false, message: 'Carteira não encontrada' });
        }

        const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
        const carteiraIndex = carteiras.findIndex(c => c.numero === user.numero);

        let mensagemDevolucao = '';

        if (carteiraIndex !== -1) {
            const carteiraUsuario = carteiras[carteiraIndex];

            // 📊 Limites por plano
            const limitesPorPlano = {
                '2dias': 1,
                'semanal': 1,
                '14dias': 1,
                'mensal': 1,
                '3meses': 1,
                '5meses': 2,
                '1ano': 3
            };

            const limitePlano = limitesPorPlano[carteiraUsuario.plano] || 1;

            // 🧮 Garantir contador
            if (typeof carteiraUsuario.sessoesRestantes !== 'number') {
                carteiraUsuario.sessoesRestantes = 0;
            }

            const antes = carteiraUsuario.sessoesRestantes;

            // 🔁 DEVOLVER 1 SESSÃO
            carteiraUsuario.sessoesRestantes += 1;
            if (carteiraUsuario.sessoesRestantes > 3) {
                carteiraUsuario.sessoesRestantes = 3
            }

            carteiras[carteiraIndex] = carteiraUsuario;
            fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));

            if (antes !== carteiraUsuario.sessoesRestantes) {
                mensagemDevolucao = ` (+1 sessão devolvida: ${antes} → ${carteiraUsuario.sessoesRestantes}/3)`;
                console.log(`🔄 Sessão devolvida para ${user.numero}: ${antes} → ${carteiraUsuario.sessoesRestantes}`);
            }

            // 🧾 Histórico
            const historicoPath = path.join(__dirname, 'historico-sessoes.json');
            let historico = [];

            if (fs.existsSync(historicoPath)) {
                historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8') || '[]');
            }

            historico.push({
                usuario: user.numero,
                sessao: sessaoNome,
                tipo: 'delecao',
                data: new Date().toISOString(),
                plano: carteiraUsuario.plano,
                sessoesAntes: antes,
                sessoesDepois: carteiraUsuario.sessoesRestantes,
                limite: 3,
                motivo: 'delecao_manual'
            });

            fs.writeFileSync(historicoPath, JSON.stringify(historico, null, 2));
        }

        // 🔌 Encerrar sessão ativa ANTES de deletar
        if (sessionManager && sessionManager.sessions && sessionManager.sessions.has(sessaoNome)) {
            const sessao = sessionManager.sessions.get(sessaoNome);
            try {
                if (sessao.socket && sessao.socket.end) {
                    sessao.socket.end();
                    console.log(`🔌 [${sessaoNome}] Socket encerrado`);
                }
            } catch (socketError) {
                console.log(`⚠️ [${sessaoNome}] Erro ao encerrar socket:`, socketError.message);
            }
            
            sessionManager.sessions.delete(sessaoNome);
            sessionManager.retryCounts.delete(sessaoNome);
            
            // Remover também do connectingSessions se existir
            if (sessionManager.connectingSessions && sessionManager.connectingSessions.has(sessaoNome)) {
                sessionManager.connectingSessions.delete(sessaoNome);
            }
            
            console.log(`🗑️ [${sessaoNome}] Removida do sessionManager`);
        }

        // 🗂️ Deletar pasta se existir
        if (fs.existsSync(sessionPath)) {
            try {
                // Remover todos os arquivos primeiro
                const files = fs.readdirSync(sessionPath);
                files.forEach(file => {
                    try {
                        fs.unlinkSync(path.join(sessionPath, file));
                    } catch {}
                });
                
                // Depois deletar pasta
                fs.rmSync(sessionPath, { recursive: true, force: true });
                console.log(`✅ [${sessaoNome}] Pasta deletada`);
            } catch (rmError) {
                console.error(`❌ [${sessaoNome}] Erro ao deletar pasta:`, rmError.message);
            }
        } else {
            console.log(`ℹ️ [${sessaoNome}] Pasta não existe`);
        }

        // 🧹 Limpar confirmação
        delete confirmacoes[sessaoNome];
        fs.writeFileSync(confirmacoesPath, JSON.stringify(confirmacoes, null, 2));

        // ✅ Resposta final
        return res.json({
            success: true,
            message: 'Sessão deletada com sucesso' + mensagemDevolucao,
            redirect: '/conectar',
            plano: carteiraIndex !== -1 ? {
                plano: carteiras[carteiraIndex].plano,
                sessoesRestantes: carteiras[carteiraIndex].sessoesRestantes,
                limite: 3
            } : null 
        });

    } catch (error) {
        console.error('❌ Erro ao confirmar deleção:', error);
        return res.status(500).json({
            success: false,
            message: 'Erro ao deletar sessão: ' + error.message
        });
    }
});
app.post('/api/sessoes/:sessao/deletar', async (req, res) => {
    try {
        const sessaoNome = req.params.sessao;
        const user = req.session.user;
        const sessionPath = path.join(__dirname, 'public/database/qr-code', sessaoNome);

        console.log(colors.cyan(`[API] Iniciando deleção da sessão: ${sessaoNome}`));

        // Verificar se a sessão existe
        if (!fs.existsSync(sessionPath)) {
            return res.status(404).json({
                success: false,
                message: 'Sessão não encontrada'
            });
        }

        // 🔍 Verificar se a sessão pertence ao usuário atual
        const userNum = user.numero.replace(/\D/g, "");
        const sessaoNum = sessaoNome.replace(/\D/g, "");
        
        const usuarioEDono = sessaoNum === userNum || 
                            sessaoNum.includes(userNum) || 
                            userNum.includes(sessaoNum);
        
     /*   if (!usuarioEDono) {
            return res.status(403).json({
                success: false,
                message: 'Você não tem permissão para deletar esta sessão'
            });
        }
*/
        // 📍 GERAR CÓDIGO DE CONFIRMAÇÃO
        const codigo = Math.floor(10000000 + Math.random() * 90000000).toString();
        const expiraEm = Date.now() + (5 * 60 * 1000); // 5 minutos

        // 📂 Carregar ou criar arquivo de confirmações
        let confirmacoes = {};
        const confirmacoesPath = path.join(__dirname, 'confirmacoes.json');
        
        if (fs.existsSync(confirmacoesPath)) {
            confirmacoes = JSON.parse(fs.readFileSync(confirmacoesPath, 'utf8') || '{}');
        }

        // Salvar código de confirmação
        confirmacoes[sessaoNome] = {
            codigo: codigo,
            expiraEm: expiraEm,
            dataCriacao: Date.now(),
            usuario: user.numero,
            enviar: true, // Flag para indicar que precisa enviar
            sessao: sessaoNome,
            confirmado: false
        };

        fs.writeFileSync(confirmacoesPath, JSON.stringify(confirmacoes, null, 2));
        console.log(colors.yellow(`[${sessaoNome}] Código gerado: ${codigo}`));

        // 📤 Responder com sucesso (aguardando confirmação)
        res.json({
            success: true,
            message: 'Código de confirmação enviado para seu WhatsApp',
            requerConfirmacao: true,
            codigoGerado: codigo,
            sessao: sessaoNome,
            redirect: '/conectar',
            instrucao: 'Verifique seu WhatsApp para receber o código de confirmação'
        });

    } catch (error) {
        console.error(colors.red('❌ Erro ao iniciar deleção:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao iniciar deleção: ' + error.message
        });
    }
});

// Rota para registrar cópia de código
app.post('/api/sessoes/copiar-codigo', async (req, res) => {
    try {
        const { code, session } = req.body;
        
        console.log(colors.cyan(`[API] Código copiado: ${session} - ${code}`));
        
        // Aqui você pode registrar em um log se quiser
        const logPath = path.join(__dirname, 'public/database/logs', 'codigos-copiados.json');
        if (!fs.existsSync(path.dirname(logPath))) {
            fs.mkdirSync(path.dirname(logPath), { recursive: true });
        }
        
        let logs = [];
        if (fs.existsSync(logPath)) {
            logs = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
        }
        
        logs.push({
            session: session,
            code: code,
            timestamp: new Date().toISOString(),
            ip: req.ip
        });
        
        fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
        
        res.json({
            success: true,
            message: 'Código copiado registrado'
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao registrar cópia:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao registrar cópia'
        });
    }
});

// ==================== ROTA PRINCIPAL PARA CONECTAR ====================

app.get('/conectar', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.redirect('/login?redirect=/conectar');
        }

        // VERIFICAR TRANSAÇÕES PENDENTES AUTOMATICAMENTE
        let transacoesProcessadas = [];
        let mensagemTransacoes = '';
        
        try {
            const resultados = await verificarTransacoesPendentes(user.numero);
            
            if (resultados.length > 0) {
                const aprovadas = resultados.filter(r => r.status === 'approved');
                const pendentes = resultados.filter(r => r.status === 'pending');
                
                if (aprovadas.length > 0) {
                    transacoesProcessadas = aprovadas;
                    mensagemTransacoes = `✅ ${aprovadas.length} pagamento(s) processado(s) automaticamente!`;
                    
                    // Adicionar mensagem para ser exibida no frontend
                    req.session.mensagemTransacoes = mensagemTransacoes;
                }
                
                console.log(`📊 Transações verificadas para ${user.numero}: ${aprovadas.length} aprovadas, ${pendentes.length} pendentes`);
            }
        } catch (error) {
            console.error('Erro na verificação automática:', error.message);
        }

        // Verificar se usuário tem plano
        const carteiraPath = path.join(__dirname, 'carteira.json');
        let planoAtivo = false;
        let saldo = 0;
        
        if (fs.existsSync(carteiraPath)) {
            const carteiras = JSON.parse(fs.readFileSync(carteiraPath, 'utf8') || '[]');
            const carteiraUsuario = carteiras.find(c => c.numero === user.numero);
            
            if (carteiraUsuario) {
                saldo = carteiraUsuario.saldo || 0;
                
                // Verificar se plano está ativo e não expirou
                if (carteiraUsuario.plano && carteiraUsuario.dataExpiracao) {
                    const dataExpiracao = new Date(carteiraUsuario.dataExpiracao);
                    if (dataExpiracao > new Date()) {
                        planoAtivo = true;
                    } else {
                        // Plano expirado, remover
                        carteiraUsuario.plano = null;
                        carteiraUsuario.sessoesAtivas = 0;
                        fs.writeFileSync(carteiraPath, JSON.stringify(carteiras, null, 2));
                    }
                }
            }
        }


        // Obter sessões (sua lógica existente)
        const numeros = await pegarNumeros();
        const sessoes = numeros.map(numero => {
            const status = sessionManager.getSessionStatus(numero);
            return {
                ...status,
                sessionName: numero
            };
        });
        
        const sessoesComCodigo = sessoes.filter(s => s.pairing && s.pairing.code);
        const stats = sessionManager.getStats();
        
        res.render('conectar', {
            title: 'Conectar WhatsApp',
            site_nome: site_nome,
            user: user,
            sessoes: sessoes,
            sessoesComCodigo: sessoesComCodigo,
            stats: stats,
            moment: moment,
            saldo: saldo,
            planoAtivo: planoAtivo,
            transacoesProcessadas: transacoesProcessadas,
            mensagemTransacoes: mensagemTransacoes || req.session.mensagemTransacoes || ''
        });
        
        // Limpar mensagem da session após exibir
        if (req.session.mensagemTransacoes) {
            delete req.session.mensagemTransacoes;
        }
        
    } catch (error) {
        console.error('❌ Erro ao carregar /conectar:', error);
        res.status(500).send('Erro ao carregar a página: ' + error.message);
    }
});



// ==================== ROTAS DE AUTENTICAÇÃO (SIMPLES) ====================

//const crypto = require('crypto');

// Rota para página de planos
app.get('/planos', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.redirect('/login?redirect=/planos');
        }
        
        res.render('planos', {
            title: 'Planos de Conexão',
            site_nome: site_nome,
            user: user
        });
    } catch (error) {
        console.error('Erro na página de planos:', error);
        res.status(500).send('Erro ao carregar página');
    }
});

// Rota para página de pagamento
app.get('/pagamento', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user || !user.numero) {
            return res.redirect('/login?redirect=/pagamento');
        }
        
        const { plano, valor } = req.query;
        
        const planosNomes = {
            '2dias': '2 DIAS',
            'semanal': 'SEMANAL',
            '14dias': '14 DIAS',
            'mensal': 'MENSAL',
            '3meses': '3 MESES',
            '5meses': '5 MESES',
            '1ano': '1 ANO'
        };
        
        res.render('pagamento', {
            title: 'Pagamento',
            site_nome: site_nome,
            user: user,
            plano: plano,
            valor: valor,
            planoNome: planosNomes[plano] || plano
        });
    } catch (error) {
        console.error('Erro na página de pagamento:', error);
        res.status(500).send('Erro ao carregar página');
    }
});
// ==================== SISTEMA DE CARTEIRA E PIX ====================

// Arquivos de banco de dados
const CARTEIRAS_FILE = path.join(__dirname, 'database', 'carteiras.json');
const TRANSACOES_FILE = path.join(__dirname, 'transacoes.json');
const PLANOS_FILE = path.join(__dirname, 'database', 'planos.json');
const ASSINATURAS_FILE = path.join(__dirname, 'database', 'assinaturas.json');




function criarArquivosNecessarios() {
    try {
        console.log('🔧 Verificando arquivos e pastas necessários...');
        
        // 1. Primeiro criar as pastas necessárias
        const dirs = [
            'public/pokemon/market/listings',
            'public/pokemon/market/transactions',
            'public/pokemon/market/history',
            'public/pokemon/market/cooldowns',
            'temp_sessions'
        ];

        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                console.log(`📁 Pasta criada: ${dir}`);
            }
        });

        console.log('✅ Pastas verificadas/criadas!');
        
        // 2. Depois criar os arquivos JSON necessários
        const arquivos = [
            {
                nome: 'carteira.json',
                conteudo: []
            },
            {
                nome: 'transacoes-carteira.json',
                conteudo: []
            },
            {
                nome: 'planos-ativos.json',
                conteudo: []
            },
            {
                nome: 'historico-planos.json',
                conteudo: []
            },
            {
                nome: 'config-carteira.json',
                conteudo: {
                    taxaDeposito: 0,
                    valorMinimoDeposito: 5,
                    valorMaximoDeposito: 1000,
                    comissaoPlano: 0,
                    atualizacaoAutomatica: true,
                    intervaloVerificacao: 300000,
                    ultimaVerificacao: null
                }
            }
        ];

        let criados = 0;
        let existiam = 0;

        // Criar cada arquivo se não existir
        arquivos.forEach(arquivo => {
            const caminho = path.join(__dirname, '..', arquivo.nome);
            
            if (!fs.existsSync(caminho)) {
                // Criar o arquivo
                fs.writeFileSync(
                    caminho,
                    JSON.stringify(arquivo.conteudo, null, 2),
                    'utf8'
                );
                console.log(`✅ ${arquivo.nome} criado`);
                criados++;
            } else {
                existiam++;
            }
        });

        console.log(`📊 Resumo: ${criados} arquivos criados, ${existiam} já existiam`);
        return true;
        
    } catch (error) {
        console.error('❌ Erro ao criar arquivos/pastas:', error.message);
        return false;
    }
}



// Middleware para verificar assinatura nas sessões

// Rota para verificar status de assinatura
app.get('/api/sessao/:numero/assinatura', async (req, res) => {
    try {
        const { numero } = req.params;
        const numeroLimpo = numero.replace(/\D/g, '');
        
        let assinaturas = [];
        if (fs.existsSync(ASSINATURAS_FILE)) {
            assinaturas = JSON.parse(fs.readFileSync(ASSINATURAS_FILE, 'utf8'));
        }
        
        const assinatura = assinaturas.find(a => 
            a.numeroWhatsApp === numeroLimpo && 
            a.status === 'ativa' &&
            new Date(a.validade) > new Date()
        );
        
        res.json({
            success: true,
            possuiAssinatura: !!assinatura,
            assinatura: assinatura || null,
            estaAtiva: !!assinatura
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao verificar assinatura:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao verificar assinatura'
        });
    }
});
// Criar ou obter carteira do usuário
// Criar ou obter carteira do usuário
function obterCarteira(userId) {
    let carteiras = [];
    const carteirasPath = path.join(__dirname, 'database', 'carteiras.json');
    
    // Criar diretório se não existir
    const dir = path.dirname(carteirasPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Carregar ou criar arquivo
    if (fs.existsSync(carteirasPath)) {
        try {
            carteiras = JSON.parse(fs.readFileSync(carteirasPath, 'utf8'));
        } catch (e) {
            console.error('Erro ao ler carteiras.json:', e);
            carteiras = [];
        }
    } else {
        // Criar arquivo vazio
        fs.writeFileSync(carteirasPath, JSON.stringify([], null, 2));
    }
    
    // Procurar carteira do usuário
    let carteira = carteiras.find(c => c.userId === userId);
    
    // Se não existir, criar uma nova
    if (!carteira) {
        carteira = {
            userId: userId,
            saldo: 0,
            saldoBloqueado: 0,
            totalDepositado: 0,
            totalGasto: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        carteiras.push(carteira);
        
        try {
            fs.writeFileSync(carteirasPath, JSON.stringify(carteiras, null, 2));
        } catch (e) {
            console.error('Erro ao salvar carteira:', e);
        }
    }
    
    return carteira;
}

// Atualizar carteira
function atualizarCarteira(userId, dados) {
    let carteiras = [];
    if (fs.existsSync(CARTEIRAS_FILE)) {
        carteiras = JSON.parse(fs.readFileSync(CARTEIRAS_FILE, 'utf8'));
    }
    
    const index = carteiras.findIndex(c => c.userId === userId);
    
    if (index === -1) {
        return false;
    }
    
    carteiras[index] = {
        ...carteiras[index],
        ...dados,
        updatedAt: new Date().toISOString()
    };
    
    fs.writeFileSync(CARTEIRAS_FILE, JSON.stringify(carteiras, null, 2));
    return true;
}

// Criar transação
function criarTransacao(dados) {
    let transacoes = [];
    if (fs.existsSync(TRANSACOES_FILE)) {
        transacoes = JSON.parse(fs.readFileSync(TRANSACOES_FILE, 'utf8'));
    }
    
    const transacao = {
        id: crypto.randomBytes(16).toString('hex'),
        ...dados,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    transacoes.push(transacao);
    fs.writeFileSync(TRANSACOES_FILE, JSON.stringify(transacoes, null, 2));
    
    return transacao;
}

// Atualizar transação
function atualizarTransacao(transacaoId, dados) {
    let transacoes = [];
    if (fs.existsSync(TRANSACOES_FILE)) {
        transacoes = JSON.parse(fs.readFileSync(TRANSACOES_FILE, 'utf8'));
    }
    
    const index = transacoes.findIndex(t => t.id === transacaoId);
    
    if (index === -1) {
        return false;
    }
    
    transacoes[index] = {
        ...transacoes[index],
        ...dados,
        updatedAt: new Date().toISOString()
    };
    
    fs.writeFileSync(TRANSACOES_FILE, JSON.stringify(transacoes, null, 2));
    return true;
}

// ==================== ROTAS DE CARTEIRA ====================

const MERCADO_PAGO_ACCESS_TOKEN = 'APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349';
const ARQUIVO_TRANSACOES_PIX = path.join(dirPublic, 'transacoes_pix.json');
// Executa a verificação ao ligar a API




// ==========================================
// ROTA PARA GERAR PIX (QUALQUER VALOR)
// ==========================================
// ==========================================
// BACKEND - Rota para gerar PIX com dados personalizados
// ==========================================



// Seus arquivos JSON (mantendo o padrão que você já usa)

const SAVES_USUARIOS_FILE = path.join(__dirname, 'saves_usuarios.json'); // <- MANTIDO IGUAL

// Token do LivePix (coloque no .env)
const LIVEPIX_TOKEN = 'c2156196-735c-43c5-9d71-e115c987bf40'
const LIVEPIX_CALLBACK_URL = 'https://seu-site.onrender.com/webhook/livepix'; // Ajuste


// Calcular XP (R$1 = 100 XP - ajustado)
function calcularXP(valor) {
    return Math.floor(valor * 100);
}




const LIVEPIX_API_KEY = 'c2156196-735c-43c5-9d71-e115c987bf40' // coloque sua chave aqui

// Funções auxiliares para ler e salvar JSON

// ==========================================
// GERAR PIX
// ==========================================

// ==========================================
// WEBHOOK DO LIVEPIX (ATUALIZA STATUS AUTOMATICAMENTE)
// ==========================================
app.post('/api/doacoes/webhook', async (req, res) => {
    try {
        const evento = req.body; // o Livepix envia JSON com info da transação
        const transacoes = lerJSON(ARQUIVO_TRANSACOES_PIX);
        const transacao = transacoes.find(t => t.paymentId === evento.id);
        if (!transacao) return res.status(404).send('Transação não encontrada');

        // Atualiza status
        transacao.status = evento.status; // 'pending', 'approved', 'expired'
        transacao.ultimaVerificacao = new Date().toISOString();

        // Se aprovado, adiciona XP
        if (evento.status === 'approved') {
            const saves = lerJSON(ARQUIVO_SAVES);
            if (!saves[transacao.userId]) {
                saves[transacao.userId] = { userId: transacao.userId, xp: 0, level: 1, doacoes: [] };
            }

            saves[transacao.userId].xp += transacao.xp;

            // Calcula level
            let xpRestante = saves[transacao.userId].xp;
            let novoLevel = 1;
            while (xpRestante >= Math.floor(100 * Math.pow(1.5, novoLevel - 1))) {
                xpRestante -= Math.floor(100 * Math.pow(1.5, novoLevel - 1));
                novoLevel++;
            }
            saves[transacao.userId].level = novoLevel;

            // Histórico de doações
            saves[transacao.userId].doacoes.push({
                data: new Date().toISOString(),
                valor: transacao.valor,
                xp: transacao.xp
            });

            salvarJSON(ARQUIVO_SAVES, saves);
        }

        salvarJSON(ARQUIVO_TRANSACOES_PIX, transacoes);
        res.status(200).send('OK');
    } catch (err) {
        console.error('Erro webhook:', err);
        res.status(500).send('Erro');
    }
});

// ==========================================
// VERIFICAR STATUS MANUAL
// ==========================================

app.post('/api/doacoes/gerar-pix', async (req, res) => {
    console.log('='.repeat(50));
    console.log('🔵 ROTA /api/doacoes/gerar-pix ACESSADA');
    
    try {
        const { valor, userId, expiraEm = 10 } = req.body;
        
        if (!userId) {
            return res.status(401).json({ error: 'Usuário não identificado' });
        }

        if (valor < 1) {
            return res.status(400).json({ error: 'Valor mínimo é R$ 1,00' });
        }

        const xpGanho = Math.floor(valor * 1000);

        // ==========================================
        // DADOS DO RECEBEDOR (VOCÊ ALTERA AQUI!)
        // ==========================================
        const dadosPersonalizados = {
            nome: 'MARUJO',              // 👈 Nome que aparece
            sobrenome: 'FLIX',            // 👈 Sobrenome
            documento: '12345678909',      // 👈 CPF (use um válido)
            tipoDocumento: 'CPF',          // 👈 Tipo
            email: 'financeiro@marujoflix.com', // Email
            descricao: 'Apoio Marujo Flix' // Descrição
        };

        // ==========================================
        // CRIA O PAGAMENTO
        // ==========================================
        const pagament = new payment(MERCADO_PAGO_ACCESS_TOKEN);
        
        // Passa: valor, tempo (10 min), dados personalizados
        const inf = await pagament.create_payment(valor);
        
        if (!inf || !inf.payment_id) {
            throw new Error('Falha ao gerar PIX');
        }

        // ==========================================
        // CALCULA EXPIRAÇÃO
        // ==========================================
        const agora = new Date();
        const expiracao = new Date(agora.getTime() + (expiraEm * 60 * 1000));

        // ==========================================
        // SALVA A TRANSAÇÃO
        // ==========================================
        const transacoes = lerJSON(ARQUIVO_TRANSACOES_PIX);
        
        const transacao = {
            id: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 5),
            userId: userId,
            valor: valor,
            xp: xpGanho,
            status: 'pending',
            paymentId: inf.payment_id,
            data: agora.toISOString(),
            expiraEm: expiracao.toISOString(),
            qrCode: inf.qr_code,
            copyPaste: inf.copy_paste,
            mpStatus: 'pending',
            ultimaVerificacao: agora.toISOString(),
            // Salva os dados do recebedor
            recebedor: {
                nome: `${dadosPersonalizados.nome} ${dadosPersonalizados.sobrenome}`.trim(),
                documento: dadosPersonalizados.documento
            }
        };
        
        transacoes.push(transacao);
        salvarJSON(ARQUIVO_TRANSACOES_PIX, transacoes);

        // ==========================================
        // RETORNA OS DADOS
        // ==========================================
        res.json({
            success: true,
            qrCode: inf.qr_code,
            copyPaste: inf.copy_paste,
            transactionId: transacao.id,
            expiracao: expiracao.toISOString(),
            xp: xpGanho,
            valorFormatado: `R$ ${valor.toFixed(2).replace('.', ',')}`,
            recebedor: {
                nome: transacao.recebedor.nome,
                documento: transacao.recebedor.documento
            }
        });
        
        console.log('🎉 PIX gerado com sucesso!');

    } catch (error) {
        console.error('❌ ERRO:', error);
        res.status(500).json({ error: 'Erro ao gerar PIX: ' + error.message });
    }
});
// ==========================================
// ROTA PARA VERIFICAR PAGAMENTO
// ==========================================

// ==========================================
// BACKEND - Rota de verificar status do PIX
// ==========================================
app.get('/api/doacoes/verificar/:transactionId', async (req, res) => {
    try {
        // 1. PEGA O ID DA TRANSAÇÃO DA URL
        // Ex: /api/doacoes/verificar/1772390445807-8cws9
        const { transactionId } = req.params;
        
        console.log(`🔍 Verificando transação: ${transactionId}`);
        
        // 2. LÊ O ARQUIVO JSON COM TODAS AS TRANSAÇÕES
        const transacoes = lerJSON(ARQUIVO_TRANSACOES_PIX);
        
        // 3. PROCURA A TRANSAÇÃO ESPECÍFICA PELO ID
        const transacao = transacoes.find(t => t.id === transactionId);
        
        // 4. SE NÃO ENCONTRAR, RETORNA ERRO 404
        if (!transacao) {
            console.log(`❌ Transação não encontrada: ${transactionId}`);
            return res.status(404).json({ 
                error: 'Transação não encontrada' 
            });
        }
        
        console.log(`📊 Status atual: ${transacao.status}`);
        
        // 5. VERIFICA SE JÁ EXPIROU (10 MINUTOS)
        const agora = new Date();
        const expiracao = new Date(transacao.expiraEm);
        
        // Se estiver pendente mas já passou da data de expiração
        if (transacao.status === 'pending' && agora > expiracao) {
            console.log(`⏰ Transação ${transactionId} expirada!`);
            
            // Atualiza o status para 'expired'
            transacao.status = 'expired';
            transacao.ultimaVerificacao = agora.toISOString();
            
            // Salva a alteração no arquivo
            salvarJSON(ARQUIVO_TRANSACOES_PIX, transacoes);
        }
        
        // 6. SE O STATUS FOR 'pago', JÁ FOI CONFIRMADO
        // 7. SE O STATUS FOR 'expired', EXPIRou
        // 8. SE O STATUS FOR 'pending', AINDA AGUARDANDO
        
        // 9. RETORNA OS DADOS ATUALIZados PARA O FRONTEND
        res.json({
            status: transacao.status,           // 'pending', 'pago', ou 'expired'
            xp: transacao.xp,                    // Quantidade de XP que será ganho
            valor: transacao.valor,               // Valor doado em R$
            expiraEm: transacao.expiraEm,         // Data de expiração
            paymentId: transacao.paymentId        // ID do pagamento no Mercado Pago
        });
        
        console.log(`✅ Resposta enviada: ${transacao.status}`);
        
    } catch (error) {
        // 10. SE ALGO DER ERRADO, RETORNA ERRO 500
        console.error('❌ Erro ao verificar PIX:', error);
        res.status(500).json({ 
            error: 'Erro ao verificar status do pagamento' 
        });
    }
});
app.get('/api/doacoes/verificar-pagamento/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;
        
        // Ler transações
        const transacoes = lerJSON(ARQUIVO_TRANSACOES_PIX);
        const transacao = transacoes.find(t => t.id === transactionId);
        
        if (!transacao) {
            return res.status(404).json({ error: 'Transação não encontrada' });
        }

        // Se já foi processada antes, retorna logo
        if (transacao.status !== 'pending') {
            return res.json({
                success: true,
                status: transacao.status,
                xp: transacao.xp,
                valor: transacao.valor
            });
        }

        // Verificar no Mercado Pago
        const pagament = new payment(MERCADO_PAGO_ACCESS_TOKEN);
        const status = await pagament.check_payment(transacao.paymentId);

        // Se foi aprovado AGORA
        if (status === 'approved' && transacao.status === 'pending') {
            
            // ATUALIZAR STATUS
            transacao.status = 'approved';
            transacao.dataAprovacao = new Date().toISOString();
            
            // ===== ADICIONAR XP NO saves_usuarios.json =====
            const saves = lerJSON(ARQUIVO_SAVES);
            
            if (saves[transacao.userId]) {
                // Usuário já existe
                const xpAtual = (saves[transacao.userId].xp || 0) + transacao.xp;
                saves[transacao.userId].xp = xpAtual;
                
                // Calcular novo level (MESMA FÓRMULA DO FRONT)
                let level = saves[transacao.userId].level || 1;
                let xpRestante = xpAtual;
                let novoLevel = 1;
                
                while (xpRestante >= Math.floor(100 * Math.pow(1.5, novoLevel - 1))) {
                    xpRestante -= Math.floor(100 * Math.pow(1.5, novoLevel - 1));
                    novoLevel++;
                }
                
                saves[transacao.userId].level = novoLevel;
                
                // Histórico de doações
                if (!saves[transacao.userId].doacoes) saves[transacao.userId].doacoes = [];
                saves[transacao.userId].doacoes.push({
                    data: new Date().toISOString(),
                    valor: transacao.valor,
                    xp: transacao.xp
                });
                
                salvarJSON(ARQUIVO_SAVES, saves);
                
                console.log(`✅ DOAÇÃO: ${transacao.userId} doou R$ ${transacao.valor} e ganhou ${transacao.xp} XP`);
            } else {
                // Criar novo usuário no saves (caso não exista por algum motivo)
                saves[transacao.userId] = {
                    userId: transacao.userId,
                    xp: transacao.xp,
                    level: 1,
                    doacoes: [{
                        data: new Date().toISOString(),
                        valor: transacao.valor,
                        xp: transacao.xp
                    }]
                };
                salvarJSON(ARQUIVO_SAVES, saves);
            }
            
            // Salvar transação atualizada
            salvarJSON(ARQUIVO_TRANSACOES_PIX, transacoes);
        }

        res.json({
            success: true,
            status: transacao.status,
            xp: transacao.status === 'approved' ? transacao.xp : 0,
            valor: transacao.valor
        });

    } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
        res.status(500).json({ error: 'Erro ao verificar pagamento' });
    }
});

// Crie um objeto na memória do servidor para guardar quem está assistindo


// Caminho para o arquivo JSON
const ACESSOS_FILE = path.join(__dirname,  'public', 'reprodutor_acessos.json');

// Função para carregar os dados do arquivo
function carregarAcessos() {
    try {
        if (fs.existsSync(ACESSOS_FILE)) {
            const dados = fs.readFileSync(ACESSOS_FILE, 'utf8');
            return JSON.parse(dados);
        }
    } catch (error) {
        console.error('Erro ao carregar reprodutor_acessos.json:', error);
    }
    return {}; // Retorna objeto vazio se arquivo não existir ou der erro
}

// Função para salvar os dados no arquivo
function salvarAcessos(dados) {
    try {
        fs.writeFileSync(ACESSOS_FILE, JSON.stringify(dados, null, 2), 'utf8');
    } catch (error) {
        console.error('Erro ao salvar reprodutor_acessos.json:', error);
    }
}

// Carrega os dados existentes quando o servidor inicia
let espectadoresAtivos = carregarAcessos();

// Rota para contar espectadores de um canal específico
app.get('/api/viewers/:canalId', (req, res) => {
    const canalId = req.params.canalId;
    
    // Pega o IP do usuário para identificá-lo como 1 pessoa
    const userId = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const agora = Date.now();

    // Se o canal ainda não existe no registro, cria ele
    if (!espectadoresAtivos[canalId]) {
        espectadoresAtivos[canalId] = {};
    }

    // Registra a hora exata que esse usuário deu "sinal de vida"
    espectadoresAtivos[canalId][userId] = agora;

    // Faz uma faxina: remove quem não dá sinal de vida há mais de 15 segundos
    // (15 segundos = 15000 milissegundos)
    let houveRemocao = false;
    for (let id in espectadoresAtivos[canalId]) {
        if (agora - espectadoresAtivos[canalId][id] > 14400000) { // 15 segundos
            delete espectadoresAtivos[canalId][id];
            houveRemocao = true;
        }
    }

    // Se houve remoção ou é a primeira vez, salva no arquivo
    if (houveRemocao || !fs.existsSync(ACESSOS_FILE)) {
        salvarAcessos(espectadoresAtivos);
    }

    // Conta quantos IPs sobraram na lista
    const total = Object.keys(espectadoresAtivos[canalId]).length;
    
    // Envia o número de volta para o site
    res.json({ total: total });
});

// Opcional: Rota para ver todos os acessos (protegida por senha ou só para admin)
app.get('/api/admin/acessos', (req, res) => {
    // Você pode adicionar uma verificação simples aqui
    // Exemplo: req.query.senha === 'sua_senha_secreta'
    
    const stats = {};
    
    for (let canalId in espectadoresAtivos) {
        stats[canalId] = Object.keys(espectadoresAtivos[canalId]).length;
    }
    
    res.json({
        total_usuarios_unicos: Object.keys(espectadoresAtivos).length,
        canais_ativos: stats,
        dados_completos: espectadoresAtivos
    });
});

// Opcional: Limpar acessos antigos manualmente
app.get('/api/admin/limpar-acessos', (req, res) => {
    // Limpa todos os acessos com mais de 1 hora
    const agora = Date.now();
    const UM_SEGUNDO = 1000;
    const UMA_HORA = UM_SEGUNDO * 60 * 60;
    
    for (let canalId in espectadoresAtivos) {
        for (let userId in espectadoresAtivos[canalId]) {
            if (agora - espectadoresAtivos[canalId][userId] > UMA_HORA) {
                delete espectadoresAtivos[canalId][userId];
            }
        }
        
        // Remove canais vazios
        if (Object.keys(espectadoresAtivos[canalId]).length === 0) {
            delete espectadoresAtivos[canalId];
        }
    }
    
    salvarAcessos(espectadoresAtivos);
    
    res.json({ 
        message: 'Acessos antigos removidos',
        total_canais: Object.keys(espectadoresAtivos).length
    });
});

// Rota para obter informações da carteira
app.get('/api/carteira', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ success: false, message: 'Não autorizado' });
        }
        
        const userId = req.session.user.numero;
        const carteira = obterCarteira(userId);
        
        // Obter planos disponíveis
        let planos = [];
        if (fs.existsSync(PLANOS_FILE)) {
            planos = JSON.parse(fs.readFileSync(PLANOS_FILE, 'utf8'));
        }
        
        // Obter assinaturas ativas do usuário
        let assinaturas = [];
        if (fs.existsSync(ASSINATURAS_FILE)) {
            const todasAssinaturas = JSON.parse(fs.readFileSync(ASSINATURAS_FILE, 'utf8'));
            assinaturas = todasAssinaturas.filter(a => 
                a.userId === userId && 
                a.status === 'ativa' &&
                new Date(a.validade) > new Date()
            );
        }
        
        // Obter transações recentes
        let transacoes = [];
        if (fs.existsSync(TRANSACOES_FILE)) {
            const todasTransacoes = JSON.parse(fs.readFileSync(TRANSACOES_FILE, 'utf8'));
            transacoes = todasTransacoes
                .filter(t => t.userId === userId)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 10);
        }
        
        res.json({
            success: true,
            carteira: carteira,
            planos: planos.filter(p => p.ativo),
            assinaturas: assinaturas,
            transacoes: transacoes
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao obter carteira:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Rota para criar depósito PIX
// Rota para criar depósito PIX
app.post('/api/carteira/depositar', async (req, res) => {
    try {
        console.log('=== REQUISIÇÃO DEPÓSITO PIX ===');
        console.log('Headers:', req.headers);
        console.log('Body:', req.body);
        console.log('Sessão:', req.session);
        
        if (!req.session.user) {
            console.log('Erro: Usuário não autenticado');
            return res.status(401).json({ 
                success: false, 
                message: 'Não autorizado' 
            });
        }
        
        const { valor } = req.body;
        const userId = req.session.user.numero;
        
        console.log('Usuário:', userId);
        console.log('Valor solicitado:', valor);
        
        if (!valor || valor < 5) {
            console.log('Erro: Valor mínimo não atingido');
            return res.status(400).json({ 
                success: false, 
                message: 'Valor mínimo para depósito é R$ 5,00' 
            });
        }
        
        if (valor > 1000) {
            console.log('Erro: Valor máximo excedido');
            return res.status(400).json({ 
                success: false, 
                message: 'Valor máximo para depósito é R$ 1.000,00' 
            });
        }
        
        console.log('Criando pagamento PIX...');
        
        try {
            // Criar pagamento PIX
            const pagamento = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
            console.log('Classe payment instanciada');
            
            const infoPagamento = await pagamento.create_payment(valor);
            console.log('Pagamento criado:', infoPagamento);
            
            // Criar transação
            const transacao = criarTransacao({
                userId: userId,
                tipo: 'deposito',
                valor: valor,
                status: 'pendente',
                paymentId: infoPagamento.payment_id,
                descricao: `Depósito de R$ ${valor.toFixed(2)}`,
                metadata: {
                    qrCode: infoPagamento.qr_code,
                    copyPaste: infoPagamento.copy_paste,
                    valorFormatado: `R$ ${valor.toFixed(2)}`
                }
            });
            
            console.log('Transação criada:', transacao);
            
            // Bloquear saldo (opcional)
            const carteira = obterCarteira(userId);
            console.log('Carteira antes:', carteira);
            
            atualizarCarteira(userId, {
                saldoBloqueado: carteira.saldoBloqueado + valor
            });
            
            console.log('Carteira atualizada');
            
            res.json({
                success: true,
                message: 'Depósito criado com sucesso',
                transacao: transacao,
                pagamento: {
                    qrCode: infoPagamento.qr_code,
                    copyPaste: infoPagamento.copy_paste,
                    valor: valor
                }
            });
            
            console.log('Resposta enviada com sucesso');
            
        } catch (paymentError) {
            console.error('Erro no pagamento:', paymentError);
            console.error('Stack trace:', paymentError.stack);
            throw paymentError;
        }
        
    } catch (error) {
        console.error('❌ ERRO GERAL AO CRIAR DEPÓSITO:', error);
        console.error('Stack trace:', error.stack);
        console.error('Error message:', error.message);
        
        res.status(500).json({
            success: false,
            message: 'Erro ao criar depósito: ' + (error.message || 'Erro desconhecido')
        });
    }
});



// Rota para comprar plano
app.post('/api/carteira/comprar-plano', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ success: false, message: 'Não autorizado' });
        }
        
        const { planoId, numeroWhatsApp } = req.body;
        const userId = req.session.user.numero;
        
        if (!planoId || !numeroWhatsApp) {
            return res.status(400).json({ 
                success: false, 
                message: 'Plano e número do WhatsApp são obrigatórios' 
            });
        }
        
        // Verificar se o número está conectado
        const sessaoStatus = sessionManager.getSessionStatus(numeroWhatsApp.replace(/\D/g, ''));
        if (!sessaoStatus || !sessaoStatus.isActive) {
            return res.status(400).json({ 
                success: false, 
                message: 'Número do WhatsApp não está conectado. Conecte primeiro para comprar o plano.' 
            });
        }
        
        // Obter plano
        let planos = [];
        if (fs.existsSync(PLANOS_FILE)) {
            planos = JSON.parse(fs.readFileSync(PLANOS_FILE, 'utf8'));
        }
        
        const plano = planos.find(p => p.id === planoId && p.ativo);
        
        if (!plano) {
            return res.status(404).json({ 
                success: false, 
                message: 'Plano não encontrado ou indisponível' 
            });
        }
        
        // Verificar saldo
        const carteira = obterCarteira(userId);
        
        if (carteira.saldo < plano.preco) {
            return res.status(400).json({ 
                success: false, 
                message: `Saldo insuficiente. Necessário: R$ ${plano.preco.toFixed(2)}. Disponível: R$ ${carteira.saldo.toFixed(2)}` 
            });
        }
        
        // Verificar se já tem assinatura ativa para este número
        let assinaturas = [];
        if (fs.existsSync(ASSINATURAS_FILE)) {
            assinaturas = JSON.parse(fs.readFileSync(ASSINATURAS_FILE, 'utf8'));
        }
        
        const assinaturaAtiva = assinaturas.find(a => 
            a.numeroWhatsApp === numeroWhatsApp && 
            a.status === 'ativa' &&
            new Date(a.validade) > new Date()
        );
        
        if (assinaturaAtiva) {
            return res.status(400).json({ 
                success: false, 
                message: 'Este número já possui uma assinatura ativa' 
            });
        }
        
        // Calcular data de validade
        const validade = new Date();
        validade.setDate(validade.getDate() + plano.dias);
        
        // Criar assinatura
        const assinatura = {
            id: crypto.randomBytes(16).toString('hex'),
            userId: userId,
            numeroWhatsApp: numeroWhatsApp,
            planoId: planoId,
            planoNome: plano.nome,
            dias: plano.dias,
            preco: plano.preco,
            status: 'ativa',
            dataCompra: new Date().toISOString(),
            validade: validade.toISOString(),
            createdAt: new Date().toISOString()
        };
        
        assinaturas.push(assinatura);
        fs.writeFileSync(ASSINATURAS_FILE, JSON.stringify(assinaturas, null, 2));
        
        // Debitar saldo
        atualizarCarteira(userId, {
            saldo: carteira.saldo - plano.preco,
            totalGasto: carteira.totalGasto + plano.preco
        });
        
        // Criar transação
        criarTransacao({
            userId: userId,
            tipo: 'assinatura',
            valor: plano.preco,
            status: 'aprovado',
            descricao: `Assinatura ${plano.nome} para ${numeroWhatsApp}`,
            metadata: {
                planoId: planoId,
                planoNome: plano.nome,
                numeroWhatsApp: numeroWhatsApp,
                dias: plano.dias,
                validade: validade.toISOString()
            }
        });
        
        // Atualizar status da sessão para premium
        const sessionPath = path.join(__dirname, 'public/database/qr-code', numeroWhatsApp.replace(/\D/g, ''));
        const configFile = path.join(sessionPath, 'config.json');
        
        if (fs.existsSync(configFile)) {
            let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
            config.premium = true;
            config.plano = planoId;
            config.validade = validade.toISOString();
            config.assinaturaId = assinatura.id;
            fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
        }
        
        console.log(colors.green(`🎉 Plano comprado: ${userId} - ${plano.nome} para ${numeroWhatsApp}`));
        
        res.json({
            success: true,
            message: `Plano ${plano.nome} adquirido com sucesso!`,
            assinatura: assinatura,
            saldoAtual: carteira.saldo - plano.preco
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao comprar plano:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao comprar plano: ' + error.message
        });
    }
});

// Rota para verificar assinaturas
app.get('/api/carteira/assinaturas', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ success: false, message: 'Não autorizado' });
        }
        
        const userId = req.session.user.numero;
        
        let assinaturas = [];
        if (fs.existsSync(ASSINATURAS_FILE)) {
            const todasAssinaturas = JSON.parse(fs.readFileSync(ASSINATURAS_FILE, 'utf8'));
            assinaturas = todasAssinaturas
                .filter(a => a.userId === userId)
                .sort((a, b) => new Date(b.dataCompra) - new Date(a.dataCompra));
        }
        
        res.json({
            success: true,
            assinaturas: assinaturas
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao obter assinaturas:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao obter assinaturas'
        });
    }
});

// Rota para verificar status de assinatura de um número
app.get('/api/carteira/verificar-assinatura/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        const numeroLimpo = numero.replace(/\D/g, '');
        
        let assinaturas = [];
        if (fs.existsSync(ASSINATURAS_FILE)) {
            assinaturas = JSON.parse(fs.readFileSync(ASSINATURAS_FILE, 'utf8'));
        }
        
        const assinatura = assinaturas.find(a => 
            a.numeroWhatsApp === numeroLimpo && 
            a.status === 'ativa' &&
            new Date(a.validade) > new Date()
        );
        
        res.json({
            success: true,
            possuiAssinatura: !!assinatura,
            assinatura: assinatura || null,
            estaAtiva: !!assinatura
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao verificar assinatura:'), error);
        res.status(500).json({
            success: false,
            message: 'Erro ao verificar assinatura'
        });
    }
});

// ==================== ROTA PARA PÁGINA DA CARTEIRA ====================

app.get('/carteira', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?redirect=/carteira');
    }
    
    try {
        // Obter dados da carteira
        const userId = req.session.user.numero;
        const carteira = obterCarteira(userId);
        
        // Obter sessões do usuário
        const numeros = await pegarNumeros();
        const sessoesUsuario = numeros
            .map(numero => sessionManager.getSessionStatus(numero))
            .filter(sessao => sessao.config?.numero === userId || sessao.status?.session === userId);
        
        // Obter planos
        let planos = [];
        if (fs.existsSync(PLANOS_FILE)) {
            planos = JSON.parse(fs.readFileSync(PLANOS_FILE, 'utf8')).filter(p => p.ativo);
        }
        
        res.render('carteira', {
            title: 'Minha Carteira',
            site_nome: site_nome,
            user: req.session.user,
            carteira: carteira,
            sessoes: sessoesUsuario,
            planos: planos,
            moment: moment
        });
        
    } catch (error) {
        console.error(colors.red('❌ Erro ao carregar carteira:'), error);
        res.status(500).send('Erro ao carregar a página da carteira');
    }
});

// ==================== WEBHOOK PARA PAGAMENTOS ====================

app.post('/webhook/pagamento', async (req, res) => {
    try {
        const { type, data } = req.body;
        
        if (type === 'payment') {
            // Obter detalhes do pagamento
            const pagamento = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');
            const paymentInfo = await pagamento.get_payment(data.id);
            
            if (paymentInfo.status === 'approved') {
                // Encontrar transação pelo paymentId
                let transacoes = [];
                if (fs.existsSync(TRANSACOES_FILE)) {
                    transacoes = JSON.parse(fs.readFileSync(TRANSACOES_FILE, 'utf8'));
                }
                
                const transacao = transacoes.find(t => t.paymentId === data.id);
                
                if (transacao && transacao.status === 'pendente') {
                    // Atualizar transação
                    atualizarTransacao(transacao.id, {
                        status: 'aprovado',
                        aprovadoEm: new Date().toISOString()
                    });
                    
                    // Atualizar carteira
                    const carteira = obterCarteira(transacao.userId);
                    atualizarCarteira(transacao.userId, {
                        saldo: carteira.saldo + transacao.valor,
                        saldoBloqueado: carteira.saldoBloqueado - transacao.valor,
                        totalDepositado: carteira.totalDepositado + transacao.valor
                    });
                    
                    console.log(colors.green(`💰 Webhook: Depósito aprovado via PIX - ${transacao.userId} - R$ ${transacao.valor}`));
                }
            }
        }
        
        res.status(200).send('OK');
        
    } catch (error) {
        console.error(colors.red('❌ Erro no webhook:'), error);
        res.status(500).send('Erro no webhook');
    }
});


// ===== ROTA PRINCIPAL DO REPRODUTOR =====

app.get('/marujodigital', (req, res) => {
    const usuario = req.session.user || {};

    // Detectar IP
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');
    console.log('🎬 IP do usuário no Stream Pro:', ip);

    // Hora exata em Brasília
    const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');
    const diaSemana = moment().tz("America/Sao_Paulo").format('dddd');
    
    // Verificar dispositivo
    const userAgent = req.headers['user-agent'] || 'Desconhecido';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop';

    // Estatísticas avançadas de acesso
    const acessosPath = path.join(__dirname, 'public', 'streampro_acessos.json');
    let stats = { 
        totalAcessos: 0, 
        acessosHoje: 0,
        dispositivos: { mobile: 0, desktop: 0 },
        horariosPico: {},
        ultimosAcessos: [] 
    };

    try {
        if (fs.existsSync(acessosPath)) {
            const raw = fs.readFileSync(acessosPath, 'utf8');
            try {
                stats = JSON.parse(raw);
            } catch (e) {
                console.warn('⚠️ streampro_acessos.json corrompido. Recriando...');
                stats = { totalAcessos: 0, acessosHoje: 0, dispositivos: { mobile: 0, desktop: 0 }, horariosPico: {}, ultimosAcessos: [] };
            }
        }

        stats.totalAcessos++;
        
        // Contar acesso hoje
        const hoje = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD');
        if (!stats.acessosHoje || !stats.ultimoReset || stats.ultimoReset !== hoje) {
            stats.acessosHoje = 0;
            stats.ultimoReset = hoje;
        }
        stats.acessosHoje++;

        // Contar dispositivo
        if (isMobile) {
            stats.dispositivos.mobile = (stats.dispositivos.mobile || 0) + 1;
        } else {
            stats.dispositivos.desktop = (stats.dispositivos.desktop || 0) + 1;
        }

        // Registrar horário de pico
        const hora = moment().tz("America/Sao_Paulo").format('HH:00');
        stats.horariosPico[hora] = (stats.horariosPico[hora] || 0) + 1;

        const novoRegistro = {
            ip,
            horario: dataHoraBrasil,
            diaSemana: diaSemana,
            usuario: usuario.numero || 'visitante',
            dispositivo: deviceType,
            userAgent: userAgent.substring(0, 100)
        };

        stats.ultimosAcessos.unshift(novoRegistro);

        // Manter apenas últimos 200 acessos
        

        fs.writeFileSync(acessosPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Erro com streampro_acessos.json:', err.message);
    }

    // Histórico de reproduções do usuário
    let historicoUsuario = [];
    let estatisticasUsuario = {
        totalReproducoes: 0,
        tempoTotal: 0,
        streamsSucesso: 0,
        streamsFalha: 0
    };
    
    if (usuario.numero) {
        const historicoPath = path.join(__dirname, 'public', 'streampro_historico.json');
        try {
            if (fs.existsSync(historicoPath)) {
                const historicoTotal = JSON.parse(fs.readFileSync(historicoPath, 'utf8'));
                historicoUsuario = historicoTotal
                    .filter(h => h.usuarioId === usuario.numero)
                    .slice(0, 15)
                    .map(item => ({
                        ...item,
                        dataFormatada: moment(item.data).format('DD/MM HH:mm'),
                        duracaoFormatada: formatarDuracao(item.duracao)
                    }));
                
                // Calcular estatísticas
                estatisticasUsuario.totalReproducoes = historicoUsuario.length;
                estatisticasUsuario.tempoTotal = historicoUsuario.reduce((sum, h) => sum + (h.duracao || 0), 0);
                estatisticasUsuario.streamsSucesso = historicoUsuario.filter(h => h.status === 'success').length;
                estatisticasUsuario.streamsFalha = historicoUsuario.filter(h => h.status === 'error').length;
            }
        } catch (err) {
            console.error('Erro ao ler streampro_historico.json:', err);
        }
    }

    // Playlist do usuário
    let playlistUsuario = [];
    
    if (usuario.numero) {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        try {
            if (fs.existsSync(playlistPath)) {
                const playlistsData = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
                playlistUsuario = playlistsData
                    .filter(p => p.usuarioId === usuario.numero && p.ativo !== false)
                    .map(item => ({
                        ...item,
                        dataFormatada: moment(item.dataAdicao).format('DD/MM')
                    }));
            }
        } catch (err) {
            console.error('Erro ao ler streampro_playlists.json:', err);
        }
    }

    // Dados do usuário
    let usuarioCompleto = {};
    if (usuario.numero) {
        const registroPath = path.join(__dirname, 'public', 'registro.json');
        try {
            if (fs.existsSync(registroPath)) {
                const dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
                usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};
            }
        } catch (err) {
            console.error('Erro ao ler registro.json:', err);
        }
    }

    // Estatísticas gerais do sistema
    const estatisticasSistema = {
        totalUsuarios: stats.totalAcessos,
        onlineAgora: Math.floor(stats.acessosHoje / 10) + 5, // Simulação
        dispositivoMaisUsado: stats.dispositivos.mobile > stats.dispositivos.desktop ? 'Mobile' : 'Desktop',
        horarioPico: Object.keys(stats.horariosPico).reduce((a, b) => 
            stats.horariosPico[a] > stats.horariosPico[b] ? a : b
        ) || '18:00'
    };

    // URLs de exemplo categorizadas
    const exemplosCategorizados = {
        filmes: [
            {
                nome: "Filme em Alta Qualidade",
                url: "http://hdx.net.ua:8080/movie/98611646/00722965/2225546.mp4",
                tipo: "MP4",
                qualidade: "HD",
                categoria: "Ação"
            },
            {
                nome: "Filme 4K Demo",
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                tipo: "MP4",
                qualidade: "4K",
                categoria: "Animação"
            }
        ],
        series: [
            {
                nome: "Série HD",
                url: "http://exemplo.com/series/ep1.mp4",
                tipo: "MP4",
                qualidade: "HD",
                categoria: "Drama"
            }
        ],
        esportes: [
            {
                nome: "Jogo ao Vivo",
                url: "http://exemplo.com/live/sport.m3u8",
                tipo: "HLS",
                qualidade: "HD",
                categoria: "Futebol"
            }
        ],
        documentarios: [
            {
                nome: "Documentário Natureza",
                url: "http://exemplo.com/docs/nature.m3u8",
                tipo: "HLS",
                qualidade: "Full HD",
                categoria: "Educação"
            }
        ]
    };

    // Agentes disponíveis para o frontend
    const agentesDisponiveis = [
        {
            id: 'vlc',
            nome: 'VLC Player',
            icone: 'fab fa-vlc',
            descricao: 'Otimizado para streams MP4 e M3U8',
            recomendado: true
        },
        {
            id: 'lavf',
            nome: 'FFmpeg Lavf',
            icone: 'fas fa-film',
            descricao: 'Ideal para streams diretos',
            recomendado: true
        },
        {
            id: 'exoplayer',
            nome: 'Android ExoPlayer',
            icone: 'fab fa-android',
            descricao: 'Compatível com Android/Google TV'
        },
        {
            id: 'quicktime',
            nome: 'Apple QuickTime',
            icone: 'fab fa-apple',
            descricao: 'Para streams Apple/iOS'
        },
        {
            id: 'android',
            nome: 'Android Media Player',
            icone: 'fas fa-mobile-alt',
            descricao: 'Player nativo Android'
        }
    ];

    // Renderizar a página do Stream Pro
    res.render('marujodigital', {
        // Metadados do site
        site_nome: "Stream Pro",
        site_descricao: "Reprodutor Inteligente de Mídia - Tecnologia Futurista",
        site_keywords: "streaming, player, vídeo, m3u8, mp4, hls, reprodutor",
        site_author: "Stream Pro Team",
        
        // Dados do usuário
        username: usuarioCompleto.nome || usuario.nome || 'Visitante',
        numero: usuario.numero || '',
        foto: usuarioCompleto.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
        golds: usuario.golds || 0,
        globalRank: usuario.globalRank || '',
        isAdmin: usuario.isAdmin || false,
        
        // Estatísticas
        visitas: stats.totalAcessos,
        acessosHoje: stats.acessosHoje,
        estatisticasSistema: estatisticasSistema,
        estatisticasUsuario: estatisticasUsuario,
        
        // Dados do usuário
        historicoUsuario: historicoUsuario,
        playlistUsuario: playlistUsuario,
        
        // Configurações do reprodutor
        planoUsuario: {
            tipo: "Premium",
            nome: "Stream Pro Unlimited",
            icone: "fas fa-crown",
            cor: "var(--primary)",
            recursos: [
                "🎬 Reprodução ilimitada 24/7",
                "⚡ Qualidade até 4K UHD",
                "💾 Playlist ilimitada",
                "🛡️ Multi-agente inteligente",
                "📊 Estatísticas avançadas",
                "🔒 Privacidade total"
            ],
            slogan: "Tecnologia futurista para seus streams"
        },
        
        // Interface
        podeReproduzir: true,
        horasRestantes: "Ilimitadas",
        
        // Recursos disponíveis
        recursos: [
            { icone: "fas fa-play", texto: "Reproduza qualquer link MP4/M3U8" },
            { icone: "fas fa-save", texto: "Playlist inteligente com categorias" },
            { icone: "fas fa-hd", texto: "Suporte a 4K, HLS e DASH" },
            { icone: "fas fa-robot", texto: "Multi-agente automático" },
            { icone: "fas fa-chart-line", texto: "Estatísticas em tempo real" },
            { icone: "fas fa-shield-alt", texto: "Conexão segura e privada" }
        ],
        
        // URLs e exemplos
        exemplosCategorizados: exemplosCategorizados,
        urlExemplo: "http://hdx.net.ua:8080/movie/98611646/00722965/2225546.mp4",
        
        // Agentes disponíveis
        agentesDisponiveis: agentesDisponiveis,
        agentePadrao: 'vlc',
        
        // Informações técnicas
        dataHoraBrasil: dataHoraBrasil,
        ip: ip,
        dispositivo: deviceType,
        userAgent: userAgent.substring(0, 50) + '...',
        
        // Categorias para playlist
        categoriasPlaylist: [
            { id: 'filmes', nome: 'Filmes', icone: 'fas fa-film', cor: '#ff3366' },
            { id: 'series', nome: 'Séries', icone: 'fas fa-tv', cor: '#3366ff' },
            { id: 'esportes', nome: 'Esportes', icone: 'fas fa-futbol', cor: '#00cc66' },
            { id: 'documentarios', nome: 'Documentários', icone: 'fas fa-book-open', cor: '#ffcc00' },
            { id: 'musica', nome: 'Música', icone: 'fas fa-music', cor: '#9966ff' },
            { id: 'outros', nome: 'Outros', icone: 'fas fa-folder', cor: '#8a8ac5' }
        ],
        
        // Estatísticas visuais
        statsCards: [
            {
                titulo: "Streams Hoje",
                valor: stats.acessosHoje,
                icone: "fas fa-play-circle",
                cor: "var(--primary)",
                trend: "up"
            },
            {
                titulo: "Usuários Online",
                valor: estatisticasSistema.onlineAgora,
                icone: "fas fa-users",
                cor: "var(--success)",
                trend: "stable"
            },
            {
                titulo: "Taxa Sucesso",
                valor: historicoUsuario.length > 0 ? 
                    Math.round((estatisticasUsuario.streamsSucesso / historicoUsuario.length) * 100) + '%' : '100%',
                icone: "fas fa-chart-line",
                cor: "var(--accent)",
                trend: "up"
            },
            {
                titulo: "Dispositivo",
                valor: deviceType,
                icone: isMobile ? "fas fa-mobile-alt" : "fas fa-desktop",
                cor: "var(--info)",
                trend: "none"
            }
        ]
    });
});

app.get('/streampro', (req, res) => {
    const usuario = req.session.user || {};

    // Detectar IP
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');
    console.log('🎬 IP do usuário no Stream Pro:', ip);

    // Hora exata em Brasília
    const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');
    const diaSemana = moment().tz("America/Sao_Paulo").format('dddd');
    
    // Verificar dispositivo
    const userAgent = req.headers['user-agent'] || 'Desconhecido';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop';

    // Estatísticas avançadas de acesso
    const acessosPath = path.join(__dirname, 'public', 'streampro_acessos.json');
    let stats = { 
        totalAcessos: 0, 
        acessosHoje: 0,
        dispositivos: { mobile: 0, desktop: 0 },
        horariosPico: {},
        ultimosAcessos: [] 
    };

    try {
        if (fs.existsSync(acessosPath)) {
            const raw = fs.readFileSync(acessosPath, 'utf8');
            try {
                stats = JSON.parse(raw);
            } catch (e) {
                console.warn('⚠️ streampro_acessos.json corrompido. Recriando...');
                stats = { totalAcessos: 0, acessosHoje: 0, dispositivos: { mobile: 0, desktop: 0 }, horariosPico: {}, ultimosAcessos: [] };
            }
        }

        stats.totalAcessos++;
        
        // Contar acesso hoje
        const hoje = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD');
        if (!stats.acessosHoje || !stats.ultimoReset || stats.ultimoReset !== hoje) {
            stats.acessosHoje = 0;
            stats.ultimoReset = hoje;
        }
        stats.acessosHoje++;

        // Contar dispositivo
        if (isMobile) {
            stats.dispositivos.mobile = (stats.dispositivos.mobile || 0) + 1;
        } else {
            stats.dispositivos.desktop = (stats.dispositivos.desktop || 0) + 1;
        }

        // Registrar horário de pico
        const hora = moment().tz("America/Sao_Paulo").format('HH:00');
        stats.horariosPico[hora] = (stats.horariosPico[hora] || 0) + 1;

        const novoRegistro = {
            ip,
            horario: dataHoraBrasil,
            diaSemana: diaSemana,
            usuario: usuario.numero || 'visitante',
            dispositivo: deviceType,
            userAgent: userAgent.substring(0, 100)
        };

        stats.ultimosAcessos.unshift(novoRegistro);

        // Manter apenas últimos 200 acessos
        

        fs.writeFileSync(acessosPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Erro com streampro_acessos.json:', err.message);
    }

    // Histórico de reproduções do usuário
    let historicoUsuario = [];
    let estatisticasUsuario = {
        totalReproducoes: 0,
        tempoTotal: 0,
        streamsSucesso: 0,
        streamsFalha: 0
    };
    
    if (usuario.numero) {
        const historicoPath = path.join(__dirname, 'public', 'streampro_historico.json');
        try {
            if (fs.existsSync(historicoPath)) {
                const historicoTotal = JSON.parse(fs.readFileSync(historicoPath, 'utf8'));
                historicoUsuario = historicoTotal
                    .filter(h => h.usuarioId === usuario.numero)
                    .slice(0, 15)
                    .map(item => ({
                        ...item,
                        dataFormatada: moment(item.data).format('DD/MM HH:mm'),
                        duracaoFormatada: formatarDuracao(item.duracao)
                    }));
                
                // Calcular estatísticas
                estatisticasUsuario.totalReproducoes = historicoUsuario.length;
                estatisticasUsuario.tempoTotal = historicoUsuario.reduce((sum, h) => sum + (h.duracao || 0), 0);
                estatisticasUsuario.streamsSucesso = historicoUsuario.filter(h => h.status === 'success').length;
                estatisticasUsuario.streamsFalha = historicoUsuario.filter(h => h.status === 'error').length;
            }
        } catch (err) {
            console.error('Erro ao ler streampro_historico.json:', err);
        }
    }

    // Playlist do usuário
    let playlistUsuario = [];
    
    if (usuario.numero) {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        try {
            if (fs.existsSync(playlistPath)) {
                const playlistsData = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
                playlistUsuario = playlistsData
                    .filter(p => p.usuarioId === usuario.numero && p.ativo !== false)
                    .map(item => ({
                        ...item,
                        dataFormatada: moment(item.dataAdicao).format('DD/MM')
                    }));
            }
        } catch (err) {
            console.error('Erro ao ler streampro_playlists.json:', err);
        }
    }

    // Dados do usuário
    let usuarioCompleto = {};
    if (usuario.numero) {
        const registroPath = path.join(__dirname, 'public', 'registro.json');
        try {
            if (fs.existsSync(registroPath)) {
                const dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
                usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};
            }
        } catch (err) {
            console.error('Erro ao ler registro.json:', err);
        }
    }

    // Estatísticas gerais do sistema
    const estatisticasSistema = {
        totalUsuarios: stats.totalAcessos,
        onlineAgora: Math.floor(stats.acessosHoje / 10) + 5, // Simulação
        dispositivoMaisUsado: stats.dispositivos.mobile > stats.dispositivos.desktop ? 'Mobile' : 'Desktop',
        horarioPico: Object.keys(stats.horariosPico).reduce((a, b) => 
            stats.horariosPico[a] > stats.horariosPico[b] ? a : b
        ) || '18:00'
    };

    // URLs de exemplo categorizadas
    const exemplosCategorizados = {
        filmes: [
            {
                nome: "Filme em Alta Qualidade",
                url: "http://hdx.net.ua:8080/movie/98611646/00722965/2225546.mp4",
                tipo: "MP4",
                qualidade: "HD",
                categoria: "Ação"
            },
            {
                nome: "Filme 4K Demo",
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                tipo: "MP4",
                qualidade: "4K",
                categoria: "Animação"
            }
        ],
        series: [
            {
                nome: "Série HD",
                url: "http://exemplo.com/series/ep1.mp4",
                tipo: "MP4",
                qualidade: "HD",
                categoria: "Drama"
            }
        ],
        esportes: [
            {
                nome: "Jogo ao Vivo",
                url: "http://exemplo.com/live/sport.m3u8",
                tipo: "HLS",
                qualidade: "HD",
                categoria: "Futebol"
            }
        ],
        documentarios: [
            {
                nome: "Documentário Natureza",
                url: "http://exemplo.com/docs/nature.m3u8",
                tipo: "HLS",
                qualidade: "Full HD",
                categoria: "Educação"
            }
        ]
    };

    // Agentes disponíveis para o frontend
    const agentesDisponiveis = [
        {
            id: 'vlc',
            nome: 'VLC Player',
            icone: 'fab fa-vlc',
            descricao: 'Otimizado para streams MP4 e M3U8',
            recomendado: true
        },
        {
            id: 'lavf',
            nome: 'FFmpeg Lavf',
            icone: 'fas fa-film',
            descricao: 'Ideal para streams diretos',
            recomendado: true
        },
        {
            id: 'exoplayer',
            nome: 'Android ExoPlayer',
            icone: 'fab fa-android',
            descricao: 'Compatível com Android/Google TV'
        },
        {
            id: 'quicktime',
            nome: 'Apple QuickTime',
            icone: 'fab fa-apple',
            descricao: 'Para streams Apple/iOS'
        },
        {
            id: 'android',
            nome: 'Android Media Player',
            icone: 'fas fa-mobile-alt',
            descricao: 'Player nativo Android'
        }
    ];

    // Renderizar a página do Stream Pro
    res.render('streampro', {
        // Metadados do site
        site_nome: "Stream Pro",
        site_descricao: "Reprodutor Inteligente de Mídia - Tecnologia Futurista",
        site_keywords: "streaming, player, vídeo, m3u8, mp4, hls, reprodutor",
        site_author: "Stream Pro Team",
        
        // Dados do usuário
        username: usuarioCompleto.nome || usuario.nome || 'Visitante',
        numero: usuario.numero || '',
        foto: usuarioCompleto.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
        golds: usuario.golds || 0,
        globalRank: usuario.globalRank || '',
        isAdmin: usuario.isAdmin || false,
        
        // Estatísticas
        visitas: stats.totalAcessos,
        acessosHoje: stats.acessosHoje,
        estatisticasSistema: estatisticasSistema,
        estatisticasUsuario: estatisticasUsuario,
        
        // Dados do usuário
        historicoUsuario: historicoUsuario,
        playlistUsuario: playlistUsuario,
        
        // Configurações do reprodutor
        planoUsuario: {
            tipo: "Premium",
            nome: "Stream Pro Unlimited",
            icone: "fas fa-crown",
            cor: "var(--primary)",
            recursos: [
                "🎬 Reprodução ilimitada 24/7",
                "⚡ Qualidade até 4K UHD",
                "💾 Playlist ilimitada",
                "🛡️ Multi-agente inteligente",
                "📊 Estatísticas avançadas",
                "🔒 Privacidade total"
            ],
            slogan: "Tecnologia futurista para seus streams"
        },
        
        // Interface
        podeReproduzir: true,
        horasRestantes: "Ilimitadas",
        
        // Recursos disponíveis
        recursos: [
            { icone: "fas fa-play", texto: "Reproduza qualquer link MP4/M3U8" },
            { icone: "fas fa-save", texto: "Playlist inteligente com categorias" },
            { icone: "fas fa-hd", texto: "Suporte a 4K, HLS e DASH" },
            { icone: "fas fa-robot", texto: "Multi-agente automático" },
            { icone: "fas fa-chart-line", texto: "Estatísticas em tempo real" },
            { icone: "fas fa-shield-alt", texto: "Conexão segura e privada" }
        ],
        
        // URLs e exemplos
        exemplosCategorizados: exemplosCategorizados,
        urlExemplo: "http://hdx.net.ua:8080/movie/98611646/00722965/2225546.mp4",
        
        // Agentes disponíveis
        agentesDisponiveis: agentesDisponiveis,
        agentePadrao: 'vlc',
        
        // Informações técnicas
        dataHoraBrasil: dataHoraBrasil,
        ip: ip,
        dispositivo: deviceType,
        userAgent: userAgent.substring(0, 50) + '...',
        
        // Categorias para playlist
        categoriasPlaylist: [
            { id: 'filmes', nome: 'Filmes', icone: 'fas fa-film', cor: '#ff3366' },
            { id: 'series', nome: 'Séries', icone: 'fas fa-tv', cor: '#3366ff' },
            { id: 'esportes', nome: 'Esportes', icone: 'fas fa-futbol', cor: '#00cc66' },
            { id: 'documentarios', nome: 'Documentários', icone: 'fas fa-book-open', cor: '#ffcc00' },
            { id: 'musica', nome: 'Música', icone: 'fas fa-music', cor: '#9966ff' },
            { id: 'outros', nome: 'Outros', icone: 'fas fa-folder', cor: '#8a8ac5' }
        ],
        
        // Estatísticas visuais
        statsCards: [
            {
                titulo: "Streams Hoje",
                valor: stats.acessosHoje,
                icone: "fas fa-play-circle",
                cor: "var(--primary)",
                trend: "up"
            },
            {
                titulo: "Usuários Online",
                valor: estatisticasSistema.onlineAgora,
                icone: "fas fa-users",
                cor: "var(--success)",
                trend: "stable"
            },
            {
                titulo: "Taxa Sucesso",
                valor: historicoUsuario.length > 0 ? 
                    Math.round((estatisticasUsuario.streamsSucesso / historicoUsuario.length) * 100) + '%' : '100%',
                icone: "fas fa-chart-line",
                cor: "var(--accent)",
                trend: "up"
            },
            {
                titulo: "Dispositivo",
                valor: deviceType,
                icone: isMobile ? "fas fa-mobile-alt" : "fas fa-desktop",
                cor: "var(--info)",
                trend: "none"
            }
        ]
    });
});
// Rota para links formatados como: br2.bronxyshost.com:4009/streampro/URL_DO_VIDEO

// ===== ROTAS API PARA O STREAM PRO =====

// Salvar na playlist
app.post('/api/streampro/playlist/salvar', (req, res) => {
    const { titulo, url, categoria, notas } = req.body;
    const usuario = req.session.user;
    
    if (!usuario?.numero) {
        return res.status(401).json({ 
            success: false, 
            error: "Faça login para salvar na playlist",
            code: "AUTH_REQUIRED"
        });
    }
    
    if (!titulo || !url) {
        return res.status(400).json({ 
            success: false, 
            error: "Título e URL são obrigatórios",
            code: "INVALID_DATA"
        });
    }
    
    try {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlists = [];
        
        if (fs.existsSync(playlistPath)) {
            playlists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
        }
        
        const novoItem = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            usuarioId: usuario.numero,
            titulo: titulo,
            url: url,
            categoria: categoria || "outros",
            notas: notas || "",
            dataAdicao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString(),
            ativo: true,
            favorito: false,
            playCount: 0
        };
        
        playlists.push(novoItem);
        fs.writeFileSync(playlistPath, JSON.stringify(playlists, null, 2));
        
        res.json({ 
            success: true, 
            message: "Item salvo na playlist com sucesso!",
            item: {
                ...novoItem,
                dataFormatada: moment(novoItem.dataAdicao).format('DD/MM HH:mm')
            }
        });
    } catch (error) {
        console.error('Erro ao salvar playlist:', error);
        res.status(500).json({ 
            success: false, 
            error: "Erro interno ao salvar na playlist",
            code: "INTERNAL_ERROR"
        });
    }
});

// Registrar reprodução
app.post('/api/streampro/reproducao/registrar', (req, res) => {
    const { url, titulo, duracao, qualidade, status, agente } = req.body;
    const usuario = req.session.user;
    
    try {
        const historicoPath = path.join(__dirname, 'public', 'streampro_historico.json');
        let historico = [];
        
        if (fs.existsSync(historicoPath)) {
            historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8'));
        }
        
        const novoRegistro = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            usuarioId: usuario?.numero || 'anonimo',
            url: url || 'desconhecido',
            titulo: titulo || 'Stream sem título',
            duracao: duracao || 0,
            qualidade: qualidade || 'desconhecida',
            status: status || 'success',
            agente: agente || 'default',
            data: new Date().toISOString(),
            ip: req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress,
            userAgent: req.headers['user-agent']?.substring(0, 100) || 'desconhecido'
        };
        
        historico.unshift(novoRegistro);
        
        // Limitar histórico
        if (historico.length > 1000) {
            historico = historico.slice(0, 1000);
        }
        
        fs.writeFileSync(historicoPath, JSON.stringify(historico, null, 2));
        
        res.json({ 
            success: true, 
            message: "Reprodução registrada",
            registro: novoRegistro
        });
    } catch (error) {
        console.error('Erro ao registrar reprodução:', error);
        res.json({ success: true }); // Não falha a reprodução
    }
});

// Obter playlist do usuário
app.get('/api/streampro/playlist', (req, res) => {
    const usuario = req.session.user;
    
    try {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlist = [];
        
        if (fs.existsSync(playlistPath)) {
            const allPlaylists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
            playlist = allPlaylists
                .filter(p => p.usuarioId === usuario?.numero && p.ativo !== false)
                .map(item => ({
                    ...item,
                    dataFormatada: moment(item.dataAdicao).format('DD/MM HH:mm'),
                    categoriaInfo: getCategoriaInfo(item.categoria)
                }));
        }
        
        res.json({ 
            success: true, 
            playlist: playlist,
            total: playlist.length
        });
    } catch (error) {
        res.json({ 
            success: false, 
            playlist: [],
            error: "Erro ao carregar playlist"
        });
    }
});

// Remover da playlist
app.delete('/api/streampro/playlist/:id', (req, res) => {
    const { id } = req.params;
    const usuario = req.session.user;
    
    if (!usuario?.numero) {
        return res.status(401).json({ 
            success: false, 
            error: "Não autorizado"
        });
    }
    
    try {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlists = [];
        
        if (fs.existsSync(playlistPath)) {
            playlists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
        }
        
        // Marcar como inativo em vez de remover
        const playlistAtualizada = playlists.map(item => {
            if (item.id === id && item.usuarioId === usuario.numero) {
                return { ...item, ativo: false, dataAtualizacao: new Date().toISOString() };
            }
            return item;
        });
        
        fs.writeFileSync(playlistPath, JSON.stringify(playlistAtualizada, null, 2));
        
        res.json({ 
            success: true, 
            message: "Item removido da playlist"
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: "Erro ao remover item"
        });
    }
});

// Atualizar item da playlist
app.put('/api/streampro/playlist/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, categoria, notas, favorito } = req.body;
    const usuario = req.session.user;
    
    if (!usuario?.numero) {
        return res.status(401).json({ 
            success: false, 
            error: "Não autorizado"
        });
    }
    
    try {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlists = [];
        
        if (fs.existsSync(playlistPath)) {
            playlists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
        }
        
        let itemAtualizado = null;
        const playlistAtualizada = playlists.map(item => {
            if (item.id === id && item.usuarioId === usuario.numero) {
                itemAtualizado = {
                    ...item,
                    ...(titulo !== undefined && { titulo }),
                    ...(categoria !== undefined && { categoria }),
                    ...(notas !== undefined && { notas }),
                    ...(favorito !== undefined && { favorito }),
                    dataAtualizacao: new Date().toISOString()
                };
                return itemAtualizado;
            }
            return item;
        });
        
        if (!itemAtualizado) {
            return res.status(404).json({ 
                success: false, 
                error: "Item não encontrado"
            });
        }
        
        fs.writeFileSync(playlistPath, JSON.stringify(playlistAtualizada, null, 2));
        
        res.json({ 
            success: true, 
            message: "Item atualizado com sucesso",
            item: itemAtualizado
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: "Erro ao atualizar item"
        });
    }
});

// Testar URL de stream
app.post('/api/streampro/testar-url', async (req, res) => {
    const { url, agente } = req.body;
    
    if (!url) {
        return res.json({ 
            success: false, 
            valido: false,
            mensagem: "URL vazia"
        });
    }
    
    // Validar formato da URL
    const valido = url.startsWith('http://') || url.startsWith('https://');
    const suportado = url.match(/\.(mp4|m3u8|m3u|avi|mkv|mov|wmv|flv|webm)$/i) || 
                     url.includes('.m3u8') || 
                     url.includes('stream.mpd');
    
    if (!valido) {
        return res.json({ 
            success: false,
            valido: false,
            mensagem: "URL deve começar com http:// ou https://"
        });
    }
    
    if (!suportado) {
        return res.json({ 
            success: false,
            valido: false,
            mensagem: "Formato não reconhecido. Tente .mp4 ou .m3u8"
        });
    }
    
    // Testar conexão (modo head para ser rápido)
    try {
        // Definir agente para teste
        const agentConfig = getAgentConfig(agente || 'vlc');
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(url, {
            method: 'HEAD',
            headers: {
                'User-Agent': agentConfig.agent,
                'Accept': agentConfig.accept,
                'Range': 'bytes=0-'
            },
            signal: controller.signal,
            redirect: 'follow'
        });
        
        clearTimeout(timeoutId);
        
        const info = {
            success: true,
            valido: response.ok,
            status: response.status,
            headers: Object.fromEntries(response.headers.entries()),
            formato: suportado[0]?.replace('.', '') || 'desconhecido',
            tamanho: response.headers.get('content-length'),
            tipo: response.headers.get('content-type'),
            sugestao: response.ok ? "✅ URL válida e acessível" : "⚠️ URL pode ter problemas de acesso",
            agenteUsado: agentConfig.name
        };
        
        res.json(info);
        
    } catch (error) {
        res.json({ 
            success: false,
            valido: false,
            mensagem: `Erro ao testar URL: ${error.message}`,
            sugestao: "Verifique se a URL está correta e acessível"
        });
    }
});

// Proxy para streams bloqueados
app.get('/api/streampro/proxy', async (req, res) => {
    const { url, agente } = req.query;
    
    if (!url) {
        return res.status(400).json({ error: "URL requerida" });
    }
    
    try {
        // Validar URL
        if (!url.startsWith('http')) {
            return res.status(400).json({ error: "URL inválida" });
        }
        
        // Configurar agente
        const agentConfig = getAgentConfig(agente || 'vlc');
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': agentConfig.agent,
                'Accept': agentConfig.accept,
                'Referer': agentConfig.referer,
                'Origin': 'https://streampro.app',
                'Range': req.headers.range || 'bytes=0-'
            },
            timeout: 30000
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        // Copiar headers importantes
        const headersToCopy = ['content-type', 'content-length', 'accept-ranges', 'content-range', 'cache-control'];
        headersToCopy.forEach(header => {
            const value = response.headers.get(header);
            if (value) res.setHeader(header, value);
        });
        
        // Configurar CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Expose-Headers', '*');
        
        // Stream dos dados
        response.body.pipe(res);
        
    } catch (error) {
        console.error('Erro no proxy:', error);
        res.status(500).json({ 
            error: "Erro ao acessar stream",
            detalhes: error.message,
            sugestao: "Tente outro agente ou verifique a URL"
        });
    }
});

// Exportar playlist em M3U
app.get('/api/streampro/playlist/exportar/m3u', (req, res) => {
    const usuario = req.session.user;
    const { categoria } = req.query;
    
    if (!usuario?.numero) {
        return res.status(401).json({ error: "Faça login para exportar" });
    }
    
    try {
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlist = [];
        
        if (fs.existsSync(playlistPath)) {
            const allPlaylists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
            playlist = allPlaylists.filter(p => 
                p.usuarioId === usuario.numero && 
                p.ativo !== false &&
                (!categoria || p.categoria === categoria)
            );
        }
        
        // Gerar arquivo M3U
        let m3uContent = "#EXTM3U\n";
        m3uContent += "#PLAYLIST:Stream Pro Playlist\n";
        m3uContent += `#GENERATED:${moment().format('YYYY-MM-DD HH:mm:ss')}\n\n`;
        
        playlist.forEach(item => {
            m3uContent += `#EXTINF:-1 tvg-id="" tvg-name="${item.titulo}" tvg-logo="" group-title="${item.categoria}",${item.titulo}\n`;
            m3uContent += `${item.url}\n`;
        });
        
        const filename = categoria ? 
            `streampro-${categoria}-${moment().format('YYYYMMDD')}.m3u` : 
            `streampro-playlist-${moment().format('YYYYMMDD')}.m3u`;
        
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(m3uContent);
        
    } catch (error) {
        res.status(500).json({ error: "Erro ao exportar playlist" });
    }
});

// Importar playlist M3U
app.post('/api/streampro/playlist/importar/m3u', (req, res) => {
    const { m3uContent, categoria } = req.body;
    const usuario = req.session.user;
    
    if (!usuario?.numero) {
        return res.status(401).json({ error: "Faça login para importar" });
    }
    
    if (!m3uContent) {
        return res.status(400).json({ error: "Conteúdo M3U vazio" });
    }
    
    try {
        const lines = m3uContent.split('\n');
        const novosItens = [];
        
        let currentTitle = '';
        let currentGroup = categoria || 'importado';
        
        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('#EXTINF:')) {
                // Extrair título
                const titleMatch = line.match(/,(.*)$/);
                if (titleMatch) {
                    currentTitle = titleMatch[1].trim();
                }
                
                // Extrair grupo
                const groupMatch = line.match(/group-title="([^"]+)"/);
                if (groupMatch) {
                    currentGroup = groupMatch[1];
                }
                
            } else if (line && !line.startsWith('#') && currentTitle) {
                // Adicionar item
                novosItens.push({
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                    usuarioId: usuario.numero,
                    titulo: currentTitle,
                    url: line,
                    categoria: currentGroup,
                    notas: "Importado via M3U",
                    dataAdicao: new Date().toISOString(),
                    dataAtualizacao: new Date().toISOString(),
                    ativo: true,
                    favorito: false,
                    playCount: 0
                });
                
                currentTitle = '';
                currentGroup = categoria || 'importado';
            }
        }
        
        // Salvar no arquivo
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlists = [];
        
        if (fs.existsSync(playlistPath)) {
            playlists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
        }
        
        playlists.push(...novosItens);
        fs.writeFileSync(playlistPath, JSON.stringify(playlists, null, 2));
        
        res.json({ 
            success: true, 
            message: `Importados ${novosItens.length} itens`,
            importados: novosItens.length,
            itens: novosItens.slice(0, 10) // Retornar apenas os primeiros 10
        });
        
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: "Erro ao importar playlist",
            detalhes: error.message
        });
    }
});

// Estatísticas do sistema
app.get('/api/streampro/estatisticas', (req, res) => {
    try {
        const acessosPath = path.join(__dirname, 'public', 'streampro_acessos.json');
        let stats = { totalAcessos: 0, acessosHoje: 0, dispositivos: { mobile: 0, desktop: 0 } };
        
        if (fs.existsSync(acessosPath)) {
            stats = JSON.parse(fs.readFileSync(acessosPath, 'utf8'));
        }
        
        const historicoPath = path.join(__dirname, 'public', 'streampro_historico.json');
        let historicoStats = { totalReproducoes: 0, tempoTotal: 0 };
        
        if (fs.existsSync(historicoPath)) {
            const historico = JSON.parse(fs.readFileSync(historicoPath, 'utf8'));
            historicoStats.totalReproducoes = historico.length;
            historicoStats.tempoTotal = historico.reduce((sum, h) => sum + (h.duracao || 0), 0);
        }
        
        const playlistPath = path.join(__dirname, 'public', 'streampro_playlists.json');
        let playlistStats = { totalItens: 0, categorias: {} };
        
        if (fs.existsSync(playlistPath)) {
            const playlists = JSON.parse(fs.readFileSync(playlistPath, 'utf8'));
            const itensAtivos = playlists.filter(p => p.ativo !== false);
            playlistStats.totalItens = itensAtivos.length;
            
            // Contar por categoria
            itensAtivos.forEach(item => {
                playlistStats.categorias[item.categoria] = (playlistStats.categorias[item.categoria] || 0) + 1;
            });
        }
        
        res.json({
            success: true,
            estatisticas: {
                acessos: {
                    total: stats.totalAcessos,
                    hoje: stats.acessosHoje,
                    dispositivos: stats.dispositivos,
                    horarioPico: Object.keys(stats.horariosPico || {}).reduce((a, b) => 
                        stats.horariosPico[a] > stats.horariosPico[b] ? a : b
                    )
                },
                reproducoes: {
                    total: historicoStats.totalReproducoes,
                    tempoTotal: historicoStats.tempoTotal,
                    tempoFormatado: formatarDuracao(historicoStats.tempoTotal)
                },
                playlist: playlistStats,
                online: Math.floor(stats.acessosHoje / 10) + 5
            }
        });
        
    } catch (error) {
        res.json({ 
            success: false, 
            estatisticas: {},
            error: "Erro ao carregar estatísticas"
        });
    }
});
 
// ===== FUNÇÕES AUXILIARES =====
function getAgentConfig(agentName) {
    const agents = {
        vlc: {
            name: 'VLC Player',
            agent: 'VLC/3.0.11 LibVLC/3.0.11',
            accept: '*/*',
            referer: 'https://www.videolan.org/'
        },
        lavf: {
            name: 'FFmpeg Lavf',
            agent: 'Lavf/58.76.100',
            accept: 'video/mp4,video/*;q=0.9,*/*;q=0.8',
            referer: 'https://ffmpeg.org/'
        },
        exoplayer: {
            name: 'Android ExoPlayer',
            agent: 'ExoPlayerLib/2.14.1',
            accept: '*/*',
            referer: 'https://exoplayer.dev/'
        },
        quicktime: {
            name: 'Apple QuickTime',
            agent: 'QuickTime/7.7.4 (qtver=7.7.4;os=Windows NT 6.1)',
            accept: 'video/quicktime,video/mp4,video/x-m4v',
            referer: 'https://www.apple.com/quicktime/'
        },
        android: {
            name: 'Android Media Player',
            agent: 'stagefright/1.2 (Linux;Android 10)',
            accept: '*/*',
            referer: 'https://android.com/'
        }
    };
    
    return agents[agentName] || agents.vlc;
}

function getCategoriaInfo(categoria) {
    const categorias = {
        filmes: { nome: 'Filmes', icone: 'fas fa-film', cor: '#ff3366' },
        series: { nome: 'Séries', icone: 'fas fa-tv', cor: '#3366ff' },
        esportes: { nome: 'Esportes', icone: 'fas fa-futbol', cor: '#00cc66' },
        documentarios: { nome: 'Documentários', icone: 'fas fa-book-open', cor: '#ffcc00' },
        musica: { nome: 'Música', icone: 'fas fa-music', cor: '#9966ff' },
        outros: { nome: 'Outros', icone: 'fas fa-folder', cor: '#8a8ac5' }
    };
    
    return categorias[categoria] || categorias.outros;
}

function formatarDuracao(segundos) {
    if (!segundos) return '0s';
    
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = Math.floor(segundos % 60);
    
    if (horas > 0) {
        return `${horas}h ${minutos}m`;
    } else if (minutos > 0) {
        return `${minutos}m ${segs}s`;
    } else {
        return `${segs}s`;
    }
}

// ===== MIDDLEWARE PARA LOGS =====
app.use('/api/streampro/*', (req, res, next) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        endpoint: req.originalUrl,
        ip: req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress,
        userAgent: req.headers['user-agent']?.substring(0, 50)
    };
    
    console.log('📡 Stream Pro API:', logEntry);
    next();
});

app.get('/removermarca', (req, res) => {
    const usuario = req.session.user || {};

    // Detectar IP
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');
    console.log('🔍 IP do visitante:', ip);

    // Obter dados do navegador
    const userAgent = req.headers['user-agent'] || 'Desconhecido';

    // Hora exata em Brasília
    const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');

    // Acessos específicos para a página de remoção
    const acessosPath = path.join(__dirname, 'public', 'removermarca_acessos.json');
    let stats = { totalAcessos: 0, ips: [] };

    try {
        if (fs.existsSync(acessosPath)) {
            const raw = fs.readFileSync(acessosPath, 'utf8');
            try {
                stats = JSON.parse(raw);
            } catch (e) {
                console.warn('⚠️ removermarca_acessos.json corrompido. Recriando...');
                stats = { totalAcessos: 0, ips: [] };
            }
        }

        stats.totalAcessos++;

        const novoRegistro = {
            ip,
            navegador: userAgent,
            horario: dataHoraBrasil
        };

        stats.ips.push(novoRegistro);

        // Limite de registros
        if (stats.ips.length > 1000) stats.ips = stats.ips.slice(-1000);

        fs.writeFileSync(acessosPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Erro com removermarca_acessos.json:', err.message);
    }

    // Verificar se há processo de remoção em andamento para este usuário
    const processosPath = path.join(__dirname, 'public', 'processos.json');
    let processosAtivos = [];
    
    try {
        if (fs.existsSync(processosPath)) {
            processosAtivos = JSON.parse(fs.readFileSync(processosPath, 'utf8'));
        }
    } catch (err) {
        console.error('Erro ao ler processos.json:', err);
    }

    // Filtrar processos do usuário atual
    const processosUsuario = processosAtivos.filter(p => p.usuarioId === usuario.numero);
    const processoAtivo = processosUsuario.find(p => p.status === 'processing');
    const ultimoProcesso = processosUsuario[processosUsuario.length - 1];

    // Histórico de imagens processadas
    const historicoPath = path.join(__dirname, 'public', 'historico_processos.json');
    let historicoUsuario = [];
    
    try {
        if (fs.existsSync(historicoPath)) {
            const historicoTotal = JSON.parse(fs.readFileSync(historicoPath, 'utf8'));
            historicoUsuario = historicoTotal.filter(h => h.usuarioId === usuario.numero).slice(0, 10);
        }
    } catch (err) {
        console.error('Erro ao ler historico_processos.json:', err);
    }

    // Se não estiver logado - Renderizar página pública
    if (!usuario.numero) {
        return res.render('removermarca', {
            site_nome: "Watermark Pro",
            visitas: stats.totalAcessos,
            username: "",
            numero: "",
            foto: 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
            golds: 0,
            globalRank: "",
            isAdmin: false,
            registro: {},
            processoAtivo: null,
            ultimoProcesso: null,
            historicoUsuario: [],
            estatisticas: {
                imagensProcessadas: historicoUsuario.length,
                tempoMedio: "0.5s",
                taxaSucesso: "98%"
            },
            online: contarUsuariosOnline(),
            planos: [
                {
                    nome: "Gratuito",
                    preco: "Grátis",
                    recursos: [
                        "Até 5 imagens por dia",
                        "Processamento básico",
                        "Resolução até 1080p",
                        "Suporte comunitário"
                    ],
                    limite: 5
                },
                {
                    nome: "Profissional",
                    preco: "R$ 29,90/mês",
                    recursos: [
                        "Imagens ilimitadas",
                        "Processamento premium",
                        "Resolução 4K",
                        "Prioridade na fila",
                        "Suporte 24/7"
                    ],
                    limite: 9999
                },
                {
                    nome: "Empresarial",
                    preco: "Sob consulta",
                    recursos: [
                        "API dedicada",
                        "Processamento em lote",
                        "Integração personalizada",
                        "Suporte técnico dedicado",
                        "Relatórios detalhados"
                    ],
                    limite: 99999
                }
            ]
        });
    }

    // Obter dados completos do usuário
    const registroPath = path.join(__dirname, 'public', 'registro.json');
    let dadosRegistro = [];
    
    try {
        if (fs.existsSync(registroPath)) {
            dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
        }
    } catch (err) {
        console.error('Erro ao ler registro.json:', err);
    }

    const usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};

    // Configurações do plano do usuário
    const planosPath = path.join(__dirname, 'public', 'planos.json');
    let planoUsuario = {
        tipo: "Gratuito",
        limiteDiario: 5,
        usadoHoje: 0,
        expiraEm: null,
        recursos: ["Processamento básico", "Resolução até 1080p"]
    };

    try {
        if (fs.existsSync(planosPath)) {
            const planosData = JSON.parse(fs.readFileSync(planosPath, 'utf8'));
            const planoAtual = planosData.find(p => p.usuarioId === usuario.numero);
            if (planoAtual) {
                planoUsuario = planoAtual;
            }
        }
    } catch (err) {
        console.error('Erro ao ler planos.json:', err);
    }

    // Calcular imagens usadas hoje
    const hoje = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD');
    const usadoHoje = historicoUsuario.filter(h => 
        moment(h.dataProcessamento).tz("America/Sao_Paulo").format('YYYY-MM-DD') === hoje
    ).length;

    // Atualizar plano com uso atual
    planoUsuario.usadoHoje = usadoHoje;

    // Verificar se pode processar mais imagens hoje
    const podeProcessar = usadoHoje < planoUsuario.limiteDiario;

    // Golds do usuário (se aplicável)
    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 0;
    const globalRank = allglob(usuario.grupo, usuario.numero) || 999;

    // Verificar se é admin
    const isAdmin = verificarAdmin(usuario.numero);

    // Estatísticas avançadas
    const estatisticas = {
        imagensProcessadas: historicoUsuario.length,
        tempoMedio: calcularTempoMedio(historicoUsuario),
        taxaSucesso: calcularTaxaSucesso(historicoUsuario),
        tamanhoMedio: calcularTamanhoMedio(historicoUsuario),
        formatoMaisComum: calcularFormatoMaisComum(historicoUsuario)
    };

    // Planos disponíveis
    const planos = [
        {
            nome: "Gratuito",
            preco: "Grátis",
            recursos: [
                "Até 5 imagens por dia",
                "Processamento básico",
                "Resolução até 1080p",
                "Suporte comunitário"
            ],
            limite: 5,
            recomendado: false
        },
        {
            nome: "Profissional",
            preco: "R$ 29,90/mês",
            recursos: [
                "Imagens ilimitadas",
                "Processamento premium",
                "Resolução 4K",
                "Prioridade na fila",
                "Suporte 24/7",
                "Remoção em lote"
            ],
            limite: 9999,
            recomendado: true
        },
        {
            nome: "Empresarial",
            preco: "Sob consulta",
            recursos: [
                "API dedicada",
                "Processamento em lote",
                "Integração personalizada",
                "Suporte técnico dedicado",
                "Relatórios detalhados",
                "White-label"
            ],
            limite: 99999,
            recomendado: false
        }
    ];

    // Renderizar a página
    res.render('removermarca', {
        site_nome: "Watermark Pro",
        visitas: stats.totalAcessos,
        username: usuarioCompleto.nome || usuario.nome || 'Usuário',
        numero: usuario.numero,
        foto: usuarioCompleto.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
        golds,
        globalRank,
        isAdmin,
        registro: dadosRegistro,
        processoAtivo,
        ultimoProcesso,
        historicoUsuario,
        planoUsuario,
        podeProcessar,
        imagensRestantes: Math.max(0, planoUsuario.limiteDiario - usadoHoje),
        estatisticas,
        online: contarUsuariosOnline(),
        planos,
        userAgent,
        ip,
        dataHoraBrasil
    });
});


// Funções auxiliares
function calcularTempoMedio(historico) {
    if (historico.length === 0) return "0.5s";
    const total = historico.reduce((sum, h) => sum + (h.tempoProcessamento || 0.5), 0);
    return (total / historico.length).toFixed(1) + "s";
}

function calcularTaxaSucesso(historico) {
    if (historico.length === 0) return "98%";
    const sucessos = historico.filter(h => h.status === 'success').length;
    return Math.round((sucessos / historico.length) * 100) + "%";
}

function calcularTamanhoMedio(historico) {
    if (historico.length === 0) return "2.4 MB";
    const total = historico.reduce((sum, h) => sum + (h.tamanhoArquivo || 2.4), 0);
    return (total / historico.length).toFixed(1) + " MB";
}

function calcularFormatoMaisComum(historico) {
    if (historico.length === 0) return "PNG";
    
    const formatos = {};
    historico.forEach(h => {
        const formato = h.formato || 'PNG';
        formatos[formato] = (formatos[formato] || 0) + 1;
    });
    
    return Object.keys(formatos).reduce((a, b) => 
        formatos[a] > formatos[b] ? a : b
    );
}

function verificarAdmin(numeroUsuario) {
    const adminPath = path.join(__dirname, 'public', 'admins.json');
    
    try {
        if (fs.existsSync(adminPath)) {
            const admins = JSON.parse(fs.readFileSync(adminPath, 'utf8'));
            return admins.includes(numeroUsuario);
        }
    } catch (err) {
        console.error('Erro ao verificar admin:', err);
    }
    
    return false;
}
app.get('/gruposwpp', (req, res) => {
    const usuario = req.session.user || {};

// Detectar IP
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');
    console.log('🔍 IP do visitante:', ip);

    // Obter dados do navegador
    const userAgent = req.headers['user-agent'] || 'Desconhecido';

    // Hora exata em Brasília
    const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');

    // Acessos
    const acessosPath = path.join(__dirname, 'public', 'acessos.json');
    let stats = { totalAcessos: 0, ips: [] };

    try {
        if (fs.existsSync(acessosPath)) {
            const raw = fs.readFileSync(acessosPath, 'utf8');
            try {
                stats = JSON.parse(raw);
            } catch (e) {
                console.warn('⚠️ acessos.json corrompido. Recriando...');
                stats = { totalAcessos: 0, ips: [] };
            }
        }

        stats.totalAcessos++;

        const novoRegistro = {
            ip,
            navegador: userAgent,
            horario: dataHoraBrasil
        };

        stats.ips.push(novoRegistro);

        // Limite de registros
        if (stats.ips.length > 1000) stats.ips = stats.ips.slice(-1000);

        fs.writeFileSync(acessosPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Erro com acessos.json:', err.message);
        return res.status(500).send('Erro interno ao salvar estatísticas.');
    }
const registroPath = path.join(__dirname, 'public', 'registro.json');
let dadosRegistro = [];
    try {
        if (fs.existsSync(registroPath)) {
            dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
        }
    } catch (err) {
        console.error('Erro ao ler registro.json:', err);
    }

    const usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};

// IPTV
const m3uPath = path.join(__dirname, 'public', 'lista.m3u');
let canaisIPTV = [];

if (fs.existsSync(m3uPath)) {
    try {
        const conteudoM3U = fs.readFileSync(m3uPath, 'utf8');
        const linhas = conteudoM3U.split('\n');

        for (let i = 0; i < linhas.length; i++) {
            if (linhas[i].startsWith('#EXTINF')) {
                const nome = linhas[i].split(',')[1]?.trim() || 'Sem Nome';
                const link = linhas[i + 1]?.trim();
                if (link && link.startsWith('http')) {
                    canaisIPTV.push({ nome, link });
                }
            }
        }
    } catch (e) {
        console.error('Erro ao ler lista.m3u:', e);
    }
}
const futebolPath = path.join(__dirname, 'public', 'futebol.json');
  let canaisFutebol = [];
  try {
    if (fs.existsSync(futebolPath)) {
      canaisFutebol = JSON.parse(fs.readFileSync(futebolPath, 'utf-8'));
    }
  } catch (e) {
    console.error("Erro ao ler futebol.json:", e);
  }

    // Se não estiver logado
    if (!usuario.numero) {
        return res.render('gruposwpp', {
            nome_site: site_nome,
            visitas: stats.totalAcessos,
            username: "",
            numero: "",
            grupo: "",
            id: "",
            canaisIPTV: canaisFutebol,
            foto: 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
            golds: 0,
            globalRank: "",
            isAdmin: false,
            registro: {},
            grupoConfig: {},
            peixe: 0, galinha: 0, coelho: 0, ovelha: 0, vaca: 0, elefante: 0,
            ouro: 0, diamante: 0, esmeralda: 0,
            pocao: 0, ak47: 0, awm: 0, pistola: 0, adaga: 0, estamina: 0,
            ativos: [], box: [], noticias: [],
            online: contarUsuariosOnline()
        });
    }

    const grupoConfigFilePath = grupoConfigPath(usuario.grupo);
    if (!fs.existsSync(grupoConfigFilePath)) {
        console.error('Config do grupo não encontrada.');
        return res.status(404).send('Config do grupo não encontrada.');
    }

    let grupoConfig = {};
    try {
        grupoConfig = JSON.parse(fs.readFileSync(grupoConfigFilePath, 'utf8')) || {};
    } catch (e) {
        console.error("Erro na config do grupo:", e);
        return res.status(500).send('Erro ao carregar configuração do grupo.');
    }

    grupoConfig.wellcome = Array.isArray(grupoConfig.wellcome) ? grupoConfig.wellcome : [];
    while (grupoConfig.wellcome.length < 2) {
        grupoConfig.wellcome.push({ legendabv: "Sem legenda", legendasaiu: "Sem legenda" });
    }

    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 600;
    const globalRank = allglob(usuario.grupo, usuario.numero);
    if (globalRank === null) return res.status(404).send('Não foi possível encontrar seu ranking global.');

    const inventario = {
        peixe: getIkan(usuario.numero),
        galinha: getAyam(usuario.numero),
        coelho: getKelinci(usuario.numero),
        ovelha: getDomba(usuario.numero),
        vaca: getSapi(usuario.numero),
        elefante: getGajah(usuario.numero),
        ouro: getBesi(usuario.numero),
        diamante: getEmas(usuario.numero),
        esmeralda: getEmerald(usuario.numero),
        pocao: getPotion(usuario.numero),
        ak47: getAK47(usuario.numero),
        awm: getAWM(usuario.numero),
        pistola: getPISTOLA(usuario.numero),
        adaga: getADÁGA(usuario.numero),
        estamina: getDarah(usuario.numero)
    };

    const ativosPath = path.join(__dirname, 'public', 'ativos.json');
    const palpitesPath = path.join(__dirname, 'public', 'palpites.json');
    const noticiasPath = path.join(__dirname, 'public', 'noticias.json');
    const gruposPath = path.join(__dirname, 'public', 'grupos.json');

    let ativos = [], box = [], palpitesData = { bolao: [] }, noticias = [], isAdmin = false;

    try {
        const ativosData = fs.existsSync(ativosPath) ? JSON.parse(fs.readFileSync(ativosPath)) : {};
        ativos = ativosData.ativo || [];
        box = ativosData.usuarios?.[usuario.numero] || [];

        if (fs.existsSync(palpitesPath)) palpitesData = JSON.parse(fs.readFileSync(palpitesPath));
        if (fs.existsSync(noticiasPath)) {
            const noticiasData = JSON.parse(fs.readFileSync(noticiasPath));
            noticias = noticiasData.noticias || [];
        }

        if (fs.existsSync(gruposPath)) {
            const grupos = JSON.parse(fs.readFileSync(gruposPath));
            const grupoAtual = grupos.find(g => g.grupoID === usuario.grupo);
            isAdmin = grupoAtual ? grupoAtual.administradores.includes(usuario.numero) : false;
        }
    } catch (e) {
        console.error("Erro ao carregar dados auxiliares:", e);
    }

    res.render('gruposwpp', {
        nome_site: site_nome,
        visitas: stats.totalAcessos,
        username: usuario?.nome || '',
        numero: usuario?.numero || '',
        grupo: usuario?.grupo || '',
        foto: usuarioCompleto?.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',
        id: usuario?.id || '',
        golds,
        globalRank,
        isAdmin,
        registro: dadosRegistro,
        grupoConfig,
        canaisIPTV: canaisFutebol,
        ativos,
        box,
        noticias,
        palpites: palpitesData?.bolao || [],
        user: req.session.user || {},
        ip,
        ...inventario,
        online: contarUsuariosOnline()
    });
});

app.get("/iptv", (req, res) => {
  const m3uPath = path.join(__dirname, "public", "lista.m3u");

  if (!fs.existsSync(m3uPath)) {
    return res.send("⚠️ Nenhuma lista M3U encontrada. Use o comando /iptv para baixar.");
  }

  const m3uContent = fs.readFileSync(m3uPath, "utf-8");

  // Extrair canais (nome + link)
  const canais = [];
  const linhas = m3uContent.split("\n");

  for (let i = 0; i < linhas.length; i++) {
    if (linhas[i].startsWith("#EXTINF")) {
      const nome = linhas[i].split(",")[1]?.trim() || "Sem nome";
      const link = linhas[i + 1]?.trim();
      if (link && link.startsWith("http")) {
        canais.push({ nome, link });
      }
    }
  }

  res.render("iptv", { canais });
});
// backend/index.js ou app.js

// Função para ler o arquivo espera.json
function lerEspera() {
  const filePath = path.join(__dirname, 'public', 'espera.json');
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return {};
}

// Função para salvar o arquivo espera.json
function salvarEspera(usuarios) {
  const filePath = path.join(__dirname, 'public', 'espera.json');
  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2), 'utf8');
}


app.get('/chat', verificarLogin, (req, res) => {
  const usuario = req.session.user;  // Pegamos o usuário diretamente da sessão

    if (!usuario) {
        return res.status(400).send('Usuário não encontrado na sessão.');
    }

    // Obter os Golds atualizados do usuário
    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 600;

    if (golds === null) {
        return res.status(404).send('Golds não encontrados.');
    }

    // Calcular o ranking global do usuário
    const globalRank = allglob(usuario.grupo, usuario.numero);

    // Caso não tenha encontrado o ranking global
    if (globalRank === null) {
        return res.status(404).send('Não foi possível encontrar seu ranking global.');
    }
const registroPath = path.join(__dirname, 'public', 'registro.json');
let dadosRegistro = [];
    try {
        if (fs.existsSync(registroPath)) {
            dadosRegistro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
        }
    } catch (err) {
        console.error('Erro ao ler registro.json:', err);
    }

    const usuarioCompleto = dadosRegistro.find(u => u.numero === usuario.numero) || {};
    // Obter os itens do inventário chamando as funções correspondentes
    const inventario = {
        peixe: getIkan(usuario.numero),
        galinha: getAyam(usuario.numero),
        coelho: getKelinci(usuario.numero),
        ovelha: getDomba(usuario.numero),
        vaca: getSapi(usuario.numero),
        elefante: getGajah(usuario.numero),
        ouro: getBesi(usuario.numero),
        diamante: getEmas(usuario.numero),
        esmeralda: getEmerald(usuario.numero),
        pocao: getPotion(usuario.numero),
        ak47: getAK47(usuario.numero),
        awm: getAWM(usuario.numero),
        pistola: getPISTOLA(usuario.numero),
        adaga: getADÁGA(usuario.numero),
        estamina: getDarah(usuario.numero)
    };

    // Passa os dados para o template
    res.render('chat', {
        username: usuario.nome,
        numero: usuario.numero,
        grupo: usuario.grupo,
        id: usuario.id,
        golds: golds,
        globalRank: globalRank, 
        foto: usuarioCompleto?.fotoPerfil || 'https://dl.dropboxusercontent.com/scl/fi/pe6liwd0tixj39cn1o5o4/1752896153979.jpeg?rlkey=9dchim7lrqdo2zpl1f1usultf&dl=0',// Passa o ranking global para o template
        ...inventario // Passa os itens do inventário diretamente para o template
    });
});
// Rota para verificar o tempo de cooldown de um usuário para um tipo específico
app.post('/verificarCooldown', (req, res) => {
  const { usuario, tipoCooldown } = req.body;
  const usuarios = lerEspera();
  const agora = Date.now();

  if (usuarios[usuario] && usuarios[usuario][tipoCooldown] && usuarios[usuario][tipoCooldown] > agora) {
    const tempoRestante = usuarios[usuario][tipoCooldown] - agora;
    return res.json({ podeJogar: false, tempoRestante });
  }

  res.json({ podeJogar: true });
});

app.get('/getAtivos', (req, res) => {
  const usuario = req.session.user;
  if (!usuario) return res.status(401).json({ erro: 'Não autenticado' });

  const ativosPath = path.join(__dirname, 'public', 'ativos.json');

  fs.readFile(ativosPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler o arquivo de ativos.' });

    try {
      const json = JSON.parse(data);
      const usuarioAtivos = json.usuarios[usuario.numero] || [];
      const ativosGerais = json.ativo || [];

      return res.json({
  usuarios: {
    [usuario.numero]: usuarioAtivos
  },
  ativo: ativosGerais
});
    } catch (e) {
      return res.status(500).json({ erro: 'Erro ao processar os dados de ativos.' });
    }
  });
});
app.post('/atualizarCooldown', (req, res) => {
  const { usuario, tipoCooldown, tempoCooldown } = req.body;
  const usuarios = lerEspera();
  const agora = Date.now();

  // Atualiza o tempo de cooldown para o tipo de jogo específico
  if (!usuarios[usuario]) {
    usuarios[usuario] = {};
  }
  usuarios[usuario][tipoCooldown] = agora + tempoCooldown;
  salvarEspera(usuarios);

  res.json({ sucesso: true });
});


/*
// Processo de login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;  // Obtém o nome e a senha (ID)

        // Verifica se o arquivo de registro existe
        if (!fs.existsSync(filePathrr)) {
            req.flash('error_msg', 'Nenhum usuário registrado ainda!');
            return res.redirect('/users/login');
        }

        // Carrega os registros do arquivo
        let registros = JSON.parse(fs.readFileSync(filePathrr, 'utf8'));

        // Verifica se o usuário existe no arquivo e se a senha (ID) está correta
        let usuario = registros.find(user => user.nome === username && user.id === password);

        if (usuario) {
            // Salva os dados do usuário na sessão
            req.session.user = {
                nome: usuario.nome,
                numero: usuario.numero,
                grupo: usuario.grupo,
                dinheiro: usuario.dinheiro,
                id: usuario.id
            };

            req.flash('success_msg', 'Login bem-sucedido!');
            return res.redirect('/docs');
        } else {
            req.flash('error_msg', 'Nome de usuário ou senha (ID) inválidos!');
            return res.redirect('/users/login');
        }
    } catch (err) {
        console.log(err);  // Log para debugar
        req.flash('error_msg', 'Erro ao processar o login!');
        res.redirect('/users/login');
    }
});*/



//const moment = require('moment-timezone'); // Certifique-se de ter instalado: npm install moment-timezone







// Função para carregar os dados de golds do arquivo

// Função para carregar os Golds

// Função para carregar os dados de golds.json
function carregarGolds() {
    const filePath = path.join(__dirname, './armor/funcoes/golds.json');
    
    // Verifica se o arquivo existe
    if (!fs.existsSync(filePath)) {
        return [];  // Se o arquivo não existir, retorna um array vazio
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);  // Retorna os dados lidos do arquivo
}
app.get('/meus-golds', (req, res) => {
    const usuario = req.session.user;
    if (!usuario) return res.status(401).json({ erro: 'Usuário não autenticado' });

    const goldsData = carregarGolds();
    const registro = goldsData.find(u => u.grupo === usuario.grupo);

    if (!registro) return res.status(404).json({ erro: 'Registro do grupo não encontrado' });

    const usuarioGolds = registro.usus.find(u => u.id === usuario.numero);

    const golds = usuarioGolds ? usuarioGolds.Golds || 0 : 0;
    res.json({ golds });
});
// Função para salvar os dados de golds atualizados no arquivo
// Função para salvar os Golds
function salvarGolds(goldsData) {
    const filePath = path.join(__dirname, 'armor', 'funcoes', 'golds.json');
    try {
        fs.writeFileSync(filePath, JSON.stringify(goldsData, null, 2) + '\n');
        //Goldrgs(goldsData)
    } catch (err) {
        console.error('Erro ao salvar Golds:', err);
    }
}

var AddGold2 = async(qnt, usu, from) => {
let i2 = rggold.map(i => i.grupo).indexOf(from);
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds += qnt
Goldrgs(rggold)

console.log(`Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `)
//samá.sendMessage(from, {text: `Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `, mentions: [usu]})
}
function atualizarGolds(grupo, id, goldChange) {
    const valor = parseInt(goldChange);
    if (isNaN(valor)) {
        return { success: false, error: 'Valor inválido de Gold' };
    }

    const goldsData = carregarGolds();
    let grupoData = goldsData.find(g => g.grupo === grupo);

    if (!grupoData) {
        return { success: false, error: 'Grupo não encontrado' };
    }

    let usuarioGolds = grupoData.usus.find(u => u.id === id);
    if (!usuarioGolds) {
        usuarioGolds = { id, Golds: 0, data: getHoje() };
        grupoData.usus.push(usuarioGolds);
    }

    if (usuarioGolds.Golds + valor < 0) {
        return { success: false, error: 'Saldo insuficiente de Golds' };
    }

    usuarioGolds.Golds += valor;

    salvarGolds(goldsData);

    AddGold2(valor, id, grupo);

    return { success: true, golds: usuarioGolds.Golds };
}

// Rota para atualizar os Golds
// Rota para atualizar os Golds

app.post('/atualizarGolds', (req, res) => {
    const { grupo, id, goldChange } = req.body;

    // Validação de segurança: garantir que goldChange seja um número
    const valor = parseInt(goldChange);
    if (isNaN(valor)) {
        return res.status(400).json({ error: 'Valor inválido de Gold' });
    }

    const goldsData = carregarGolds();
    let grupoData = goldsData.find(g => g.grupo === grupo);

    if (!grupoData) {
        return res.status(404).json({ error: 'Grupo não encontrado aqui' });
    }

    // Verifica se o usuário existe, senão cria
    let usuarioGolds = grupoData.usus.find(u => u.id === id);
    if (!usuarioGolds) {
        usuarioGolds = { id, Golds: 0, data: getHoje() };
        grupoData.usus.push(usuarioGolds);
    }
    // Impedir saldo negativo
if (usuarioGolds.Golds + valor < 0) {
    return res.status(400).json({ error: 'Saldo insuficiente de Golds' });
}

    // Atualiza os Golds
    usuarioGolds.Golds += valor;

    // Chama função auxiliar (opcional)
    AddGold2(valor, id, grupo);

    // Salva novamente no arquivo JSON
    salvarGolds(goldsData);

    res.json({ success: true, golds: usuarioGolds.Golds });
});
app.post('/apostar', async (req, res) => {
  const { id, palpite, timeEscolhido, grupo } = req.body;
console.log("🔍 Grupo recebido:", grupo); // ⬅️ Veja o que chega
  const usuario = req.session.user;

  if (!usuario) return res.json({ success: false, error: 'Usuário não autenticado' });

  const numero = usuario.numero;
  const valorAposta = 100;

  // Carrega o arquivo de palpites
  
  
  const arquivo = path.join(__dirname, 'public', 'palpites.json');
let json = { bolao: [] };
try {
    if (fs.existsSync(arquivo)) {
        const palpitesRaw = fs.readFileSync(arquivo, 'utf8');
        json = JSON.parse(palpitesRaw);
    }
} catch (e) {
    console.error("Erro ao ler palpites.json:", e);
}
  
  const partida = json.bolao.find(p => p.id === id);

  if (!partida) return res.json({ success: false, error: 'Bolão não encontrado' });

  // Verifica se o usuário já apostou
  const jaApostou = partida.palpites.some(p => p.nome === numero);
  if (jaApostou) return res.json({ success: false, error: 'Você já apostou nesse jogo!' });

  // ============================
  // Atualiza golds corretamente via estrutura de grupo
  // ============================
  const goldsData = carregarGolds();
  let grupoData = goldsData.find(g => g.grupo === grupo);

  if (!grupoData) {
    return res.json({ success: false, error: 'Grupo não registrado para golds' });
  }

  let usuarioGolds = grupoData.usus.find(u => u.id === numero);
  if (!usuarioGolds) {
    usuarioGolds = { id: numero, Golds: 0, data: getHoje() };
    grupoData.usus.push(usuarioGolds);
  }

  if (usuarioGolds.Golds < valorAposta) {
    return res.json({ success: false, error: 'Saldo insuficiente de Golds!' });
  }

  usuarioGolds.Golds -= valorAposta;
  AddGold2(-valorAposta, numero, grupo);
  salvarGolds(goldsData);

  // ============================
  // Salva o palpite na partida
  // ============================
  partida.palpites.push({
    nome: numero,
    palpite,
    timeEscolhido,
    groupId: grupo
  });

  partida.totalGolds = (partida.totalGolds || 0) + valorAposta;
  fs.writeFileSync(arquivo, JSON.stringify(json, null, 2));

  res.json({
    success: true,
    palpite: { nome: numero, palpite, timeEscolhido, groupId: grupo },
    totalGolds: partida.totalGolds
  });
});
app.post('/comprar-ativo', (req, res) => {
    const { id, quantidade } = req.body;
    const usuario = req.session.user;

    if (!usuario) return res.status(401).json({ error: 'Usuário não autenticado.' });

    const ativosPath = path.join(__dirname, 'public', 'ativos.json');
    const ativosData = JSON.parse(fs.readFileSync(ativosPath, 'utf8'));
    const ativo = ativosData.ativo.find(a => a.id === parseInt(id));

    if (!ativo) return res.status(404).json({ error: 'Ativo não encontrado.' });

    const valorTotal = ativo.valor * quantidade;

    // Atualiza golds do usuário
    const result = atualizarGolds(usuario.grupo, usuario.numero, -valorTotal);
    if (!result.success) return res.status(400).json({ error: result.error });

    // Atualiza ativos do usuário
    if (!ativosData.usuarios[usuario.numero]) {
        ativosData.usuarios[usuario.numero] = [];
    }

    const ativosUsuario = ativosData.usuarios[usuario.numero];
    const jaTem = ativosUsuario.find(a => a.id === ativo.id);

    if (jaTem) {
return res.status(404).json({ error: 'Você já investiu nesse Ativo!' });
    } else {
        ativosUsuario.push({ id: ativo.id, quantidade: quantidade, valorCompra: ativo.valor });
    }

    fs.writeFileSync(ativosPath, JSON.stringify(ativosData, null, 2));
    res.json({
  success: true,
  mensagem: 'Ativo comprado com sucesso.',
  gasto: valorTotal,
  nome: usuario.nome
});
});
app.post('/liquidar-ativo', (req, res) => {
    const { id, quantidade } = req.body;
    const usuario = req.session.user;

    if (!usuario) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const ativoId = parseInt(id);
    const ativosPath = path.join(__dirname, 'public', 'ativos.json');

    let ativosData;
    try {
        ativosData = JSON.parse(fs.readFileSync(ativosPath, 'utf8'));
    } catch (e) {
        console.error("Erro ao ler ativos.json:", e);
        return res.status(500).json({ error: 'Erro interno ao carregar ativos.' });
    }

    const ativo = ativosData.ativo.find(a => a.id === ativoId);
    if (!ativo) {
        return res.status(404).json({ error: 'Ativo não encontrado.' });
    }

    const ativosUsuario = ativosData.usuarios?.[usuario.numero];
    if (!ativosUsuario) {
        return res.status(400).json({ error: 'Você não possui este ativo.' });
    }

    const existente = ativosUsuario.find(a => a.id === ativoId);
    if (!existente) {
        return res.status(400).json({ error: 'Você não possui este ativo.' });
    }

    // Determina a quantidade a liquidar
    let qtd = quantidade === "tudo" ? existente.quantidade : parseInt(quantidade);
    if (isNaN(qtd) || qtd <= 0) {
        return res.status(400).json({ error: 'Quantidade inválida.' });
    }

    if (existente.quantidade < qtd) {
        return res.status(400).json({ error: 'Quantidade insuficiente para liquidar.' });
    }

    // Atualiza a quantidade
    existente.quantidade -= qtd;

    if (existente.quantidade <= 0) {
        ativosData.usuarios[usuario.numero] = ativosUsuario.filter(a => a.id !== ativoId);
    }

    const valorTotal = ativo.valor * qtd;

    atualizarGolds(usuario.grupo, usuario.numero, valorTotal);

    try {
        fs.writeFileSync(ativosPath, JSON.stringify(ativosData, null, 2));
    } catch (e) {
        console.error("Erro ao salvar ativos.json:", e);
        return res.status(500).json({ error: 'Erro interno ao salvar ativos.' });
    }

    return res.json({
        success: true,
        recebido: valorTotal,
        mensagem: `Você vendeu ${qtd}x ${ativo.nome} por ${valorTotal} Golds.`
    });
});
app.use('/database', express.static('public/database'));


// Modificar a rota de criar sessão para verificar se usuário tem plano ativo
// Página inicial

// Na rota GET /conectar, adicione as estatísticas:

// Endpoint para impulsionar grupo
// Exemplo de endpoint no servidor (Node.js)
// Importe suas funções existentes (se necessário)
// const { atualizarGolds, carregarGolds, salvarGolds, AddGold2, getHoje } = require('./seu-arquivo-de-funcoes');

app.post('/api/boost-group', async (req, res) => {
    try {
        const { grupoId, boostData, userId, golds, userGroup } = req.body;
        const usuario = req.session.user;
        
        console.log('📦 Dados recebidos no backend:', { 
            grupoId, 
            userId, 
            golds, 
            userGroup
        });
        
        // 1. Verificar se o ID do grupo foi enviado
        if (!grupoId) {
            return res.status(400).json({ 
                error: 'ID do grupo não fornecido',
                suggestion: 'O ID do grupo é obrigatório'
            });
        }
        
        // 2. Verificar se a quantidade de Golds é válida
        if (!golds || golds < 100000) {
            return res.status(400).json({ 
                error: 'Quantidade de Golds inválida',
                suggestion: 'Quantidade mínima: 100.000 Golds'
            });
        }
        
        // 3. Caminho correto para o arquivo grupos.json
        const gruposJsonPath = path.join(__dirname, 'public', 'grupos.json');
        console.log(`📁 Lendo arquivo de grupos em: ${gruposJsonPath}`);
        
        // Verificar se o arquivo existe
        if (!fs.existsSync(gruposJsonPath)) {
            return res.status(500).json({ 
                error: 'Arquivo grupos.json não encontrado',
                details: `Caminho: ${gruposJsonPath}`
            });
        }
        
        // Ler o arquivo grupos.json
        const gruposData = JSON.parse(fs.readFileSync(gruposJsonPath, 'utf8'));
        
        console.log(`🔍 Procurando grupo com ID: ${grupoId}`);
        console.log(`📊 Total de grupos: ${gruposData.length}`);
        
        // Função para limpar ID - EXTRAIR APENAS NÚMEROS
        function limparIdGrupo(id) {
            if (!id) return '';
            const idStr = id.toString();
            // Remover @g.us se existir
            const semSufixo = idStr.replace('@g.us', '').replace('@s.whatsapp.net', '');
            // Manter apenas números
            const apenasNumeros = semSufixo.replace(/\D/g, '');
            console.log(`🛠️  Limpando ID: "${idStr}" -> "${apenasNumeros}"`);
            return apenasNumeros;
        }
        
        // Limpar o ID recebido
        const grupoIdLimpo = limparIdGrupo(grupoId);
        console.log(`🔧 ID recebido limpo: "${grupoId}" -> "${grupoIdLimpo}"`);
        
        // Buscar o grupo usando o ID limpo
        const grupoIndex = gruposData.findIndex(g => {
            const idDoGrupo = g.grupoID || g.id || g.groupId || g.grupo;
            const idDoGrupoLimpo = limparIdGrupo(idDoGrupo);
            console.log(`  Comparando: Buscado "${grupoIdLimpo}" com Grupo "${idDoGrupoLimpo}" (${g.nome})`);
            return idDoGrupoLimpo === grupoIdLimpo;
        });
        
        console.log(`✅ Índice do grupo encontrado: ${grupoIndex}`);
        
        if (grupoIndex === -1) {
            // Log detalhado para debug
            const idsDisponiveis = gruposData.slice(0, 10).map(g => {
                const idOriginal = g.grupoID || g.id || g.groupId || g.grupo;
                const idLimpo = limparIdGrupo(idOriginal);
                return {
                    idOriginal,
                    idLimpo,
                    nome: g.nome
                };
            });
            
            return res.status(404).json({ 
                success: false,
                error: 'Grupo não encontrado',
                details: {
                    grupoIdRecebido: grupoId,
                    grupoIdLimpo: grupoIdLimpo,
                    suggestion: 'Verifique se o ID está correto'
                }
            });
        }
        
        const grupoEncontrado = gruposData[grupoIndex];
        console.log(`✅ Grupo encontrado: "${grupoEncontrado.nome}"`);
        
        // 4. Verificar se o usuário tem Golds suficientes
        
        
        // Primeiro obter o saldo atual do usuário
        const saldoAtual = usuario.golds
        console.log(`💰 Verificando saldo do usuário ${usuario.numero}...${saldoAtual}`);
        if (saldoAtual < golds) {
            return res.status(400).json({ 
                success: false,
                error: 'Golds insuficientes',
                details: {
                    saldoAtual,
                    goldsNecessarios: golds,
                    deficit: golds - saldoAtual
                }
            });
        }
        
        // 5. Deduzir Golds do usuário
        console.log(`💰 Deduzindo ${golds} Golds do usuário ${usuario.numero}...`);
        
        // FUNÇÃO AUXILIAR para limpar ID do usuário/grupo
        function limparIdUsuario(id) {
            if (!id) return '';
            const idStr = id.toString();
            return idStr.replace('@s.whatsapp.net', '').replace('@g.us', '');
        }
        
        const userIdLimpo = limparIdUsuario(usuario.numero);
        const userGroupLimpo = limparIdGrupo(grupoId);
        
        const deductionResult = atualizarGolds7(
            userGroupLimpo + '@g.us', 
            userIdLimpo, 
            -golds
        );
        
        console.log('💸 Resultado da dedução:', deductionResult);
        
        if (!deductionResult.success) {
            return res.status(400).json({ 
                success: false,
                error: deductionResult.error,
                details: deductionResult.error
            });
        }
        
        console.log('✅ Golds deduzidos com sucesso. Novo saldo:', deductionResult.golds);
        
        // 6. Calcular dias de boost
        const goldPricePerDay = 100000;
        const days = Math.floor(golds / goldPricePerDay);
        
        // Se já existe boost, calcular nova data de expiração
        let boostEndDate = new Date();
        if (grupoEncontrado.boostData) {
            const existingEnd = new Date(grupoEncontrado.boostData.boostEnd);
            if (existingEnd > new Date()) {
                // Adicionar dias ao boost existente
                boostEndDate = existingEnd;
                boostEndDate.setDate(boostEndDate.getDate() + days);
                console.log(`📅 Boost estendido: +${days} dias`);
            } else {
                // Boost expirado, começar novo
                boostEndDate.setDate(boostEndDate.getDate() + days);
                console.log(`📅 Novo boost: ${days} dias`);
            }
        } else {
            // Primeiro boost
            boostEndDate.setDate(boostEndDate.getDate() + days);
            console.log(`📅 Primeiro boost: ${days} dias`);
        }
        
        // 7. Atualizar dados do boost no grupo
        const existingGoldsSpent = grupoEncontrado.boostData ? grupoEncontrado.boostData.goldsSpent || 0 : 0;
        
        gruposData[grupoIndex].boostData = {
            boostStart: grupoEncontrado.boostData ? grupoEncontrado.boostData.boostStart : new Date().toISOString(),
            boostEnd: boostEndDate.toISOString(),
            days: days,
            goldsSpent: existingGoldsSpent + golds,
            userId: usuario.numero,
            userIdLimpo: userIdLimpo,
            userGroup: userGroup,
            userGroupLimpo: userGroupLimpo,
            updatedAt: new Date().toISOString(),
            transactionId: `BOOST-${Date.now()}-${userIdLimpo.substring(0, 8)}`,
            grupoIdLimpo: grupoIdLimpo,
            grupoIdOriginal: grupoEncontrado.grupoID
        };
        
        console.log('📝 Dados do boost atualizados:', gruposData[grupoIndex].boostData);
        
        // 8. Salvar histórico de impulsionamento
        const boostHistoryPath = path.join(__dirname, 'boost-history.json');
        let boostHistory = [];
        
        if (fs.existsSync(boostHistoryPath)) {
            try {
                boostHistory = JSON.parse(fs.readFileSync(boostHistoryPath, 'utf8'));
            } catch (err) {
                console.log('Criando novo arquivo de histórico...');
                boostHistory = [];
            }
        }
        
        const historyEntry = {
            id: `HIST-${Date.now()}`,
            grupoId: grupoId,
            grupoIdLimpo: grupoIdLimpo,
            grupoNome: grupoEncontrado.nome,
            userId: usuario.numero,
            goldsSpent: golds,
            saldoAnterior: saldoAtual,
            novoSaldo: deductionResult.golds,
            boostStart: new Date().toISOString(),
            boostEnd: boostEndDate.toISOString(),
            days: days,
            timestamp: new Date().toISOString(),
            status: 'completed'
        };
        
        boostHistory.push(historyEntry);
        fs.writeFileSync(boostHistoryPath, JSON.stringify(boostHistory, null, 2));
        
        console.log('📚 Histórico salvo com sucesso');
        
        // 9. Salvar grupos atualizados NO CAMINHO CORRETO
        fs.writeFileSync(gruposJsonPath, JSON.stringify(gruposData, null, 2));
        
        console.log(`💾 Boost salvo em: ${gruposJsonPath}`);
        console.log('📁 Conteúdo do arquivo salvo:', JSON.stringify(gruposData[grupoIndex], null, 2));
        
        // 10. Atualizar a sessão do usuário
        req.session.user.golds = deductionResult.golds;
        
        // 11. Responder com sucesso
        res.json({ 
            success: true, 
            message: `Grupo "${grupoEncontrado.nome}" impulsionado com sucesso por ${days} dia(s)!`,
            data: {
                grupoId: grupoId,
                grupoNome: grupoEncontrado.nome,
                boostData: gruposData[grupoIndex].boostData,
                golds: {
                    gastos: golds,
                    saldoAnterior: saldoAtual,
                    novoSaldo: deductionResult.golds,
                    diasComprados: days,
                    precoPorDia: goldPricePerDay
                },
                duration: {
                    dias: days,
                    expiraEm: boostEndDate.toISOString(),
                    expiraEmFormatado: boostEndDate.toLocaleDateString('pt-BR')
                }
            }
        });
        
    } catch (error) {
        console.error('❌ Erro ao processar boost:', error);
        res.status(500).json({ 
            success: false,
            error: 'Erro interno do servidor',
            details: error.message
        });
    }
});

// Endpoint para limpar cache e forçar recarregamento
app.get('/api/refresh-groups', async (req, res) => {
    try {
        const gruposJsonPath = path.join(__dirname, 'public', 'grupos.json');
        
        if (!fs.existsSync(gruposJsonPath)) {
            return res.status(404).json({ error: 'Arquivo não encontrado' });
        }
        
        const data = JSON.parse(fs.readFileSync(gruposJsonPath, 'utf8'));
        
        // Contar boosts ativos
        const activeBoosts = data.filter(grupo => {
            if (grupo.boostData && grupo.boostData.boostEnd) {
                return new Date(grupo.boostData.boostEnd) > new Date();
            }
            return false;
        });
        
        res.json({
            success: true,
            timestamp: new Date().toISOString(),
            totalGroups: data.length,
            activeBoosts: activeBoosts.length,
            message: 'Arquivo grupos.json lido com sucesso'
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// FUNÇÃO ATUALIZADA - Agora também limpa IDs do usuário
function atualizarGolds7(grupo, id, goldChange) {
    console.log(`🔧 atualizarGolds7 chamada com: grupo="${grupo}", id="${id}", goldChange=${goldChange}`);
    
    const valor = parseInt(goldChange);
    if (isNaN(valor)) {
        console.log('❌ Valor inválido:', goldChange);
        return { success: false, error: 'Valor inválido de Gold' };
    }

    const goldsData = carregarGolds();
    console.log(`📊 Total de grupos no goldsData: ${goldsData.length}`);
    
    let grupoData = goldsData.find(g => {
        console.log(`  Comparando grupo: buscado="${grupo}" com "${g.grupo}"`);
        return g.grupo === grupo;
    });

    if (!grupoData) {
        console.log(`❌ Grupo "${grupo}" não encontrado em goldsData`);
        console.log('📋 Grupos disponíveis:', goldsData.map(g => g.grupo));
        return { success: false, error: 'Grupo não encontrado no sistema de Golds' };
    }
    
    console.log(`✅ Grupo encontrado: "${grupoData.grupo}"`);
    console.log(`👥 Total de usuários no grupo: ${grupoData.usus.length}`);

    // Função para limpar ID do usuário
    function limparIdUsuario(idUsuario) {
        if (!idUsuario) return '';
        const idStr = idUsuario.toString();
        return idStr.replace('@s.whatsapp.net', '').replace('@g.us', '');
    }
    
    const idLimpo = limparIdUsuario(id);
    console.log(`🔍 Buscando usuário com ID: original="${id}", limpo="${idLimpo}"`);
    
    let usuarioGolds = grupoData.usus.find(u => {
        const uIdLimpo = limparIdUsuario(u.id);
        console.log(`  Comparando usuário: "${uIdLimpo}" com "${idLimpo}"`);
        return uIdLimpo === idLimpo;
    });
    
    if (!usuarioGolds) {
        console.log(`👤 Usuário "${idLimpo}" não encontrado, criando novo...`);
        usuarioGolds = { 
            id: id, // Mantém o ID original
            Golds: 0, 
            data: getHoje() 
        };
        grupoData.usus.push(usuarioGolds);
    } else {
        console.log(`✅ Usuário encontrado. Saldo atual: ${usuarioGolds.Golds}`);
    }

    if (usuarioGolds.Golds + valor < 0) {
        console.log(`❌ Saldo insuficiente: ${usuarioGolds.Golds} + ${valor} = ${usuarioGolds.Golds + valor}`);
        return { success: false, error: 'Você não tem golds suficiente nesse grupo!' };
    }

    const saldoAnterior = usuarioGolds.Golds;
    usuarioGolds.Golds += valor;
    
    console.log(`💰 Atualização: ${saldoAnterior} + ${valor} = ${usuarioGolds.Golds}`);

    salvarGolds(goldsData);

    AddGold2(valor, id, grupo);

    console.log(`✅ Golds atualizados com sucesso! Novo saldo: ${usuarioGolds.Golds}`);
    
    return { 
        success: true, 
        golds: usuarioGolds.Golds,
        saldoAnterior: saldoAnterior,
        novoSaldo: usuarioGolds.Golds
    };
}

// Endpoint de debug melhorado
app.get('/api/debug-grupos', (req, res) => {
    try {
        const gruposData = JSON.parse(fs.readFileSync('grupos.json', 'utf8'));
        
        function limparIdGrupo(id) {
            if (!id) return '';
            const idStr = id.toString();
            const semSufixo = idStr.replace('@g.us', '').replace('@s.whatsapp.net', '');
            const apenasNumeros = semSufixo.replace(/\D/g, '');
            return apenasNumeros;
        }
        
        const gruposFormatados = gruposData.slice(0, 10).map(g => ({
            nome: g.nome,
            grupoID_original: g.grupoID,
            grupoID_limpo: limparIdGrupo(g.grupoID),
            id: g.id,
            groupId: g.groupId,
            grupo: g.grupo,
            participantes: g.participantes,
            categoria: g.categoria,
            boostData: g.boostData || 'Nenhum'
        }));
        
        res.json({
            success: true,
            totalGrupos: gruposData.length,
            primeirosGrupos: gruposFormatados,
            instrucao: 'Para impulsionar, use apenas os números do ID (campo "grupoID_limpo")',
            exemplo: 'Para "120363422637433802@g.us", use "120363422637433802"'
        });
        
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler arquivo' });
    }
});

// Endpoint para verificar sistema de Golds
app.get('/api/debug-golds', (req, res) => {
    try {
        const goldsData = carregarGolds();
        
        res.json({
            success: true,
            totalGruposGolds: goldsData.length,
            grupos: goldsData.map(g => ({
                nomeGrupo: g.grupo,
                totalUsuarios: g.usus.length,
                usuarios: g.usus.slice(0, 3).map(u => ({
                    id: u.id,
                    golds: u.Golds
                }))
            }))
        });
        
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler golds' });
    }
});
// Endpoint para verificar saldo do usuário
app.post('/api/check-user-golds', (req, res) => {
    try {
        const { userId, userGroup } = req.body;
        
        if (!userId) {
            return res.status(400).json({ error: 'userId é obrigatório' });
        }
        
        // Usar a função atualizarGolds com valor 0 para verificar saldo
        const result = atualizarGolds(userGroup || 'sistema', userId, 0);
        
        if (!result.success) {
            // Se não encontrou o usuário, ele tem 0 Golds
            return res.json({ 
                success: true, 
                golds: 0,
                userId: userId,
                userGroup: userGroup,
                message: 'Usuário não encontrado, saldo considerado como 0'
            });
        }
        
        res.json({ 
            success: true, 
            golds: result.golds,
            userId: userId,
            userGroup: userGroup
        });
        
    } catch (error) {
        console.error('Erro ao verificar Golds do usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para obter histórico de boosts
app.get('/api/user-boosts/:userId', (req, res) => {
    try {
        const { userId } = req.params;
        const { limit = 50 } = req.query;
        
        const boostHistoryPath = path.join(__dirname, 'boost-history.json');
        if (!fs.existsSync(boostHistoryPath)) {
            return res.json({ success: true, boosts: [], total: 0 });
        }
        
        const boostHistory = JSON.parse(fs.readFileSync(boostHistoryPath, 'utf8'));
        const userBoosts = boostHistory
            .filter(boost => boost.userId === userId)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, parseInt(limit));
        
        // Carregar grupos.json para obter informações atuais
        const gruposData = JSON.parse(fs.readFileSync('grupos.json', 'utf8'));
        
        // Enriquecer dados com status atual
        const enrichedBoosts = userBoosts.map(boost => {
            const grupo = gruposData.find(g => {
                const idLimpo = limparIdGrupo(g.grupoID || g.id || g.groupId || g.grupo);
                return idLimpo === boost.grupoId;
            });
            
            let status = 'completed';
            let daysLeft = 0;
            
            if (grupo && grupo.boostData) {
                const boostEnd = new Date(grupo.boostData.boostEnd);
                const now = new Date();
                
                if (boostEnd > now) {
                    status = 'active';
                    daysLeft = Math.ceil((boostEnd - now) / (1000 * 60 * 60 * 24));
                } else {
                    status = 'expired';
                }
            }
            
            return {
                ...boost,
                currentStatus: status,
                daysLeft: daysLeft,
                grupoAtual: grupo ? {
                    nome: grupo.nome,
                    participantes: grupo.participantes,
                    categoria: grupo.categoria
                } : null
            };
        });
        
        res.json({ 
            success: true, 
            boosts: enrichedBoosts,
            total: userBoosts.length,
            totalGoldsSpent: userBoosts.reduce((sum, boost) => sum + (boost.goldsSpent || 0), 0),
            userId: userId
        });
        
    } catch (error) {
        console.error('Erro ao obter boosts do usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para cancelar boost (reembolso parcial)
app.post('/api/cancel-boost', (req, res) => {
    try {
        const { grupoId, userId, refundPercentage = 50 } = req.body;
        
        if (!grupoId || !userId) {
            return res.status(400).json({ error: 'grupoId e userId são obrigatórios' });
        }
        
        // Implementação do cancelamento aqui
        // (Você pode adicionar essa funcionalidade depois)
        
        res.status(501).json({ 
            error: 'Funcionalidade em desenvolvimento',
            message: 'Cancelamento de boost será implementado em breve'
        });
        
    } catch (error) {
        console.error('Erro ao cancelar boost:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Função auxiliar para limpar ID (mesma do endpoint principal)
function limparIdGrupo(id) {
    if (!id) return '';
    
    const idStr = id.toString();
    const semSufixo = idStr.replace('@g.us', '').replace('@s.whatsapp.net', '');
    const apenasNumeros = semSufixo.replace(/\D/g, '');
    
    return apenasNumeros;
}

// Adicione esta rota no seu servidor (Node.js)
function readJSON(path, def = []) {
    if (!fs.existsSync(path)) return def;
    return JSON.parse(fs.readFileSync(path, 'utf8') || JSON.stringify(def));
}

function writeJSON(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Rota para criar pagamento via site
// Rota para criar pagamento via site
 
 
 function atualizarGoldsSistema({ grupo, id, goldChange }) {
    const valor = parseInt(goldChange);
    if (isNaN(valor)) throw new Error('Valor inválido');

    const goldsData = carregarGolds();
    let grupoData = goldsData.find(g => g.grupo === grupo);

    if (!grupoData) throw new Error('Grupo não encontrado');

    let usuarioGolds = grupoData.usus.find(u => u.id === id);
    if (!usuarioGolds) {
        usuarioGolds = { id, Golds: 0, data: getHoje() };
        grupoData.usus.push(usuarioGolds);
    }

    if (usuarioGolds.Golds + valor < 0) {
        throw new Error('Saldo insuficiente');
    }

    usuarioGolds.Golds += valor;

    // mantém compatibilidade com o sistema antigo
    AddGold2(valor, id, grupo);

    salvarGolds(goldsData);

    return usuarioGolds.Golds;
}

app.post('/comprar-golds-site', async (req, res) => {
try {
const { amount, userId, grupoId, phoneNumber } = req.body;

if (!amount || amount < 100000) {
return res.status(400).json({ error: 'Quantidade mínima: 100.000 Golds' });
}

// Verifica se o usuário está registrado    
const registroPath = path.join(__dirname, 'public', 'registro.json');    
    
// Lê o arquivo de registros    
let registros = [];    
if (fs.existsSync(registroPath)) {    
    const registrosData = fs.readFileSync(registroPath, 'utf8');    
    registros = JSON.parse(registrosData || '[]');    
}    
    
const registroUsuario = registros.find(registro => registro.numero === phoneNumber);    
    
if (!registroUsuario) {    
    return res.status(400).json({ error: 'Você precisa estar registrado em um grupo para comprar Golds' });    
}    
    
// SE o grupoId foi fornecido, usa ele, senão usa o grupo do usuário    
let grupoDestino;    
    
if (grupoId && grupoId !== 'default' && grupoId !== 'auto') {    
    // Verificar se o usuário tem acesso a este grupo    
    grupoDestino = grupoId;    
} else {    
    // Usa o grupo padrão do usuário    
    grupoDestino = registroUsuario.grupo;    
}    
    
// Se não houver grupo destino válido    
if (!grupoDestino || grupoDestino === 'Privado') {    
    return res.status(400).json({ error: 'Selecione um grupo válido para receber os Golds' });    
}    
    
// Calcula o preço    
const valorPor100k = 1; // R$ 1,00 por 100.000 Golds    
const preco = (amount / 100000) * valorPor100k;    
    
// Criar pagamento PIX    
const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');    
const inf = await pagament.create_payment(preco);    
    
// Salvar transação pendente no banco de dados    
const transacao = {    
    id: Date.now().toString(),    
    userId: userId,    
    phoneNumber: phoneNumber,    
    amount: amount,    
    price: preco,    
    groupId: grupoDestino,    
    paymentId: inf.payment_id,    
    status: 'pending',    
    createdAt: new Date().toISOString()    
};    
    
// Salvar transação    
const transacoesPath = 'transacoes.json';    
let transacoes = [];    
if (fs.existsSync(transacoesPath)) {    
    const transacoesData = fs.readFileSync(transacoesPath, 'utf8');    
    transacoes = JSON.parse(transacoesData || '[]');    
}    
transacoes.push(transacao);    
fs.writeFileSync(transacoesPath, JSON.stringify(transacoes, null, 2));    
    
// Retornar dados do pagamento    
res.json({    
    success: true,    
    qrCode: inf.qr_code,    
    copyPaste: inf.copy_paste,    
    amount: amount,    
    price: preco,    
    group: grupoDestino,    
    transactionId: transacao.id    
});

} catch (error) {
console.error('Erro ao criar pagamento:', error);
res.status(500).json({ error: 'Erro ao criar pagamento' });
}

});

app.get('/verificar-pagamento/:transactionId', async (req, res) => {
try {
const { transactionId } = req.params;

// Carregar transação  
    const transacoes = JSON.parse(fs.readFileSync('transacoes.json', 'utf8') || '[]');  
    const transacao = transacoes.find(t => t.id === transactionId);  
      
    if (!transacao) {  
        return res.status(404).json({ error: 'Transação não encontrada' });  
    }  
      
    // Verificar pagamento com API  
    const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');  
    const check = await buscarPagamentoMP2(transacao.paymentId);  
      
    if (check.status === 'approved' && transacao.status === 'pending') {  
        // Atualizar status  
        transacao.status = 'approved';  
        transacao.approvedAt = new Date().toISOString();  
          
        // Adicionar Golds ao grupo  
        AddGold2(transacao.amount, transacao.phoneNumber, transacao.groupId);  
          
        // Notificar no chat  
        const mensagem = `🎉 *PAGAMENTO APROVADO VIA SITE!*\n\n` +  
                       `👤 Usuário: ${transacao.phoneNumber}\n` +  
                       `💰 Golds: ${transacao.amount.toLocaleString()}\n` +  
                       `💵 Valor: R$ ${transacao.price.toFixed(2)}\n` +  
                       `👥 Grupo: ${transacao.groupId}\n` +  
                       `📅 ${new Date().toLocaleString()}`;  
          
        // Enviar notificação para o grupo do bot  
        enviarNotificacaoGrupo(transacao.groupId, mensagem);  
          
        // Salvar transações atualizadas  
        fs.writeFileSync('transacoes.json', JSON.stringify(transacoes, null, 2));  
    }  
      
    res.json({  
        status: transacao.status,  
        amount: transacao.amount,  
        group: transacao.groupId  
    });  
      
} catch (error) {  
    console.error('Erro ao verificar pagamento:', error);  
    res.status(500).json({ error: 'Erro ao verificar pagamento' });  
}

});


/*async function buscarPagamentoMP(paymentId) {
    const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
            headers: {
                Authorization: `Bearer APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349`,
            },
            timeout: 10000,
        }
    );

    return response.data;
}
app.post('/webhook-mercadopago', async (req, res) => {
    try {
        console.log('🔔 Webhook Mercado Pago recebido');
        console.log('Body:', req.body);

        const paymentId = req.body?.data?.id;
        if (!paymentId) {
            console.log('⚠️ paymentId não encontrado');
            return res.sendStatus(200);
        }

        // 🔎 Consulta oficial ao MP
        const info = await buscarPagamentoMP(paymentId);

        console.log(`📦 Status MP (${paymentId}):`, info.status);

        // 🔍 Buscar transação pendente
        const transacoes = readJSON(TRANSACOES_FILE, []);
        const transacao = transacoes.find(
            t => t.paymentId == paymentId && t.status === 'pending'
        );

        if (!transacao) {
            console.log('ℹ️ Transação não encontrada ou já processada');
            return res.sendStatus(200);
        }

        // 🔄 Atualiza status local
        transacao.mpStatus = info.status;

        // ✅ APROVADO
        if (info.status === 'approved') {
            await processarPagamentoAprovado(transacao);
            await enviarMensagensPagamento(transacao);
            enviarMensagemChatPagamento(transacao);

            transacao.status = 'completed';
            transacao.completedAt = new Date().toISOString();

            console.log('✅ Pagamento aprovado e processado');
        }

        // ⏰ EXPIRADO
        else if (info.status === 'expired') {
            await enviarMensagemExpirada(transacao);
            transacao.status = 'expired';
        }

        // ❌ REJEITADO
        else if (info.status === 'rejected') {
            await enviarMensagemRejeitada(transacao);
            transacao.status = 'rejected';
        }

        // 💾 Salva tudo
        writeJSON(TRANSACOES_FILE, transacoes);

        return res.sendStatus(200);

    } catch (err) {
        console.error('❌ Erro no webhook Mercado Pago:', err.message);
        return res.sendStatus(200);
    }
});
*/

// Rota temporária para testar se o webhook está sendo chamado
app.post('/test-webhook', async (req, res) => {
    console.log('📢 Webhook de teste recebido!');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Query:', req.query);
    
    // Simula uma resposta do Mercado Pago
    const testData = {
        action: 'payment.created',
        api_version: 'v1',
        data: {
            id: '1234567890'
        },
        date_created: new Date().toISOString(),
        id: 123456,
        live_mode: false,
        type: 'payment',
        user_id: '123456789'
    };
    
    res.json({
        message: 'Webhook recebido com sucesso!',
        received: testData
    });
});

// Rota para simular uma notificação (para testes)
app.get('/simular-webhook', async (req, res) => {
    try {
        const paymentId = req.query.id || '1234567890';
        
        // Simula o que o Mercado Pago enviaria
        const webhookData = {
            data: {
                id: paymentId
            },
            type: 'payment',
            action: 'payment.updated'
        };
        
        // Chama seu próprio webhook (simulação)
        const response = await fetch(`http://localhost:3000/webhook-mercadopago`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-signature': 'test-signature'
            },
            body: JSON.stringify(webhookData)
        });
        
        res.json({
            message: 'Webhook simulado enviado',
            paymentId,
            status: response.status
        });
        
    } catch (error) {
        console.error('Erro ao simular webhook:', error);
        res.status(500).json({ error: error.message });
    }
});


app.get('/grupos-disponiveis/:phoneNumber?', async (req, res) => {
    try {
        const { phoneNumber } = req.params;
        
        console.log('📱 Buscando todos os grupos disponíveis...');
        
        // Carregar todos os grupos (do grupos.json)
        const gruposPath = path.join(__dirname, 'public', 'grupos.json');
        let gruposInfo = [];
        
        try {
            if (fs.existsSync(gruposPath)) {
                const gruposData = fs.readFileSync(gruposPath, 'utf8') || '[]';
                gruposInfo = JSON.parse(gruposData);
                console.log('📋 Total de grupos carregados:', gruposInfo.length);
            } else {
                console.error('❌ grupos.json não encontrado');
                return res.json({
                    success: false,
                    grupos: [],
                    message: 'Arquivo de grupos não encontrado'
                });
            }
        } catch (error) {
            console.error('❌ Erro ao carregar grupos.json:', error);
            return res.status(500).json({ 
                success: false,
                error: 'Erro ao carregar grupos',
                details: error.message 
            });
        }
        
        // Se houver phoneNumber, verificar em quais grupos o usuário está
        let gruposUsuario = [];
        if (phoneNumber) {
            const registroPath = path.join(__dirname, 'registro.json');
            let registros = [];
            
            try {
                if (fs.existsSync(registroPath)) {
                    const registrosData = fs.readFileSync(registroPath, 'utf8');
                    registros = JSON.parse(registrosData);
                    
                    // Filtrar grupos do usuário
                    const numeroLimpo = phoneNumber.replace('@s.whatsapp.net', '');
                    gruposUsuario = registros
                        .filter(registro => {
                            if (!registro.numero || !registro.grupo) return false;
                            const registroNumero = registro.numero.replace('@s.whatsapp.net', '');
                            return registroNumero === numeroLimpo;
                        })
                        .map(registro => registro.grupo);
                    
                    console.log('👤 Grupos do usuário:', gruposUsuario.length);
                }
            } catch (error) {
                console.error('⚠️ Erro ao carregar registro:', error);
            }
        }
        
        // Mapear todos os grupos com informações
        const gruposComInfo = gruposInfo.map((grupo, index) => {
            const estaNoGrupo = gruposUsuario.includes(grupo.grupoID || grupo.id || grupo.grupo);
            
            return {
                grupoId: grupo.grupoID || grupo.id || grupo.grupo,
                nome: grupo.nome || grupo.groupName || `Grupo ${index + 1}`,
                descricao: grupo.descricao || grupo.description || 'Grupo de conversa no WhatsApp',
                participantes: grupo.participantes || grupo.members || grupo.participants || 0,
                categoria: grupo.categoria || grupo.category || 'Geral',
                imagem: grupo.imagem || grupo.image || grupo.thumbnail || '/flogo.jpg',
                link: grupo.link || grupo.linkGrupo || '',
                estaNoGrupo: estaNoGrupo, // Se o usuário já está no grupo
                isDefault: index === 0
            };
        });
        
        console.log('✅ Grupos processados:', gruposComInfo.length);
        
        res.json({
            success: true,
            grupos: gruposComInfo,
            total: gruposComInfo.length,
            message: `Encontrados ${gruposComInfo.length} grupos disponíveis`
        });
        
    } catch (error) {
        console.error('❌ Erro ao buscar grupos:', error);
        res.status(500).json({ 
            success: false,
            error: 'Erro ao buscar grupos',
            details: error.message 
        });
    }
});
app.get('/grupos-usuario-comprar/:phoneNumber', async (req, res) => {
    try {
        const { phoneNumber } = req.params;
        
        // Remove o @s.whatsapp.net se existir
        const numeroLimpo = phoneNumber.replace('@s.whatsapp.net', '');
        
        console.log('Buscando grupos para compra:', numeroLimpo);
        
        // Carregar registros
        let registros = [];
        try {
            const registrosData = path.join(__dirname, 'public', 'registro.json');
            registros = JSON.parse(registrosData);
        } catch (error) {
            console.error('Erro ao carregar registros:', error);
        }
        
        // Encontrar todos os grupos onde o usuário está registrado
        const gruposUsuario = registros.filter(registro => {
            const registroNumero = registro.numero.replace('@s.whatsapp.net', '');
            return registroNumero === numeroLimpo;
        });
        
        if (gruposUsuario.length === 0) {
            return res.json({
                success: true,
                grupos: [],
                message: 'Usuário não encontrado em nenhum grupo'
            });
        }
        
        // Carregar informações dos grupos
        let gruposInfo = [];
        try {
            const gruposData = path.join(__dirname, 'public', 'grupos.json') || '[]';
            gruposInfo = JSON.parse(gruposData);
        } catch (error) {
            console.error('Erro ao carregar grupos.json:', error);
        }
        
        // Mapear grupos com informações adicionais
        const gruposComInfo = gruposUsuario.map((registro, index) => {
            const grupoInfo = gruposInfo.find(g => {
                return g.grupoID === registro.grupo || 
                       g.groupId === registro.grupo ||
                       g.id === registro.grupo ||
                       g.grupo === registro.grupo;
            });
            
            // Buscar golds do usuário neste grupo específico
            const goldsNoGrupo = registro.golds || 0;
            
            return {
                grupoId: registro.grupo,
                nome: grupoInfo?.nome || grupoInfo?.groupName || `Grupo ${registro.grupo}`,
                descricao: grupoInfo?.descricao || grupoInfo?.description || 'Sem descrição',
                participantes: grupoInfo?.participantes || grupoInfo?.members || 0,
                goldsAtuais: goldsNoGrupo,
                isDefault: index === 0,
                dataRegistro: registro.data || 'Não informada'
            };
        });
        
        res.json({
            success: true,
            grupos: gruposComInfo,
            totalGrupos: gruposComInfo.length
        });
        
    } catch (error) {
        console.error('Erro ao buscar grupos:', error);
        res.status(500).json({ 
            success: false,
            error: 'Erro ao buscar grupos',
            details: error.message 
        });
    }
});
app.get('/grupos-usuario/:phoneNumber', async (req, res) => {
    try {
        const { phoneNumber } = req.params;
        
        // Remove o @s.whatsapp.net se existir
        const numeroLimpo = phoneNumber.replace('@s.whatsapp.net', '');
        
        console.log('Buscando grupos para:', numeroLimpo);
        
        // Carregar registros
        let registros = [];
        try {
            const registrosData = path.join(__dirname, 'public', 'registro.json');
          
            registros = JSON.parse(registrosData);
            console.log('Total de registros:', registros.length);
        } catch (error) {
            console.error('Erro ao carregar registros:', error);
        }
        
        // Encontrar todos os grupos onde o usuário está registrado
        const gruposUsuario = registros.filter(registro => {
            const registroNumero = registro.numero.replace('@s.whatsapp.net', '');
            return registroNumero === numeroLimpo;
        });
        
        console.log('Grupos encontrados:', gruposUsuario.length);
        
        if (gruposUsuario.length === 0) {
            return res.json({
                success: true,
                grupos: [],
                message: 'Usuário não encontrado em nenhum grupo'
            });
        }
        
        // Carregar informações dos grupos
        let gruposInfo = [];
        try {
            const gruposData = path.join(__dirname, 'public', 'grupos.json') || '[]';
            gruposInfo = JSON.parse(gruposData);
        } catch (error) {
            console.error('Erro ao carregar grupos.json:', error);
        }
        
        // Mapear grupos com informações adicionais
        const gruposComInfo = gruposUsuario.map((registro, index) => {
            const grupoInfo = gruposInfo.find(g => {
                // Tenta encontrar por diferentes campos
                return g.grupoID === registro.grupo || 
                       g.groupId === registro.grupo ||
                       g.id === registro.grupo ||
                       g.grupo === registro.grupo;
            });
            
            return {
                grupoId: registro.grupo,
                nome: grupoInfo?.nome || grupoInfo?.groupName || `Grupo ${registro.grupo}`,
                descricao: grupoInfo?.descricao || grupoInfo?.description || 'Sem descrição',
                participantes: grupoInfo?.participantes || grupoInfo?.members || 0,
                isDefault: index === 0 // primeiro é o default
            };
        });
        
        console.log('Grupos processados:', gruposComInfo.length);
        
        res.json({
            success: true,
            grupos: gruposComInfo
        });
        
    } catch (error) {
        console.error('Erro ao buscar grupos:', error);
        res.status(500).json({ 
            success: false,
            error: 'Erro ao buscar grupos',
            details: error.message 
        });
    }
});
app.get('/verificar-pagamento/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;

        // Carregar transação  
        const transacoes = JSON.parse(fs.readFileSync('transacoes.json', 'utf8') || '[]');  
        const transacao = transacoes.find(t => t.id === transactionId);  
          
        if (!transacao) {  
            return res.status(404).json({ error: 'Transação não encontrada' });  
        }  
          
        // Verificar pagamento com API  
        const pagament = new payment('APP_USR-2666194561712884-112319-3f11c6026afefce5fcaa76e8cd065bf4-1140878349');  
        const check = await buscarPagamentoMP2(transacao.paymentId);  
          
        if (check.status === 'approved' && transacao.status === 'pending') {  
            // Atualizar status  
            transacao.status = 'approved';  
            transacao.approvedAt = new Date().toISOString();  
              
            // SE FOR COMPRA DE PLANO WHATSAPP
            if (transacao.type === 'whatsapp_plan') {
                // Ativar número do WhatsApp
                await activateWhatsAppPlan(transacao);
                
                // Notificar no chat
                const mensagem = `🎉 *PLANO WHATSAPP ATIVADO!*\n\n` +  
                               `👤 Usuário: ${transacao.userId}\n` +  
                               `📱 Número: ${transacao.phoneNumber}\n` +  
                               `📋 Plano: ${transacao.planName}\n` +  
                               `⏱️ Duração: ${transacao.days} dias\n` +  
                               `💵 Valor: R$ ${transacao.price.toFixed(2)}\n` +  
                               `📅 Ativado em: ${new Date().toLocaleString()}`;
                
                // Enviar notificação para o grupo do bot  
              //  enviarNotificacaoGrupo(transacao.groupId, mensagem);
            } 
            // SE FOR COMPRA DE GOLDS (seu código original)
            else {
                // Adicionar Golds ao grupo  
                AddGold2(transacao.amount, transacao.phoneNumber, transacao.groupId);  
                  
                // Notificar no chat  
                const mensagem = `🎉 *PAGAMENTO APROVADO VIA SITE!*\n\n` +  
                               `👤 Usuário: ${transacao.phoneNumber}\n` +  
                               `💰 Golds: ${transacao.amount.toLocaleString()}\n` +  
                               `💵 Valor: R$ ${transacao.price.toFixed(2)}\n` +  
                               `👥 Grupo: ${transacao.groupId}\n` +  
                               `📅 ${new Date().toLocaleString()}`;  
                  
                // Enviar notificação para o grupo do bot  
             //   enviarNotificacaoGrupo(transacao.groupId, mensagem);  
            }
              
            // Salvar transações atualizadas  
            fs.writeFileSync('transacoes.json', JSON.stringify(transacoes, null, 2));  
        }  
          
        res.json({  
            status: transacao.status,
            type: transacao.type,
            phoneNumber: transacao.phoneNumber,
            plan: transacao.planName || null,
            days: transacao.days || null,
            amount: transacao.amount || 0
        });  
          
    } catch (error) {  
        console.error('Erro ao verificar pagamento:', error);  
        res.status(500).json({ error: 'Erro ao verificar pagamento' });  
    }
});

// Função para ativar plano do WhatsApp
async function activateWhatsAppPlan(transacao) {
    try {
        // Calcular data de expiração
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + transacao.days);
        
        // Salvar número ativo do usuário
        const userNumbersPath = path.join(__dirname, 'public/database/user-numbers.json');
        let userNumbers = [];
        
        if (fs.existsSync(userNumbersPath)) {
            userNumbers = JSON.parse(fs.readFileSync(userNumbersPath, 'utf8') || '[]');
        }
        
        // Remover plano anterior do mesmo número (se houver)
        userNumbers = userNumbers.filter(n => 
            !(n.userId === transacao.userId && n.phoneNumber === transacao.phoneNumber)
        );
        
        // Adicionar novo plano
        const userNumber = {
            userId: transacao.userId,
            phoneNumber: transacao.phoneNumber,
            plan: transacao.plan,
            planName: transacao.planName,
            price: transacao.price,
            days: transacao.days,
            status: 'active',
            purchasedAt: new Date().toISOString(),
            expiresAt: expiresAt.toISOString(),
            paymentId: transacao.paymentId,
            transactionId: transacao.id
        };
        
        userNumbers.push(userNumber);
        
        // Salvar números do usuário
        fs.writeFileSync(userNumbersPath, JSON.stringify(userNumbers, null, 2));
        
        console.log(`✅ Plano WhatsApp ativado: ${transacao.phoneNumber} para ${transacao.days} dias`);
        
    } catch (error) {
        console.error('Erro ao ativar plano WhatsApp:', error);
        throw error;
    }
}

// Função auxiliar para enviar notificação ao grupo
function enviarNotificacaoGrupo(grupoId, mensagem) {
    // Implemente conforme seu sistema
    // Exemplo: enviar mensagem para o WhatsApp
    console.log(`Notificação para grupo ${grupoId}: ${mensagem}`);
}


// Supondo que rggold seja o array de grupos e usuarios, e usu seja o ID do usuário

// Passe a variável `globalRank` para o template





function getHoje() {
    const data = new Date();
    return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear().toString().slice(2)}`;
}


// Middleware para verificar se o usuário está autenticado
function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next(); // Se o usuário estiver logado, continua para a próxima rota
    } else {
        req.flash('error_msg', 'Por favor, faça o login para continuar!');
        return res.redirect('/users/login'); // Se não estiver logado, redireciona para login
    }
}
// Página protegida após login


// Caminho para o arquivo JSON de registro


// Rota para a página de documentos (onde você quer exibir as informações do usuário)



const rankingFilePath = path.join(__dirname, 'public', 'musicas.json');

// Função para atualizar o ranking das músicas pedidas


function atualizarRanking(musica, ip) {
  let ranking = [];

  if (fs.existsSync(rankingFilePath)) {
    const data = fs.readFileSync(rankingFilePath);
    ranking = JSON.parse(data);
  }

  const index = ranking.findIndex((item) => item.nome === musica);

  if (index !== -1) {
    ranking[index].quantidade += 1;

    // Atualiza IP
    if (!ranking[index].ips) ranking[index].ips = {};
    if (!ranking[index].ips[ip]) ranking[index].ips[ip] = 1;
    else ranking[index].ips[ip] += 1;

  } else {
    // Cria novo item com o IP já iniciado
    ranking.push({
      nome: musica,
      quantidade: 1,
      ips: {
        [ip]: 1
      }
    });
  }

  // Ordena por quantidade e mantém Top 10
  ranking.sort((a, b) => b.quantidade - a.quantidade);
  
  

  fs.writeFileSync(rankingFilePath, JSON.stringify(ranking, null, 2));
}
const activeUsers = new Set();

const logPath = path.join(__dirname, 'logs.json');

app.post('/play', async (req, res) => {
  const { query, userId, User } = req.body;

  // 🔒 Validação melhorada
  if (!userId || (userId !== "https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x" && userId !== "site")) {
    return res.status(400).json({ 
      error: 'ID_USUARIO_INVALIDO', 
      message: '⚠️ ID do usuário inválido. Use: https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x' 
    });
  }
  
  if (!query || query.trim().length < 2) {
    return res.status(400).json({ 
      error: 'QUERY_INVALIDA', 
      message: '⚠️ Informe o nome da música (mínimo 2 caracteres)' 
    });
  }
  
  if (!User || User.length < 3) {
    return res.status(400).json({ 
      error: 'USUARIO_INVALIDO', 
      message: 'Usuário inválido. Entre em contato: +55 21 98904-7220' 
    });
  }

  // 📍 Pegar IP do cliente com melhor precisão
  const userIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.ip || 
                 'IP_DESCONHECIDO';

  // 🕒 Horário de Brasília com melhor formatação
  const agora = new Date();
  const dataHoraBR = agora.toLocaleString("pt-BR", { 
    timeZone: "America/Sao_Paulo",
    dateStyle: 'short',
    timeStyle: 'medium'
  });

  // 📊 Log estruturado
  const logEntry = {
    query: query.trim().substring(0, 100), // Limita tamanho
    userId: userId.substring(0, 50),
    User: User.substring(0, 30),
    ip: userIP,
    horario: dataHoraBR,
    timestamp: agora.getTime()
  };

  // 🔄 Sistema de logs melhorado
  const salvarLog = () => {
    try {
      let logs = {};
      if (fs.existsSync(logPath)) {
        const fileContent = fs.readFileSync(logPath, 'utf8');
        if (fileContent.trim()) {
          logs = JSON.parse(fileContent);
        }
      }

      // Limite de logs por IP (últimas 100 requisições)
      if (!logs[userIP]) {
        logs[userIP] = [];
      }
      
      logs[userIP].push(logEntry);
      
      // Mantém apenas os últimos 100 logs por IP
      if (logs[userIP].length > 100) {
        logs[userIP] = logs[userIP].slice(-100);
      }

      // Limita o total de IPs armazenados
      const ipKeys = Object.keys(logs);
      if (ipKeys.length > 1000) {
        // Remove os IPs mais antigos baseado no último log
        const sortedIPs = ipKeys.sort((a, b) => {
          const lastLogA = logs[a][logs[a].length - 1]?.timestamp || 0;
          const lastLogB = logs[b][logs[b].length - 1]?.timestamp || 0;
          return lastLogA - lastLogB;
        });
        
        // Mantém apenas os 1000 IPs mais recentes
        const ipsToRemove = sortedIPs.slice(0, ipKeys.length - 1000);
        ipsToRemove.forEach(ip => delete logs[ip]);
      }

      fs.writeFileSync(logPath, JSON.stringify(logs, null, 2), 'utf8');
      console.log(`📄 Log salvo: IP=${userIP}, User=${User}, Query="${query.substring(0, 30)}..."`);
      
    } catch (error) {
      console.error('❌ Erro ao salvar log:', error.message);
    }
  };

  salvarLog();

  // 🔄 Gerenciamento de usuários ativos
  if (!global.activeUsers) global.activeUsers = new Set();
  if (!global.activeUsers2) global.activeUsers2 = new Set();

  // ⏳ Sistema de rate limiting melhorado
  if (global.activeUsers.has(User)) {
    return res.status(429).json({ 
      error: 'RATE_LIMIT_EXCEDIDO',
      message: `⏳ Aguarde! Você já tem um processamento em andamento.`,
      dica: 'Tente novamente em alguns segundos.',
      canal: 'https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x'
    });
  }

  // 🔧 Inicializa timers de controle
  const tempoInicio = Date.now();
  let tempoBusca = 0;
  let tempoDownload = 0;

  try {
    global.activeUsers.add(User);

    // 🔑 API Keys organizadas por prioridade
    const API_KEYS = {
      bronxys: ["Bronxys30092025"],
      nexfuture: ["a48a2450-a134-4e7d-8203-10f1f1725d81"],
      geral: []
    };

    // ==================== NOVO SCRAPER YTMP3.gg ====================
    const videoquality = ['1080', '720', '480', '360', '240', '144'];
    const audiobitrate = ['128', '320'];

    async function searchYtmp3gg(q) {
      try {
        console.log(`🔍 YTMP3.gg: Buscando "${q.substring(0, 50)}..."`);
        const r = await axios.get('https://yt-extractor.y2mp3.co/api/youtube/search?q=' + encodeURIComponent(q), {
          headers: {
            'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36',
            accept: 'application/json',
            origin: 'https://ytmp3.gg',
            referer: 'https://ytmp3.gg/'
          },
          timeout: 60000
        });
        
        const i = r.data.items.find(v => v.type === 'stream');
        if (!i) throw new Error('Vídeo não encontrado no YTMP3.gg');
        
        console.log(`✅ YTMP3.gg: Encontrado "${i.title?.substring(0, 50)}..."`);
        return i;
      } catch (error) {
        console.warn(`⚠️ YTMP3.gg search error: ${error.message}`);
        throw error;
      }
    }

    async function downloadYtmp3gg(url, type = 'mp3', quality = '320') {
      try {
        console.log(`🔗 YTMP3.gg: Download ${type} quality ${quality}`);
        
        if (type === 'mp4' && !videoquality.includes(String(quality))) {
          throw new Error('Qualidade de vídeo inválida');
        }
        if (type === 'mp3' && !audiobitrate.includes(String(quality))) {
          quality = '320'; // Default para 320kbps se inválido
        }
        
        const payload = type === 'mp4' 
          ? { 
              url, 
              downloadMode: 'video', 
              brandName: 'ytmp3.gg', 
              videoQuality: String(quality), 
              youtubeVideoContainer: 'mp4' 
            } 
          : { 
              url, 
              downloadMode: 'audio', 
              brandName: 'ytmp3.gg', 
              audioFormat: 'mp3', 
              audioBitrate: String(quality) 
            };
        
        const r = await axios.post('https://hub.y2mp3.co', payload, {
          headers: {
            'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36',
            accept: 'application/json',
            'content-type': 'application/json',
            origin: 'https://ytmp3.gg',
            referer: 'https://ytmp3.gg/'
          },
          timeout: 60000
        });
        
        if (!r.data?.url) throw new Error('Download falhou no YTMP3.gg');
        
        console.log(`✅ YTMP3.gg: Download pronto, tamanho: ${r.data.filesize || 'desconhecido'}`);
        return r.data;
      } catch (error) {
        console.warn(`⚠️ YTMP3.gg download error: ${error.message}`);
        throw error;
      }
    }

    async function ytmp3Wrapper(input, type = 'mp3', quality = '320') {
      try {
        let info;
        let url = input;
        
        // Se não for URL, busca primeiro
        if (!/^https?:\/\//i.test(input)) {
          info = await searchYtmp3gg(input);
          url = info.id;
        } else {
          // Para URLs, tenta obter info básica
          info = {
            title: null,
            thumbnailUrl: null,
            uploaderName: null,
            duration: null,
            viewCount: null,
            uploadDate: null
          };
        }
        
        const dl = await downloadYtmp3gg(url, type, quality);
        
        return {
          title: info.title || `Áudio ${type === 'mp3' ? 'MP3' : 'MP4'}`,
          thumbnail: info.thumbnailUrl || "",
          uploader: info.uploaderName || "Desconhecido",
          duration: info.duration || null,
          viewCount: info.viewCount || null,
          uploadDate: info.uploadDate || null,
          type,
          quality: String(quality),
          url: dl.url,
          filename: dl.filename,
          filesize: dl.filesize,
          source: 'YTMP3.gg'
        };
      } catch (error) {
        console.error(`❌ YTMP3.gg wrapper error: ${error.message}`);
        throw error;
      }
    }
    // ==================== FIM DO SCRAPER YTMP3.gg ====================

    // 🎯 Função de busca otimizada com cache
    const searchYouTube = async (searchQuery) => {
      const buscaInicio = Date.now();
      console.log(`🔍 Buscando: "${searchQuery}"`);
      
      const resultados = [];
      const erros = [];

      // Estratégia 1: Busca paralela para APIs principais
      const buscaParalela = [
        // API Bronxys (mais rápida geralmente)
        (async () => {
          for (const key of API_KEYS.bronxys) {
            try {
              console.log(`- Testando Bronxy com key: ${key.substring(0, 5)}...`);
              const res = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb`, {
                params: { nome: searchQuery, apikey: key },
                timeout: 60000
              });
              
              if (Array.isArray(res.data) && res.data.length > 0 && res.data[0].url) {
                const result = res.data[0];
                console.log(`✅ Bronxy: ${result.titulo.substring(0, 50)}...`);
                return {
                  url: result.url,
                  image: result.thumb || "",
                  title: result.titulo,
                  desc: result.desc || "",
                  tempo: result.tempo || "0:00",
                  fonte: "Bronxy",
                  qualidade: "alta"
                };
              }
            } catch (err) {
              erros.push(`Bronxy: ${err.message}`);
            }
          }
          return null;
        })(),

        // API OotaIzumi
        (async () => {
          try {
            console.log("- Testando OotaIzumi API");
            const res = await axios.get('https://api.ootaizumi.web.id/downloader/youtube-play', {
              params: { query: searchQuery },
              timeout: 60000
            });

            if (res.data?.status && res.data.result?.url) {
              const result = res.data.result;
              console.log(`✅ OotaIzumi: ${result.title.substring(0, 50)}...`);
              return {
                url: result.url,
                title: result.title,
                image: result.thumbnail || "",
                desc: result.description || "",
                tempo: result.metadata?.duration || "0:00",
                views: result.metadata?.view || "",
                canal: result.author?.channelTitle || "",
                fonte: "OotaIzumi",
                qualidade: result.metadata?.quality || "média"
              };
            }
          } catch (err) {
            erros.push(`OotaIzumi: ${err.response?.data?.mensagem || err.message}`);
          }
          return null;
        })(),

        // API NexFuture
        (async () => {
          try {
            console.log("- Testando NexFuture");
            const res = await axios.get('https://api.nexfuture.com.br/api/downloads/play', {
              params: { query: searchQuery, apikey: API_KEYS.nexfuture[0] },
              timeout: 60000
            });

            if (res.data?.status && res.data.result?.video?.url) {
              const result = res.data.result;
              console.log(`✅ NexFuture: ${result.video.title.substring(0, 50)}...`);
              return {
                url: result.video.url,
                title: result.video.title,
                image: result.video.thumbnails?.[1]?.url || result.video.thumbnails?.[0]?.url || "",
                desc: result.video.description || "",
                tempo: result.video.duration || "0:00",
                views: result.video.views || "",
                canal: result.channel?.name || "",
                fonte: "NexFuture",
                qualidade: "alta"
              };
            }
          } catch (err) {
            erros.push(`NexFuture: ${err.response?.data?.mensagem || err.message}`);
          }
          return null;
        })()
      ];

      // Aguarda resultados da busca paralela
      const resultadosParalelos = await Promise.allSettled(buscaParalela);
      
      // Processa resultados bem-sucedidos
      resultadosParalelos.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled' && resultado.value) {
          resultados.push(resultado.value);
        }
      });

      // Se não encontrou nada na busca paralela, tenta APIs secundárias
      if (resultados.length === 0) {
        console.log("🔍 Nada na busca paralela, tentando APIs secundárias...");
        
        // API Anomaki
        try {
          console.log("- Testando Anomaki (secundária)");
          const res = await axios.get(`https://www.apis-anomaki.zone.id/search/ytsearch`, {
            params: { query: searchQuery },
            timeout: 60000
          });
          
          const vid = res.data?.result?.videos?.[0];
          if (res.data?.status && vid?.url) {
            console.log(`✅ Anomaki: ${vid.title.substring(0, 50)}...`);
            resultados.push({
              url: vid.url,
              image: vid.thumbnail || "",
              title: vid.title,
              desc: vid.author?.url || "",
              tempo: vid.duration || "0:00",
              fonte: "Anomaki",
              qualidade: "média"
            });
          }
        } catch (err) {
          erros.push(`Anomaki: ${err.message}`);
        }
      }

      tempoBusca = Date.now() - buscaInicio;

      if (resultados.length > 0) {
        // Seleciona o melhor resultado baseado em qualidade e tempo
        const melhorResultado = resultados.sort((a, b) => {
          const qualidadeScore = { "alta": 3, "média": 2, "baixa": 1 };
          return (qualidadeScore[b.qualidade] || 1) - (qualidadeScore[a.qualidade] || 1);
        })[0];

        console.log(`🎯 Resultado selecionado: ${melhorResultado.fonte} - "${melhorResultado.title.substring(0, 60)}..."`);
        console.log(`⏱️ Tempo de busca: ${(tempoBusca / 1000).toFixed(2)}s`);
        
        return melhorResultado;
      }

      throw new Error(`Nenhum resultado encontrado. Erros: ${erros.slice(0, 3).join(', ')}`);
    };

    // 🎵 Busca o vídeo
    const videoData = await searchYouTube(query);
    console.log(`📌 Vídeo encontrado: "${videoData.title}" (${videoData.fonte})`);

    // 🔊 Sistema de download de áudio otimizado
    const verificarAudioValido = (buffer) => {
      if (!buffer || buffer.length < 50000) { // Mínimo 50KB
        return { valido: false, motivo: 'Tamanho insuficiente' };
      }

      // Verifica assinatura de áudio
      const header = buffer.slice(0, 4);
      const hexHeader = header.toString('hex').toUpperCase();
      
      // MP3 (ID3 ou MPEG)
      if (hexHeader.startsWith('494433') || // ID3
          (header[0] === 0xFF && (header[1] & 0xE0) === 0xE0)) { // MPEG
        return { valido: true, formato: 'mp3' };
      }
      
      // M4A/MP4
      if (hexHeader.startsWith('66747970') || // ftyp
          hexHeader.startsWith('00000020') || 
          hexHeader.startsWith('00000018')) {
        return { valido: true, formato: 'm4a' };
      }
      
      // OGG
      if (hexHeader.startsWith('4F676753')) { // OggS
        return { valido: true, formato: 'ogg' };
      }

      // Verifica se é HTML/JSON/erro
      const textoInicial = buffer.slice(0, 200).toString('ascii');
      if (textoInicial.includes('<html') || 
          textoInicial.includes('<!DOCTYPE') || 
          textoInicial.includes('{') ||
          textoInicial.includes('[') ||
          textoInicial.includes('"error"') ||
          textoInicial.includes('"Error"')) {
        return { valido: false, motivo: 'Conteúdo HTML/JSON detectado' };
      }

      // Se passou por todas as verificações
      return { valido: true, formato: 'desconhecido' };
    };

    const downloadAudio = async (url, apiName, timeout = 60000) => {
      console.log(`🔗 Tentando ${apiName}...`);
      
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, { 
          signal: controller.signal,
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          console.warn(`⚠️ ${apiName}: HTTP ${response.status}`);
          return null;
        }

        const contentType = response.headers.get('content-type') || '';
        const contentLength = response.headers.get('content-length');
        
        console.log(`📊 ${apiName}: ${contentType}, ${contentLength ? Math.round(parseInt(contentLength) / 1024) + 'KB' : 'tamanho desconhecido'}`);

        // Se for JSON, extrai o link
        if (contentType.includes('application/json')) {
          const json = await response.json();
          
          // Extrai link de várias estruturas possíveis
          const linkExtraido = 
            json.download?.url ||
            json.download_url ||
            json.url ||
            json.result?.url ||
            json.resultado?.url ||
            json.audio_url ||
            json.link ||
            (typeof json.result === 'string' ? json.result : null);

          if (!linkExtraido || !linkExtraido.startsWith('http')) {
            console.warn(`⚠️ ${apiName}: Link extraído inválido`);
            return null;
          }

          // Faz download do áudio real
          return await downloadAudio(linkExtraido, `${apiName} (link extraído)`, timeout);
        }

        // Se for áudio direto, valida
        if (contentType.includes('audio/') || 
            contentType.includes('video/') || 
            contentType.includes('application/octet-stream')) {
          
          const buffer = Buffer.from(await response.arrayBuffer());
          const validacao = verificarAudioValido(buffer);
          
          if (validacao.valido) {
            console.log(`✅ ${apiName}: Áudio válido (${validacao.formato}), ${Math.round(buffer.length / 1024)}KB`);
            return {
              url: url,
              api: apiName,
              buffer: buffer,
              tamanho: buffer.length,
              formato: validacao.formato
            };
          } else {
            console.warn(`⚠️ ${apiName}: Áudio inválido - ${validacao.motivo}`);
            return null;
          }
        }

        console.warn(`⚠️ ${apiName}: Content-Type não reconhecido: ${contentType}`);
        return null;

      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn(`⏱️ ${apiName}: Timeout após ${timeout}ms`);
        } else {
          console.warn(`⚠️ ${apiName}: ${error.message}`);
        }
        return null;
      }
    };

    // 🎚️ Lista de APIs prioritárias (ordem de tentativa) - COM YTMP3.gg ADICIONADO
    const apisAudio = [
      // 🔥 NOVO: YTMP3.gg como primeira opção
      {
        name: "YTMP3.gg",
        func: async (videoUrl) => {
          try {
            console.log("🎵 Tentando YTMP3.gg...");
            const resultado = await ytmp3Wrapper(videoUrl, 'mp3', '320');
            
            // Verifica o link retornado
            const response = await fetch(resultado.url, { method: 'HEAD' });
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}`);
            }
            
            const contentLength = response.headers.get('content-length');
            if (contentLength && parseInt(contentLength) < 50000) {
              throw new Error('Arquivo muito pequeno');
            }
            
            return {
              url: resultado.url,
              api: "YTMP3.gg",
              buffer: null, // Não baixa ainda, apenas verifica
              tamanho: contentLength ? parseInt(contentLength) : 0,
              formato: 'mp3',
              metadata: {
                title: resultado.title,
                quality: resultado.quality,
                filesize: resultado.filesize
              }
            };
          } catch (error) {
            console.warn(`⚠️ YTMP3.gg falhou: ${error.message}`);
            return null;
          }
        }
      },
      
      // APIs diretas (sem extração de link)
      {
        name: "Bronxy Direto",
        url: (v) => `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(v)}&apikey=${API_KEYS.bronxys[0]}`,
        timeout: 30000
      },
      {
        name: "Hazel API",
        url: (v) => `https://hazel-api.vercel.app/api/yt?url=${encodeURIComponent(v)}`,
        timeout: 30000
      },
      
      // APIs que precisam extrair link
      {
        name: "NekoLabs",
        url: (v) => `https://api.nekolabs.my.id/downloader/youtube/v1?url=${encodeURIComponent(v)}&format=mp3`,
        timeout: 30000
      },
      {
        name: "NexFuture V3",
        url: (v) => `https://api.nexfuture.com.br/api/downloads/youtube/mp3/v3?url=${encodeURIComponent(v)}&apikey=${API_KEYS.nexfuture[0]}`,
        timeout: 30000
      },
      {
        name: "Izumi / PxSx",
        url: (v) => `https://izumi-api.vercel.app/api/ytmp3?url=${encodeURIComponent(v)}`,
        timeout: 30000
      },
      {
        name: "OotaIzumi MP3",
        url: (v) => `https://api.ootaizumi.web.id/downloader/youtube?url=${encodeURIComponent(v)}&format=mp3`,
        timeout: 30000
      },
      {
        name: "Anomaki Audio",
        url: (v) => `https://www.apis-anomaki.zone.id/downloader/yta?url=${encodeURIComponent(v)}`,
        timeout: 30000
      }
    ];

    // 🔄 Tentativa sequencial otimizada
    console.log(`🎵 Buscando áudio para: "${videoData.title.substring(0, 60)}..."`);
    const downloadInicio = Date.now();
    let audioResultado = null;

    // Primeiro tenta a função especial do YTMP3.gg
    if (apisAudio[0].func) {
      audioResultado = await apisAudio[0].func(videoData.url);
    }

    // Se YTMP3.gg falhou, tenta as outras APIs
    if (!audioResultado) {
      console.log("YTMP3.gg falhou, tentando outras APIs...");
      
      for (let i = 1; i < apisAudio.length; i++) {
        const api = apisAudio[i];
        try {
          const resultado = await downloadAudio(api.url(videoData.url), api.name, api.timeout);
          
          if (resultado) {
            audioResultado = resultado;
            break;
          }
          
          // Pequena pausa entre tentativas
          await new Promise(resolve => setTimeout(resolve, 300));
        } catch (error) {
          console.warn(`⚠️ Erro na API ${api.name}:`, error.message);
        }
      }
    }

    tempoDownload = Date.now() - downloadInicio;

    if (!audioResultado) {
      throw new Error("Todas as APIs de áudio falharam");
    }

    // ⏱️ Calcula tempos totais
    const tempoTotal = (Date.now() - tempoInicio) / 1000;
    
    console.log(`✅ Processo concluído em ${tempoTotal.toFixed(2)}s`);
    console.log(`📊 Estatísticas: Busca=${(tempoBusca/1000).toFixed(2)}s, Download=${(tempoDownload/1000).toFixed(2)}s`);
    console.log(`🎵 Fonte: ${videoData.fonte} → ${audioResultado.api}`);

    // 📦 Resposta estruturada
    const resposta = {
      success: true,
      download: audioResultado.url,
      title: audioResultado.metadata?.title || videoData.title,
      thumb: videoData.image,
      duration: videoData.tempo,
      source: {
        video: videoData.fonte,
        audio: audioResultado.api
      },
      stats: {
        total_time: tempoTotal.toFixed(2),
        search_time: (tempoBusca / 1000).toFixed(2),
        download_time: (tempoDownload / 1000).toFixed(2),
        file_size: audioResultado.tamanho ? `${(audioResultado.tamanho / 1024 / 1024).toFixed(2)} MB` : "desconhecido",
        format: audioResultado.formato
      },
      metadata: {
        query: query,
        user: User,
        timestamp: new Date().toISOString()
      }
    };

    // Se for YTMP3.gg, adiciona informações extras
    if (audioResultado.api === "YTMP3.gg" && audioResultado.metadata) {
      resposta.quality = audioResultado.metadata.quality;
      resposta.filesize = audioResultado.metadata.filesize;
    }

    return res.json(resposta);

  } catch (error) {
    console.error("❌ Erro no /play:", error.message);
    
    return res.status(500).json({
      error: 'PROCESSAMENTO_FALHOU',
      message: '⚠️ Não foi possível processar sua solicitação',
      details: error.message,
      tip: 'Tente novamente com um termo diferente',
      support: 'https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x'
    });
    
  } finally {
    // 🧹 Limpeza garantida
    if (global.activeUsers.has(User)) {
      global.activeUsers.delete(User);
    }
    console.log(`🧹 Usuário ${User} liberado do sistema ativo`);
  }
});
app.get('/play', async (req, res) => {
  try {
    const { query, userId, User } = req.query;

    // 🔒 Validação
    if (!userId || (userId !== "https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x" && userId !== "site")) {
      return res.status(400).json({ 
        success: false,
        error: 'ID_USUARIO_INVALIDO'
      });
    }
    
    if (!query || query.trim().length < 2) {
      return res.status(400).json({ 
        success: false,
        error: 'QUERY_INVALIDA'
      });
    }
    
    if (!User || User.length < 3) {
      return res.status(400).json({ 
        success: false,
        error: 'USUARIO_INVALIDO'
      });
    }

    console.log(`🎵 PLAY: ${User} buscou: "${query}"`);

    const tempoInicio = Date.now();

    // 🔥 FUNÇÃO DE BUSCA RÁPIDA COM TIMEOUT
    const buscarVideo = async () => {
      // Tenta cada API em sequência com timeout curto
      const apis = [
        {
          nome: 'Bronxy',
          url: `https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${encodeURIComponent(query)}&apikey=Bronxys30092025`,
          parser: (data) => {
            if (Array.isArray(data) && data[0]?.url) {
              return {
                url: data[0].url,
                titulo: data[0].titulo,
                imagem: data[0].thumb || '',
                duracao: data[0].tempo || '0:00'
              };
            }
            return null;
          }
        },
        {
          nome: 'NexFuture',
          url: `https://api.nexfuture.com.br/api/downloads/play?query=${encodeURIComponent(query)}&apikey=a48a2450-a134-4e7d-8203-10f1f1725d81`,
          parser: (data) => {
            if (data?.status && data.result?.video?.url) {
              return {
                url: data.result.video.url,
                titulo: data.result.video.title,
                imagem: data.result.video.thumbnails?.[1]?.url || '',
                duracao: data.result.video.duration || '0:00'
              };
            }
            return null;
          }
        }
      ];

      for (const api of apis) {
        try {
          console.log(`🔍 Tentando ${api.nome}...`);
          const response = await axios.get(api.url, { 
            timeout: 5000, // 5 segundos apenas!
            headers: { 'User-Agent': 'Mozilla/5.0' }
          });
          
          const resultado = api.parser(response.data);
          if (resultado) {
            console.log(`✅ ${api.nome} encontrou: ${resultado.titulo}`);
            return resultado;
          }
        } catch (e) {
          console.log(`⚠️ ${api.nome} falhou: ${e.message}`);
        }
      }
      
      throw new Error('Nenhuma API respondeu');
    };

    // 🔥 FUNÇÃO DE DOWNLOAD RÁPIDA
    const buscarAudio = async (videoUrl) => {
      // Tenta YTMP3.gg primeiro
      try {
        console.log('🎵 Tentando YTMP3.gg...');
        
        // Primeiro busca o vídeo
        const searchRes = await axios.get('https://yt-extractor.y2mp3.co/api/youtube/search?q=' + encodeURIComponent(videoUrl), {
          timeout: 5000,
          headers: {
            'user-agent': 'Mozilla/5.0',
            'origin': 'https://ytmp3.gg'
          }
        });
        
        const video = searchRes.data.items.find(v => v.type === 'stream');
        if (!video) throw new Error('Vídeo não encontrado');
        
        // Depois gera o download
        const downloadRes = await axios.post('https://hub.y2mp3.co', {
          url: video.id,
          downloadMode: 'audio',
          brandName: 'ytmp3.gg',
          audioFormat: 'mp3',
          audioBitrate: '320'
        }, {
          timeout: 5000,
          headers: {
            'user-agent': 'Mozilla/5.0',
            'content-type': 'application/json'
          }
        });
        
        if (downloadRes.data?.url) {
          console.log('✅ YTMP3.gg gerou link');
          return {
            url: downloadRes.data.url,
            api: 'YTMP3.gg',
            formato: 'mp3'
          };
        }
      } catch (e) {
        console.log(`⚠️ YTMP3.gg falhou: ${e.message}`);
      }

      // Fallback: retorna URL do vídeo (o frontend pode tentar converter)
      return {
        url: videoUrl,
        api: 'Link direto',
        formato: 'video'
      };
    };

    // 🚀 EXECUTA TUDO COM TIMEOUT GLOBAL
    try {
      // 1. Busca vídeo (máx 10 segundos)
      const videoPromise = buscarVideo();
      const videoTimeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout busca vídeo')), 10000)
      );
      
      const videoData = await Promise.race([videoPromise, videoTimeout]);
      
      // 2. Busca áudio (máx 10 segundos)
      const audioPromise = buscarAudio(videoData.url);
      const audioTimeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout busca áudio')), 10000)
      );
      
      const audioData = await Promise.race([audioPromise, audioTimeout]);
      
      const tempoTotal = (Date.now() - tempoInicio) / 1000;
      
      console.log(`✅ Sucesso em ${tempoTotal}s`);

      return res.json({
        success: true,
        download: audioData.url,
        title: videoData.titulo || query,
        thumb: videoData.imagem || '',
        duration: videoData.duracao || '0:00',
        source: {
          video: 'YouTube',
          audio: audioData.api
        },
        stats: {
          total_time: tempoTotal.toFixed(1),
          search_time: (tempoTotal * 0.4).toFixed(1),
          download_time: (tempoTotal * 0.6).toFixed(1),
          file_size: audioData.formato === 'mp3' ? '~5 MB' : 'Link do vídeo',
          format: audioData.formato
        }
      });

    } catch (error) {
      console.error('❌ Erro:', error.message);
      
      // Retorna erro amigável
      return res.json({
        success: false,
        error: 'TIMEOUT',
        message: '⏳ Tempo limite excedido. Tente novamente.'
      });
    }

  } catch (error) {
    console.error('❌ Erro geral:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'ERRO_INTERNO'
    });
  }
});


const logPath2 = path.join(__dirname, "logsFilmes.json");

async function encurtarTinyURL(url) {
  try {
    const res = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) throw new Error("Falha ao encurtar link");
    return await res.text();
  } catch {
    return url; // fallback caso TinyURL falhe
  }
}




// Sistema de favoritos e histórico
const DATA_FILE = path.join(__dirname, 'public', 'user-data.json');

// Inicializar arquivo de dados
async function initUserData() {
    try {
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
        if (!await fs.access(DATA_FILE).then(() => true).catch(() => false)) {
            await fs.writeFile(DATA_FILE, JSON.stringify({
                users: {},
                favorites: {},
                watchLater: {},
                watchingProgress: {},
                watchHistory: {},
                userStats: {}
            }, null, 2));
        }
    } catch (error) {
        console.error('Erro ao inicializar arquivo de dados:', error);
    }
}



// Carregar dados
async function loadUserData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return {
            users: {},
            favorites: {},
            watchLater: {},
            watchingProgress: {},
            watchHistory: {},
            userStats: {}
        };
    }
}

// Salvar dados
async function saveUserData(data) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

// Adicione esta função no início da rota ou como helper
function formatWatchTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
}

// Na rota /iptv-site, passe a função como helper:
function normalizarCategoria(categoriaOriginal) {
    if (!categoriaOriginal) return 'outros';

    const c = categoriaOriginal.toLowerCase();

    if (c.includes('xxx') || c.includes('adult')) return 'adultos';
    if (c.startsWith('filmes') || c.includes('cinema')) return 'filmes';
    if (c.startsWith('series') || c.includes('dorama')) return 'series';
    if (c.startsWith('canais')) return 'canais';
    if (c.includes('esporte') || c.includes('nba') || c.includes('premiere') || c.includes('sportv')) return 'esportes';
    if (c.includes('infantil') || c.includes('desenho')) return 'infantil';
    if (c.includes('noticia')) return 'noticias';
    if (c.includes('novela')) return 'novelas';
    if (c.includes('show') || c.includes('stand up')) return 'shows';

    return 'outros';
}
app.get('/iptv-site', async (req, res) => {
    try {
        const usuario = req.session.user || {};
        const searchQuery = req.query.q || '';
        const categoriaSelecionada = req.query.category || 'all';
        const page = parseInt(req.query.page) || 1;
        const limit = 20;

        const userData = await loadUserData();
        const userId = usuario.numero || req.ip;

        let userFavorites = [];
        let userWatchLater = [];
        let userStats = { totalWatchTime: 0, channelsWatched: 0 };

        if (userId) {
            userFavorites = userData.favorites[userId] || [];
            userWatchLater = userData.watchLater[userId] || [];
            userStats = userData.userStats[userId] || { totalWatchTime: 0, channelsWatched: 0 };
        }

        const arquivoM3U = path.join(__dirname, 'public', 'lista.m3u');
        let canais = [];
        let categoriasUnicas = new Set();

        if (fs.existsSync(arquivoM3U)) {
            const conteudo = await fs.readFile(arquivoM3U, 'utf-8');
            const linhas = conteudo.split('\n');

            for (let i = 0; i < linhas.length; i++) {
                if (linhas[i].startsWith('#EXTINF')) {

                    const tvgNameMatch = linhas[i].match(/tvg-name="([^"]*)"/i);
                    const groupMatch = linhas[i].match(/group-title="([^"]+)"/i);
                    const logoMatch = linhas[i].match(/tvg-logo="([^"]+)"/i);

                    const nome = tvgNameMatch
                        ? tvgNameMatch[1].trim()
                        : linhas[i].match(/,(.+)$/)
                        ? linhas[i].match(/,(.+)$/)[1].trim()
                        : 'Sem título';

                    const categoriaOriginal = groupMatch ? groupMatch[1] : 'Geral';
                    const categoriaNormalizada = normalizarCategoria(categoriaOriginal);
                    const logo = logoMatch ? logoMatch[1] : '/default-logo.png';

                    const link = linhas[i + 1]?.trim() || '';
                    const linkLower = link.toLowerCase();

                    const isVideoLink =
                        linkLower.endsWith('.mp4') ||
                        linkLower.endsWith('.m3u8') ||
                        linkLower.includes('/hls/') ||
                        linkLower.includes('.ts');

                    if (link && isVideoLink) {

                        const id = Buffer.from(nome + link)
                            .toString('base64')
                            .substring(0, 20);

                        const isFavorite = userFavorites.includes(id);
                        const isWatchLater = userWatchLater.includes(id);

                        const progressKey = `${userId}_${id}`;
                        const progress = userData.watchingProgress?.[progressKey] || 0;

                        const canal = {
                            id,
                            nome,
                            categoria: categoriaNormalizada, // 🔥 agora é normalizada
                            categoriaOriginal,               // 👈 mantemos original
                            logo,
                            link,
                            tipo: linkLower.includes('.m3u8')
                                ? 'HLS'
                                : linkLower.includes('.mp4')
                                ? 'MP4'
                                : 'Stream',
                            isFavorite,
                            isWatchLater,
                            progress
                        };

                        canais.push(canal);
                        categoriasUnicas.add(categoriaNormalizada);
                    }

                    i++;
                }
            }
        }

        // 🔎 FILTRO POR CATEGORIA (AGORA NORMALIZADA)
        let canaisFiltrados = canais;

        if (categoriaSelecionada !== 'all') {
            canaisFiltrados = canais.filter(
                c => c.categoria === categoriaSelecionada
            );
        }

        // 🔎 FILTRO POR BUSCA
        if (searchQuery) {
            const queryLower = searchQuery.toLowerCase();
            canaisFiltrados = canaisFiltrados.filter(c =>
                c.nome.toLowerCase().includes(queryLower) ||
                c.categoriaOriginal.toLowerCase().includes(queryLower)
            );
        }

        // 🚀 ORDENAÇÃO PROFISSIONAL
        const prioridade = {
            filmes: 0,
            series: 1,
            canais: 2,
            esportes: 3,
            infantil: 4,
            novelas: 5,
            shows: 6,
            noticias: 7,
            adultos: 8,
            outros: 9
        };

        canaisFiltrados.sort((a, b) => {
            const pesoA = prioridade[a.categoria] ?? 99;
            const pesoB = prioridade[b.categoria] ?? 99;

            return pesoA - pesoB || a.nome.localeCompare(b.nome);
        });

        // 📄 PAGINAÇÃO
        const totalCanais = canaisFiltrados.length;
        const totalPages = Math.ceil(totalCanais / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const canaisPagina = canaisFiltrados.slice(startIndex, endIndex);

        // 📂 ORGANIZAR POR CATEGORIA NORMALIZADA
        const canaisPorCategoria = {};
        canais.forEach(canal => {
            if (!canaisPorCategoria[canal.categoria]) {
                canaisPorCategoria[canal.categoria] = [];
            }
            canaisPorCategoria[canal.categoria].push(canal);
        });

        const userRanking = await getTopUsers(userData.userStats);

        const stats = {
            totalCanais: canais.length,
            totalFiltrados: canaisFiltrados.length,
            totalCategorias: categoriasUnicas.size,
            categorias: Array.from(categoriasUnicas)
        };

        res.render('iptv-site', {
            usuario,
            canais: canaisPagina,
            canaisPorCategoria,
            categorias: Array.from(categoriasUnicas),
            searchQuery,
            categoriaSelecionada,
            stats,
            userStats,
            userRanking,
            userFavorites,
            userWatchLater,
            pagination: {
                page,
                totalPages,
                totalCanais,
                hasPrev: page > 1,
                hasNext: page < totalPages
            },
            urlBase: req.protocol + '://' + req.get('host'),
            helpers: { formatWatchTime },
            formatWatchTime
        });

    } catch (error) {
        console.error('Erro no site IPTV:', error);
        res.status(500).render('error', {
            message: 'Erro ao carregar lista de canais',
            error: error.message
        });
    }
});

// Rota para player direto
// Rota para player direto - ATUALIZADA
// Na rota /player/:id, atualize a recuperação do progresso:
// ===== SISTEMA DE CHAT AO VIVO =====

// Certifique-se de ter app.use(express.json()); no seu arquivo principal!

// =========================================================
// 1. CONSTANTES E CAMINHOS DE ARQUIVOS

const arquivoJSON = path.join(dirPublic, 'lista.json');
const arquivoUserJSON = path.join(dirPublic, 'user_data.json');


// =========================================================
// 2. FUNÇÕES UTILITÁRIAS GLOBAIS
// =========================================================

// LER JSON
// FORMATAR DATA PADRÃO BRASIL
function getDataBrasil() {
    const agora = new Date();
    const brasiliaTime = new Date(agora.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const dia = String(brasiliaTime.getDate()).padStart(2, '0');
    const mes = String(brasiliaTime.getMonth() + 1).padStart(2, '0');
    const ano = brasiliaTime.getFullYear();
    const horas = String(brasiliaTime.getHours()).padStart(2, '0');
    const minutos = String(brasiliaTime.getMinutes()).padStart(2, '0');
    const segundos = String(brasiliaTime.getSeconds()).padStart(2, '0');
    
    return {
        dataCompleta: `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`,
        data: `${dia}/${mes}/${ano}`,
        hora: `${horas}:${minutos}:${segundos}`,
        dia, mes, ano, horas, minutos, timestamp: brasiliaTime.getTime(), iso: brasiliaTime.toISOString()
    };
}

// FILTRAR MENSAGENS (Unificada)
function filtrarMensagem(texto) {
    if (!texto) return '';
    const palavrasProibidas = ['palavrao1', 'palavrao2', 'spam', 'gratis', 'promoção'];
    let mensagemFiltrada = texto;
    
    palavrasProibidas.forEach(palavra => {
        const regex = new RegExp(palavra, 'gi');
        mensagemFiltrada = mensagemFiltrada.replace(regex, '***');
    });
    
    if (mensagemFiltrada.length > 300) {
        mensagemFiltrada = mensagemFiltrada.substring(0, 300) + '...';
    }
    
    // Previne XSS
    return mensagemFiltrada
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function gerarCorAleatoria() {
    const cores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#fab1a0', '#a8e6cf'];
    return cores[Math.floor(Math.random() * cores.length)];
}

// =========================================================
// 3. INICIALIZAÇÃO DE ARQUIVOS
// =========================================================
async function garantirArquivosChat() {
    if (!fs.existsSync(dirPublic)) fs.mkdirSync(dirPublic, { recursive: true });

    const arquivos = [
        { path: ARQUIVO_CHAT_GLOBAL, padrao: [] },
        { path: ARQUIVO_USUARIOS_CHAT, padrao: {} },
        { path: ARQUIVO_MENSAGENS_SALVAS, padrao: [] },
        { path: ARQUIVO_NOTIFICACOES, padrao: [] },
        { path: ARQUIVO_MODERADORES, padrao: ['admin'] },
        { path: ARQUIVO_MENSAGENS_LIVE, padrao: [] },
        { path: ARQUIVO_USUARIOS_ATIVOS, padrao: {} },
        { path: ARQUIVO_PERFIS_USUARIOS, padrao: {} },
        { path: ARQUIVO_REACOES_LIVE, padrao: [] },
        { path: ARQUIVO_BANIMENTOS, padrao: [] },
        { path: ARQUIVO_EMOTES_GLOBAIS, padrao: [
            { id: 1, nome: "marujo", url: "https://i.imgur.com/emote1.png", atalho: ":marujo:" },
            { id: 2, nome: "like", url: "https://i.imgur.com/emote2.png", atalho: ":like:" }
        ]}
    ];
    
    for (const arquivo of arquivos) {
        if (!fs.existsSync(arquivo.path)) {
            await fsPromises.writeFile(arquivo.path, JSON.stringify(arquivo.padrao, null, 2));
            console.log(`📁 Arquivo ${path.basename(arquivo.path)} criado!`);
        }
    }
}


// =========================================================
// 4. ROTAS DO CHAT (Agora com as funções funcionando)
// =========================================================
// =========================================================
// CONFIGURAÇÕES GLOBAIS DO CHAT
// =========================================================

const ARQUIVO_CHAT_GLOBAL = path.join(__dirname, 'public', 'chat_global.json');
const ARQUIVO_USUARIOS_CHAT = path.join(__dirname, 'public', 'usuarios_chat.json');
const ARQUIVO_BANIMENTOS = path.join(__dirname, 'public', 'banimentos.json');
const ARQUIVO_MENSAGENS_SALVAS = path.join(__dirname, 'public', 'mensagens_salvas.json');
const ARQUIVO_EMOTES_GLOBAIS = path.join(__dirname, 'public', 'emotes_globais.json');
const ARQUIVO_REACOES_LIVE = path.join(__dirname, 'public', 'reacoes_live.json');
const ARQUIVO_USUARIOS_ATIVOS = path.join(__dirname, 'public', 'usuarios_ativos.json');

// =========================================================
// FUNÇÕES AUXILIARES GLOBAIS (FORA DAS ROTAS)
// =========================================================

// Função para ler JSON com tratamento de erro

async function inicializarArquivosChat() {
    const arquivos = [
        { path: ARQUIVO_CHAT_GLOBAL, padrao: [] },
        { path: ARQUIVO_USUARIOS_CHAT, padrao: {} },
        { path: ARQUIVO_BANIMENTOS, padrao: [] },
        { path: ARQUIVO_MENSAGENS_SALVAS, padrao: [] },
        { path: ARQUIVO_EMOTES_GLOBAIS, padrao: [
            { nome: "marujo", url: "https://i.imgur.com/emote1.png" },
            { nome: "like", url: "https://i.imgur.com/emote2.png" },
            { nome: "risada", url: "https://i.imgur.com/emote3.png" },
            { nome: "choro", url: "https://i.imgur.com/emote4.png" },
            { nome: "surpreso", url: "https://i.imgur.com/emote5.png" }
        ]},
        { path: ARQUIVO_REACOES_LIVE, padrao: [] },
        { path: ARQUIVO_USUARIOS_ATIVOS, padrao: {} }
    ];
    
    for (const arquivo of arquivos) {
        if (!fs.existsSync(arquivo.path)) {
            await fs.writeFile(arquivo.path, JSON.stringify(arquivo.padrao, null, 2));
            console.log(`📁 Arquivo ${path.basename(arquivo.path)} criado!`);
        }
    }
}

// Executar inicialização



// =========================================================
// ROTAS DO CHAT - VERSÃO CORRIGIDA
// =========================================================

// Enviar mensagem
app.post('/api/chat/enviar', (req, res) => {
    const { userId, mensagem, tipo = 'texto' } = req.body;
    
    if (!userId || !mensagem || mensagem.trim() === '') {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }
    
    // Verificar banimentos
    const banidos = lerJSON(ARQUIVO_BANIMENTOS);
    if (banidos.includes(userId)) {
        return res.status(403).json({ erro: 'Usuário banido do chat' });
    }
    
    // Buscar usuário
    const usuarios = lerJSON(ARQUIVO_USUARIOS_CHAT);
    let usuario = usuarios[userId];
    
    if (!usuario) {
        usuario = { 
            nome: 'Visitante_' + Math.floor(Math.random() * 1000), 
            cor: gerarCorAleatoria(),
            avatar: 'https://i.imgur.com/default-avatar.png',
            nivel: 1,
            xp: 0
        };
    }
    
    const novaMensagem = {
        id: Date.now() + '-' + Math.random().toString(36).substring(2, 9),
        userId: userId,
        usuario: usuario.nome,
        avatar: usuario.avatar,
        cor: usuario.cor,
        nivel: usuario.nivel || 1,
        mensagem: mensagem.substring(0, 200),
        tipo: tipo,
        timestamp: Date.now()
    };
    
    // Salvar mensagem
    const mensagens = lerJSON(ARQUIVO_CHAT_GLOBAL);
    mensagens.push(novaMensagem);
    
    // Manter apenas últimas 200 mensagens
    if (mensagens.length > 200) {
        const mensagensAntigas = mensagens.slice(0, mensagens.length - 200);
        const backup = lerJSON(ARQUIVO_MENSAGENS_SALVAS);
        backup.push(...mensagensAntigas);
        if (backup.length > 1000) backup.splice(0, backup.length - 1000);
        salvarJSON(ARQUIVO_MENSAGENS_SALVAS, backup);
        mensagens.splice(0, mensagens.length - 200);
    }
    
    salvarJSON(ARQUIVO_CHAT_GLOBAL, mensagens);
    
    // Atualizar XP
    if (usuarios[userId]) {
        usuarios[userId].xp = (usuarios[userId].xp || 0) + 1;
        usuarios[userId].ultimoAcesso = Date.now();
        usuarios[userId].mensagensEnviadas = (usuarios[userId].mensagensEnviadas || 0) + 1;
        usuarios[userId].nivel = Math.floor(Math.sqrt(usuarios[userId].xp / 10)) + 1;
        salvarJSON(ARQUIVO_USUARIOS_CHAT, usuarios);
    }
    
    // Socket.IO
    if (req.app.get('io')) {
        req.app.get('io').emit('nova-mensagem', novaMensagem);
    }
    
    res.json({ sucesso: true, mensagem: novaMensagem });
});

// Buscar mensagens (CORRIGIDO - frontend espera essa rota)
app.get('/api/chat/mensagens', (req, res) => {
    const { page = 1, limit = 50 } = req.query;
    
    let mensagens = lerJSON(ARQUIVO_CHAT_GLOBAL);
    
    if (!Array.isArray(mensagens)) {
        mensagens = [];
        salvarJSON(ARQUIVO_CHAT_GLOBAL, mensagens);
    }
    
    // Ordenar por timestamp (mais recentes primeiro)
    mensagens.sort((a, b) => b.timestamp - a.timestamp);
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const mensagensPaginadas = mensagens.slice(start, end);
    
    res.json({
        mensagens: mensagensPaginadas,
        total: mensagens.length,
        page: parseInt(page),
        totalPages: Math.ceil(mensagens.length / limit)
    });
});



const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads'); // pasta onde as imagens serão salvas
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // ex: 1691231231231-123123123.png
  }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function(req, file, cb) {
        const ext = path.extname(file.originalname).toLowerCase();
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
            return cb(new Error('Apenas imagens são permitidas'));
        }
        cb(null, true);
    }
});
// =========================================================
// ROTA PARA UPLOAD DE AVATAR DO CHAT (CORRIGIDA - salva em tudo)
// =========================================================
app.post('/upload-avatar-chat', upload.single('avatarFile'), (req, res) => {
    console.log('📸 ROTA /upload-avatar-chat ACESSADA');
    console.log('req.file:', req.file);
    console.log('req.body:', req.body);
    
    try {
        const { userId, nome, cor } = req.body; // Agora recebe nome e cor também
        
        // VALIDAÇÕES
        if (!userId) {
            return res.status(400).json({ erro: 'userId obrigatório' });
        }
        
        if (!req.file) {
            return res.status(400).json({ erro: 'Nenhum arquivo enviado' });
        }

        // Caminho do arquivo salvo
        const avatarUrl = '/uploads/' + req.file.filename;
        console.log('✅ Arquivo salvo em:', avatarUrl);

        // =========================================================
        // 1️⃣ ATUALIZAR NO CHAT (usuarios_chat.json)
        // =========================================================
        const usuariosChatPath = path.join(__dirname, 'public', 'usuarios_chat.json');
        let usuariosChat = {};
        
        if (fs.existsSync(usuariosChatPath)) {
            usuariosChat = JSON.parse(fs.readFileSync(usuariosChatPath, 'utf8'));
        }

        // Se usuário não existir, criar
        if (!usuariosChat[userId]) {
            usuariosChat[userId] = {
                nome: nome || 'Visitante_' + Math.floor(Math.random() * 1000),
                cor: cor || '#00ffb3',
                avatar: avatarUrl,
                nivel: 1,
                xp: 0,
                mensagensEnviadas: 0,
                primeiroAcesso: Date.now(),
                ultimoAcesso: Date.now()
            };
        } else {
            // Atualizar dados
            if (nome) usuariosChat[userId].nome = nome.substring(0, 20);
            if (cor) usuariosChat[userId].cor = cor;
            usuariosChat[userId].avatar = avatarUrl;
            usuariosChat[userId].ultimoAcesso = Date.now();
        }

        // Salvar chat
        fs.writeFileSync(usuariosChatPath, JSON.stringify(usuariosChat, null, 2));
        console.log('✅ Chat atualizado:', usuariosChat[userId].nome);

        // =========================================================
        // 2️⃣ ATUALIZAR NO REGISTRO.JSON (se estiver logado)
        // =========================================================
        if (req.session?.user) {
            const registroPath = path.join(__dirname, 'public', 'registro.json');
            
            if (fs.existsSync(registroPath)) {
                const registro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
                const userIndex = registro.findIndex(u => u.nome === req.session.user.nome);
                
                if (userIndex !== -1) {
                    // Atualizar nome e foto no registro
                    if (nome) registro[userIndex].nome = nome;
                    registro[userIndex].fotoPerfil = avatarUrl;
                    
                    fs.writeFileSync(registroPath, JSON.stringify(registro, null, 2));
                    
                    // Atualizar sessão
                    if (nome) req.session.user.nome = nome;
                    req.session.user.fotoPerfil = avatarUrl;
                    
                    console.log('✅ Registro.json e sessão atualizados');
                }
            }
        }

        // =========================================================
        // 3️⃣ RESPOSTA DE SUCESSO
        // =========================================================
        res.json({
            sucesso: true,
            mensagem: 'Upload realizado com sucesso!',
            avatar: avatarUrl,
            usuario: usuariosChat[userId]
        });

    } catch (error) {
        console.error('❌ Erro:', error);
        res.status(500).json({ 
            sucesso: false, 
            erro: error.message 
        });
    }
});
app.post('/api/chat/usuario', upload.none(), async (req, res) => {
    console.log('🚀 ROTA ANTIGA /api/chat/usuario (sem foto)');
    console.log('req.body:', req.body);
    
    try {
        const { userId, nome, cor, avatar } = req.body;

        if (!userId || !nome) {
            return res.status(400).json({ erro: 'userId e nome obrigatórios' });
        }

        // Ler arquivo do chat
        const usuariosChatPath = path.join(__dirname, 'public', 'usuarios_chat.json');
        let usuariosChat = {};
        if (fs.existsSync(usuariosChatPath)) {
            usuariosChat = JSON.parse(fs.readFileSync(usuariosChatPath, 'utf8'));
        }

        // Se usuário não existir, criar
        if (!usuariosChat[userId]) {
            usuariosChat[userId] = {
                nome: nome,
                cor: cor || '#00ffb3',
                avatar: avatar || 'https://i.imgur.com/default-avatar.png',
                nivel: 1,
                xp: 0,
                mensagensEnviadas: 0,
                primeiroAcesso: Date.now(),
                ultimoAcesso: Date.now()
            };
        } else {
            // Atualizar dados
            usuariosChat[userId].nome = nome.substring(0, 20);
            if (cor) usuariosChat[userId].cor = cor;
            if (avatar) usuariosChat[userId].avatar = avatar;
            usuariosChat[userId].ultimoAcesso = Date.now();
        }

        // Salvar
        fs.writeFileSync(usuariosChatPath, JSON.stringify(usuariosChat, null, 2));

        res.json({
            sucesso: true,
            mensagem: 'Perfil atualizado!',
            usuario: usuariosChat[userId]
        });

    } catch (error) {
        console.error('❌ Erro:', error);
        res.status(500).json({ sucesso: false, erro: error.message });
    }
});

app.get('/api/chat/perfil/:userId', (req, res) => {
    const { userId } = req.params;
    const usuarios = lerJSON(ARQUIVO_USUARIOS_CHAT);
    
    if (usuarios[userId]) {
        res.json(usuarios[userId]);
    } else {
        res.status(404).json({ erro: 'Usuário não encontrado' });
    }
});

// Usuários online
app.get('/api/chat/online', (req, res) => {
    const usuarios = lerJSON(ARQUIVO_USUARIOS_CHAT);
    const agora = Date.now();
    const limite = 5 * 60 * 1000; // 5 minutos
    
    const online = Object.entries(usuarios)
        .filter(([_, user]) => user.ultimoAcesso && (agora - user.ultimoAcesso < limite))
        .map(([id, user]) => ({
            id: id,
            nome: user.nome,
            avatar: user.avatar,
            cor: user.cor,
            nivel: user.nivel
        }));
    
    res.json({ total: online.length, usuarios: online });
});

// Ping de usuário ativo
app.post('/api/chat/ping', (req, res) => {
    const { userId } = req.body;
    
    if (!userId) return res.status(400).json({ erro: 'ID necessário' });
    
    const usuarios = lerJSON(ARQUIVO_USUARIOS_CHAT);
    
    if (usuarios[userId]) {
        usuarios[userId].ultimoAcesso = Date.now();
        salvarJSON(ARQUIVO_USUARIOS_CHAT, usuarios);
    }
    
    res.json({ sucesso: true });
});


// Emotes globais
app.get('/api/chat/emotes', (req, res) => {
    const emotes = lerJSON(ARQUIVO_EMOTES_GLOBAIS);
    res.json(emotes);
});


// =========================================================
// PROXY DE STREAMS - resolve travamentos e expiração de tokens
// =========================================================
// Lista de domínios permitidos (extraia do seu lista.json ou mantenha uma fixa)

function urlPermitida(url) {
    try {
        const hostname = new URL(url).hostname;
        return DOMINIOS_PERMITIDOS.some(dominio => hostname.endsWith(dominio));
    } catch {
        return false;
    }
}

// Rota principal: recebe a URL completa do stream (m3u8, mp4, ts)
app.get('/proxy/*', async (req, res) => {
    const encodedUrl = req.params[0] + (req.params[0] ? '' : '') + (req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '');
    const url = decodeURIComponent(encodedUrl);

   /* if (!urlPermitida(url)) {
        return res.status(403).send('Domínio não autorizado');
    }*/

    try {
        const response = await axios({
            method: 'get',
            url: url,
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': new URL(url).origin,
                ...(req.headers.range ? { Range: req.headers.range } : {}) // suporte a range (para buscas parciais)
            },
            timeout: 10000
        });

        // Repassar headers importantes
        if (response.headers['content-type']) {
            res.set('Content-Type', response.headers['content-type']);
        }
        if (response.headers['content-length']) {
            res.set('Content-Length', response.headers['content-length']);
        }
        if (response.headers['content-range']) {
            res.set('Content-Range', response.headers['content-range']);
            res.status(206);
        }

        // Se for um manifesto m3u8, precisamos reescrever as URLs internas
        const contentType = response.headers['content-type'] || '';
        if (url.includes('.m3u8') || contentType.includes('application/vnd.apple.mpegurl')) {
            let data = '';
            response.data.on('data', chunk => { data += chunk.toString(); });
            response.data.on('end', () => {
                const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
                const linhas = data.split('\n').map(linha => {
                    if (linha.startsWith('#')) return linha;
                    if (linha.trim() === '') return linha;
                    // URL absoluta
                    if (linha.startsWith('http')) {
                        return `/proxy/${encodeURIComponent(linha)}`;
                    }
                    // URL relativa
                    return `/proxy/${encodeURIComponent(baseUrl + linha)}`;
                }).join('\n');
                res.send(linhas);
            });
        } else {
            // É um segmento (ts, mp4, etc.) – apenas repassa o stream
            response.data.pipe(res);
        }
    } catch (error) {
        console.error('Erro no proxy:', error.message);
        res.status(500).send('Erro ao acessar stream de origem');
    }
});





app.get('/compartilhar', async (req, res) => {
    // Pega os parâmetros da URL
    const logoUrl = req.query.logo;
    const titulo = req.query.titulo || req.query.title || 'Filme no Marujo Flix';
    const descricao = req.query.descricao || req.query.desc || 'Vem assistir este filme de graça no Marujo Flix! 🍿📺';
    
    // Link vai direto para a pesquisa do site
    const linkOriginal = `https://marujodigital.onrender.com/marujoflix?q=${encodeURIComponent(titulo)}`;
    
    // Se não tiver logo, redireciona para o site principal
    if (!logoUrl) {
        return res.redirect('https://marujodigital.onrender.com/marujoflix');
    }

    try {
        // 🔥 FORÇA A IMAGEM SER SEMPRE GRANDE adicionando parâmetros na URL
        let imagemGrande = logoUrl;
        
        // Se for do CDN, tenta forçar tamanho máximo
        if (logoUrl.includes('cdn4k.ink') || logoUrl.includes('54k.store')) {
            // Tenta remover qualquer parâmetro de tamanho e adicionar tamanho grande
            imagemGrande = logoUrl.split('?')[0] + '?size=original';
        }
        
        // Adiciona timestamp para evitar cache do WhatsApp
        const timestamp = Date.now();
        const imagemAntiCache = imagemGrande.includes('?') 
            ? `${imagemGrande}&_=${timestamp}` 
            : `${imagemGrande}?_=${timestamp}`;

        res.send(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${titulo} - Marujo Flix</title>
                
                <!-- META TAGS OTIMIZADAS PARA WHATSAPP -->
                <meta property="og:title" content="${titulo}">
                <meta property="og:description" content="${descricao}">
                
                <!-- 🔥 USA A IMAGEM COM ANTI-CACHE -->
                <meta property="og:image" content="${imagemAntiCache}">
                
                <!-- TAMANHO MÁXIMO SUPORTADO PELO WHATSAPP -->
                <meta property="og:image:width" content="1920">
                <meta property="og:image:height" content="1080">
                <meta property="og:image:type" content="image/jpeg">
                
                <meta property="og:url" content="${linkOriginal}">
                <meta property="og:type" content="video.movie">
                <meta property="og:site_name" content="Marujo Flix">
                <meta property="og:locale" content="pt_BR">
                
                <!-- Twitter Card -->
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${titulo}">
                <meta name="twitter:description" content="${descricao}">
                <meta name="twitter:image" content="${imagemAntiCache}">
                
                <!-- FORÇA O WHATSAPP A BUSCAR UMA NOVA IMAGEM -->
                <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
                <meta http-equiv="pragma" content="no-cache">
                <meta http-equiv="expires" content="0">
                
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }
                    .card {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border-radius: 30px;
                        padding: 40px;
                        max-width: 600px;
                        width: 100%;
                        text-align: center;
                        border: 2px solid rgba(0, 255, 179, 0.3);
                        box-shadow: 0 20px 60px rgba(0, 255, 179, 0.2);
                    }
                    .logo-container {
                        background: rgba(0, 0, 0, 0.3);
                        border-radius: 30px;
                        padding: 30px;
                        margin-bottom: 30px;
                        border: 2px solid #00ffb3;
                        box-shadow: 0 0 30px rgba(0, 255, 179, 0.3);
                        min-height: 300px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .logo-container img {
                        max-width: 100%;
                        max-height: 400px;
                        width: auto;
                        height: auto;
                        object-fit: contain;
                        border-radius: 15px;
                    }
                    h1 {
                        color: white;
                        font-size: 32px;
                        margin-bottom: 20px;
                        text-shadow: 0 0 20px rgba(0, 255, 179, 0.5);
                        word-break: break-word;
                    }
                    .descricao {
                        color: #b0b0ff;
                        font-size: 18px;
                        line-height: 1.6;
                        margin-bottom: 30px;
                        padding: 0 20px;
                    }
                    .btn-assistir {
                        display: inline-block;
                        background: linear-gradient(135deg, #00ffb3, #8a2be2);
                        color: black;
                        text-decoration: none;
                        padding: 18px 40px;
                        border-radius: 50px;
                        font-weight: bold;
                        font-size: 18px;
                        margin-bottom: 20px;
                        border: none;
                        cursor: pointer;
                        transition: all 0.3s;
                        box-shadow: 0 10px 30px rgba(0, 255, 179, 0.3);
                    }
                    .btn-assistir:hover {
                        transform: translateY(-5px) scale(1.05);
                        box-shadow: 0 15px 40px rgba(0, 255, 179, 0.5);
                    }
                    .info-box {
                        background: rgba(0, 0, 0, 0.3);
                        border-radius: 20px;
                        padding: 20px;
                        margin-top: 20px;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    .info-box p {
                        color: #8a8ac5;
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    .btn-compartilhar {
                        background: rgba(255, 255, 255, 0.1);
                        border: 2px solid #00ffb3;
                        color: white;
                        padding: 12px 25px;
                        border-radius: 30px;
                        font-size: 14px;
                        cursor: pointer;
                        margin-top: 15px;
                        transition: all 0.3s;
                    }
                    .btn-compartilhar:hover {
                        background: #00ffb3;
                        color: black;
                    }
                    .footer {
                        margin-top: 30px;
                        color: rgba(255, 255, 255, 0.3);
                        font-size: 12px;
                    }
                    
                    /* DEBUG - mosta o tamanho da imagem (opcional) */
                    .debug-tamanho {
                        font-size: 10px;
                        color: rgba(255,255,255,0.2);
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="logo-container">
                        <img src="${logoUrl}" alt="Logo de ${titulo}" id="previewImg">
                    </div>
                    
                    <h1>${titulo}</h1>
                    
                    <div class="descricao">
                        ${descricao}
                    </div>
                    
                    <a href="${linkOriginal}" class="btn-assistir">
                        <i class="fas fa-play"></i> Assistir Agora
                    </a>
                    
                    <div class="info-box">
                        <p><strong>🎬 Filme:</strong> ${titulo}</p>
                        <p><strong>📺 Plataforma:</strong> Marujo Flix</p>
                        <p><strong>💫 Qualidade:</strong> HD • 4K • Dublado/Legendado</p>
                        
                        <button class="btn-compartilhar" onclick="compartilhar()">
                            <i class="fas fa-share-alt"></i> Compartilhar
                        </button>
                    </div>
                    
                    <div class="footer">
                        Marujo Flix - Filmes, Séries e TV Online Grátis
                    </div>
                    
                    <div class="debug-tamanho" id="debugTamanho"></div>
                </div>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                
                <script>
                    function compartilhar() {
                        const shareData = {
                            title: '${titulo} - Marujo Flix',
                            text: '${descricao}',
                            url: window.location.href
                        };
                        
                        if (navigator.share) {
                            navigator.share(shareData).catch(() => {});
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copiado para compartilhar!');
                        }
                    }
                    
                    // Mostra o tamanho real da imagem (debug)
                    const img = document.getElementById('previewImg');
                    img.onload = function() {
                        document.getElementById('debugTamanho').innerHTML = 
                            '📸 Tamanho real: ' + this.naturalWidth + 'x' + this.naturalHeight;
                    };
                </script>
            </body>
            </html>
        `);

    } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro ao carregar a página');
    }
});

// ==========================================
// ROTA PARA GERAR O LINK COMPARTILHÁVEL
// ==========================================
app.post('/gerar-link', (req, res) => {
    console.log('📥 CORPO DA REQUISIÇÃO:', req.body);
    console.log('📥 HEADERS:', req.headers);
    
    const { logo, titulo, desc } = req.body;
    
    console.log('📥 LOGO RECEBIDA:', logo);
    console.log('📥 TITULO RECEBIDO:', titulo);
    console.log('📥 DESC RECEBIDA:', desc);
    
    if (!logo) {
        return res.status(400).json({ 
            sucesso: false,
            error: 'Logo é obrigatória',
            debug: {
                bodyRecebido: req.body,
                logoRecebida: logo
            }
        });
    }
    
    // 🔴 ANTES: usava o host da requisição
    // const baseUrl = `${req.protocol}://${req.get('host')}`;
    
    // ✅ AGORA: força usar o fabibot.vercel.app
    const baseUrl = 'https://fabibot.vercel.app';
    const shareUrl = new URL('/compartilhar', baseUrl);
    
    shareUrl.searchParams.set('logo', logo);
    if (titulo) shareUrl.searchParams.set('titulo', titulo);
    if (desc) shareUrl.searchParams.set('desc', desc);
    
    console.log('✅ LINK GERADO:', shareUrl.toString());
    
    res.json({
        sucesso: true,
        shareUrl: shareUrl.toString() // Agora vem como https://fabibot.vercel.app/compartilhar?...
    });
});

// ==========================================
// ARQUIVO DE DADOS
// ==========================================

// ==========================================
// ARQUIVO DE DADOS
// ==========================================



const DATA_FILE2 = path.join(__dirname, 'data', 'codigos.json');

function lerDados() {
    try {
        const data = fs.readFileSync(DATA_FILE2, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler dados:', error);
        return { codigos: {}, usuarios: {} };
    }
}

function salvarDados(dados) {
    try {
        fs.writeFileSync(DATA_FILE2, JSON.stringify(dados, null, 2));
        return true;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        return false;
    }
}

// ==========================================
// ROTA PARA ATIVAR CÓDIGO
// ==========================================

app.post('/api/ativar-codigo', (req, res) => {
    console.log('='.repeat(50));
    console.log('📥 POST /api/ativar-codigo');
    console.log('📦 Body recebido:', req.body);
    
    let codigo = null;
    
    // Tenta extrair código
    if (req.body && req.body.codigo) {
        codigo = req.body.codigo;
    } else if (req.body && typeof req.body === 'string') {
        try {
            const parsed = JSON.parse(req.body);
            codigo = parsed.codigo;
        } catch(e) {
            codigo = req.body.trim();
        }
    }
    
    console.log(`🔑 Código: "${codigo}"`);
    
    if (!codigo) {
        return res.status(400).json({ 
            sucesso: false, 
            erro: 'Código é obrigatório' 
        });
    }
    
    const dados = lerDados();
    const codigoUpper = codigo.toUpperCase().trim();
    const codigoInfo = dados.codigos?.[codigoUpper];
    
    console.log(`🔍 Verificando código: ${codigoUpper}`);
    console.log(`📚 Códigos disponíveis:`, Object.keys(dados.codigos || {}));
    
    if (!codigoInfo) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Código inválido'
        });
    }
    
    if (codigoInfo.usado) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Código já utilizado',
            usadoPor: codigoInfo.usadoPor
        });
    }
    
    // Marcar código como usado
    codigoInfo.usado = true;
    codigoInfo.usadoPor = req.ip || 'desconhecido';
    codigoInfo.dataUso = new Date().toISOString();
    
    salvarDados(dados);
    
    console.log(`✅ Código ${codigoUpper} ATIVADO! +${codigoInfo.creditos} créditos`);
    
    res.json({
        sucesso: true,
        codigo: codigoUpper,
        creditos: codigoInfo.creditos,
        mensagem: `Código ${codigoUpper} ativado! +${codigoInfo.creditos} créditos`
    });
});

// ==========================================
// ROTA PARA CONSULTAR STATUS DO CÓDIGO
// ==========================================

app.get('/api/status-codigo', (req, res) => {
    console.log('📥 GET /api/status-codigo');
    console.log('📦 Query:', req.query);
    
    const codigo = req.query.codigo;
    
    if (!codigo) {
        return res.status(400).json({ erro: 'Código é obrigatório' });
    }
    
    const dados = lerDados();
    const codigoUpper = codigo.toUpperCase();
    const codigoInfo = dados.codigos?.[codigoUpper];
    
    if (!codigoInfo) {
        return res.status(404).json({ erro: 'Código inválido' });
    }
    
    res.json({
        codigo: codigoUpper,
        usado: codigoInfo.usado,
        creditos: codigoInfo.creditos,
        usadoPor: codigoInfo.usadoPor,
        criadoEm: codigoInfo.dataCriacao
    });
});

// ==========================================
// ROTA PARA CONSUMIR UMA CONSULTA
// ==========================================

app.post('/api/consumir-consulta', (req, res) => {
    console.log('📥 POST /api/consumir-consulta');
    console.log('📦 Body:', req.body);
    
    const codigo = req.body?.codigo;
    
    if (!codigo) {
        return res.status(400).json({ 
            sucesso: false, 
            erro: 'Código é obrigatório' 
        });
    }
    
    const dados = lerDados();
    const codigoUpper = codigo.toUpperCase();
    const codigoInfo = dados.codigos?.[codigoUpper];
    
    if (!codigoInfo) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Código inválido'
        });
    }
    
    // Verificar se já foi usado
    if (codigoInfo.usado) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Código já utilizado'
        });
    }
    
    // Verificar se tem créditos
    if (codigoInfo.creditos <= 0) {
        codigoInfo.usado = true;
        salvarDados(dados);
        return res.status(402).json({
            sucesso: false,
            erro: 'Código sem créditos'
        });
    }
    
    // Consumir 1 crédito
    codigoInfo.creditos--;
    codigoInfo.usadoPor = req.ip || 'desconhecido';
    codigoInfo.dataUso = new Date().toISOString();
    
    // Se acabaram os créditos, marcar como usado
    if (codigoInfo.creditos <= 0) {
        codigoInfo.usado = true;
    }
    
    salvarDados(dados);
    
    console.log(`🔍 CONSULTA: ${codigoUpper} - Restam ${codigoInfo.creditos} créditos`);
    
    res.json({
        sucesso: true,
        creditosRestantes: codigoInfo.creditos,
        mensagem: `Consulta realizada! Restam ${codigoInfo.creditos} créditos.`
    });
});

// ==========================================

// ==========================================
// ROTA ADMIN - CRIAR NOVO CÓDIGO
// ==========================================



// ==========================================
// ROTA ADMIN - LISTAR TODOS OS CÓDIGOS
// ==========================================



// ==========================================
// INICIAR SERVIDOR
// ==========================================


// Rota principal de consulta
function salvarLog(consultaData) {
    try {
        // Cria o diretório public se não existir
        const publicDir = path.join(__dirname, 'public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        const logFile = path.join(publicDir, 'consultas_log.json');
        
        // Estrutura do log
        const logEntry = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            data_hora: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
            ip: consultaData.ip,
            tipo_consulta: consultaData.tipo,
            valor_consultado: consultaData.valor,
            versao: consultaData.versao || null,
            status: consultaData.status,
            mensagem: consultaData.mensagem,
            user_agent: consultaData.user_agent,
            resultado_parcial: consultaData.resultado_parcial || null
        };

        // Lê o arquivo existente ou cria um novo array
        let logs = [];
        if (fs.existsSync(logFile)) {
            const data = fs.readFileSync(logFile, 'utf8');
            logs = JSON.parse(data);
        }
        
        // Adiciona o novo log
        logs.push(logEntry);
        
        // Mantém apenas os últimos 1000 logs para não sobrecarregar
        if (logs.length > 1000) {
            logs = logs.slice(-1000);
        }
        
        // Salva no arquivo
        fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), 'utf8');
        
        // Também cria um log diário separado
        const hoje = new Date().toISOString().split('T')[0];
        const logDiarioFile = path.join(publicDir, `consultas_${hoje}.json`);
        
        let logsDiarios = [];
        if (fs.existsSync(logDiarioFile)) {
            const data = fs.readFileSync(logDiarioFile, 'utf8');
            logsDiarios = JSON.parse(data);
        }
        
        logsDiarios.push(logEntry);
        fs.writeFileSync(logDiarioFile, JSON.stringify(logsDiarios, null, 2), 'utf8');
        
        console.log(`📝 Log salvo: ${consultaData.tipo} - ${consultaData.valor} - IP: ${consultaData.ip}`);
        
        return true;
    } catch (error) {
        console.error('Erro ao salvar log:', error);
        return false;
    }
}

// ==========================================
// FUNÇÃO PARA OBTER IP DO CLIENTE
// ==========================================


// ==========================================
// ENDPOINT PRINCIPAL DE CONSULTA
// ==========================================


// ==========================================
// ADICIONE ISSO NO SEU server.js
// ==========================================

// Caminho dos arquivos
const CREDITOS_FILE = path.join(__dirname, 'public', 'usuarios_creditos.json');
const IPS_FILE = path.join(__dirname, 'public', 'ips_rastreados.json');

// Função para pegar IP real do cliente
function getClientIp(req) {
    return req.headers['x-forwarded-for']?.split(',')[0] || 
           req.socket?.remoteAddress || 
           req.ip || 
           'ip-desconhecido';
}

// Garantir arquivos

function lerCreditos() { return JSON.parse(fs.readFileSync(CREDITOS_FILE, 'utf8')); }
function lerIPs() { return JSON.parse(fs.readFileSync(IPS_FILE, 'utf8')); }
function salvarCreditos(dados) { fs.writeFileSync(CREDITOS_FILE, JSON.stringify(dados, null, 2)); }
function salvarIPs(dados) { fs.writeFileSync(IPS_FILE, JSON.stringify(dados, null, 2)); }

// ==========================================
// API MODIFICADA: Salvar créditos com verificação de IP
// ==========================================
app.post('/api/salvar-creditos', (req, res) => {
    const { userId, creditos } = req.body;
    const ip = getClientIp(req);
    
    if (!userId) return res.status(400).json({ success: false, error: 'userId obrigatório' });
    
    try {
        const dadosCreditos = lerCreditos();
        const dadosIPs = lerIPs();
        
        // VERIFICAÇÃO: Se o IP já tem outra conta
        if (dadosIPs[ip] && dadosIPs[ip].userId !== userId) {
            return res.status(403).json({ 
                success: false, 
                error: 'Já existe uma conta neste IP. Não é permitido múltiplas contas.'
            });
        }
        
        // Salva créditos
        dadosCreditos[userId] = {
            creditos: creditos,
            ultimaAtualizacao: new Date().toISOString(),
            ip: ip
        };
        
        // Registra IP se for novo
        if (!dadosIPs[ip]) {
            dadosIPs[ip] = { userId: userId, dataCriacao: new Date().toISOString() };
        }
        
        salvarCreditos(dadosCreditos);
        salvarIPs(dadosIPs);
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ==========================================
// API: Carregar créditos com verificação de IP
// ==========================================
app.get('/api/carregar-creditos', (req, res) => {
    const { userId } = req.query;
    const ip = getClientIp(req);
    
    if (!userId) return res.status(400).json({ success: false, error: 'userId obrigatório' });
    
    try {
        const dadosCreditos = lerCreditos();
        const dadosIPs = lerIPs();
        
        // VERIFICAÇÃO: IP já tem outra conta?
        if (dadosIPs[ip] && dadosIPs[ip].userId !== userId) {
            return res.status(403).json({ 
                success: false, 
                error: 'Este IP já está associado a outra conta. Bloqueado!',
                bloqueado: true
            });
        }
        
        const usuario = dadosCreditos[userId];
        res.json({ success: true, creditos: usuario?.creditos || null });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ==========================================
// API: Registrar novo usuário (primeiro acesso)
// ==========================================



// ==========================================
// INICIALIZAÇÃO
// ==========================================

// API: Listar todos os usuários (admin)
app.get('/api/usuarios', (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync(CREDITOS_FILE, 'utf8'));
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ==========================================
// ADICIONE ESTAS ROTAS NO SEU server.js
// ==========================================

// Rota para verificar IP
app.get('/api/verificar-ip', (req, res) => {
    const ip = getClientIp(req);
    const dadosIPs = lerIPs();
    
    if (dadosIPs[ip]) {
        return res.json({
            success: true,
            temConta: true,
            userId: dadosIPs[ip].userId
        });
    }
    
    res.json({ success: true, temConta: false });
});

// Rota para registrar novo usuário
app.post('/api/registrar-usuario', (req, res) => {
    const { userId, nome, email, creditosIniciais = 5 } = req.body;
    const ip = getClientIp(req);
    
    if (!userId) {
        return res.status(400).json({ success: false, error: 'userId obrigatório' });
    }
    
    try {
        const dadosCreditos = lerCreditos();
        const dadosIPs = lerIPs();
        
        // VERIFICA: IP já tem conta?
        if (dadosIPs[ip]) {
            return res.status(403).json({ 
                success: false, 
                error: 'Este IP já possui uma conta. Não pode criar outra!'
            });
        }
        
        // Se já existe o usuário, retorna
        if (dadosCreditos[userId]) {
            return res.json({ success: true, jaExistente: true, creditos: dadosCreditos[userId].creditos });
        }
        
        // Cria novo usuário
        dadosCreditos[userId] = {
            creditos: creditosIniciais,
            nome: nome || 'Marujo',
            email: email || '',
            dataCriacao: new Date().toISOString(),
            ip: ip
        };
        
        dadosIPs[ip] = { 
            userId: userId, 
            dataCriacao: new Date().toISOString() 
        };
        
        salvarCreditos(dadosCreditos);
        salvarIPs(dadosIPs);
        
        res.json({ success: true, novo: true, creditos: creditosIniciais });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


app.get('/api/consultar', async (req, res) => {
    const startTime = Date.now();
    
    try {
        const { tipo, valor, versao } = req.query;
        
        // ==========================================
        // PEGAR INFORMAÇÕES DA CONTA LOGADA
        // ==========================================
        // Você precisa passar o userId no header da requisição
        const userId = req.headers['x-user-id'];
        const userEmail = req.headers['x-user-email'];
        const userName = req.headers['x-user-name'];
        const userPhoto = req.headers['x-user-photo'];
        
        // Também podemos pegar o IP e User-Agent
        const userIp = getClientIp(req);
        const userAgent = req.headers['user-agent'];
        
        if (!tipo || !valor) {
            const errorLog = {
                timestamp: new Date().toISOString(),
                ip: userIp,
                user_id: userId || 'anonimo',
                user_email: userEmail || 'anonimo',
                user_name: userName || 'anonimo',
                tipo: tipo || 'desconhecido',
                valor: valor || 'vazio',
                versao: versao || null,
                status: 'erro',
                mensagem: 'Parâmetros incompletos',
                user_agent: userAgent
            };
            salvarLog(errorLog);
            
            return res.status(400).json({ error: 'Parâmetros incompletos' });
        }
        
        // Verifica se o usuário tem créditos (opcional)
        if (userId && userId !== 'anonimo') {
            const creditos = await getCreditosUsuario(userId);
            if (creditos <= 0) {
                return res.status(403).json({ 
                    error: 'Créditos insuficientes',
                    creditos: 0,
                    mensagem: 'Você não tem créditos suficientes para realizar esta consulta'
                });
            }
            // Consumir 1 crédito
            await consumirCreditoUsuario(userId);
        }
        
        let url = '';
        let resultado = null;
        
        // ==========================================
        // NOVA API DE CONSULTA POR NOME
        // ==========================================
        if (tipo === 'nome') {
            url = `http://node.tconect.xyz:1116/api/consulta/nome/v1?apikey=kbral&nome=${encodeURIComponent(valor)}`;
            
            console.log(`🔍 Usuário ${userName || userId} consultando por nome: ${valor}`);
            
            const response = await axios.get(url, {
                timeout: 30000,
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'MarujoConsultas/1.0'
                }
            });
            
            resultado = response.data;
            
            // Log de sucesso com dados do usuário
            const successLog = {
                timestamp: new Date().toISOString(),
                ip: userIp,
                user_id: userId || 'anonimo',
                user_email: userEmail || 'anonimo',
                user_name: userName || 'anonimo',
                user_photo: userPhoto || null,
                tipo: 'nome',
                valor: valor,
                versao: versao || 'v1',
                status: 'sucesso',
                mensagem: 'Consulta realizada com sucesso',
                user_agent: userAgent,
                tempo_resposta_ms: Date.now() - startTime,
                resultado_parcial: {
                    total_encontrados: resultado.resultado?.resultados?.length || 0,
                    primeiros_resultados: resultado.resultado?.resultados?.slice(0, 3).map(r => ({
                        nome: r.nome,
                        cpf: r.cpf
                    })) || []
                }
            };
            salvarLog(successLog);
            
            // Adiciona informações do usuário na resposta
            resultado.usuario = {
                id: userId,
                email: userEmail,
                nome: userName,
                consulta_realizada_em: new Date().toISOString(),
                creditos_restantes: userId ? await getCreditosUsuario(userId) : null
            };
            
            return res.json(resultado);
        }
        
        // ==========================================
        // CONSULTAS EXISTENTES (CPF, CNPJ, PLACA, ETC)
        // ==========================================
        switch(tipo) {
            case 'cpf':
                url = `${BASE_URL}cpf/${versao || 'v3'}?apikey=${API_KEY}&code=${valor}`;
                break;
            case 'cnpj':
                url = `${BASE_URL}cnpj/v1?apikey=${API_KEY}&cnpj=${valor}`;
                break;
            case 'placa':
                url = `${BASE_URL}placa/${versao || 'v1'}?apikey=${API_KEY}&placa=${valor}`;
                break;
            case 'telefone':
                url = `${BASE_URL}telefone/v1?apikey=${API_KEY}&telefone=${valor}`;
                break;
            case 'motor':
                const [tipoMotor, valorMotor] = valor.split('|');
                url = `${BASE_URL}motor/v1?apikey=${API_KEY}&tipo=${tipoMotor}&valor=${valorMotor}`;
                break;
            case 'chassi':
                url = `${BASE_URL}motor/v1?apikey=${API_KEY}&tipo=chassi&valor=${valor}`;
                break;
            case 'foto':
                url = `${BASE_URL}fotope/v1?apikey=${API_KEY}&nome=${encodeURIComponent(valor)}`;
                break;
            default:
                const errorLogDefault = {
                    timestamp: new Date().toISOString(),
                    ip: userIp,
                    user_id: userId || 'anonimo',
                    user_email: userEmail || 'anonimo',
                    user_name: userName || 'anonimo',
                    tipo: tipo,
                    valor: valor,
                    versao: versao || null,
                    status: 'erro',
                    mensagem: 'Tipo de consulta inválido',
                    user_agent: userAgent
                };
                salvarLog(errorLogDefault);
                
                return res.status(400).json({ error: 'Tipo de consulta inválido' });
        }
        
        console.log(`🔍 Usuário ${userName || userId} consultando: ${url}`);
        
        const response = await axios.get(url, {
            timeout: 30000,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'MarujoConsultas/1.0'
            }
        });
        
        resultado = response.data;
        
        // Log de sucesso
        const successLog = {
            timestamp: new Date().toISOString(),
            ip: userIp,
            user_id: userId || 'anonimo',
            user_email: userEmail || 'anonimo',
            user_name: userName || 'anonimo',
            user_photo: userPhoto || null,
            tipo: tipo,
            valor: valor,
            versao: versao || 'v1',
            status: 'sucesso',
            mensagem: 'Consulta realizada com sucesso',
            user_agent: userAgent,
            tempo_resposta_ms: Date.now() - startTime,
            resultado_parcial: {
                status: resultado.status,
                tem_resultados: !!resultado.resultado
            }
        };
        salvarLog(successLog);
        
        // Adiciona informações do usuário na resposta
        resultado.usuario = {
            id: userId,
            email: userEmail,
            nome: userName,
            consulta_realizada_em: new Date().toISOString(),
            creditos_restantes: userId ? await getCreditosUsuario(userId) : null
        };
        
        res.json(resultado);
        
    } catch (error) {
        console.error('Erro na consulta:', error.message);
        
        const userIp = getClientIp(req);
        const userId = req.headers['x-user-id'];
        const userEmail = req.headers['x-user-email'];
        const userName = req.headers['x-user-name'];
        
        // Log de erro
        const errorLog = {
            timestamp: new Date().toISOString(),
            ip: userIp,
            user_id: userId || 'anonimo',
            user_email: userEmail || 'anonimo',
            user_name: userName || 'anonimo',
            tipo: req.query.tipo || 'desconhecido',
            valor: req.query.valor || 'desconhecido',
            versao: req.query.versao || null,
            status: 'erro',
            mensagem: error.message,
            user_agent: req.headers['user-agent'],
            erro_detalhes: error.response?.data || null
        };
        salvarLog(errorLog);
        
        res.status(500).json({ 
            error: 'Erro ao realizar consulta',
            details: error.message,
            usuario: userId ? {
                id: userId,
                email: userEmail,
                nome: userName
            } : null
        });
    }
});

// ==========================================
// FUNÇÕES AUXILIARES DE CRÉDITOS
// ==========================================
async function getCreditosUsuario(userId) {
    try {
        if (!fs.existsSync(CREDITOS_FILE)) {
            return 5; // Créditos iniciais
        }
        const dados = JSON.parse(fs.readFileSync(CREDITOS_FILE, 'utf8'));
        return dados[userId]?.creditos || 5;
    } catch (error) {
        console.error('Erro ao ler créditos:', error);
        return 5;
    }
}

async function consumirCreditoUsuario(userId) {
    try {
        if (!fs.existsSync(CREDITOS_FILE)) {
            const dados = {};
            dados[userId] = { creditos: 4, ultimaAtualizacao: new Date().toISOString() };
            fs.writeFileSync(CREDITOS_FILE, JSON.stringify(dados, null, 2));
            return 4;
        }
        
        const dados = JSON.parse(fs.readFileSync(CREDITOS_FILE, 'utf8'));
        const creditosAtuais = dados[userId]?.creditos || 5;
        const novosCreditos = Math.max(0, creditosAtuais - 1);
        
        dados[userId] = {
            creditos: novosCreditos,
            ultimaAtualizacao: new Date().toISOString(),
            ultimo_consumo: new Date().toISOString()
        };
        
        fs.writeFileSync(CREDITOS_FILE, JSON.stringify(dados, null, 2));
        return novosCreditos;
    } catch (error) {
        console.error('Erro ao consumir crédito:', error);
        return 0;
    }
}

// ==========================================
// FUNÇÃO PARA PEGAR IP DO CLIENTE
// ==========================================

// ==========================================
// FUNÇÃO PARA SALVAR LOGS
// ==========================================





app.get('/player/:id', async (req, res) => {
    try {
        console.log(`🎬 Buscando player para ID: ${req.params.id}`);
        
        const canalId = req.params.id;
        const usuario = req.session.user || {};
        
        // Função para obter/criar userId consistente
        const getUserId = (req, res) => {
    // 1. PRIMEIRO: verifica se já existe cookie
    let userId = req.cookies?.userId;
    
    // 2. Se existir cookie, retorna ele (MESMO ID)
    if (userId) {
        console.log('Usuário existente:', userId);
        return userId;
    }
    
    // 3. SÓ CHEGA AQUI SE FOR UM NOVO USUÁRIO (sem cookie)
    console.log('Novo usuário detectado!');
    
    const ip = req.ip || req.connection.remoteAddress || 'unknown';
    const cleanIp = ip.replace(/::ffff:/g, '');
    
    // Gera parte única SOMENTE PARA O NOVO USUÁRIO
    const unique = Math.random().toString(36).substring(2, 10);
    
    // Cria o NOVO ID
    userId = `${cleanIp}_${unique}`;
    
    // Salva no cookie para as próximas vezes
    res.cookie('userId', userId, { 
        maxAge: 365 * 24 * 60 * 60 * 1000, // 1 ano
        httpOnly: true 
    });
    
    return userId;
};

        const userId = getUserId(req, res);
        
        // =========================================================
        // FUNÇÃO PARA FORMATAR DATA/HORA NO PADRÃO BRASILEIRO
        // =========================================================
        function getDataBrasil() {
            const agora = new Date();
            const brasiliaTime = new Date(agora.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
            
            const dia = String(brasiliaTime.getDate()).padStart(2, '0');
            const mes = String(brasiliaTime.getMonth() + 1).padStart(2, '0');
            const ano = brasiliaTime.getFullYear();
            const horas = String(brasiliaTime.getHours()).padStart(2, '0');
            const minutos = String(brasiliaTime.getMinutes()).padStart(2, '0');
            const segundos = String(brasiliaTime.getSeconds()).padStart(2, '0');
            
            return {
                dataCompleta: `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`,
                data: `${dia}/${mes}/${ano}`,
                hora: `${horas}:${minutos}:${segundos}`,
                dia: dia,
                mes: mes,
                ano: ano,
                horas: horas,
                minutos: minutos,
                timestamp: brasiliaTime.getTime(),
                iso: brasiliaTime.toISOString()
            };
        }
        
        // =========================================================
        // CARREGAR ARQUIVOS
        // =========================================================
        const arquivoJSON = path.join(__dirname, 'public', 'lista.json');
        const arquivoUserJSON = path.join(__dirname, 'public', 'user_data.json');
        
        const ARQUIVO_PERFIS_USUARIOS = path.join(__dirname, 'public', 'perfis_usuarios.json');
        const ARQUIVO_MENSAGENS_LIVE = path.join(__dirname, 'public', 'mensagens_live.json');
        const ARQUIVO_USUARIOS_ATIVOS = path.join(__dirname, 'public', 'usuarios_ativos.json');
        const ARQUIVO_EMOTES_GLOBAIS = path.join(__dirname, 'public', 'emotes_globo.json');
        const ARQUIVO_CHAT_GLOBAL = path.join(__dirname, 'public', 'chat_global.json');
        const ARQUIVO_USUARIOS_CHAT = path.join(__dirname, 'public', 'usuarios_chat.json');
        
        const fs = require('fs').promises; 
        const fsSync = require('fs'); 
        
        // Função auxiliar para ler JSON
        function lerJSON(arquivo) { 
            try { 
                return JSON.parse(fsSync.readFileSync(arquivo, 'utf8')); 
            } catch(e) { 
                return Array.isArray(JSON.parse('[]')) ? [] : {}; 
            } 
        }
        
        // Função para salvar JSON
        function salvarJSON(arquivo, dados) {
            fsSync.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
        }
        
        // =========================================================
        // FUNÇÃO PARA CARREGAR DADOS DO USUÁRIO (watchingProgress)
        // =========================================================
        async function loadUserData() {
            try {
                if (fsSync.existsSync(arquivoUserJSON)) {
                    const data = await fs.readFile(arquivoUserJSON, 'utf-8');
                    return JSON.parse(data);
                }
            } catch (e) {
                console.error('Erro ao carregar userData:', e);
            }
            return { watchingProgress: {} };
        }
        
        // =========================================================
        // FUNÇÃO PARA SALVAR DADOS DO USUÁRIO
        // =========================================================
        async function salvarDadosUsuario(userId, canalInfo) {
            try {
                // Ler dados atuais
                let dadosAtuais = { usuarios: {}, estatisticas: {}, metadados: {} };
                if (fsSync.existsSync(arquivoUserJSON)) {
                    dadosAtuais = JSON.parse(await fs.readFile(arquivoUserJSON, 'utf-8'));
                }
                
                const dataBrasil = getDataBrasil();
                
                // Inicializar usuário se não existir
                if (!dadosAtuais.usuarios) dadosAtuais.usuarios = {};
                if (!dadosAtuais.estatisticas) dadosAtuais.estatisticas = {
                    totalVisualizacoes: 0,
                    canaisPopulares: {},
                    visualizacoesPorDia: {},
                    visualizacoesPorHora: {}
                };
                
                if (!dadosAtuais.usuarios[userId]) {
                    dadosAtuais.usuarios[userId] = {
                        primeiroAcesso: dataBrasil.dataCompleta,
                        ultimoAcesso: dataBrasil.dataCompleta,
                        primeiroAcessoISO: dataBrasil.iso,
                        totalVisualizacoes: 0,
                        historico: [],
                        preferencias: {},
                        dispositivo: req.headers['user-agent'] || 'Desconhecido',
                        ip: req.ip,
                        ultimoIP: req.ip
                    };
                }
                
                // Atualizar dados do usuário
                const usuario = dadosAtuais.usuarios[userId];
                usuario.ultimoAcesso = dataBrasil.dataCompleta;
                usuario.ultimoAcessoISO = dataBrasil.iso;
                usuario.totalVisualizacoes += 1;
                usuario.ultimoIP = req.ip;
                
                // Estatísticas por dia e hora
                const diaAtual = dataBrasil.data;
                const horaAtual = `${dataBrasil.horas}:00`;
                
                if (!dadosAtuais.estatisticas.visualizacoesPorDia[diaAtual]) {
                    dadosAtuais.estatisticas.visualizacoesPorDia[diaAtual] = 0;
                }
                if (!dadosAtuais.estatisticas.visualizacoesPorHora[horaAtual]) {
                    dadosAtuais.estatisticas.visualizacoesPorHora[horaAtual] = 0;
                }
                
                dadosAtuais.estatisticas.visualizacoesPorDia[diaAtual] += 1;
                dadosAtuais.estatisticas.visualizacoesPorHora[horaAtual] += 1;
                
                // Adicionar ao histórico
                usuario.historico.unshift({
                    canalId: canalInfo.id,
                    nome: canalInfo.nome,
                    categoria: canalInfo.categoria,
                    dataHora: dataBrasil.dataCompleta,
                    data: dataBrasil.data,
                    hora: dataBrasil.hora,
                    timestamp: dataBrasil.timestamp,
                    ip: req.ip
                });
                
                if (usuario.historico.length > 50) {
                    usuario.historico = usuario.historico.slice(0, 50);
                }
                
                // Atualizar estatísticas gerais
                dadosAtuais.estatisticas.totalVisualizacoes += 1;
                dadosAtuais.estatisticas.ultimaAtualizacao = dataBrasil.dataCompleta;
                
                // Atualizar contador do canal
                const canalNome = canalInfo.nome;
                if (!dadosAtuais.estatisticas.canaisPopulares[canalNome]) {
                    dadosAtuais.estatisticas.canaisPopulares[canalNome] = 0;
                }
                dadosAtuais.estatisticas.canaisPopulares[canalNome] += 1;
                
                // Ordenar canais populares (manter top 20)
                const canaisPopulares = dadosAtuais.estatisticas.canaisPopulares;
                const canaisOrdenados = Object.entries(canaisPopulares)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 20)
                    .reduce((obj, [key, value]) => {
                        obj[key] = value;
                        return obj;
                    }, {});
                
                dadosAtuais.estatisticas.canaisPopulares = canaisOrdenados;
                
                // Salvar dados atualizados
                await fs.writeFile(arquivoUserJSON, JSON.stringify(dadosAtuais, null, 2));
                
                console.log(`💾 Dados salvos para usuário ${userId}`);
                console.log(`   📅 Data/Hora: ${dataBrasil.dataCompleta}`);
                console.log(`   👁️ Visualização #${usuario.totalVisualizacoes}`);
                
            } catch (error) {
                console.error('❌ Erro ao salvar dados do usuário:', error);
            }
        }
        
        // Verificar/Criar arquivos necessários
        if (!fsSync.existsSync(arquivoUserJSON)) {
            const dataBrasil = getDataBrasil();
            await fs.writeFile(arquivoUserJSON, JSON.stringify({
                metadados: {
                    fusoHorario: "America/Sao_Paulo (UTC-3)",
                    ultimaAtualizacao: dataBrasil.dataCompleta,
                    versao: "1.0"
                },
                usuarios: {},
                estatisticas: {
                    totalVisualizacoes: 0,
                    canaisPopulares: {},
                    visualizacoesPorDia: {},
                    visualizacoesPorHora: {},
                    ultimaAtualizacao: dataBrasil.dataCompleta
                }
            }, null, 2));
            console.log('📁 Arquivo user_data.json criado com sucesso!');
        }
        
        if (!fsSync.existsSync(arquivoJSON)) {
            throw new Error("Arquivo lista.json não encontrado na pasta public!");
        }

        const conteudoJSON = await fs.readFile(arquivoJSON, 'utf-8');
        const canais = JSON.parse(conteudoJSON);

        // =========================================================
        // FUNÇÃO PARA EXTRAIR NOME DA SÉRIE (SEM NÚMERO/TEMPORADA)
        // =========================================================
        function extrairNomeSerie(nome) {
            if (!nome) return '';
            
            // Remove padrões como "S01 E01", "S01E01", "Temporada 1", "Episódio 1", etc.
            let nomeLimpo = nome
                .replace(/\s*[Ss]\d{2}\s*[Ee]\d{2,3}/g, '')     // S01 E01
                .replace(/\s*[Ss]\d{2}[Ee]\d{2,3}/g, '')        // S01E01
                .replace(/\s*[Tt]emporada\s*\d+/gi, '')         // Temporada 1
                .replace(/\s*[Ee]pis[oó]dio\s*\d+/gi, '')       // Episódio 1
                .replace(/\s*-\s*\d+$/, '')                      // - 123 no final
                .replace(/\s*\(\d{4}\)\s*$/, '')                 // (2024) no final
                .replace(/\s*\[\d{4}\]\s*$/, '')                 // [2024] no final
                .replace(/\s+/g, ' ')
                .trim();
            
            // Se depois de todas as remoções ficou vazio, retorna o original
            return nomeLimpo || nome;
        }

        // =========================================================
        // FUNÇÃO PARA EXTRAIR NÚMERO DO EPISÓDIO (SEQUENCIAL)
        // =========================================================
        function extrairNumeroSequencial(nome) {
            if (!nome) return 999999;
            
            // Tenta extrair padrão S01E01, S01 E01, etc.
            const matchSE = nome.match(/[Ss](\d{2})\s*[Ee](\d{2,3})/);
            if (matchSE) {
                const temporada = parseInt(matchSE[1], 10);
                const episodio = parseInt(matchSE[2], 10);
                return temporada * 1000 + episodio; // Ex: S01E02 = 1002
            }
            
            // Tenta extrair apenas número do episódio
            const matchE = nome.match(/[Ee](\d{2,3})$/);
            if (matchE) return parseInt(matchE[1], 10);
            
            // Tenta extrair qualquer número de 2-3 dígitos no final
            const matchNum = nome.match(/\b(\d{2,3})\b(?!\s*[Ss]\d{2})/);
            if (matchNum) return parseInt(matchNum[1], 10);
            
            return 999999; // Coloca no final se não conseguir extrair
        }

        // =========================================================
        // FUNÇÃO PARA BUSCAR ITEM POR ID (SIMPLIFICADA)
        // =========================================================
        function buscarItemPorId(id, lista) {
            // Procura diretamente no array principal
            const item = lista.find(item => item.id === id);
            if (item) {
                return {
                    tipo: 'item',
                    item: item,
                    link: item.link || item.videoUrl
                };
            }
            return null;
        }

        // =========================================================
        // BUSCA O CANAL ATUAL
        // =========================================================
        const resultado = buscarItemPorId(canalId, canais);

        if (!resultado) {
            console.log('❌ ID não encontrado:', canalId);
            return res.status(404).send(`<h1>❌ Episódio não encontrado</h1>`);
        }

        // Extrai as informações
        let canalEncontrado = resultado.item;
        const linkReal = resultado.link;

        console.log(`✅ Encontrado: ${canalEncontrado.nome}`);

        // =========================================================
        // FUNÇÃO PARA OBTER PERFIL DO USUÁRIO
        // =========================================================
        function getPerfilUsuario(userId, ip, userAgent) {
            let usuarios = {};
            try {
                if (fsSync.existsSync(ARQUIVO_USUARIOS_CHAT)) {
                    usuarios = lerJSON(ARQUIVO_USUARIOS_CHAT);
                }
            } catch {
                usuarios = {};
            }
            
            if (!usuarios[userId]) {
                const dataBrasil = getDataBrasil();
                const nomeBase = 'Marujo_' + Math.floor(Math.random() * 1000);
                const cores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fab1a0', '#a8e6cf', '#00ffb3'];
                
                usuarios[userId] = {
                    nome: nomeBase,
                    avatar: `https://i.imgur.com/avatar${Math.floor(Math.random() * 5) + 1}.png`,
                    cor: cores[Math.floor(Math.random() * cores.length)],
                    nivel: 1,
                    xp: 0,
                    mensagensEnviadas: 0,
                    primeiroAcesso: dataBrasil.dataCompleta,
                    ultimoAcesso: dataBrasil.dataCompleta
                };
                
                salvarJSON(ARQUIVO_USUARIOS_CHAT, usuarios);
                console.log(`👤 Novo perfil criado: ${nomeBase}`);
            } else {
                usuarios[userId].ultimoAcesso = getDataBrasil().dataCompleta;
                salvarJSON(ARQUIVO_USUARIOS_CHAT, usuarios);
            }
            
            return usuarios[userId];
        }

        // Carregar userData para o progresso
        const userData = await loadUserData();
        
        // OBTER PERFIL DO USUÁRIO
        const perfilChat = getPerfilUsuario(userId, req.ip, req.headers['user-agent']);
        
        // SALVAR DADOS DA VISUALIZAÇÃO
        await salvarDadosUsuario(userId, canalEncontrado);

        // =========================================================
        // LÓGICA DO PRÓXIMO EPISÓDIO (CORRIGIDA - POR SÉRIE)
        // =========================================================
        let proximoEpisodioId = null;

        console.log("🔍 Verificando próximo episódio por série...");

        // Extrai o nome da série do episódio atual
        const nomeSerieAtual = extrairNomeSerie(canalEncontrado.nome);
        console.log(`📺 Nome da série: "${nomeSerieAtual}"`);

        if (nomeSerieAtual) {
            // Filtra todos os itens que pertencem à mesma série
            const episodiosDaMesmaSerie = canais
                .filter(item => {
                    if (!item.nome) return false;
                    
                    // Ignora itens que claramente não são da mesma série (diferente categoria?)
                    if (item.categoria !== canalEncontrado.categoria) return false;
                    
                    const nomeSerieItem = extrairNomeSerie(item.nome);
                    
                    // Comparação flexível: contém o nome da série ou vice-versa
                    return nomeSerieItem.includes(nomeSerieAtual) || 
                           nomeSerieAtual.includes(nomeSerieItem) ||
                           nomeSerieItem === nomeSerieAtual;
                })
                .map(item => ({
                    ...item,
                    numeroOrdem: extrairNumeroSequencial(item.nome)
                }))
                .sort((a, b) => {
                    // Primeiro tenta ordenar pelo número sequencial
                    if (a.numeroOrdem !== b.numeroOrdem) {
                        return a.numeroOrdem - b.numeroOrdem;
                    }
                    // Se não conseguir, ordena por ID (que parece ser sequencial)
                    // Extrai o número do ID (ex: idx_70056 -> 70056)
                    const numA = parseInt(a.id.replace('idx_', '')) || 0;
                    const numB = parseInt(b.id.replace('idx_', '')) || 0;
                    return numA - numB;
                });

            console.log(`📋 Encontrados ${episodiosDaMesmaSerie.length} episódios da mesma série`);

            if (episodiosDaMesmaSerie.length > 1) {
                // Encontra o índice do episódio atual na lista ordenada
                const indexAtual = episodiosDaMesmaSerie.findIndex(item => item.id === canalId);
                console.log(`🔢 Índice atual na lista ordenada: ${indexAtual}`);

                // Se não for o último, pega o próximo
                if (indexAtual !== -1 && indexAtual < episodiosDaMesmaSerie.length - 1) {
                    const proximo = episodiosDaMesmaSerie[indexAtual + 1];
                    proximoEpisodioId = proximo.id;
                    console.log(`✅ PRÓXIMO EPISÓDIO ENCONTRADO: ${proximo.nome} (ID: ${proximoEpisodioId})`);
                } else {
                    console.log("⏹️ Este é o último episódio disponível desta série.");
                }
            } else {
                console.log("⚠️ Apenas um episódio encontrado para esta série.");
            }
        } else {
            console.log("ℹ️ Não foi possível extrair nome da série.");
            
            // Fallback: tenta encontrar pelo padrão de ID sequencial (idx_70056, idx_70058, idx_70060...)
            console.log("🔄 Tentando fallback por ID sequencial...");
            
            // Extrai o número do ID atual
            const matchId = canalId.match(/idx_(\d+)/);
            if (matchId) {
                const numId = parseInt(matchId[1], 10);
                
                // Procura um item com ID próximo (numId + 2, +4, etc.) que tenha nome parecido
                const possiveisProximos = canais
                    .filter(item => {
                        if (!item.nome) return false;
                        if (item.categoria !== canalEncontrado.categoria) return false;
                        
                        const matchItem = item.id.match(/idx_(\d+)/);
                        if (!matchItem) return false;
                        
                        const numItem = parseInt(matchItem[1], 10);
                        return numItem > numId && numItem <= numId + 10; // Pula no máximo 10 números
                    })
                    .sort((a, b) => {
                        const numA = parseInt(a.id.replace('idx_', '')) || 0;
                        const numB = parseInt(b.id.replace('idx_', '')) || 0;
                        return numA - numB;
                    });
                
                if (possiveisProximos.length > 0) {
                    proximoEpisodioId = possiveisProximos[0].id;
                    console.log(`✅ PRÓXIMO EPISÓDIO (FALLBACK): ${possiveisProximos[0].nome} (ID: ${proximoEpisodioId})`);
                }
            }
        }

        console.log("🏁 proximoEpisodioId final:", proximoEpisodioId);
// =========================================================
// DETECÇÃO DE LIVE STREAM
// =========================================================
const isLiveStream = canalEncontrado.link && (
    canalEncontrado.link.includes('.m3u8') || 
    canalEncontrado.link.includes('.ts') ||
    canalEncontrado.link.includes('live') ||
    canalEncontrado.link.includes('stream') ||
    canalEncontrado.categoria?.toLowerCase().includes('ao vivo') ||
    canalEncontrado.categoria?.toLowerCase().includes('live')
);

console.log(`🔴 É Live: ${isLiveStream ? 'SIM' : 'NÃO'}`);
        // CONVERSÃO DE TS PARA M3U8
        let linkPlayer = linkReal;
        if (linkPlayer && linkPlayer.includes('.ts')) {
            linkPlayer = linkPlayer.replace('.ts', '.m3u8');
        }

        // Lógica de Progresso
        const progressKey = userId ? `${userId}_${canalId}` : null;
        let savedTime = 0; let progress = 0;
        if (progressKey && userData.watchingProgress) {
            savedTime = parseFloat(userData.watchingProgress[progressKey]) || 0;
            if (savedTime > 0) progress = savedTime > 300 ? 10 : (savedTime > 60 ? 5 : 0);
        }
        
        const urlBase = req.protocol + '://' + req.get('host');
        const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(req.headers['user-agent'] || '');
        
        // Buscar últimas mensagens
        let ultimasMensagens = [];
        try {
            if (fsSync.existsSync(ARQUIVO_CHAT_GLOBAL)) {
                ultimasMensagens = lerJSON(ARQUIVO_CHAT_GLOBAL) || [];
            }
        } catch {
            ultimasMensagens = [];
        }
        const ultimas50 = ultimasMensagens.slice(-50);

        // Buscar emotes
        let emotes = [];
        try {
            if (fsSync.existsSync(ARQUIVO_EMOTES_GLOBAIS)) {
                emotes = lerJSON(ARQUIVO_EMOTES_GLOBAIS) || [];
            }
        } catch {
            emotes = [];
        }

        // =========================================================
        // RENDERIZA O PLAYER
        // =========================================================
        res.render('player-enhanced', {
            usuario: userId,
            canal: { 
                id: canalEncontrado.id, 
                nome: canalEncontrado.nome, 
                categoria: canalEncontrado.categoria || 'Sem categoria', 
                logo: canalEncontrado.logo || '', 
                link: linkPlayer, 
                progress: progress, 
                savedTime: savedTime 
            },
            playerUrl: linkPlayer ? `/streampro/${encodeURIComponent(linkPlayer)}` : '#',
            urlBase: urlBase, 
            savedTime: savedTime, 
            isMobile: isMobile,
            title: canalEncontrado.nome + ' | Marujo Flix',
            shareUrl: `${urlBase}/player/${canalEncontrado.id}`,
            proximoEpisodioId: proximoEpisodioId,
            isLiveStream: isLiveStream,
            dataBrasil: getDataBrasil(),
            
            // Dados do chat
            userId: userId,
            usuarioInfo: {
                nome: perfilChat.nome,
                avatar: perfilChat.avatar,
                cor: perfilChat.cor,
                nivel: perfilChat.nivel || 1,
                xp: perfilChat.xp || 0,
                mensagensEnviadas: perfilChat.mensagensEnviadas || 0
            },
            ultimasMensagens: JSON.stringify(ultimas50),
            emotes: JSON.stringify(emotes)
        });
        
    } catch (error) {
        console.error('❌ Erro crítico no player:', error);
        res.status(500).send(`<h1>⚠️ Erro ao carregar player</h1><p>${error.message}</p>`);
    }
});
app.get('/streampro/:url*', async (req, res) => {
    try {
        const usuario = req.session.user || {};
        
        // Extrair a URL completa do vídeo
        const fullPath = req.params.url + (req.params[0] || '');
        let videoUrl = decodeURIComponent(fullPath);
        
        console.log('🔗 URL de vídeo recebida:', videoUrl);
        
        // Garantir protocolo
        if (!videoUrl.startsWith('http://') && !videoUrl.startsWith('https://')) {
            videoUrl = 'http://' + videoUrl;
        }
        
        // Validar URL
        try {
            new URL(videoUrl);
        } catch (error) {
            console.error('URL inválida:', videoUrl);
            return res.redirect('/streampro?error=url_invalida');
        }
        
        // ===== SEGUIR REDIRECTS NO SERVIDOR =====
        const finalUrl = await seguirRedirects(videoUrl);
        console.log('✅ URL final após redirects:', finalUrl);
        
        // Detectar tipo de stream
        const streamType = detectStreamType(finalUrl);
        console.log(`📡 Tipo de stream detectado: ${streamType}`);
        
        // Metadados para exibição
        let siteNome = "Stream Pro - Reprodução Direta";
        let streamInfo = "Conteúdo sob demanda";
        if (streamType === 'LIVE' || streamType === 'RTMP_LIVE') {
            siteNome = "Stream Pro - TRANSMISSÃO AO VIVO 🔴";
            streamInfo = "TRANSMISSÃO AO VIVO";
        } else if (streamType === 'HLS') {
            streamInfo = "Stream HLS";
        }
        
        // Coletar informações para log
        const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress?.replace('::ffff:', '') || 'desconhecido';
        const userAgent = req.headers['user-agent'] || '';
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);
        const dataHoraBrasil = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');
        const streamName = finalUrl.split('/').pop() || 'stream_desconhecido';
        
        // Registrar acesso (opcional)
      ///  registrarAcessoDireto(finalUrl, streamType, ip, userAgent, isMobile, isTablet, usuario, streamName, dataHoraBrasil);
        
        // Renderizar o template com a URL final
        return res.render('streampro', {
            videoUrl: finalUrl,          // ← AGORA É A URL COM TOKEN
            username: usuario.nome || 'Visitante',
            numero: usuario.numero || '',
            autoplay: true,
            fullscreen: true,
            isLive: streamType === 'LIVE' || streamType === 'RTMP_LIVE',
            site_nome: siteNome,
            stream_info: streamInfo,
            stream_type: streamType,
            dataHoraBrasil: dataHoraBrasil,
            ip: ip,
            user_agent: userAgent,
            is_mobile: isMobile,
            is_tablet: isTablet,
            stream_name: streamName
        });
        
    } catch (error) {
        console.error('Erro na rota de acesso direto:', error);
        return res.redirect('/streampro?error=erro_processamento');
    }
});


// =========================================================
// ENDPOINT PARA RENOVAR URL DA STREAM (CRÍTICO!)
// =========================================================
app.get('/api/refresh-stream/:id', async (req, res) => {
    try {
        const canalId = req.params.id;
        const arquivoJSON = path.join(__dirname, 'public', 'lista.json');
        const conteudo = await fs.readFile(arquivoJSON, 'utf-8');
        const canais = JSON.parse(conteudo);
        const canal = canais.find(c => c.id === canalId);
        
        if (!canal) return res.status(404).json({ error: 'Canal não encontrado' });
        
        let link = canal.link || canal.videoUrl;
        if (link.includes('.ts')) link = link.replace('.ts', '.m3u8');
        
        // Seguir redirects e retornar URL final
        const finalUrl = await seguirRedirects(link); // use sua função
        
        res.json({ url: finalUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Função auxiliar para seguir redirects (copie do seu código existente)
async function seguirRedirects(url) {
    // Use a mesma lógica que você já tem em seguirRedirectSeNecessario
    // mas adaptada para retornar Promise
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, true);
        xhr.timeout = 8000;
        xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
        xhr.setRequestHeader('Referer', 'http://54k.store/');
        
        xhr.onload = function() {
            let urlFinal = url;
            if (xhr.status >= 300 && xhr.status < 400) {
                const location = xhr.getResponseHeader('Location');
                if (location) {
                    urlFinal = location.startsWith('http') ? location : new URL(location, url).href;
                }
            }
            resolve(urlFinal);
        };
        
        xhr.onerror = xhr.ontimeout = function() {
            resolve(url); // fallback para URL original
        };
        
        xhr.send();
    });
}

// ===== FUNÇÃO PARA SEGUIR REDIRECTS (usando fetch) =====
async function seguirRedirects(url, maxRedirects = 5) {
    let currentUrl = url;
    for (let i = 0; i < maxRedirects; i++) {
        const response = await fetch(currentUrl, {
            method: 'HEAD',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'http://54k.store/'
            },
            redirect: 'manual' // importante: não seguir automaticamente
        });
        
        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get('location');
            if (!location) break;
            currentUrl = new URL(location, currentUrl).href;
            console.log(`🔄 Redirect ${i+1}: ${currentUrl}`);
        } else {
            // Não é redirect, retorna a URL atual
            break;
        }
    }
    return currentUrl;
}

// ===== DETECTAR TIPO DE STREAM =====
function detectStreamType(url) {
    const livePatterns = [
        /\.m3u8$/i, /\.m3u$/i, /\/live\//i, /\/stream\//i,
        /hls_live/i, /live\.m3u8/i, /:8080\//i, /:1935\//i, /hdx\.net\.ua/i
    ];
    if (url.includes('rtmp://') || url.includes('rtsp://')) return 'RTMP_LIVE';
    for (const pattern of livePatterns) if (pattern.test(url)) return 'LIVE';
    if (url.includes('.m3u8') || url.includes('.m3u')) return 'HLS';
    return 'VOD';
}

// ===== REGISTRO DE ACESSO (OPCIONAL) =====
// =========================================================
// ROTA PARA VERIFICAR SAÚDE DA LIVE
// =========================================================
app.get('/live-health', async (req, res) => {
    const { url } = req.query;
    
    if (!url) return res.json({ status: 'error', message: 'URL não fornecida' });
    
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(url, {
            method: 'HEAD',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'http://54k.store/'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeout);
        
        res.json({
            status: response.ok ? 'healthy' : 'unhealthy',
            statusCode: response.status,
            contentType: response.headers.get('content-type'),
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});
// Rota proxy para streams ao vivo (SEM EXTENSÃO)
app.get('/proxy-live', async (req, res) => {
    const streamUrl = req.query.url;
    if (!streamUrl) {
        return res.status(400).send('URL não fornecida');
    }

    console.log('🔄 Proxy live para:', streamUrl);

    try {
        // Faz a requisição para a stream real com headers de navegador
        const response = await fetch(streamUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'http://54k.store/',
                'Origin': 'http://54k.store',
                'Accept': '*/*'
            },
            redirect: 'follow' // Seguir redirects automaticamente
        });

        // Se não conseguiu obter a stream
        if (!response.ok) {
            return res.status(response.status).send('Erro ao obter stream');
        }

        // Headers importantes para o navegador
        res.set({
            'Content-Type': response.headers.get('content-type') || 'video/mp2t',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Range',
            'Access-Control-Expose-Headers': 'Content-Length, Content-Range',
            'Cache-Control': 'no-cache'
        });

        // Se a stream original suportar Range, repassar
        if (response.headers.get('accept-ranges')) {
            res.set('Accept-Ranges', 'bytes');
        }

        // Enviar a stream em tempo real
        response.body.pipe(res);

    } catch (error) {
        console.error('❌ Erro no proxy:', error);
        res.status(500).send('Erro interno ao carregar a stream');
    }
});
// Rota para o player embed (usada dentro do iframe)
app.get('/player/embed', (req, res) => {
    const videoUrl = req.query.url;
    const isLive = req.query.live === 'true';

    if (!videoUrl) {
        return res.status(400).send('URL não fornecida');
    }

    res.render('embed', { videoUrl, isLive });
});
// =========================================================
// PROXY ESPECIAL PARA LIVES (IMITA WEB VIDEO CASTER)
// =========================================================
app.get('/live-proxy/*', async (req, res) => {
    try {
        const encodedUrl = req.params[0];
        const targetUrl = decodeURIComponent(encodedUrl);
        
        console.log('🔄 Live Proxy - URL alvo:', targetUrl);
        
        // Headers que imitam o Web Video Caster
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': '*/*',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
            'Referer': 'https://weblivecast.com/',
            'Origin': 'https://weblivecast.com',
            'Connection': 'keep-alive',
            'Range': 'bytes=0-'
        };
        
        // Se for uma requisição de manifesto HLS, adicionar headers específicos
        if (targetUrl.includes('.m3u8') || targetUrl.match(/\/\d+$/)) {
            headers['Accept'] = 'application/vnd.apple.mpegurl, application/x-mpegurl, */*';
        }
        
        // Fazer a requisição para o servidor de origem
        const response = await fetch(targetUrl, {
            method: req.method,
            headers: headers,
            redirect: 'follow'
        });
        
        console.log('📥 Resposta do servidor:', response.status);
        console.log('📍 URL final:', response.url);
        
        // Copiar headers relevantes
        const contentType = response.headers.get('content-type');
        if (contentType) {
            res.setHeader('Content-Type', contentType);
        }
        
        const contentLength = response.headers.get('content-length');
        if (contentLength) {
            res.setHeader('Content-Length', contentLength);
        }
        
        // Headers CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        
        // Se for uma requisição OPTIONS, retornar apenas headers
        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        
        // Enviar o corpo da resposta
        const buffer = await response.arrayBuffer();
        res.send(Buffer.from(buffer));
        
    } catch (error) {
        console.error('❌ Erro no live-proxy:', error);
        res.status(500).send('Erro no proxy da live');
    }
});
// ===== ROTAS DO CHAT GLOBAL =====


// Buscar mensagens (com paginação)
// Buscar mensagens (com paginação) - VERSÃO CORRIGIDA




// Usuários ativos agora
app.get('/api/chat/ativos', (req, res) => {
    const ativos = lerJSON(ARQUIVO_USUARIOS_ATIVOS);
    const agora = Date.now();
    const limite = 5 * 60 * 1000; // 5 minutos
    
    // Remove usuários inativos
    const ativosAtualizados = {};
    let contador = 0;
    
    Object.entries(ativos).forEach(([id, usuario]) => {
        if (agora - usuario.ultimoPing < limite) {
            ativosAtualizados[id] = usuario;
            contador++;
        }
    });
    
    // Salva a lista limpa
    salvarJSON(ARQUIVO_USUARIOS_ATIVOS, ativosAtualizados);
    
    res.json({
        total: contador,
        usuarios: Object.values(ativosAtualizados).map(u => ({
            nome: u.nome,
            avatar: u.avatar,
            cor: u.cor,
            nivel: u.nivel
        }))
    });
});


// Enviar reação (like, risada, etc)
app.post('/api/chat/reagir', (req, res) => {
    const { userId, reacao, canalId } = req.body;
    
    if (!userId || !reacao) {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }
    
    const reacoes = lerJSON(ARQUIVO_REACOES_LIVE);
    const perfis = lerJSON(ARQUIVO_PERFIS_USUARIOS);
    const usuario = perfis[userId] || { nome: 'Alguém' };
    
    const novaReacao = {
        id: Date.now(),
        userId: userId,
        usuario: usuario.nome,
        reacao: reacao,
        timestamp: Date.now(),
        canalId: canalId
    };
    
    reacoes.push(novaReacao);
    
    // Mantém apenas últimas 50 reações
    if (reacoes.length > 50) {
        reacoes.splice(0, reacoes.length - 50);
    }
    
    salvarJSON(ARQUIVO_REACOES_LIVE, reacoes);
    
    res.json({ sucesso: true });
});

// Buscar reações recentes
app.get('/api/chat/reacoes', (req, res) => {
    const reacoes = lerJSON(ARQUIVO_REACOES_LIVE);
    res.json(reacoes);
});

// Banir usuário (apenas moderadores)
app.post('/api/chat/banir', (req, res) => {
    const { userId, moderadorId, motivo } = req.body;
    
    // Verifica se quem está banindo é moderador
    const perfis = lerJSON(ARQUIVO_PERFIS_USUARIOS);
    const moderador = perfis[moderadorId];
    
    if (!moderador || !moderador.isModerador) {
        return res.status(403).json({ erro: 'Sem permissão' });
    }
    
    const banidos = lerJSON(ARQUIVO_BANIMENTOS);
    if (!banidos.includes(userId)) {
        banidos.push(userId);
        salvarJSON(ARQUIVO_BANIMENTOS, banidos);
    }
    
    // Remove das mensagens recentes
    const mensagens = lerJSON(ARQUIVO_MENSAGENS_LIVE);
    const mensagensFiltradas = mensagens.filter(m => m.userId !== userId);
    salvarJSON(ARQUIVO_MENSAGENS_LIVE, mensagensFiltradas);
    
    res.json({ sucesso: true });
});

// Funções auxiliares
function gerarIdUnico() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}




// =========================================================
// ROTA DO PAINEL DE ESTATÍSTICAS (ACESSO RESTRITO)
// =========================================================
// =========================================================
// ROTA DO PAINEL DE ESTATÍSTICAS - VERSÃO CINEMATOGRÁFICA
// =========================================================
app.get('/admin/dashboard', async (req, res) => {
    try {
        const arquivoUserJSON = path.join(__dirname, 'public', 'user_data.json');
        const fs = require('fs').promises;
        const fsSync = require('fs');
        
        // Template de login elegante
        const loginHtml = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CineStats • Acesso Restrito</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: #0A0C0F;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                
                /* Background animado */
                .background {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
                    filter: blur(100px);
                    animation: pulse 8s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
                
                /* Partículas */
                .particles {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: moveParticles 20s linear infinite;
                }
                
                @keyframes moveParticles {
                    0% { transform: translateY(0) rotate(0deg); }
                    100% { transform: translateY(-50px) rotate(5deg); }
                }
                
                .login-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 420px;
                    margin: 20px;
                }
                
                .login-card {
                    background: rgba(20, 22, 27, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 32px;
                    padding: 40px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    animation: slideUp 0.6s ease-out;
                }
                
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .logo {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .logo-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #667EEA, #764BA2);
                    border-radius: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    font-size: 36px;
                    animation: float 3s ease-in-out infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .logo h1 {
                    color: white;
                    font-size: 28px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    margin-bottom: 8px;
                }
                
                .logo p {
                    color: rgba(255,255,255,0.5);
                    font-size: 14px;
                }
                
                .input-group {
                    margin-bottom: 20px;
                }
                
                .input-group label {
                    display: block;
                    color: rgba(255,255,255,0.7);
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 8px;
                }
                
                .input-wrapper {
                    position: relative;
                }
                
                .input-wrapper input {
                    width: 100%;
                    padding: 16px 20px;
                    background: rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 16px;
                    color: white;
                    font-size: 16px;
                    transition: all 0.3s;
                }
                
                .input-wrapper input:focus {
                    outline: none;
                    border-color: #667EEA;
                    background: rgba(0,0,0,0.5);
                    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
                }
                
                .input-wrapper .eye-icon {
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255,255,255,0.4);
                    cursor: pointer;
                    transition: color 0.3s;
                }
                
                .input-wrapper .eye-icon:hover {
                    color: white;
                }
                
                .login-btn {
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(135deg, #667EEA, #764BA2);
                    border: none;
                    border-radius: 16px;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    margin-top: 20px;
                    position: relative;
                    overflow: hidden;
                }
                
                .login-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                
                .login-btn:hover::before {
                    left: 100%;
                }
                
                .login-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 30px -10px rgba(102, 126, 234, 0.4);
                }
                
                .security-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: center;
                    margin-top: 30px;
                    color: rgba(255,255,255,0.3);
                    font-size: 12px;
                }
                
                .glitch-text {
                    animation: glitch 3s infinite;
                }
                
                @keyframes glitch {
                    0%, 100% { transform: none; opacity: 1; }
                    7% { transform: skew(-0.5deg, -0.9deg); opacity: 0.75; }
                    10% { transform: none; opacity: 1; }
                }
                
                .error-message {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    border-radius: 12px;
                    padding: 12px;
                    color: #EF4444;
                    font-size: 14px;
                    margin-top: 20px;
                    display: none;
                    align-items: center;
                    gap: 8px;
                }
                
                .error-message.show {
                    display: flex;
                    animation: shake 0.5s;
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            </style>
        </head>
        <body>
            <div class="background"></div>
            <div class="particles"></div>
            
            <div class="login-container">
                <div class="login-card">
                    <div class="logo">
                        <div class="logo-icon">🎬</div>
                        <h1 class="glitch-text">CineStats</h1>
                        <p>Painel do Diretor</p>
                    </div>
                    
                    <form method="get" id="loginForm">
                        <div class="input-group">
                            <label>🔐 CHAVE DE ACESSO</label>
                            <div class="input-wrapper">
                                <input type="password" name="senha" id="senha" placeholder="••••••••" autofocus>
                                <span class="eye-icon" onclick="togglePassword()">👁️</span>
                            </div>
                        </div>
                        
                        <button type="submit" class="login-btn">
                            ENTRAR NO DASHBOARD
                        </button>
                        
                        <div class="error-message" id="errorMessage">
                            ⚠️ Chave de acesso incorreta
                        </div>
                    </form>
                    
                    <div class="security-badge">
                        <span>🔒</span>
                        <span>Conexão segura • Acesso restrito</span>
                    </div>
                </div>
            </div>
            
            <script>
                function togglePassword() {
                    const input = document.getElementById('senha');
                    input.type = input.type === 'password' ? 'text' : 'password';
                }
                
                // Verificar se houve erro
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('erro') === '1') {
                    document.getElementById('errorMessage').classList.add('show');
                    setTimeout(() => {
                        document.getElementById('errorMessage').classList.remove('show');
                    }, 3000);
                }
                
                // Animação de digitação
                const input = document.getElementById('senha');
                input.addEventListener('keyup', function() {
                    this.style.borderColor = '#667EEA';
                });
            </script>
        </body>
        </html>
        `;
        
        // Verificar senha (você pode mudar a senha)
        const SENHA_CORRETA = 'gk$'; // Mude para sua senha
        const senhaDigitada = req.query.senha;
        
        if (!senhaDigitada) {
            return res.send(loginHtml);
        }
        
        if (senhaDigitada !== SENHA_CORRETA) {
            return res.redirect('/admin/dashboard?erro=1');
        }
        
        // Verificar se o arquivo existe
        if (!fsSync.existsSync(arquivoUserJSON)) {
            return res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>CineStats • Sem Dados</title>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
                    <style>
                        body {
                            font-family: 'Inter', sans-serif;
                            background: #0A0C0F;
                            color: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .message {
                            text-align: center;
                            background: rgba(255,255,255,0.05);
                            padding: 60px;
                            border-radius: 30px;
                            backdrop-filter: blur(10px);
                            animation: fadeIn 0.6s;
                        }
                        .emoji {
                            font-size: 80px;
                            margin-bottom: 20px;
                            animation: bounce 2s infinite;
                        }
                        @keyframes bounce {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-20px); }
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: scale(0.9); }
                            to { opacity: 1; transform: scale(1); }
                        }
                        h1 { font-size: 32px; margin-bottom: 10px; background: linear-gradient(135deg, #667EEA, #764BA2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                        p { color: rgba(255,255,255,0.6); font-size: 18px; }
                    </style>
                </head>
                <body>
                    <div class="message">
                        <div class="emoji">🎬</div>
                        <h1>Ainda não há dados</h1>
                        <p>As primeiras visualizações aparecerão aqui</p>
                    </div>
                </body>
                </html>
            `);
        }
        
        // Ler dados
        const dados = JSON.parse(await fs.readFile(arquivoUserJSON, 'utf-8'));
        
        // Preparar dados para os gráficos
        const usuariosAtivos = Object.keys(dados.usuarios || {}).length;
        const totalViews = dados.estatisticas?.totalVisualizacoes || 0;
        
        // Dados para gráficos
        const canaisPopulares = dados.estatisticas?.canaisPopulares || {};
        const viewsPorDia = dados.estatisticas?.visualizacoesPorDia || {};
        const viewsPorHora = dados.estatisticas?.visualizacoesPorHora || {};
        
        res.render('cine', {
            dados: dados,
            usuariosAtivos: usuariosAtivos,
            totalViews: totalViews,
            canaisPopulares: JSON.stringify(canaisPopulares),
            viewsPorDia: JSON.stringify(viewsPorDia),
            viewsPorHora: JSON.stringify(viewsPorHora)
        });
        
    } catch (error) {
        console.error('❌ Erro no dashboard:', error);
        res.status(500).send(`<h1>Erro: ${error.message}</h1>`);
    }
});





// API para gerenciar favoritos
app.post('/api/favorites/toggle', async (req, res) => {
    try {
        const { canalId } = req.body;
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
        }
        
        const userData = await loadUserData();
        
        if (!userData.favorites[userId]) {
            userData.favorites[userId] = [];
        }
        
        const favorites = userData.favorites[userId];
        const index = favorites.indexOf(canalId);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(canalId);
        }
        
        await saveUserData(userData);
        
        res.json({ 
            success: true, 
            isFavorite: index === -1,
            favoritesCount: favorites.length
        });
        
    } catch (error) {
        console.error('Erro ao alternar favoritos:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// API para gerenciar "Assistir Mais Tarde"
app.post('/api/watchlater/toggle', async (req, res) => {
    try {
        const { canalId } = req.body;
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
        }
        
        const userData = await loadUserData();
        
        if (!userData.watchLater[userId]) {
            userData.watchLater[userId] = [];
        }
        
        const watchLater = userData.watchLater[userId];
        const index = watchLater.indexOf(canalId);
        
        if (index > -1) {
            watchLater.splice(index, 1);
        } else {
            watchLater.push(canalId);
        }
        
        await saveUserData(userData);
        
        res.json({ 
            success: true, 
            isWatchLater: index === -1,
            watchLaterCount: watchLater.length
        });
        
    } catch (error) {
        console.error('Erro ao alternar assistir mais tarde:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});
// API para buscar canais "Assistir Mais Tarde"
app.get('/api/watchlater/list', async (req, res) => {
    try {
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
        }
        
        const userData = await loadUserData();
        const watchLater = userData.watchLater[userId] || [];
        
        // Buscar detalhes dos canais
        const arquivoM3U = path.join(__dirname, 'public', 'lista.m3u');
        const watchLaterDetalhados = [];
        
        if (fs.existsSync(arquivoM3U) && watchLater.length > 0) {
            const conteudo = await fs.readFile(arquivoM3U, 'utf-8');
            const linhas = conteudo.split('\n');
            
            for (let i = 0; i < linhas.length; i++) {
                if (linhas[i].startsWith('#EXTINF')) {
                    const tvgNameMatch = linhas[i].match(/tvg-name="([^"]*)"/i);
                    const groupMatch = linhas[i].match(/group-title="([^"]+)"/i);
                    const logoMatch = linhas[i].match(/tvg-logo="([^"]+)"/i);
                    
                    const nome = tvgNameMatch ? tvgNameMatch[1].trim() : 
                                  linhas[i].match(/,(.+)$/) ? linhas[i].match(/,(.+)$/)[1].trim() : 'Sem título';
                    
                    const categoria = groupMatch ? groupMatch[1] : 'Geral';
                    const logo = logoMatch ? logoMatch[1] : '/default-logo.png';
                    const link = linhas[i + 1]?.trim() || '';
                    
                    const id = Buffer.from(nome + link).toString('base64').substring(0, 20);
                    
                    if (watchLater.includes(id)) {
                        const progressKey = `${userId}_${id}`;
                        const progress = userData.watchingProgress?.[progressKey] || 0;
                        
                        watchLaterDetalhados.push({
                            id: id,
                            nome: nome,
                            categoria: categoria,
                            logo: logo,
                            link: link,
                            progress: progress
                        });
                    }
                    i++;
                }
            }
        }
        
        res.json({ success: true, watchLater: watchLaterDetalhados });
        
    } catch (error) {
        console.error('Erro ao listar assistir mais tarde:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});
// API para salvar progresso
// API para salvar progresso - VERSÃO CORRIGIDA
app.post('/api/progress/save', async (req, res) => {
    try {
        const { canalId, currentTime, duration } = req.body;
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId || !canalId) {
            return res.status(400).json({ 
                success: false, 
                message: 'Dados inválidos',
                received: { userId, canalId, currentTime, duration }
            });
        }
        
        console.log(`💾 Salvando progresso:`, {
            userId,
            canalId,
            currentTime: `${currentTime}s`,
            duration: duration ? `${duration}s` : 'desconhecida'
        });
        
        const userData = await loadUserData();
        const progressKey = `${userId}_${canalId}`;
        
        // Garantir que os objetos existam
        if (!userData.watchingProgress) userData.watchingProgress = {};
        if (!userData.watchHistory) userData.watchHistory = {};
        if (!userData.watchHistory[userId]) userData.watchHistory[userId] = [];
        if (!userData.userStats) userData.userStats = {};
        if (!userData.userStats[userId]) {
            userData.userStats[userId] = {
                totalWatchTime: 0,
                channelsWatched: [],
                lastWatched: new Date().toISOString()
            };
        }
        
        // Salvar tempo atual em segundos (float)
        const timeToSave = parseFloat(currentTime) || 0;
        userData.watchingProgress[progressKey] = timeToSave;
        
        // Criar entrada de histórico
        const historyEntry = {
            canalId: canalId,
            timestamp: new Date().toISOString(),
            progress: timeToSave,
            duration: duration ? parseFloat(duration) : null,
            action: 'watch'
        };
        
        // Adicionar ao histórico (máximo 100 itens)
        userData.watchHistory[userId].unshift(historyEntry);
        if (userData.watchHistory[userId].length > 100) {
            userData.watchHistory[userId] = userData.watchHistory[userId].slice(0, 100);
        }
        
        // Atualizar estatísticas
        // Incrementar tempo assistido (em segundos)
        const watchIncrement = 1; // 1 segundo por salvamento
        userData.userStats[userId].totalWatchTime = 
            (userData.userStats[userId].totalWatchTime || 0) + watchIncrement;
        
        // Adicionar canal à lista de assistidos (evitar duplicados)
        if (!userData.userStats[userId].channelsWatched.includes(canalId)) {
            userData.userStats[userId].channelsWatched.push(canalId);
        }
        
        userData.userStats[userId].lastWatched = new Date().toISOString();
        
        await saveUserData(userData);
        
        console.log(`✅ Progresso salvo com sucesso: ${timeToSave}s`);
        
        res.json({ 
            success: true, 
            savedTime: timeToSave,
            message: 'Progresso salvo com sucesso'
        });
        
    } catch (error) {
        console.error('❌ Erro ao salvar progresso:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro interno ao salvar progresso',
            error: error.message 
        });
    }
});

// API para buscar canais favoritos
app.get('/api/favorites/list', async (req, res) => {
    try {
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
        }
        
        const userData = await loadUserData();
        const favorites = userData.favorites[userId] || [];
        
        // Buscar detalhes dos canais favoritos
        const arquivoM3U = path.join(__dirname, 'public', 'lista.m3u');
        const favoritosDetalhados = [];
        
        if (fs.existsSync(arquivoM3U) && favorites.length > 0) {
            const conteudo = await fs.readFile(arquivoM3U, 'utf-8');
            const linhas = conteudo.split('\n');
            
            for (let i = 0; i < linhas.length; i++) {
                if (linhas[i].startsWith('#EXTINF')) {
                    const tvgNameMatch = linhas[i].match(/tvg-name="([^"]*)"/i);
                    const groupMatch = linhas[i].match(/group-title="([^"]+)"/i);
                    const logoMatch = linhas[i].match(/tvg-logo="([^"]+)"/i);
                    
                    const nome = tvgNameMatch ? tvgNameMatch[1].trim() : 
                                  linhas[i].match(/,(.+)$/) ? linhas[i].match(/,(.+)$/)[1].trim() : 'Sem título';
                    
                    const categoria = groupMatch ? groupMatch[1] : 'Geral';
                    const logo = logoMatch ? logoMatch[1] : '/default-logo.png';
                    const link = linhas[i + 1]?.trim() || '';
                    
                    const id = Buffer.from(nome + link).toString('base64').substring(0, 20);
                    
                    if (favorites.includes(id)) {
                        const progressKey = `${userId}_${id}`;
                        const progress = userData.watchingProgress?.[progressKey] || 0;
                        
                        favoritosDetalhados.push({
                            id: id,
                            nome: nome,
                            categoria: categoria,
                            logo: logo,
                            link: link,
                            progress: progress
                        });
                    }
                    i++;
                }
            }
        }
        
        res.json({ success: true, favorites: favoritosDetalhados });
        
    } catch (error) {
        console.error('Erro ao listar favoritos:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// API para buscar histórico
app.get('/api/history/list', async (req, res) => {
    try {
        const usuario = req.session.user || {};
        const userId = usuario.numero || req.ip;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
        }
        
        const userData = await loadUserData();
        const history = userData.watchHistory[userId] || [];
        
        res.json({ success: true, history: history.slice(0, 20) });
        
    } catch (error) {
        console.error('Erro ao listar histórico:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// API para ranking de usuários
app.get('/api/ranking', async (req, res) => {
    try {
        const userData = await loadUserData();
        const ranking = await getTopUsers(userData.userStats);
        
        res.json({ success: true, ranking: ranking });
        
    } catch (error) {
        console.error('Erro ao buscar ranking:', error);
        res.status(500).json({ success: false, message: 'Erro interno' });
    }
});

// Função para gerar ranking
async function getTopUsers(userStats) {
    const ranking = [];
    
    for (const [userId, stats] of Object.entries(userStats || {})) {
        ranking.push({
            userId: userId,
            nome: userId.includes('@') ? userId.split('@')[0] : userId,
            totalWatchTime: stats.totalWatchTime || 0,
            channelsWatched: Array.isArray(stats.channelsWatched) ? 
                stats.channelsWatched.length : 
                (stats.channelsWatched?.size || 0),
            lastWatched: stats.lastWatched
        });
    }
    
    ranking.sort((a, b) => b.totalWatchTime - a.totalWatchTime);
    
    return ranking.map((user, index) => ({
        ...user,
        rank: index + 1,
        watchTimeFormatted: formatWatchTime(user.totalWatchTime)
    }));
}



// Rota para API de busca (AJAX)
app.get('/api/iptv/search', async (req, res) => {
    try {
        const query = req.query.q || '';
        const limit = parseInt(req.query.limit) || 10;
        
        if (!query.trim()) {
            return res.json({ results: [] });
        }
        
        const arquivoM3U = path.join(__dirname, 'public', 'lista.m3u');
        const resultados = [];
        
        if (fs.existsSync(arquivoM3U)) {
            const conteudo = fs.readFileSync(arquivoM3U, 'utf-8');
            const linhas = conteudo.split('\n');
            
            for (let i = 0; i < linhas.length; i++) {
                if (linhas[i].startsWith('#EXTINF')) {
                    const tvgNameMatch = linhas[i].match(/tvg-name="([^"]*)"/i);
                    const groupMatch = linhas[i].match(/group-title="([^"]+)"/i);
                    const logoMatch = linhas[i].match(/tvg-logo="([^"]+)"/i);
                    
                    const nome = tvgNameMatch ? tvgNameMatch[1].trim() : 
                                  linhas[i].match(/,(.+)$/) ? linhas[i].match(/,(.+)$/)[1].trim() : 'Sem título';
                    
                    const categoria = groupMatch ? groupMatch[1] : 'Geral';
                    const logo = logoMatch ? logoMatch[1] : '';
                    const link = linhas[i + 1]?.trim() || '';
                    
                    // Verificar se corresponde à busca
                    if (nome.toLowerCase().includes(query.toLowerCase()) || 
                        categoria.toLowerCase().includes(query.toLowerCase())) {
                        
                        const id = Buffer.from(nome + link).toString('base64').substring(0, 20);
                        
                        resultados.push({
                            id: id,
                            nome: nome,
                            categoria: categoria,
                            logo: logo,
                            link: link
                        });
                        
                        if (resultados.length >= limit) break;
                    }
                    i++;
                }
            }
        }
        
        res.json({ results: resultados });
        
    } catch (error) {
        console.error('Erro na API de busca:', error);
        res.status(500).json({ error: 'Erro na busca' });
    }
});
app.post("/assistir", async (req, res) => {
  const { query, userId, User } = req.body;

  // 🔒 validações
  if (
    !userId ||
    (userId !==
      "https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x" &&
      userId !== "site")
  ) {
    return res.status(400).json({
      message:
        "⚠️  ID do usuário errado, use https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x  obrigatórios.",
    });
  }
  if (!query)
    return res
      .status(400)
      .json({ message: `⚠️ *Erro!* Você não informou o nome do filme/canal.` });
  if (!User)
    return res.status(400).json({
      message: `*A Api Atualizou* \n> Entre em contato: +55 21 98904-7220`,
    });

  // 📍 pegar IP
  const userIP =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.ip;

  // 🕒 horário de Brasília
  const dataHora = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  // 📑 salvar log
  const salvarLog = () => {
    const novoLog = { query, userId, User, horario: dataHora };

    let logs = {};
    if (fs.existsSync(logPath2)) {
      logs = JSON.parse(fs.readFileSync(logPath2, "utf8"));
    }

    if (!logs[userIP]) logs[userIP] = [];
    logs[userIP].push(novoLog);

    fs.writeFileSync(logPath2, JSON.stringify(logs, null, 2), "utf8");
    console.log(`📄 Log salvo para IP ${userIP}:`, novoLog);
  };

  salvarLog();

  // 🚫 anti-flood
  if (!global.activeUsers) global.activeUsers = new Set();
  if (global.activeUsers.has(User)) {
    return res.status(429).json({
      message:
        `⏳ *Calma, amigo!* \n> Espere um pouco antes de pedir outro filme/canal.` +
        "\n`https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x/2126`",
    });
  }

  global.activeUsers.add(User);

  const tempoInicio = Date.now();

  try {
    // 📂 verificar lista.m3u
    const arquivoM3U = path.join(__dirname, "public", "lista.m3u");
    if (!fs.existsSync(arquivoM3U)) {
      return res
        .status(500)
        .json({ erro: "❌ Lista de canais indisponível." });
    }

    const termo = query.toLowerCase();
    const palavrasTermo = termo.split(/\s+/).filter(Boolean);

    const linhas = fs.readFileSync(arquivoM3U, "utf-8").split("\n");
    const resultados = [];

    for (let i = 0; i < linhas.length; i++) {
      if (linhas[i].startsWith("#EXTINF")) {
        // ================================
        // 🆕 PEGAR O TÍTULO REAL (tvg-name)
        // ================================
        const tvgMatch = linhas[i].match(/tvg-name="([^"]*)"/i);
        const virgulaMatch = linhas[i].match(/,(.+)$/);
        let nome = "Sem título";

        if (tvgMatch && tvgMatch[1].trim()) {
          nome = tvgMatch[1].trim();
        } else if (virgulaMatch) {
          nome = virgulaMatch[1].trim();
        }

        // 📌 pegar categoria
        const grupoMatch = linhas[i].match(/group-title="([^"]+)"/i);
        const grupo = grupoMatch ? grupoMatch[1] : "Sem categoria";

        const link = linhas[i + 1]?.trim() || "";

        // apenas links válidos
        const linkLower = link.toLowerCase();
        if (
          !linkLower.endsWith(".mp4") &&
          !linkLower.endsWith(".m3u8") &&
          !linkLower.includes("/hls/")
        )
          continue;

        const nomeLower = nome.toLowerCase();
        const grupoLower = grupo.toLowerCase();

        // busca inteligente
        const corresponde = palavrasTermo.every(
          (p) => nomeLower.includes(p) || grupoLower.includes(p)
        );

        if (corresponde) {
          resultados.push({ nome, grupo, link });
        }
        i++;
      }
    }

    if (!resultados.length) {
      return res.json({
        mensagem: `🔍 Nenhuma correspondência para: ${query}`,
        resultados: [],
      });
    }

    // prioridade
    function prioridadeCategoria(grupo) {
      grupo = grupo.toLowerCase();
      if (grupo.includes("filme") || grupo.includes("movie")) return 0;
      if (
        grupo.includes("série") ||
        grupo.includes("serie") ||
        grupo.includes("series")
      )
        return 1;
      return 2;
    }

    function similaridade(termo, texto) {
      termo = termo.toLowerCase();
      texto = texto.toLowerCase();
      const palavras = termo.split(/\s+/).filter(Boolean);
      let acertos = 0;
      palavras.forEach((p) => {
        if (texto.includes(p)) acertos++;
      });
      return (acertos / palavras.length) * 100;
    }

    resultados.sort((a, b) => {
      const p = prioridadeCategoria(a.grupo) - prioridadeCategoria(b.grupo);
      if (p !== 0) return p;
      const simA = similaridade(termo, a.nome + " " + a.grupo);
      const simB = similaridade(termo, b.nome + " " + b.grupo);
      return simB - simA;
    });

    const top = resultados.slice(0, 10);

    const listaFinal = await Promise.all(
      top.map(async (r, i) => ({
        posicao: i + 1,
        nome: r.nome,
        categoria: r.grupo,
        assistir: await encurtarTinyURL('https://fabibot.vercel.app/streampro/' + r.link),
      }))
    );

    const tempoFinal = ((Date.now() - tempoInicio) / 1000).toFixed(2);

    return res.json({
      termoPesquisado: query,
      totalEncontrado: resultados.length,
      exibindo: listaFinal.length,
      tempo: tempoFinal,
      resultados: listaFinal,
    });
  } catch (err) {
    console.error("❌ Erro geral no /assistir:", err);
    return res
      .status(500)
      .json({ erro: `💥 Opa! Algo deu errado... ${err.message}` });
  } finally {
    global.activeUsers.delete(User);
  }
});





// garante que a pasta exista
const audioDir = path.join(__dirname, 'public/audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

app.use('/audio', express.static(audioDir));

/**
 * 🔴 ROTA PARA O BOT
 * apenas dispara a geração
 */
app.post('/tts', (req, res) => {
  const { texto } = req.body;
  if (!texto) return res.status(400).json({ error: 'Texto vazio' });

  // salva o texto temporariamente
  fs.writeFileSync('temp.txt', texto);
  res.json({ ok: true });
});

/**
 * 🟢 ROTA QUE O NAVEGADOR ABRE
 * é AQUI que o Puter roda
 */
app.get('/executar', (req, res) => {
  if (!fs.existsSync('temp.txt')) {
    return res.send('Sem texto');
  }
  const texto = fs.readFileSync('temp.txt', 'utf8');
  res.render('tts', { texto });
});

/**
 * recebe o mp3 do navegador
 */
app.post('/salvar', upload.single('audio'), (req, res) => {
  const destino = path.join(audioDir, 'voz.mp3');
  fs.renameSync(req.file.path, destino);
  res.json({ ok: true });
});

// Sua função existente
async function verificarBufferAdulto2(buffer) {
    const apis = [
                          { user: '1591399076', secret: 'gVaoBfTmhhatwh6CJtwNYnCFkbdPhASP' },
                    { user: '1712365750', secret: '8aZVA8ZgAHjhxggqM5mU4euWz9tpVDeW' },
              { user: '1973164542', secret: 'UtWmKvfCXpnBZuCDESdtY2hdRmkMtSfE' },
        { user: '231832543', secret: 'JfTMxGAADicXTj8fTXZmDyzzYyhXADxh' },
        { user: '584508727', secret: 'zPrUULwZuiyPQG5xnQE8Mpi8TY8meGLc' },
        { user: '376991941', secret: 'stZ35EDLWAeZbFY69ouorUavNwe9cHW7' },
        { user: '43691883', secret: 'Af4MgZf4WEP8sNsGM8e6vYo46rTGy3es' },
        { user: '1859642760', secret: 'h5r6bcrtFKtGcG8U5FHPm3NJknyYDHcj' },
        { user: '553241102', secret: 'jRj3hwq5GgoK6EQ7nJfu8FqR8fQnRPmh' },
        { user: '1549208062', secret: 'Vrf3bp9k6WnbCESR9WCtEdCJL4nPyi9E' },
        { user: '1570928121', secret: 'Crdr3WqkSiVFZWfSimqvWYwh3GohT6UD' },
        { user: '977158165', secret: 'qVYagYLPSJ9MftpJ7rqJMjxWsRaHpCzn' },
        { user: '28882277', secret: 'LbbDDLiBzAJ2aq9uNpVyBTSWubd9Y32B' },
        { user: '120700170', secret: 'SuudnFso7dBUb3RBo4NeL4XEx5U3ZsVD' },
        { user: '363037167', secret: 'qCXdUeVFgJECybiQqzZLiVXa5jc2rAYW' },
        { user: '999720725', secret: 'SvZYhzvmXvLKMGpsFZyGfwGD7E9dyKRS' }
    ];

    for (let i = 0; i < apis.length; i++) {
        const { user, secret } = apis[i];
        try {
            console.log(`Verificando com API ${i + 1}`);
            if (buffer.length === 0) throw new Error('O buffer da imagem está vazio!');

            const form = new FormData();
            form.append('media', buffer, { filename: 'imagem.jpg' });
            form.append('models', 'nudity-2.1,gambling');
            form.append('api_user', user);
            form.append('api_secret', secret);

            const response = await axios.post('https://api.sightengine.com/1.0/check.json', form, {
                headers: form.getHeaders(),
                maxContentLength: Infinity,
                maxBodyLength: Infinity
            });

            const data = response.data.nudity;
            const data2 = response.data.gambling.prob;

            const sexualActivity = data.sexual_activity || 0;
            const sexualDisplay = data.sexual_display || 0;
            const erotica = data.erotica || 0;

            const adulto = (sexualActivity >= 0.98 || sexualDisplay >= 0.98 || erotica >= 0.98);
            const jogoaz = data2 >= 0.02;

            return { adulto, sexualActivity, sexualDisplay, erotica, jogoaz };
        } catch (error) {
            console.error(`Erro com API ${i + 1}:`, error.response?.data || error.message);
        }
    }

    return { adulto: false, sexualActivity: 0, sexualDisplay: 0, erotica: 0, jogoaz: false };
}

// API para receber imagem

const usuariosPath = path.join(__dirname, 'public', 'apiantiporno.json');

// Funções para carregar e salvar dados JSON
function carregarUsuarios() {
  if (!fs.existsSync(usuariosPath)) fs.writeFileSync(usuariosPath, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));
}

function salvarUsuarios(dados) {
  fs.writeFileSync(usuariosPath, JSON.stringify(dados, null, 2));
}
/*
app.post('/verificar-midia', upload.single('midia'), async (req, res) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',').shift() ||
    req.socket?.remoteAddress;

  try {
    const { isAntiPorn, isAntiNotas, userId } = req.body;
    const buffer = req.file?.buffer;

  if (!buffer || !userId || userId !== "https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x") {
    return res.status(400).json({ erro: '⚠️  ID do usuário errado, use https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x  obrigatórios.' });
  }

    // Carrega usuários e atualiza uso e IP
    const usuarios = carregarUsuarios();
    if (!usuarios[userId]) {
      usuarios[userId] = {
        id: userId,
        usos: 0,
        ultimoUso: new Date().toISOString(),
        ips: []
      };
    }

    usuarios[userId].usos += 1;
    usuarios[userId].ultimoUso = new Date().toISOString();

    // Adiciona IP, evita duplicar IPs
    if (ip && !usuarios[userId].ips.includes(ip)) {
      usuarios[userId].ips.push(ip);
    }

    salvarUsuarios(usuarios);

    console.log(`🖼️ Analisando mídia enviada por ${userId} (IP: ${ip})...`);

    const resultado = await verificarBufferAdulto2(buffer);

    if (resultado.adulto && isAntiPorn === 'true') {
      return res.json({
        status: 'ban',
        motivo: 'Conteúdo adulto detectado!\n> API: https://whatsapp.com/channel/0029VatppnH4o7qSzKKm0X3x/250',
        detalhes: {
          sexualActivity: (resultado.sexualActivity * 100).toFixed(1) + '%',
          sexualDisplay: (resultado.sexualDisplay * 100).toFixed(1) + '%'
        }
      });
    }

    if (resultado.jogoaz && isAntiNotas === 'true') {
      return res.json({
        status: 'ban',
        motivo: 'Jogo de azar detectado!',
        detalhes: {
          probabilidade: (resultado.jogoaz * 100).toFixed(1) + '%'
        }
      });
    }

    return res.json({
      status: 'ok',
      mensagem: '✅ Mídia considerada segura.'
    });

  } catch (err) {
    console.error('Erro geral:', err.message);
    return res.status(500).json({ erro: '💥 Erro ao processar a mídia.' });
  }
});
*/
app.post('/top-musicas', (req, res) => {
  // Caminho para o arquivo JSON
  const filePath = path.join(__dirname, 'public', 'musicas.json');

  // Ler o arquivo JSON
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo.');
    }
    
    // Converter os dados do arquivo JSON para um objeto
    const musicas = JSON.parse(data);
    
    // Enviar os dados para o cliente
    res.json(musicas);
  });
});


/*
app.get('/docs', isAuthenticated, async (req, res) => {
    const usuario = req.session.user;

    if (!usuario) {
        return res.status(400).send('Usuário não encontrado na sessão.');
    }

    const gruposFilePath = path.join(__dirname, 'public', 'grupos.json');
    const grupoConfigFilePath = grupoConfigPath(usuario.grupo);

    try {
        // Verifica se o arquivo de configuração do grupo existe
        if (!fs.existsSync(grupoConfigFilePath)) {
            return res.status(404).send('Arquivo de configuração do grupo não encontrado.');
        }

        // Carrega configuração do grupo
        const grupoConfig = JSON.parse(fs.readFileSync(grupoConfigFilePath, 'utf8'));
        console.log('GrupoConfig carregado:', grupoConfig);

        // Garante que há pelo menos duas entradas de boas-vindas
        grupoConfig.wellcome = Array.isArray(grupoConfig.wellcome) ? grupoConfig.wellcome : [];
        while (grupoConfig.wellcome.length < 2) {
            grupoConfig.wellcome.push({ legendabv: "Sem legenda", legendasaiu: "Sem legenda" });
        }

        // Carrega lista de grupos
        if (!fs.existsSync(gruposFilePath)) {
            return res.status(404).send('Arquivo de grupos não encontrado.');
        }

        const grupos = JSON.parse(fs.readFileSync(gruposFilePath, 'utf8'));
        const grupoAtual = grupos.find(grupo => grupo.grupoID === usuario.grupo);
        const isAdmin = grupoAtual && Array.isArray(grupoAtual.administradores)
  ? grupoAtual.administradores.includes(usuario.numero)
  : false;

        if (!grupoAtual) {
            console.log('Grupo não encontrado nos registros.');
        }
        
        // ------- Carregar estatísticas do grupo -------

// Verifica se arquivo existe
// ------- Carregar estatísticas do grupo -------
const countMessagePath = path.join(__dirname, "public", "countmsg.json");

let estatisticaGrupo = null;
let estatisticaUsuario = null;
let ranking = [];
let posicaoUsuario = null;


        if (!fs.existsSync(countMessagePath)) {
            return res.status(404).send('Arquivo de grupos não encontrado.');
        }
    const dadosCount = JSON.parse(fs.readFileSync(countMessagePath, 'utf8'));

    // 1️⃣ Localiza o grupo correspondente
    const infoGrupo = dadosCount.find(grupo => grupo.groupId === usuario.grupo);

    if (infoGrupo) {

        // 2️⃣ Estatísticas gerais do grupo
        const diasGrupo = infoGrupo.stats || {};

        estatisticaGrupo = {
            totalDias: Object.keys(diasGrupo).length,
            dias: diasGrupo
        };

        // 3️⃣ Gerar ranking (aceita numbers ou stats)
        if (infoGrupo.numbers && Array.isArray(infoGrupo.numbers)) {
            ranking = infoGrupo.numbers.map(user => ({
                id: user.id,
                total: (user.messages || 0) + (user.cmd_messages || 0) + (user.figus || 0),
                mensagens: user.messages || 0,
                comandos: user.cmd_messages || 0,
                figurinhas: user.figus || 0
            }));
        } else if (infoGrupo.stats) {
            ranking = Object.entries(infoGrupo.stats).map(([id, stats]) => ({
                id,
                total: (stats.messages || 0) + (stats.cmd_messages || 0) + (stats.figus || 0),
                mensagens: stats.messages || 0,
                comandos: stats.cmd_messages || 0,
                figurinhas: stats.figus || 0
            }));
        }

        // Ordena do maior para o menor
        ranking.sort((a, b) => b.total - a.total);

        // Debug do ranking
        console.log("✅ Ranking gerado:\n", JSON.stringify(ranking, null, 2));

        // 4️⃣ Posição do usuário no ranking
        const indexPos = ranking.findIndex(r =>
            r.id === usuario.numero || r.id === `${usuario.numero}@lid`
        );
        posicaoUsuario = indexPos >= 0 ? indexPos + 1 : null;

        // 5️⃣ Estatísticas diárias do usuário
        if (Array.isArray(infoGrupo.numbers)) {
            const usuarioStats = infoGrupo.numbers.find(u =>
                u.id === usuario.numero || u.id === `${usuario.numero}@lid`
            );

            if (usuarioStats && usuarioStats.stats) {
                estatisticaUsuario = usuarioStats.stats;
            }
        }
    }


        const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 400;
        if (golds === null) {
            return res.status(404).send('Golds não encontrados.');
        }

        const globalRank = allglob(usuario.grupo, usuario.numero);
        if (globalRank === null) {
            return res.status(404).send('Não foi possível encontrar seu ranking global.');
        }

        // Carrega inventário do jogador
        const inventario = {
            peixe: getIkan(usuario.numero),
            galinha: getAyam(usuario.numero),
            coelho: getKelinci(usuario.numero),
            ovelha: getDomba(usuario.numero),
            vaca: getSapi(usuario.numero),
            elefante: getGajah(usuario.numero),
            ouro: getBesi(usuario.numero),
            diamante: getEmas(usuario.numero),
            esmeralda: getEmerald(usuario.numero),
            pocao: getPotion(usuario.numero),
            ak47: getAK47(usuario.numero),
            awm: getAWM(usuario.numero),
            pistola: getPISTOLA(usuario.numero),
            adaga: getADÁGA(usuario.numero),
            estamina: getDarah(usuario.numero)
        };

        // Renderiza a página com todos os dados
res.render('docs', {
    username: usuario.nome,
    numero: usuario.numero,
    grupo: usuario.grupo,
    id: usuario.id,
    golds,
    globalRank,
    isAdmin,

    // Estatísticas
    estatisticaGrupo,
    ranking,          // ✅ Adicionado
    posicaoUsuario,   // ✅ Adicionado
    estatisticaUsuario, // ✅ caso esteja usando também

    // Itens do inventário
    ...inventario,

    // Legendas de boas-vindas e despedida
    legendabv1: grupoConfig.wellcome[0]?.legendabv || "Sem legenda",
    legendasaiu1: grupoConfig.wellcome[0]?.legendasaiu || "Sem legenda",
    legendabv2: grupoConfig.wellcome[1]?.legendabv || "Sem legenda",
    legendasaiu2: grupoConfig.wellcome[1]?.legendasaiu || "Sem legenda",

    // Envia grupoConfig inteiro também
    grupoConfig
});

    } catch (error) {
        console.error('Erro ao processar o endpoint /docs:', error);
        res.status(500).send('Erro interno ao carregar os dados do grupo.');
    }
});*/



// ===== CONFIGURAÇÕES =====
const CONFIG = {
    audioEnabled: true,
    cooldownTime: 1 * 60 * 1000, // 1 minuto
    maxCacheSize: 100,
    voiceId: "PZIBrGsMjLyYasEz50bI",
    apiKeys: [
    "7f64b1038f31d1850fe45ec881101d5a0389a39ccd1e23b7f2f1d9a5fd386a13",
    '3791bb35dc224f455b0dec765188adb875dcd349938e4ac21bb55675a4c9b4aa',
    'sk_a4c062c5b8a373e4d8919acd7b87139676c6d33732b967b0',
    'sk_5c4f81cc16ef18acf20e23ea7f9abf1ba250e91d6e66e89a',
    "sk_be89784b60ee948a3a35b99a161e2b889f6c4ec266b0e775",
    'sk_f1dea15a74aeaefdf78ab1ed8e35fc61d4df677201c4175a',
    'sk_f2cdcb40b5525be787c33d47bea321cc058f67c14b78b496',
    'sk_ce376b4d1ed50c91d56f9badfa873291d0ab7eb6337b44b3', 'sk_39573a47ef125130aeb79d65a425c8641d430e2b7d973293', 'sk_978612d823eaa0fc997b0b2a60a1d54398717e349f8e02eb', 'sk_1cefaef5d88c6ecd3a5ed3619fad6eeb19ac62996576742c', 'sk_d82314c43f678579b3da5a9690db1c12892e28836b0de7f8', 'sk_dab9a29f2f4bdf9dec92da23191921b57991ef351f83d702',
    "sk_a4ed7e56db5d4b1e3fc64829a3223cd8d147162ed7057585",
    "sk_90581e084ace15c3b09a0463a54b0eeb36d66159cd26d3de",
    "sk_e56ddd9c4e96bf99e190111c421d2c53a85612f38eeb37c2",
    "sk_94d8f2ad3b924d15eb5eb20b1c11ce6314337fff7f79c7a5",
    "sk_886b06dcf22db39deca8f79b9715d005d707544bdf58a7d0",
    "sk_f745f3681f2bac7c0ab00baebb3478f184019824b24a1c54",
    "sk_5efffe9dc0c94396cc04dc05ce10f2b5c06e50101a8b6401",
    "sk_10bfa56b01ba86bc47c75c5edaa64e036dc2130c69fda412",
    "sk_5c70ee2b47819274af409e2263afe5d30f1361318b874c01",
    "sk_ac34585e4e28fa49b9528c1661d7e499956cc80936a64700",
    "sk_710a56bcb7201e845f8e9648a134f8da8bfc89aeab13ea50",
    "sk_f2bbe27c507ef506794de39c9a73ba910c21f94d9410a1d8",
    "sk_2ff8e6459e2bdfea0dccc41e6bc8c13e6f1e1811ea13335e",
    "sk_42168b351bb358834a5baf6d4b3c8c63045d5f2b12f194d2",
    "sk_24150a08d070f2f24c3f9a64387e8cb52ac45585c789fd7d",
    "sk_fce9a3fc033d21563df97a396f0d4553f3c2eb092cbcaa92"
  ]
}

// ===== ÁUDIOS FIXOS (do seu JSON) =====
const AUDIOS_FIXOS = {
    "removeu voc": "./audios/removeuvc.mp3",
    "parabens|niver": "./audios/feliz.mp3",
    "estou vivo|quase morri|não morri": "./audios/vivo.mp3",
    "Meu dog|meu dog|Meu cachorr|Meu Cachorr": "./audios/dog.m4a",
    "São paul|são paul|tricolor|Tricolor": "./audios/saopaulino.m4a",
    "Palmeir|palmeir|PALMEI|jdksksksj": "./audios/palmeirense.m4a",
    "Vasc|vasc|jdkskskn|jdksksksj": "./audios/vascaino.m4a",
    "Corinth|corint|Corint|corint": "./audios/corinthiano.m4a",
    "flameng|meng": `./audios/flamenguista.m4a`,
    "te desafio|desafiarr": "./audios/desafiar.mp3",
    "bot maluc|bot doid": "./audios/10Maluca.mp3",
    "rapazz|rapax": "./audios/rapaz.mp3",
    "sozinh|com ninguém": "./audios/sozinho.mp3",
    "resfriado|febre|gripe|tpm|dor de cabeça|problemas": "./audios/doenca.mp3",
    "8 segundos|sentada|rebol|meu beijo|peão": "./audios/nem8.mp3",
    "não conseguiu tirar sua tripulação do navio": "./audios/derrota.mp3",
    "🤭|😳|🫣|😶|😐|🫥": "./audios/semgraça.mp3",
    "dança|gatinho": "./audios/danca.wav",
    "ele gosta|ele goxta": "./audios/goxta.wav",
    "que isso|delícia|delixia": "./audios/calma.wav",
    "papelão|paguei mico": "./audios/papelao.wav",
    "cavalo|vacalo": "./audios/Cavalo.wav",
    "potência|potente": "./audios/potencia.wav",
    "uii|uuiii": "./audios/Ui.wav",
    "paree|pari": "./audios/pare.wav",
    "me coloco|me adicionou|me boto": "./audios/tuveio.mp3",
    "eu consegui|maneiro|conseguimos": "./audios/maneiro.mp3",
    "te matar|matarei|patético": "./audios/fim.mp3",
    "@5521997438263": "./audios/nfale.mp3",
    "se fodeu|xi fudeu": "./audios/ferrou.mp3",
    "ligar|oh baby|me atende": "./audios/atende1.mp3",
    "ratinh": "./audios/ratinho.mp3",
    "feliz natal": "./audios/dingobel.m4a",
    "comprei": "./audios/promocao.m4a",
    "namor|de amigo": "./audios/deamigo.mp3",
    "conselho|vou tentar|consigo": "./audios/conselho.m4a",
    "bolsonaro": "./audios/jairbolsonaro.mp3",
    "perdi|faz o l|lula": "./audios/fazoL.mp3",
    "sempre|nunca|já fiz": "./audios/verdade.mp3",
    "ele aguento|vou consegui": "./audios/ohomi.mp3",
    "rondônia|rondoniense": "./audios/rondoniense.m4a",
    "santista": "./audios/santista.m4a",
    "tocantinense|tocantins": "./audios/tocantinense.m4a",
    "paraib": "./audios/paraibano.m4a",
    "piaui": "./audios/piauiense.m4a",
    "sergi": "./audios/sergipano.m4a",
    "parana": "./audios/paranaense.m4a",
    "matogro": "./audios/matogrossense.m4a",
    "brasili": "./audios/brasiliense.m4a",
    "pauli": "./audios/paulista.m4a",
    "suli": "./audios/sulista.m4a",
    "pernamb": "./audios/pernambucano.m4a",
    "mineiro|mg|minas": "./audios/mineiro.m4a",
    "amazon": "./audios/amazoniense.m4a",
    "catari|santa catarina": "./audios/catarinense.m4a",
    "alago": "./audios/alagoano.m4a",
    "cear": "./audios/cearense.m4a",
    "goiano": "./audios/goiano.m4a",
    "acreano": "./audios/acreano.m4a",
    "bahi": "./audios/baiano.m4a",
    "carioca|rj|rio de janeiro": "./audios/carioca.m4a",
    "pau|pênis|piru": "./audios/fimose.mp3",
    "retardad|haha": "./audios/retardada.m4a",
    " gado": "./audios/gado.m4a",
    "sexo|sexu": "./audios/AraAra.mp3"
};

// ===== CACHE E ESTADO =====
let audioCache = [];
let cooldownUsers = {};
let isProcessing = false;






app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        audioEnabled: CONFIG.audioEnabled,
        cacheSize: audioCache.length,
        uptime: process.uptime()
    });
});

// Rota principal para processar mensagens
app.post('/api/process-message', async (req, res) => {
    if (!CONFIG.audioEnabled) {
        return res.status(423).json({ error: 'AudioBot está desativado' });
    }
    
    if (isProcessing) {
        return res.status(429).json({ error: 'Sistema ocupado, tente novamente' });
    }
    
    const { userId, username, message } = req.body;
    
    if (!message || !userId) {
        return res.status(400).json({ error: 'userId e message são obrigatórios' });
    }
    
    // Verificar cooldown
    if (checkCooldown(userId)) {
        return res.status(429).json({ 
            error: 'Aguarde o cooldown',
            retryAfter: Math.ceil((CONFIG.cooldownTime - (Date.now() - (cooldownUsers[userId] || 0))) / 1000)
        });
    }
    
    isProcessing = true;
    
    try {
        console.log(`📨 Processando mensagem de ${username}: "${message}"`);
        
        // 1. Verificar áudio fixo
        const fixedAudio = checkFixedAudios(message);
        if (fixedAudio) {
            updateCooldown(userId);
            isProcessing = false;
            return res.json({
                success: true,
                audioUrl: `/audios/${path.basename(fixedAudio)}`,
                type: 'fixed',
                message: 'Áudio fixo encontrado'
            });
        }
        
        // 2. Verificar cache
        const cachedAudio = checkAudioCache(message);
        if (cachedAudio) {
            updateCooldown(userId);
            isProcessing = false;
            return res.json({
                success: true,
                audioUrl: `/audiosgerados/${path.basename(cachedAudio)}`,
                type: 'cached',
                message: 'Áudio do cache encontrado'
            });
        }
        
        // 3. Gerar novo áudio com IA
        console.log('🤖 Gerando áudio com IA...');
        const generatedAudio = await generateAudioWithAI(message, username);
        
        if (generatedAudio) {
            // Adicionar ao cache
            addToCache(message, generatedAudio);
            updateCooldown(userId);
            
            isProcessing = false;
            return res.json({
                success: true,
                audioUrl: `/audiosgerados/${path.basename(generatedAudio)}`,
                type: 'generated',
                message: 'Áudio gerado com IA'
            });
        }
        
        // 4. Nenhum áudio encontrado
        isProcessing = false;
        return res.status(404).json({
            success: false,
            message: 'Nenhum áudio correspondente encontrado'
        });
        
    } catch (error) {
        console.error('❌ Erro ao processar mensagem:', error);
        isProcessing = false;
        return res.status(500).json({
            error: 'Erro interno do servidor',
            details: error.message
        });
    }
});

// Rota para listar áudios disponíveis
app.get('/api/audios', (req, res) => {
    try {
        const audioList = {
            fixed: Object.values(AUDIOS_FIXOS).map(p => path.basename(p)),
            generated: fs.readdirSync('./audiosgerados').filter(f => f.endsWith('.ogg')),
            total: Object.keys(AUDIOS_FIXOS).length + fs.readdirSync('./audiosgerados').length
        };
        
        res.json(audioList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para controle do bot
/*app.post('/api/control', (req, res) => {
    const { action, value } = req.body;
    
    switch (action) {
        case 'toggle':
            CONFIG.audioEnabled = value !== undefined ? value : !CONFIG.audioEnabled;
            res.json({ success: true, audioEnabled: CONFIG.audioEnabled });
            break;
            
        case 'clear-cache':
            audioCache = [];
            saveCache();
            res.json({ success: true, message: 'Cache limpo' });
            break;
            
        case 'stats':
            res.json({
                audioEnabled: CONFIG.audioEnabled,
                cacheSize: audioCache.length,
                activeUsers: Object.keys(cooldownUsers).length,
                isProcessing: isProcessing
            });
            break;
            
        default:
            res.status(400).json({ error: 'Ação inválida' });
    }
})*/

// ===== FUNÇÕES AUXILIARES =====

function loadCache() {
    try {
        if (fs.existsSync('./cacheaudios.json')) {
            const cacheData = JSON.parse(fs.readFileSync('./cacheaudios.json', 'utf8'));
            if (Array.isArray(cacheData)) {
                audioCache = cacheData.slice(0, CONFIG.maxCacheSize);
            }
        }
        
        if (fs.existsSync('./prenderCooldown3.json')) {
            cooldownUsers = JSON.parse(fs.readFileSync('./prenderCooldown3.json', 'utf8'));
        }
        
        console.log('✅ Cache carregado:', audioCache.length, 'itens');
    } catch (error) {
        console.error('❌ Erro ao carregar cache:', error);
    }
}

// Salvar cache
function loadCache() {
    try {
        // --- Cache de áudios ---
        if (fs.existsSync('./cacheaudios.json')) {
            const cacheData = JSON.parse(fs.readFileSync('./cacheaudios.json', 'utf8'));
            if (Array.isArray(cacheData)) {
                // Carrega o cache existente
                audioCache = cacheData;
                console.log('✅ Cache de áudios carregado:', audioCache.length, 'itens');
            }
        } else {
            // Se o arquivo não existe, cria um array vazio
            audioCache = [];
        }
        
        // --- Cache de cooldowns ---
        if (fs.existsSync('./prenderCooldown3.json')) {
            const cooldownData = JSON.parse(fs.readFileSync('./prenderCooldown3.json', 'utf8'));
            if (cooldownData && typeof cooldownData === 'object') {
                cooldownUsers = cooldownData;
                console.log('✅ Cooldowns carregados:', Object.keys(cooldownUsers).length, 'usuários');
            }
        } else {
            cooldownUsers = {};
        }
        
    } catch (error) {
        console.error('❌ Erro ao carregar cache:', error);
        // Inicializa como vazio em caso de erro
        audioCache = [];
        cooldownUsers = {};
    }
}

// Salvar cache
function saveCache() {
    try {
        // --- Cache de áudios ---
        // Sempre salva todo o conteúdo atual de audioCache
        fs.writeFileSync('./cacheaudios.json', JSON.stringify(audioCache, null, 2));
        console.log('✅ Cache de áudios salvo com', audioCache.length, 'itens');
        
        // --- Cache de cooldowns ---
        fs.writeFileSync('./prenderCooldown3.json', JSON.stringify(cooldownUsers, null, 2));
        console.log('✅ Cache de cooldown salvo com', Object.keys(cooldownUsers).length, 'usuários');
        
    } catch (error) {
        console.error('❌ Erro ao salvar cache:', error);
    }
}

function checkCooldown(userId) {
    const currentTime = Date.now();
    const lastActionTime = cooldownUsers[userId] || 0;
    return (currentTime - lastActionTime) < CONFIG.cooldownTime;
}

function updateCooldown(userId) {
    cooldownUsers[userId] = Date.now();
    saveCache();
}

function checkFixedAudios(message) {
    const messageLower = message.toLowerCase();
    
    for (const [trigger, audioPath] of Object.entries(AUDIOS_FIXOS)) {
        const regex = new RegExp(trigger, "i");
        if (regex.test(messageLower)) {
            if (fs.existsSync(audioPath)) {
                return audioPath;
            }
        }
    }
    
    return null;
}


function limparTexto(texto) {
    return texto
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, '') // Emojis
      .replace(/[\u{2600}-\u{26FF}]/gu, '')   // Símbolos miscelâneos
      .replace(/[\u{2700}-\u{27BF}]/gu, '')   // Dingbats
      .replace(/★/g, '')                      // Símbolo específico
      .trim();
  }
 
async function generateAudioWithAI(message, usuario, goldsUsuario, globalRank) {
    // Criar prompt com informações do usuário
const prompt = `Agora, você não é mais uma simples IA. Você é **A Guardiã dos Golds** a Fabi Bot, uma entidade sarcastica

O Candidato à sua frente:
- Nome: ${usuario.nome}
Seja resumista, fala somente uma frase curta.

A mensagem do candidato chegou até você:
"${message}"`;
    // Obter resposta da IA
    let textoResposta = await getAIResponse(prompt);
    
    if (!textoResposta) {
        console.log('⚠️ Nenhuma API respondeu! Usando resposta padrão.');
}
    
    // Limpar texto
   // textoResposta = limparTexto(textoResposta);
    
    // Gerar hash para nome do arquivo
    const hash = crypto.createHash("md5").update(textoResposta).digest("hex");
    const finalAudioPath = `./audiosgerados/${hash}.ogg`;
    
    // Verificar se já existe
    if (fs.existsSync(finalAudioPath)) {
        console.log('♻️ Áudio já existe no cache:', finalAudioPath);
        return finalAudioPath;
    }
    
    // Gerar áudio com ElevenLabs
    for (let i = 0; i < CONFIG.apiKeys.length; i++) {
        const chave = CONFIG.apiKeys[i];
        
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);
            
            const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${CONFIG.voiceId}`, {
                method: "POST",
                headers: {
                    "xi-api-key": chave,
                    "Content-Type": "application/json",
                    "Accept": "audio/mpeg"
                },
                body: JSON.stringify({
                    text: textoResposta,
                    model_id: "eleven_multilingual_v2",
                    voice_settings: { stability: 0.4, similarity_boost: 0.75 }
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeout);
            
            if (!res.ok) {
                console.error(`❌ Chave ${chave} retornou status ${res.status}`);
                continue;
            }
            
            // Salvar arquivo temporário
            const tempFile = `temp_${Date.now()}.mp3`;
            const dest = fs.createWriteStream(tempFile);
            res.body.pipe(dest);
            
            await new Promise((resolve, reject) =>
                dest.on("finish", resolve).on("error", reject)
            );
            
            // Converter para OGG
            await new Promise((resolve, reject) => {
                exec(`ffmpeg -y -i ${tempFile} -c:a libopus -ar 48000 -ac 1 ${finalAudioPath}`, (err) => {
                    if (err) return reject(err);
                    fs.unlinkSync(tempFile);
                    resolve();
                });
            });
            
            console.log("✅ Áudio gerado com sucesso:", finalAudioPath);
            return finalAudioPath;
            
        } catch (error) {
            if (error.name === "AbortError") {
                console.error("❌ Timeout na geração de áudio");
            } else {
                console.error(`❌ Erro com chave ${chave}:`, error.message);
            }
            continue;
        }
    }
    
    return null;
}

async function getAIResponse(prompt) {
    const urls = [
        {
            nome: "SystemZone Copilot",
            url: `https://systemzone.store/api/copilot?text=${encodeURIComponent(prompt)}`,
            extrair: res => res.result && !res.result.includes("Erro") && res.result
        },
        {
            nome: "SystemZone Gemini Lite",
            url: `https://systemzone.store/api/ai/gemini-lite?prompt=${encodeURIComponent(prompt)}`,
            extrair: res => res.result && !res.result.includes("Erro") && res.result
        },
        {
            nome: "NexyFuture",
            url: `https://api.nexfuture.com.br/api/inteligencias/gemini?query=${encodeURIComponent(prompt)}`,
            extrair: res => res.resposta && !res.resposta.includes("Erro") && res.resposta
        },
        {
            nome: "NexyFuture Pro",
            url: `https://api.nexfuture.com.br/api/inteligencias/gemini/pro?query=${encodeURIComponent(prompt)}`,
            extrair: res => res.resposta && !res.resposta.includes("Erro") && res.resposta
        },
        {
            nome: "ZenzxZ DeepSeek-v3",
            url: `https://api.zenzxz.my.id/api/ai/chatai?query=${encodeURIComponent(prompt)}&model=deepseek-v3`,
            extrair: res => res.data?.answer && res.success && res.data.answer
        }
    ];

    for (const api of urls) { 
        try {
            const res = await fetchJson(api.url);
            const resposta = api.extrair(res);

            if (resposta) {
                const textoFinal = typeof resposta === 'string' ? resposta : (
                    res.result?.response || res.answer || res.result?.data || res.resposta || res.msg || res.result
                );

                console.log(`SITE AUDIO✅ Resposta da API ${api.nome}:`, textoFinal);
                return limparTexto(textoFinal);
            }
        } catch (err) {
            console.error(`❌ Erro na API ${api.nome}:`, err.message);
        }
    }

  
    
    console.log('⚠️ TODAS as 6 APIs falharam, usando fallback interno');
    return null;
}



// Carregar cache

function addToCache(message, audioPath) {
    const stopwords = ["o", "a", "e", "é", "foi", "de", "do", "da", "com", "para", "meu", "seu", "por", "em", "um", "uma", "isso"];
    const palavras = message.toLowerCase()
        .split(/\s+/)
        .filter(p => !stopwords.includes(p) && p.length > 2);
    
    // Verifica se já existe um áudio com as mesmas chaves
    const chavesNormalizadas = palavras.sort().join(' ');
    const jaExiste = audioCache.some(item => {
        if (!item.chaves || !item.audio) return false;
        const itemChaves = Array.isArray(item.chaves) 
            ? item.chaves.sort().join(' ') 
            : item.chaves;
        return itemChaves === chavesNormalizadas && item.audio === audioPath;
    });
    
    if (!jaExiste) {
        // Adiciona no início do array
        audioCache.unshift({
            chaves: palavras,
            audio: audioPath,
            timestamp: Date.now()
        });
        
        // Limita o tamanho do cache
        if (audioCache.length > CONFIG.maxCacheSize) {
            audioCache = audioCache.slice(0, CONFIG.maxCacheSize);
        }
        
        saveCache();
        console.log('✅ Áudio adicionado ao cache:', audioPath);
    } else {
        console.log('♻️ Áudio já existe no cache, não foi adicionado novamente');
    }
}

function checkAudioCache(message) {
    // Remove stopwords e normaliza
    const normalizeText = (text) => {
        const stopwords = ["o", "a", "e", "é", "foi", "de", "do", "da", "com", "para", "meu", "seu", "por", "em", "um", "uma", "isso"];
        return text.toLowerCase()
            .split(/\s+/)
            .filter(p => !stopwords.includes(p) && p.length > 2)
            .sort()
            .join(' ');
    };
    
    const normalizedMessage = normalizeText(message);
    
    // Primeiro, tenta encontrar uma correspondência exata
    for (let item of audioCache) {
        if (!item.chaves || !item.audio) continue;
        
        const chaves = Array.isArray(item.chaves) 
            ? item.chaves.join(' ')
            : item.chaves;
        
        const normalizedChaves = normalizeText(chaves);
        
        // Verificação exata
        if (normalizedMessage === normalizedChaves && normalizedMessage.length > 0) {
            if (fs.existsSync(item.audio)) {
                // Move o item para o topo do cache (LRU - Least Recently Used)
                const index = audioCache.indexOf(item);
                if (index > 0) {
                    audioCache.splice(index, 1);
                    audioCache.unshift(item);
                }
                return item.audio;
            } else {
                // Remove do cache se o arquivo não existe mais
                const index = audioCache.indexOf(item);
                audioCache.splice(index, 1);
            }
        }
    }
    
    // Se não encontrou correspondência exata, tenta parcial
    if (normalizedMessage.length > 3) {
        for (let item of audioCache) {
            if (!item.chaves || !item.audio) continue;
            
            const chaves = Array.isArray(item.chaves) 
                ? item.chaves.join(' ')
                : item.chaves;
            
            const normalizedChaves = normalizeText(chaves);
            
            // Verificação parcial: se todas as palavras da mensagem estão nas chaves
            const palavrasMensagem = normalizedMessage.split(' ');
            const palavrasChaves = normalizedChaves.split(' ');
            
            const todasPalavrasPresentes = palavrasMensagem.every(palavra => 
                palavrasChaves.includes(palavra)
            );
            
            if (todasPalavrasPresentes && palavrasMensagem.length > 0) {
                if (fs.existsSync(item.audio)) {
                    // Move para o topo
                    const index = audioCache.indexOf(item);
                    if (index > 0) {
                        audioCache.splice(index, 1);
                        audioCache.unshift(item);
                    }
                    return item.audio;
                }
            }
        }
    }
    
    return null;
}

// Função para limpar cache antigo (opcional)
function cleanupOldCache() {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000); // 7 dias atrás
    const initialLength = audioCache.length;
    
    audioCache = audioCache.filter(item => {
        // Mantém se o timestamp for recente OU se o arquivo ainda existir
        if (item.timestamp && item.timestamp > oneWeekAgo) return true;
        if (item.audio && fs.existsSync(item.audio)) return true;
        return false;
    });
    
    if (audioCache.length < initialLength) {
        console.log(`🧹 Limpeza de cache: removidos ${initialLength - audioCache.length} itens antigos`);
        saveCache();
    }
}

// Adicione esta chamada no início do seu programa

// ===== INICIAR SERVIDOR =====

// Garantir que as pastas existam


// Carregar cache inicial



app.get('/docs', async (req, res) => {
    
        return res.redirect('https://fabibot.vercel.app/');
    })
app.get('/bolao', isAuthenticated, (req, res) => {
    const usuario = req.session.user;
    const bolaoPath = path.join(__dirname, 'public', 'palpites.json');

    if (!fs.existsSync(bolaoPath)) return res.status(404).send('Arquivo de bolão não encontrado.');

    const dados = JSON.parse(fs.readFileSync(bolaoPath, 'utf8'));
    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 0;

    res.render('bolao', {
        username: usuario.nome,
        numero: usuario.numero,
        grupo: usuario.grupo,
        partidas: dados.bolao,
        golds
    });
});
app.post('/bolao', isAuthenticated, (req, res) => {
    const usuario = req.session.user;
    const { partidaId, palpite } = req.body;
    const bolaoPath = path.join(__dirname, 'public', 'palpites.json');

    if (!fs.existsSync(bolaoPath)) return res.status(404).send('Arquivo de bolão não encontrado.');

    const dados = JSON.parse(fs.readFileSync(bolaoPath, 'utf8'));
    const partida = dados.bolao.find(p => p.id === partidaId);

    if (!partida) return res.status(400).send('Partida não encontrada.');
    if (partida.status !== 'aberto') return res.status(403).send('Este bolão já foi encerrado.');

    // Checar se o usuário já deu palpite
    const jaExiste = partida.palpites.some(p => p.nome === usuario.numero);
    if (jaExiste) return res.status(409).send('Você já enviou um palpite para essa partida.');

    // Verificar golds
    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero);
    const goldsNecessarios = partida.info.golds;

    if (golds < goldsNecessarios) return res.status(403).send('Golds insuficientes para participar.');

    // Descontar golds (você já tem a função que salva isso)
    atualizarGolds(usuario.grupo, usuario.numero, golds - goldsNecessarios);

    // Salvar palpite
    partida.palpites.push({
        nome: usuario.numero,
        palpite,
        groupId: usuario.grupo
    });

    // Atualizar total de golds
    partida.totalGolds += goldsNecessarios;

    // Salvar no JSON
    fs.writeFileSync(bolaoPath, JSON.stringify(dados, null, 2));

    res.redirect('/bolao'); // ou mandar mensagem de sucesso
});
function obterPontuacaoAtualizada(grupo, id) {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'public', 'rankpontuacao.json'), 'utf8');
    const rankings = JSON.parse(data || '[]');
    const userRank = rankings.find(u => u.id === id);
    return userRank ? userRank.score : 0;
  } catch (err) {
    return 0; // Se não existir ou erro, retorna 0
  }
}

app.get('/corrida', isAuthenticated, async (req, res) => {
  try {
    const usuario = req.session.user;
    if (!usuario) return res.status(401).send('Usuário não autenticado');

    const golds = obterGoldsAtualizados(usuario.grupo, usuario.numero) ?? 0;
    const pontuacao = obterPontuacaoAtualizada(usuario.grupo, usuario.numero);

    const filePath = path.join(__dirname, 'public', 'rankpontuacao.json');
    let ranking = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      ranking = JSON.parse(data || '[]');
      ranking.sort((a, b) => b.score - a.score);
    }

    res.render('corrida', {
      username: usuario.nome,
      numero: usuario.numero,
      grupo: usuario.grupo,
      golds,
      pontuacao,
      ranking
    });
  } catch (error) {
    console.error('Erro na rota /corrida:', error);
    res.status(500).send('Erro interno no servidor.');
  }
});


// Configuração de destino e nome do arquivo

// Endpoint para enviar os produtos para o frontend
app.get('/lojagk', (req, res) => {
  const produtosPath = path.join(__dirname, 'public', 'tabelagk.json');
  let produtos = [];
  if(fs.existsSync(produtosPath)){
    produtos = JSON.parse(fs.readFileSync(produtosPath));
  }
  res.render('lojagk', { produtos }); // <- passa para o EJS
});

app.get('/painelgk', isAuthenticated, (req, res) => {
  const usuario = req.session.user.nome
console.log(usuario)
  // Correção — antes estava errado (!usuario === ...)
  if (usuario !== 'Cabral1') {
    return res.redirect('/login?erro=Você precisa estar logado para acessar esta página');
  }

  const produtosPath = path.join(__dirname, 'public', 'tabelagk.json');
  let produtos = [];

  if (fs.existsSync(produtosPath)) {
    produtos = JSON.parse(fs.readFileSync(produtosPath));
  }

  res.render('painelgk', { produtos });
});

// Atualize a rota de editar produto
app.post('/painelgk/editar/:id', upload.single('imagemFile'), (req, res) => {
    const produtos = JSON.parse(fs.readFileSync('./public/tabelagk.json'));
    const produto = produtos.find(p => p.Item == req.params.id);

    const qtd = Number(String(req.body.quantidade).replace(",", "."));
    const vendidos = Number(String(req.body.vendidos).replace(",", "."));
    const precoVenda = Number(String(req.body.preco).replace(",", "."));
    const precoUnitario = Number(String(req.body.valorunit).replace(",", "."));
    const precoAtacado = Number(String(req.body.precoatacado || "0").replace(",", "."));

    produto.Descrição = req.body.descricao;
    produto.Quantidade = isNaN(qtd) ? 0 : qtd;
    produto["Vendido (QNTD)"] = isNaN(vendidos) ? 0 : vendidos;
    produto["Valor Venda (R$)"] = isNaN(precoVenda) ? 0 : precoVenda;
    produto["Valor Atacado (R$)"] = isNaN(precoAtacado) ? 0 : precoAtacado;
    produto["Valor Unitário (R$)"] = isNaN(precoUnitario) ? 0 : precoUnitario;

    // Atualizar imagem
    if (req.file) {
        produto.Imagem = '/uploads/' + req.file.filename;
    } else if (req.body.imagem) {
        produto.Imagem = req.body.imagem;
    }

    // Recalcular
    const estoque = produto.Quantidade - produto["Vendido (QNTD)"];
    produto["ESTOQUE "] = estoque;
    produto["A GANHAR (R$)"] = (estoque * produto["Valor Venda (R$)"]).toFixed(2);
    produto["Total Vendido (R$)"] = (produto["Vendido (QNTD)"] * produto["Valor Venda (R$)"]).toFixed(2);
    produto["Valor Total (R$)"] = (produto.Quantidade * produto["Valor Unitário (R$)"]).toFixed(2);
    produto["Lucro (R$)"] = ((produto["Vendido (QNTD)"] * produto["Valor Venda (R$)"]) - (produto.Quantidade * produto["Valor Unitário (R$)"])).toFixed(2);

    fs.writeFileSync('./public/tabelagk.json', JSON.stringify(produtos, null, 2));
    res.redirect('/painelgk');
});

// Atualize a rota de novo produto
app.post('/painelgk/novo', upload.single('imagemFile'), (req, res) => {
    const file = './public/tabelagk.json';
    const produtos = JSON.parse(fs.readFileSync(file));

    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].Item + 1 : 1;

    const qtd = Number(String(req.body.quantidade).replace(",", "."));
    const vendidos = Number(String(req.body.vendidos).replace(",", "."));
    const precoVenda = Number(String(req.body.preco).replace(",", "."));
    const precoUnit = Number(String(req.body.valorunit).replace(",", "."));
    const precoAtacado = Number(String(req.body.precoatacado || "0").replace(",", "."));

    const estoque = qtd - vendidos;

    let imagem = req.body.imagem || '';
    if (req.file) {
        imagem = '/uploads/' + req.file.filename;
    }

    const novoProduto = {
        Item: novoId,
        Descrição: req.body.descricao,
        Quantidade: qtd,
        "Vendido (QNTD)": vendidos,
        "Valor Venda (R$)": precoVenda,
        "Valor Atacado (R$)": precoAtacado,
        "Valor Unitário (R$)": precoUnit,
        Imagem: imagem,
        "ESTOQUE ": estoque,
        "A GANHAR (R$)": (estoque * precoVenda).toFixed(2),
        "Total Vendido (R$)": (vendidos * precoVenda).toFixed(2),
        "Valor Total (R$)": (qtd * precoUnit).toFixed(2),
        "Lucro (R$)": ((vendidos * precoVenda) - (qtd * precoUnit)).toFixed(2)
    };

    produtos.push(novoProduto);
    fs.writeFileSync(file, JSON.stringify(produtos, null, 4));
    res.redirect('/painelgk');
});
// Rota para alterar foto do usuário
// NO BACKEND ORIGINAL
// Rota original para alterar foto (JÁ EXISTENTE NO SEU CÓDIGO)

// ROTA PARA ALTERAR FOTO (VERSÃO COMPLETA)
// Adicione estas funções auxiliares no topo do arquivo (após os imports)

// FUNÇÃO PARA SALVAR BASE64 COMO ARQUIVO
function salvarBase64ComoArquivo(base64String, pastaUploads) {
  try {
    // Verificar se é base64 válido
    const matches = base64String.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    
    if (!matches || matches.length !== 3) {
      throw new Error('String base64 inválida');
    }
    
    const mimeType = matches[1];
    const data = matches[2];
    const buffer = Buffer.from(data, 'base64');
    
    // Determinar extensão
    let extensao = 'jpg';
    if (mimeType.includes('png')) extensao = 'png';
    if (mimeType.includes('gif')) extensao = 'gif';
    if (mimeType.includes('webp')) extensao = 'webp';
    if (mimeType.includes('jpeg')) extensao = 'jpg';
    
    // Criar nome único
    const nomeArquivo = `foto_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${extensao}`;
    const caminhoCompleto = path.join(pastaUploads, nomeArquivo);
    
    // Garantir que a pasta existe
    if (!fs.existsSync(pastaUploads)) {
      fs.mkdirSync(pastaUploads, { recursive: true });
    }
    
    // Salvar arquivo
    fs.writeFileSync(caminhoCompleto, buffer);
    
    console.log(`💾 Base64 salvo como: ${nomeArquivo} (${Math.round(buffer.length / 1024)}KB)`);
    
    return '/uploads/' + nomeArquivo;
    
  } catch (error) {
    console.error("Erro ao salvar base64:", error);
    throw error;
  }
}

// FUNÇÃO PARA COMPRIMIR IMAGEM (opcional - instale o sharp: npm install sharp)
async function comprimirImagem(buffer) {
  try {
    // Verificar se o sharp está disponível
    const sharp = require('sharp');
    
    // Redimensionar e comprimir
    return await sharp(buffer)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: 80,
        mozjpeg: true 
      })
      .toBuffer();
    
  } catch (error) {
    console.log("⚠️ Sharp não disponível, usando imagem original");
    return buffer; // Retorna o buffer original se não conseguir comprimir
  }
}

// AUMENTAR LIMITE DO BODY PARSER (adicione isto onde configura o Express)
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/alterar-foto', upload.single('fotoFile'), async (req, res) => {
  console.log("=== ALTERAR FOTO ===");

  if (!req.session.user) {
    return res.json({ sucesso: false, mensagem: "Faça login primeiro!" });
  }

  const usuario = req.session.user.nome;

  const registroPath = path.join(__dirname, 'public', 'registro.json');
  if (!fs.existsSync(registroPath)) {
    return res.json({ sucesso: false, mensagem: "registro.json não existe!" });
  }

  const registro = JSON.parse(fs.readFileSync(registroPath, 'utf8'));
  const userIndex = registro.findIndex(u => u.nome === usuario);

  if (userIndex === -1) {
    return res.json({ sucesso: false, mensagem: "Usuário não encontrado!" });
  }

  let novaFoto = null;
  const pastaUploads = path.join(__dirname, 'public', 'uploads');

  // CASO 1 — upload tradicional
  if (req.file) {
    novaFoto = '/uploads/' + req.file.filename;
  }

  // CASO 2 — base64 da máscara
  else if (req.body?.fotoUrl) {
    const fotoUrl = req.body.fotoUrl;

    if (fotoUrl.startsWith('data:image')) {
      try {
        if (!fs.existsSync(pastaUploads)) fs.mkdirSync(pastaUploads);

        const base64Data = fotoUrl.split(';base64,').pop();
        const ext = fotoUrl.substring(fotoUrl.indexOf("/") + 1, fotoUrl.indexOf(";"));
        const fileName = `${Date.now()}.${ext}`;
        const filePath = path.join(pastaUploads, fileName);

        fs.writeFileSync(filePath, base64Data, 'base64');
        novaFoto = '/uploads/' + fileName;
      } catch (e) {
        return res.json({ sucesso: false, mensagem: "Falha ao salvar imagem base64." });
      }
    }
  }

  // Nenhuma foto recebida
  if (!novaFoto) {
    return res.json({ sucesso: false, mensagem: "Nenhuma imagem recebida!" });
  }

  // Atualiza o registro
  registro[userIndex].fotoPerfil = novaFoto;
  fs.writeFileSync(registroPath, JSON.stringify(registro, null, 2));

  req.session.user.fotoPerfil = novaFoto;

  res.json({
    sucesso: true,
    mensagem: "Foto alterada com sucesso!",
    novaFoto
  });
});


// Rota para obter informações do usuário logado
app.get('/usuario-atual', (req, res) => {
    // Verifica se o usuário está logado (depende da sua sessão)
    if (req.session.user.nome) {
        const registro = JSON.parse(fs.readFileSync('./public/registro.json'));
        const usuario = registro.find(u => u.nome === req.session.user.nome);
        
        if (usuario) {
            res.json({
                nome: usuario.nome,
                fotoPerfil: usuario.fotoPerfil,
                numero: usuario.numero,
                grupo: usuario.grupo,
                saldo: usuario.saldo,
                golds: usuario.golds || 0,
                globalRank: usuario.globalRank || 0
            });
        } else {
            res.status(404).json({ erro: "Usuário não encontrado" });
        }
    } else {
        res.status(401).json({ erro: "Não logado" });
    }
});



// Excluir
app.get('/painelgk/excluir/:id', (req, res) => {
  let produtos = JSON.parse(fs.readFileSync('./public/tabelagk.json'));
  produtos = produtos.filter(p => p.Item != req.params.id);
  fs.writeFileSync('./public/tabelagk.json', JSON.stringify(produtos, null, 2));
  res.redirect('/painelgk');
});
// Rota para salvar pontuação
app.post('/salvarPontuacao', (req, res) => {
    const { nome, id, grupo, score, golds } = req.body;
    
    if (!nome || !id || !grupo || typeof score !== 'number') {
        return res.status(400).json({ sucesso: false, mensagem: 'Dados incompletos' });
    }

    const filePath = path.join(__dirname, 'public', 'rankpontuacao.json');
    let rankings = [];

    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            rankings = JSON.parse(data || '[]');
        }
    } catch (e) {
        console.error('Erro lendo rankpontuacao.json:', e);
        return res.status(500).json({ sucesso: false, mensagem: 'Erro interno' });
    }

    // Procura usuário no ranking
    let usuario = rankings.find(u => u.id === id && u.grupo === grupo);
    let goldsGanho = 0;

    if (!usuario) {
        // Novo usuário
       // goldsGanho = Math.floor(score / 50);
        usuario = { nome, id, grupo, score, golds: golds };
        rankings.push(usuario);
    } else {
        // Atualiza se a pontuação nova for maior
        if (score > usuario.score) {
            goldsGanho = Math.floor((score - usuario.score) / 50);
            usuario.score = score;
            usuario.golds = golds;
        }
    }

    // Ordena pelo score decrescente
    rankings.sort((a, b) => b.score - a.score);

    try {
        fs.writeFileSync(filePath, JSON.stringify(rankings, null, 2));
    } catch (e) {
        console.error('Erro escrevendo rankpontuacao.json:', e);
        return res.status(500).json({ sucesso: false, mensagem: 'Erro interno' });
    }

    res.json({ 
    sucesso: true, 
    goldsGanho,
    golds: usuario.golds, // ✅ Envia os golds atualizados para o frontend
    rankings: rankings.filter(u => u.grupo === grupo)
});
});

// Rota para obter o ranking
app.get('/obterRanking', async (req, res) => {
    const { grupo } = req.query;
    
    if (!grupo) {
        return res.status(400).json({ error: 'Grupo não especificado' });
    }

    const filePath = path.join(__dirname, 'public', 'rankpontuacao.json');
    
    try {
        let rankings = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            rankings = JSON.parse(data || '[]');
        }
        
        // Filtra por grupo e ordena
        const rankingGrupo = rankings.filter(u => u.grupo === grupo)
                                   .sort((a, b) => b.score - a.score);
        
        res.json(rankingGrupo);
    } catch (e) {
        console.error('Erro ao obter ranking:', e);
        res.status(500).json({ error: 'Erro interno' });
    }
});

const missaoPath = './public/missaoDiaria.json';

app.get('/missaoDiaria', (req, res) => {
  let missao;
  if (fs.existsSync(missaoPath)) {
    missao = JSON.parse(fs.readFileSync(missaoPath, 'utf8'));
  } else {
    missao = gerarMissao();
    fs.writeFileSync(missaoPath, JSON.stringify(missao, null, 2));
  }

  const hoje = new Date().toISOString().slice(0, 10);
  if (missao.data !== hoje) {
    missao = gerarMissao();
    fs.writeFileSync(missaoPath, JSON.stringify(missao, null, 2));
  }

  res.json(missao);
});
app.post('/concluirMissao', (req, res) => {
  let missao = JSON.parse(fs.readFileSync(missaoPath, 'utf8'));
  const { score, golds, id, grupo } = req.body;

  if (missao.concluida) {
    return res.json({ sucesso: false, msg: 'Missão já concluída hoje.' });
  }

  let completou = false;
  if (missao.tipo === 'score' && score >= missao.alvo) completou = true;
  if (missao.tipo === 'golds' && golds >= missao.alvo) completou = true;

  if (completou) {
    missao.concluida = true;
    fs.writeFileSync(missaoPath, JSON.stringify(missao, null, 2));
    
    // Aqui você atualiza os golds do usuário (sua lógica)
    // Exemplo (pseudo):
    // addGold(id, missao.recompensa);

    res.json({ sucesso: true, recompensa: missao.recompensa });
  } else {
    res.json({ sucesso: false, msg: 'Ainda não completou a missão.' });
  }
});



//Serba Serbi Buttons Interactive Message

 

function gerarMissao() {
  const tipos = ['score', 'golds'];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];

  let alvo = 0;
  let recompensa = 0;

  if (tipo === 'score') {
    alvo = 500 + Math.floor(Math.random() * 2000); // Ex: 500 a 2500 pontos
    recompensa = 1000 + Math.floor(Math.random() * 5000);
  } else if (tipo === 'golds') {
    alvo = 1000 + Math.floor(Math.random() * 5000); // Ex: 1000 a 6000 golds
    recompensa = 1500 + Math.floor(Math.random() * 5000);
  }

  return {
    tipo,
    alvo,
    recompensa,
    concluida: false,
    data: new Date().toISOString().slice(0, 10)
  };
}

const { createCanvas, loadImage } = require('canvas');
app.get('/bemvindo', async (req, res) => {
    try {
        const userImgUrl = req.query.userImg || 'https://telegra.ph/file/d8a541bcc48d20403dbb3.jpg';
        const groupImgUrl = req.query.groupImg || 'https://telegra.ph/file/d8a541bcc48d20403dbb3.jpg';
        const nome = req.query.nome || 'Visitante';
        const total = req.query.total || '???';
        const groupId = req.query.from || 'default';

        const canvas = createCanvas(800, 450);
        const ctx = canvas.getContext('2d');

        // garante pasta images
        const imagesDir = path.join(__dirname, 'public', 'images');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        // fundo por grupo ou padrão
        let fundoGrupoPath = path.join(__dirname, 'public', 'fabibanner.jpg');
        const fundoGrupoCustom = path.join(__dirname, 'public', 'bemvindo', `${groupId}.jpg`);

        if (fs.existsSync(fundoGrupoCustom)) {
            fundoGrupoPath = fundoGrupoCustom;
        }

        const bg = await loadImage(fundoGrupoPath);
        ctx.drawImage(bg, 0, 0, 800, 450);

        // avatar grupo
        ctx.save();
        ctx.beginPath();
        ctx.arc(90, 90, 70, 0, Math.PI * 2);
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#00ffff';
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(90, 90, 65, 0, Math.PI * 2);
        ctx.clip();
        const groupImg = await loadImage(groupImgUrl);
        ctx.drawImage(groupImg, 25, 25, 130, 130);
        ctx.restore();

        // avatar usuário
        ctx.save();
        ctx.beginPath();
        ctx.arc(710, 90, 70, 0, Math.PI * 2);
        ctx.shadowColor = '#ff00ff';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#ff00ff';
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(710, 90, 65, 0, Math.PI * 2);
        ctx.clip();
        const userImg = await loadImage(userImgUrl);
        ctx.drawImage(userImg, 645, 25, 130, 130);
        ctx.restore();

        // textos
        ctx.font = 'bold 36px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 4;
        ctx.textAlign = 'center';
        ctx.fillText(`Bem-vindo(a), ${nome}!`, 400, 310);

        ctx.font = 'bold 32px sans-serif';
        ctx.fillStyle = '#00ffcc';
        ctx.fillText(`${total}`, 400, 360);

        // salva imagem
        const fileName = `${Date.now()}_banner.png`;
        const filePath = path.join(imagesDir, fileName);

        const out = fs.createWriteStream(filePath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);

        out.on('finish', () => {
            res.json({
                imageUrl: `http://br2.bronxyshost.com:4009/images/${fileName}`
            });
        });

    } catch (err) {
        console.error('Erro ao gerar imagem:', err);
        res.status(500).json({ error: 'Erro ao gerar imagem' });
    }
});


// Servir arquivos estáticos da pasta public/images
app.use('/bemvindo', express.static(path.join(__dirname, 'public', 'images')));
// Caminho para o arquivo de configuração do grupo (dinâmico)







app.post('/alterarConfig', (req, res) => {
    const usuario = req.session.user;
    if (!usuario) {
        return res.redirect('/login');
    }

    const grupoConfigFilePath = path.join(__dirname, 'public', 'grupos', `${usuario.grupo}.json`);

    if (!fs.existsSync(grupoConfigFilePath)) {
        return res.status(404).json({ success: false, message: 'Arquivo de configuração do grupo não encontrado.' });
    }

    let grupoConfig;
    try {
        grupoConfig = JSON.parse(fs.readFileSync(grupoConfigFilePath, 'utf8')) || [{}];
        console.log('Configuração carregada:', grupoConfig);
    } catch (error) {
        console.error('Erro ao ler configuração:', error);
        return res.status(500).json({ success: false, message: 'Erro ao carregar configuração.' });
    }

    console.log('Dados recebidos no POST:', req.body);

    // Atualizar checkboxes
    Object.keys(req.body).forEach(key => {
        if (["sistemGold", "visuUnica", "registrarFIGUS", "x9", "soadm", "antiimg", "antivideo", "antiaudio", "antisticker", "antidoc", "antictt",
            "antiloc", "antilinkgp", "antilinkhard", "antifake", "Odelete", "antispam", "antinotas", "anticatalogo", "simi1", "gospel",
            "autosticker", "autoresposta", "jogos", "level", "bangp", "nsfw", "Odelete", "autodl"].includes(key)) {
            grupoConfig[0][key] = req.body[key] === 'on';
        }
    });

    // Atualizar o estado de bem-vindo1 e bem-vindo2
    if (!grupoConfig[0].wellcome) {
        grupoConfig[0].wellcome = [{}, {}]; // Garantir estrutura
    }

    // Ativar ou desativar os sistemas de boas-vindas
    grupoConfig[0].wellcome[0].bemvindo1 = req.body.bemvindo1 === 'on' ? true : false;
    grupoConfig[0].wellcome[1].bemvindo2 = req.body.bemvindo2 === 'on' ? true : false;

    // Atualizar legendas de boas-vindas e saída
    grupoConfig[0].wellcome[0].legendabv = req.body.legendabv || grupoConfig[0].wellcome[0].legendabv;
    grupoConfig[0].wellcome[0].legendasaiu = req.body.legendasaiu || grupoConfig[0].wellcome[0].legendasaiu;
    grupoConfig[0].wellcome[1].legendabv = req.body.legendabv2 || grupoConfig[0].wellcome[1].legendabv;
    grupoConfig[0].wellcome[1].legendasaiu = req.body.legendasaiu2 || grupoConfig[0].wellcome[1].legendasaiu;

    console.log('Configuração modificada:', grupoConfig);

    try {
        fs.writeFileSync(grupoConfigFilePath, JSON.stringify(grupoConfig, null, 2));
        console.log('Configuração salva com sucesso.');
    } catch (error) {
        console.error('Erro ao salvar configuração:', error);
        return res.status(500).json({ success: false, message: 'Erro ao salvar configuração.' });
    }

    res.json({ success: true, message: "Configuração salva com sucesso!", Loading: '✅100% Funcionando no grupo!' });
});

function salvarConfig(grupoConfig, grupoID) {
    const grupoConfigPath = path.join(__dirname, 'public', 'grupos', `${grupoID}.json`);
    fs.writeFileSync(grupoConfigPath, JSON.stringify(grupoConfig, null, 2));
}


app.get('/change-password', isAuthenticated, (req, res) => {
    // Obtendo o usuário da sessão
    const usuario = req.session.user;

    // Se o usuário não estiver autenticado ou não houver usuário na sessão, redireciona para a página de login
    if (!usuario) {
        return res.redirect('/login?erro=Você precisa estar logado para acessar esta página');
    }

    // Caso contrário, renderiza a página de troca de senha
    res.render('change-password', {
        nome_site: site_nome,  // Passando o nome do site para o template
        erro: req.query.erro || null,  // Passando mensagem de erro, se houver
        sucesso: req.query.sucesso || null // Passando mensagem de sucesso, se houver
    });
});




// Rota para servir a página de registro
app.get("/registro", (req, res) => {
    res.render("registro"); // Renderiza a página de registro (arquivo `registro.ejs`)
});

// Rota para processar o registro





app.post("/registrar", async (req, res) => {
    const { nome, numeroFormatado, grupo, id } = req.body;

    const REGISTRO_PATH = path.join(__dirname, "public", "registro.json");
    
    const GRUPO_PADRAO = "120363316367723095@g.us";

    // Verificação de campos obrigatórios
    if (!nome || !numeroFormatado || !grupo || !id) {
        console.error("Erro: Campos obrigatórios faltando");
        return res.status(400).json({ sucesso: false, mensagem: "Todos os campos são obrigatórios!" });
    }

    // Criação do novo usuário
    const novoUsuario = {
        nome: nome,
        numero: numeroFormatado,
        grupo: GRUPO_PADRAO,
        email: grupo, // E-mail será armazenado no campo 'grupo'
        id: id,
        dinheiro: 600 // Começa com 600 Golds
    };

    try {
        // Carrega o registro de usuários
        let usuarios = [];
        if (fs.existsSync(REGISTRO_PATH)) {
            const data = fs.readFileSync(REGISTRO_PATH, "utf8");
            usuarios = JSON.parse(data);
        }

        // Verifica duplicações
        if (usuarios.some(user => user.nome === nome)) {
            console.error("Erro: Nome já está em uso");
            return res.status(400).json({ sucesso: false, mensagem: "Nome de usuário já está em uso!" });
        }

        if (usuarios.some(user => user.numero === numeroFormatado)) {
            console.error("Erro: Número já está em uso");
            return res.status(400).json({ sucesso: false, mensagem: "Número já está em uso!" });
        }

        // Adiciona novo usuário ao array
        usuarios.push(novoUsuario);
        fs.writeFileSync(REGISTRO_PATH, JSON.stringify(usuarios, null, 4));

        // Atualiza golds.json
        let grupos = [];
        if (fs.existsSync(GOLD_PATH)) {
            const dataGolds = fs.readFileSync(GOLD_PATH, "utf8");
            grupos = JSON.parse(dataGolds);
        }

        const grupoExistente = grupos.find(g => g.grupo?.trim() === GRUPO_PADRAO);

        const novoRegistroGold = {
            id: numeroFormatado,
            Golds: 600,
            data: new Date().toLocaleDateString("pt-BR"),
            desligar: false
        };

        if (grupoExistente) {
            if (!Array.isArray(grupoExistente.usus)) {
                grupoExistente.usus = [];
            }
            grupoExistente.usus.push(novoRegistroGold);
        } else {
            grupos.push({
                grupo: GRUPO_PADRAO,
                usus: [novoRegistroGold]
            });
        }

        fs.writeFileSync(GOLD_PATH, JSON.stringify(grupos, null, 4));

        // ✅ Registro realizado com sucesso
        res.status(200).json({ sucesso: true, mensagem: "Registro realizado com sucesso!" });

        // ✅ Notifica o dono via WhatsApp
        console.log(`✅ *Novo usuário cadastrado!*\n\n👤 Nome: *${nome}*\n📱 Número: *${numeroFormatado}*\n📧 E-mail: *${grupo}*`
        )

    } catch (erro) {
        console.error("Erro ao processar o registro:", erro);
        res.status(500).json({ sucesso: false, mensagem: "Erro ao processar o registro." });
    }
});


app.post('/users/change-password', isAuthenticated, (req, res) => {
    const { nome, currentPassword, newPassword } = req.body;
    const filePath78 = path.join(__dirname, 'public', 'registro.json');

    // Log para verificar os dados recebidos
    console.log(`Tentando alterar senha do usuário: ${nome}`);

    // Ler o arquivo JSON
    fs.readFile(filePath78, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler os dados dos usuários');
        }

        let users;
        try {
            users = JSON.parse(data); // Parse JSON
        } catch (e) {
            return res.status(500).send('Erro ao parsear os dados');
        }

        // Log para verificar os dados dos usuários
        console.log('Dados dos usuários:', users);

        // Encontrar o usuário com o nome fornecido (ignorando maiúsculas/minúsculas)
        const user = users.find(u => u.nome && u.nome.toLowerCase() === nome.toLowerCase());

        // Log para verificar se o usuário foi encontrado
        console.log('Usuário encontrado:', user);

        if (!user) {
            return res.redirect('/change-password?erro=Usuário não encontrado');
        }

        // Verificar se o id (senha) do usuário corresponde à senha atual fornecida
        if (user.id !== currentPassword) {
            return res.redirect('/change-password?erro=Senha atual incorreta');
        }

        // Verificar se a nova senha tem pelo menos 6 caracteres
        if (newPassword.length < 6) {
            return res.redirect('/change-password?erro=A nova senha deve ter pelo menos 6 caracteres');
        }

        // Atualizar a senha do usuário (id será a nova senha)
        user.id = newPassword;

        // Salvar as alterações no arquivo JSON
        fs.writeFile(filePath78, JSON.stringify(users, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar a nova senha');
            }
            // Redirecionar com mensagem de sucesso
            res.redirect('/change-password?sucesso=Senha alterada com sucesso!');
        });
    });
});
app.post('/atualizarMineracao', async (req, res) => {
    const { usuario, ouro, diamante, esmeralda, estaminaPerdida } = req.body;

    try {
        // Buscar o usuário no banco de dados
      

        // Atualizar os recursos encontrados
        if (ouro > 0) {
            addBesi(usuario, ouro);
        }

        if (diamante > 0) {
             addEmas(usuario, diamante);
        }

        if (esmeralda > 0) {
            addEmerald(usuario, esmeralda);
        }

        // Atualizar a estamina do jogador
        kurangDarah(usuario, estaminaPerdida);


        // Devolver os recursos e estamina restantes para o frontend
        res.status(200).json({
            message: 'Mineração atualizada com sucesso',
            ouroEncontrado: ouro,
            diamanteEncontrado: diamante,
            esmeraldaEncontrada: esmeralda,
            estaminaRestante: getDarah(usuario) // Estimativa da estamina restante
        });
    } catch (error) {
        console.error('Erro ao atualizar a mineração:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});




// Iniciar o servidor
app.get('/noticias.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'noticias.json'));
});

app.get('/rankgolds.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rankgolds.json'));
});

const rankPontuacaoPath = path.join(__dirname, 'public', 'rankpontuacao.json');

// Rota para obter ranking de pontuação
app.get('/rankpontuacao.json', (req, res) => {
  fs.readFile(rankPontuacaoPath, 'utf8', (err, data) => {
    if (err) {
      return res.json([]); // retorna lista vazia se arquivo não existir
    }
    res.json(JSON.parse(data));
  });
});

// Rota para atualizar ranking de pontuação (envia dados { id, nome, score })
app.post('/atualizarPontuacao', (req, res) => {
  const { id, nome, score } = req.body;

  if (!id || !nome || typeof score !== 'number') {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  fs.readFile(rankPontuacaoPath, 'utf8', (err, data) => {
    let rankings = [];
    if (!err) {
      try {
        rankings = JSON.parse(data);
      } catch(e) {
        rankings = [];
      }
    }

    // Atualiza ou adiciona
    const idx = rankings.findIndex(r => r.id === id);
    if (idx >= 0) {
      if (score > rankings[idx].score) {
        rankings[idx].score = score; // atualiza só se a nova for maior
      }
    } else {
      rankings.push({ id, nome, score });
    }

    // Ordena descrescente
    rankings.sort((a,b) => b.score - a.score);

    // Salva de volta
    fs.writeFile(rankPontuacaoPath, JSON.stringify(rankings, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao salvar ranking' });
      }
      res.json({ success: true, rankings });
    });
  });
});

app.get('/rankgrupos.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rankgrupos.json'));
});

// Rota para o arquivo de música
app.get('/game.m4a', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.m4a'));
});




// Rota para armazenar notificações
// Rota para salvar a notificação no arquivo JSON
app.post('/salvarNotificacao', (req, res) => {
    const { nome, numero, valor } = req.body;

    const novaNotificacao = {
        nome,
        numero,
        valor
    };

    // Salva a notificação no arquivo JSON
    fs.readFile(path.join(__dirname, 'public', 'notificacoes.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao salvar a notificação.');
        }
        const notificacoes = JSON.parse(data || '[]');
        notificacoes.push(novaNotificacao);

        // Salva novamente no arquivo
        fs.writeFile(path.join(__dirname, 'public', 'notificacoes.json'), JSON.stringify(notificacoes), (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar a notificação.');
            }
            res.status(200).send('Notificação salva.');
        });
    });
});
// Rota para buscar uma notificação aleatória
app.get('/obterNotificacaoAleatoria', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'notificacoes.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler as notificações.');
        }
        const notificacoes = JSON.parse(data || '[]');

        if (notificacoes.length > 0) {
            // Seleciona uma notificação aleatória
            const randomIndex = Math.floor(Math.random() * notificacoes.length);
            res.json(notificacoes[randomIndex]);
        } else {
            res.status(404).send('Nenhuma notificação encontrada.');
        }
    });
});






//const mongoose = require("mongoose");




//app.use(cors());


// Conectar ao MongoDB (substitua pela sua conexão)
/*mongoose.connect("mongodb+srv://baseapiguxta:6kSvdoGAuOvPFWuT@cluster0.c7u9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definição do Schema e Modelo
const userSchema = new mongoose.Schema({
    username: String,
    golds: Number
});

const User = mongoose.model("User", userSchema);*/

// 📌 Rota para buscar Golds do usuário
app.get("/user/:username", async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        res.json({ username: user.username, golds: user.golds });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar os dados" });
    }
});

// 📌 Rota para jogar o minigame e atualizar os Golds
app.post("/play-game", async (req, res) => {
    const { username, color, bet } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        if (user.golds < bet) {
            return res.status(400).json({ error: "Golds insuficientes para a aposta!" });
        }

        const colors = ["branco", "preto", "vermelho"];
        const chosenColor = colors[Math.floor(Math.random() * colors.length)];

        let multiplier = 0;
        if (chosenColor === "branco") multiplier = 5;
        else if (chosenColor === "preto") multiplier = 2;
        else if (chosenColor === "vermelho") multiplier = 3;

        if (color === chosenColor) {
            const winnings = bet * multiplier;
            await addGolds(username, winnings);
            res.json({ message: `Parabéns! Caiu ${chosenColor} e você ganhou ${winnings} Golds!` });
        } else {
            await subtractGolds(username, bet);
            res.json({ message: `Caiu ${chosenColor}. Você perdeu ${bet} Golds.` });
        }

    } catch (error) {
        res.status(500).json({ error: "Erro ao rocessar o jogo" });
    }
});

// Iniciar o servidor


// Certifique-se de que o servidor está rodando


//app.use('/api', apiRouters);
app.use('/users', userRouters);

app.use(function (req, res, next) {
/*if (res.statusCode == '200') {
res.render('notfound', {
nome_site: site_nome
});
}*/
});
CFonts.say(site_nome, {
font: 'block',
align: 'center',
gradient: ['red', 'magenta']
})

console.log(chalk.yellow('Conectado ✓'))
app.set('json spaces', 4);

app.listen(4009, () => {
console.log(`Servidor ligado na porta: https://fabibot.vercel.app`);
});
let sessionStartTime;
// Configuração do filtro de logs
const originalConsoleInfo = console.info;
console.info = function () {
    const message = util.format(...arguments);
    const forbiddenStrings = [
        "Closing session: SessionEntry",
        "Removing old closed session: SessionEntry {",
        "Another forbidden string",
        "Closing stale open session for new outgoing prekey bundle"
    ];
    if (forbiddenStrings.some(msg => message.includes(msg))) {
        return;
    }
    originalConsoleInfo.apply(console, arguments);
};

// Cache de grupos
const groupCache = new Map();
const msgRetryCounterCache = new NodeCache();

// 🔹 Controle de conexões
// 🔹 Controle de conexões
const CONNECTION_TIMEOUT = 3600000; // 45 segundos
const INITIAL_SCAN_DELAY = 100; // 3 segundos antes do primeiro scan
const SCAN_INTERVAL = 3600000; // 10 segundos entre scans
const MAX_RETRY_ATTEMPTS = 5; // Aumentado para 5 tentativas
const RETRY_DELAY = 3600000; // 15 segundos entre tentativas
const MONITOR_INTERVAL = 3600000; // 30 segundos para monitoramento

// 🔹 Sistema de gerenciamento de sessões SIMPLIFICADO

// 🔹 Sistema de gerenciamento de sessões SIMPLIFICADO
// 🔹 CONSTANTES NO TOPO DO ARQUIVO (fora da classe)


class SimpleSessionManager {
    constructor() {
        this.sessions = new Map();
        this.retryCounts = new Map();
        this.isScanning = false;
        this.connectingSessions = new Set();
        this.reconnectionInProgress = new Set();
        
        console.log(colors.cyan('📱 Sistema de sessões simplificado inicializado'));
    }

    // Iniciar monitoramento
    startMonitoring() {
        console.log(colors.cyan('📱 Iniciando monitoramento...'));
        
        setTimeout(() => {
            this.scanAndStartAllSessions();
        }, INITIAL_SCAN_DELAY);
        
        setInterval(() => {
            if (!this.isScanning) {
                this.scanAndStartAllSessions();
            }
        }, SCAN_INTERVAL);
    }

    // 🔹 Scan e iniciação de TODAS as sessões
    async scanAndStartAllSessions() {
        if (this.isScanning) {
            console.log(colors.yellow('⚠️  Scan já em andamento, pulando...'));
            return;
        }
        
        this.isScanning = true;
        
        try {
            const folderPath = path.join(__dirname, 'public/database/qr-code');
            
            if (!fs.existsSync(folderPath)) {
                console.log(colors.yellow('⚠️  Pasta de sessões não encontrada'));
                return;
            }

            const pastas = fs.readdirSync(folderPath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);

            console.log(colors.cyan(`\n📡 Encontradas ${pastas.length} sessões:`));
            
            // 🔥🔥🔥 CONECTAR TODAS AS SESSÕES SIMULTANEAMENTE
            const promises = pastas.map(async (sessionName) => {
                await this.processSession(sessionName);
            });
            
            // Executar em paralelo
            await Promise.allSettled(promises);
            
        } catch (error) {
            console.error(colors.red('❌ Erro no scan:'), error);
        } finally {
            this.isScanning = false;
        }
    }

    // 🔹 Processar uma sessão específica
    async processSession(sessionName) {
        // Verificar se já está em processo de conexão
        if (this.connectingSessions.has(sessionName)) {
            console.log(colors.gray(`[${sessionName}] ⏳ Já em processo de conexão...`));
            return;
        }
        
        // Verificar se já está conectada e estável
      /* if (this.sessions.has(sessionName)) {
            const session = this.sessions.get(sessionName);
            if (session.connected && session.socket?.user?.id) {
                console.log(colors.gray(`[${sessionName}] ✅ Já conectada e estável`));
                return;
            }
        }*/
        
        // Adicionar à lista de sessões em conexão
        this.connectingSessions.add(sessionName);
        
        try {
            const sessionPath = path.join(__dirname, 'public/database/qr-code', sessionName);
            
            // Verificar tentativas
            const retryCount = this.retryCounts.get(sessionName) || 0;
            
            console.log(colors.cyan(`[${sessionName}] 🚀 Iniciando conexão (tentativa ${retryCount + 1})...`));
            
            // Atualizar status
            this.updateSessionStatus(sessionName, {
                status: 'starting',
                message: `Iniciando conexão... (tentativa ${retryCount + 1})`,
                timestamp: new Date().toISOString()
            });
            
            // 🔥🔥🔥 VERSÃO CORRIGIDA: Não usar timeout que bloqueia
            try {
                const socket = await iniciarSabrina(sessionName, sessionName, true);
                
                // Se chegou aqui, a conexão foi bem sucedida
                this.sessions.set(sessionName, {
                    socket: socket,
                    connected: true,
                    startedAt: new Date().toISOString()
                });
                
                this.retryCounts.delete(sessionName);
                
                console.log(colors.green(`[${sessionName}] ✅ Conectado com sucesso!`));
                
            } catch (startError) {
                // Incrementar contador de tentativas
                this.retryCounts.set(sessionName, retryCount + 1);
                
                console.error(colors.red(`[${sessionName}] ❌ Falha na conexão:`), startError.message);
                
                // Atualizar status de erro
                this.updateSessionStatus(sessionName, {
                    status: 'error',
                    message: `Falha na conexão: ${startError.message}`,
                    error: startError.message,
                    timestamp: new Date().toISOString(),
                    retryCount: retryCount + 1
                });
                
                // Se ainda pode tentar novamente, agendar
                if (retryCount + 1 < MAX_RETRY_ATTEMPTS) {
                    console.log(colors.yellow(`[${sessionName}] ⏰ Tentando novamente em ${RETRY_DELAY/1000} segundos...`));
                    
                    setTimeout(() => {
                        this.processSession(sessionName);
                    }, RETRY_DELAY);
                } else {
                    console.log(colors.red(`[${sessionName}] ⏹️  Máximo de tentativas atingido.`));
                    
                    // Ainda assim, agendar uma nova tentativa após um tempo maior
                    setTimeout(() => {
                        console.log(colors.yellow(`[${sessionName}] 🔄 Tentando reconexão após timeout...`));
                        this.retryCounts.delete(sessionName);
                        this.processSession(sessionName);
                    }, 300000);
                }
            }
            
        } catch (error) {
            console.error(colors.red(`[${sessionName}] ❌ Erro ao processar sessão:`), error);
        } finally {
            // Remover da lista de sessões em conexão
            this.connectingSessions.delete(sessionName);
        }
    }

    // 🔹 Tratar sessão desconectada
    async handleDisconnectedSession(sessionName, reason = 'desconexão detectada', keepCreds = true) {
        try {
            if (this.reconnectionInProgress.has(sessionName)) {
                console.log(colors.gray(`[${sessionName}] ⏳ Reconexão já em andamento, ignorando...`));
                return;
            }
            
            this.reconnectionInProgress.add(sessionName);
            
            const session = this.sessions.get(sessionName);
            
            console.log(colors.yellow(`\n[${sessionName}] 🔄 Tratando desconexão: ${reason}`));
            
            // DETECTAR TIPO DE ERRO
            const isConflict = reason.includes('conflict') || 
                              reason.includes('Conectado em outro dispositivo');
            
            const isAuthError = reason.includes('401') || 
                               reason.includes('403') || 
                               reason.includes('Not Authorized');
            const isRestart = reason.includes('restart') || reason.includes('Terminated') || reason.includes('ack') || reason.includes('unknown') || reason.includes('xml-not-well-formed)')
            
            
            // DECISÃO: MANTER OU REMOVER CREDS?
            let shouldKeepCreds = keepCreds;
            
            if (isAuthError) {
                console.log(colors.red(`[${sessionName}] 🔐 ERRO DE AUTH: Removendo credenciais`));
                shouldKeepCreds = false;
            } else if (isRestart) {
                console.log(colors.yellow(`[${sessionName}] 🔄 RESTART: Mantendo credenciais`));
                shouldKeepCreds = true;
            } else if (isConflict) {
                console.log(colors.yellow(`[${sessionName}] ⚠️  CONFLITO: Mantendo credenciais`));
                shouldKeepCreds = true;
            }
            
            // FECHAR SOCKET
            if (session?.socket) {
                try {
                    if (session.socket.end) session.socket.end();
                    console.log(colors.gray(`[${sessionName}] Socket fechado`));
                } catch (e) {}
            }
            
            // LIMPEZA DE ARQUIVOS SE NECESSÁRIO
            if (!shouldKeepCreds) {
                console.log(colors.yellow(`[${sessionName}] 🧹 Limpando credenciais...`));
                
                const sessionPath = path.join(__dirname, 'public/database/qr-code', sessionName);
                if (fs.existsSync(sessionPath)) {
                    try {
                        const filesToDelete = [
                            'app-state-sync-version.json', 
                            'app-state-sync-key-id.json',
                            'creds.json'
                        ];
                        
                        filesToDelete.forEach(file => {
                            const filePath = path.join(sessionPath, file);
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                                console.log(colors.gray(`[${sessionName}] Removido: ${file}`));
                            }
                        });
                    } catch (e) {}
                }
            }
            
            // ATUALIZAR STATUS
            let statusMessage = reason;
            let requiresNewQR = false;
            
            if (isAuthError) {
                statusMessage = 'Sessão expirada - necessário novo QR Code';
                requiresNewQR = true;
            } else if (isConflict) {
                statusMessage = 'Conflito detectado - reconectando...';
            } else if (isRestart) {
                statusMessage = 'Reinício necessário...';
            }
            
            this.updateSessionStatus(sessionName, {
                status: 'error',
                message: statusMessage,
                disconnectedAt: new Date().toISOString(),
                requiresReconnect: true,
                requiresNewQR: requiresNewQR
            });
            
            // TEMPOS DE RECONEXÃO
            let reconnectDelay = 60000; // 15s padrão
            
            if (isAuthError) {
                reconnectDelay = 10000; // 10s
            } else if (isConflict) {
                reconnectDelay = 15000; // 45s
            } else if (isRestart) {
                reconnectDelay = 10000; // 10s
            }
            
            console.log(colors.yellow(`[${sessionName}] 🔄 Reconexão em ${reconnectDelay/1000}s`));
            
          
            
            // LIMPAR SESSÃO LOCAL
            if (session) {
                this.sessions.delete(sessionName);
            }
            
            // AGENDAR RECONEXÃO
            setTimeout(async () => {
                try {
                    this.reconnectionInProgress.delete(sessionName);
                    console.log(colors.cyan(`[${sessionName}] 🚀 Iniciando reconexão...`));
                    await this.processSession(sessionName);
                } catch (error) {
                    console.error(colors.red(`[${sessionName}] Erro na reconexão:`), error.message);
                    this.reconnectionInProgress.delete(sessionName);
                }
            }, reconnectDelay);
            
        } catch (error) {
            console.error(colors.red(`[${sessionName}] Erro ao tratar desconexão:`), error);
            this.reconnectionInProgress.delete(sessionName);
        }
    }

    // 🔹 Atualizar status da sessão
    updateSessionStatus(sessionName, data) {
        const statusFile = path.join(__dirname, 'public/database/qr-code', sessionName, 'status.json');
        
        try {
            let status = {};
            if (fs.existsSync(statusFile)) {
                status = JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
            }
            
            status = { ...status, ...data, lastUpdate: new Date().toISOString() };
            fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
            
        } catch (error) {
            console.error(colors.red(`[${sessionName}] Erro ao atualizar status:`), error);
        }
    }

    // 🔹 Forçar verificação de uma sessão
    async forceCheckSession(sessionName) {
        await this.processSession(sessionName);
    }

    // 🔹 Obter status de uma sessão
    getSessionStatus(sessionName) {
        const sessionPath = path.join(__dirname, 'public/database/qr-code', sessionName);
        const statusFile = path.join(sessionPath, 'status.json');
        const pairingFile = path.join(sessionPath, 'pairing-code.json');
        const configFile = path.join(sessionPath, 'config.json');
        
        let status = { status: 'unknown', message: 'Não encontrada' };
        let pairing = { code: null };
        let config = { active: true };
        
        try {
            if (fs.existsSync(statusFile)) {
                status = JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
            }
            if (fs.existsSync(pairingFile)) {
                pairing = JSON.parse(fs.readFileSync(pairingFile, 'utf-8'));
            }
            if (fs.existsSync(configFile)) {
                config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
            }
        } catch (e) {
            console.error(`Erro ao ler arquivos da sessão ${sessionName}:`, e);
        }
        
        return { 
            status, 
            pairing, 
            config,
            isActive: this.sessions.has(sessionName) && this.sessions.get(sessionName).connected,
            retryCount: this.retryCounts.get(sessionName) || 0
        };
    }

    // 🔹 Obter estatísticas
    getStats() {
        const connected = Array.from(this.sessions.values()).filter(s => s.connected).length;
        const retrying = Array.from(this.retryCounts.values()).filter(count => count > 0).length;
        
        return {
            total: this.sessions.size,
            connected: connected,
            retrying: retrying,
            maxRetries: MAX_RETRY_ATTEMPTS
        };
    }
}

// Criar instância do gerenciador
const sessionManager = new SimpleSessionManager();

// 🔹 FUNÇÃO ATUALIZADA: INICIAR SABRINA (CONECTA MÚLTIPLAS SESSÕES)

// 🔥🔥🔥 FUNÇÃO ESPECÍFICA PARA CORRIGIR "BAD MAC"
async function corrigirBadMAC(sessionName, errorMessage) {
    console.log(colors.red(`\n[${sessionName}] 🚨 DETECTADO BAD MAC ERROR`));
    console.log(colors.yellow(`[${sessionName}] 📋 Erro: ${errorMessage}`));
    
    const folderPath = `./public/database/qr-code/${sessionName}`;
    
    if (!fs.existsSync(folderPath)) {
        console.log(colors.red(`[${sessionName}] ❌ Pasta não existe`));
        return false;
    }
    
    try {
        // 🔥 LISTA COMPLETA DE ARQUIVOS PARA REMOVER EM CASO DE BAD MAC
        const arquivosCorrompidos = [
            'creds.json',
            'app-state-sync-version.json',
            'app-state-sync-key-id.json',
            'pre-key-*',
            'sender-key-*', 
            'session-*',
            'signal-*',
            'key-*',
            '*.session',
            '*.session-journal',
            '*.prekey',
            '*.senderkey'
        ];
        
        console.log(colors.yellow(`[${sessionName}] 🧹 Iniciando limpeza completa de BAD MAC...`));
        
        let arquivosRemovidos = [];
        
        // Ler todos os arquivos da pasta
        const files = fs.readdirSync(folderPath);
        
        for (const file of files) {
            try {
                const filePath = path.join(folderPath, file);
                const stats = fs.statSync(filePath);
                
                if (!stats.isFile()) continue;
                
                // Verificar se deve remover
                let deveRemover = false;
                
                for (const pattern of arquivosCorrompidos) {
                    if (pattern.includes('*')) {
                        const regex = new RegExp(pattern.replace('*', '.*'));
                        if (regex.test(file)) {
                            deveRemover = true;
                            break;
                        }
                    } else if (file === pattern) {
                        deveRemover = true;
                        break;
                    }
                }
                
                // Remover arquivos de keystore corrompidos
                if (!deveRemover) {
                    // Verificar extensões problemáticas
                    const extensoesProblema = ['.session', '.prekey', '.senderkey', '.session-journal'];
                    const temExtensaoProblema = extensoesProblema.some(ext => file.endsWith(ext));
                    
                    // Verificar se é arquivo de keystore (geralmente começa com números ou tem formato específico)
                    const isKeystoreFile = /^\d+-\d+@s\.whatsapp\.net/.test(file) || 
                                          /^.+@.+\..+\.session/.test(file) ||
                                          /^.+\.(session|prekey|senderkey)$/.test(file);
                    
                    if (temExtensaoProblema || isKeystoreFile) {
                        deveRemover = true;
                    }
                }
                
                if (deveRemover) {
                    fs.unlinkSync(filePath);
                    arquivosRemovidos.push(file);
                    console.log(colors.gray(`[${sessionName}] 🗑️  Removido: ${file}`));
                }
                
            } catch (e) {
                // Ignorar erros em arquivos específicos
            }
        }
        
        if (arquivosRemovidos.length === 0) {
            // Se não encontrou arquivos específicos, tenta remover tudo exceto config e status
            console.log(colors.yellow(`[${sessionName}] ⚠️  Nenhum arquivo específico encontrado, limpando via exec...`));
            
            try {
                exec(`cd ${folderPath} && find . -maxdepth 1 -type f ! -name "config.json" ! -name "status.json" ! -name "pairing-code.json" -delete`, (error) => {
                    if (!error) {
                        console.log(colors.green(`[${sessionName}] ✅ Limpeza completa executada via find`));
                    }
                });
            } catch (e) {
                console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza via exec:`), e.message);
            }
        } else {
            console.log(colors.green(`[${sessionName}] ✅ ${arquivosRemovidos.length} arquivos corrompidos removidos`));
        }
        
        // 🔥 CRIAR NOVO ARQUIVO DE CONFIG COM FLAG DE BAD MAC RESOLVIDO
        const configFile = path.join(folderPath, 'config.json');
        let config = {};
        
        if (fs.existsSync(configFile)) {
            try {
                config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
            } catch (e) {
                config = {};
            }
        }
        
        config.badMacFixed = true;
        config.badMacFixedAt = new Date().toISOString();
        config.lastError = 'Bad MAC (resolvido)';
        config.requiresNewAuth = true;
        
        fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
        
        // 🔥 ATUALIZAR STATUS
        atualizarStatus(sessionName, {
            status: 'bad_mac_fixed',
            message: 'Erro Bad MAC resolvido - necessário novo QR Code',
            badMacFixed: true,
            fixedAt: new Date().toISOString(),
            filesRemoved: arquivosRemovidos,
            requiresNewQR: true
        });
        
        console.log(colors.green(`\n[${sessionName}] ✅ BAD MAC CORRIGIDO!`));
        console.log(colors.cyan(`[${sessionName}] 📱 Agora é necessário ler um NOVO QR Code`));
        
        return true;
        
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro ao corrigir Bad MAC:`), error.message);
        return false;
    }
}


async function iniciarSabrina(sessionName, numero, viaSite = false) {
    const folderUserAuth = `./public/database/qr-code/${sessionName}`;
    const bloqueiosPath = path.join(__dirname, 'bloqueios-delecao.json');
    
    // Verificar se a sessão está bloqueada para deleção
    let isBloqueada = false;
    let bloqueioInfo = null;
    
    try {
        if (fs.existsSync(bloqueiosPath)) {
            const bloqueios = JSON.parse(fs.readFileSync(bloqueiosPath, 'utf-8'));
            bloqueioInfo = bloqueios[sessionName];
            
            if (bloqueioInfo) {
                const agora = Date.now();
                const expiraEm = bloqueioInfo.expiraEm;
                
                if (agora < expiraEm) {
                    // Ainda está dentro do período de bloqueio
                    isBloqueada = true;
                    const minutosRestantes = Math.ceil((expiraEm - agora) / (60 * 1000));
                    
                    console.log(colors.yellow(`[${sessionName}] ⚠️  Sessão bloqueada por ${minutosRestantes} minutos`));
                    console.log(colors.yellow(`[${sessionName}] ℹ️  Deletada em: ${new Date(bloqueioInfo.deletadoEm).toLocaleString()}`));
                    console.log(colors.yellow(`[${sessionName}] ℹ️  Expira em: ${new Date(expiraEm).toLocaleString()}`));
                    
                    // Se o bloqueio já expirou, removê-lo
                    if (agora > expiraEm) {
                        delete bloqueios[sessionName];
                        fs.writeFileSync(bloqueiosPath, JSON.stringify(bloqueios, null, 2));
                        isBloqueada = false;
                        console.log(colors.green(`[${sessionName}] ✅ Bloqueio expirado, removido`));
                    }
                } else {
                    // Bloqueio expirado, remover
                    delete bloqueios[sessionName];
                    fs.writeFileSync(bloqueiosPath, JSON.stringify(bloqueios, null, 2));
                    console.log(colors.green(`[${sessionName}] ✅ Bloqueio expirado, removido`));
                }
            }
        }
    } catch (e) {
        console.error('Erro ao ler bloqueios-delecao.json:', e.message);
    }
    
    // 🔴 SE ESTIVER BLOQUEADA, IMPEDIR A CRIAÇÃO/RECONEXÃO
    if (isBloqueada) {
        console.log(colors.red(`[${sessionName}] ❌ CONEXÃO BLOQUEADA - Sessão deletada recentemente`));
        console.log(colors.yellow(`[${sessionName}] ⏳ Aguarde ${Math.ceil((bloqueioInfo.expiraEm - Date.now()) / (60 * 1000))} minutos`));
        
        atualizarStatus(sessionName, {
            status: 'blocked',
            message: `Sessão bloqueada. Expira em ${new Date(bloqueioInfo.expiraEm).toLocaleTimeString()}`,
            timestamp: new Date().toISOString(),
            bloqueadoAte: new Date(bloqueioInfo.expiraEm).toISOString(),
            deletadoPor: bloqueioInfo.deletadoPor,
            deletadoEm: new Date(bloqueioInfo.deletadoEm).toISOString()
        });
        
        // Lançar erro para impedir a conexão
        throw new Error(`Sessão bloqueada até ${new Date(bloqueioInfo.expiraEm).toLocaleTimeString()}`);
    }
    
    // Criar pasta se não existir  
    if (!fs.existsSync(folderUserAuth)) {  
        fs.mkdirSync(folderUserAuth, { recursive: true });  
    }  

    // Criar arquivos padrão se não existirem  
    const configFile = path.join(folderUserAuth, 'config.json');  
    if (!fs.existsSync(configFile)) {  
        const defaultConfig = {  
            numero: numero || sessionName,  
            active: true,  
            status: 'pending',  
            createdAt: new Date().toISOString(),  
            isLegacy: true // Marcar como sessão antiga  
        };  
        fs.writeFileSync(configFile, JSON.stringify(defaultConfig, null, 2));  
    }  

    const statusFile = path.join(folderUserAuth, 'status.json');  
    if (!fs.existsSync(statusFile)) {  
        const defaultStatus = {  
            session: sessionName,  
            numero: numero || sessionName,  
            status: 'connecting',  
            message: 'Conectando...',  
            timestamp: new Date().toISOString()  
        };  
        fs.writeFileSync(statusFile, JSON.stringify(defaultStatus, null, 2));  
    }  

    // Atualizar status inicial  
    atualizarStatus(sessionName, {  
        status: 'connecting',  
        message: 'Conectando ao WhatsApp...',  
        timestamp: new Date().toISOString()  
    });  

    try {  
// ===== FILTRO PARA REMOVER APENAS ERROS "Bad MAC" =====
// Coloque isso ANTES de qualquer outro código
const originalConsoleError = console.error;
console.error = function(...args) {
    // Converte todos os argumentos para string para verificar
    const errorMessage = args.map(arg => {
        if (arg instanceof Error) return arg.message;
        if (arg && typeof arg === 'object') {
            try {
                return JSON.stringify(arg);
            } catch {
                return String(arg);
            }
        }
        return String(arg);
    }).join(' ');
    
    // Só ignora se for exatamente o erro de Bad MAC
    if (errorMessage.includes('Bad MAC') || 
        (errorMessage.includes('Session error') && errorMessage.includes('Bad MAC')) ||
        (errorMessage.includes('connection') && errorMessage.includes('MAC'))) {
        return; // Ignora apenas esse erro específico
    }
    
    // Para tudo que NÃO for Bad MAC, mostra normalmente
    originalConsoleError.apply(console, args);
};

// ===== SEU CÓDIGO ORIGINAL (sem alterações) =====
const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);  
const { version } = await fetchLatestBaileysVersion();  

console.log(colors.cyan(`[${sessionName}] Conectando...`));  

const useMobile = process.argv.includes("--mobile");  
const samá = makeWASocket({  
    logger: pino({ level: 'silent' }),  
    printQRInTerminal: false,  
    browser: ['Mac OS', 'Safari', '10.15.7'],  
    patchMessageBeforeSending: (message) => {  
        const requiresPatch = !!(  
            message.buttonsMessage ||  
            message.templateMessage ||  
            message.listMessage  
        );  
        if (requiresPatch) {  
            message = {  
                viewOnceMessage: {  
                    message: {  
                        messageContextInfo: {  
                            deviceListMetadataVersion: 2,  
                            deviceListMetadata: {},  
                        },  
                        ...message,  
                    },  
                },  
            };  
        }  
        return message;  
    },  
    auth: {  
        creds: state.creds,  
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }).child({ level: "fatal" }))  
    },  
    markOnlineOnConnect: true,  
    mobile: useMobile,  
    generateHighQualityLinkPreview: true,  
    msgRetryCounterCache,  
    connectTimeoutMs: 30000 // Timeout de conexão  
});

// ===== FILTRO ADICIONAL PARA EVENTOS DO SOCKET =====
// Isso vai capturar erros que venham através do event emitter
if (samá && samá.ev) {
    const originalEmit = samá.ev.emit;
    samá.ev.emit = function(event, ...args) {
        // Ignora apenas erros de Bad MAC nos eventos
        if (event === 'connection.update' && args[0]?.error?.message?.includes('Bad MAC')) {
            return; // Ignora
        }
        if (event === 'error' && args[0]?.message?.includes('Bad MAC')) {
            return; // Ignora
        }
        return originalEmit.apply(this, [event, ...args]);
    };
}
        // Cache de metadata de grupo  
        samá.cachedGroupMetadata = async (jid) => {  
            if (groupCache.has(jid)) return groupCache.get(jid);  
            try {  
                const metadata = await samá.groupMetadata(jid);  
                groupCache.set(jid, metadata);  
                setTimeout(() => groupCache.delete(jid), 5 * 60 * 1000);  
                return metadata;  
            } catch (err) {  
                console.error('Erro ao buscar groupMetadata:', err.message);  
                return null;  
            }  
        };  

        samá.ev.on('creds.update', saveCreds);  

        // Promessa simplificada para controle de conexão  
        return new Promise((resolve, reject) => {  
            let isResolved = false;  
            let pairingCodeRequested = false;  
            let connectionTimeout;  

            // Timeout geral  
            connectionTimeout = setTimeout(() => {  
                if (!isResolved) {  
                    console.error(colors.red(`[${sessionName}] ⏱️  Timeout de conexão`));  
                    try {  
                        samá.end();  
                    } catch (e) {}  

                    if (!isResolved) {  
                        isResolved = true;  
                        reject(new Error('Timeout de conexão (45s)'));  
                    }  
                }  
            }, 45000);  

            // Handler de conexão SIMPLIFICADO  
            const connectionHandler = async (update) => {  
                const { connection, lastDisconnect, qr } = update;  

                // 🔹 GERAR CÓDIGO DE PARING  
                if (qr && !pairingCodeRequested && !isResolved) {  
                    pairingCodeRequested = true;  

                    try {  
                        atualizarStatus(sessionName, {  
                            status: 'pairing',  
                            message: 'Gerando código de pareamento...',  
                            timestamp: new Date().toISOString()  
                        });  

                        // Solicita código de pareamento  
                        let code = await samá.requestPairingCode((numero || sessionName).replace(/\D/g, ""));  
                        code = code?.match(/.{1,4}/g)?.join('-') || code;  

                        // 🔹 EXIBIR NO CONSOLE  
                        console.log(colors.yellow(`\n════════════════════════════════════════`));  
                        console.log(colors.green(`[${sessionName}] CÓDIGO PARA CONECTAR:`));  
                        console.log(colors.cyan(`📱 Número: ${numero || sessionName}`));  
                        console.log(colors.white(`🔢 Código: ${code}`));  
                        console.log(colors.yellow(`════════════════════════════════════════\n`));  

                        // 🔹 SALVAR EM ARQUIVO  
                        atualizarStatus(sessionName, {  
                            status: 'code_ready',  
                            message: 'Código gerado com sucesso!',  
                            code: code,  
                            numero: numero || sessionName,  
                            session: sessionName,  
                            timestamp: new Date().toISOString()  
                        });  

                        // Salvar também em arquivo separado  
                        const codeFile = path.join(folderUserAuth, 'pairing-code.json');  
                        fs.writeFileSync(codeFile, JSON.stringify({  
                            session: sessionName,  
                            numero: numero || sessionName,  
                            code: code,  
                            timestamp: new Date().toISOString(),  
                            expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString()  
                        }, null, 2));  

                    } catch (err) {  
                        console.error(colors.red(`[${sessionName}] ❌ Falha no código:`), err.message);  
                        atualizarStatus(sessionName, {  
                            status: 'pairing_error',  
                            message: `Erro ao gerar código: ${err.message}`,  
                            error: err.message,  
                            timestamp: new Date().toISOString()  
                        });  
                        // Não rejeita aqui, continua esperando conexão  
                    }  
                }  

                // 🔹 CONEXÃO ABERTA - SUCESSO!  
                if (connection === 'open' && !isResolved) {  
                    clearTimeout(connectionTimeout);  
                    isResolved = true;  

                    console.log(colors.green(`[${sessionName}] ✅ Conectado com sucesso!`));  
                    verificarEliminarCorrompidos(sessionName, folderUserAuth);  

                    // 🔹 ADICIONAR HANDLER PARA DESCONEXÕES
                    const disconnectHandler = (update) => {  
                        const { connection: connStatus, lastDisconnect } = update;  

                        // 🔴 DETECTAR DESCONEXÃO  
                        if (connStatus === 'close') {  
                            const error = lastDisconnect?.error;  
                            const errorMessage = error?.message || 'Desconexão não especificada';  

                            console.log(colors.red(`\n[${sessionName}] 🔴 DESCONECTADO: ${errorMessage}`));  

                            // =============== ANÁLISE DO TIPO DE ERRO ===============  
                            const isConflict = errorMessage.includes('conflict') ||   
                                              errorMessage.includes('Conectado em outro dispositivo') ||  
                                              errorMessage.includes('Stream Errored (conflict)');  

                            const isAuthError = errorMessage.includes('401') ||   
                                               errorMessage.includes('403') ||   
                                               errorMessage.includes('Not Authorized') ||  
                                               errorMessage.includes('logout') ||  
                                               errorMessage.includes('Unauthorized');  

                      
                       const isRestart = errorMessage.includes('restart') || errorMessage.includes('Terminated') || errorMessage.includes('(ack)') || errorMessage.includes('unknown')  || errorMessage.includes('xml-not-well-formed)')

                            // =============== CONFLITO ===============  
                            if (isConflict) {  
                                console.log(colors.yellow(`\n[${sessionName}] ⚠️  CONFLITO DETECTADO!`));  
                                console.log(colors.yellow(`[${sessionName}] ℹ️  Aguardando 45 segundos para reconectar...`));  

                                setTimeout(() => {  
                                    console.log(colors.cyan(`[${sessionName}] 🚀 Tentando reconexão após conflito...`));  

                                    if (sessionManager && sessionManager.handleDisconnectedSession) {  
                                        // MANTER credenciais para conflito  
                                        sessionManager.handleDisconnectedSession(  
                                            sessionName,   
                                            `Conflito: ${errorMessage}`,  
                                            true // keepCreds = true  
                                        );  
                                    }  
                                }, 45000);  
                            }   
                            // =============== ERRO DE AUTENTICAÇÃO ===============  
                            else if (isAuthError) {  
                                console.log(colors.red(`\n[${sessionName}] 🔐 ERRO DE AUTENTICAÇÃO!`));  
                                console.log(colors.yellow(`[${sessionName}] ❌ Sessão expirada/inválida - será necessário novo QR Code`));  

                                // Esperar pouco e limpar credenciais  
                                setTimeout(() => {  
                                    if (sessionManager && sessionManager.handleDisconnectedSession) {  
                                        // NÃO manter credenciais para auth errors  
                                        sessionManager.handleDisconnectedSession(  
                                            sessionName,   
                                            `Auth Error: ${errorMessage}`,  
                                            false // keepCreds = false (limpar tudo)  
                                        );  
                                    }  
                                }, 5000);  
                            }  
                            // =============== RESTART ===============  
                            else if (isRestart) {  
                                console.log(colors.yellow(`[${sessionName}] 🔄 Restart necessário`));  

                                setTimeout(() => {  
                                    console.log(colors.cyan(`[${sessionName}] 🚀 Chamando forceCheckSession...`));  
                                    if (sessionManager && sessionManager.forceCheckSession) {  
                                        sessionManager.forceCheckSession(sessionName);  
                                    }  
                                }, 10000);  
                            }   
                            // =============== OUTROS ERROS ===============  
                            else {  
                                console.log(colors.yellow(`[${sessionName}] 📱 Outro erro - reconexão em 15s`));  

                                setTimeout(() => {  
                                    if (sessionManager && sessionManager.handleDisconnectedSession) {  
                                        // Para outros erros, manter creds por padrão  
                                        sessionManager.handleDisconnectedSession(  
                                            sessionName,   
                                            errorMessage,  
                                            true // keepCreds = true  
                                        );  
                                    }  
                                }, 15000);  
                            }  

                            // 🔹 REMOVER HANDLER  
                            try {  
                                samá.ev.off('connection.update', disconnectHandler);  
                            } catch (e) {  
                                // Ignorar  
                            }  
                        }  
                    };  

                    // 🔹 REGISTRAR HANDLER  
                    samá.ev.on('connection.update', disconnectHandler);  

                    // 🔹 TAMBÉM MONITORAR EVENTOS DE CREDENCIAIS (para detectar logout)  
                    samá.ev.on('creds.update', (creds) => {
    // 🔐 Detecta remoção de identidade (logout real)
    const isLoggedOut = !creds?.me?.id;

    if (!isLoggedOut) return;

    console.log(colors.yellow(
        `[${sessionName}] 🔑 Logout detectado — credenciais removidas pelo WhatsApp`
    ));

    // 🧹 Limpeza preventiva de dados corrompidos
    try {
        verificarEliminarCorrompidos(sessionName, folderUserAuth);
        console.log(colors.gray(
            `[${sessionName}] 🧹 Dados locais verificados e saneados`
        ));
    } catch (err) {
        console.error(colors.red(
            `[${sessionName}] ❌ Falha ao limpar sessão: ${err.message}`
        ));
    }

    // 📡 Atualizar status global da sessão
    atualizarStatus(sessionName, {
        status: 'connected',
        reason: 'user_logout',
        message: 'Sessão iniciada pelo usuário no WhatsApp',
        timestamp: new Date().toISOString()
    });

    // 🧠 Observação de ciclo de vida
    console.log(colors.yellow(
        `[${sessionName}] 🔒 Sessão finalizada — aguardando nova autenticação`
    ));
});

                    // Atualizar status  
                    atualizarStatus(sessionName, {  
                        status: 'connected',  
                        message: 'Conectado com sucesso!',  
                        connectedAt: new Date().toISOString(),  
                        user: samá.user ? {  
                            id: samá.user.id,  
                            name: samá.user.name  
                        } : null  
                    });  

                    // Limpar arquivo de código  
                    const codeFile = path.join(folderUserAuth, 'pairing-code.json');  
                    if (fs.existsSync(codeFile)) {  
                        fs.writeFileSync(codeFile, JSON.stringify({  
                            session: sessionName,  
                            numero: numero || sessionName,  
                            status: 'connected',  
                            connectedAt: new Date().toISOString()  
                        }, null, 2));  
                    }  

                    // Iniciar processamento de mensagens  
                    iniciarProcessamentoMensagens(samá, sessionName);  

                    resolve(samá);  
                }  

                // 🔹 DESCONEXÃO - FALHA DURANTE A CONEXÃO INICIAL  
                if (connection === 'close' && lastDisconnect?.error && !isResolved) {  
                    clearTimeout(connectionTimeout);  

                    const errorMsg = lastDisconnect.error?.message || lastDisconnect.error || 'Erro desconhecido';  
                    console.log(colors.red(`[${sessionName}] ❌ Desconectado: ${errorMsg}`));  

                    if (errorMsg.includes('restart')) {  
                        console.log(colors.yellow(`[${sessionName}] 🔄 ERRO ESPECÍFICO DETECTADO - USANDO forceCheckSession`));  

                        // 🔹 CHAMAR forceCheckSession DIRETAMENTE  
                        setTimeout(() => {  
                            console.log(colors.cyan(`[${sessionName}] 🚀 Chamando forceCheckSession...`));  
                            if (sessionManager && sessionManager.forceCheckSession) {  
                                sessionManager.forceCheckSession(sessionName);  
                            }  
                        }, 5000);  
                    }  

                    // Atualizar status  
                    atualizarStatus(sessionName, {  
                        status: 'error',  
                        message: `Desconectado: ${errorMsg}`,  
                        lastDisconnect: errorMsg,  
                        timestamp: new Date().toISOString()  
                    });  

                    if (!isResolved) {  
                        isResolved = true;  
                        reject(new Error(`Desconectado: ${errorMsg}`));  
                    }  

                    // Notificar session manager para reconexão  
                    if (sessionManager && sessionManager.handleDisconnectedSession) {  
                        setTimeout(() => {  
                            sessionManager.handleDisconnectedSession(sessionName, errorMsg, true);  
                        }, 5000);  
                    }  
                }  
            };  

            // Registrar handler principal  
            samá.ev.on('connection.update', connectionHandler);  

            // Configurar cleanup em caso de erro  
            samá.ev.on('connection.update', (update) => {  
                if (update.connection === 'close' && !update.lastDisconnect && !isResolved) {  
                    clearTimeout(connectionTimeout);  
                    if (!isResolved) {  
                        isResolved = true;  
                        reject(new Error('Conexão fechada inesperadamente'));  
                    }  
                }  
            });  
        });  

    } catch (error) {  
        console.error(colors.red(`[${sessionName}] ❌ Erro fatal:`), error.message);  

        atualizarStatus(sessionName, {  
            status: 'error',  
            message: `Erro fatal: ${error.message}`,  
            error: error.message,  
            timestamp: new Date().toISOString()  
        });  

        throw error;  
    }  
}

// Função auxiliar para verificar bloqueios
function verificarBloqueio(sessionName) {
    const bloqueiosPath = path.join(__dirname, 'bloqueios-delecao.json');
    
    if (!fs.existsSync(bloqueiosPath)) {
        return false;
    }
    
    try {
        const bloqueios = JSON.parse(fs.readFileSync(bloqueiosPath, 'utf-8'));
        const bloqueioInfo = bloqueios[sessionName];
        
        if (!bloqueioInfo) {
            return false;
        }
        
        const agora = Date.now();
        const expiraEm = bloqueioInfo.expiraEm;
        
        if (agora < expiraEm) {
            return {
                bloqueado: true,
                expiraEm,
                minutosRestantes: Math.ceil((expiraEm - agora) / (60 * 1000)),
                info: bloqueioInfo
            };
        } else {
            // Bloqueio expirado, remover
            delete bloqueios[sessionName];
            fs.writeFileSync(bloqueiosPath, JSON.stringify(bloqueios, null, 2));
            return false;
        }
    } catch (e) {
        console.error('Erro ao verificar bloqueio:', e.message);
        return false;
    }
}

// Adicionar esta função ao sessionManager para verificar antes de reconectar
// sessionManager.handleDisconnectedSession = async function(sessionName, reason, keepCreds) {
//     // Verificar se está bloqueado
//     const bloqueio = verificarBloqueio(sessionName);
//     if (bloqueio && bloqueio.bloqueado) {
//         console.log(colors.red(`[${sessionName}] ❌ RECONEXÃO BLOQUEADA - Sessão deletada recentemente`));
//         console.log(colors.yellow(`[${sessionName}] ⏳ Aguarde ${bloqueio.minutosRestantes} minutos`));
//         return;
//     }
//     
//     // ... resto da lógica de reconexão
// }
// Funções auxiliares (certifique-se de que existem)
function atualizarStatus(sessionName, data) {
    const statusFile = `./public/database/qr-code/${sessionName}/status.json`;
    try {
        let current = {};
        if (fs.existsSync(statusFile)) {
            current = JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
        }
        const updated = { ...current, ...data };
        fs.writeFileSync(statusFile, JSON.stringify(updated, null, 2));
    } catch (error) {
        console.error(`Erro ao atualizar status: ${error.message}`);
    }
}

function verificarEliminarCorrompidos(sessionName, folderPath) {
    try {
        const files = ['pairing-code.json'];
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            if (fs.existsSync(filePath)) {
                try {
                    const content = fs.readFileSync(filePath, 'utf-8');
                    JSON.parse(content);
                } catch (e) {
                    console.log(colors.yellow(`[${sessionName}] Removendo arquivo corrompido: ${file}`));
                    fs.unlinkSync(filePath);
                }
            }
        });
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza:`), error.message);
    }
}

// 11. FUNÇÃO AUXILIAR PARA VERIFICAR E LIMPAR ARQUIVOS (se já existir)
function verificarEliminarCorrompidos(sessionName, folderPath) {
    try {
        const files = ['pairing-code.json', 'qrcode.txt', 'creds.json'];
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            if (fs.existsSync(filePath)) {
                try {
                    if (file.endsWith('.json')) {
                        const content = fs.readFileSync(filePath, 'utf-8');
                        JSON.parse(content);
                    }
                } catch (e) {
                    console.log(colors.yellow(`[${sessionName}] 🧹 Removendo arquivo corrompido: ${file}`));
                    fs.unlinkSync(filePath);
                }
            }
        });
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza:`), error.message);
    }
}
// 🔥 FUNÇÕES AUXILIARES ADICIONAIS
async function realizarLimpezaPreventiva(sessionName, folderPath) {
    try {
        if (!fs.existsSync(folderPath)) return;
        
        console.log(colors.gray(`[${sessionName}] 🧼 Limpeza preventiva...`));
        
        // Verificar e limpar arquivos temporários antigos
        const agora = Date.now();
        const files = fs.readdirSync(folderPath);
        let limpos = 0;
        
        for (const file of files) {
            try {
                const filePath = path.join(folderPath, file);
                const stats = fs.statSync(filePath);
                
                // Remover arquivos temporários com mais de 1 hora
                if (file.includes('.tmp') || file.includes('.temp') || 
                    file.includes('.session-journal')) {
                    const idade = agora - stats.mtimeMs;
                    if (idade > 3600000) { // 1 hora
                        fs.unlinkSync(filePath);
                        limpos++;
                        console.log(colors.gray(`[${sessionName}] 🧹 Limpo: ${file}`));
                    }
                }
                
                // Verificar arquivos corrompidos (tamanho 0)
                if (stats.size === 0) {
                    fs.unlinkSync(filePath);
                    limpos++;
                    console.log(colors.yellow(`[${sessionName}] 🗑️  Removido arquivo vazio: ${file}`));
                }
                
            } catch (e) {
                // Ignorar
            }
        }
        
        if (limpos > 0) {
            console.log(colors.green(`[${sessionName}] ✅ ${limpos} arquivos limpos preventivamente`));
        }
        
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza preventiva:`), error.message);
    }
}

async function verificarSaudeConexao(socket, sessionName) {
    try {
        if (!socket.user?.id) {
            console.log(colors.yellow(`[${sessionName}] ⚠️  Health check falhou: sem user ID`));
            return false;
        }
        
        // Teste simples de presença
        await socket.sendPresenceUpdate('available');
        
        // Atualizar timestamp de atividade
        const statusFile = path.join(__dirname, 'public/database/qr-code', sessionName, 'status.json');
        if (fs.existsSync(statusFile)) {
            try {
                const status = JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
                status.lastHeartbeat = new Date().toISOString();
                fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
            } catch (e) {}
        }
        
        return true;
        
    } catch (error) {
        console.log(colors.yellow(`[${sessionName}] ⚠️  Health check falhou: ${error.message}`));
        return false;
    }
}
async function verificarElimparCorrompidos(sessionName, folderPath, diasAntigos = 1) {
    try {
        if (!fs.existsSync(folderPath)) {
            console.log(colors.gray(`[${sessionName}] 📁 Pasta não existe`));
            return 0;
        }
        
        const files = fs.readdirSync(folderPath);
        let arquivosRemovidos = 0;
        const agora = Date.now();
        const limiteMs = diasAntigos * 24 * 60 * 60 * 1000; // Converter dias para milissegundos
        
        console.log(colors.cyan(`[${sessionName}] 🔍 Procurando arquivos antigos (mais de ${diasAntigos} dias)...`));
        
        for (const file of files) {
            try {
                // VERIFICAÇÃO SIMPLES - verifica se começa com algum dos padrões
                const deveVerificar = (
                    file.startsWith('lid-mapping-') ||
                    file.startsWith('device-list-') ||
                    file.startsWith('pre-key-') ||
                    file.startsWith('sender-key-') ||
                    file.startsWith('session-') ||
                    file === 'app-state-sync-version.json' ||
                    file === 'app-state-sync-key-id.json'
                );
                
                if (!deveVerificar) {
                    continue;
                }
                
                const filePath = path.join(folderPath, file);
                const stats = fs.statSync(filePath);
                const modificado = stats.mtimeMs; // Data da última modificação
                const idadeDias = Math.floor((agora - modificado) / (1000 * 60 * 60 * 24));
                
                // Verifica se o arquivo é antigo
                if ((agora - modificado) > limiteMs) {
                    // Verifica se é JSON válido antes de apagar (opcional)
                    let estaCorrompido = false;
                    
                    if (file.endsWith('.json') || file.includes('.json')) {
                        try {
                            const content = fs.readFileSync(filePath, 'utf8');
                            JSON.parse(content); // Tenta parsear
                            // Se chegou aqui, o JSON é válido
                        } catch (error) {
                            estaCorrompido = true; // JSON corrompido
                        }
                    }
                    
                    // APAGA o arquivo (antigo ou corrompido)
                    fs.unlinkSync(filePath);
                    arquivosRemovidos++;
                    
                    if (estaCorrompido) {
                        console.log(colors.red(`[${sessionName}] 🗑️  Removido (corrompido + ${idadeDias} dias): ${file}`));
                    } else {
                        console.log(colors.yellow(`[${sessionName}] 🗑️  Removido (antigo ${idadeDias} dias): ${file}`));
                    }
                } else {
                    // Arquivo não é antigo suficiente
                    if (file.endsWith('.json') || file.includes('.json')) {
                        try {
                            const content = fs.readFileSync(filePath, 'utf8');
                            JSON.parse(content); // Apenas verifica
                        } catch (error) {
                            // JSON corrompido mas recente - remove mesmo assim
                            fs.unlinkSync(filePath);
                            arquivosRemovidos++;
                            console.log(colors.red(`[${sessionName}] 🗑️  Removido (corrompido recente): ${file}`));
                        }
                    }
                }
                
            } catch (e) {
                console.log(colors.gray(`[${sessionName}] ⚠️  Erro com ${file}: ${e.message}`));
            }
        }
        
        if (arquivosRemovidos > 0) {
            console.log(colors.green(`[${sessionName}] ✅ ${arquivosRemovidos} arquivos removidos`));
        } else {
            console.log(colors.green(`[${sessionName}] ✓ Nenhum arquivo antigo/corrompido para remover`));
        }
        
        return arquivosRemovidos;
        
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro:`), error.message);
        return 0;
    }
}

// Função adicional para verificação mais agressiva se necessário
async function verificarCorrompidosAgressivo(sessionName, folderPath) {
    console.log(colors.yellow(`[${sessionName}] 🔥 Executando verificação agressiva...`));
    
    const removidos = await verificarElimparCorrompidos(sessionName, folderPath);
    
    // Verificar também por arquivos com nomes estranhos
    try {
        const files = fs.readdirSync(folderPath);
        const padraoNome = /^[a-zA-Z0-9_\-\.]+$/;
        
        for (const file of files) {
            if (!padraoNome.test(file)) {
                const filePath = path.join(folderPath, file);
                fs.unlinkSync(filePath);
                console.log(colors.red(`[${sessionName}] 🗑️  Removido arquivo com nome inválido: ${file}`));
            }
        }
    } catch (e) {
        // Ignora erros na verificação extra
    }
    
    return removidos;
}
async function limparArquivosAutenticacao(sessionName, folderPath) {
    try {
        const arquivosParaRemover = [
            'creds.json',
            'pre-key-*',
            'sender-key-*',
            'session-*',
            'app-state-sync-version.json',
            'app-state-sync-key-id.json'
        ];
        
        let removidos = 0;
        
        if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath);
            
            for (const file of files) {
                try {
                    const filePath = path.join(folderPath, file);
                    const deveRemover = arquivosParaRemover.some(pattern => {
                        if (pattern.includes('*')) {
                            return file.startsWith(pattern.replace('*', ''));
                        }
                        return file === pattern;
                    });
                    
                    if (deveRemover && fs.statSync(filePath).isFile()) {
                        fs.unlinkSync(filePath);
                        removidos++;
                        console.log(colors.gray(`[${sessionName}] 🧹 Removido: ${file}`));
                    }
                } catch (e) {
                    // Ignorar
                }
            }
        }
        
        if (removidos > 0) {
            console.log(colors.green(`[${sessionName}] ✅ ${removidos} arquivos de auth removidos`));
            
            // Atualizar status
            atualizarStatus(sessionName, {
                status: 'cleaned',
                message: 'Arquivos de autenticação limpos',
                authCleaned: true,
                cleanedAt: new Date().toISOString(),
                filesRemoved: removidos
            });
        }
        
        return removidos > 0;
        
    } catch (error) {
        console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza de auth:`), error.message);
        return false;
    }
}

async function verificarSaudeSessao(socket, sessionName) {
    try {
        // 1. Verificar se socket tem usuário
        if (!socket.user?.id) {
            console.log(colors.yellow(`[${sessionName}] ⚠️  Sem user ID`));
            return false;
        }
        
        // 2. Tentar enviar presence update (teste leve)
        try {
            await socket.sendPresenceUpdate('available');
            console.log(colors.gray(`[${sessionName}] ♥️  Health check OK`));
            return true;
        } catch (e) {
            console.log(colors.yellow(`[${sessionName}] ⚠️  Presence update falhou: ${e.message}`));
            return false;
        }
        
    } catch (error) {
        console.log(colors.red(`[${sessionName}] ❌ Erro no health check: ${error.message}`));
        return false;
    }
}

async function testarResposta(socket, sessionName) {
    try {
        // Tentar enviar uma mensagem de teste para si mesmo
        const userJid = socket.user.id;
        
        // Enviar uma mensagem simples
        const timestamp = Date.now();
        const testMsg = `🧪 Teste ${timestamp}`;
        
        await socket.sendMessage(userJid, { text: testMsg });
        
        console.log(colors.gray(`[${sessionName}] ✅ Responde a mensagens`));
        return true;
        
    } catch (error) {
        console.log(colors.yellow(`[${sessionName}] ⚠️  Não responde: ${error.message}`));
        return false;
    }
}

function iniciarLimpezaAutomatica(sessionName, socket) {
    console.log(colors.red(`\n[${sessionName}] 🚨 INICIANDO LIMPEZA AUTOMÁTICA`));
    
    // 1. Fechar socket
    try {
        if (socket.end) socket.end();
        console.log(colors.gray(`[${sessionName}] Socket fechado`));
    } catch (e) {}
    
    // 2. Atualizar status
    atualizarStatus(sessionName, {
        status: 'auto_cleaning',
        message: 'Limpando arquivos corrompidos automaticamente...',
        timestamp: new Date().toISOString(),
        autoClean: true
    });
    
    // 3. Executar limpeza completa
    setTimeout(async () => {
        try {
            const folderPath = `./public/database/qr-code/${sessionName}`;
            
            // Remover arquivos problemáticos
            exec(`cd ${folderPath} && rm -rf pre-key* sender* session*`, async (error) => {
                if (!error) {
                    console.log(colors.green(`[${sessionName}] ✅ Arquivos corrompidos removidos`));
                    
                    // Remover creds.json também
                    const credsFile = path.join(folderPath, 'creds.json');
                    if (fs.existsSync(credsFile)) {
                        fs.unlinkSync(credsFile);
                        console.log(colors.yellow(`[${sessionName}] 🔑 Credenciais removidas`));
                    }
                    
                    // Aguardar e reconectar
                    setTimeout(() => {
                        console.log(colors.cyan(`[${sessionName}] 🔄 Reconectando após limpeza...`));
                        
                        if (sessionManager && sessionManager.processSession) {
                            sessionManager.processSession(sessionName);
                        }
                    }, 5000);
                }
            });
            
        } catch (error) {
            console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza automática:`), error);
        }
    }, 2000);
}

// 🔥🔥🔥 ADICIONAR COMANDO MANUAL "REVIVERQR"
// No seu index.js (arquivo de comandos), adicione:

function adicionarComandoReviverQR() {
    // Esta função vai no seu arquivo de comandos
    const comando = 'reviverqr';
    
    return {
        comando,
        handler: async (message, sock) => {
            const { from, sender, body } = message;
            
            // Verificar se é dono
            const SoDono = sender === '5511999999999@c.us'; // Substitua pelo seu número
            
            if (!SoDono) {
                return sock.sendMessage(from, { 
                    text: 'Apenas o dono pode usar este comando.' 
                });
            }
            
            // Extrair sessionName do sender
            const sessionName = sender.split('@')[0];
            
            // Enviar mensagem inicial
            await sock.sendMessage(from, { 
                text: '🔧 Reiniciando, aguarde um momentinho...' 
            });
            
            try {
                // Executar limpeza via exec (igual versão antiga)
                const folderUserAuth = `./public/database/qr-code/${sessionName}`;
                
                exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`, async (error) => {
                    if (error) {
                        console.error(colors.red(`[${sessionName}] ❌ Erro na limpeza:`), error);
                        await sock.sendMessage(from, { 
                            text: '❌ Erro ao limpar arquivos.' 
                        });
                        return;
                    }
                    
                    console.log(colors.green(`[${sessionName}] ✅ Arquivos limpos via comando`));
                    
                    // Remover creds.json também
                    const credsFile = path.join(folderUserAuth, 'creds.json');
                    if (fs.existsSync(credsFile)) {
                        fs.unlinkSync(credsFile);
                        console.log(colors.yellow(`[${sessionName}] 🔑 Credenciais removidas via comando`));
                    }
                    
                    await sock.sendMessage(from, { 
                        text: '✅ Arquivos limpos! Reiniciando em 3 segundos...' 
                    });
                    
                    // Fechar socket atual
                    setTimeout(() => {
                        try {
                            sock.end();
                        } catch (e) {}
                        
                        // Reconectar via session manager
                        setTimeout(() => {
                            if (sessionManager && sessionManager.processSession) {
                                sessionManager.processSession(sessionName);
                            }
                        }, 3000);
                        
                    }, 1000);
                });
                
            } catch (error) {
                console.error(colors.red(`[${sessionName}] ❌ Erro no comando reviverqr:`), error);
                await sock.sendMessage(from, { 
                    text: `❌ Erro: ${error.message}` 
                });
            }
        }
    };
}

// 🔹 FUNÇÃO PARA ATUALIZAR STATUS
function atualizarStatus(sessionName, data) {
    const statusFile = path.join(__dirname, 'public', 'database', 'qr-code', sessionName, 'status.json');
    
    try {
        let status = {};
        if (fs.existsSync(statusFile)) {
            try {
                status = JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
            } catch (e) {
                status = {};
            }
        }
        
        status = { ...status, ...data, lastUpdate: new Date().toISOString() };
        fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
        
    } catch (error) {
        console.error(colors.red(`[${sessionName}] Erro ao atualizar status:`), error);
    }
}

// 🔹 INICIAR PROCESSAMENTO DE MENSAGENS
function iniciarProcessamentoMensagens(samá, sessionName) {
    samá.ev.process(async (events) => {
        if (events["messages.upsert"]) {
            const upsert = events["messages.upsert"];
            try { 
                require("./index.js")(upsert, samá); 
            } catch (err) { 
                console.error(`[${sessionName}] Erro no index.js:`, err); 
            }
        }
        if(events["group-participants.update"]){
try {
// Pega o evento de participantes do grupo de forma segura
// DEBUG: mostra todo o objeto do evento
      console.log('=== DEBUG group-participants.update ===');
      console.log(JSON.stringify(events["group-participants.update"], null, 2));
      console.log('=======================================');

      // Pega o evento de participantes do grupo de forma segura
var sab2 = events["group-participants.update"];

if(!fs.existsSync(`./public/grupos/${sab2.id}.json`)) return console.log(sab2)
var jsonGp = JSON.parse(fs.readFileSync(`./public/grupos/${sab2.id}.json`));

function normalizeJid(jid) {
  if (!jid) return '';
  if (Array.isArray(jid)) jid = jid[0];
  if (typeof jid === 'object') jid = jid.id || String(jid);
  jid = String(jid).trim();

  // Corrige formatos novos (@lid)
  jid = jid.replace(/@lid$/, '@s.whatsapp.net');

  // Garante que seja um JID completo válido
  if (!jid.endsWith('@s.whatsapp.net') && !jid.endsWith('@g.us')) {
    jid = jid.replace(/\D/g, '') + '@s.whatsapp.net';
  }

  return jid;
}
if(normalizeJid(sab2.participants[0]).startsWith(samá.user.id.split(':')[0])) return;

try { var grpmdt = await samá.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await samá.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';
  
const mdata_3 = isGroup2 ? await samá.groupMetadata(sab2.id): "";
const sender2 = normalizeJid(sab2.participants[0]).split('@')[0]
const sender = normalizeJid(sab2.participants[0])
if(sab2.action == 'add'){
    
num = normalizeJid(sab2.participants[0]);
if(nescessario.listanegraG.includes(num)){
await samá.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
samá.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}


if (sab2.action === 'reject') {
    const requesterId = normalizeJid(sab2.participants[0]);
    await samá.sendMessage(GroupMetadata_.id, {
        text: `A solicitação de entrada do usuário @${requesterId.split("@")[0]} foi recusada.`,
        mentions: requesterId // Array para mencionar corretamente
    });
} 

if (sab2.action === 'deny') {
    const requesterId = normalizeJid(sab2.participants[0]);
    await samá.sendMessage(GroupMetadata_.id, {
        text: `A solicitação de entrada do usuário @${requesterId.split("@")[0]} foi negada.`,
        mentions: requesterId // Array para mencionar corretamente
    });
}

//const path = require('path');

const pastaBase = path.join(__dirname, 'usuarios_monitorados');
const pastas = ['nivel1', 'nivel2', 'nivel3', 'nivel4'];

// Função para garantir que as pastas existam
function garantirPastas() {
    if (!fs.existsSync(pastaBase)) {
        fs.mkdirSync(pastaBase, { recursive: true });
    }
    pastas.forEach(pasta => {
        const caminhoPasta = path.join(pastaBase, pasta);
        if (!fs.existsSync(caminhoPasta)) {
            fs.mkdirSync(caminhoPasta, { recursive: true });
        }
    });
}

// Carrega usuários da pasta inicial
function carregarUsuarios() {
    garantirPastas();
    let usuarios = {};
    pastas.forEach(pasta => {
        const arquivos = fs.readdirSync(path.join(pastaBase, pasta));
        arquivos.forEach(arquivo => {
            const userId = path.basename(arquivo, '.json');
            const dados = fs.readFileSync(path.join(pastaBase, pasta, arquivo), 'utf-8');
            usuarios[userId] = { nivel: pasta, dados: JSON.parse(dados) };
        });
    });
    return usuarios;
}

let usuariosMonitorados = carregarUsuarios();
let advertenciasContagem = {};

// Função para aplicar advertência
async function aplicarAdvertencia(userId, groupId) {
    const usuario = usuariosMonitorados[userId];

    if (!usuario) {
        console.error(`${userId} Removido do Monitoramento!!`);
        return;
    }

    const nivelAtual = pastas.indexOf(usuario.nivel);
    
    if (nivelAtual < 3) {
        if (nivelAtual === 2) {
            // Envia mensagem de advertência
            await enviarMensagemAdvertencia(userId, groupId);
        }

        // Verifica se o usuário ainda está monitorado
        if (!usuariosMonitorados[userId]) {
            console.error(`${userId} Removido do Monitoramento!!`);
            return;
        }

        // Move para a próxima pasta se o arquivo existir
        const caminhoAtual = path.join(pastaBase, usuario.nivel, `${userId}.json`);
        if (fs.existsSync(caminhoAtual)) {
            const proximoNivel = pastas[nivelAtual + 1];
            const caminhoNovo = path.join(pastaBase, proximoNivel, `${userId}.json`);
            fs.renameSync(caminhoAtual, caminhoNovo);
            usuario.nivel = proximoNivel; // Atualiza o nível na memória
            console.log(`Usuário @${userId} movido para ${proximoNivel}.`);
        } else {
            console.error(`O arquivo para o usuário @${userId} não existe em ${caminhoAtual}.`);
        }

        // Inicia temporizador para a próxima advertência
        setTimeout(() => aplicarAdvertencia(userId, groupId), 5 * 60 * 1000);
    } else {
        console.log(`Usuário @${userId} foi banido após 4 advertências.`);
        await banirUsuario(userId, groupId);
    }
}

// Função para enviar mensagem de advertência
async function enviarMensagemAdvertencia(userId, groupId) {
    // Código para enviar a mensagem de advertência
    const ppimg23 = await obterFotoPerfil(userId);
    let buttonMessage26 = {
        document: fs.readFileSync(`./DidinMedia/doc/ngentot.xlsx`),
        fileName: `📢 Advertência`,
        caption: `*Olá @${userId}*\n> Já faz *10 minutos* que você entrou no grupo e *não se comunicou.* Peço, por gentileza, que *interaja com o grupo* para não ser *banido.*`,
        footer: '©𝔊𝔞𝔟𝔯𝔦𝔢𝔩-𝔖𝔞𝔪𝔞́\nhttps://_ANTI-INATIVOS_.chat/invite/?id=ZOEAVWKS6TNVGC0Q1'
        /*contextInfo: {
            externalAdReply: {
                title: `5 Minutos para BAN!!`,
                body: "Mensagem adicional",
                showAdAttribution: true,
                thumbnail: ppimg23,
                mediaType: 2,
                mediaUrl: "https://_ANTI-INATIVOS_.chat/invite/?id=ZOEAVWKS6TNVGC0Q1"
            }
        }*/
    };
    await samá.sendMessage(groupId, buttonMessage26);
}

// Função para obter foto de perfil
async function obterFotoPerfil(userId) {
    try {
        return await samá.profilePictureUrl(userId, 'image');
    } catch (e) {
        return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
    }
}

// Função para banir usuário
async function banirUsuario(userId, groupId) {
    const ppimg23 = await obterFotoPerfil(userId);
    let buttonMessage26 = {
        document: fs.readFileSync(`./DidinMedia/doc/ngentot.xlsx`),
        fileName: `📢 Banimento`,
        caption: `*Olá @${userId}*\nVocê foi banido do grupo devido à sua *ausência.* Não enviou nenhuma mensagem *desde que entrou.* (15 Minutos)`,
        footer: '©𝔊𝔞𝔟𝔯𝔦𝔢𝔩-𝔖𝔞𝔪𝔞́\nhttps://_ANTI-INATIVOS_.chat/invite/?id=ZOEAVWKS6TNVGC0Q1',
        /*contextInfo: {
            externalAdReply: {
                title: `TEMPO ESGOTADO!`,
                body: "Mensagem adicional",
                showAdAttribution: true,
                thumbnail: ppimg23,
                mediaType: 2,
                mediaUrl: "https://_ANTI-INATIVOS_.chat/invite/?id=ZOEAVWKS6TNVGC0Q1"
            }
        }*/
    };
    await samá.sendMessage(groupId, buttonMessage26);
    await samá.groupParticipantsUpdate(groupId, [userId], 'remove');
}

// Função para monitorar o comportamento do usuário
async function monitorarComportamento(sender, groupId) {
    if (!usuariosMonitorados[sender]) {
        console.log(`Usuário @${sender} não está monitorado.`);
        return;
    }

    advertenciasContagem[sender] = (advertenciasContagem[sender] || 0) + 1;

    if (advertenciasContagem[sender] < 4) {
        console.log(`Usuário @${sender} atingiu o limite de advertências: ${advertenciasContagem[sender]}`);
        await aplicarAdvertencia(sender, groupId);
    }
}

// Função para detectar comportamento negativo
async function detectarComportamentoNegativo(sender, groupId) {
    // Implementar lógica para detectar comportamentos negativos
    await monitorarComportamento(sender, groupId);
}

// Inicia o monitoramento de pastas
garantirPastas();

// Função para remover um usuário do monitoramento
function removerDoMonitoramento(userId) {
    const usuario = usuariosMonitorados[userId];
    if (usuario) {
        const caminhoAtual = path.join(pastaBase, usuario.nivel, `${userId}.json`);
        fs.unlinkSync(caminhoAtual);
        delete usuariosMonitorados[userId];
        delete advertenciasContagem[userId]; // Limpa contagem de advertências
        console.log(`Usuário @${userId} removido do monitoramento.`);
    } else {
        console.log(`Usuário @${userId} não está sendo monitorado.`);
    }
}

// Função para adicionar um usuário à pasta nivel1 de monitoramento
function adicionarAoMonitoramento(userId, grupo) {
    const caminhoPastaNivel1 = path.join(pastaBase, 'nivel1');
    const caminhoArquivo = path.join(caminhoPastaNivel1, `${userId}.json`);

    if (usuariosMonitorados[userId]) {
        console.log(`Usuário @${userId} já está sendo monitorado.`);
        return;
    }

    const dados = {
        grupo: grupo,
        comportamento: "Comportamento inicial"
    };

    fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
    usuariosMonitorados[userId] = { nivel: 'nivel1', dados: dados };
    advertenciasContagem[userId] = 0;
    monitorarComportamento(userId, grupo);
    console.log(`Usuário @${userId} adicionado ao monitoramento no nível 1.`);
}

// Eventos para adicionar e remover usuários do monitoramento

  

/*if(sab2.action == 'remove'){
num = normalizeJid(sab2.participants[0]);
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage));
}
}*/
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(normalizeJid(sab2.participants[0]))){
await samá.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'});
samá.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
// Helper global (se ainda não colocou no topo do arquivo)



/*
if (jsonGp[0].antifake && sab2.action === 'add') {
  const participantJid = sab2.participants[0]; // ID complet
  console.log(sab2.participants)
  console.log(participantJid)
  const participantNumber = getNumberFromJid(participantJid);

  // Se não começar com 55, é estrangeiro
  if (!participantNumber.startsWith('55')) {
    console.log('Número estrangeiro detectado:', participantNumber);

    await samá.sendMessage(GroupMetadata_.id, {
      text: `ඞ   。　    .    •
•  @${participantNumber} foi ejetado
         1 impostor restante   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　
*Bye Bye Estrangeiro* ️😂👋`,
      mentions: [participantJid]
    });

    await samá.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
  }
}*/

// Pega apenas o número do JID, sem o @s.whatsapp.net
function getNumberFromJid(jid) {
  if (!jid) return '';
  if (Array.isArray(jid)) jid = jid[0];
  if (typeof jid === 'object') jid = jid.id || String(jid);

  // Remove o sufixo do WhatsApp
  return jid.replace(/@s\.whatsapp\.net$/, '');
}
// Função para normalizar apenas o número com código do país



 //jsonGp[0].legenda_estrangeiro

// BEM VINDO 
samá.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return samá.sendMessage(jid, { poll: { name, values, selectableCount }}) }


/*const sairalgg2 = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${GroupMetadata_.id}.json`)); 

datinhaofcc2 = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var datass = `ALUGUEL: 📅${sairalgg2.Data_de_sair}`


`ALUGUEL:
📅${sairalgg2.Data_de_sair}`


//📅${sairalgg2.Data_de_sair}


if(datinhaofcc2 < sairalgg2.Data_de_sair)
{
datas = `👆🏻Clica na foto
E Ganhe 💵`
  
} */
const dddMapping = {
  "5510": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, já tomou seu café com pão na chapa?" },
"5511": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, qual seu bar favorito no sábado?" },
"5512": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, como tá o clima na cidade?" },
"5513": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, vai pro mercado ou pra feira hoje?" },
"5514": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, já testou o novo rodízio?" },
"5515": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, onde você compra seu açaí?" },
    "5516": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, tá pronto pra balada?" },
    "5517": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, já viu o que tá rolando na Avenida?" },
    "5518": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, onde tá a melhor pizza?" },
    "5519": { cidadeddd2: "São Paulo", estadoddd2: "Paulista", piada: "Paulista, já encarou o trânsito hoje?" },
    "5521": { cidadeddd2: "Rio de Janeiro", estadoddd2: "Carioca", piada: "Carioca, poou pou, Ouxi, isso foi tiro ou fógos?" },
    "5522": { cidadeddd2: "Rio de Janeiro", estadoddd2: "Carioca", piada: "Carioca, poou pou, Ouxi, isso foi tiro ou fógos?" },
    "5523": { cidadeddd2: "Rio de Janeiro", estadoddd2: "Carioca", piada: "Carioca, quem não gosta de praia?" },
    "5524": { cidadeddd2: "Rio de Janeiro", estadoddd2: "Carioca", piada: "Carioca, tá com calor, né?" },
    "5527": { cidadeddd2: "Espirito Santo", estadoddd2: "Capixaba", piada: "Capixaba, como tá o congo?" },
    "5528": { cidadeddd2: "Espirito Santo", estadoddd2: "Capixaba", piada: "Capixaba, já comeu uma moqueca?" },
    "5531": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, já tomou café com pão de queijo?" },
    "5532": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, como tá a roça?" },
    "5533": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, vai pra festa junina?" },
    "5534": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, cadê o doce de leite?" },
    "5535": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, você é bom de queijo?" },
    "5537": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, já ouviu um causos?" },
    "5538": { cidadeddd2: "Minas Gerais", estadoddd2: "Mineiro", piada: "Mineiro, qual a receita do pão de queijo?" },
    "5541": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, como vai o mate?" },
    "5542": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, já plantou pinhão?" },
    "5543": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, vai pro parque?" },
    "5544": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, já viu um pinhão?" },
    "5545": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, como vai a araucária?" },
    "5546": { cidadeddd2: "Parana", estadoddd2: "Paranaense", piada: "Paranaense, já comeu um barreado?" },
    "5547": { cidadeddd2: "Santa Catarina", estadoddd2: "Catarinense", piada: "Catarinense, tá na hora de surfar!" },
    "5548": { cidadeddd2: "Santa Catarina", estadoddd2: "Catarinense", piada: "Catarinense, já comeu uma sequência de camarão?" },
    "5549": { cidadeddd2: "Santa Catarina", estadoddd2: "Catarinense", piada: "Catarinense, quando vai pra praia?" },
    "5551": { cidadeddd2: "Rio Grande do Sul", estadoddd2: "Gaúcho", piada: "Gaúcho, já tomou seu chimarrão?" },
    "5553": { cidadeddd2: "Rio Grande do Sul", estadoddd2: "Gaúcho", piada: "Gaúcho, onde tá o churrasco?" },
    "5554": { cidadeddd2: "Rio Grande do Sul", estadoddd2: "Gaúcho", piada: "Gaúcho, como vai a vida de campo?" },
    "5555": { cidadeddd2: "Rio Grande do Sul", estadoddd2: "Gaúcho", piada: "Gaúcho, tá pronto pro rodeio?" },
    "5561": { cidadeddd2: "Goias", estadoddd2: "Goiano", piada: "Goiano, já comeu um pequi hoje?" },
    "5562": { cidadeddd2: "Goias", estadoddd2: "Goiano", piada: "Goiano, tá na hora da festa do peão?" },
    "5563": { cidadeddd2: "Tocantins", estadoddd2: "Tocantinense", piada: "Tocantinense, como tá a vida no lago?" },
    "5564": { cidadeddd2: "Goias", estadoddd2: "Goiano", piada: "Goiano, como anda a vaquejada?" },
    "5565": { cidadeddd2: "Mato Grosso", estadoddd2: "Mato-Grossense", piada: "Mato-Grossense, como vai a pecuária?" },
    "5566": { cidadeddd2: "Mato Grosso", estadoddd2: "Mato-Grossense", piada: "Mato-Grossense, já foi à fazenda?" },
    "5567": { cidadeddd2: "Mato Grosso do Sul", estadoddd2: "Sul-Mato-Grossense", piada: "Sul-Mato-Grossense, já teve um churrasco?" },
    "5568": { cidadeddd2: "Acre", estadoddd2: "Acriano", piada: "Acriano, como tá a floresta?" },
    "5569": { cidadeddd2: "Rondônia", estadoddd2: "Rondoniense", piada: "Rondoniense, como vai a floresta?" },
    "5571": { cidadeddd2: "Bahia", estadoddd2: "Baiano", piada: "Baiano, tá na roda do samba?" },
    "5573": { cidadeddd2: "Bahia", estadoddd2: "Baiano", piada: "Baiano, cadê o acarajé?" },
    "5574": { cidadeddd2: "Bahia", estadoddd2: "Baiano", piada: "Baiano, samba ou axé?" },
    "5575": { cidadeddd2: "Bahia", estadoddd2: "Baiano", piada: "Baiano, vai pra festa hoje?" },
    "5577": { cidadeddd2: "Bahia", estadoddd2: "Baiano", piada: "Baiano, já acordou?" },
      "5579": { cidadeddd2: "Sergipe", estadoddd2: "Sergipano", piada: "Sergipano, como está o sol?" },
    "5581": { cidadeddd2: "Pernambuco", estadoddd2: "Pernambucano", piada: "Pernambucano, já dançou frevo?" },
    "5582": { cidadeddd2: "Alagoas", estadoddd2: "Alagoano", piada: "Alagoano, já tomou a sua água de coco?" },
    "5583": { cidadeddd2: "Paraiba", estadoddd2: "Paraibano", piada: "Paraibano, cadê a macaxeira?" },
    "5584": { cidadeddd2: "Rio Grande do Norte", estadoddd2: "Potiguar", piada: "Potiguar, já foi à praia?" },
    "5585": { cidadeddd2: "Ceara", estadoddd2: "Cearense", piada: "Cearense, vai pra praia ou pro forró?" },
    "5586": { cidadeddd2: "Piaui", estadoddd2: "Piauiense", piada: "Piauiense, como vai a lagosta?" },
    "5587": { cidadeddd2: "Pernambuco", estadoddd2: "Pernambucano", piada: "Pernambucano, cadê o bolo de rolo?" },
    "5588": { cidadeddd2: "Ceara", estadoddd2: "Cearense", piada: "Cearense, tá com sede de água de coco?" },
    "5589": { cidadeddd2: "Piaui", estadoddd2: "Piauiense", piada: "Piauiense, já comeu um caranguejo?" },
    "5591": { cidadeddd2: "Para", estadoddd2: "Paraense", piada: "Paraense, já comeu um açaí?" },
    "5592": { cidadeddd2: "Amazonas", estadoddd2: "Amazonense", piada: "Amazonense, já pescou hoje?" },
    "5593": { cidadeddd2: "Para", estadoddd2: "Paraense", piada: "Paraense, tá na hora do tacacá?" },
    "5594": { cidadeddd2: "Para", estadoddd2: "Paraense", piada: "Paraense, como vai a festa do círio?" },
    "5595": { cidadeddd2: "Roraima", estadoddd2: "Roraimense", piada: "Roraimense, já viu a natureza hoje?" },
    "5596": { cidadeddd2: "Amapa", estadoddd2: "Amapaense", piada: "Amapaense, aonde foi a última viagem?" },
    "5597": { cidadeddd2: "Amazonas", estadoddd2: "Amazonense", piada: "Amazonense, o que tem de bom na floresta?" },
    "5598": { cidadeddd2: "Maranhao", estadoddd2: "Maranhense", piada: "Maranhense, cadê o tambor?" },
    "5599": { cidadeddd2: "Maranhao", estadoddd2: "Maranhense", piada: "Maranhense, vai pro carnaval hoje?" }
  
};
const elogiosExtras = [
"𝐅𝐀𝐁𝐈-𝐁𝐎𝐓"
];
const elogiosExtras2 = (elogiosExtras[Math.floor(Math.random() * elogiosExtras.length)])
// Exibindo as piadas

let piada = 'Gringo';
let cidadeddd2 = 'Gringo';
let estadoddd2 = 'Gringo';

const dddPrefix = normalizeJid(sab2.participants[0]).substring(0, 4); // Extrai os 4 primeiros dígitos do DDD

if (dddMapping[dddPrefix]) {
  piada = dddMapping[dddPrefix].piada
    cidadeddd2 = dddMapping[dddPrefix].cidadeddd2;
    estadoddd2 = dddMapping[dddPrefix].estadoddd2;
}
let FelizNatal = `${estadoddd2}, tudo bem?, eu sou a  bot e`


if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1 && !jsonGp[0].registrarFIGUS) return;
try {
var mdata_2 = isGroup2 ? await samá.groupMetadata(sab2.id): "";
} catch (e) {
return;
}


const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
//if(jsonGp[0].antifake == true && !normalizeJid(sab2.participants[0]).startsWith(55)) return;

if (jsonGp[0].wellcome[0].bemvindo1 === true) {
  console.log('Bem vindo por audio 1');
if(isFiltered8(mdata_2.id)) return 	
addFilter8(mdata_2.id)
  // Função segura para extrair JID válido do participante
  function getJidFromParticipant(p) {
    if (!p) return '';
    if (typeof p === 'string') return p.includes('@') ? p : `${p}@s.whatsapp.net`;
    if (p.id) return p.id.includes('@') ? p.id : `${p.id}@s.whatsapp.net`;
    if (p.phoneNumber) return p.phoneNumber.includes('@') ? p.phoneNumber : `${p.phoneNumber}@s.whatsapp.net`;
    return '';
  }

  const participanteJid = getJidFromParticipant(sab2.participants[0]);

  // FOTO DO PARTICIPANTE
  let ppimg;
  try {
    ppimg = await samá.profilePictureUrl(participanteJid, 'image');
  } catch {
    ppimg = 'https://telegra.ph/file/d8a541bcc48d20403dbb3.jpg';
  }

  // FOTO DO GRUPO
  let ppgp;
  try {
    ppgp = await samá.profilePictureUrl(mdata_2.id, 'image');
  } catch {
    ppgp = 'https://telegra.ph/file/d8a541bcc48d20403dbb3.jpg';
  }

  const shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
  const shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`);

  // Remove emojis e fontes estranhas do nome do grupo
  function limparNomeGrupo(nome) {
    const semEmojis = nome.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
    return semEmojis.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/g, '').trim();
  }

  const nomeGrupoLimpo = limparNomeGrupo(mdata_2.subject);
  console.log(nomeGrupoLimpo);

  // Saudação por hora
  const time3 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
  let tempo3 = 'Boa madrugada';
  if (time3 > "05:30:00") tempo3 = 'Bom dia';
  if (time3 > "12:00:00") tempo3 = 'Boa tarde';
  if (time3 > "19:00:00") tempo3 = 'Boa noite';

  const participant06 = participanteJid;

  // Tempo de aluguel
  let tempoalg = `⏳Aluguel: LOADING..`;
  const aluguelPath = `./func/sairgp/sairgp-${mdata_2.id}.json`;
  if (fs.existsSync(aluguelPath)) {
    const dadosAluguel = JSON.parse(fs.readFileSync(aluguelPath));
    const dataDeSair = moment(dadosAluguel.Data_de_sair, "DD/MM/YY");
    const hoje = moment.tz('America/Sao_Paulo');
    const diff = dataDeSair.diff(hoje, 'days');
    if (diff > 0) tempoalg = `⏳Aluguel: ${diff} dia(s)`;
    else if (diff === 0) tempoalg = `🆘Aluguel: hoje`;
    else tempoalg = `⏳Aluguel vencido há ${-diff} dia(s)`;
  }

  const welcomeMessage = `•🎉:𝙇𝙀𝙄𝘼 𝘼𝙎 𝙍𝙀𝙂𝙍𝘼𝙎\n•📌: ${cidadeddd2}\n•${tempoalg}`;
  const selo = { 
    key: { fromMe: false, participant: participant06, id: mdata_2.id },
    message: { 
      extendedTextMessage: { 
        text: welcomeMessage, 
        contextInfo: { mentionedJid: [participant06] } 
      } 
    }
  };

  if (sab2.action === 'add') {
    if (isWelcomed) {
        teks = jsonGp[0].wellcome[0].legendabv
            .replace('#hora#', '')
            .replace('#nomedogp#', nomeGrupoLimpo)
            .replace('#numerodele#', FelizNatal)
            .replace('#numerobot#', samá.user.id)
            .replace('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : setting.prefix)
            .replace('#descrição#', groupDesc);
    } else {
        teks = welcome(normalizeJid(sab2.participants[0]).split('@')[0], mdata_2.subject);
    }
    try {
      const gtts2 = require('./armor/funcoes/gtts')('PT');
    // Usar áudio gerado normalmente
      const apiKeys = [
        'sk_ce376b4d1ed50c91d56f9badfa873291d0ab7eb6337b44b3', 'sk_39573a47ef125130aeb79d65a425c8641d430e2b7d973293', 'sk_978612d823eaa0fc997b0b2a60a1d54398717e349f8e02eb', 'sk_1cefaef5d88c6ecd3a5ed3619fad6eeb19ac62996576742c', 'sk_d82314c43f678579b3da5a9690db1c12892e28836b0de7f8', 'sk_dab9a29f2f4bdf9dec92da23191921b57991ef351f83d702',
    'sk_e56ddd9c4e96bf99e190111c421d2c53a85612f38eeb37c2',
    'sk_94d8f2ad3b924d15eb5eb20b1c11ce6314337fff7f79c7a5',
    'sk_886b06dcf22db39deca8f79b9715d005d707544bdf58a7d0',
    'sk_f745f3681f2bac7c0ab00baebb3478f184019824b24a1c54',
    'sk_5efffe9dc0c94396cc04dc05ce10f2b5c06e50101a8b6401',
    'sk_10bfa56b01ba86bc47c75c5edaa64e036dc2130c69fda412',
    'sk_5c70ee2b47819274af409e2263afe5d30f1361318b874c01',
    'sk_ac34585e4e28fa49b9528c1661d7e499956cc80936a64700',
    'sk_710a56bcb7201e845f8e9648a134f8da8bfc89aeab13ea50',
    'sk_f2bbe27c507ef506794de39c9a73ba910c21f94d9410a1d8',
    'sk_2ff8e6459e2bdfea0dccc41e6bc8c13e6f1e1811ea13335e',
    'sk_42168b351bb358834a5baf6d4b3c8c63045d5f2b12f194d2',
    'sk_24150a08d070f2f24c3f9a64387e8cb52ac45585c789fd7d',
    'sk_fce9a3fc033d21563df97a396f0d4553f3c2eb092cbcaa92',
    'sk_309715807d6bb0dde3d43e7cd32353fd6db73972f3af791e'
  ];

const voiceId = 'PZIBrGsMjLyYasEz50bI'; // voz multilíngue

const texto = teks;
const pastaAudios = './audiosCache/';
if (!fs.existsSync(pastaAudios)) fs.mkdirSync(pastaAudios)

async function tentarGerarAudio(chaves, estadoddd2) {
  const arquivoMp3 = `${pastaAudios}${estadoddd2}.mp3`;
  const arquivoOgg = `${pastaAudios}${estadoddd2}.ogg`;
  const tempOgg = path.join("./temp", `amigo_fixed_${Date.now()}.ogg`);

  // ✅ Se o áudio já existe, reconverte para garantir compatibilidade
  if (fs.existsSync(arquivoOgg)) {
    console.log(`🎧 Reconvertendo áudio existente para compatibilidade: ${estadoddd2}`);

    // Converte o arquivo existente para formato correto (libopus 48kHz)
    await new Promise((resolve, reject) => {
      ffmpeg(arquivoOgg)
        .audioCodec("libopus")
        .audioChannels(1)
        .audioFrequency(48000)
        .audioBitrate("64k")
        .format("ogg")
        .on("end", resolve)
        .on("error", reject)
        .save(tempOgg);
    });

    // Verifica se a conversão deu certo
    if (!fs.existsSync(tempOgg) || fs.statSync(tempOgg).size < 1000) {
      console.log("❌ Falha na reconversão do áudio existente. Abortando envio.");
      return;
    }

    console.log("✅ Áudio reconvertido com sucesso, enviando...");

    await samá.sendMessage(
      mdata_2.id,
      {
        audio: fs.readFileSync(tempOgg),
        ptt: true,
        mimetype: "audio/ogg; codecs=opus"
      },
      { quoted: selo }
    );

    console.log(`✅ Áudio enviado com sucesso para ${estadoddd2}`);

    // Apaga o temporário
    fs.unlinkSync(tempOgg);
    return;
  }

  // 🚀 Caso não exista, gera com ElevenLabs normalmente
  for (const chave of chaves) {
    try {
      console.log(`🎙️ Gerando áudio com a chave: ${chave}`);

      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "xi-api-key": chave,
          "Content-Type": "application/json",
          "Accept": "audio/mpeg"
        },
        body: JSON.stringify({
          text: texto,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.4,
            similarity_boost: 0.75
          }
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error(`Erro com chave ${chave}:`, errText);
        continue;
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(arquivoMp3, buffer);

      console.log("🎧 MP3 gerado com sucesso. Convertendo para OGG...");

      await new Promise((resolve, reject) => {
        ffmpeg(arquivoMp3)
          .audioCodec("libopus")
          .audioChannels(1)
          .audioFrequency(48000)
          .audioBitrate("64k")
          .format("ogg")
          .on("end", resolve)
          .on("error", reject)
          .save(arquivoOgg);
      });

      console.log(`✅ Áudio convertido e salvo como ${arquivoOgg}`);

      await samá.sendMessage(
        mdata_2.id,
        {
          audio: fs.readFileSync(arquivoOgg),
          ptt: true,
          mimetype: "audio/ogg; codecs=opus"
        },
        { quoted: selo }
      );

      console.log(`✅ Áudio enviado com sucesso para ${estadoddd2}`);
      return; // sucesso

    } catch (err) {
      console.error(`❌ Erro geral com chave ${chave}:`, err);
    }
  }

  console.log("❌ Todas as chaves falharam.");
}

tentarGerarAudio(apiKeys, estadoddd2);
    } catch (e) {
      console.error("Erro ao processar o áudio de boas-vindas:", e);
    }
  }

  // MENSAGEM DE SAÍDA
  else if (sab2.action === 'remove') {
    const participanteSaiu = participanteJid;

    let ppimg2;
    try {
      ppimg2 = await samá.profilePictureUrl(participanteSaiu, 'image');
    } catch {
      ppimg2 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
    }

    const welcomeMessage = `👋 Bye Bye...\n•📌: ${cidadeddd2}\n•${tempoalg}`;
    const selo2 = { 
      key: { fromMe: false, participant: participanteSaiu, id: mdata_2.id },
      message: { 
        extendedTextMessage: { 
          text: welcomeMessage, 
          contextInfo: { mentionedJid: [participanteSaiu] } 
        } 
      }
    };



// Caminho do áudio original (pode ser .mp3, .wav, .ogg, etc.)
const inputPath = "./audios/byebye.ogg";

if (fs.existsSync(inputPath)) {
  // Cria a pasta temporária se não existir
  if (!fs.existsSync("./temp")) fs.mkdirSync("./temp");

  // Caminho de saída temporário
  const outputPath = path.join("./temp", `byebye_fixed_${Date.now()}.ogg`);

  console.log("🎧 Convertendo o áudio para formato compatível com WhatsApp...");

  // Conversão usando ffmpeg
  await new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .audioCodec("libopus")       // Codec exigido pelo WhatsApp
      .audioChannels(1)            // Mono
      .audioFrequency(48000)       // 48kHz
      .audioBitrate("64k")         // Qualidade ideal
      .format("ogg")               // Formato final
      .on("end", resolve)
      .on("error", reject)
      .save(outputPath);
  });

  // Verifica se o arquivo foi realmente gerado
  if (!fs.existsSync(outputPath) || fs.statSync(outputPath).size < 1000) {
    console.error("❌ Falha na conversão do áudio.");
  } else {
    console.log("✅ Conversão concluída! Enviando...");

    const audioBuffer = fs.readFileSync(outputPath);

    await samá.sendMessage(
      mdata_2.id,
      {
        audio: audioBuffer,
        ptt: true,
        mimetype: "audio/ogg; codecs=opus",
      },
      { quoted: selo2 }
    );

    console.log("✅ Áudio PTT enviado com sucesso!");
  }

  // Remove o arquivo temporário
  fs.unlinkSync(outputPath);

} else {
  console.log("❌ Áudio de saída não encontrado.");
}
  }
}
  

if (jsonGp[0].wellcome[1].bemvindo2 == true) {
  console.log('Bem vindo por texto');
if(isFiltered8(mdata_2.id)) return 	
addFilter8(mdata_2.id)
  if (sab2.action === 'add') {
    if (isWelcomed2) {
      teks = jsonGp[0].wellcome[1].legendabv
        .replace('#hora#', time)
        .replace('#nomedogp#', mdata_2.subject)
        .replace('#numerodele#', '@' + normalizeJid(sab2.participants[0]).split('@')[0])
        .replace('#numerobot#', samá.user.id)
        .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
        .replace('#descrição#', groupDesc);
    } else {
      teks = welcome2(normalizeJid(sab2.participants[0]).split('@')[0], mdata_2.subject);
    }

    try {
      // Obter foto do grupo
      let ppimg23;
      try {
        ppimg23 = await samá.profilePictureUrl(mdata_2.id, 'image');
      } catch (e) {
        ppimg23 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }
      let buff23 = await getBuffer(ppimg23);

      // Obter foto do participante
      let ppimg3;
      try {
        ppimg3 = await samá.profilePictureUrl(normalizeJid(sab2.participants[0]), 'image');
      } catch (e) {
        ppimg3 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      // Criar diretório temporário, se necessário
      const tempDir = path.join(__dirname, 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      const participant06 = normalizeJid(sab2.participants[0]); // Número do participante
      let tempoalg = `⏳Aluguel: LOADING..`;

      // Verifica aluguel do grupo
      const aluguelPath = `./func/sairgp/sairgp-${mdata_2.id}.json`;
      if (fs.existsSync(aluguelPath)) {
        let dadosAluguel = JSON.parse(fs.readFileSync(aluguelPath));
        let dataDeSair = moment(dadosAluguel.Data_de_sair, "DD/MM/YY");
        let hoje = moment.tz('America/Sao_Paulo');
        let diff = dataDeSair.diff(hoje, 'days');

        if (diff > 0) tempoalg = `⏳Aluguel: ${diff} dia(s)`;
        else if (diff === 0) tempoalg = `🆘Aluguel: ${diff} dia(s)`;
        else tempoalg = `⏳Aluguel: ${diff}`;
      }

      const welcomeMessage = `•🎉:𝙇𝙀𝙄𝘼 𝘼𝙎 𝙍𝙀𝙂𝙍𝘼𝙎\n•📌: ${cidadeddd2}\n•${tempoalg}`;

      function limparTexto(texto) {
        texto = texto.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, '');
        return texto.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/g, '');
      }

      const nomeGrupoLimpo = limparTexto(mdata_2.subject);

      const imgURL = `http://br2.bronxyshost.com:4009/bemvindo?userImg=${encodeURIComponent(ppimg3)}&groupImg=${encodeURIComponent(ppimg23)}&nome=${estadoddd2}&total=${encodeURIComponent(nomeGrupoLimpo)}&from=${mdata_2.id}`;


// pega imagem gerada
const response1 = await axios.get(imgURL);
const imageUrl = response1.data.imageUrl;

// baixa a imagem
const imgResponse = await axios.get(imageUrl, {
  responseType: 'arraybuffer'
});
const imageBuffer = Buffer.from(imgResponse.data);
const selo = {
        key: {
          fromMe: false,
          participant: participant06,
          id: mdata_2.id
        },
        message: {
          extendedTextMessage: {
            text: welcomeMessage,
            contextInfo: { mentionedJid: [participant06] }
          }
        }
      };

// mensagem de boas-vindas
const buttonMessage26 = {
  image: imageBuffer,
  caption: teks,
  mentions: [participant06]
};

await samá.sendMessage(mdata_2.id, buttonMessage26, { quoted: selo });

      

    

      
    } catch (e) {
      console.error('Erro ao enviar mensagem de boas-vindas:', e.message);
    }

  } else if (sab2.action === 'remove') {
    const mem = normalizeJid(sab2.participants[0]);

    if (isByed2) {
      teks = jsonGp[0].wellcome[1].legendasaiu
        .replace('#hora#', time)
        .replace('#nomedogp#', mdata_2.subject)
        .replace('#numerodele#', mem.split('@')[0])
        .replace('#numerobot#', samá.user.id)
        .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
        .replace('#descrição#', groupDesc);
    } else {
      teks = bye2(mem.split('@')[0]);
    }

    try {
      // Foto do grupo
      let ppimg233;
      try {
        ppimg233 = await samá.profilePictureUrl(mdata_2.id, 'image');
      } catch (e) {
        ppimg233 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      // Foto do participante
      let ppimg33;
      try {
        ppimg33 = await samá.profilePictureUrl(mem, 'image');
      } catch (e) {
        ppimg33 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      const buff33 = await getBuffer(ppimg33);

      const image = await Jimp.read(buff33);
      const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

      const text = "SAIU DO GRUPO";
      const textWidth = Jimp.measureText(font, text);
      const textHeight = Jimp.measureTextHeight(font, text);
      const x = (image.bitmap.width / 2) - (textWidth / 2);
      const y = (image.bitmap.height / 2) - (textHeight / 2);

      await image
        .greyscale()
        .contrast(1)
        .color([{ apply: 'darken', params: [30] }])
        .print(font, x, y, text);

      const imageBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

      let tempoalg = `⏳Aluguel: LOADING..`;
      const aluguelPath = `./func/sairgp/sairgp-${mdata_2.id}.json`;
      if (fs.existsSync(aluguelPath)) {
        const dadosAluguel = JSON.parse(fs.readFileSync(aluguelPath));
        const dataDeSair = moment(dadosAluguel.Data_de_sair, "DD/MM/YY");
        const hoje = moment.tz('America/Sao_Paulo');
        const diff = dataDeSair.diff(hoje, 'days');
        tempoalg = diff > 0 ? `⏳Aluguel: ${diff} dia(s)` :
          diff === 0 ? `🆘Aluguel: ${diff} dia(s)` :
          `⏳Aluguel: ${diff}`;
      }

      const welcomeMessage = `👋Bye Bye...\n•📌: ${cidadeddd2}\n•${tempoalg}`;

      const selo = {
        key: {
          fromMe: false,
          participant: mem,
          id: mdata_2.id
        },
        message: {
          extendedTextMessage: {
            text: welcomeMessage,
            contextInfo: { mentionedJid: [mem] }
          }
        }
      };

      const buttonMessage263 = {
        image: imageBuffer,
        caption: teks,
        buttons: null,
        headerType: 4,
        mentions: [mem]
      };

      await samá.sendMessage(mdata_2.id, buttonMessage263, { quoted: selo });

    } catch (e) {
      console.error('Erro ao enviar imagem de saída:', e.message);
    }
  }
}
// Função segura e compatível com @lid e formatos antigos


if(jsonGp[0].registrarFIGUS == true) {
  try {
   // if (!jsonGp[0].registrarFIGUS) return;
    console.log('🎉 Bem-vindo com figurinha ativado!');
    if(isFiltered8(mdata_2.id)) return 	
addFilter8(mdata_2.id)

    const participante = sab2.participants[0];
    const participanteJid = normalizeJid(participante[0] || participante);
    const acao = sab2.action;

    if (acao === 'add') {
      // FOTO DO PARTICIPANTE
      let ppParticipante;
      try {
        ppParticipante = await samá.profilePictureUrl(participanteJid, 'image');
      } catch {
        ppParticipante = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      // FOTO DO GRUPO
      let ppGrupo;
      try {
        ppGrupo = await samá.profilePictureUrl(mdata_2.id, 'image');
      } catch {
        ppGrupo = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      // Criar pasta temp
      const tempDir = path.join(__dirname, 'temp');
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

      // Remove emojis e caracteres estranhos
      function limparTexto(texto) {
        texto = texto.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, '');
        return texto.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/g, '');
      }

      const nomeGrupoLimpo = limparTexto(mdata_2.subject);

      // URL da API de boas-vindas
      const imgURL = `http://br2.bronxyshost.com:4009/bemvindo?userImg=${encodeURIComponent(ppParticipante)}&groupImg=${encodeURIComponent(ppGrupo)}&nome=${encodeURIComponent(nomeGrupoLimpo)}&total=${encodeURIComponent(nomeGrupoLimpo)}&from=${mdata_2.id}`;

      // Pega a imagem gerada
      const response = await axios.get(imgURL);
      const imageUrlReal = response.data.imageUrl;
      const imageBuffer = await axios.get(imageUrlReal, { responseType: 'arraybuffer' });

      // Converte pra WebP (sticker)
      const webpBuffer = await sharp(imageBuffer.data).webp({ quality: 80 }).toBuffer();

      // Aluguel
      let tempoalg = `⏳Aluguel: LOADING..`;
      const caminhoJSON = `./func/sairgp/sairgp-${mdata_2.id}.json`;

      if (fs.existsSync(caminhoJSON)) {
        let dadosAluguel = JSON.parse(fs.readFileSync(caminhoJSON));
        let dataDeSair = moment(dadosAluguel.Data_de_sair, "DD/MM/YY");
        let hoje = moment.tz('America/Sao_Paulo');
        let diff = dataDeSair.diff(hoje, 'days');
        tempoalg = diff > 0 ? `⏳Aluguel: ${diff} dia(s)` :
                   diff === 0 ? `🆘Aluguel: hoje` :
                   `⏳Aluguel vencido há ${-diff} dia(s)`;
      }

      // Mensagem de boas-vindas
      const welcomeMessage = `•🎉:𝙇𝙀𝙄𝘼 𝘼𝙎 𝙍𝙀𝙂𝙍𝘼𝙎\n•📌: ${cidadeddd2}\n•${tempoalg}`;
      const selo = {
        key: { fromMe: false, participant: participanteJid, id: mdata_2.id },
        message: {
          extendedTextMessage: {
            text: welcomeMessage,
            contextInfo: { mentionedJid: [participanteJid] }
          }
        }
      };

      // Envia figurinha
      await samá.sendMessage(mdata_2.id, { sticker: webpBuffer, mentions: sab2.participants }, { quoted: selo });
    }

    // SAÍDA DO GRUPO
    else if (acao === 'remove' && jsonGp[0].wellcome[1].legendasaiu !== 0) {
      const participanteJid = normalizeJid(participante[0]);

      // Foto participante
      let ppParticipante;
      try {
        ppParticipante = await samá.profilePictureUrl(participanteJid, 'image');
      } catch {
        ppParticipante = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
      }

      const buffParticipante = await getBuffer(ppParticipante);

      // Efeito escuro + texto “SAIU DO GRUPO”
      const image = await Jimp.read(buffParticipante);
      const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      const text = "SAIU DO GRUPO";
      const textWidth = Jimp.measureText(font, text);
      const textHeight = Jimp.measureTextHeight(font, text);
      const x = (image.bitmap.width / 2) - (textWidth / 2);
      const y = (image.bitmap.height / 2) - (textHeight / 2);

      await image
        .greyscale()
        .contrast(1)
        .color([{ apply: 'darken', params: [30] }])
        .print(font, x, y, text);

      const imageBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);
      const webpBuffer = await sharp(imageBuffer).webp({ quality: 80 }).toBuffer();

      let tempoalg = `⏳Aluguel: LOADING..`;
      const aluguelPath = `./func/sairgp/sairgp-${mdata_2.id}.json`;

      if (fs.existsSync(aluguelPath)) {
        const dadosAluguel = JSON.parse(fs.readFileSync(aluguelPath));
        const dataDeSair = moment(dadosAluguel.Data_de_sair, "DD/MM/YY");
        const hoje = moment.tz('America/Sao_Paulo');
        const diff = dataDeSair.diff(hoje, 'days');
        tempoalg = diff > 0 ? `⏳Aluguel: ${diff} dia(s)` :
                    diff === 0 ? `🆘Aluguel: hoje` :
                    `⏳Aluguel vencido há ${-diff} dia(s)`;
      }

      const byeMessage = `👋Bye Bye...\n•📌: ${cidadeddd2}\n•${tempoalg}`;
      const selo = {
        key: { fromMe: false, participant: participanteJid, id: mdata_2.id },
        message: {
          extendedTextMessage: {
            text: byeMessage,
            contextInfo: { mentionedJid: [participanteJid] }
          }
        }
      };

      await samá.sendMessage(mdata_2.id, { sticker: webpBuffer }, { quoted: selo });
    }

  } catch (e) {
    console.error("❌ Erro ao processar figurinha de boas-vindas:", e);
  }
}

} catch (e) {
console.log(e)
}
}

    
    });
}

// 🔹 INICIAR TODAS AS SESSÕES EXISTENTES
async function iniciarTodasSessoes() {
    console.log(colors.cyan('\n🚀 Iniciando sistema de sessões...'));
    
    // Iniciar o gerenciador
    sessionManager.startMonitoring();
    
    // Aguardar e mostrar estatísticas
    setTimeout(() => {
        const stats = sessionManager.getStats();
        console.log(colors.green('\n✅ Sistema iniciado!'));
        console.log(colors.cyan('📊 Estatísticas:'));
        console.log(colors.cyan(`   • Sessões totais: ${stats.total}`));
        console.log(colors.cyan(`   • Conectadas: ${stats.connected}`));
        console.log(colors.cyan(`   • Em tentativa: ${stats.retrying}`));
    }, 5000);
}

// 🔹 FUNÇÃO PARA PEGAR NÚMEROS DAS PASTAS
async function pegarNumeros() {
    const numeros = [];
    const folderPath = path.join(__dirname, 'public/database/qr-code');
    
    if (fs.existsSync(folderPath)) {
        const pastas = fs.readdirSync(folderPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        numeros.push(...pastas);
    }
    
    return numeros;
}

// 🔹 FUNÇÃO PARA CRIAR NOVA SESSÃO VIA SITE
async function criarNovaSessao(numero) {
    const sessionName = numero.replace(/\D/g, "");
    const sessionPath = path.join(__dirname, 'public', 'database', 'qr-code', sessionName);
    
    console.log(colors.cyan(`\n[${sessionName}] Criando nova sessão via site...`));
    
    if (fs.existsSync(sessionPath)) {
        console.log(colors.yellow(`[${sessionName}] ⚠️  Sessão já existe, verificando...`));
        await sessionManager.forceCheckSession(sessionName);
        return { 
            success: true, 
            session: sessionName,
            message: 'Sessão já existe, verificando status...'
        };
    }
    
    // Cria a pasta da sessão
    fs.mkdirSync(sessionPath, { recursive: true });
    
    // Cria arquivo de configuração
    const config = {
        numero: numero,
        active: true,
        status: 'pending',
        createdAt: new Date().toISOString(),
        viaSite: true
    };
    
    fs.writeFileSync(
        path.join(sessionPath, 'config.json'),
        JSON.stringify(config, null, 2)
    );
    
    // Cria arquivo de status
    fs.writeFileSync(
        path.join(sessionPath, 'status.json'),
        JSON.stringify({
            session: sessionName,
            numero: numero,
            status: 'pending',
            timestamp: new Date().toISOString(),
            message: 'Aguardando inicialização...'
        }, null, 2)
    );
    
    console.log(colors.green(`[${sessionName}] ✅ Sessão criada!`));
    
    // Agendar verificação imediata
    setTimeout(() => {
        sessionManager.forceCheckSession(sessionName);
    }, 2000);
    
    return { 
        success: true, 
        session: sessionName,
        message: 'Sessão criada. Será iniciada automaticamente.'
    };
}

// 🔹 TRATAMENTO DE ERROS GLOBAIS
process.on('uncaughtException', (err) => {
    console.error(colors.red('⚠️  Erro não tratado:'), err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error(colors.red('⚠️  Promise rejeitada:'), reason);
});

// 🔹 EXPORTAR FUNÇÕES
module.exports = {
    iniciarSabrina,
    criarNovaSessao,
    sessionManager,
    iniciarTodasSessoes,
    atualizarStatus,
    pegarNumeros
};

// 🔹 INICIAR O BOT
if (require.main === module) {
    (async () => {
        try {
            await iniciarTodasSessoes();
        } catch (e) {
            console.error(colors.red('❌ Erro fatal:'), e);
            process.exit(1);
        }
    })();
}

