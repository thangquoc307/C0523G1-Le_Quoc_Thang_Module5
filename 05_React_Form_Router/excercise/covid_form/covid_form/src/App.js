import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup'

export default function App() {
  const validation = Yup.object({
    name: Yup.string()
        .required("Tên không được để trống")
        .matches(/^([A-Z][a-z]*)( [A-Z][a-z]*)*$/,"Tên không hợp lệ"),
    idCard: Yup.string()
        .required("Chứng minh nhân dân không được để trống")
        .matches(/^[0-9]{10,12}$/, "Số chứng minh nhân dân không hợp lệ"),
    year: Yup.string()
        .required("Năm sinh không được bỏ trống")
        .matches(/^[1-2][0-9]{3}$/, "Năm sinh không hợp lệ")
        .test("","Năm sinh phải trước 1990", year => {
          return +year < 1990;
        }),
    city: Yup.string().required("Tỉnh thành không được để trống"),
    ditrict: Yup.string().required("Quận huyện không được để trống"),
    ward: Yup.string().required("Phường xã không được để trống"),
    address: Yup.string().required("Địa chỉ không được để trống"),
    phone: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(/^\+*[0-9]{10,12}$/,"Số điện thoại không hợp lệ"),
    email: Yup.string()
        .required("Email không được để trống")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,"Email không hợp lệ"),
  });
  function handleSubmit() {
    alert("Xong bài tập gòi");
  }
  return (
      <div>
        <Formik
            initialValues={{name:''}}
            onSubmit={handleSubmit}
            validationSchema={validation}>

              <Form>
                <h1>Tờ khai y tế</h1>

                <div className="custom-input">
                  <label htmlFor="name">Họ tên:</label>
                  <Field type="text" id="name" name ="name"/>
                  <ErrorMessage component="small" name="name" className="error"/>
                </div>
                <div className="custom-input">
                  <label htmlFor="idCard">Số hộ chiếu / CMND:</label>
                  <Field type="text" id="idCard" name ="idCard"/>
                  <ErrorMessage component="small" name="idCard" className="error"/>
                </div>
                  <div className="custom-input">
                      <label htmlFor="year">Năm sinh:</label>
                      <Field type="text" id="year" name ="year"/>
                      <ErrorMessage component="small" name="year" className="error"/>
                  </div>
                  <div className="custom-input gender">
                      <label>Giới tính:</label>

                      <label htmlFor="nam" className="radio-label">
                          <Field id="nam" type="radio" value="nam" name="gender"/>
                          Nam
                      </label>

                      <label htmlFor="nu" className="radio-label">
                          <Field id="nu" type="radio" value="nu" name="gender"/>
                          Nữ
                      </label>

                      <label htmlFor="khac" className="radio-label">
                          <Field id="khac" type="radio" value="khac" name="gender"/>
                          Khác
                      </label>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="nation">Quốc tịch:</label>
                      <Field type="text" id="nation" name ="nation"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="company">Công ty làm việc:</label>
                      <Field type="text" id="company" name ="company"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="department">Bộ phận làm việc:</label>
                      <Field type="text" id="department" name ="department"/>
                  </div>
                  <div className="custom-input gender">
                      <label htmlFor="bh" className="radio-label">
                          <Field id="bh" type="checkBox" value="bh" name="bh"/>
                          Có thẻ bảo hiểm y tế
                      </label>
                  </div>

                  <h3>Địa chỉ liên lạc tại Việt Nam</h3>

                  <div className="custom-input">
                      <label htmlFor="city">Tỉnh thành:</label>
                      <Field type="text" id="city" name ="city"/>
                      <ErrorMessage component="small" name="city" className="error"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="ditrict">Quận huyện:</label>
                      <Field type="text" id="ditrict" name ="ditrict"/>
                      <ErrorMessage component="small" name="ditrict" className="error"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="ward">Phường xã:</label>
                      <Field type="text" id="ward" name ="ward"/>
                      <ErrorMessage component="small" name="ward" className="error"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="address">Địa chỉ:</label>
                      <Field type="text" id="address" name ="address"/>
                      <ErrorMessage component="small" name="address" className="error"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="phone">Số điện thoại:</label>
                      <Field type="text" id="phone" name ="phone"/>
                      <ErrorMessage component="small" name="phone" className="error"/>
                  </div>
                  <div className="custom-input">
                      <label htmlFor="email">Email:</label>
                      <Field type="text" id="email" name ="email"/>
                      <ErrorMessage component="small" name="email" className="error"/>
                  </div>

                  <h3>Trong vòng 14 ngày qua, Anh
                      / Chị có đến quốc gia
                      / vùng lãnh thổ nào
                      (Có thể đi qua nhiều quốc gia)</h3>

                  <div className="custom-input">
                      <textarea name="textArea" id="textArea" cols="30" rows="10"></textarea>
                  </div>

                  <h3>Trong vòng 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiện nào sau đây không</h3>
                  <div className="custom-input gender">
                      <label htmlFor="dh1" className="radio-label">
                          <Field id="dh1" type="checkBox" value="dh1" name="dh1"/>
                          Sốt
                      </label>
                      <label htmlFor="dh2" className="radio-label">
                          <Field id="dh2" type="checkBox" value="dh2" name="dh2"/>
                          Ho
                      </label>
                      <label htmlFor="dh3" className="radio-label">
                          <Field id="dh3" type="checkBox" value="dh3" name="dh3"/>
                          Khó thở
                      </label>
                      <label htmlFor="dh4" className="radio-label">
                          <Field id="dh4" type="checkBox" value="dh4" name="dh4"/>
                          Viêm phổi
                      </label>
                      <label htmlFor="dh5" className="radio-label">
                          <Field id="dh5" type="checkBox" value="dh5" name="dh5"/>
                          Đau họng
                      </label>
                      <label htmlFor="dh6" className="radio-label">
                          <Field id="dh6" type="checkBox" value="dh6" name="dh6"/>
                          Mệt mỏi
                      </label>
                  </div>

                  <h3>Trong vòng 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiện nào sau đây không</h3>
                  <div className="custom-input gender">
                      <label htmlFor="ts1" className="radio-label">
                          <Field id="ts1" type="checkBox" value="ts1" name="ts1"/>
                          Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                      </label>
                      <label htmlFor="ts2" className="radio-label">
                          <Field id="ts2" type="checkBox" value="ts2" name="ts2"/>
                          Người từ nước có bệnh COVID-19
                      </label>
                      <label htmlFor="ts3" className="radio-label">
                          <Field id="ts3" type="checkBox" value="ts3" name="ts3"/>
                          Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                      </label>
                  </div>
                <button type={"submit"}>Submit</button>
              </Form>
        </Formik>
      </div>
  );
}

