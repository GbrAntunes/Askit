import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    background: #4F5D75;
    height: 45vh;
    width: 100vw;
    z-index: -1;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  padding: 50px 32px;

  > * {
    margin-bottom: 8px;
  }

  a {
    color: #BFC0C0;
    text-decoration: none;

    &::visited {
      color: #BFC0C0;
    }
  }
`