import React from "react";
import Card from './Card'


const ExerciseList = ({exercises}) => (
    <div>
        {exercises.map((exercise) => (            
            <Card
                key={exercise.id}
                {...exercise}
                /*
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
                */
            />           
        ))}
    </div>
)

/* function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map((exercise) => {
        return (
          <Card
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
          />
        );
      })}
    </div>
  );
} */

export default ExerciseList;
