import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  border: 0 solid;
  padding: 14px 0;
  font-weight: 700;
  color: #fff;

  transition: background 0.2s ease-in;

  &.primary {
    background: #EF8354;

    &:active {
      background: ${shade(0.2, '#EF8354')}
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid #fff;

    &:active {
      background: #fff;
      color: #4F5D75;
    }
  }
`