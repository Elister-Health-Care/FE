function validateForm(formData, rules) {
   const errors = {}

   for (const fieldName in rules) {
      const fieldRules = rules[fieldName]

      for (const ruleName in fieldRules) {
         if (ruleName === 'required' && !formData[fieldName]) {
            errors[fieldName] = 'Không được để trống'
         }

         if (ruleName === 'email' && formData[fieldName]) {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            if (!emailRegex.test(formData[fieldName])) {
               errors[fieldName] = 'Email không hợp lệ.'
            }
         }

         if (ruleName === 'password' && formData[fieldName].length < 8) {
            errors[fieldName] = 'Mật khẩu phải lớn hơn 8 ký tự'
         }

         if (ruleName === 'password_confirmation' && formData[fieldName]) {
            if (formData['password'] !== formData[fieldName])
               errors[fieldName] = 'Mật khẩu phải giống nhau'
         }

         if (ruleName === 'phone' && formData[fieldName]) {
            const phoneNumberPattern = /^[0-9]{10,11}$/
            if (!phoneNumberPattern.test(formData[fieldName]))
               errors[fieldName] = 'Số điện thoại không hợp lệ'
         }

         if (ruleName === 'location') {
            if (!formData[fieldName].length) {
               errors[fieldName] = 'Vui lòng chọn vị trí'
            }
         }
         // Thêm các quy tắc kiểm tra khác tại đây
      }
   }

   return errors
}

export default validateForm
