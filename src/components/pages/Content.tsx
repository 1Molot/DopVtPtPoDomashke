import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps = {
    heading: string,
    pages: string
}

export const Content = (props: ContentTypeProps) => {
    const {heading, pages} = props

    const navigate = useNavigate()

    const MainPageHandler = () => {
        navigate('/page/0')
    }
    const ComeBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={MainPageHandler}>Main Page</button>
            <button onClick={ComeBackHandler}>ComeBack</button>
        </div>
    );
};

