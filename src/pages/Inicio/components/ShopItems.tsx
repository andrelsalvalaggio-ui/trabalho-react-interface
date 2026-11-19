
import { ShopCard } from "../../../components/ShopCard";
import mousegamer from "../../../assets/mousegamer.webp";
import headset from "../../../assets/headset.webp";
import monitor from "../../../assets/monitor.webp";
import controle from "../../../assets/controle.webp";
import microfone from "../../../assets/microfone.webp";
import { FlexCard } from "./FlexCard";

export function ShopItems() {
    return (
        <div className="flex w-full flex-row flex-wrap gap-y-5">
            <FlexCard>
                <ShopCard
                    marca="HyperX"
                    title="Headset Gamer"
                    description="Headset gamer com som surround e microfone integrado"
                    image={headset}
                    price="199,90"
                    avaliacao={4.8}
                    details={{
                        Titulo1: "Áudio",
                        Desc1: "Som surround virtual 7.1",
                        Titulo2: "Microfone",
                        Desc2: "Removível com redução de ruído",
                        Titulo3: "Conforto",
                        Desc3: "Arco ajustável e almofadas acolchoadas",
                        Titulo4: "Compatibilidade",
                        Desc4: "Compatível com PC e consoles",
                    }}
                />
            </FlexCard>

            <FlexCard>
                <ShopCard
                    marca="Logitech"
                    title="Mouse Gamer"
                    description="Mouse leve perfeito para jogos competitivos"
                    image={mousegamer}
                    price="179,90"
                    avaliacao={4.6}
                    details={{
                        Titulo1: "Sensor",
                        Desc1: "Até 12.000 DPI ajustáveis",
                        Titulo2: "Botões",
                        Desc2: "6 botões programáveis",
                        Titulo3: "Iluminação",
                        Desc3: "RGB personalizável",
                        Titulo4: "Cabo",
                        Desc4: "Revestimento trançado resistente",
                    }}
                />
            </FlexCard>

            <FlexCard>
                <ShopCard
                    marca="Samsung"
                    title="Monitor Gamer"
                    description="Monitor gamer de 24 polegadas com alta taxa de atualização"
                    image={monitor}
                    price="899,90"
                    avaliacao={4.9}
                    details={{
                        Titulo1: "Tela",
                        Desc1: "24 polegadas Full HD",
                        Titulo2: "Taxa de atualização",
                        Desc2: "144 Hz para imagens mais fluidas",
                        Titulo3: "Conexões",
                        Desc3: "HDMI e DisplayPort",
                        Titulo4: "Painel",
                        Desc4: "Cores vivas com amplo ângulo de visão",
                    }}
                />
            </FlexCard>

            <FlexCard>
                <ShopCard
                    marca="Sony"
                    title="Controle Sem Fio"
                    description="Controle sem fio compatível com PC e outros dispositivos"
                    image={controle}
                    price="249,90"
                    avaliacao={4.7}
                    details={{
                        Titulo1: "Conexão",
                        Desc1: "Bluetooth sem fio",
                        Titulo2: "Compatibilidade",
                        Desc2: "PC, console e dispositivos móveis",
                        Titulo3: "Bateria",
                        Desc3: "Recarregável via USB-C",
                        Titulo4: "Controles",
                        Desc4: "Vibração e sensores de movimento",
                    }}
                />
            </FlexCard>

            <FlexCard>
                <ShopCard
                    marca="Redragon"
                    title="Microfone USB"
                    description="Microfone USB com captação de áudio nítida para streams e chamadas"
                    image={microfone}
                    price="179,90"
                    avaliacao={4.5}
                    details={{
                        Titulo1: "Conexão",
                        Desc1: "USB plug and play",
                        Titulo2: "Captação",
                        Desc2: "Padrão cardioide para voz nítida",
                        Titulo3: "Ajustes",
                        Desc3: "Controle de volume integrado",
                        Titulo4: "Acessórios",
                        Desc4: "Acompanha tripé de mesa ajustável",
                    }}
                />
            </FlexCard>
        </div>
    );
}
