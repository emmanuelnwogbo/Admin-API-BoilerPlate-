const isEmpty = word => {
  if (word.replace(/\s/g, '') === '') {
    return true;
  }
  return false;
};

export default isEmpty;
