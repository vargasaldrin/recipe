export default function Special(props) {
  const data = props.data;

  return (
    <ul>
      <li>
        Title: <span>{data.title}</span>
      </li>
      <li>Type: {data.type}</li>
      <li>Text: {data.text}</li>
    </ul>
  );
}
