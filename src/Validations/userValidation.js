import * as yup from "yup";

const currentYear = new Date().getFullYear();

export const registerUserSchema = yup.object().shape({
    full_name: yup.string().required("Vui lòng nhập tên của bạn"),
    email: yup.string().email("Email không đúng cú pháp").required("Vui lòng nhập email"),
    gender: yup.string(),
    phone_number: yup
        .string()
        .matches(/^0\d{9}$/, "Yêu cầu 10 chữ số và bắt đầu bằng số 0")
        .required("Vui lòng nhập số điện thoại"),
    date_of_birth: yup
        .date()
        .max(new Date(currentYear - 16, 11, 31), "Bạn phải từ 16 tuổi trở lên")
        .min(new Date(currentYear - 100, 0, 1), "Bạn không thể quá 100 tuổi")
        .required("Vui lòng nhập ngày sinh"),
    password: yup.string().min(6, "Password phải chứa trên 6 kí tự").required("Vui lòng nhập password"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password không khớp")
        .required("Vui lòng nhập lại password"),
});

export const loginUserSchema = yup.object().shape({
    email: yup.string().email("Email không đúng cú pháp").required("Vui lòng nhập email"),
    password: yup.string().min(6, "Password phải chứa trên 6 kí tự").required("Vui lòng nhập password"),
});
