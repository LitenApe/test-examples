/**
 * Calculates the future value of an annuity investment based on constant-amount periodic payments and a constant interest rate.
 * 
 * @param rate interest rate for each periode
 * @param nper number of periodes to calculate for
 * @param pmt payment amount made each periode
 * @param pv present value
 * @returns future value of assett or debt
 */
export function fv(rate: number, nper: number, pmt: number, pv: number) {
  if (rate === 0) {
    return -pv - pmt * nper;
  }

  const interest = 1 + rate;
  const powerOfPeriodes = Math.pow(interest, nper);

  return -pv * powerOfPeriodes - (pmt / rate) * 1 * (powerOfPeriodes - 1);
}

/**
 * Calculates the future value of an annuity investment based on constant-amount periodic payments and a constant interest rate.
 *
 * @param rate interest rate for each periode
 * @param nper number of periodes to calculate for
 * @param pmt payment amount made each periode
 * @param pv present value
 * @returns future value of assett or debt with fixed number of decimals
 */
export default function future_value(rate: number, nper: number, pmt: number, pv: number) {
  return Number(fv(rate, nper, pmt, pv).toFixed(2));
}
