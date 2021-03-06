import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import {Fab, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";

type propsType = {
    id: string
    img: string
    name: string
    dob: string
    age: string
    growth: string
    weight: string
    style: string
    utensils: string
    status: string
    deleteHero: (heroId: string) => void
    deleteHeroGlobal: (heroId: string) => void
    changeHero: (heroId: string, age: string, birthday: string, growth: string, weight: string, status: string) => void

}

export const Hero = ({
                         id,
                         img,
                         age,
                         growth,
                         status,
                         name,
                         utensils,
                         weight,
                         style,
                         dob,
                         deleteHero,
                         deleteHeroGlobal,
                         changeHero,
                     }: propsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [heroAge, setHeroAge] = useState<string>(age)
    const [birthday, setBirthday] = useState<string>(dob)
    const [heroGrowth, setHeroGrowth] = useState<string>(growth)
    const [heroWeight, setHeroWeight] = useState<string>(weight)
    const [heroStatus, setHeroStatus] = useState<string>(status)

    const setValue = (e: any) => {
        if (e.key === 'Enter') {
            setEditMode(false)

            changeHero(id, heroAge, birthday, heroGrowth, heroWeight, heroStatus)
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
                    <Typography title={"???????????????? ?????? ????????????????????????????"} onDoubleClick={() => setEditMode(true)}
                                sx={{textAlign: 'right'}} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    {
                        !editMode ?
                            <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                        component="div" onDoubleClick={() => setEditMode(true)}>
                                {`???????? ????????????????: ${dob}`}
                            </Typography> :

                            <TextField autoFocus={true} type={'text'} onChange={(e) => {
                                setBirthday(e.currentTarget.value)
                            }} label={'???????? ????????????????'} fullWidth size={'small'} variant={'standard'} value={birthday}
                                       onKeyPress={(e) => setValue(e)}

                            />
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`??????????????: ${age} ??????`}
                            </Typography> :
                            <TextField type={'number'} onChange={(e) => {
                                setHeroAge(e.currentTarget.value)
                            }} label={'??????????????'} fullWidth size={'small'} variant={'standard'} value={heroAge}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`????????: ${growth}`}
                            </Typography> :
                            <TextField type={'text'} onChange={(e) => {
                                setHeroGrowth(e.currentTarget.value)
                            }} label={'????????'} fullWidth size={'small'} variant={'standard'} value={heroGrowth}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {`??????: ${weight}`}
                            </Typography> :
                            <TextField type={'text'} onChange={(e) => {
                                setHeroWeight(e.currentTarget.value)
                            }} label={'??????'} fullWidth size={'small'} variant={'standard'} value={heroWeight}
                                       onKeyPress={(e) => setValue(e)}/>
                    }
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`??????????`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {style}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`????????????????????????????`}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                component="div">
                        {utensils}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                        {`????????????`}
                    </Typography>
                    {
                        !editMode ?
                            <Typography onDoubleClick={() => setEditMode(true)} sx={{textAlign: 'right'}} gutterBottom
                                        variant={'body1'}
                                        component="div">
                                {status}
                            </Typography> :

                            <TextField type={'text'} onChange={(e) => {
                                setHeroStatus(e.currentTarget.value)
                            }} label={'????????????'} fullWidth size={'small'} variant={'standard'} value={heroStatus}
                                       onKeyPress={(e) => setValue(e)}/>

                    }
                </CardContent>

            </Card>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Fab color={'success'} aria-label="edit" onClick={()=> {
                    setEditMode(!editMode)
                    changeHero(id, heroAge, birthday, heroGrowth, heroWeight, heroStatus)
                }}>
                    <EditIcon/>
                </Fab>
                <Button sx={{ my: 2}} color="error" variant={'contained'} onClick={() => {
                    deleteHero(id)
                    // deleteHeroGlobal(id)
                }}>Delete</Button>
            </Box>
        </>
    )
}