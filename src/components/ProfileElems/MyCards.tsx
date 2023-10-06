import React, {useState} from "react";
import { SCMyCards } from "./ProfileElems.style";
import { AppButton } from "../UI/AppButton/AppButton";
import { Card } from "./Card";
import { useForm } from "react-hook-form";
import { AppModal } from "../UI/AppModal/AppModal";

interface IMyCardsProps {}

export const MyCards = ({}: IMyCardsProps) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <SCMyCards>
      <h5>Мои карты</h5>
      <Card />
      <Card />
      <AppButton buttonLabel="Добавить карту" isDisabled={false}  onClick={openModal}/>
      <AppModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </SCMyCards>
  );
};
