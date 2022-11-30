import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Colors.text.white};
`
export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`
export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:item:nth-child(1),
  item:nth-child(2),
  item:nth-child(3) {
    margin-left: 40px;
  }
`
