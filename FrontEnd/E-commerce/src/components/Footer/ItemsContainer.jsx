import Item from "./Item";
import { INFORMACION, CONTACTANOS, REDES } from "./Menus";


const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-6  px-16 py-7 md:justify-items-center">
      <Item Links={INFORMACION} title="Informacion" />
      <Item Links={CONTACTANOS} title="Contáctenos" />
      <Item Links={REDES} title="REDES" />
    </div>
  )
}

export default ItemsContainer;