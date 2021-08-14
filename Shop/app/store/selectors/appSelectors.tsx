import {get} from 'lodash';

export const getList = state => get(state, 'app.shopList', []);

export const getArchivedList = (state): boolean =>
  get(state, 'app.archivedList', []);
