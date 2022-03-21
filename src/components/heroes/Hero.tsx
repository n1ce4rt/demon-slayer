import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import {TextField} from "@mui/material";

type propsType = {
    id:number
    img: string
    name: string
    dob: string
    age: number | string
    growth: string
    weight: string
    style: string
    utensils: string
    status: string
    deleteHero: (heroId: number) => void
    changeAge: (heroId: number, age: number | string) => void
}

export const Hero = ({id, img, age, growth, status, name, utensils, weight , style, dob, deleteHero, changeAge}: propsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [heroAge, setHeroAge] = useState<number | string>(0)

    return (
        <>
            <Card key={id} sx={{
                width: '530px',
                minWidth: '400px',
                display: 'flex',
                margin: '10px 0 10px',
            }}>
                <CardMedia

                    sx={{
                        width: '250px',
                        height: '400px',
                    }}
                    component="img"
                    image={img}
                    alt={name}
                />
                <CardContent sx={{width: '100%'}}>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {`Дата рождения: ${dob}`}
                    </Typography>


                    {
                        !editMode ?
                            <Typography onDoubleClick={() => {

                                setEditMode(true)

                            }
                            } sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                        component="div">
                                {`Возраст: ${age}`}
                            </Typography> :
                            <TextField type={'number'} onChange={(e) => {
                                setHeroAge(e.currentTarget.value)
                            }} label={'Возраст'} fullWidth size={'small'} variant={'standard'}  onBlur={() => {
                                setEditMode(false)
                                changeAge(id, heroAge)
                            }}/>
                    }
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {`Рост: ${growth}`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {`Вес: ${weight}`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Стили`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {style}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Принадлежность`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {utensils}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`Статус`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {status}
                    </Typography>
                </CardContent>

            </Card>
            <Button onClick={() => deleteHero(id)}>Delete</Button>
        </>
    )
}