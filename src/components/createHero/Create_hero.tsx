import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {useFormik} from 'formik';
import { v1 } from 'uuid';

import * as React from "react";
import {Alert, Button, Snackbar, TextField} from "@mui/material";
import * as yup from "yup";
import {useState} from "react";

const validationSchema = yup.object({
    name: yup
        .string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Name is required'),
    race: yup
        .string()
        .required('Race is required'),
});
type propsType = {
    createNewHero: (heroId: string, name: string, race: string, gender: string, age: number, birthday: string, growth: number, weight: number, utensils: string, style: string, status: string, img: string) => void
}
export const CreateHero = ({createNewHero}: propsType) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            race: '',
            gender: '',
            age: 0,
            birthday: '',
            growth: 0,
            weight: 0,
            utensils: '',
            style: '',
            status: '',
            img: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            formik.resetForm()
            setOpen(true)
            createNewHero(v1(), values.name, values.race, values.gender, values.age, values.birthday, values.growth, values.weight, values.utensils, values.style, values.status, values.img)
        },
    });
    return (

        <React.Fragment>
            <CssBaseline/>


                <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 0'}}>
                <TextField label={'Имя'} variant={'standard'} margin={'normal'}
                           id="name"
                           name="name"
                           type="text"
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           error={formik.touched.name && Boolean(formik.errors.name)}
                           helperText={formik.touched.name && formik.errors.name}
                />
                <TextField label={'Раса'} variant={'standard'} margin={'normal'}
                           id="race"
                           name="race"
                           type="text"
                           value={formik.values.race}
                           onChange={formik.handleChange}
                           error={formik.touched.race && Boolean(formik.errors.race)}
                           helperText={formik.touched.race && formik.errors.race}
                />
                <TextField label={'Пол'} variant={'standard'} margin={'normal'}
                           id="gender"
                           name="gender"
                           type="text"
                           value={formik.values.gender}
                           onChange={formik.handleChange}
                           error={formik.touched.gender && Boolean(formik.errors.gender)}
                           helperText={formik.touched.gender && formik.errors.gender}
                />
                <TextField label={'Возраст'} variant={'standard'} margin={'normal'}
                           id="age"
                           name="age"
                           type="number"
                           value={formik.values.age}
                           onChange={formik.handleChange}
                           error={formik.touched.age && Boolean(formik.errors.age)}
                           helperText={formik.touched.age && formik.errors.age}
                />
                <TextField label={'День рождения'} variant={'standard'} margin={'normal'}
                           id="birthday"
                           name="birthday"
                           type="text"
                           value={formik.values.birthday}
                           onChange={formik.handleChange}
                           error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                           helperText={formik.touched.birthday && formik.errors.birthday}
                />
                <TextField label={'Рост'} variant={'standard'} margin={'normal'}
                           id="growth"
                           name="growth"
                           type="number"
                           value={formik.values.growth}
                           onChange={formik.handleChange}
                           error={formik.touched.growth && Boolean(formik.errors.growth)}
                           helperText={formik.touched.growth && formik.errors.growth}
                />
                <TextField label={'Вес'} variant={'standard'} margin={'normal'}
                           id="weight"
                           name="weight"
                           type="number"
                           value={formik.values.weight}
                           onChange={formik.handleChange}
                           error={formik.touched.weight && Boolean(formik.errors.weight)}
                           helperText={formik.touched.weight && formik.errors.weight}
                />
                <TextField label={'Принадлежность'} variant={'standard'} margin={'normal'}
                           id="utensils"
                           name="utensils"
                           type="text"
                           value={formik.values.utensils}
                           onChange={formik.handleChange}
                           error={formik.touched.utensils && Boolean(formik.errors.utensils)}
                           helperText={formik.touched.utensils && formik.errors.utensils}
                />
                <TextField label={'Стиль'} variant={'standard'} margin={'normal'}
                           id="style"
                           name="style"
                           type="text"
                           value={formik.values.style}
                           onChange={formik.handleChange}
                           error={formik.touched.style && Boolean(formik.errors.style)}
                           helperText={formik.touched.style && formik.errors.style}
                />
                <TextField label={'Статус'} variant={'standard'} margin={'normal'}
                           id="status"
                           name="status"
                           type="text"
                           value={formik.values.status}
                           onChange={formik.handleChange}
                           error={formik.touched.status && Boolean(formik.errors.status)}
                           helperText={formik.touched.status && formik.errors.status}
                />
                <TextField label={'Изображение'} variant={'standard'} margin={'normal'}
                           id="img"
                           name="img"
                           type="text"
                           value={formik.values.img}
                           onChange={formik.handleChange}
                           error={formik.touched.img && Boolean(formik.errors.img)}
                           helperText={formik.touched.img && formik.errors.img}
                />
                    <Button type={'submit'} disabled={formik.values.name === ''}>Добавить</Button>
                    </Container>
                </form>

            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Чемпион добавлен!
                </Alert>
            </Snackbar>
        </React.Fragment>
    )
}

