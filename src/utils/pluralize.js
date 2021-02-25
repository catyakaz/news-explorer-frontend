export default function pluralize(n, { zero, one, two, five }) {
 const mod = Math.abs(n) % 10;
  let pattern;
  if (zero && mod === 0) pattern = zero;
  else if (mod === 1) pattern = one;
  else if (mod > 1 && mod <= 4) pattern = two;
  else pattern = five;
  return pattern.replace('{}', n);
}