document.addEventListener('DOMContentLoaded', function () {
    var downtimeCells = document.querySelectorAll('th.node-cell.name.center');
    downtimeCells.forEach(function (cell) {
        // 创建一个新的 <th> 元素
        var newTh = document.createElement('th');
        // 添加 class 属性
        newTh.className = 'node-cell downtime center';
        // 设置新元素的文本内容
        newTh.textContent = 'Expiration';
        // 将新元素插入到当前单元格的后面
        cell.parentNode.insertBefore(newTh, cell.nextSibling);
    });
});