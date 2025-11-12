export default function removeKFromList(l, k) {
  if (!l) return null;

  while (l && l.value === k) {
    l = l.next;
  }

  if (!l) return null;
  let current = l;
  
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}
