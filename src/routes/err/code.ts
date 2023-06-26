export const CODE = {
  403: {
    title: "Forbidden",
    desc: "Hytorium understands the request, but the client doesn't have permission to access the requested resource.",
  },
  404: {
    title: "Not Found",
    desc: "Hytorium cannot find the requested resource.",
  },
  500: {
    title: "Internal Server Error",
    desc: "A generic error message indicating a server-side problem.",
  },
};

export function getErrorCode(code: keyof typeof CODE) {
  if (code in CODE) {
    return CODE[code];
  }
  return null;
}

export function createErrorCode(code: keyof typeof CODE): string {
  return getErrorCode(code)?.title || `${code}`;
}
