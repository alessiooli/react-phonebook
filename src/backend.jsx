import { APICall } from './api'

let updateAPIData = () => {

    APICall.put(id, {
      firstName,
      lastName,
      checkbox,
      phone
    })
      .then(() => {
        navigate('/read') // dopo aver caricato i dati, redireziona alla pagina read
      })

  }

  export default updateAPIData