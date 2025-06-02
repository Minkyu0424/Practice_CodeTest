function solution(operations) {
    const minHeap = [];
    const maxHeap = [];
    const visited = new Map();
    let id = 0;

    // 힙 삽입 (minHeap 또는 maxHeap)
    function heapPush(heap, item, isMax) {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if ((isMax ? heap[parent][0] < heap[i][0] : heap[parent][0] > heap[i][0])) {
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            } else break;
        }
    }

    // 힙 제거 (최상단 pop)
    function heapPop(heap, isMax) {
        if (heap.length === 0) return null;
        const top = heap[0];
        const end = heap.pop();
        if (heap.length > 0) {
            heap[0] = end;
            let i = 0;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let target = i;

                if (left < heap.length &&
                    (isMax ? heap[left][0] > heap[target][0] : heap[left][0] < heap[target][0])) {
                    target = left;
                }
                if (right < heap.length &&
                    (isMax ? heap[right][0] > heap[target][0] : heap[right][0] < heap[target][0])) {
                    target = right;
                }

                if (target === i) break;
                [heap[i], heap[target]] = [heap[target], heap[i]];
                i = target;
            }
        }
        return top;
    }

    // 힙 top 확인
    function heapPeek(heap) {
        return heap.length ? heap[0] : null;
    }

    for (const op of operations) {
        const [cmd, valStr] = op.split(' ');
        const val = Number(valStr);

        if (cmd === 'I') {
            heapPush(minHeap, [val, id], false);
            heapPush(maxHeap, [val, id], true);
            visited.set(id, true);
            id++;
        } else if (cmd === 'D') {
            const targetHeap = val === 1 ? maxHeap : minHeap;
            while (targetHeap.length) {
                const [v, i] = heapPop(targetHeap, val === 1);
                if (visited.get(i)) {
                    visited.set(i, false);
                    break;
                }
            }
        }
    }

    let max = null;
    let min = null;

    while (maxHeap.length) {
        const [v, i] = heapPop(maxHeap, true);
        if (visited.get(i)) {
            max = v;
            break;
        }
    }

    while (minHeap.length) {
        const [v, i] = heapPop(minHeap, false);
        if (visited.get(i)) {
            min = v;
            break;
        }
    }

    return max === null || min === null ? [0, 0] : [max, min];
}