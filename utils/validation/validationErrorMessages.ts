export default {
  common: {
    isEmpty: (field: string) => `The field "${field}" is required`,
    isInvalid: (field: string) => `The field "${field}" filled in incorrectly`
  }
};
