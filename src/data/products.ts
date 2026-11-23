import controle from "../assets/controle.webp";
import fone from "../assets/fonebluetooth.webp";
import fonegamer from "../assets/fonegamer.webp";
import headset from "../assets/headset.webp";
import microfone from "../assets/microfone.webp";
import monitor from "../assets/monitor.webp";
import mouse from "../assets/mouse.webp";
import mousegamer from "../assets/mousegamer.webp";
import suporte from "../assets/suporte.webp";
import teclado from "../assets/teclado.webp";
import webcam from "../assets/webcam.webp";
import type { ShopCardProps } from "../components/ShopCard";

export const categorias = [
  "Tecnologia",
  "Mouses",
  "Teclados",
  "Acessórios",
  "Esportes",
  "Eletrodomésticos",
  "Jogos",
  "Outros",
];

export type ProductSection = "featured" | "recent" | "offers" | "fallback";

export interface ManagedProduct extends ShopCardProps {
  id: string;
  categoria?: string;
  categorias?: string[];
  isMock?: boolean;
  estoque?: number;
  createdAt?: string;
  sections?: ProductSection[];
  offerPrice?: string;
}

const mockProducts: ManagedProduct[] = [
  {
    id: "recent-fone-bluetooth",
    marca: "JBL",
    title: "Fone Bluetooth",
    description: "Fone sem fio com estojo de carregamento",
    image: fone,
    price: "89,90",
    oldPrice: "89,90",
    discount: "22% OFF",
    offerPrice: "69,90",
    avaliacao: 4.7,
    categoria: "Tecnologia",
    isMock: true,
    sections: ["recent", "offers"],
    details: {
      Titulo1: "Conexão",
      Desc1: "Bluetooth 5.3",
      Titulo2: "Bateria",
      Desc2: "Até 24 horas com o estojo",
      Titulo3: "Resistência",
      Desc3: "Proteção contra respingos IPX4",
      Titulo4: "Estojo",
      Desc4: "Carregamento portátil com indicador LED",
    },
  },
  {
    id: "recent-mouse-sem-fio",
    marca: "Logitech",
    title: "Mouse Sem Fio",
    description: "Mouse ergonômico com conexão USB",
    image: mouse,
    price: "59,90",
    avaliacao: 4.5,
    categoria: "Acessórios",
    isMock: true,
    sections: ["recent"],
    details: {
      Titulo1: "Conexão",
      Desc1: "Receptor USB sem fio",
      Titulo2: "Alcance",
      Desc2: "Até 10 metros",
      Titulo3: "Formato",
      Desc3: "Design ergonômico ambidestro",
      Titulo4: "Alimentação",
      Desc4: "Uma pilha com longa duração",
    },
  },
  {
    id: "recent-teclado-mecanico",
    marca: "Redragon",
    title: "Teclado Mecânico",
    description: "Teclado mecânico compacto RGB",
    image: teclado,
    price: "189,90",
    oldPrice: "189,90",
    discount: "21% OFF",
    offerPrice: "149,90",
    avaliacao: 4.8,
    categoria: "Acessórios",
    isMock: true,
    sections: ["recent", "offers"],
    details: {
      Titulo1: "Formato",
      Desc1: "Compacto, com 87 teclas",
      Titulo2: "Iluminação",
      Desc2: "RGB com efeitos personalizáveis",
      Titulo3: "Conexão",
      Desc3: "USB com cabo reforçado",
      Titulo4: "Switches",
      Desc4: "Mecânicos com resposta tátil",
    },
  },
  {
    id: "recent-webcam-full-hd",
    marca: "Logitech",
    title: "Webcam Full HD",
    description: "Webcam com resolução Full HD",
    image: webcam,
    price: "119,90",
    avaliacao: 4.6,
    categoria: "Tecnologia",
    isMock: true,
    sections: ["recent"],
    details: {
      Titulo1: "Resolução",
      Desc1: "Full HD 1080p",
      Titulo2: "Microfone",
      Desc2: "Integrado com captação estéreo",
      Titulo3: "Instalação",
      Desc3: "Clipe ajustável e conexão USB",
      Titulo4: "Privacidade",
      Desc4: "Tampa deslizante para a lente",
    },
  },
  {
    id: "recent-suporte-notebook",
    marca: "Baseus",
    title: "Suporte para Notebook",
    description: "Suporte ajustável para notebook",
    image: suporte,
    price: "79,90",
    avaliacao: 4.4,
    categoria: "Acessórios",
    isMock: true,
    sections: ["recent"],
    details: {
      Titulo1: "Material",
      Desc1: "Alumínio leve e resistente",
      Titulo2: "Ajuste",
      Desc2: "Altura e inclinação reguláveis",
      Titulo3: "Compatibilidade",
      Desc3: "Notebooks de até 15,6 polegadas",
      Titulo4: "Ventilação",
      Desc4: "Design aberto para ajudar na dissipação de calor",
    },
  },
  {
    id: "recent-headset-gamer",
    marca: "HyperX",
    title: "Headset Gamer",
    description: "Headset com microfone e som estéreo",
    image: fonegamer,
    price: "119,90",
    oldPrice: "159,90",
    discount: "25% OFF",
    avaliacao: 4.9,
    categoria: "Tecnologia",
    isMock: true,
    sections: ["recent", "featured", "offers"],
    details: {
      Titulo1: "Áudio",
      Desc1: "Som estéreo com graves reforçados",
      Titulo2: "Microfone",
      Desc2: "Articulado com redução de ruído",
      Titulo3: "Conforto",
      Desc3: "Almofadas macias e ajustáveis",
      Titulo4: "Compatibilidade",
      Desc4: "PC, consoles e dispositivos móveis",
    },
  },
  {
    id: "featured-mouse-gamer",
    marca: "Logitech",
    title: "Mouse Gamer",
    description: "Mouse leve perfeito para jogos competitivos",
    image: mousegamer,
    price: "179,90",
    avaliacao: 4.6,
    categoria: "Acessórios",
    isMock: true,
    sections: ["featured"],
    details: {
      Titulo1: "Sensor",
      Desc1: "Até 12.000 DPI ajustáveis",
      Titulo2: "Botões",
      Desc2: "6 botões programáveis",
      Titulo3: "Iluminação",
      Desc3: "RGB personalizável",
      Titulo4: "Cabo",
      Desc4: "Revestimento trançado resistente",
    },
  },
  {
    id: "featured-monitor-gamer",
    marca: "Samsung",
    title: "Monitor Gamer",
    description: "Monitor gamer de 24 polegadas com alta taxa de atualização",
    image: monitor,
    price: "899,90",
    avaliacao: 4.9,
    categoria: "Tecnologia",
    isMock: true,
    sections: ["featured"],
    details: {
      Titulo1: "Tela",
      Desc1: "24 polegadas Full HD",
      Titulo2: "Taxa de atualização",
      Desc2: "144 Hz para imagens mais fluidas",
      Titulo3: "Conexões",
      Desc3: "HDMI e DisplayPort",
      Titulo4: "Painel",
      Desc4: "Cores vivas com amplo ângulo de visão",
    },
  },
  {
    id: "featured-controle-sem-fio",
    marca: "Sony",
    title: "Controle Sem Fio",
    description: "Controle sem fio compatível com PC e outros dispositivos",
    image: controle,
    price: "249,90",
    avaliacao: 4.7,
    categoria: "Acessórios",
    isMock: true,
    sections: ["featured"],
    details: {
      Titulo1: "Conexão",
      Desc1: "Bluetooth sem fio",
      Titulo2: "Compatibilidade",
      Desc2: "PC, console e dispositivos móveis",
      Titulo3: "Bateria",
      Desc3: "Recarregável via USB-C",
      Titulo4: "Controles",
      Desc4: "Vibração e sensores de movimento",
    },
  },
  {
    id: "featured-microfone-usb",
    marca: "Redragon",
    title: "Microfone USB",
    description: "Microfone USB com captação de áudio nítida para streams e chamadas",
    image: microfone,
    price: "179,90",
    avaliacao: 4.5,
    categoria: "Tecnologia",
    isMock: true,
    sections: ["featured"],
    details: {
      Titulo1: "Conexão",
      Desc1: "USB plug and play",
      Titulo2: "Captação",
      Desc2: "Padrão cardioide para voz nítida",
      Titulo3: "Ajustes",
      Desc3: "Controle de volume integrado",
      Titulo4: "Acessórios",
      Desc4: "Acompanha tripé de mesa ajustável",
    },
  },
  {
    id: "fallback-headset-pulse-x",
    marca: "HyperX",
    title: "Headset Gamer Pulse X",
    description:
      "Imersão e conforto para acompanhar cada partida. Som potente, microfone ajustável e conexão simples para o seu setup.",
    image: headset,
    price: "119,90",
    avaliacao: 4.8,
    oldPrice: "159,90",
    discount: "25% OFF",
    categoria: "Tecnologia",
    isMock: true,
    sections: ["fallback"],
  },
];

