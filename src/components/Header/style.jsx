import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  position: fixed;
  top: 0;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.7s ease-in-out;
  width: 100%;
  min-height: 60px;

  @media screen and (max-width: 800px) {
    gap: 10px;
  }

  img {
    width: 40%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`

export const Li = styled.li`
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  font-size: 24px;
  position: relative;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.6s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
