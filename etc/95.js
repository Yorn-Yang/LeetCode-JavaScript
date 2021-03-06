var generateTrees = function(n) {
    if(n === 0) return [];
    return generate_tree(1, n);
};

function generate_tree (start, end) {
    const res = [];
    if(start > end) return [null];
    for (let i = start; i <= end; i++) {
        let left_trees = generate_tree(start, i - 1);
        let right_trees = generate_tree(i + 1, end);
        for (const ln of left_trees) {
            for (const rn of right_trees) {
                const cur = new TreeNode(i);
                cur.left = ln;
                cur.right = rn;
                res.push(cur);
            }
        }
    }
    return res;
}
