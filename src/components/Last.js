import React, { useEffect, useState } from 'react'
import { Box, Paper, Tooltip } from '@mui/material'
import { Home, FormatAlignJustify, Lyrics} from '@mui/icons-material'
import hbg from './../assets/images/Imagen1.png'
import { useNavigate } from 'react-router-dom'
import devil from './../assets/images/devil.png'
import tongue from './../assets/images/tongue.png'
import heart from './../assets/images/heart.png'
import boom from './../assets/images/boom.jpg'

export const Last = () => {
  const [number, setNumber] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    if(number>=0){
      decreaseNumber();
    }
  },[number])

  const decreaseNumber = () => {
    const currentNumber = number;
    const nextNumber = currentNumber-1;
    setTimeout(() => {
      setNumber(nextNumber);
    },currentNumber===0?5000:1000)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '100px 100px',
        width: '100%',
        height: '100%',
        gap: 10
      }}
    >
      <Paper 
        elevation={3} 
        sx={{
          padding: 5,
          paddingTop: 5,
          borderRadius: 5,
          width: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${hbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        {number > 0 ? (
          <Box
            sx={{
              fontSize: 22,
              fontWeight: 'bold',
              padding: '10px 35px 8px 35px',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                marginBottom: 2
              }}
            >
              <img style={{width: 40}} src={devil} alt='devil'/>
              <img style={{width: 40}} src={tongue} alt='tongue'/>
              <img style={{width: 40}} src={devil} alt='devil'/>
              <img style={{width: 40}} src={tongue} alt='tongue'/>
              <img style={{width: 40}} src={devil} alt='devil'/>
            </Box>
            <Box>
              Si no dices en voz alta "No me gusta el jamón" en los próximos 15 segundos,
              no podrás volver a visitar este sitio nunca más y tu equipo quedará infectado con un virus de por vida
            </Box>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                marginTop: 2
              }}
            >
              <img style={{width: 40}} src={devil} alt='devil'/>
              <img style={{width: 40}} src={tongue} alt='tongue'/>
              <img style={{width: 40}} src={devil} alt='devil'/>
              <img style={{width: 40}} src={tongue} alt='tongue'/>
              <img style={{width: 40}} src={devil} alt='devil'/>
            </Box>
            <Box
              sx={{
                marginTop: 4,
                fontSize: 40,
              }}
            >
              {number}
            </Box>
          </Box>
        ):number===0?(
          <Box
            sx={{
              fontSize: 30,
              fontWeight: 'bold',
              padding: '10px 35px 8px 35px',
              textAlign: 'center',
              color: 'red'
            }}
          >
            <img src={boom} alt='BOOOOOOOOOOM!' style={{width: 300}}/>
          </Box>
        ):(
          <Box
            sx={{
              fontSize: 25,
              fontWeight: 'bold',
              padding: '10px 35px 8px 35px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 5
            }}
          >
            <Box>
              Naaaah, era broma. Puedes visitarlo las veces  que quieras. Ojalá te haya gustado al menos un poco de lo que me gustó a mí hacerlo!
              <img src={heart} alt='heart' style={{height: 20}}/>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly'
              }}
            >
              <Tooltip title='Presentación'>
                <Home 
                  sx={{
                    fontSize: '40px', 
                    cursor: 'pointer', 
                    color: '#073105'
                  }}
                  onClick={(() => {
                    navigate('/');
                  })}
                />
              </Tooltip>
              <Tooltip title='Formulario'>
                <FormatAlignJustify 
                  sx={{
                    fontSize: '40px', 
                    cursor: 'pointer', 
                    color: '#BEB7A4'
                  }}
                  onClick={(() => {
                    navigate('/form');
                  })}
                />
              </Tooltip>
              <Tooltip title='Reproductor'>
                <Lyrics 
                  sx={{
                    fontSize: '40px', 
                    cursor: 'pointer', 
                    color: 'pink'
                  }}
                  onClick={(() => {
                    navigate('/main');
                  })}
                />  
              </Tooltip>
            </Box>
          </Box>
        )}
      </Paper>
    </div>
  )
}
