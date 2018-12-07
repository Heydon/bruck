export default function dataFromForm(formId) {
  const data = new FormData(document.getElementById(formId));
  const values = {};
  for (let [key, value] of data.entries()) {
    if (values[key]) {
      if (!(values[key] instanceof Array)) {
        values[key] = new Array(values[key]);
      }
      values[key].push(value);
    } else {
      values[key] = value;
    }
  }
  return values;
}