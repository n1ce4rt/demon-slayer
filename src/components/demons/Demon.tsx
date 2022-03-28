import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import {TextField} from "@mui/material";

type propsType = {
    id: string
    img: string
    name: string
    dob: string
    age: string
    growth: string
    weight: string
    // style: string
    utensils: string
    genus: string
    status: string
    deleteDemon: (demonId: string) => void
    deleteDemonGlobal: (demonId: string) => void
    changeDemon: (demonId: string, age: string, birthday: string, growth: string, weight: string, status: string) => void

}

export const Demon = ({
                          id,
                          img,
                          age,
                          growth,
                          status,
                          name,
                          utensils,
                          genus,
                          weight,
                          // style,
                          dob,
                          deleteDemon,
                          changeDemon,
                          deleteDemonGlobal,
                      }: propsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [demonAge, setDemonAge] = useState<string>(age)
    const [birthday, setBirthday] = useState<string>(dob)
    const [demonGrowth, setDemonGrowth] = useState<string>(growth)
    const [demonWeight, setDemonWeight] = useState<string>(weight)
    const [demonStatus, setDemonStatus] = useState<string>(status)

    const setValue = (e: any) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            changeDemon(id, demonAge, birthday, demonGrowth, demonWeight, demonStatus)
        }
    }

    return (
        <>
            <Card key={id} sx={{
                width: '530px', minWidth: '400px', display: 'flex', margin: '10px 0 10px',
            }}>
                <CardMedia
                    sx={{width: '250px', height: '400px',}}
                    component="img"
                    image={img}
                    alt={name}
                />
                <CardContent sx={{width: '100%'}}>
                    <Typography title={"Даблклик для редактирования"} onDoubleClick={() => setEditMode(true)}
                                sx={{textAlign: 'right'}} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    {
                        !editMode ?
                            <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                        component="div" onDoubleClick={() => setEditMode(true)}>
                                {`Дата рождения: ${dob}`}
                            </Typography> :

                            <TextField autoFocus={true} type={'text'} onChange={(e) => {
                                setBirthday(e.currentTarget.value)
                            }} label={'Дата рождения'} fullWidth size={'small'} variant={'standard'} value={birthday}
                                       onKeyPress={(e) => setValue(e)}

                            />
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`Возраст: ${age} лет`}
                            </Typography> :
                            <TextField type={'number'} onChange={(e) => {
                                setDemonAge(e.currentTarget.value)
                            }} label={'Возраст'} fullWidth size={'small'} variant={'standard'} value={demonAge}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`Рост: ${growth}`}
                            </Typography> :
                            <TextField type={'text'} onChange={(e) => {
                                setDemonGrowth(e.currentTarget.value)
                            }} label={'Рост'} fullWidth size={'small'} variant={'standard'} value={demonGrowth}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`Вес: ${weight}`}
                            </Typography> :
                            <TextField type={'text'} onChange={(e) => {
                                setDemonWeight(e.currentTarget.value)
                            }} label={'Вес'} fullWidth size={'small'} variant={'standard'} value={demonWeight}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Принадлежность`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {utensils}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Род`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {genus.length === 0 ? 'Неизвестно' : genus}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Статус`}
                    </Typography>
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {status}
                            </Typography> :

                            <TextField type={'text'} onChange={(e) => {
                                setDemonStatus(e.currentTarget.value)
                            }} label={'Статус'} fullWidth size={'small'} variant={'standard'} value={demonStatus}
                                       onKeyPress={(e) => setValue(e)}/>

                    }
                </CardContent>

            </Card>
            <Button onClick={() => {
                deleteDemon(id)
                // deleteDemonGlobal(id)
            }}>Delete</Button>
        </>
    )
}