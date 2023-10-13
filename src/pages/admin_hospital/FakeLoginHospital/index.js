import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '~/utils/http'
function FakeLoginHospital() {
   const navigate = useNavigate()
   const [dataLogin, setDataLogin] = useState({
      email: 'benhvientest@gmail.com',
      password: '11111111',
   })

   const handleChangeInput = (e) => {
      const { name, value } = e.target
      setDataLogin({
         ...dataLogin,
         [name]: value,
      })
   }
   const handleSubmitFakeLogin = async (e) => {
      e.preventDefault()
      try {
         const response = await http.post('user/login', dataLogin)
         console.log(response.data.data)
         localStorage.setItem(
            'HealthCareUser',
            JSON.stringify(response.data.data)
         )
         navigate('/hospital/dashboard')
      } catch (error) {}
   }
   return (
      <>
         <h1>fake login</h1>
         <form>
            <input
               onChange={handleChangeInput}
               name="email"
               placeholder="benhvienOrdoctor@gmail.com"
            />
            <input
               onChange={handleChangeInput}
               name="password"
               placeholder="pass đây"
            />
            <button onClick={handleSubmitFakeLogin}>login</button>
         </form>
      </>
   )
}

export default FakeLoginHospital
