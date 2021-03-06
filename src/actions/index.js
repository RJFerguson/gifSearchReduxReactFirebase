import request from 'superagent'

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '3b22cecb9a24456abb5375c4d7068126'

export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}&api_key=${API_KEY}`);

  console.log(term)
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function signInUser() {
    return {
        type: SIGN_IN_USER
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}