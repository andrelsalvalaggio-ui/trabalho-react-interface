import { ShopCard } from "../../../components/ShopCard";
import mousegamer from "../../../assets/mousegamer.png";
import headset from "../../../assets/headset.webp";
import monitor from "../../../assets/monitor.webp";
import controle from "../../../assets/controle.webp";
import microfone from "../../../assets/microfone.webp";
import { FlexCard } from "./FlexCard";

export function ShopItems() {
    return (
        <>
            <div className="flex row flex-wrap gap-y-5">
                <FlexCard>
                    <ShopCard 
                        title="Headset Gamer" 
                        description="Headset gamer com som surround e microfone integrado"
                        image={headset}
                        price="199,90"
                    />
                </FlexCard>
                <FlexCard>
                    <ShopCard 
                        title="Mouse Gamer"
                        description="Mouse leve perfeito para jogos competitivos"
                        image={mousegamer}
                        price="179,90"
                    />
                </FlexCard>

                <FlexCard>
                    <ShopCard 
                        title="Monitor Gamer"
                        description="Monitor gamer de 24 polegadas com alta taxa de atualização"
                        image={monitor}
                        price="899,90"
                    />
                </FlexCard>
                <FlexCard>
                    <ShopCard 
                        title="Controle Sem Fio"
                        description="Controle sem fio compatível com PC e outros dispositivos"
                        image={controle}
                        price="249,90"
                    />
                </FlexCard>
                <FlexCard>
                <ShopCard 
                    title="Microfone USB"
                    description="Microfone USB com captação de áudio nítida para streams e chamadas"
                    image={microfone}
                    price="179,90"
                />
                </FlexCard>
            </div>
        </>
    )
}