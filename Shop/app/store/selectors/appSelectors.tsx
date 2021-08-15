import {get} from 'lodash';

export const getList = state => get(state, 'app.shopList', []);

export const getArchivedList = state => get(state, 'app.archivedList', []);
