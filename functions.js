const circleArea = (r) => {
    return (Math.PI * r * r).toFixed(2);
}

const circleCircumference = (r) => {
    return (2 * Math.PI * r).toFixed(2);
}

module.exports = {
    circleArea,
    circleCircumference
}
