const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, units }) => {
  return (
    <p>
      {name} - {units}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} units={parts[0].units} />
      <Part name={parts[1].name} units={parts[1].units} />
      <Part name={parts[2].name} units={parts[2].units} />
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.units, 0)

  return <p>Total units - {total}</p>
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      {name} - {courseCode} - {section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
      {
        name: 'Information Management 2',
        units: 3
      },
      {
        name: 'Technopreneurship',
        units: 3
      },
      {
        name: 'Project Management for IT',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Abigail G. Rodrigo"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  )
}

export default App










//1.2
// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.name} - {props.exercises} units
//     </p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part name={props.part1} exercises={props.exercises1} />
//       <Part name={props.part2} exercises={props.exercises2} />
//       <Part name={props.part3} exercises={props.exercises3} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Total Units: {props.exercises1 + props.exercises2 + props.exercises3}
//     </p>
//   )
// }

// const App = () => {
//   const course = 'Bachelor of Science in Information Technology'
//   const part1 = 'Data Analytics'
//   const exercises1 = 3
//   const part2 = 'Project Management for IT'
//   const exercises2 = 3
//   const part3 = 'Information Management 2'
//   const exercises3 = 3

//   return (
//     <div>
//       <Header course={course} />

//       <Content
//         part1={part1}
//         exercises1={exercises1}
//         part2={part2}
//         exercises2={exercises2}
//         part3={part3}
//         exercises3={exercises3}
//       />

//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />

//       <p>Abigail G. Rodrigo - CSIT340 - G5</p>
//     </div>
//   )
// }

// export default App





//1.1
// const App = () => {
//   const course = 'CSIT340 - Industry Elective'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App