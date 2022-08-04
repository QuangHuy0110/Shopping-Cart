import {createSelector} from 'reselect'

const detailState = state =>state.detail;

export const getLoadingStateDetail = createSelector(
    detailState,
    state => state.loadingDetail
)

export const getErrorStateDetail = createSelector(
    detailState,
    state => state.errorDetail
)

export const getDataDetailState = createSelector(
    detailState,
    state =>state.detailPd

)