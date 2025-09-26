import type { ItemType } from '../assets/type';

export default function Item(props: { item: ItemType }) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <p>
        {props.item.species} - {props.item.status}
      </p>
    </div>
  );
}
