import React, { useState } from "react";
import Modal from 'react-modal';
import { AppInput } from "../AppInput/AppInput";
import { AppButton } from "../AppButton/AppButton";
import * as yup from 'yup'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

interface RegistrationForm {
    username: string
    usercard: string
}

const registrationFormSchema = yup.object({
    username: yup.string().required('Обязательно нужно указать имя'),
    usercard: yup.string().required('Обязательно нужно указать название карты')
})

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface AppModalProps {
    modalIsOpen: boolean
    closeModal: () => void
    onAddCard?: () => void
}


export const AppModal = ({ modalIsOpen, closeModal}: AppModalProps) => {
    const { control, handleSubmit, formState: {errors} } = useForm<RegistrationForm>({
        resolver: yupResolver(registrationFormSchema),
        defaultValues: {
            username: '',
            usercard: ''
        }
    })

    const onRegistrationSubmit = (data: any) => console.log(data)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Добавление комментариев"
        >
            <AppButton buttonLabel="close" isDisabled={false} onClick={closeModal}></AppButton>
            <div>Добавление карты</div>
            <form onSubmit={handleSubmit(onRegistrationSubmit)}>
                <Controller 
                    name="username" 
                    control={control} 
                    render={({field}) => <AppInput 
                                            type="text" 
                                            {...field}
                                            errorMessage={errors.username?.message}
                                            hasError={errors.username ? true : false}
                                        />}
                />
                <Controller
                    name="usercard"
                    control={control}
                    render={({field}) => <AppInput 
                                            type="text" 
                                            {...field}
                                            errorMessage={errors.usercard?.message}
                                            hasError={errors.usercard ? true : false}    
                                        />}
                />
                <AppButton
                    type="submit"
                    buttonLabel="Добавить карту"
                    isDisabled={!!Object.keys(errors).length}
                />
            </form>
        </Modal>
    )
}