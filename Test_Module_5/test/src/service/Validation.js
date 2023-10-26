import * as Yup from 'yup'
export const ValidationStudent = Yup.object({
            name: Yup.string().required("Please enter the name")
                .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error name format"),
            class: Yup.object().shape({
                id: Yup.number().min(1,"Please select the class")
            })
        });