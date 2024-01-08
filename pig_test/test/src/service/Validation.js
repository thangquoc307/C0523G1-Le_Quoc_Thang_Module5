import * as Yup from "yup"
export const validation = Yup.object({
    code: Yup.string()
        .required("Please fill code")
        .matches(/^MH-[0-9]{3}$/, "Code format is MH-XXX"),
    enterDate: Yup.date()
        .required("Please choose Date"),
    enterWeight: Yup.number()
        .required("Please fill the enter weight"),
    leaseDate: Yup.date()
        .required("Please choose Date")
        .test({
            test: (date, context) => {
                let dateOut = new Date(date);
                let dateIn = new Date(context.parent.enterDate);
                return dateOut > dateIn;
            },
            message: "Lease date after than enter date"
        }),
    leaseWeight: Yup.number()
        .required("Please fill the enter weight"),
    manufacturer: Yup.object().shape({
        id: Yup.number().min(1, "Please choose manufacturer")
    })
})