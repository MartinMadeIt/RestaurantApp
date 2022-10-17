import TextField from '@mui/material/TextField'
import React from "react";

const FormInput = ({formik, acc}) => {
    return (
        <div>
            <TextField 
                error= {formik.touched[acc] && formik.errors[acc]}
                helperText = {
                    formik.touched[acc] && formik.errors[acc] ? formik.errors[acc] : null
                }
                id = {acc}
                label = {acc}
                name = {acc}
                onChange= {formik.handleChange}
                onBlur = {formik.handleBlur}
                value = {formik.values[acc]}
            />
        </div>
    );
}

export default FormInput;