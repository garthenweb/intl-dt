import format from './formatter';
import months from './months';
import days from './days';

const sortGlobalArgs = (globalArgs) => {
  const args = [...globalArgs];
  const isLocalFirst = typeof args[0] === 'string';
  // local is not defined so we create a gap at the end
  // this will later revers so that the local will be the first param
  if (args.length === 1 && !isLocalFirst) {
    args.push(null);
  }
  return isLocalFirst ? args : args.reverse();
};

const getFormatArgs = (globalArgs, localArgs) => {
  const args = [...localArgs];
  const [globalLocal, globalDate] = sortGlobalArgs(globalArgs);
  // case if template is the first and thuse a date is missing
  if (typeof args[0] === 'string') {
    args.unshift(globalDate);
  }

  // last argument is not defined, we need to add the local
  if (!args[2]) {
    args.push(globalLocal);
  }
  return args;
};

const createIntlDT = (...globalArgs) => {
  const [globalLocal] = sortGlobalArgs(globalArgs);
  return {
    format: (...args) =>  format(...getFormatArgs(globalArgs, args)),
    months: (type) => months(globalLocal, type),
    days: (type) => days(globalLocal, type),
  };
};

export { default as format } from './formatter';
export { default as months } from './months';
export { default as days } from './days';
export default createIntlDT;
