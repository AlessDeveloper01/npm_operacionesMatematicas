/**
 * A module that provides basic mathematical operations.
 * @module npm_operacionesMatematicas
 */

module.exports = {
    /**
     * Returns the sum of two numbers.
     * @param {number} a - The first number to add.
     * @param {number} b - The second number to add.
     * @returns {number} The sum of the two numbers.
     */
    suma: function (a, b) {
        return a + b;
    },
    /**
     * Returns the difference between two numbers.
     * @param {number} a - The number to subtract from.
     * @param {number} b - The number to subtract.
     * @returns {number} The difference between the two numbers.
     */
    resta: function (a, b) {
        return a - b;
    },
    /**
     * Returns the product of two numbers.
     * @param {number} a - The first number to multiply.
     * @param {number} b - The second number to multiply.
     * @returns {number} The product of the two numbers.
     */
    multiplicacion: function (a, b) {
        return a * b;
    },
    /**
     * Returns the quotient of two numbers.
     * @param {number} a - The dividend.
     * @param {number} b - The divisor.
     * @returns {number} The quotient of the two numbers.
     */
    division: function (a, b) {
        return a / b;
    }
}