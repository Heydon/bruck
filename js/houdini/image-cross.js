class CrossPainter {
  static get inputProperties() {
    return ['--border-thin', '--color-dark'];
  }

  paint(ctx, size, props) {
    ctx.lineWidth = props.get('--border-thin').value;
    ctx.strokeStyle = props.get('--color-dark').toString();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size.width, size.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(size.width, 0);
    ctx.lineTo(0, size.height);
    ctx.stroke();
  }
}

registerPaint('image-cross', CrossPainter);