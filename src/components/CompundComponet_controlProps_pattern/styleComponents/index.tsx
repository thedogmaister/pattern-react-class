import { styled } from "styled-components";

export const ContainerShoppingCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProductCardSytle = styled.div`
  background-color: grey;
  border-radius: 15px;
  color: black;
  padding-bottom: 5px;
  width: 250px;
  margin-right: 5px;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ContainerButtons = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
`;

export const ButtonMinus = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;
  font-size: 20px;
  width: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonAdd = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 0px 5px 5px 0px;
  font-size: 20px;
  width: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CountLabel = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-size: 20px;
  height: 23.5px;
  text-align: center;
  width: 30px;
`;

export const SoppingCard = styled.div`
  position: fixed;
  top: 0px;
  right: 10px;
`;
