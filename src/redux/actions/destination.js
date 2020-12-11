/* eslint-disable import/prefer-default-export */
import Destinations from '../../services/destination.service';
import { FETCH_DESTINATION } from './actionTypes';

export const fetchDest = () => ({
  type: FETCH_DESTINATION,
  payload: Destinations.visited()
});
