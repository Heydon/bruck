export default function dataFromForm(formId) {
  const data = new FormData(document.getElementById(formId));
  const values = {};
  for (let [key, value] of data.entries()) {
    let safe = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    if (values[key]) {
      if (!(values[key] instanceof Array)) {
        values[key] = new Array(values[key]);
      }
      values[key].push(safe);
    } else {
      values[key] = safe;
    }
  }
  return values;
}