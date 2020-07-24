import {toast} from 'react-toastify'

export const showInfoNotification = (message) => {
  toast(message.tag ? message.tag : `${message}`.replace(/<[^>]*>?/gm, ''), {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    className: 'bg-info text-white border-left-0',
  })
}

export const showErrorNotification = (message) => {
  toast.error(message.tag ? message.tag : `${message}`.replace(/<[^>]*>?/gm, ''), {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    className: 'bg-warning text-white border-left-0',
  })
}

const generateFilter = (filter) => {
  let query = {}
  if (filter.operator === 'match') {
    query[[filter.operator]] = {
      [filter.field]: filter.value,
    }
  } else if (filter.operator === 'wildcard') {
    query[[filter.operator]] = {
      [filter.field]: {
        value: `*${filter.value}*`,
      },
    }
  }
  return query
}

export const generateQuery = (filters) => {
  let query = {}
  if (filters.length <= 1) {
    query = generateFilter(filters[0])
  } else {
    let queryList = []
    filters.forEach((filter) => {
      console.log('generateQuery -> filter', filter)
      queryList.push(generateFilter(filter))
    })
    query['filter'] = {
      must: queryList,
    }
  }
  return query
}
