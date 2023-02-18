let sizes = [];
export const sizeEstimate = (
  chestSize,
  waistSize,
  sizeTableChest,
  sizeTableWaist,
  LOOKUP
) => {
  for (let i = 0; i < sizeTableChest.length; i++) {
    if (chestSize > sizeTableChest[i] && chestSize < sizeTableChest[i + 1]) {
      sizes.push(LOOKUP[i]);
    }
  }
  for (let i = 0; i < sizeTableWaist.length; i++) {
    if (waistSize > sizeTableWaist[i] && waistSize < sizeTableWaist[i + 1]) {
      sizes.push(LOOKUP[i]);
    }
  }

  if (
    chestSize < sizeTableChest[0] ||
    chestSize > sizeTableChest[sizeTableChest.length - 1] ||
    waistSize < sizeTableWaist[0] ||
    waistSize > sizeTableWaist[sizeTableWaist.length - 1]
  ) {
    return [false, 'Sorry, your ideal size is not available for this product.'];
  }

  const indexChest = LOOKUP.indexOf(sizes[0]);
  const indexWaist = LOOKUP.indexOf(sizes[1]);
  sizes = [];
  if (indexChest > indexWaist) return [true, LOOKUP[indexChest]];
  else return [true, LOOKUP[indexWaist]];
};
