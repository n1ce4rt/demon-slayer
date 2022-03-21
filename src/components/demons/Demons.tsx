import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";

import {demonType} from "../../reducers/Demons-reducer";

type propsType = {
    demons: Array<demonType>
}


export const Demons = ({demons}: propsType) => {


    useEffect(() => {

    }, [])


    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" sx={{display: 'flex',}}>
                <Box sx={{backgroundColor: '#cfe8fc', height: 'fit-content'}}>

                    {demons.map((item: demonType) => {
                        return (
                            <Card key={item.id} sx={{width: '550px', display: 'flex', margin: '10px'}}>
                                <CardMedia

                                    sx={{
                                        width: '250px',
                                        height: '400px',
                                    }}
                                    component="img"
                                    image={item.img}
                                    alt={item.name}
                                />
                                <CardContent sx={{width: 550}}>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant="h6" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                                component="div">
                                        {`Дата рождения: ${item['date of birth']}`}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                                component="div">
                                        {`Возраст: ${item.age}`}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                                component="div">
                                        {`Рост: ${item.growth}`}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                                component="div">
                                        {`Вес: ${item.weight}`}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'h6'} component="div">
                                        {`Статус`}
                                    </Typography>
                                    <Typography sx={{textAlign: 'right'}} gutterBottom variant={'body1'}
                                                component="div">
                                        {item.status}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}

                </Box>
            </Container>
        </React.Fragment>
    );
}
