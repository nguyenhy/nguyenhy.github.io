interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

export const hex2dec = (hex: string) => {
  return parseInt(hex, 16);
};
export const hex2rgba = (hex: string): RGBA | null => {
  hex = hex.replace("#", "");
  if (!hex) {
    return null;
  }
  if (hex.length === 3) {
    return {
      r: hex2dec(hex[0]),
      g: hex2dec(hex[1]),
      b: hex2dec(hex[2]),
      a: 255,
    };
  } else if (hex.length === 4) {
    return {
      r: hex2dec(hex[0]),
      g: hex2dec(hex[1]),
      b: hex2dec(hex[2]),
      a: hex2dec(hex[3]),
    };
  } else if (hex.length === 6) {
    return {
      r: hex2dec(hex.substring(0, 2)),
      g: hex2dec(hex.substring(2, 4)),
      b: hex2dec(hex.substring(4, 6)),
      a: 255,
    };
  } else if (hex.length === 8) {
    return {
      r: hex2dec(hex.substring(0, 2)),
      g: hex2dec(hex.substring(2, 4)),
      b: hex2dec(hex.substring(4, 6)),
      a: hex2dec(hex.substring(6, 8)),
    };
  }
  return null;
};

/**
 * @reference https://stackoverflow.com/a/11615135/8332986
 */
export const hexalpha2hex = (value: number, alpha: number) => {
  return Math.round(
    (alpha * (value / 255) + (1 - alpha) * (value / 255)) * 255
  );
};

/**
 * @reference https://stackoverflow.com/a/11615135/8332986
 */
export const rbga2rgb = (rgba: RGBA): RGB => {
  return {
    r: hexalpha2hex(rgba.r, rgba.a),
    g: hexalpha2hex(rgba.g, rgba.a),
    b: hexalpha2hex(rgba.b, rgba.a),
  };
};

/**
 * @reference https://css-tricks.com/converting-color-spaces-in-javascript/
 */
export const rgb2hsl = (r: number, g: number, b: number): HSL => {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin;
  let h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60 * 100) / 100;

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(2);
  l = +(l * 100).toFixed(2);

  return {
    h,
    s,
    l,
  };
};

export const hlsToString = ({ h, s, l }: HSL) => `hls(${h}deg ${s}% ${l}%)`;

/**
 * @reference https://github.com/leodido/material-palette
 * Minimize the maximum possible loss
 *
 * @param      {number}             val           The input value to test
 *
 * @return     {number}             A number between 0 and 100
 */
const minimax = (val: number) => Math.min(100, Math.max(0, val));

/**
 * Material Palette Generator
 *
 * It calculates all colors from base.
 * These colors were determined by finding all HSL values for each google palette.
 * Then calculating the differences in H, S, and L per color change individually.
 * Finally applying these here.
 *
 * @param      {Object}           param           The input color
 * @param      {number}           h               The hue ([0, 360]) of the input color
 * @param      {number}           s               The saturation ([0, 100]) of the input color
 * @param      {number}           l               The lightness ([0, 100]) of the input color
 *
 * @return     {Object}           Its palette
 * @property   {Object}           50              The variant 50 of the color
 * @property   {Object}           100             The variant 100 of the color
 * @property   {Object}           200             The variant 200 of the color
 * @property   {Object}           300             The variant 300 of the color
 * @property   {Object}           400             The variant 400 of the color
 * @property   {Object}           500             The input color
 * @property   {Object}           600             The variant 600 of the color
 * @property   {Object}           700             The variant 700 of the color
 * @property   {Object}           800             The variant 800 of the color
 * @property   {Object}           900             The variant 900 of the color
 * @property   {Object}           A100            The accent variant 100 of the color
 * @property   {Object}           A200            The accent variant 200 of the color
 * @property   {Object}           A400            The accent variant 400 of the color
 * @property   {Object}           A700            The accent variant 700 of the color
 */
export const generator = ({ h, s, l }: HSL) => {
  h = Math.round(h);
  s = Math.round(s);
  l = Math.round(l);

  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    throw new TypeError("Invalid input");
  }
  if (h < 0 || h > 360) {
    throw new RangeError(`Hue must be an integer within [0, 360]; given ${h}`);
  }
  if (s < 0 || s > 100) {
    throw new RangeError(
      `Saturation must be an integer within [0, 100]; given ${s}`
    );
  }
  if (l < 0 || l > 100) {
    throw new RangeError(
      `Lightness must be an integer within [0, 100]; given ${l}`
    );
  }

  return {
    "50": { h, s, l: minimax(l + 52) },
    "100": { h, s, l: minimax(l + 37) },
    "200": { h, s, l: minimax(l + 26) },
    "300": { h, s, l: minimax(l + 12) },
    "400": { h, s, l: minimax(l + 6) },
    "500": { h, s, l },
    "600": { h, s, l: minimax(l - 6) },
    "700": { h, s, l: minimax(l - 12) },
    "800": { h, s, l: minimax(l - 18) },
    "900": { h, s, l: minimax(l - 24) },
    A100: { h: h + 5, s, l: minimax(l + 24) }, // { h, s, l: minimax(l + 52) }
    A200: { h: h + 5, s, l: minimax(l + 16) }, // { h, s, l: minimax(l + 37) }
    A400: { h: h + 5, s, l: minimax(l - 1) }, // { h, s, l: minimax(l + 6) }
    A700: { h: h + 5, s, l: minimax(l - 12) }, // { h, s, l: minimax(l - 12) }
  };
};

export const createHexVariantsColor = (hex: string) => {
  const rgba = hex2rgba(hex);
  if (!rgba) {
    return null;
  }
  const rgb = rbga2rgb(rgba);
  const hsl = rgb2hsl(rgb.r, rgb.g, rgb.b);
  return generator(hsl);
};
