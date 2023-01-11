import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import('./ArticleForm.css');

export default function ArticleForm({ SendData, article = {
    title: '',
    body: '',
}, }) {

    const validators = Yup.object().shape({
        title: Yup.string().required('Title is required').min(3).max(15),
        body: Yup.string().required('Body is required').min(3).max(50),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validators)
    });

    const onSubmit = data => {
        SendData(data);
    };

    useEffect(() => {
        setValue('title', article.title);
        setValue('body', article.body);
    }, [article]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title: </label>
                <input
                    name="title"
                    type="text"
                    {...register('title')} />
                <div className="error">{errors.title?.message}</div>

                <label>Body: </label>
                <textarea name="body" cols="30" rows="10" {...register('body')} />
                <div className="error">{errors.body?.message}</div>

                <button type="submit">SEND</button>
            </form>
        </div>
    );
}

ArticleForm.propTypes = {
    SendData: propTypes.func.isRequired,
    article: propTypes.object
}