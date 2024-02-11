import React from 'react';

// export default function Todo({task, isDone}){
//     return (
//         <div>
//             <li>Task : {task}</li>
//         </div>
//     );
// }

// Conditional Rendering Option - 1
// export default function Todo({task, isDone}){
//         if (isDone === true) {
//             return <li>Finished : {task}</li>
//         }
//         else {
//             return <li>Work One : {task}</li>
//         }
// }

// Conditional Rendering Option - 2
// export default function Todo({task, isDone}){
//     if (isDone) {
//         return <li>Finished : {task}</li>
//     }
//     return <li>Work One : {task}</li>
// }

// Conditional Rendering Option - 3
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }

// Conditional Rendering Option - 4 : &&
// export default function Todo({task, isDone}){
//     return (
//         <div>
//             <li>{task} {isDone && ' : Done'}</li>
//         </div>
//     );
// }

// Conditional Rendering Option - 5 : ||
// export default function Todo({task, isDone}){
//     return (
//         <div>
//             <li>{task} {isDone || ' : Do It'}</li>
//         </div>
//     );
// }

// Conditional Rendering Option - 6
    export default function Todo({task, isDone}){
        let listItem;
        if (isDone) {
            listItem = <li>Finished : {task}</li>
        }
        else {
            listItem = <li>Work One : {task}</li>
        }
    return listItem
}