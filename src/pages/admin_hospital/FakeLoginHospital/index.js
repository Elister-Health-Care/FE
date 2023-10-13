import { useNavigate } from 'react-router-dom'
import http from '~/utils/http'
function FakeLoginHospital() {
   const navigate = useNavigate()
   const dataLogin = {
      email: 'benhvientest@gmail.com',
      password: '11111111',
   }
   const handleSubmitFakeLogin = async () => {
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
         <button onClick={handleSubmitFakeLogin}>login</button>
      </>
   )
}

export default FakeLoginHospital
