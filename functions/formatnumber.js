export default function formatNumber(number, type) {
  let exponent = Math.floor(Math.log10(number))
  let mantissa = number / Math.pow(10, exponent)
  if (exponent < 3) return number.toFixed(1)
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
  if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}
