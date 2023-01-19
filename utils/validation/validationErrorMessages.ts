export default {
  common: {
    isEmpty: (field: string) => `Поле "${field}" обязательно для заполнения`,
    isInvalid: (field: string) => `Поле "${field}" заполнено некорректно`
  }
};
