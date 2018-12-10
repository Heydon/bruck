export default function dataFromForm(form) {
  const data = new FormData(form);
  const values = {};
  for (let [key, value] of data.entries()) {
    let proxy = document.createElement('span');
    proxy.innerHTML = value;
    let text = proxy.textContent;
    if (values[key]) {
      if (!(values[key] instanceof Array)) {
        values[key] = new Array(values[key]);
      }
      values[key].push(text);
    } else {
      values[key] = text;
    }
  }
  return values;
}