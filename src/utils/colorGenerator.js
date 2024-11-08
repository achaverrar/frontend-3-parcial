const COLOR_OPTIONS = [
  "darkred",
  "darkorange",
  "goldenrod",
  "darkgreen",
  "royalblue",
  "indigo",
  "darkviolet",
];

export const generateColor = (name, date) => {
  const numberFromDate = date.trim().replace(/\-/g, "");
  const numberFromName = name
    .split("")
    .reduce((total, letter) => (total += letter.charCodeAt(0)), 0);

  const option = (numberFromDate + numberFromName) % 7;

  return COLOR_OPTIONS[option];
};
