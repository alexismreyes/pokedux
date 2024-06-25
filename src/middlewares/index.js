export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'myOwnPokemon_Blaster'}, ...actionInfo.action.payload];
    const updatedAction = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured},
    };
    next(updatedAction);
}