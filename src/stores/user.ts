export const useUserStore = defineStore('user', () => {
  const name = ref('Hongbusi')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
