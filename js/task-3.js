function getElementWidth(content, padding, border) {
  const [contentWidth, paddingWidth, borderWidth] = [
    content,
    padding,
    border,
  ].map((value) => parseFloat(value));

  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}

// Перевірка
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8px")); // 100
console.log(getElementWidth("200px", "0px", "0px")); // 200
