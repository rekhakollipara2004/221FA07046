import validator from "validator";

export const isValidUrl = url => validator.isURL(url, { require_protocol: true });
export const isValidShortcode = str => /^[a-zA-Z0-9]{1,16}$/.test(str);
