export const currencyFormatter = nominal => {
    if (nominal !== undefined) {
        return nominal
            .toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                currencyDisplay: 'code',
            })
            .slice(0, -3);
    } else {
        console.error('Parameter is undefined or null, parameter value :', nominal);
    }
};
