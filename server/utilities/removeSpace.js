const removeSpace = str => {
  const subject = str;
  const result = str.replace(/\s+/g, '');
  if (result !== subject) {
    return false;
  }
  return true;
};

export default removeSpace;
