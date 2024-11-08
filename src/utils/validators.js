const NAME_REGEX = /^[A-Za-z]{3,}$/;
const DATE_REGEX = /^([0-2][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

export const isValidName = (name) => NAME_REGEX.test(name.trim());

export const isOldEnough = (birthDate, minAge = 3) => {
  const normalizedDate = birthDate?.trim();
  if (!normalizedDate) return false;

  const hasCorrectFormat = DATE_REGEX.test(normalizedDate);
  const approximatedAge =
    new Date().getFullYear() - new Date(normalizedDate).getFullYear();

  return hasCorrectFormat && approximatedAge > minAge;
};
