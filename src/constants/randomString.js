// @flow

const createRandomStr = (): string => {
  const randomStr: string = Math.random().toString(36);
  return randomStr;
};

export default createRandomStr;
