const toCustomProps = obj => {
  const declarations = Object.entries(obj).map(entry => {
    return `\t--${entry[0]}: ${entry[1]};\n`
  }).join('');
  return `:root {\n${declarations}}`
}

export { toCustomProps }