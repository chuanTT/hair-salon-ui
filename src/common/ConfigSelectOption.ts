

const LIMIT_SELECT = 50

const funcKey = (arr: any[]) => {
  let option: any[] = []
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      option = [
        ...option,
        {
          value: item?.id,
          label: item?.name
        }
      ]
    })
  }
  return option
}


const configAll = (key = "full_name", keyValue = "user_name") => {
  return {
    [keyValue]: -1,
    [key]: "Tất cả"
  }
}

const optionAddAll = (
  arr: any[],
  option = {
    id: -1,
    name: "Tất cả"
  }
) => {
  const result = [option, ...arr]

  return result
}

export { funcKey, LIMIT_SELECT, optionAddAll, configAll}
