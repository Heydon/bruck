export default function dataFromForm(form) {
  const data = new FormData(form);
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