import { Box, Paper } from '@mui/material'
import React from 'react'
import { ArrowCircleRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import hbg from './../assets/images/Imagen2.png'

export const Introducing = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '40px',
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          padding: 9,
          paddingTop: 5,
          borderRadius: 5,
          width: 300,
          maxHeight: '100%',
          fontSize: 25,
          fontWeight: 'bold',
          fontFamily: 'Updock, cursive',
          backgroundImage: `url(${hbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        <p style={{fontSize: 34}}>
          Holaaaa <span style={{fontWeight: 'bold', fontSize: 38}}>Vale!</span> 
        </p>
        <p style={{
          fontStyle: 'italic',
        }}>
          Lo que estás a punto de ver es simplemente la parte no física de tu regalo.
          Ya que he ido ganando experiencia con estas cosas, 
          pensé que era un buen momento para diseñar un regalo diferente 
          con lo que he aprendido, así que este es mi primer intento 
          realizando algo así (porfa, no seas tan dura).
          </p>
        <p style={{
          fontStyle: 'italic',
        }}>
          Es algo que hago con mucho cariño, para agradecerte por todo 
          este rato desde que nos conocemos, por lo especial y amigable 
          que has sido prácticamente desde el principio, por la compañia, 
          por las clases de baile, por presentarme con tus amigos, 
          en fin, por muchas cosas <span role={'img'} aria-label='heart'>❤️</span>
        </p>
        <p style={{fontSize: 30, fontStyle: 'italic'}}> 
          Hope you like and enjoy it
        </p>
        <p style={{fontSize: 30, textAlign: 'right', marginBottom: 0}}>
          Atte,
        </p>
        <p style={{fontSize: 30, textAlign: 'right', marginTop: 0}}>
          Andrés
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ArrowCircleRight 
            sx={{cursor: 'pointer', fontSize: 60}}
            color='success'
            onClick={() => navigate('/form')}
          />
          <p style={{
            fontStyle: 'normal',
            marginLeft: 5
          }}>Pulsa el botón para empezar</p>
        </div>
      </Paper>
    </Box>
  )
}
