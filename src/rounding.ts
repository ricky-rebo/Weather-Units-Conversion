const round = (num: number, decimalPos: number, base?: number) => {
  const pow = Math.pow(base||10, decimalPos);
  return Math.round(num * pow) / pow;
}

export default round;