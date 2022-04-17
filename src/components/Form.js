import { Box, Button, Paper, TextField, Typography, MenuItem, Tooltip } from '@mui/material'
import { Formik, Form as Formulario, useField } from 'formik'
import React from 'react'
import * as yup from 'yup'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import hbg from './../assets/images/Imagen1.png'
import { EmojiObjects } from '@mui/icons-material'

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const MySelect = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
      select
    >
      	{props.options.map((option, index) => {
          return (
            <MenuItem key={index} value={option.id}>
              {option.nombre}
            </MenuItem>
          )
        })}
    </TextField>
  );
}

const options = [
  {id: 1, nombre: '21'},
  {id: 2, nombre: '28'},
  {id: 3, nombre: '23'},
  {id: 4, nombre: '25'},
]

const validationSchema = yup.object({
  identificacion: yup
    .string()
    .required('La identificacióóóóón 👆')
    .oneOf(['1037633549'], 'Esa no fue la identificación que me dijiste. Ya ahí se me sale de las manos 😮‍💨'),
  edad: yup
    .string()
    .required('Are you kidding me? 😑')
    .oneOf(['2'], 'Lamento decepcionarte, pero eres mayor 😎'),
  respuesta: yup
    .string()
    .required('Definitivamente esto es una broma 🙄')
    .oneOf(['45000'], 'Ups! Nope, esa no es la respuesta 🤯'),
  fecha_nacimiento: yup
    .date()
    .required(
      `Sí sabes que el asterisco quiere decir "requerido", cierto? Es el estándar 🙄`
      )
    .test(
      'DoB', 
      'No recuerdas tu fecha de nacimiento? Grave la cosa 😅',
      (value) => {
        return '1994/04/29'===moment(value).format('YYYY/MM/DD');
      })
});

export const Form = () => {
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
          padding: 5,
          paddingTop: 5,
          borderRadius: 5,
          width: 300,
          backgroundImage: `url(${hbg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top'
        }}
      >
        <Formik
          validationSchema={validationSchema}
          validateOnBlur={false}
          initialValues={{
            identificacion: '',
            fecha_nacimiento: '',
            edad: '',
            respuesta: ''
          }}
          onSubmit={(values) => {
            console.log(values)
            navigate('/main')
          }}
        > 
          {() => (
            <Formulario noValidate>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                alignItems: 'center',
                justifyContent: 'center',
                margin: '40px 20px',
              }}>
                <Typography variant='h5' sx={{
                  textAlign: 'center'
                }}>Pero antes de ver el resto del regalo, unas preguntas para saber si sí eres tú</Typography>
                <MyTextField
                  sx={{
                    width: 220
                  }}
                  required
                  label='Identificación'
                  name='identificacion'
                  variant='standard'
                />
                <MyTextField
                  sx={{
                    width: 220
                  }}
                  label='Fecha de Nacimiento'
                  type='date'
                  required
                  name='fecha_nacimiento'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='standard'
                />
                <MySelect
                  sx={{
                    width: 220
                  }}
                  label='Cuantos años cumples?'
                  required
                  name='edad'
                  options={options}
                  variant='standard'
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: '',
                    alignItems: 'center'
                  }}
                >
                  <MyTextField
                    sx={{
                      width: 195
                    }}
                    required
                    label='Respuesta al acertijo:'
                    name='respuesta'
                    variant='standard'
                  />
                  <Tooltip title='Acertijo'>
                    <EmojiObjects
                      sx={{
                        fontSize: 35,
                        color: '#611C35',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        window.open('/riddle')
                      }}
                    />
                  </Tooltip>
                </Box>
                <Button type='submit' variant='outlined'>Verificar si soy digna</Button>
              </Box>
            </Formulario>
          )}
        </Formik>
      </Paper>
    </Box>
  )
}
