import React, {useContext, useEffect} from 'react'
import AppContext from 'components/App/AppContext'

const ConsultantPortal = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Consultant Portal')
  }, [])

  return (
    <div className="justify-content-end">
      <p>Consultant Portal</p>
    </div>
  )
}

export default ConsultantPortal
