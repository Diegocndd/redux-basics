export const incrementNumber = value => ({
    type: 'INCREMENT_NUMBER_UPDATE',
    newValue : value
});

export const decrementNumber = value => ({
    type: 'DECREMENT_NUMBER_UPDATE',
    newValue : value
})