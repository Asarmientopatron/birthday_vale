import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Paper, MenuItem, TextField, LinearProgress } from '@mui/material';
import { Form, Formik, useField } from 'formik'
import Ssong from './../assets/audio/spanish.mp3'
import Esong from './../assets/audio/english.mp3'
import Fsong from './../assets/audio/french.mp3'
import SFlag from './../assets/images/flag-span.png'
import EFlag from './../assets/images/flag-usa.png'
import FFlag from './../assets/images/flag-french.png'
import hbg from './../assets/images/Image1.png'
import { useNavigate } from 'react-router-dom';

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
            <MenuItem key={index} value={option.id} style={{display: 'flex', alignItems: 'center', gap: 2}}>
              <img src={option.flag} alt='flag' style={{height: '15px', marginLeft: '5px'}}/> {option.nombre}
            </MenuItem>
          )
        })}
    </TextField>
  );
}

const audio1 = new Audio(Ssong);
const audio2 = new Audio(Esong);
const audio3 = new Audio(Fsong);

export const Main = () => {
  const [objValues, setObjValues] = useState({
    label: 'Selecciona un idioma',
    button: 'Continuar',
    play: 'Reproducir',
    pause: 'Pausar',
    message: 'Pulsa en "Reproducir" para escuchar. Una vez hayas escuchado en los tres idiomas, pulsa el botón de abajo',
    stop: 'Detener',
    languages: {
      one: 'Español',
      two: 'Inglés',
      three: 'Francés'
    }
  });

  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const language = useRef(1);

  const options = [
    {id: 1, nombre: objValues.languages.one, flag: SFlag},
    {id: 2, nombre: objValues.languages.two, flag: EFlag},
    {id: 3, nombre: objValues.languages.three, flag: FFlag},
  ]

  const onChangeLanguage = (e) => {
    let newValues = {}
    if(e===1){
      newValues = {
        ...objValues,
        label: 'Selecciona un idioma',
        button: 'Continuar',
        play: 'Reproducir',
        pause: 'Pausar',
        message: 'Pulsa en "Reproducir" para escuchar. Una vez hayas escuchado en los tres idiomas, pulsa el botón de abajo',
        stop: 'Detener',
        languages: {
          one: 'Español',
          two: 'Inglés',
          three: 'Francés'
        }
      }
    } else if (e===2){
      newValues = {
        ...objValues,
        label: 'Select a language',
        button: 'Continue',
        play: 'Play',
        pause: 'Pause',
        message: 'Click on "Play" for listening. Once you have listened in three languages, press the button below',
        stop: 'Stop',
        languages: {
          one: 'Spanish',
          two: 'English',
          three: 'French'
        }
      }
    } else if (e===3){
      newValues = {
        ...objValues,
        label: 'Sélectionnez une langue',
        button: 'Continuer',
        play: 'Jouer',
        pause: 'Pause',
        message: 'Appuyez sur le bouton "Jouer" pour écouter. Une fois que vous avez écouté dans les trois langues, appuyez sur le bouton ci-dessous',
        stop: 'Arrêtez',
        languages: {
          one: 'Espagnol',
          two: 'Anglais',
          three: 'Français'
        }
      }
    }
    setObjValues(newValues);
    language.current=e;
  }
  
  useEffect(() => {
    loadSong();
  },[])

  const loadSong = () => {
    audio1.load();
    audio2.load();
    audio3.load();
  }

  audio1.addEventListener('timeupdate', () => {
    setProgress(audio1.currentTime/audio1.duration*100)
  });

  audio2.addEventListener('timeupdate', () => {
    setProgress(audio2.currentTime/audio2.duration*100)
  });

  audio3.addEventListener('timeupdate', () => {
    setProgress(audio3.currentTime/audio3.duration*100)
  });

  const playSong = () => {
    if(language.current===1){
      audio1.play();
    } else if (language.current===2){
      audio2.play();
    } else if (language.current===3){
      audio3.play();
    }
  }

  const pauseSong = () => {
    audio1.pause();
    audio2.pause();
    audio3.pause();
  }

  const stopSong = () => {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
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
        <Box>
          <Formik
            initialValues={{
              language: 1
            }}
          >
            {() => (
              <Form>
                <MySelect
                  sx={{
                    width: 220,
                    marginBottom: 3,
                  }}
                  onClick={(e) => {
                    const newE = parseInt(e.target.dataset.value);
                    if(newE===1||newE===2||newE===3){
                      onChangeLanguage(newE);
                    }
                  }}
                  label={objValues.label}
                  name='language'
                  options={options}
                  variant='standard'
                />
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <LinearProgress variant='determinate' value={progress} style={{width: '250px', marginBottom: 15}}/>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}>
          <Button 
            variant='contained' 
            onClick={() => playSong()}
          >
            {objValues.play}
          </Button>
          <Button 
            variant='contained' 
            color='secondary'
            onClick={() => pauseSong()}
          >
            {objValues.pause}
          </Button>
          <Button 
            variant='contained' 
            color='error'
            onClick={() => stopSong()}
          >
            {objValues.stop}
          </Button>
        </Box>
        <Box
          sx={{
            marginBottom: 2,
            marginTop: 2,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'center',
            fontSize: 18
          }}
        >
          {objValues.message}
        </Box>
        <Box>
          <Button variant='outlined' onClick={() => navigate('/last')}>{objValues.button}</Button>
        </Box>
      </Paper>
    </div>
  )
}
