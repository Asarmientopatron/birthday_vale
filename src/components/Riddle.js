import React from 'react'
import { Box, Paper } from '@mui/material'

export const Riddle = () => {
  return (
    <Box>
      <Paper 
        elevation={3} 
        sx={{
          padding: 5,
          paddingTop: 5,
          borderRadius: 5,
          width: 300,
          fontSize: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Box
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 2
          }}
        >Acertijo:</Box>
        <Box>
          Hace unos días llegó a Envigado una feria muy famosa en todo el mundo.
          La feria en cuestión tiene cuatro salones, cada uno con diferentes atracciones en su interior.
          Para entrar a cada salón, cada persona debe pagar $1000 y para salir del mismo debe pagar otros $1000.    
        </Box>
        <Box>
          Sofía, una chica que llevaba esperando muchos meses la llegada de la feria, decide ir y disfrutar de todas las atracciones
          de los cuatro salones. Para ello, realiza el siguiente recorrido:
        </Box>
        <Box>
          Entra al primer salón (debe pagar $1000 para entrar);
          una vez dentro, se gasta la mitad de la plata que tiene en el momento y finalmente sale (debe pagar otros $1000 para salir).
          Ella hace exactamente lo mismo con los otros tres salones, de manera que cuando paga los $1000 para salir del último salón, se queda
          sin dinero.
        </Box>
        <Box>
          La pregunta entonces es, <span style={{fontWeight: 'bold'}}>¿cuánto dinero tenía Sofía al principio?</span>
        </Box>
        <Box>
          Nota: la respuesta debe ir en el formulario sin comas ni puntos.
        </Box>
        <Box
          sx={{
            fontWeight: 'bold'
          }}
        >
          ¡Easy peasy lemon squeezy! 🥱🥱🥱
        </Box>
      </Paper>
    </Box>
  )
}
