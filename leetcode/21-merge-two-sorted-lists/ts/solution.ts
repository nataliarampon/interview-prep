import { ListNode } from "../../util/list/list";

export function solution(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    if (list1.val >= list2.val) {
        list2.next = solution(list1, list2.next);
        return list2;
    } else {
        list1.next = solution(list2, list1.next);
        return list1;
    } 
}
