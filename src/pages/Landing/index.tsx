import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/Logo.svg'
import girl from '../../assets/Girl.svg'

import Button from '../../components/Button'

import { Container, Content } from './styles'

const Landing: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Askit"/>
        <img src={girl} alt="girl"/>

        <small><a href="">Entrar como convidado</a></small>
        <Button className="primary">Login</Button>
        <Button className="secondary">Sign up</Button>
      </Content>
    </Container >
  )
}

export default Landing