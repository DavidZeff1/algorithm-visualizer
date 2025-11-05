export default function SwapAnimation(idx1, idx2) {
  const item1 = document.getElementById(`array-item-${idx1}`);
  const item2 = document.getElementById(`array-item-${idx2}`);

  item1.style.order = idx2;
  item2.style.order = idx1;
}
