import { useState } from "react"

const Button = (props) => {

    return (
        <button className={props.selected === props.filter? 'active': ''} onClick={() => props.onSelectFilter(props.filter)}>{props.filter}</button>
    )
}

export default Button;