import React from 'react';

import {ButtonInterface} from '../../interfaces/interfaces';

const Button = ({styles, text}: ButtonInterface) => {
    return (
        <button className={`${styles} text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105`}>
            {text}
        </button>
    )
}

export default Button;