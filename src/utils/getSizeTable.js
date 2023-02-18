const sizeTableChestWomenOversize = [
  [60, 63],
  [63.5, 65],
  [65.5, 67.5],
  [68, 70],
  [70.5, 72],
];
const sizeTableWaistWomenOversize = [
  [54, 55.5],
  [55.5, 57.5],
  [57.5, 60.5],
  [60.5, 62],
  [62, 64],
];

const sizeTableChestWomenLower = [
  [86, 89],
  [90, 93],
  [94, 97],
  [98, 101],
  [102, 105],
  [106, 109],
  [110, 113],
  [114, 117],
];
const sizeTableWaistWomenLower = [
  [60, 63],
  [64, 65],
  [66, 69],
  [70, 73],
  [74, 77],
  [78, 81],
  [82, 85],
  [86, 90],
];

const sizeTableChestWomen = [
  [80, 83],
  [84, 88],
  [89, 94],
  [95, 100],
  [101, 106],
];
const sizeTableWaistWomen = [
  [61, 64],
  [65, 69],
  [70, 75],
  [76, 81],
  [82, 87],
];
const sizeTableChestMen = [
  [87, 89],
  [93, 95],
  [99, 101],
  [105, 107],
  [112, 114],
  [120, 122],
  [128, 130],
  [136, 138],
  [144, 147],
];
const sizeTableWaistMen = [
  [78, 80],
  [82, 84],
  [88, 90],
  [92, 94],
  [98, 100],
  [104, 106],
  [110, 112],
  [116, 118],
  [122, 124],
];

const sizeTableWaistMenLowerOversize = [
  [35.5, 36.4],
  [36.5, 39.9],
  [40, 43.9],
  [44, 44.9],
  [45, 46],
];
const sizeTableChestMenLowerOversize = [
  [55.5, 57.9],
  [58, 60.9],
  [61, 64.4],
  [64.5, 65.4],
  [65.5, 66.5],
];

const sizeTableChestUnisex = [
  [72, 80],
  [80, 88],
  [88, 96],
  [96, 104],
  [104, 112],
  [112, 124],
  [124, 136],
];
const sizeTableWaistUnisex = [
  [72, 80],
  [80, 88],
  [88, 96],
  [96, 104],
  [104, 112],
  [112, 120],
  [120, 128],
];

const LOOKUPMAN = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL', 'XXXXXL'];
const LOOKUPWOMENOVERSIZE = ['S', 'M', 'L', 'XL', 'XXL'];
const LOOKUPWOMEN = ['XS', 'S', 'M', 'L', 'XL'];
const LOOKUPWOMENLOWER = [32, 34, 36, 38, 40, 42, 44, 46];
const LOOKUPMENLOWEROVERSIZE = ['S', 'M', 'L', 'XL', 'XXL'];

const LOOKUPUNISEX = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

