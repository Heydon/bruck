export default function separateNodes(nodes, HTMLstring) {
  const elems = Array.from(nodes);
  elems.map((elem, i) => i > 0
    ? elem.insertAdjacentHTML('beforebegin', HTMLstring)
    : elem
  );
}