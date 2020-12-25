import Image from './Image'

const ProjectList = (props) => {
    return (
        <div className={'images'}>
            {props.projects.map((project, index) => <Image img={project.img} key={index}/>)}
        </div>
        
    )
}

export default ProjectList