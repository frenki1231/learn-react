import type { ItemType } from '../../assets/type';
import Item from '../Item/Item';

export default function ListItems(props: { items: ItemType[] }) {
  return (
    <div>
      {props.items.length === 0 && <div>No results</div>}
      {props.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
