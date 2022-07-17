import styled from "styled-components";

type sideBarType={
    open:boolean;
}

export const Sidebar = styled.div<sideBarType>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top:0;
  height: 100vh;
  width: ${(props) => props.open ? "200px" : "0"};
  transition: width .3s;
  background-color: white;
  border-right: 1px solid #E6ECF8;
  z-index: 2;

  @media (min-width: 701px) {
    display: none;
  }
`;

export const Hamburger = styled.div<sideBarType>`
  position: relative;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  
  & span {
    position: absolute;
    width: 80%;
    height: 2px;
    border: 1px solid black;
    background-color: black;
    border-radius: 50px;
    transition: 0.3s ease;
  }
  
  & .top-line{
    top: ${props => props.open ? "50%" : "30%"};
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.open && 'rotate(45deg)'};
  }

  & .mid-line{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.open && 'translateX(20px)'};
    opacity: ${props => props.open ? "0" : "1"};
  }

  & .bottom-line{
    top: ${props => props.open ? "50%" : "70%"};;
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.open && 'rotate(-45deg)'};
  }
`;

export const MainContent = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 225px;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  
  & div{
    width: 200px;
    height: 40px;
  }
  
  & .item{
    display: flex;
    letter-spacing: 1px;
    transition: 0.2s ease-out;
    cursor: pointer;
    font-family: 'Spectral', serif;
    font-size: 1.3rem;
  }
  
  & .item:hover{
    border-right: 3px solid #7510F7;
    background-color: #e6e6e6;
  }
  
  & .icon{
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  & .item-text{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;