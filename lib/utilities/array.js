"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.remaining = remaining;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function first(array) {
    return array[0];
}
function flatten(array) {
    return array.reduce(function(array1, element) {
        array1 = array1.concat(element); ///
        return array1;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}
function remaining(element, array) {
    if (element === null) {
        return array;
    }
    var index = indexOf(element, array);
    return array.slice(index + 1);
}
function indexOf(element, array) {
    var index = null;
    array.some(function(currentElement, currentElementIndex) {
        if (currentElement === element) {
            index = currentElementIndex;
            return true;
        }
    });
    return index;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLEtBQUssR0FBTCxLQUFLO1FBRUwsT0FBTyxHQUFQLE9BQU87UUFRUCxTQUFTLEdBQVQsU0FBUztRQVFULFNBQVMsR0FBVCxTQUFTOzs7Ozs7OztTQWxCVCxLQUFLLENBQUMsS0FBSztXQUFXLEtBQUssQ0FBQyxDQUFDOztTQUU3QixPQUFPLENBQUMsS0FBSztXQUNwQixLQUFLLENBQUMsTUFBTSxVQUFFLE1BQUssRUFBRSxPQUFPO1FBQ2pDLE1BQUssR0FBRyxNQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7ZUFFNUIsTUFBSzs7O1NBSUEsU0FBUyxDQUFDLGNBQWM7SUFDdEMsY0FBYyxHQUFHLGNBQWM7V0FFdkIsV0FBK0IsQ0FBL0IsY0FBYyxFQUFZLEtBQUssSUFDN0IsY0FBYztRQUNYLGNBQWM7OztTQUdiLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUNsQyxPQUFPLEtBQUssSUFBSTtlQUNYLEtBQUs7O1FBR1IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSztXQUU3QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDOztTQUdyQixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDekIsS0FBSyxHQUFHLElBQUk7SUFFaEIsS0FBSyxDQUFDLElBQUksVUFBRSxjQUFjLEVBQUUsbUJBQW1CO1lBQ3pDLGNBQWMsS0FBSyxPQUFPO1lBQzVCLEtBQUssR0FBRyxtQkFBbUI7bUJBRXBCLElBQUk7OztXQUlSLEtBQUsifQ==