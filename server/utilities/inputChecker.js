import isEmpty from './isEmpty';
import isEmail from './isEmail';
import removeSpace from './removeSpace';

const inputChecker = (req, res, next) => {
  const inputs = req.body;
  const check = inputs;
  const { email, confirmpassword, password } = check;
  const inputArr = Object.keys(check);
  const lastInput = inputArr.pop();

  let emptyInputCount = 0;
  let inputCheckerVal;
  let emptySpaceCheck = 0;

  for (const input in check) {
    if (isEmpty(check[input]) === true) {
      emptyInputCount += 1;
    }
  }

  for (const input in check) {
    if (removeSpace(check[input]) === false) {
      emptySpaceCheck += 1;
    }
  }

  if (emptyInputCount > 0) {
    inputCheckerVal = `please check your input for empty spaces`;
    return res.status(406).send({ message: inputCheckerVal });
  }

  if (emptySpaceCheck > 0) {
    inputCheckerVal = `inputs should not include empty spaces`;
    return res.status(406).send({ message: inputCheckerVal });
  }

  switch (lastInput) {
    case 'confirmpassword':
      if (confirmpassword !== password) {
        inputCheckerVal = `passwords don't match`;
        return res.status(406).send({ message: inputCheckerVal });
      }

      if (isEmail(email) === false) {
        inputCheckerVal = `not a valid email`;
        return res.status(406).send({ message: inputCheckerVal });
      }

      if (password.length <= 5) {
        inputCheckerVal = `password length should be greater than 5 characters`;
        return res.status(406).send({ message: inputCheckerVal });
      }
      next();
      break;
    case 'password':
      if (isEmail(email) === false) {
        inputCheckerVal = `not a valid email`;
        return res.status(406).send({ message: inputCheckerVal });
      }

      if (password.length <= 5) {
        inputCheckerVal = `password length should be greater than 5 characters`;
        return res.status(406).send({ message: inputCheckerVal });
      }
      next();
      break;
    default:
      next();
  }
};

export default inputChecker;
