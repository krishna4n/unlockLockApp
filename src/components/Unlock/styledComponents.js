import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const ImageContainer = styled.img`
  height: 100px;
  width: 100px;
`

export const LockText = styled.p`
  font-family: Roboto;
  color: #ffffff;
`

export const ImageLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;
`

export const ButtonContainer = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  outline: none;
`
