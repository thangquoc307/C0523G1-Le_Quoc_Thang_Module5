import * as Yup from "yup";
export const Validate = Yup.object({
    code:  Yup.string()
        .required("Không được bỏ trống")
        .matches(/^MHH-[0-9A-Z]{4}$/, "Format MHH-XXXX"),
    name: Yup.string()
        .required("Không được bỏ trống"),
    unit: Yup.string()
        .required("Hãy chọn đơn vị"),
    price: Yup.number()
        .required("Không được bỏ trống")
        .min(1000, "Giá phải lớn hơn 1000"),
    date: Yup.date()
        .required("Không được bỏ trống")
        .test({
            test: (date) => {
                let now = new Date();
                let dateOut = new Date(date);
                return now <= dateOut;
            },
            message: "Thu hoạch phải sau hiện tại"
        }),

    type: Yup.object().shape({
        id: Yup.number().min(1, "Hãy chọn loại hàng")
    })
})