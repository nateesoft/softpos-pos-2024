export const display = (data, currencyBaht, currencyUse) => {
    // const currencyBaht = 1
    // const currencyUse = 733
    const number = parseFloat(data)

    if (currencyBaht >= currencyUse) {
        return number / currencyBaht
    }
    return number * currencyUse
}
