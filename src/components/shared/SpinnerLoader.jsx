import React from 'react';
import { Circles, InfinitySpin, Triangle } from 'react-loader-spinner';

//Style
import styled from "./SpinnerLoader.module.css";

const SpinnerLoader = () => {
    return (
        <div className={ styled.spinnerLoader } >
            <Triangle
                height="100%"
                width="100%"
                color="#FF0000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default SpinnerLoader;