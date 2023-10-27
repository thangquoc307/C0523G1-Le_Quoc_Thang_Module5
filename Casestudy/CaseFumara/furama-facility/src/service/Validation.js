import * as Yup from "yup";
export const contractValidation = Yup.object({
    code: Yup.string()
        .required("Please fill the Contract Code")
        .matches(/^LQT-[0-9]{3}$/, "Code format is LQT-XXX (X : 0-9)"),
    checkInDate: Yup.date().required("Please choose check in date")
        .test({
            test: (dateCheck) => {
                let checkIn = new Date(dateCheck);
                let now = new Date();
                checkIn.setDate(checkIn.getDate() - 2);
                return checkIn >= now;
            },
            message: "Please book must be at least 2 days after now"
        }),
    checkOutDate: Yup.date().required("Please choose check out date")
        .test({
            test: (dateCheck,context) => {
                const checkInDate = context.parent.checkInDate;
                let checkIn = new Date(checkInDate);
                let checkOut = new Date(dateCheck);
                checkIn.setDate(checkIn.getDate() + 1);
                return checkIn <= checkOut;
            },
            message: "Check out must be at least 1 days after check in"
        }),
    deposit: Yup.number().required("Please enter deposit")
        .min(1, "Deposit over than 0")
        .test({
            test: (moneyDeposit,context) => {
                let payment = +context.parent.payment;
                return +moneyDeposit >= payment / 10;
            },
            message: "Deposit over than 10% Payment"
        }),
    payment: Yup.number().required("Please enter payment")
        .min(1, "Payment over than 0"),
    building: Yup.object().shape({
        id: Yup.number().min(1,"Please choose building")
    }),
    customer: Yup.object().shape({
        id: Yup.number().min(1,"Please choose customer")
    }),
    employee: Yup.object().shape({
        id: Yup.number().min(1,"Please choose employee")
    })
})
export const customerValidation = Yup.object({
    name: Yup.string()
        .required("Please fill the Name")
        .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
    birthday: Yup.date()
        .required("Please choose the Birthday")
        .test({
            test: (date) => {
                let now = new Date();
                let age = new Date(date);
                age.setFullYear(age.getFullYear() + 18);
                return age <= now;
            },
            message: "Age other than 18 years old"
        }),
    idCard: Yup.string()
        .required("Please fill the Id Card")
        .matches(/^[0-9]{9}$/, "Id Card has 9 number"),
    phone: Yup.string()
        .required("Please fill the phone number")
        .matches(/^0[0-9]{9}$/, "The phone start by 0 and has 10 number"),
    email: Yup.string()
        .required("Please fill the Email")
        .matches(/^.+@.+\..+$/, "Error email format"),
    address: Yup.string()
        .required("Please fill the address"),
    gender: Yup.object().shape({
        id: Yup.number().min(1, "Please choose Gender")
    }),
    customerType: Yup.object().shape({
        id: Yup.number().min(1,"Please choose Customer Type")
    })
})
export const employeeValidation = Yup.object({
    name: Yup.string()
        .required("Please fill the Name")
        .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
    birthday: Yup.date()
        .required("Please choose the Birthday")
        .test({
            test: (date) => {
                let now = new Date();
                let age = new Date(date);
                age.setFullYear(age.getFullYear() + 18);
                return age <= now;
            },
            message: "Age other than 18 years old"
        }),
    idCard: Yup.string()
        .required("Please fill the Id Card")
        .matches(/^[0-9]{9}$/, "Id Card has 9 number"),
    phone: Yup.string()
        .required("Please fill the phone number")
        .matches(/^0[0-9]{9}$/, "The phone start by 0 and has 10 number"),
    email: Yup.string()
        .required("Please fill the Email")
        .matches(/^.+@.+\..+$/, "Error email format"),
    salary: Yup.number()
        .required("Please enter the Salary")
        .min(5000000, "The salary over than 5,000,000"),
    education: Yup.object().shape({
        id: Yup.number().min(1,"Please choose Education")
    }),
    position: Yup.object().shape({
        id: Yup.number().min(1,"Please choose Position")
    }),
    department: Yup.object().shape({
        id: Yup.number().min(1,"Please choose Department")
    })
})
export const facilityValidation = (buildingSelect) => {
    // 1 = Villa, 2 = House, 3 = Room
    return Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z]*( [A-Z]*)+$/, "Error Format"),
        area: Yup.number()
            .required("Please fill the Area")
            .min(70, "Building over than 70m2")
            .max(3000, "Building less than 3000m2"),
        price: Yup.number()
            .required("Please fill the Price")
            .min(1000000, "Price over than 1,000,000")
            .max(100000000, "Price less than 100,000,000"),
        capacity: Yup.number()
            .required("Please fill the Capacity")
            .min(2, "Capacity over than 2 persons")
            .max(10, "Capacity less than 10 person"),
        img: Yup.string()
            .required("Please fill the Image Link"),
        level: (buildingSelect == 1 || buildingSelect == 2) ?
            Yup.number()
                .required("Please fill number of Level")
                .min(1, "Level over than 1")
                .max(10, "Level less than 10") :
            Yup.number().notRequired(),
        poolArea: (buildingSelect == 1) ?
            Yup.number()
                .required("Please fill the Pool Area")
                .min(20, "Pool Area over than 20 m2")
                .max(1000, "Pool Area less than 1000 m2") :
            Yup.number().notRequired(),
        rentType: Yup.object().shape({
            id : Yup.number().min(1,"Please choose Rent Type")
        }),
        roomType: (buildingSelect == 1 || buildingSelect == 2) ?
            Yup.object().shape({
                id: Yup.number().min(1,"Please choose Room Type")
            }) : Yup.object().notRequired(),
    })
}