import { createSelector } from 'reselect'

const stateHome = state => state.home 

export const getLoadingHome = createSelector(
    stateHome,
    state => state.loadingHome
)

export const getErrorHome = createSelector(
    stateHome,
    state => state.errorHome

)

export const getDataProductState = createSelector(
    stateHome,
    data => data.dataProducts

)