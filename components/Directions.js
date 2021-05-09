export default function Directions(props) {
  const items = props.data;
  const list = items.map((item, index) => {
    return <li key={index}>{item.instructions}</li>;
  });
  return <ol>{list}</ol>;
}