const STORAGE_KEY = "anuncios";
const obsoleteMockIds = new Set([
  "featured-headset-gamer",
  "offer-fone-bluetooth",
  "offer-teclado-mecanico",
  "offer-headset-gamer",
]);

function isManagedProduct(value: unknown): value is ManagedProduct {
  if (typeof value !== "object" || value === null) return false;

  const product = value as Record<string, unknown>;
  return (
    typeof product.id === "string" &&
    typeof product.title === "string" &&
    typeof product.description === "string" &&
    typeof product.price === "string" &&
    typeof product.image === "string"
  );
}

function readProducts(): ManagedProduct[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  try {
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      console.error(`O conteúdo de "${STORAGE_KEY}" não é uma lista de produtos.`);
      return [];
    }

    const products = parsed.filter(isManagedProduct);
    if (products.length !== parsed.length) {
      console.error(`Alguns produtos inválidos foram ignorados em "${STORAGE_KEY}".`);
    }
    return products;
  } catch (error) {
    console.error(`Não foi possível ler os produtos de "${STORAGE_KEY}".`, error);
    return [];
  }
}

export function initializeProducts(): void {
  const products = readProducts().filter(
    (product) => !(product.isMock && obsoleteMockIds.has(product.id)),
  );
  const ids = new Set(products.map((product) => product.id));
  const mocksById = new Map(mockProducts.map((product) => [product.id, product]));
  const refreshedProducts = products.map(
    (product) =>
      (product.isMock && mocksById.get(product.id)) || product,
  );
  const missingMocks = mockProducts.filter((product) => !ids.has(product.id));
  const initializedProducts = [...refreshedProducts, ...missingMocks];

  if (JSON.stringify(initializedProducts) !== JSON.stringify(products)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initializedProducts));
  }
}

export function getProductCategories(product: ManagedProduct): string[] {
  if (product.categorias?.length) return product.categorias;
  return product.categoria ? [product.categoria] : [];
}

export function getProducts(): ManagedProduct[] {
  initializeProducts();
  return readProducts();
}

export function addProduct(product: ManagedProduct): void {
  const products = getProducts();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...products, { ...product, isMock: false }]),
  );
}

export function getMockProduct(id: string): ManagedProduct | undefined {
  return getProducts().find((product) => product.id === id);
}
