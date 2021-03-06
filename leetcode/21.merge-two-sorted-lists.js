/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  let pCur = { next: null }
  const pHead = pCur
  let p1 = l1, p2 = l2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      pCur.next = p1
      pCur = p1
      p1 = p1.next
    } else {
      pCur.next = p2
      pCur = p2
      p2 = p2.next
    }
  }
  if (p1) {
    pCur.next = p1
  } else if (p2) {
    pCur.next = p2
  }
  return pHead.next
}

