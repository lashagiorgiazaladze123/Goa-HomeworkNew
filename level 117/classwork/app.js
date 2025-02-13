function binRota(arr) {
    return arr.reduce(function(a, b, index) {
        return (index % 2 === 0) ? a.concat(b) : a.concat(b.reverse());
    });
}