/**
 * we can read data from the localstorage
 */

const linksData = localStorage.getItem("links");

export const links = JSON.parse(linksData) || []; //short circuit
