import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface RedirectToProps {
    path: string
}

function RedirectTo({ path }: RedirectToProps) {
    let navigation = useNavigate();

    useEffect(() => {
        navigation(path);
    }, []);
    return <div></div>;
}

export default RedirectTo