import {useState} from 'react'
import {
  Container,
  ImageContainer,
  LockText,
  ImageLockContainer,
  ButtonContainer,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)
  const currentImage = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLocked ? 'lock' : 'unlock'

  const statusText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  const buttonText = isLocked ? 'Unlock' : 'Lock'

  const buttonClicked = () => {
    setLock(prevState => !prevState)
  }

  return (
    <Container>
      <ImageLockContainer>
        <ImageContainer src={currentImage} alt={altText} />
        <LockText>{statusText} </LockText>
      </ImageLockContainer>
      <ButtonContainer type="button" onClick={buttonClicked}>
        {buttonText}
      </ButtonContainer>
    </Container>
  )
}

export default Unlock
