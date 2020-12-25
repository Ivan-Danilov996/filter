import Button from './Button'

const Toolbar = (props) => {
    return (
        <div className={'filter'}>
           {props.filters.map((o, index) => <Button key={index} filter={o} onSelectFilter = {props.onSelectFilter} selected={props.selected}/>)}
        </div>
    )
}

export default Toolbar