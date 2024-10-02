const Header = ({courses}) => {
    return (
      <div>    
        {courses.map( course => {
            return(
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <Content parts={course.parts}/>
                    <Total parts={course.parts}/>
                </div>
            )
        })}
      </div>
    )
}

const Part = ({name,exercises}) => {
    return (
      <>
        <p>{name} {exercises}</p>
      </>
    )
}

const Content = ({parts}) => {

    return (
        parts.map((part) => {
            return <Part key={part.id} name={part.name} exercises={part.exercises} />
        })
    )
}

const Total = ({parts}) => {
    return (
        <>
            <p>
                <b>total of {' '}
                {parts.reduce( (acc,part) => acc + part.exercises,0)} 
                {' '} exercises
                </b>
            </p>
        </>
    )
}


const Course = ({courses}) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            <Header courses={courses} />
        </div>
    )
}

export default Course