export const getSizeByTable = (
  size,
  gender,
  sizeTableChestFirm,
  sizeTableWaistFirm,
  sizeNameFirm,
  sizeType,
  proudctType
) => {
  console.log(size);
  let LOOKUP = [];
  let sizeTableChest = [];
  let sizeTableWaist = [];
  if (gender == 'women' && proudctType == 'upper') {
    if (sizeType == 'oversize') {
      LOOKUP = LOOKUPWOMENOVERSIZE;
      sizeTableChest = sizeTableChestWomenOversize;
      sizeTableWaist = sizeTableWaistWomenOversize;
    } else {
      LOOKUP = LOOKUPWOMEN;
      sizeTableChest = sizeTableChestWomen;
      sizeTableWaist = sizeTableWaistWomen;
    }
  } else if (gender == 'women' && proudctType == 'lower') {
    LOOKUP = LOOKUPWOMENLOWER;
    sizeTableChest = sizeTableChestWomenLower;
    sizeTableWaist = sizeTableWaistWomenLower;
  } else if (gender == 'men' && proudctType == 'lower') {
    if (sizeType == 'oversize') {
      LOOKUP = LOOKUPMENLOWEROVERSIZE;
      sizeTableChest = sizeTableChestMenLowerOversize;
      sizeTableWaist = sizeTableWaistMenLowerOversize;
    }
  } else if (gender == 'unisex') {
    LOOKUP = LOOKUPUNISEX;
    sizeTableChest = sizeTableChestUnisex;
    sizeTableWaist = sizeTableWaistUnisex;
  } else {
    LOOKUP = LOOKUPMAN;
    sizeTableChest = sizeTableChestMen;
    sizeTableWaist = sizeTableWaistMen;
  }
  console.log(LOOKUP);
  const index = LOOKUP.indexOf(size);

  const chestSize = sizeTableChest[index];
  console.log(chestSize);
  let chestSizeFirm;
  if (sizeType == 'oversize' && gender == 'women') {
    for (let i = 0; i < chestSize.length; i++) {
      for (let j = 0; j < sizeTableChestFirm.length; j++) {
        if (chestSize[i] == sizeTableChestFirm[j]) {
          chestSizeFirm = sizeNameFirm[j];
        } else if (
          chestSize[i] > sizeTableChestFirm[j] &&
          chestSize[i] < sizeTableChestFirm[j + 1]
        ) {
          console.log(chestSize[i]);
          chestSizeFirm = sizeNameFirm[j];
          console.log(sizeNameFirm[j]);
          console.log(j);
        }
      }
    }
  } else {
    for (let i = 0; i < sizeTableChestFirm.length; i++) {
      if (
        (gender == 'men' && proudctType == 'lower') ||
        size == 'L' ||
        size == 'XL'
      ) {
        chestSizeFirm = size;
        break;
      }
      if (sizeTableChestFirm[i] > sizeTableChest[sizeTableChest.length - 1]) {
        chestSizeFirm = LOOKUP[sizeTableChest.length - 1];
      }
      if (
        sizeTableChestFirm[i] > chestSize[0] &&
        sizeTableChestFirm[i] < chestSize[1]
      ) {
        chestSizeFirm = sizeNameFirm[i];
        break;
      } else if (
        sizeTableChestFirm[i] == chestSize[0] ||
        sizeTableChestFirm[i] == chestSize[1]
      ) {
        chestSizeFirm = sizeNameFirm[i];
        break;
      } else if (sizeTableChestFirm[i] > chestSize[1]) {
        chestSizeFirm = sizeNameFirm[i];
      }
    }
  }

  console.log(chestSizeFirm);

  const waistSize = sizeTableWaist[index];
  let waistSizeFirm;
  console.log(waistSize);
  if (sizeType == 'oversize' && gender == 'women') {
    for (let i = 0; i < waistSize.length; i++) {
      for (let j = 0; j < sizeTableWaistFirm.length; j++) {
        if (waistSize[i] == sizeTableWaistFirm[j]) {
          waistSizeFirm = sizeNameFirm[j];
        } else if (
          waistSize[i] > sizeTableWaistFirm[j] &&
          waistSize[i] < sizeTableWaistFirm[j + 1]
        ) {
          waistSizeFirm = sizeNameFirm[j];
        }
      }
    }
  } else {
    for (let i = 0; i < sizeTableWaistFirm.length; i++) {
      if (
        (gender == 'men' && proudctType == 'lower') ||
        size == 'L' ||
        size == 'XL'
      ) {
        waistSizeFirm = size;
        break;
      }
      if (sizeTableWaistFirm[i] > sizeTableWaist[sizeTableWaist.length - 1]) {
        waistSizeFirm = LOOKUP[sizeTableWaist.length - 1];
      }

      if (
        sizeTableWaistFirm[i] > waistSize[0] &&
        sizeTableWaistFirm[i] < waistSize[1]
      ) {
        waistSizeFirm = sizeNameFirm[i];
        break;
      } else if (
        sizeTableWaistFirm[i] == waistSize[0] ||
        sizeTableWaistFirm[i] == waistSize[1]
      ) {
        waistSizeFirm = sizeNameFirm[i];
        break;
      } else if (sizeTableWaistFirm[i] > waistSize[1]) {
        waistSizeFirm = sizeNameFirm[i];
      }
    }
  }
  console.log(waistSizeFirm);

  const indexChest = sizeNameFirm.indexOf(chestSizeFirm);
  const indexWaist = sizeNameFirm.indexOf(waistSizeFirm);

  return indexChest > indexWaist ? waistSizeFirm : chestSizeFirm;
};
