import * as React from 'react';
import {useFormik} from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import {Alert, Checkbox, CssBaseline, FormControlLabel} from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from 'yup';
import {useState} from "react";


const validationSchema = yup.object({
    login: yup
        .string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Login is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export type propsType = {
    authMe: (login: string, password: string, isAuth: boolean) => void
    isAuth: boolean | null
    error: string | undefined
}
export const Login = ({error, authMe, isAuth}: propsType) => {
    const [saveLogin, setSaveLogin] = useState<boolean>(true)
    const formik = useFormik({
        initialValues: {
            login: saveLogin ? 'Arthur': '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            authMe(values.login, values.password, true)
        },
    });
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">

                <Box sx={{
                    bgcolor: 'transparent',
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '100px'
                }}>
                    <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                        <TextField fullWidth margin={'normal'} variant="filled"
                                   id="login"
                                   name="login"
                                   label="login"
                                   type={"text"}
                                   value={formik.values.login}
                                   onChange={formik.handleChange}
                                   error={formik.touched.login && Boolean(formik.errors.login)}
                                   helperText={formik.touched.login && formik.errors.login}
                        />

                        <TextField fullWidth margin={'normal'} variant="filled"
                                   id="password"
                                   name="password"
                                   label="Password"
                                   type="password"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                        />

                        <FormControlLabel control={<Checkbox checked={saveLogin} onChange={() => {
                            setSaveLogin(!saveLogin)
                        }}/>} label="Запомнить меня"
                        />

                        <Button type={'submit'} sx={{width: 'fit-content', margin: '10px auto'}}
                                variant="contained">Login</Button>
                    </form>
                </Box>
                {isAuth && <Alert severity="success">Вы успешно авторизовались!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </Container>
        </React.Fragment>
    );
}




